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

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
