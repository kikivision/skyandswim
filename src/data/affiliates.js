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

  // --- Denver ---
  'halcyon-cherry-creek': {
    bookingcom: 'https://www.booking.com/hotel/us/halcyon-a-in-cherry-creek.html',
  },
  'jacquard-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/the-jacquard-autograph-collection.html',
  },
  'warwick-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/warwick-denver-denver-co.html',
  },

  // --- Nashville ---
  'graduate-nashville': {
    bookingcom: 'https://www.booking.com/hotel/us/graduate-nashville.html',
  },
  // "The Nash" — rebranded from Bobby Hotel 2026-03-01 (Opal Collection).
  // Booking.com still serves it at the legacy /bobby.html slug; re-verify.
  'the-nash-nashville': {
    bookingcom: 'https://www.booking.com/hotel/us/bobby.html',
  },

  // --- New Orleans ---
  // "The Barnett, JdV by Hyatt" (rebranded from the Ace Hotel New Orleans).
  // Our slug now matches the current name; Booking.com still uses the Ace slug.
  'the-barnett-new-orleans': {
    bookingcom: 'https://www.booking.com/hotel/us/ace-new-orleans.html',
  },
  'virgin-hotels-new-orleans': {
    bookingcom: 'https://www.booking.com/hotel/us/virgin-hotels-new-orleans.html',
  },

  // --- New York ---
  'william-vale': {
    bookingcom: 'https://www.booking.com/hotel/us/the-william-vale.html',
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

  // --- Dallas ---
  'the-joule-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/the-joule.html',
  },
  'thompson-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/thompson-dallas.html',
  },
  'hotel-swexan-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/swexan.html',
  },
  'w-dallas-victory': {
    bookingcom: 'https://www.booking.com/hotel/us/w-dallasvictory-dallas-texas.html',
  },
  'statler-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/the-statler-dallas-curio-collection-by-hilton.html',
  },
  'the-adolphus-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/the-adolphus.html',
  },

  // --- Los Angeles ---
  'conrad-los-angeles': {
    bookingcom: 'https://www.booking.com/hotel/us/conrad-los-angeles.html',
  },
  // Rebranded from Thompson Hollywood (Hyatt) to The Hollywood Grande,
  // Autograph Collection (Marriott) on 2025-07-29. Booking's old
  // thompson-hollywood URL 301s here; pointing straight at the canonical one
  // keeps the affiliate click from taking an extra hop.
  'hollywood-grande': {
    bookingcom: 'https://www.booking.com/hotel/us/the-hollywood-grande.html',
  },
  'santa-monica-proper': {
    bookingcom: 'https://www.booking.com/hotel/us/santa-monica-proper-hotel-a-member-of-design-hotels.html',
  },
  'godfrey-hollywood': {
    bookingcom: 'https://www.booking.com/hotel/us/the-godfrey-hollywood.html',
  },
  'kimpton-everly-hollywood': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-everly.html',
  },
  'hoxton-dtla': {
    bookingcom: 'https://www.booking.com/hotel/us/the-hoxton-downtown-los-angeles.html',
  },

  // --- Phoenix / Scottsdale ---
  'palomar-phoenix': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-hotel-palomar-phoenix.html',
  },
  'canopy-scottsdale': {
    bookingcom: 'https://www.booking.com/hotel/us/canopy-by-hilton-scottsdale-old-town.html',
  },
  'ac-hotel-tempe': {
    bookingcom: 'https://www.booking.com/hotel/us/ac-by-marriott-phoenix-tempe-downtown.html',
  },

  // --- San Diego ---
  'pendry-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/pendry-san-diego.html',
  },
  'andaz-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/andaz-san-diego.html',
  },
  'intercontinental-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/intercontinental-hotels-san-diego.html',
  },
  // "Margaritaville Hotel San Diego Gaslamp Quarter" — rebranded from Kimpton
  // Solamar in Aug 2023. Booking.com URL below is the legacy Kimpton slug and
  // has NOT been re-verified since the rebrand.
  'margaritaville-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/solamar-a-kimpton.html',
  },
  'hard-rock-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/hard-rock-san-diego-san-diego.html',
  },

  // --- Houston --- (verified 2026-07-18)
  'thompson-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/thompson-houston.html',
  },
  'four-seasons-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/four-seasons-houston.html',
  },
  // Booking's slug is apostrophe-mangled but resolves to the right property.
  'la-colombe-dor-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/la-colombe-d-39-or-amp-restaurant.html',
  },
  // Legacy slug: the property was Hotel Alessandra before the Laura rebrand.
  'the-laura-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/alessandra.html',
  },

  // --- Philadelphia --- (verified 2026-07-18)
  'w-philadelphia': {
    bookingcom: 'https://www.booking.com/hotel/us/w-philadelphia.html',
  },
  'windsor-suites-philadelphia': {
    bookingcom: 'https://www.booking.com/hotel/us/the-windsor-suites.html',
  },
  'sonesta-rittenhouse-philadelphia': {
    bookingcom: 'https://www.booking.com/hotel/us/sonesta-philadelphia-downtown-rittenhouse-square.html',
  },
  'wyndham-philadelphia-historic': {
    bookingcom: 'https://www.booking.com/hotel/us/wyndham-philadelphia-historic-district.html',
  },

  // --- Washington DC --- (verified 2026-07-18)
  // Legacy slug (and Booking's own misspelling): the property was The Liaison
  // Capitol Hill before YOTEL took it over.
  'yotel-washington-dc': {
    bookingcom: 'https://www.booking.com/hotel/us/the-liason-capitol-hill.html',
  },
  'hotel-zena-dc': {
    bookingcom: 'https://www.booking.com/hotel/us/hotel-zena-a-viceroy-urban-retreat.html',
  },

  // --- Beyond the Cities (one-off standouts, /beyond-the-cities) ---
  'four-seasons-philadelphia': {
    bookingcom: 'https://www.booking.com/hotel/us/four-seasons-philadelphia-at-comcast-center.html',
  },
  'marriott-marquis-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/marriott-marquis-houston.html',
  },
  'conrad-fort-lauderdale': {
    bookingcom: 'https://www.booking.com/hotel/us/conrad-fort-lauderdale-beach.html',
  },
  'four-seasons-seattle': {
    bookingcom: 'https://www.booking.com/hotel/us/four-seasons-seattle.html',
  },
  'intercontinental-dc-wharf': {
    bookingcom: 'https://www.booking.com/hotel/us/intercontinental-washington-dc-the-wharf.html',
  },
  'market-pavilion-charleston': {
    bookingcom: 'https://www.booking.com/hotel/us/market-pavillion.html',
  },
  'perry-lane-savannah': {
    bookingcom: 'https://www.booking.com/hotel/us/perry-lane-a-luxury-collection-savannah.html',
  },
  'omni-battery-atlanta': {
    bookingcom: 'https://www.booking.com/hotel/us/omni-at-the-battery-atlanta.html',
  },
  'thompson-san-antonio': {
    bookingcom: 'https://www.booking.com/hotel/us/thompson-san-antonio.html',
  },
  'omni-louisville': {
    bookingcom: 'https://www.booking.com/hotel/us/omni-louisville.html',
  },
  'ac-hotel-tucson': {
    bookingcom: 'https://www.booking.com/hotel/us/ac-tucson-downtown.html',
  },
  // NOTE: "Cambria Downtown Phoenix" was REMOVED (2026-07-18). Its own amenity
  // list says "Sun Deck" with no pool; the only pool claim anywhere is a Dec
  // 2019 pre-opening press release, and independent copy calls the water a
  // "reflecting pool". Looks value-engineered out before opening.
  //
  // NOTE: "Radisson Blu Aqua Chicago" was REMOVED (2026-07-18). The lap pool is
  // INDOOR and 25 yards; the outdoor pool sits on a 3rd-level podium deck shared
  // with Aqua Tower residents. Fails the elevation bar.
  //
  // NOTE: "Soho Beach House" was REMOVED (2026-07-18) on review quality. The
  // audit had separately flagged that its only ELEVATED pool is an 8th-floor
  // plunge, the big 100ft pool is ground level, and rooftop access is members
  // 21+ only (guests get in by buying a Soho Friends membership).
  //
  // NOTE: "Royalton Park Avenue" was REMOVED (2026-07-18) because the hotel is
  // CLOSED — its own site says it closed 2026-07-05, reopening December 2026 as
  // something "entirely new," so expect a rebrand. Revisit in December; if the
  // pool survives the reimagining it likely needs a fresh entry under the new
  // name rather than this one restored. ResortPass still showed live-looking
  // inventory for it after the closure, so don't trust aggregators here.
  //
  // NOTE: "1 Hotel Brooklyn Bridge" was REMOVED (2026-07-18). 1hotels.com calls
  // it a "plunge pool" on its own rooftop page, and reviewers put it at roughly
  // 3–4ft; management conceded the size limits publicly. That fails the wade-in
  // rule, same call as The Source in Denver. Do not re-add without evidence the
  // pool itself changed. See docs/rejected-hotels.md.
  //
  // NOTE: "The Williamsburg Hotel" is intentionally NOT here — it is the SAME
  // building as `arlo-williamsburg` (96 Wythe Ave, rebranded 2023). And
  // "THEhotel at Mandarin Club" is omitted — no matching Booking.com property
  // could be identified (source name appears garbled). Both flagged for review.
};
