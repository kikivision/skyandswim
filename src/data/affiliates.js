// Affiliate destinations — single source of truth for the /go redirector.
//
// Each entry maps a hotel `slug` (used in /go/booking/<slug> and passed to
// HotelCard) to the PLAIN Booking.com property URL. The CJ affiliate wrapping
// (publisher property ID) is applied in src/pages/go/[provider]/[slug].astro,
// so the raw booking.com URLs live here untouched and the affiliate account
// details stay in one place.
//
// To add a hotel to the affiliate program: add its slug here with a `bookingcom`
// property URL, then give the matching hotel object a
// `slug` field in its city page. No slug → HotelCard falls back to the direct
// link, so non-migrated hotels are unaffected.
//
// Sky & Swim runs Booking.com only.

export const AFFILIATE_HOTELS = {
  // --- Miami ---
  '1-hotel-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/1-south-beach.html',
  },
  // Faena is a ground-level oceanfront pool — featured on /notable-pools,
  // not the Miami rooftop list.
  'faena-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/faena-miami-beach.html',
  },
  'nautilus-sonesta-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/nautilus-sonesta-miami-beach.html',
  },
  // Editorial reads "Dua Miami"; rebranded from SLS Brickell in 2024 (same
  // building). Booking.com's URL slug is still the old `sls-brickell`.
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

  // --- Austin ---
  'line-austin': {
    bookingcom: 'https://www.booking.com/hotel/us/the-line-austin.html',
  },
  'w-austin': {
    bookingcom: 'https://www.booking.com/hotel/us/w-austin.html',
  },
  'hotel-van-zandt': {
    bookingcom: 'https://www.booking.com/hotel/us/van-zandt.html',
  },
  'austin-proper': {
    bookingcom: 'https://www.booking.com/hotel/us/austin-proper.html',
  },
  'cambria-austin-downtown': {
    bookingcom: 'https://www.booking.com/hotel/us/cambria-austin-downtown.html',
  },

  // --- Chicago --- (rebuilt: former picks were rooftop bars with no pool)
  'viceroy-chicago': {
    bookingcom: 'https://www.booking.com/hotel/us/viceroy-chicago.html',
  },
  'hoxton-chicago': {
    bookingcom: 'https://www.booking.com/hotel/us/the-hoxton-chicago.html',
  },
  'doubletree-mag-mile': {
    bookingcom: 'https://www.booking.com/hotel/us/doubletree-chicago-magnificent-mile.html',
  },
  'radisson-blu-aqua-chicago': {
    bookingcom: 'https://www.booking.com/hotel/us/radisson-blu-aqua-chicago.html',
  },

  // --- Denver ---
  'halcyon-cherry-creek': {
    bookingcom: 'https://www.booking.com/hotel/us/halcyon-a-in-cherry-creek.html',
  },
  'jacquard-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/the-jacquard-autograph-collection.html',
  },
  'rally-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/the-rally-at-mcgregor-square.html',
  },
  'warwick-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/warwick-denver-denver-co.html',
  },
  'source-hotel-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/the-source.html',
  },

  // --- Nashville ---
  'graduate-nashville': {
    bookingcom: 'https://www.booking.com/hotel/us/graduate-nashville.html',
  },
  'bobby-hotel-nashville': {
    bookingcom: 'https://www.booking.com/hotel/us/bobby.html',
  },

  // --- New Orleans ---
  // "The Barnett, JdV by Hyatt" (rebranded from the Ace Hotel New Orleans).
  // Internal slug key stays 'ace-hotel-new-orleans'; Booking slug too.
  'ace-hotel-new-orleans': {
    bookingcom: 'https://www.booking.com/hotel/us/ace-new-orleans.html',
  },
  'virgin-hotels-new-orleans': {
    bookingcom: 'https://www.booking.com/hotel/us/virgin-hotels-new-orleans.html',
  },

  // --- New York ---
  'william-vale': {
    bookingcom: 'https://www.booking.com/hotel/us/the-william-vale.html',
  },
  '1-hotel-brooklyn-bridge': {
    bookingcom: 'https://www.booking.com/hotel/us/1-brooklyn-bridge.html',
  },
  'arlo-williamsburg': {
    bookingcom: 'https://www.booking.com/hotel/us/the-williamsburg.html',
  },
  // "ModernHaus SoHo" (formerly The James; Jimmy is its rooftop pool/bar).
  // Internal slug key stays 'jimmy-james-soho'; Booking slug is modernhaus-soho.
  'jimmy-james-soho': {
    bookingcom: 'https://www.booking.com/hotel/us/modernhaus-soho.html',
  },
  'gansevoort-meatpacking': {
    bookingcom: 'https://www.booking.com/hotel/us/gansevoort-manhattan.html',
  },
  // "Royalton Park Avenue" — formerly Gansevoort Park Avenue (NoMad).
  'royalton-park-avenue': {
    bookingcom: 'https://www.booking.com/hotel/us/royalton-park-avenue-nyc.html',
  },
  // NOTE: "The Williamsburg Hotel" is intentionally NOT here — it is the SAME
  // building as `arlo-williamsburg` (96 Wythe Ave, rebranded 2023). And
  // "THEhotel at Mandarin Club" is omitted — no matching Booking.com property
  // could be identified (source name appears garbled). Both flagged for review.
};
