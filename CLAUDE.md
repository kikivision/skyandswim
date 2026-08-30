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

**The two providers link differently, and this is not cosmetic:**

| Provider | CTA href | Why |
| --- | --- | --- |
| Booking.com | `/go/booking/<slug>/` — our interstitial, which auto-forwards | Keeps affiliate hygiene + click tracking in one page |
| Expedia | the CJ click URL itself, directly on the anchor | An Expedia click may **not** pass through a page of ours that auto-forwards — out of policy for that program (flagged 2026-08-30, ref. policy 5.1.1) |

Do not "tidy" Expedia back onto `/go`. The `getStaticPaths` in the redirector
generates Booking.com paths only, on purpose.

- `src/data/affiliates.js` — single source of truth: hotel `slug` → plain
  `bookingcom` and (optionally) `expedia` property URLs, unwrapped.
- `src/lib/affiliate-links.js` — the only place that builds CJ deep links
  (`cjDeepLink`) and decides each provider's CTA href (`affiliateCtas`).
- `src/pages/go/[provider]/[slug].astro` — the Booking.com interstitial.
  `noindex,nofollow`; excluded from the sitemap (see `astro.config.mjs`).
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
href's shape — required, since the Expedia href is a bare `jdoqocy.com` click URL
with no `/go/` path to match. The CJ `sid` carries the hotel slug so a commission
names the page that earned it.

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
