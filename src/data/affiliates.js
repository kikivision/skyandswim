// Affiliate destinations — single source of truth for the /go redirector.
//
// Each entry maps a hotel `slug` to its PLAIN provider property URLs — a
// `bookingcom` key, and optionally an `expedia` one. The CJ affiliate wrapping
// (publisher property ID) is applied in src/pages/go/[provider]/[slug].astro,
// so the raw provider URLs live here untouched and the affiliate account
// details stay in one place.
//
// To add a hotel to the affiliate program: add its slug here with a `bookingcom`
// property URL and an `expedia` one, then give the matching hotel object a
// `slug` field in its city page. Both HotelCard (listing pages) and
// HotelDetail (hotel pages) render straight off this file, so a key added here
// lights up the card and the detail page at once.
//
// A hotel with both providers gets two buttons, Expedia first; one provider
// gets one. Expedia property IDs must be read off the live listing rather than
// derived from the name. Two traps, both seen here: a legacy URL slug after a
// rebrand (the-nash-nashville, the-tony-hotel-south-beach, margaritaville-san-diego,
// nautilus-sonesta-miami-beach, yotel-washington-dc all still sit on their old
// names), and zero-review duplicate listings (austin-proper, hard-rock-san-diego,
// margaritaville-times-square, godfrey-hollywood) — when two ids share a name,
// take the one holding the review history.
//
// Coverage: 71 of 72 as of 2026-08-29. The Booking-only holdout is dua-miami,
// which has no findable Expedia listing under either its current name or its
// former one (SLS Brickell) — it falls back to a single Booking button.

export const AFFILIATE_HOTELS = {
  // --- Miami ---
  '1-hotel-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/1-south-beach.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-1-Hotel-South-Beach.h1790087.Hotel-Information',
  },
  // Faena is a ground-level oceanfront pool — featured on /notable-pools,
  // not the Miami rooftop list.
  // Plain property URL only. Karen supplied a full Booking.com search link on
  // 2026-08-25 carrying a session id, a third-party `aid`/`label` pair, and
  // fixed check-in dates — all stripped, because /go/[provider] applies OUR CJ
  // property ID and a foreign aid would hand the commission elsewhere.
  'the-betsy-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/the-betsy.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-The-Betsy-South-Beach.h424954.Hotel-Information',
  },
  // --- New York ---
  'hotel-indigo-williamsburg': {
    bookingcom: 'https://www.booking.com/hotel/us/indigo-williamsburg-brooklyn.html',
    expedia: 'https://www.expedia.com/New-York-Hotels-Hotel-Indigo-Williamsburg-Brooklyn.h36093308.Hotel-Information',
  },
  'margaritaville-times-square': {
    bookingcom: 'https://www.booking.com/hotel/us/margaritaville-resort-times-square.html',
    expedia: 'https://www.expedia.com/New-York-Hotels-Margaritaville-Resort-Times-Square.h66525849.Hotel-Information',
  },
  'the-tony-hotel-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/thetonyhotelsouthbeach.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-The-Hotel-Of-South-Beach.h201213.Hotel-Information',
  },
  // Booking's slug encodes the apostrophe as -39- (&#39;). Not a typo.
  'kimpton-anglers-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-angler-39-s-hotel.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-Kimpton-Anglers-Hotel.h1620058.Hotel-Information',
  },
  'kimpton-palomar-south-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-palomar-south-beach.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-Kimpton-Hotel-Palomar-South-Beach.h41092245.Hotel-Information',
  },
  'faena-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/faena-miami-beach.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-Faena-Miami-Beach.h10344566.Hotel-Information',
  },
  'nautilus-sonesta-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/nautilus-sonesta-miami-beach.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-Nautilus-By-Arlo.h10560039.Hotel-Information',
  },
  // Editorial reads "Dua Miami"; rebranded from SLS Brickell in 2024 (same
  // building). Booking.com's URL slug is still the old `sls-brickell`.
  'dua-miami': {
    bookingcom: 'https://www.booking.com/hotel/us/sls-brickell.html',
  },
  'standard-spa-miami-beach': {
    bookingcom: 'https://www.booking.com/hotel/us/the-standard.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-The-Standard-Spa-Miami-Beach.h126664.Hotel-Information',
  },
  'east-miami': {
    bookingcom: 'https://www.booking.com/hotel/us/east-miami.html',
    expedia: 'https://www.expedia.com/Miami-Hotels-EAST-Miami.h12078999.Hotel-Information',
  },

  // --- Austin ---
  'line-austin': {
    bookingcom: 'https://www.booking.com/hotel/us/the-line-austin.html',
    expedia: 'https://www.expedia.com/Austin-Hotels-The-LINE-Austin.h23193716.Hotel-Information',
  },
  'w-austin': {
    bookingcom: 'https://www.booking.com/hotel/us/w-austin.html',
    expedia: 'https://www.expedia.com/Austin-Hotels-W-Austin.h3949244.Hotel-Information',
  },
  'hotel-van-zandt': {
    bookingcom: 'https://www.booking.com/hotel/us/van-zandt.html',
    expedia: 'https://www.expedia.com/Austin-Hotels-Hotel-Van-Zandt.h10269315.Hotel-Information',
  },
  'austin-proper': {
    bookingcom: 'https://www.booking.com/hotel/us/austin-proper.html',
    // Expedia carries a second, duplicate listing for this property
    // (h126394897, "Austin Proper Hotel And Residences"). Both self-canonicalise,
    // so the tiebreak is the review history: this one has 466 reviews, the
    // duplicate has none. Verified 2026-08-29.
    expedia: 'https://www.expedia.com/Austin-Hotels-Austin-Proper-Hotel.h33918361.Hotel-Information',
  },
  'cambria-austin-downtown': {
    bookingcom: 'https://www.booking.com/hotel/us/cambria-austin-downtown.html',
    expedia: 'https://www.expedia.com/Austin-Hotels-Cambria-Hotel-Austin-Downtown.h96265159.Hotel-Information',
  },

  // --- Chicago --- (rebuilt: former picks were rooftop bars with no pool)
  'viceroy-chicago': {
    bookingcom: 'https://www.booking.com/hotel/us/viceroy-chicago.html',
    expedia: 'https://www.expedia.com/Chicago-Hotels-Viceroy-Chicago.h18614145.Hotel-Information',
  },
  'hoxton-chicago': {
    bookingcom: 'https://www.booking.com/hotel/us/the-hoxton-chicago.html',
    expedia: 'https://www.expedia.com/Chicago-Hotels-The-Hoxton-Chicago.h34761378.Hotel-Information',
  },
  'doubletree-mag-mile': {
    bookingcom: 'https://www.booking.com/hotel/us/doubletree-chicago-magnificent-mile.html',
    expedia: 'https://www.expedia.com/Chicago-Hotels-DoubleTree-By-Hilton-Chicago-Magnificent-Mile.h21152.Hotel-Information',
  },

  // --- Denver ---
  'halcyon-cherry-creek': {
    bookingcom: 'https://www.booking.com/hotel/us/halcyon-a-in-cherry-creek.html',
    expedia: 'https://www.expedia.com/Denver-Hotels-Halcyon-A-Hotel-In-Cherry-Creek.h14797469.Hotel-Information',
  },
  'jacquard-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/the-jacquard-autograph-collection.html',
    expedia: 'https://www.expedia.com/Denver-Hotels-The-Jacquard.h22278411.Hotel-Information',
  },
  'warwick-denver': {
    bookingcom: 'https://www.booking.com/hotel/us/warwick-denver-denver-co.html',
    expedia: 'https://www.expedia.com/Denver-Hotels-Warwick-Denver.h6852.Hotel-Information',
  },

  // --- Nashville ---
  'graduate-nashville': {
    bookingcom: 'https://www.booking.com/hotel/us/graduate-nashville.html',
    expedia: 'https://www.expedia.com/Nashville-Hotels-Graduate-Nashville.h37604262.Hotel-Information',
  },
  // "The Nash" — rebranded from Bobby Hotel 2026-03-01 (Opal Collection).
  // Booking.com still serves it at the legacy /bobby.html slug; re-verify.
  'the-nash-nashville': {
    bookingcom: 'https://www.booking.com/hotel/us/bobby.html',
    // Editorial reads "The Nash"; it was the Bobby Hotel until it rebranded and
    // joined the Opal Collection on 2026-03-01. Expedia's URL slug is still the
    // old name, and the property ID is unchanged — same pattern as `dua-miami`.
    // Verified 2026-08-29: several Nashville vacation rentals also trade on the
    // "The Nash" name, and none of them is this hotel.
    expedia: 'https://www.expedia.com/Nashville-Hotels-Bobby-Hotel.h21962809.Hotel-Information',
  },

  // --- New Orleans ---
  // "The Barnett, JdV by Hyatt" (rebranded from the Ace Hotel New Orleans).
  // Our slug now matches the current name; Booking.com still uses the Ace slug.
  'the-barnett-new-orleans': {
    bookingcom: 'https://www.booking.com/hotel/us/ace-new-orleans.html',
    expedia: 'https://www.expedia.com/New-Orleans-Hotels-The-Barnett-JDV-By-Hyatt.h13575514.Hotel-Information',
  },
  'virgin-hotels-new-orleans': {
    bookingcom: 'https://www.booking.com/hotel/us/virgin-hotels-new-orleans.html',
    expedia: 'https://www.expedia.com/New-Orleans-Hotels-Virgin-Hotels-New-Orleans.h66150428.Hotel-Information',
  },

  // --- New York ---
  'william-vale': {
    bookingcom: 'https://www.booking.com/hotel/us/the-william-vale.html',
    expedia: 'https://www.expedia.com/New-York-Hotels-The-William-Vale.h11971622.Hotel-Information',
  },
  'arlo-williamsburg': {
    bookingcom: 'https://www.booking.com/hotel/us/the-williamsburg.html',
    expedia: 'https://www.expedia.com/New-York-Hotels-Arlo-Williamsburg.h16007579.Hotel-Information',
  },
  // "ModernHaus SoHo" (formerly The James; Jimmy is its rooftop pool/bar).
  // Internal slug key stays 'jimmy-james-soho'; Booking slug is modernhaus-soho.
  'jimmy-james-soho': {
    bookingcom: 'https://www.booking.com/hotel/us/modernhaus-soho.html',
    expedia: 'https://www.expedia.com/New-York-Hotels-ModernHaus-SoHo.h3681052.Hotel-Information',
  },
  'gansevoort-meatpacking': {
    bookingcom: 'https://www.booking.com/hotel/us/gansevoort-manhattan.html',
    expedia: 'https://www.expedia.com/New-York-Hotels-Gansevoort-Meatpacking.h987554.Hotel-Information',
  },

  // --- Dallas ---
  'the-joule-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/the-joule.html',
    expedia: 'https://www.expedia.com/Dallas-Hotels-The-Joule.h2004999.Hotel-Information',
  },
  'thompson-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/thompson-dallas.html',
    expedia: 'https://www.expedia.com/Dallas-Hotels-THOMPSON-DALLAS.h57077186.Hotel-Information',
  },
  'hotel-swexan-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/swexan.html',
    expedia: 'https://www.expedia.com/Dallas-Hotels-Hotel-Swexan.h91330611.Hotel-Information',
  },
  'w-dallas-victory': {
    bookingcom: 'https://www.booking.com/hotel/us/w-dallasvictory-dallas-texas.html',
    expedia: 'https://www.expedia.com/Dallas-Hotels-W-Dallas-Victory.h1469238.Hotel-Information',
  },
  'statler-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/the-statler-dallas-curio-collection-by-hilton.html',
    expedia: 'https://www.expedia.com/Dallas-Hotels-The-Statler-Dallas-Curio-Collection-By-Hilton.h18267.Hotel-Information',
  },
  'the-adolphus-dallas': {
    bookingcom: 'https://www.booking.com/hotel/us/the-adolphus.html',
    expedia: 'https://www.expedia.com/Dallas-Hotels-The-Adolphus.h20941.Hotel-Information',
  },

  // --- Los Angeles ---
  'conrad-los-angeles': {
    bookingcom: 'https://www.booking.com/hotel/us/conrad-los-angeles.html',
    expedia: 'https://www.expedia.com/Los-Angeles-Hotels-Conrad-Los-Angeles.h74503881.Hotel-Information',
  },
  // Rebranded from Thompson Hollywood (Hyatt) to The Hollywood Grande,
  // Autograph Collection (Marriott) on 2025-07-29. Booking's old
  // thompson-hollywood URL 301s here; pointing straight at the canonical one
  // keeps the affiliate click from taking an extra hop.
  'hollywood-grande': {
    bookingcom: 'https://www.booking.com/hotel/us/the-hollywood-grande.html',
    expedia: 'https://www.expedia.com/Los-Angeles-Hotels-The-Hollywood-Grande.h60260926.Hotel-Information',
  },
  'santa-monica-proper': {
    bookingcom: 'https://www.booking.com/hotel/us/santa-monica-proper-hotel-a-member-of-design-hotels.html',
    expedia: 'https://www.expedia.com/Los-Angeles-Hotels-Santa-Monica-Proper-Hotel.h33918033.Hotel-Information',
  },
  'godfrey-hollywood': {
    bookingcom: 'https://www.booking.com/hotel/us/the-godfrey-hollywood.html',
    expedia: 'https://www.expedia.com/Los-Angeles-Hotels-The-Godfrey-Hotel-Hollywood.h32945867.Hotel-Information',
  },
  'kimpton-everly-hollywood': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-everly.html',
    expedia: 'https://www.expedia.com/Los-Angeles-Hotels-Kimpton-Everly-Hotel-Hollywood.h17524828.Hotel-Information',
  },
  'hoxton-dtla': {
    bookingcom: 'https://www.booking.com/hotel/us/the-hoxton-downtown-los-angeles.html',
    expedia: 'https://www.expedia.com/Los-Angeles-Hotels-THE-Hoxton-Downtown-LA.h36712437.Hotel-Information',
  },

  // --- Phoenix / Scottsdale ---
  'palomar-phoenix': {
    bookingcom: 'https://www.booking.com/hotel/us/kimpton-hotel-palomar-phoenix.html',
    expedia: 'https://www.expedia.com/Phoenix-Hotels-Kimpton-Hotel-Palomar-Phoenix-Cityscape.h5052263.Hotel-Information',
  },
  'canopy-scottsdale': {
    bookingcom: 'https://www.booking.com/hotel/us/canopy-by-hilton-scottsdale-old-town.html',
    expedia: 'https://www.expedia.com/Phoenix-Hotels-Canopy-By-Hilton-Scottsdale-Old-Town.h54159544.Hotel-Information',
  },
  'ac-hotel-tempe': {
    bookingcom: 'https://www.booking.com/hotel/us/ac-by-marriott-phoenix-tempe-downtown.html',
    expedia: 'https://www.expedia.com/Phoenix-Hotels-AC-Hotel-Phoenix-TempeDowntown.h15178259.Hotel-Information',
  },

  // --- San Diego ---
  'pendry-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/pendry-san-diego.html',
    expedia: 'https://www.expedia.com/San-Diego-Hotels-Pendry-San-Diego.h16298963.Hotel-Information',
  },
  'andaz-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/andaz-san-diego.html',
    expedia: 'https://www.expedia.com/San-Diego-Hotels-Andaz-San-Diego-A-Concept-By-Hyatt.h1548104.Hotel-Information',
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
    expedia: 'https://www.expedia.com/San-Diego-Hotels-Solamar-San-Diego.h1117693.Hotel-Information',
  },
  'hard-rock-san-diego': {
    bookingcom: 'https://www.booking.com/hotel/us/hard-rock-san-diego-san-diego.html',
    // Duplicate listing again (h81650385, "Hard Rock Hotel SAN Diego" — same
    // name, different capitalisation). This one holds the 4,251 reviews; the
    // other has none. Verified 2026-08-29.
    expedia: 'https://www.expedia.com/San-Diego-Hotels-Hard-Rock-Hotel-San-Diego.h1731557.Hotel-Information',
  },

  // --- Houston --- (verified 2026-07-18)
  'thompson-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/thompson-houston.html',
    expedia: 'https://www.expedia.com/Houston-Hotels-Thompson-Houston.h93257980.Hotel-Information',
  },
  'four-seasons-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/four-seasons-houston.html',
    expedia: 'https://www.expedia.com/Houston-Hotels-Four-Seasons-Hotel-Houston.h20193.Hotel-Information',
  },
  // Booking's slug is apostrophe-mangled but resolves to the right property.
  'la-colombe-dor-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/la-colombe-d-39-or-amp-restaurant.html',
    expedia: 'https://www.expedia.com/Houston-Hotels-La-Colombe-DOr-Hotel-Restaurant.h66954154.Hotel-Information',
  },
  // Legacy slug: the property was Hotel Alessandra before the Laura rebrand.
  'the-laura-houston': {
    bookingcom: 'https://www.booking.com/hotel/us/alessandra.html',
    expedia: 'https://www.expedia.com/Houston-Hotels-The-Laura-Hotel.h20052335.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Washington-Hotels-YOTEL-Washington-DC-Formerly-Liaison.h10576.Hotel-Information',
  },
  'hotel-zena-dc': {
    bookingcom: 'https://www.booking.com/hotel/us/hotel-zena-a-viceroy-urban-retreat.html',
    expedia: 'https://www.expedia.com/Washington-Hotels-Hotel-Zena.h1125.Hotel-Information',
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
    expedia: 'https://www.expedia.com/Fort-Lauderdale-Hotels-Conrad-Fort-Lauderdale-Beach.h13346779.Hotel-Information',
  },
  'four-seasons-seattle': {
    bookingcom: 'https://www.booking.com/hotel/us/four-seasons-seattle.html',
    expedia: 'https://www.expedia.com/Seattle-Hotels-Four-Seasons-Hotel-Seattle.h2163007.Hotel-Information',
  },
  'intercontinental-dc-wharf': {
    bookingcom: 'https://www.booking.com/hotel/us/intercontinental-washington-dc-the-wharf.html',
    expedia: 'https://www.expedia.com/Washington-Hotels-InterContinental-Washington-DC-The-Wharf.h16024166.Hotel-Information',
  },
  'market-pavilion-charleston': {
    bookingcom: 'https://www.booking.com/hotel/us/market-pavillion.html',
    expedia: 'https://www.expedia.com/Charleston-Hotels-Market-Pavilion-Hotel.h910028.Hotel-Information',
  },
  'perry-lane-savannah': {
    bookingcom: 'https://www.booking.com/hotel/us/perry-lane-a-luxury-collection-savannah.html',
    expedia: 'https://www.expedia.com/Savannah-Hotels-Perry-Lane-Hotel.h20154636.Hotel-Information',
  },
  'omni-battery-atlanta': {
    bookingcom: 'https://www.booking.com/hotel/us/omni-at-the-battery-atlanta.html',
    expedia: 'https://www.expedia.com/Atlanta-Hotels-Omni-Hotel-At-The-Battery-Atlanta.h19780605.Hotel-Information',
  },
  'thompson-san-antonio': {
    bookingcom: 'https://www.booking.com/hotel/us/thompson-san-antonio.html',
    expedia: 'https://www.expedia.com/San-Antonio-Hotels-Thompson-San-Antonio.h59768128.Hotel-Information',
  },
  'omni-louisville': {
    bookingcom: 'https://www.booking.com/hotel/us/omni-louisville.html',
    expedia: 'https://www.expedia.com/Louisville-Hotels-Omni-Louisville-Hotel.h21106192.Hotel-Information',
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
