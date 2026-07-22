// Non-rooftop hotel pools that are too good to leave off. Every hotel here has
// a genuine, swimmable pool that happens to be at ground/garden/water level
// rather than on a roof. They keep their Booking.com affiliate links (slugs in
// src/data/affiliates.js) just like the rooftop city lists.
//
// Rendered as a grid on /notable-pools/ and — single-sourced here so the two
// never drift — as a detail page each at /notable-pools/<slug>/. `area` is the
// sub-neighborhood; `city`/`state` locate it. The grid composes its card label
// as "<area>, <city>"; the detail page shows "<area> · <city>, <state>".
//
// Hero photos are drop-in by filename: src/assets/hotels/<slug>.jpg, plus a
// `heroCredit` here (the property name) — same wiring as the rooftop hotels.
// None are pulled yet; the detail pages render without a hero until they are.

export const NOTABLE_HOTELS = [
  {
    name: "Faena Hotel Miami Beach",
    slug: "faena-miami-beach",
    heroCredit: "Faena Hotel Miami Beach",
    area: "Mid-Beach",
    city: "Miami Beach",
    state: "FL",
    description: "Alan Faena's maximalist monument to another era — the pool runs at garden level between the hotel and the sand, flanked by candy-striped cabanas that are gloriously over the top. Not a rooftop, but one of the most theatrical pools in the country.",
    poolNote: "Ground-level oceanfront pool · Striped cabanas · Hotel guests · Direct beach access",
    tags: ["Oceanfront", "Cabanas", "Theatrical", "Ground Level"],
    pick: true,
    priceRange: "$$$$",
    stay: "The Faena is the theatrical one — Alan Faena and Baz Luhrmann's 2015 reinvention of the old Saxony Hotel into a red-velvet fever dream on Mid-Beach, anchoring the cultural cluster of the Faena District. Catherine Martin's cabaret-Deco interiors, a gold-cased Damien Hirst mammoth between the lobby and the sand, Francis Mallmann's open-fire Los Fuegos, and an actual cabaret theater put it somewhere between a hotel and a production. The 22,000-square-foot Tierra Santa spa and the striped-umbrella pool are the calmer counterweight. At $$$$ it's among the priciest rooms in Miami and never pretends otherwise — book it for the spectacle and the service; the trade is that restraint was never on the menu.",
    verified: {
      stay: "Opened 2015 on the site of the 1940s Saxony Hotel at 3201 Collins Ave, Mid-Beach; anchor of the Faena District; interiors by Baz Luhrmann & Catherine Martin; Damien Hirst 'Gone but Not Forgotten' gold-cased mammoth; Los Fuegos by Francis Mallmann; ~22,000 sq ft Tierra Santa spa; in-house Faena Theater cabaret — Confirmed 2026-07-21 via faena.com, Wikipedia, Forbes Travel Guide and MiamiandBeaches. VERIFY: room count (sources split 169 vs 179), Paul Qui's current involvement at Pao, and whether the Accor/ALL distribution reflects a management tie.",
    },
  },
  {
    name: "The Standard Spa, Miami Beach",
    slug: "standard-spa-miami-beach",
    heroCredit: "The Standard Spa, Miami Beach",
    area: "Belle Isle",
    city: "Miami Beach",
    state: "FL",
    description: "An adults-only bayfront hideout on Belle Isle where the infinity pool meets Biscayne Bay at grade, wrapped in gardens with a full hydrotherapy circuit alongside. Not rooftop — waterline — and that's exactly the point of it.",
    poolNote: "Ground-level bayfront infinity pool · Hydrotherapy circuit · Adults-only · Gardens",
    tags: ["Bayfront", "Adults-Only", "Spa", "Ground Level"],
    priceRange: "$$$",
    stay: "The Standard is the anti–South Beach one — a low-slung 2006 wellness retreat on Belle Isle, a quiet bay island one bridge removed from the Collins Avenue noise, built on the bones of the old Lido Spa. The draw isn't a scene, it's the hydrotherapy 'playground': a Turkish hammam, a DIY mud lounge, an arctic plunge and a Roman hot tub ringing the bayfront infinity pool, all complimentary to guests. It skews adult and serene by design — the spa areas are 18-plus — with Lido Bayside Grill handling the waterfront meals. At $$$ it's a real value for what you get; book it to decompress, not to be seen, and note the ocean beach is a short hop away — being off it is the whole point.",
    verified: {
      stay: "Opened 2006 on Belle Isle at 40 Island Ave, off the Venetian Causeway, on the site of the old Lido Spa Hotel; low-rise, ~100 rooms; complimentary hydrotherapy circuit (Turkish hammam, mud lounge, arctic plunge, Roman hot tub) around a bayfront infinity pool; spa areas 18+; Lido Bayside Grill on the water — Confirmed 2026-07-21 via standardhotels.com, Miami New Times and MiamiandBeaches. VERIFY: room count (100 vs 105), exact age policy (listed as 21+ to check in), and the clothing-optional mud/sauna area (guest-reported, not an official published policy).",
    },
  },
  // Nautilus Sonesta pulled 2026-07-21: closed for a $40M renovation, reopening
  // late 2026 as The James Nautilus Miami Beach (Sonesta's revived James brand).
  // Re-add — under the new name/slug/credit — once it reopens and the pool is
  // swimmable again. Affiliate entry retained in src/data/affiliates.js.
  {
    name: "LINE Austin",
    slug: "line-austin",
    heroCredit: "The LINE Austin",
    area: "Lady Bird Lake",
    city: "Austin",
    state: "TX",
    description: "The pool sits at the water's edge on Lady Bird Lake with downtown Austin's skyline cresting above the treeline — a lakeside infinity pool, not a rooftop one, looking straight out at the Congress Avenue Bridge and the bats that pour off it at dusk.",
    poolNote: "Lakeside infinity pool · Lady Bird Lake + Congress Avenue Bridge · Heated · Day passes from $40",
    tags: ["Lake Views", "Infinity Edge", "Sunset", "Ground Level"],
    priceRange: "$$$",
    stay: "The LINE is the design one — Sydell Group's 2018 conversion of a 1965 modernist tower (later a Radisson) on the north shore of Lady Bird Lake, right at the Congress Avenue Bridge. Sean Knibb's minimalist-Texana interiors, Kristen Kish's lakeside Arlo Grey, a rooftop bar built into the old parking deck, and 400-plus rooms make it downtown's most considered stay — and the heated lakeside infinity pool looks straight at the bridge where 1.5 million bats pour out at dusk from March to October. At $$$ it's worth it for the water, the design, and Kish's kitchen — though a 2026 foreclosure handed the keys to its lender, so the LINE name may not outlast your next visit.",
    verified: {
      stay: "Opened 2018 by Sydell Group in a converted 1965 modernist tower (formerly a Radisson) at 111 E Cesar Chavez St on Lady Bird Lake; 428 rooms; design by Michael Hsu + Sean Knibb; Arlo Grey by Kristen Kish and the P6 rooftop bar; heated lakeside infinity pool; at the Congress Ave Bridge (~1.5M bats, Mar–Oct). A June 3, 2026 foreclosure auction returned the hotel to lender JP Morgan on a $172M credit bid; still open and LINE-branded as of 2026-07-21 (siblings LINE DC and LA already lost the flag) — Confirmed 2026-07-21 via thelinehotel.com, The Real Deal (2026-06-03 and 2026-05-27), Mr & Mrs Smith and Yelp. VERIFY: current day-pass availability (ResortPass shows none active), and monitor the ownership/flag for a future rebrand.",
    },
  },
];
