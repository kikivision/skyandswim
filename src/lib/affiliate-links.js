// Affiliate CTA construction — the one place that turns a hotel slug into
// booking buttons.
//
// Both providers link the same way: the anchor carries the Commission Junction
// click URL directly, and the reader goes straight from our page to CJ.
//
// There used to be an interstitial at /go/<provider>/<slug> — a page of ours
// that auto-forwarded (meta refresh + location.replace). It was removed
// 2026-08-30: routing an affiliate click through an auto-forwarding page of
// ours is out of policy (ref. 5.1.1). Expedia was the flagged case; Booking.com
// followed because both run through the same CJ property and the interstitial
// had, by then, stopped earning its keep — click tracking moved onto data
// attributes and CJ wrapping moved into this file, so the page was doing
// nothing except adding a hop.
//
// Do not reintroduce a redirector for either provider. The CJ hop from
// jdoqocy.com to the booking site is CJ's own tracking redirect and is the
// sanctioned mechanism; the interstitial was ours, and that was the problem.
import { AFFILIATE_HOTELS } from '../data/affiliates.js';

// CJ deep-link click bases for the Sky & Swim promotional property — Property ID
// 101819827, its OWN id, distinct from jetandswim's 101767900, so commissions
// attribute to skyandswim.com. Booking.com AID 17293132 · Expedia AID 10581071.
//
// CJ hands out interchangeable click domains (jdoqocy.com, dpbolvw.net,
// anrdoezrs.net...). Both are normalised to jdoqocy.com so the pair reads as a
// pair. The PID/AID path carries the attribution, not the hostname.
export const CJ_BASE = {
  booking: 'https://www.jdoqocy.com/click-101819827-17293132',
  expedia: 'https://www.jdoqocy.com/click-101819827-10581071',
};

/**
 * Wrap a plain provider URL in the CJ deep link.
 *
 * `sid` is CJ's "Site ID" — publisher-side sub-tracking that comes back in the
 * Commission Detail report. We pass the hotel slug, so a commission names the
 * page that earned it instead of arriving as an anonymous "Booking.com, $197".
 * CJ's constraints: it must be a query parameter at the END of the click URL,
 * kept separate from `url`, and 64 characters or fewer. Longest slug here is 32.
 *
 * BOOKING.COM ONLY. Expedia deeplinks go out unmodified — added 2026-09-02.
 *
 * Expedia's affiliate policy 8.2 reads:
 *
 *   "If Expedia provides you with access to the Deeplink Generator, you agree
 *    not alter, modify or otherwise change the Deeplinks created by the tool."
 *
 * Appending `sid` changes the generated deeplink. The argument for keeping it
 * was that 8.1's stated concern is obscuring the destination ("you may not use
 * a URL shortener that obscures that the Program Link links to the Expedia
 * Sites"), which a trailing `sid` plainly does not do — but 8.1's example does
 * not govern 8.2, and 8.2 carries no such softener. It is a flat prohibition on
 * modifying a generated deeplink, and of everything in the program terms it is
 * the clearest text against us.
 *
 * Booking.com KEEPS its `sid`: its terms carry no equivalent clause, and it is
 * the provider whose commissions are hardest to attribute without one.
 *
 * The cost is per-page attribution inside CJ's Commission Detail report, for
 * Expedia only. GA4 is unaffected — click attribution keys on the
 * data-affiliate-provider / data-affiliate-slug attributes, not the href.
 *
 * Do not reintroduce `sid` on Expedia without written confirmation from the
 * Expedia affiliate manager. The same change was made on jetandswim (PR #34).
 */
export function cjDeepLink(provider, url, sid) {
  const base = CJ_BASE[provider];
  if (!base) return url;
  const link = `${base}?url=${encodeURIComponent(url)}`;
  if (provider === 'expedia') return link;
  return `${link}&sid=${encodeURIComponent(sid)}`;
}

/**
 * The booking CTAs for one hotel slug, in display order.
 *
 * Each entry is { provider, label, href } — `provider` is also written onto the
 * anchor as data-affiliate-provider, which is how GA4 attributes the click.
 * That has to come off an attribute rather than the href, because every href
 * here is now a bare jdoqocy.com click URL with no readable shape to match on.
 *
 * Expedia first. Booking.com's CJ attribution is session-only — the reader has
 * to book before the tab closes — while Expedia's window is materially longer,
 * so it is both the likelier earner and the better default. On Jet & Swim, where
 * both have run side by side, Expedia takes ~2 clicks to Booking's 1.
 */
export function affiliateCtas(slug) {
  const affiliate = slug ? AFFILIATE_HOTELS[slug] : undefined;
  if (!affiliate) return [];

  const ctas = [];
  if (affiliate.expedia) {
    ctas.push({
      provider: 'expedia',
      label: 'Expedia',
      href: cjDeepLink('expedia', affiliate.expedia, slug),
    });
  }
  if (affiliate.bookingcom) {
    ctas.push({
      provider: 'booking',
      label: 'Booking.com',
      href: cjDeepLink('booking', affiliate.bookingcom, slug),
    });
  }
  return ctas;
}
