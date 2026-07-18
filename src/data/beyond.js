// One-off standout rooftop pools in cities that don't (yet) have their own
// page — a single exceptional pool in each. Same rules as everywhere: a real,
// wade-in, swimmable rooftop/elevated pool with a view and strong reviews.
// If a city accumulates ~3+, it graduates to its own city page.
//
// Rendered as a grid on /beyond-the-cities/. Individual entries can also back a
// standalone hotel detail page (see src/pages/hotels/*.astro) when they need
// one — e.g. Four Seasons Seattle, a homepage Editor's Pick with no Seattle
// city. Single-sourced here so the two never drift.

export const BEYOND_HOTELS = [
  {
    name: "Conrad Fort Lauderdale Beach",
    slug: "conrad-fort-lauderdale",
    neighborhood: "Fort Lauderdale, FL",
    description: "The Sky Deck pool sits above the beachfront tower with the Atlantic filling the whole view — heated, cabana-lined, full towel-and-bar service. Fort Lauderdale's most-cited hotel pool, and it earns the billing.",
    poolNote: "6th-floor Sky Deck pool · Atlantic Ocean views · Heated · Day passes from $55",
    tags: ["Elevated", "Oceanfront", "Cabanas", "Heated"],
    priceRange: "$$$",
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
  },
  {
    name: "Market Pavilion Hotel",
    slug: "market-pavilion-charleston",
    neighborhood: "Charleston, SC",
    description: "Charleston's only rooftop cascading pool, by the hotel's own careful phrasing — a tiered pool on the Pavilion terrace with the Holy City's steeples laid out for the sunset. Guests only, and no swimming after 5pm.",
    poolNote: "Rooftop cascading pool · Historic Charleston views · Guests only · No swimming after 5pm",
    tags: ["Rooftop", "Historic", "Guests Only", "Sunset"],
    priceRange: "$$$",
  },
  {
    name: "Perry Lane Hotel",
    slug: "perry-lane-savannah",
    neighborhood: "Savannah, GA",
    description: "Savannah's swankiest rooftop — a tropical-leaning pool deck beside the Peregrin bar with a panorama over the Historic District's rooftops and steeples. The poolside service is the part regulars won't stop mentioning.",
    poolNote: "Rooftop pool · Sweeping Savannah views · Peregrin bar · Year-round, heated in cooler months",
    tags: ["Rooftop", "Historic", "Skyline", "Service"],
    priceRange: "$$$",
  },
  {
    name: "Omni Hotel at The Battery Atlanta",
    slug: "omni-battery-atlanta",
    neighborhood: "Atlanta (The Battery), GA",
    description: "Not downtown — out at The Battery, where the 5th-floor pool deck overlooks the entertainment district wrapped around Truist Park. Day passes make it one of the easier good decks in Atlanta to get onto without a room.",
    poolNote: "5th-floor elevated pool · The Battery views · Cabanas · Day passes · Pool bar seasonal",
    tags: ["Elevated", "Day Pass", "Cabanas", "Unique"],
    priceRange: "$$",
  },
  {
    name: "Thompson San Antonio – Riverwalk",
    slug: "thompson-san-antonio",
    neighborhood: "San Antonio, TX",
    description: "The Cenote pool deck juts off the 4th floor of the 20-story tower with an unobstructed sweep of the San Antonio skyline — and Moon's Daughters, sixteen floors above it at the top of the building, when you're done swimming.",
    poolNote: "4th-floor Cenote pool deck · City views · Cabanas · Guests + residents only",
    tags: ["Elevated", "Skyline", "Cabanas", "Guests Only"],
    priceRange: "$$$",
  },
  {
    name: "Omni Louisville Hotel",
    slug: "omni-louisville",
    neighborhood: "Louisville, KY",
    description: "Downtown Louisville's marquee stay, and its heated elevated pool with a rooftop bar is the city's most-cited — a clean skyline swim in a town where rooftop pools are otherwise thin.",
    poolNote: "3rd-floor pool deck · Downtown Louisville skyline · Heated · Seasonal, reopens Memorial Day",
    tags: ["Elevated", "Skyline", "Heated", "Seasonal"],
    priceRange: "$$",
  },
  {
    name: "AC Hotel Tucson Downtown",
    slug: "ac-hotel-tucson",
    neighborhood: "Tucson, AZ",
    description: "A straightforward heated rooftop pool in a city that has very few — no grand claims from the operator, and none from us. It is open early to late, it is on the roof, and in Tucson that is enough to be worth knowing about.",
    poolNote: "Rooftop pool · Heated · Open 6am–10pm · Guests only",
    tags: ["Rooftop", "Heated", "Value", "Guests Only"],
    priceRange: "$$",
  },
];
