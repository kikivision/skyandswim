// Affiliate CTA construction — the one place that decides, per provider, what a
// booking button's href actually is.
//
// Two shapes, deliberately different:
//
//   Booking.com → /go/booking/<slug>/  (our interstitial, which auto-forwards)
//   Expedia     → the CJ click URL itself, straight off the button
//
// Expedia does NOT go through /go. Routing an Expedia click through a page that
// auto-forwards (meta refresh + location.replace) is out of policy for the
// program — flagged 2026-08-30, ref. policy 5.1.1 — so the reader's click has to
// land on the CJ click URL directly, with no page of ours in between. The CJ
// redirect from jdoqocy.com to expedia.com is CJ's own tracking hop and is the
// sanctioned mechanism; the interstitial was ours, and is what had to go.
//
// Booking.com keeps the interstitial, unchanged.
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
 */
export function cjDeepLink(provider, url, sid) {
  const base = CJ_BASE[provider];
  if (!base) return url;
  return `${base}?url=${encodeURIComponent(url)}&sid=${encodeURIComponent(sid)}`;
}

/**
 * The booking CTAs for one hotel slug, in display order.
 *
 * Each entry is { provider, label, href } — `provider` is also written onto the
 * anchor as data-affiliate-provider so GA4 attribution no longer depends on the
 * href's shape (it used to key on the /go/<provider>/ path, which the direct
 * Expedia link does not have).
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
      href: `/go/booking/${slug}/`,
    });
  }
  return ctas;
}
