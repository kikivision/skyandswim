## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Affiliate links (Booking.com + Expedia, via CJ)

Hotel booking CTAs are Commission Junction (CJ) affiliate links. Sky & Swim's CJ
promotional property ID is **101819827** — its own; do NOT reuse jetandswim's
(101767900). Two providers: **Booking.com** (AID 17293132) on every affiliate
hotel, **Expedia** (AID 10581071) on the subset that has an Expedia property ID.

**No redirect page of ours sits in the click path.** Both providers' CTAs carry
the CJ click URL directly on the anchor, and the reader goes straight from our
page to CJ. An affiliate click may not pass through an auto-forwarding page we
host (ref. policy 5.1.1) — so the old `/go/<provider>/<slug>` interstitial was
removed 2026-08-30 (Expedia first, then Booking.com), along with its sitemap
exclusion. `public/_redirects` sends any surviving `/go/*` URL home.

Do not reintroduce a redirector for either provider. The CJ hop from
`jdoqocy.com` onward is CJ's own tracking redirect and is the sanctioned
mechanism; the interstitial was ours, and that was the problem.

- `src/data/affiliates.js` — single source of truth: hotel `slug` → plain
  `bookingcom` and (optionally) `expedia` property URLs, unwrapped.
- `src/lib/affiliate-links.js` — the only place that builds CJ deep links
  (`cjDeepLink`) and assembles a hotel's CTAs (`affiliateCtas`).
- `src/components/HotelCard.astro` / `HotelDetail.astro` — render whatever
  `affiliateCtas(slug)` returns, `rel=sponsored`. Expedia is listed first (its
  attribution window is longer than Booking's session-only one). No affiliate
  entry → falls back to the direct `bookingUrl`, unchanged.

**To add a hotel to the affiliate program:** add `slug: { bookingcom: '<plain
booking.com property URL>', expedia: '<plain expedia property URL>' }` to
`affiliates.js` (Expedia optional), then add a matching `slug` field to that
hotel's object in its city page (`src/pages/cities/*.astro`). Strip any `aid`,
`label`, or session params off pasted URLs — a foreign aid hands the commission
elsewhere.

**Click tracking:** CTAs carry `data-affiliate-provider` / `data-affiliate-slug`,
which the tracker in `BaseLayout.astro` reads to fire a GA4 `affiliate_click`
event (property 544338209). Attribution keys on those attributes, not on the
href — required, since every affiliate href is now a bare `jdoqocy.com` click URL
with no readable path to match. Keep the attributes on any new booking CTA or the
click degrades to an anonymous `outbound_click`. The CJ `sid` carries the hotel
slug so a commission names the page that earned it.

## Newsletter — "The Dispatch" (Netlify Forms)

The signup lives in `src/components/NewsletterSection.astro` and is wired to
**Netlify Forms** — a form-collection backend, **not** an email sender. It
captures addresses; sending is still manual/BYO (see below).

How it works:

- The `<form>` carries `name="dispatch"`, `data-netlify="true"`, a hidden
  `form-name` input, and a `bot-field` honeypot.
- **`public/__forms.html`** is a plain static registration form that guarantees
  detection. Netlify's build scanner does not reliably parse Astro's compiled
  output (hydration markers / scoped attrs), so the real form went undetected on
  the first deploy. This file ships verbatim from `public/`, the scanner reads it
  cleanly, and Netlify matches live submissions on the `form-name` field. Keep its
  form name + field names in sync with `NewsletterSection.astro`.
- A progressive-enhancement `<script>` intercepts submit, POSTs to `/` via `fetch`,
  and swaps the form for an inline "You're in ✓" confirmation (`.signup-status`).
- **Submissions only record on the deployed Netlify site.** Locally, `astro dev`
  just returns 200 — nothing is stored. Don't expect dev submits to appear.
- Submissions collect under **Netlify dashboard → Forms → `dispatch`**, exportable
  as CSV. Free plan allows 100 submissions/month.

Gotchas:

- If the form markup changes, keep `name="dispatch"` and the hidden `form-name`
  value in sync — Netlify keys the submission store on that name.
- **Form detection** must be enabled in Netlify site settings (Forms). On by
  default, but verify after the first deploy or submissions silently vanish.
- **Get notified on signup:** Netlify → Forms → Settings & usage → Form
  notifications → add an email/Slack/webhook notification. Free, per-submission.

Next step (not built): this does not *send* the Dispatch. To email subscribers,
either send manually from the exported CSV (BCC the list) or connect an ESP
(Mailchimp/Kit/Buttondown/etc.) and migrate the list.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
