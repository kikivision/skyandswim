## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Affiliate links (Booking.com via /go)

Hotel booking CTAs are Commission Junction (CJ) affiliate links. Sky & Swim's CJ
promotional property ID is **101819827** — its own; do NOT reuse jetandswim's
(101767900). **Booking.com only** (Expedia deliberately excluded).

- `src/data/affiliates.js` — single source of truth: hotel `slug` → plain
  booking.com property URL.
- `src/pages/go/[provider]/[slug].astro` — wraps that URL in the CJ deep link and
  redirects. `noindex,nofollow`; excluded from the sitemap (see `astro.config.mjs`).
- `src/components/HotelCard.astro` — a hotel with a `slug` prop routes its name +
  CTA through `/go/booking/<slug>` (tracked, `rel=sponsored`); no slug → falls back
  to its direct `bookingUrl`, unchanged.

**To add a hotel to the affiliate program:** add `slug: { bookingcom: '<booking.com
property URL>' }` to `affiliates.js`, then add a matching `slug` field to that
hotel's object in its city page (`src/pages/cities/*.astro`). Clicks fire a GA4
`affiliate_click` event (tracker in `BaseLayout.astro`, GA4 property 544338209).

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
