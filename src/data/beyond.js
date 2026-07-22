// One-off standout rooftop pools in cities that don't (yet) have their own
// page — a single exceptional pool in each. Same rules as everywhere: a real,
// wade-in, swimmable rooftop/elevated pool with a view and strong reviews.
// If a city accumulates ~3+, it graduates to its own city page.
//
// Rendered as a grid on /beyond-the-cities/, and — single-sourced here so the
// two never drift — as a detail page each at /beyond-the-cities/<slug>/ (via
// HotelDetail, the shared view). `neighborhood` ("<city>, <ST>") is the grid
// card's locator; `area`/`city`/`state` drive the detail kicker ("<area> ·
// <city>, <state>"). `heroCredit` is the property name for the courtesy line;
// the hero photo is drop-in by filename, src/assets/hotels/<slug>.jpg.
//
// Exception: `four-seasons-seattle` is a homepage Editor's Pick with its own
// standalone page at /hotels/four-seasons-seattle/, so the dynamic detail route
// skips it (see src/pages/beyond-the-cities/[hotel].astro).

export const BEYOND_HOTELS = [
  {
    name: "Conrad Fort Lauderdale Beach",
    slug: "conrad-fort-lauderdale",
    heroCredit: "Conrad Fort Lauderdale Beach",
    neighborhood: "Fort Lauderdale, FL",
    area: "Fort Lauderdale Beach",
    city: "Fort Lauderdale",
    state: "FL",
    description: "The Sky Deck pool sits above the beachfront tower with the Atlantic filling the whole view — heated, cabana-lined, full towel-and-bar service. Fort Lauderdale's most-cited hotel pool, and it earns the billing.",
    poolNote: "6th-floor Sky Deck pool · Atlantic Ocean views · Heated · Day passes from $55",
    tags: ["Elevated", "Oceanfront", "Cabanas", "Heated"],
    priceRange: "$$$",
    stay: "The Conrad is the comeback one — a 24-story Michael Graves tower on the A1A beachfront that spent most of a decade as the Trump hotel that never opened, running through default, foreclosure and auction before Hilton finally flew the Conrad flag in 2017. It's an all-suite condo-hotel, so rooms run large and finishes vary a little unit to unit, and the whole thing points straight at the Atlantic. The signature move is the sixth-floor Sky Deck — a 20,000-square-foot heated pool terrace with cabanas and the Spinnaker grill, lifted over the sand rather than dropped beside it. At $$$ it's Fort Lauderdale's default luxury beach box — book it for the deck and the ocean; the trade is the slightly uneven consistency a condo-hotel brings.",
    verified: {
      stay: "Opened Oct 2017 as a Conrad after a troubled ~decade: began 2005 as Trump International Hotel & Tower, Trump name pulled 2009, foreclosure 2010, auction 2012, then a ~$70M renovation; 24-story oceanfront tower by architect Michael Graves at 551 N Fort Lauderdale Beach Blvd; all-suite condo-hotel (~290 units, ~181 in the hotel program); 20,000 sq ft 6th-floor Sky Deck with heated pool, cabanas and the Spinnaker Pool Grill; Takato and Atlas Cocktail Lounge on site — Confirmed 2026-07-21 via Wikipedia, Forbes Travel Guide and ResortPass. VERIFY: current dining lineup (Terra Mare/Vitolo may have changed), whether marketing still says 'Sky Deck' vs 'Oceanfront Terrace', and the day-pass price.",
    },
  },
  {
    name: "Four Seasons Hotel Seattle",
    slug: "four-seasons-seattle",
    heroCredit: "Four Seasons Hotel Seattle",
    neighborhood: "Seattle, WA",
    description: "The Pacific Northwest barely does rooftop pools, which makes this one a standout: a 4th-floor terrace infinity pool heated to 84° year-round, open to Elliott Bay, Puget Sound, and the Olympics. Four Seasons calls it Seattle's only infinity-edge hotel pool. Swim it in the rain — that's the whole point.",
    poolNote: "4th-floor terrace infinity pool · Elliott Bay + Olympics · Heated 84° year-round · Guests only",
    tags: ["Rooftop", "Infinity Edge", "Water Views", "Year-Round"],
    priceRange: "$$$$",
    stay: "The Four Seasons is Seattle's quiet luxury standard — a full-service property on the lower floors of a downtown tower, with Goldfinch Tavern, an Ethan Stowell restaurant, handling the food. The location is the argument: the Seattle Art Museum is next door, Pike Place Market is a five-minute walk, and the waterfront sits right below, so the city's best morning — the market, coffee, the piers — starts at the front door. At $$$$ it's the city's benchmark stay — worth it for the pool, the bay, and the market at your doorstep; the trade is downtown polish over neighborhood character.",
    verified: {
      stay: "Occupies the lower floors of a 21-story downtown tower at 99 Union St; Seattle Art Museum adjacent, Pike Place Market ~5 minutes on foot, waterfront below; Goldfinch Tavern is an Ethan Stowell restaurant — Confirmed 2026-07-19 via fourseasons.com and Visit Seattle.",
    },
  },
  {
    name: "Market Pavilion Hotel",
    slug: "market-pavilion-charleston",
    heroCredit: "Market Pavilion Hotel",
    neighborhood: "Charleston, SC",
    area: "Historic District",
    city: "Charleston",
    state: "SC",
    description: "Charleston's only rooftop cascading pool, by the hotel's own careful phrasing — a tiered pool on the Pavilion terrace with the Holy City's steeples laid out for the sunset. Guests only, and no swimming after 5pm.",
    poolNote: "Rooftop cascading pool · Historic Charleston views · Guests only · No swimming after 5pm",
    tags: ["Rooftop", "Historic", "Guests Only", "Sunset"],
    priceRange: "$$$",
    stay: "Market Pavilion is the old-Charleston one — a 70-room hotel built in 2002 but dressed in 18th-century colonial detail, mahogany four-posters and oil paintings, standing at East Bay and Market across from the antebellum Customs House. It's family-owned, which shows in the fussed-over rooms and the service regulars won't stop mentioning. Downstairs is Grill 225, a proper USDA Prime steakhouse with a theatrical liquid-nitrogen martini; up top is the rooftop cascading pool and Pavilion Bar with the Historic District laid out below. At $$$ it's Charleston's most traditional luxury address — book it for the location and the steak; just know the rooftop pool is a guests-only amenity, not a public scene.",
    verified: {
      stay: "Opened 2002, Palassis-family owned; a new build dressed in 18th-century colonial detail at 225 East Bay St, across from the US Customs House; 70 rooms (renovated 2025); Grill 225 is a USDA Prime steakhouse known for a liquid-nitrogen 'Nitrotini'; fifth-floor rooftop cascading pool + Pavilion Bar, guests only; named T+L's #1 small-city US hotel in 2013 — Confirmed 2026-07-21 via Forbes Travel Guide, marketpavilion.com and the Post and Courier. VERIFY: suite count (unpublished), the exact pool-swim cutoff ('no swimming after 5pm' — sources conflict), and any AAA rating.",
    },
  },
  {
    name: "Perry Lane Hotel",
    slug: "perry-lane-savannah",
    heroCredit: "Perry Lane Hotel, a Luxury Collection Hotel",
    neighborhood: "Savannah, GA",
    area: "Historic District",
    city: "Savannah",
    state: "GA",
    description: "Savannah's swankiest rooftop — a tropical-leaning pool deck beside the Peregrin bar with a panorama over the Historic District's rooftops and steeples. The poolside service is the part regulars won't stop mentioning.",
    poolNote: "Rooftop pool · Sweeping Savannah views · Peregrin bar · Year-round, heated in cooler months",
    tags: ["Rooftop", "Historic", "Skyline", "Service"],
    priceRange: "$$$",
    stay: "Perry Lane is the design-forward one — Savannah's first Luxury Collection hotel, opened 2018 in the Historic District a few blocks off Forsyth Park, built around a fictional world-traveler muse named Adelaide Harcourt and a genuinely large art collection with deep SCAD ties. AvroKO did the interiors, and the result reads more collected-over-a-lifetime than hotel-standard. Emporium Kitchen & Wine Market handles the food, The Wayward pours the cocktails, and Peregrin runs the rooftop bar beside the pool with the district's rooftops below. At $$$ it's Savannah's most stylish stay — book it for the design and the roof; the pool stays a guests-only perk, heated when the weather turns.",
    verified: {
      stay: "Opened 2018 as Savannah's first Luxury Collection (Marriott) hotel, managed by Sage Hospitality; 167 rooms incl. 12 suites at 256 East Perry St, Historic District near Forsyth Park; interiors by AvroKO, art program by NINE dot ARTS built around a fictional muse ('Adelaide Harcourt') with heavy SCAD ties; Emporium Kitchen & Wine Market, The Wayward cocktail bar, and Peregrin rooftop bar + pool (year-round, heated in cooler months, guests only) — Confirmed 2026-07-21 via PR Newswire (2018), perrylanehotel.com and Hospitality Design. VERIFY: exact art-collection count (sources conflict widely) and current ownership.",
    },
  },
  {
    name: "Omni Hotel at The Battery Atlanta",
    slug: "omni-battery-atlanta",
    heroCredit: "Omni Hotel at The Battery Atlanta",
    neighborhood: "Atlanta (The Battery), GA",
    area: "The Battery",
    city: "Atlanta",
    state: "GA",
    description: "Not downtown — out at The Battery, where the 5th-floor pool deck overlooks the entertainment district wrapped around Truist Park. Day passes make it one of the easier good decks in Atlanta to get onto without a room.",
    poolNote: "5th-floor elevated pool · The Battery views · Cabanas · Day passes · Pool bar seasonal",
    tags: ["Elevated", "Day Pass", "Cabanas", "Unique"],
    priceRange: "$$",
    stay: "The Omni is the ballpark one — not downtown, but out at The Battery, the Braves-owned entertainment district in Cobb County, with the hotel built right into it beside Truist Park and many rooms staring into the stadium. It's the official Braves hotel and it leans all the way in: ballpark-view balconies, tailgate-themed cabanas, and National Anthem, chef Nick Badovinus's modern-diner restaurant, off the lobby. The elevated pool deck looks over the district toward the field, with cabanas and day passes for people without a room. At $$ it's the value play here and one of the easier good decks in Atlanta to get onto — book it for a game day; just know 'Atlanta' means Cobb County, a good ten miles from downtown.",
    verified: {
      stay: "Opened Jan 2018 as the official Atlanta Braves hotel, built into The Battery Atlanta beside Truist Park at 2625 Circle 75 Pkwy SE — Cobb County/Cumberland, ~10 mi from downtown; 264 rooms and suites (incl. 28 suites); elevated pool deck over the district with cabanas and 21+ day passes; National Anthem restaurant by chef Nick Badovinus opened 2024; owned by TRT Holdings and managed by Omni — Confirmed 2026-07-21 via CommercialSearch, Omni/ResortPass and the AJC. VERIFY: exact pool floor (reported 5th) and any seasonal closure; the rooms-vs-suites split; the pool-bar name.",
    },
  },
  {
    name: "Thompson San Antonio – Riverwalk",
    slug: "thompson-san-antonio",
    heroCredit: "Thompson San Antonio – Riverwalk",
    neighborhood: "San Antonio, TX",
    area: "River Walk",
    city: "San Antonio",
    state: "TX",
    description: "The Cenote pool deck juts off the 4th floor of the 20-story tower with an unobstructed sweep of the San Antonio skyline — and Moon's Daughters, sixteen floors above it at the top of the building, when you're done swimming.",
    poolNote: "4th-floor Cenote pool deck · City views · Cabanas · Guests + residents only",
    tags: ["Elevated", "Skyline", "Cabanas", "Guests Only"],
    priceRange: "$$$",
    stay: "Thompson San Antonio is the skyline one — a 20-story Hyatt tower opened in 2021 in the River Walk's arts district, across the water from the Tobin Center, with the hotel on the lower floors and branded condos stacked above. The draws are vertical: the fourth-floor Cenote pool deck with its heated pool and cabanas, and Moon's Daughters, the indoor-outdoor rooftop bar sixteen floors up. On the ground, Landrace is a serious Texas restaurant from James Beard finalist Steve McHugh. At $$$ it's downtown's most design-literate stay — book it for the pool deck, the roof, and Landrace's kitchen; one asterisk, a 2026 foreclosure moved it to lender ownership, though Hyatt says it's staying on to run it unchanged.",
    verified: {
      stay: "Opened Feb 2021; 20-story Hyatt tower (hotel on floors 1–11, The Arts Residences condos above) at 115 Lexington Ave, North River Walk / Arts District; 162 rooms incl. 33 suites; 4th-floor Cenote pool deck (~2,000 sq ft, heated, cabanas, guests + residents); Moon's Daughters rooftop bar on the 20th floor; Landrace by James Beard finalist Steve McHugh on the ground. A March 3, 2026 foreclosure auction moved the hotel (not the individually owned condos) to lender Southern Realty Trust Holdings via credit bid; Hyatt said it will keep managing with no change — Confirmed 2026-07-21 via Hyatt newsroom, San Antonio Report (2026-03) and CultureMap. VERIFY: that post-auction operations remain Thompson-flagged; monitor for a rebrand.",
    },
  },
  {
    name: "Omni Louisville Hotel",
    slug: "omni-louisville",
    heroCredit: "Omni Louisville Hotel",
    neighborhood: "Louisville, KY",
    area: "Downtown",
    city: "Louisville",
    state: "KY",
    description: "Downtown Louisville's marquee stay, and its heated elevated pool with a rooftop bar is the city's most-cited — a clean skyline swim in a town where rooftop pools are otherwise thin.",
    poolNote: "3rd-floor pool deck · Downtown Louisville skyline · Heated · Seasonal, reopens Memorial Day",
    tags: ["Elevated", "Skyline", "Heated", "Seasonal"],
    priceRange: "$$",
    stay: "The Omni is the bourbon one — a 30-story downtown tower opened in 2018 that runs the Kentucky theme hard, from a lobby built to look like a deconstructed bourbon barrel to the whiskey bars in the rooms. It's genuinely mixed-use, with 600-odd hotel rooms over apartments, a 20,000-square-foot food hall (Falls City Market, local Heine Brothers' coffee included), Bob's Steak & Chop House, and Pin + Proof, a speakeasy with four bowling lanes off the lobby. The heated pool deck and its skyline view are the rooftop draw, though it's seasonal — open Memorial Day to Labor Day, with the hot tub running year-round. At $$ it's downtown Louisville's marquee stay and a strong value — book it for the pool in summer and the bourbon program the rest of the year.",
    verified: {
      stay: "Opened March 2018; 30-story, ~$300M mixed-use downtown tower (HKS design) at 400 S 2nd St; 612 hotel rooms over 225 apartments; bourbon-barrel-themed interiors; heated outdoor 'The Water Company' pool deck with skyline views, seasonal (~Memorial Day–Labor Day), hot tub year-round; Bob's Steak & Chop House, the Falls City Market food hall (Heine Brothers' coffee), and Pin + Proof speakeasy-bowling — Confirmed 2026-07-21 via the grand-opening release, WDRB and Hotel Management. VERIFY: exact pool floor and the 2026 reopening date; note Bob's is a Texas chain, not a local original.",
    },
  },
  {
    name: "AC Hotel Tucson Downtown",
    slug: "ac-hotel-tucson",
    heroCredit: "AC Hotel Tucson Downtown",
    neighborhood: "Tucson, AZ",
    area: "Downtown",
    city: "Tucson",
    state: "AZ",
    description: "A straightforward heated rooftop pool in a city that has very few — no grand claims from the operator, and none from us. It is open early to late, it is on the roof, and in Tucson that is enough to be worth knowing about.",
    poolNote: "Rooftop pool · Heated · Open 6am–10pm · Guests only",
    tags: ["Rooftop", "Heated", "Value", "Guests Only"],
    priceRange: "$$",
    stay: "The AC Tucson is the no-drama one — a 136-room AC Hotel that, when it opened in 2017, was the first new hotel built in downtown Tucson in roughly forty years, part of the Rio Nuevo revival right on Congress Street. AC is Marriott's European-minimalist brand, so the look is spare and the signature is the AC Lounge downstairs, all Spanish-style tapas and the brand's gin-and-tonic ritual. The reason it's here is the sixth-floor rooftop pool, downtown and the Santa Catalinas in view — no grand claims, just a real rooftop pool in a city that barely has any. At $$ it's a smart-value base for a Congress Street weekend — book it for the location and the roof.",
    verified: {
      stay: "Opened Sept 2017; the first new downtown Tucson hotel in ~40 years (Rio Nuevo redevelopment); 136 rooms at 151 E Broadway Blvd in the Congress St core; the AC Lounge serves the brand's gin-and-tonic and Spanish tapas; sixth-floor rooftop pool + bar with downtown and Santa Catalina views, largely guests-only — Confirmed 2026-07-21 via Rio Nuevo, The Rooftop Guide and tucson.com. VERIFY: the pool 'heated' claim (unconfirmed by any source) and the '6am–10pm' hours in the pool note; the rooftop-bar name.",
    },
  },
];
