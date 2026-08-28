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
  // Plain property URL only. Karen supplied a full Booking.com search link on
  // 2026-08-25 carrying a session id, a third-party `aid`/`label` pair, and
  // fixed check-in dates — all stripped, because /go/[provider] applies OUR CJ
  // property ID and a foreign aid would hand the commission elsewhere.
  'the-betsy-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/the-betsy.html',
  },
  // --- New York ---
  'hotel-indigo-williamsburg': {
    bookingcom: 'https://www.booking.com/hotel/us/indigo-williamsburg-brooklyn.html',
  },
  'margaritaville-times-square': {
    bookingcom: 'https://www.booking.com/hotel/us/margaritaville-resort-times-square.html',
  },
  'the-tony-hotel-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/thetonyhotelsouthbeach.html',
  },
  // Booking's slug encodes the apostrophe as -39- (&#39;). Not a typo.
  'kimpton-anglers-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-angler-39-s-hotel.html',
  },
  'kimpton-palomar-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-palomar-south-beach.html',
  },
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
    expedia: 'https://www.expedia.com/Chicago-Hotels-DoubleTree-By-Hilton-Chicago-Magnificent-Mile.h21152.Hotel-Information',
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
    expedia: 'https://www.expedia.com/New-York-Hotels-The-William-Vale.h11971622.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Dallas-Hotels-The-Joule.h2004999.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Phoenix-Hotels-Canopy-By-Hilton-Scottsdale-Old-Town.h54159544.Hotel-Information',
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
    expedia: 'https://www.expedia.com/San-Diego-Hotels-InterContinental-San-Diego.h26984236.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Houston-Hotels-Thompson-Houston.h93257980.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Philadelphia-Hotels-W-Philadelphia.h45967702.Hotel-Information',
  },
  'windsor-suites-philadelphia': {
    bookingcom: 'https://www.booking.com/hotel/us/the-windsor-suites.html',
    expedia: 'https://www.expedia.com/Philadelphia-Hotels-The-Windsor-Suites.h201099.Hotel-Information',
  },
  'sonesta-rittenhouse-philadelphia': {
    bookingcom: 'https://www.booking.com/hotel/us/sonesta-philadelphia-downtown-rittenhouse-square.html',
    expedia: 'https://www.expedia.com/Philadelphia-Hotels-Sonesta-Philadelphia-Rittenhouse-Square.h4470.Hotel-Information',
  },
  'wyndham-philadelphia-historic': {
    bookingcom: 'https://www.booking.com/hotel/us/wyndham-philadelphia-historic-district.html',
    expedia: 'https://www.expedia.com/Philadelphia-Hotels-Wyndham-Philadelphia-Historic-District.h15646.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Philadelphia-Hotels-Four-Seasons-Hotel-Philadelphia-At-Comcast-Center.h27430045.Hotel-Information',
  },
  'marriott-marquis-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/marriott-marquis-houston.html',
    expedia: 'https://www.expedia.com/Houston-Hotels-Marriott-Marquis-Houston.h14986044.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Atlanta-Hotels-Omni-Hotel-At-The-Battery-Atlanta.h19780605.Hotel-Information',
  },
  'thompson-san-antonio': {
    bookingcom: 'https://www.booking.com/hotel/us/thompson-san-antonio.html',
  },
  'omni-louisville': {
    bookingcom: 'https://www.booking.com/hotel/us/omni-louisville.html',
  },
  'ac-hotel-tucson': {
    bookingcom: 'https://www.booking.com/hotel/us/ac-tucson-downtown.html',
    expedia: 'https://www.expedia.com/Tucson-Hotels-AC-Hotel-By-Marriott-Tucson-Downtown.h19218413.Hotel-Information',
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
