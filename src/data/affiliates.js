// Affiliate destinations — single source of truth for the /go redirector.
//
// Each entry maps a hotel `slug` (used in /go/<provider>/<slug> and passed to
// HotelCard) to the PLAIN provider property URL. The CJ affiliate wrapping
// (publisher ID + sid) is applied in src/pages/go/[provider]/[slug].astro, so
// the raw booking.com / expedia.com URLs live here untouched and the affiliate
// account details stay in one place.
//
// To add a hotel to the affiliate program: add its slug here with a `bookingcom`
// (and optionally `expedia`) property URL, then give the matching hotel object a
// `slug` field in its city page. No slug → HotelCard falls back to the direct
// link, so non-migrated hotels/cities are unaffected.
//
// Pilot: Miami only. Expand city-by-city once commission tracking is confirmed.

export const AFFILIATE_HOTELS = {
  // --- Miami ---
  '1-hotel-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/1-south-beach.html',
  },
  'faena-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/faena-miami-beach.html',
  },
  'nautilus-sonesta-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/nautilus-sonesta-miami-beach.html',
  },
  // "Dua Miami, Autograph Collection" — rebranded from SLS Brickell in 2024
  // (same building). Booking.com's URL slug is still the old `sls-brickell`.
  'dua-miami': {
    bookingcom: 'https://www.booking.com/hotel/us/sls-brickell.html',
  },
  'standard-spa-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/the-standard.html',
  },
  'east-miami': {
    bookingcom: 'https://www.booking.com/hotel/us/east-miami.html',
  },
  'soho-beach-house': {
    bookingcom: 'https://www.booking.com/hotel/us/soho-beach-house.html',
  },
};
