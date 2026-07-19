// Hotel + city data — single source of truth for the city pages, the hotel
// detail pages, and JSON-LD. Lifted verbatim out of the per-page frontmatter
// that used to hold it inline, so the editorial copy is unchanged.
//
// CITIES[citySlug] = {
//   slug, city, state, tagline, neighborhoods, heroGradient, motif?, skyline?,
//   listingsHeading, listingsLede, noteLabel, noteBody, hotels: [...]
// }
//
// A hotel's `slug` is both its affiliate key (src/data/affiliates.js) and its
// URL segment: /cities/<citySlug>/<hotelSlug>/. Slugs must be globally unique.
//
// Pool counts are derived from hotels.length — never hardcode them.
//
// `verified` (optional, per hotel) records claims that are true but absent from
// the operator's own pages, and where the confirmation came from. The fact-audit
// process flags unsourced claims for removal; without this marker, an owner- or
// phone-confirmed fact gets stripped again on the next pass. Absence of an
// operator statement is not evidence that a claim is false.
//
// `heroCredit` (optional, per hotel) is the property name to credit under the
// hero image — required for Fora Portal photography. Renders as "Photo courtesy
// of <name>." The image itself is wired by filename: src/assets/hotels/<slug>.jpg.
// See docs/photo-pull-list.md for the source rule.
//
// `debunked` (optional, per hotel) is its mirror: claims that circulate widely
// — press releases, aggregators — but are NOT true. Without it an audit finds
// the claim in the wild, sees it missing from our copy, and adds it back.

export const CITIES = {
  "austin": {
    "slug": "austin",
    "city": "Austin",
    "state": "TX",
    "tagline": "Austin's pool scene is still rising — the city built fast and the rooftops are still catching up to the skyline. The ones that got it right early are worth finding before the rest does.",
    "neighborhoods": "Downtown & Rainey St",
    "heroGradient": "linear-gradient(180deg, rgba(191,79,8,0.9) 0%, rgba(150,56,24,0.72) 28%, rgba(40,64,80,0.6) 60%, rgba(6,22,50,0.84) 100%)",
    "listingsHeading": "The city that built up fast.",
    "listingsLede": "Austin's rooftop pool scene punches above its size. The best ones have views of the lake, the Capitol, or the Congress Avenue corridor — and most are warm enough year-round to use on a January whim.",
    "noteLabel": "Year-round pool weather",
    "noteBody": "Austin averages 228 sunny days a year, and the decks here stay usable far later than Nashville's or Denver's — but note that none of these four operators publishes a year-round or heated pool, and Austin Proper states outright that hours vary seasonally. October through February is the underrated window when they are open: warm afternoons, thinner crowds, and the full skyline without the August heat. Confirm before you plan a winter trip around one.",
    "hotels": [
      {
        "name": "W Austin",
        "slug": "w-austin",
        "neighborhood": "Downtown",
        "description": "WET deck is the W's branded pool experience, four floors up above the 2nd Street District — a real deck with cabanas, tanning shelves and a fireplace rather than a token plunge. DJs run Memorial Day to Labor Day; outside that stretch it is a considerably quieter afternoon.",
        "poolNote": "4th-floor WET deck · Cabanas + tanning shelves · DJs Memorial Day–Labor Day · Day passes from $25",
        "tags": [
          "Scene",
          "Day Pass",
          "DJ Weekends",
          "Premium"
        ],
        "bookingUrl": "https://www.marriott.com/w-austin",
        "priceRange": "$$$$",
        "stay": "The W is the music-industry anchor downtown — it shares the Block 21 development with ACL Live at the Moody Theater, the venue where Austin City Limits tapes, so on a show night the commute is an elevator ride. You're in the 2nd Street District behind City Hall, with Lady Bird Lake and its trail just south and downtown's restaurants all around. At $$$$ it's the most expensive way onto an Austin rooftop — worth it if you're timing the trip around a show or want the WET deck scene built in, less so if a quiet room is the priority.",
        "verified": {
          "stay": "Part of the Block 21 development with ACL Live at the Moody Theater (home of Austin City Limits); 2nd Street District behind City Hall, overlooking Lady Bird Lake — Confirmed 2026-07-19 via Andersson-Wise (the Block 21 architects) and Marriott."
        },
        "heroCredit": "W Austin"
      },
      {
        "name": "Hotel Van Zandt",
        "slug": "hotel-van-zandt",
        "neighborhood": "Rainey Street",
        "description": "Named for the songwriter, and the hotel carries the music-city energy well — though the live music is downstairs at Geraldine's, not poolside. The 4th-floor deck looks out over Lady Bird Lake, with Rainey Street humming below without intruding.",
        "poolNote": "4th-floor rooftop pool · Lady Bird Lake views · Rainey Street · Day passes via ResortPass",
        "tags": [
          "Lake View",
          "Rainey Street",
          "Day Pass",
          "Boutique"
        ],
        "bookingUrl": "https://www.hotelvanzandt.com",
        "priceRange": "$$$",
        "stay": "The Van Zandt is the Rainey Street one, and the music theme is load-bearing rather than decorative — the hotel is named for Townes Van Zandt, and Geraldine's runs live sets most nights, jazz brunches included. The district's bungalow bars are directly below, so the nightlife is at the door while the hotel stays surprisingly composed above it, with Lady Bird Lake at the end of the street. At $$$ it's fair for the location and the personality — the pick if you want Austin's bar scene walkable and music in the building; look downtown if Rainey's weekend noise would grate.",
        "verified": {
          "stay": "Named for Townes Van Zandt; opened 2015 in the Rainey Street Historic District; Geraldine's (4th floor) runs live music several nights a week. No longer marketed as a Kimpton — hotelvanzandt.com makes no Kimpton/IHG mention, so do not add the brand — Confirmed 2026-07-19."
        },
        "heroCredit": "Hotel Van Zandt"
      },
      {
        "name": "Austin Proper",
        "slug": "austin-proper",
        "neighborhood": "Second Street",
        "description": "Kelly Wearstler designed the hotel and it shows — the 5th-floor rooftop pool is saltwater, framed like a set piece, and it is a very good one. La Piscina handles the bar. Guests and weekday Proper Club members only; no day passes.",
        "poolNote": "5th-floor saltwater rooftop pool · La Piscina pool bar · Guests + members only · Hours vary seasonally",
        "tags": [
          "Saltwater",
          "Design Hotel",
          "Bar",
          "Guests Only"
        ],
        "bookingUrl": "https://www.properhotels.com/austin",
        "priceRange": "$$$$",
        "stay": "The Proper is the design statement — Kelly Wearstler's interiors run through the whole building, the restaurants come from Austin's McGuire Moorman group, and it arrived in 2019 as the brand's first hotel outside California. It shares the Second Street District with the W, so you get the same walkable downtown core near City Hall and the lake, in a considerably more styled package. At $$$$ you're paying design-hotel prices for a pool that's guests-and-members only with seasonal hours — worth it if the design is the draw, less so if maximum deck time is the point.",
        "verified": {
          "stay": "Opened December 2019, the Proper brand's first hotel outside California; Second Street District; restaurants by McGuire Moorman Lambert — Confirmed 2026-07-19 via properhotel.com, Marriott and PaperCity."
        },
        "heroCredit": "Austin Proper"
      },
      {
        "name": "Cambria Austin Downtown",
        "slug": "cambria-austin-downtown",
        "neighborhood": "Rainey Street",
        "description": "The adults-only option downtown — a 5th-floor resort-style deck with cabanas, an outdoor fireplace and a view over Rainey Street, plus day passes from $35 when the bigger properties are full. The rooftop bar, Limestone, is eleven floors further up.",
        "poolNote": "5th-floor adults-only pool · Rainey Street views · Cabanas + fireplace · Day passes from $35",
        "tags": [
          "Adults Only",
          "Day Pass",
          "Rainey Street",
          "Value"
        ],
        "priceRange": "$$",
        "stay": "The Cambria is the value route to the Rainey scene — a newer tower, opened late 2023, a block off Rainey Street proper, with the adults-only deck on five and the Limestone bar eleven floors above it. You're at the quieter end of the district: close enough to walk to the bungalow bars and the lake trail, far enough that the noise stays on Rainey. At $$ it's the cheapest way to stay in this corner of downtown with a real pool deck — the pick if you want Rainey access without the boutique bill.",
        "verified": {
          "stay": "Opened October 2023 at 68 East Ave, a block off Rainey Street; Limestone rooftop bar on the 16th floor — Confirmed 2026-07-19 via CultureMap Austin and Urbanize Austin."
        },
        "heroCredit": "Cambria Austin Downtown"
      }
    ]
  },
  "chicago": {
    "slug": "chicago",
    "city": "Chicago",
    "state": "IL",
    "tagline": "Chicago's architecture from pool level is a different argument — you're not looking at a skyline so much as a portfolio. The city was built to be looked at, and the right pool lets you do exactly that.",
    "neighborhoods": "Gold Coast & Fulton Market",
    "heroGradient": "linear-gradient(180deg, rgba(90,180,225,0.8) 0%, rgba(42,120,175,0.78) 42%, rgba(10,44,84,0.92) 100%)",
    "listingsHeading": "Architecture from the water.",
    "listingsLede": "Chicago's rooftop pools compete with what may be the finest collection of buildings any American skyline has produced. The three here have the views to justify the comparison.",
    "noteLabel": "Chicago is seasonal",
    "noteBody": "Chicago rooftop pools are firmly seasonal, and the published dates vary more than you would expect: the Viceroy opens May 1, the Hoxton runs early May through October, and the DoubleTree tracks roughly Memorial Day to Labor Day. If you are planning a spring or autumn trip, check the specific hotel rather than the season — nothing deflates a Chicago weekend like a drained rooftop.",
    "hotels": [
      {
        "name": "Viceroy Chicago",
        "slug": "viceroy-chicago",
        "neighborhood": "Gold Coast",
        "description": "Eighteen floors up in the Gold Coast, the Viceroy trades the Loop's architecture for Lake Michigan — a guests-only rooftop deck beside Pandan, where on the right afternoon the water and the lake read as one blue plane. Opens May 1, and worth timing a trip around.",
        "poolNote": "18th-floor rooftop pool · Lake Michigan views · Guests only · Opens May 1",
        "tags": [
          "Rooftop",
          "Lake Views",
          "Gold Coast",
          "Seasonal"
        ],
        "pick": true,
        "priceRange": "$$$",
        "stay": "The Viceroy is the polished Gold Coast boutique — a 2017 glass tower rising out of the rebuilt brick facade of the 1920s Cedar Hotel, with Somerset downstairs handling the Mediterranean cooking. The Gold Coast is the genteel way to do Chicago: Oak Street Beach and the lakefront path a few blocks one way, Rush Street's restaurants the other, and the Mag Mile close without being underneath it. At $$$ it's fairly priced for the neighborhood and the design — the pick if you want a grown-up base near the lake, with the caveat that the rooftop is guests-only and firmly seasonal.",
        "verified": {
          "stay": "Opened 2017 in the Gold Coast; glass tower above the reconstructed four-story facade of the 1922 Cedar Hotel; Somerset is the in-house restaurant — Confirmed 2026-07-19 via Chicago Magazine, Goettsch Partners (the architects) and viceroyhotelsandresorts.com."
        },
        "heroCredit": "Viceroy Chicago"
      },
      {
        "name": "The Hoxton, Chicago",
        "slug": "hoxton-chicago",
        "neighborhood": "Fulton Market",
        "description": "The Hoxton stacks a rooftop pool above Cabra's Peruvian rooftop restaurant, with the city filling the frame. Guests and Working From_ members have it Monday to Saturday — but Sunday brings $20 walk-up day passes, which is the cheapest way onto a good Chicago roof.",
        "poolNote": "Rooftop pool above Cabra · City views · Early May–October · $20 Sunday day passes",
        "tags": [
          "Rooftop",
          "Day Pass",
          "Fulton Market",
          "Design Hotel"
        ],
        "priceRange": "$$$",
        "stay": "The Hoxton is the restaurant-district one — it opened in 2019 in Fulton Market, the old meatpacking blocks that have become Chicago's most exciting eating neighborhood, and put Stephanie Izard's Peruvian rooftop Cabra upstairs beside the pool. Staying here trades the lake and the Mag Mile for the West Loop's restaurant row, which for a food-first trip is the right trade. At $$$ it's the brand's usual good value for the design — the pick if dinner reservations are the itinerary, and the $20 Sunday day pass is the cheapest way to audition the roof first.",
        "verified": {
          "stay": "Opened April 2019 at 200 N Green St in Fulton Market; Cabra is Stephanie Izard's Peruvian-inspired rooftop restaurant (Boka Restaurant Group) — Confirmed 2026-07-19 via Time Out Chicago and Block Club Chicago."
        },
        "heroCredit": "The Hoxton, Chicago"
      },
      {
        "name": "DoubleTree by Hilton Chicago – Magnificent Mile",
        "slug": "doubletree-mag-mile",
        "neighborhood": "Streeterville",
        "description": "High above Streeterville, a seasonal rooftop deck with a panoramic downtown sweep, cabanas for the afternoon, and day passes from $45. Unfussy, well-placed, and a real value for the elevation.",
        "poolNote": "Rooftop pool · Downtown views · Cabanas · Seasonal · Day passes from $45",
        "tags": [
          "Rooftop",
          "Day Pass",
          "Panoramic",
          "Value"
        ],
        "priceRange": "$$",
        "stay": "The DoubleTree is the straightforward sightseeing base — an unfussy big hotel in Streeterville, two blocks off the Magnificent Mile with Navy Pier, the Water Tower, and the lakefront all on foot. Nobody books it for the design; you book it for the address and the rooftop deck, and both deliver. At $$ it's the value way into this part of downtown — the pick for a first-visit or family Chicago trip where the days are for the city and the deck is for the late afternoon, remembering the pool runs roughly Memorial Day to Labor Day.",
        "verified": {
          "stay": "300 E Ohio St in Streeterville, two blocks from the Magnificent Mile; Navy Pier and the lakefront walkable — Confirmed 2026-07-19 via Hilton and Choose Chicago."
        },
        "heroCredit": "DoubleTree by Hilton Chicago – Magnificent Mile"
      }
    ]
  },
  "dallas": {
    "slug": "dallas",
    "city": "Dallas",
    "state": "TX",
    "tagline": "Dallas builds tall and looks good doing it — the city's rooftop pools sit high enough to make the flat Texas horizon feel like a feature, and a couple of them hang right out over the street.",
    "neighborhoods": "Downtown & Uptown",
    "heroGradient": "linear-gradient(180deg, rgba(96,124,170,0.8) 0%, rgba(20,58,130,0.88) 42%, rgba(10,30,74,0.94) 100%)",
    "listingsHeading": "High, and hanging over Main Street.",
    "listingsLede": "Downtown Dallas stacked its best pools up top — infinity edges, glass ledges, and one that swims right out over the street. Six that earn the elevation.",
    "noteLabel": "Downtown vs Uptown",
    "noteBody": "the Main Street District clusters the historic-tower rooftops — Joule, Thompson, Statler, Adolphus — within a few blocks of each other; Uptown's Swexan and Victory Park's W trade walkability for sheer height. The Texas heat keeps most of them usable well past summer, though the Adolphus runs its rooftop season through Labor Day and Swexan is the reliable year-round one.",
    "hotels": [
      {
        "name": "The Joule",
        "slug": "the-joule-dallas",
        "neighborhood": "Main Street District",
        "description": "Downtown's showpiece: a rooftop pool cantilevered eight feet past the building edge behind glass, so you swim out over Main Street ten floors up and look straight down. The single most distinctive pool in Texas.",
        "poolNote": "Rooftop pool · Glass ledge over Main Street · 10 floors up · Cabanas · Day passes Sun–Thu",
        "tags": [
          "Rooftop",
          "Glass Ledge",
          "Iconic",
          "Downtown"
        ],
        "pick": true,
        "priceRange": "$$$$",
        "stay": "The Joule is a design hotel first and a place to sleep second — a landmark building on Main Street turned into one of the most art-forward stays in Texas, with a lobby that pulls in people who never booked a room. You're in the walkable heart of downtown, close to the Arts District and easy to base out of without a car. At $$$$ you're paying for the address, the art, and that pool as much as the room — worth it if the design is the reason you're coming, a stretch if you just need a well-located bed.",
        "verified": {
          "floor": "10th floor — Confirmed by Karen 2026-07-18. The operator publishes no floor number.",
          "stay": "Art-forward downtown property (notable contemporary art collection), landmark building on Main Street ~0.5mi from the Arts District — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "The Joule"
      },
      {
        "name": "Thompson Dallas",
        "slug": "thompson-dallas",
        "neighborhood": "Main Street District",
        "description": "A heated infinity-edge rooftop pool atop The National tower, with an open-air sweep of the downtown skyline, private cabanas, and poolside dining. Adults-only, and the polished, grown-up end of the Dallas rooftop scene.",
        "poolNote": "Heated rooftop infinity-edge pool · Downtown skyline · Cabanas · Adults-only · Day passes from $40",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Adults Only",
          "Day Pass"
        ],
        "priceRange": "$$$",
        "verified": {
          "heated": "Confirmed by Karen 2026-07-18. Not stated by Hyatt or ResortPass.",
          "infinityEdge": "Confirmed by Karen 2026-07-18. Appeared only in aggregator copy, no operator source.",
          "stay": "Inside The National, the restored former First National Bank tower on Main Street; adults-only rooftop — Confirmed by Karen 2026-07-18."
        },
        "stay": "Thompson Dallas is the grown-up choice downtown — polished modern luxury inside The National, the restored bank tower that anchors Main Street, with an adults-only rooftop deck that keeps the calm the brand is going for. It's the same walkable downtown core as the Joule and the Statler, so you can leave the car and reach the Arts District and dining on foot. At $$$ it's priced right for what it is: if you want a refined, quiet-luxury base rather than a scene, this is the Dallas rooftop that fits.",
        "heroCredit": "Thompson Dallas"
      },
      {
        "name": "Hôtel Swexan",
        "slug": "hotel-swexan-dallas",
        "neighborhood": "Harwood District",
        "description": "The 75-foot top-floor pool turns a full 180 degrees across the Dallas skyline — a guests-only deck, cabanas, and the Pomelo pool bar. Among the newest and highest of the city's serious pools.",
        "poolNote": "Top-floor 75-ft pool · 180° Dallas skyline · Guests only · Pomelo pool bar",
        "tags": [
          "Rooftop",
          "High Floor",
          "Guests Only",
          "Uptown"
        ],
        "priceRange": "$$$$",
        "verified": {
          "length": "75ft — Confirmed by Karen 2026-07-18. In the 2023 opening press release but absent from the current operator page.",
          "stay": "Among Dallas's newest luxury hotels — Harwood District, opened 2023 — Confirmed by Karen 2026-07-18."
        },
        "debunked": {
          "infinityEdge": "Checked against rooftop photography 2026-07-18 — solid coping above the waterline, no spillover, no catch basin. The claim comes from the 2023 opening press release and was copied onward from there. Do not re-add."
        },
        "stay": "Swexan is the new-money glamour play — one of Dallas's newest luxury hotels, design-forward and deliberately showy, in the Harwood District just north of downtown. That puts you in Uptown's restaurant-and-bar scene rather than the office-core downtown, which is the right trade for some and the wrong one for others; a car or rideshare helps here more than it does on Main Street. At $$$$ it's the priciest of the Dallas rooftops, and you're paying for how new and polished it all is — worth it if you want the current 'it' hotel, less so if you'd rather a landmark with some history.",
        "heroCredit": "Hôtel Swexan"
      },
      {
        "name": "W Dallas",
        "slug": "w-dallas-victory",
        "neighborhood": "Victory Park",
        "description": "The 16th-floor WET Deck puts an infinity edge and a glass wall between you and the skyline, so you can swim right up to the view. A full bar, and the Victory Park energy below.",
        "poolNote": "16th-floor WET Deck infinity pool · Downtown skyline · Full bar · Day passes from $40",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "High Floor",
          "Day Pass"
        ],
        "priceRange": "$$$",
        "verified": {
          "floor": "16th floor — Confirmed by Karen 2026-07-18. Marriott states no floor; the only other source was the pool contractor's portfolio.",
          "stay": "Victory Park, adjacent to the American Airlines Center — Confirmed by Karen 2026-07-18."
        },
        "stay": "W Dallas is the party pick — the WET Deck and the W's usual high-energy, see-and-be-seen scene, set in Victory Park right next to the American Airlines Center. That location is the whole point: it's built for game nights, concerts, and going out, and it's a genuinely great base if that's your trip — less so if you want quiet, since the neighborhood empties out between events. At $$$ it's fair for the brand and the address; come for the energy, not for a restful downtown stay.",
        "heroCredit": "W Dallas"
      },
      {
        "name": "The Statler Dallas",
        "slug": "statler-dallas",
        "neighborhood": "Main Street District",
        "description": "The Waterproof pool on the 19th floor is a rooftop scene with a panoramic downtown view, loungers, and cabanas (21+ up top; a quieter pool downstairs). A restored 1950s landmark with the roof to match.",
        "poolNote": "19th-floor rooftop pool · Panoramic downtown · Cabanas · 21+",
        "tags": [
          "Rooftop",
          "Panoramic",
          "Scene",
          "Historic"
        ],
        "priceRange": "$$$",
        "stay": "The Statler is the fun one — a restored 1950s modernist landmark on Main Street that reopened as a lively, entertainment-forward hotel, with the Waterproof rooftop pool and bar up top and more going on downstairs than most Dallas hotels bother with. You're in the walkable downtown core near the Joule and the Adolphus, easy to pair with the Arts District. At $$$ it's a strong value for how much personality you get — the pick if you want a downtown base with buzz, not a quiet retreat.",
        "verified": {
          "stay": "Restored 1950s modernist landmark (opened 1956, reopened 2017) — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "The Statler Dallas"
      },
      {
        "name": "The Adolphus",
        "slug": "the-adolphus-dallas",
        "neighborhood": "Main Street District",
        "description": "The 1912 grande dame caps itself with a temperature-controlled rooftop pool deck — cabanas, a fire pit, a full pool bar, and downtown views from a genuine Dallas landmark.",
        "poolNote": "Rooftop pool deck · Downtown views · Cabanas + fire pit · Rooftop season runs through Labor Day",
        "tags": [
          "Rooftop",
          "Historic",
          "Cabanas",
          "Downtown"
        ],
        "priceRange": "$$$",
        "stay": "The Adolphus is the grande dame — a 1912 landmark that's the most traditional, old-world luxury stay on this list, a different world from the design hotels and party decks around it. It sits in the same walkable Main Street core downtown, so location-wise it's on par with the Joule and the Statler; the catch is the rooftop pool is seasonal, running only through Labor Day, so it's not a year-round pool trip. At $$$ you're paying for history and polish — the right call if a classic, refined Dallas stay appeals more than the newest rooftop scene.",
        "verified": {
          "stay": "1912 landmark — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "The Adolphus"
      }
    ]
  },
  "denver": {
    "slug": "denver",
    "city": "Denver",
    "state": "CO",
    "tagline": "At 5,280 feet, every pool in Denver is technically a mile high — but the ones worth visiting earn that designation not with altitude but with mountains on the horizon and water warm enough to stay in through a thin-air afternoon.",
    "neighborhoods": "Cherry Creek & Uptown",
    "heroGradient": "linear-gradient(180deg, rgba(140,158,168,0.68) 0%, rgba(74,102,126,0.8) 46%, rgba(18,34,58,0.92) 100%)",
    "listingsHeading": "The Rockies, framed in water.",
    "listingsLede": "Denver's best rooftop pools face west — which means the Rocky Mountains are in the frame, and the afternoon light eventually turns the snowcaps pink. The three here have the views to prove it.",
    "noteLabel": "Year-round is meaningful here",
    "noteBody": "Denver averages 300 days of sunshine a year, but the altitude means summer afternoons can drop 30 degrees between 2pm and 8pm. Halcyon and a few others heat their pools year-round, which means a clear January afternoon with Rockies visible is genuinely on the table. Pack a towel in both seasons.",
    "hotels": [
      {
        "name": "Halcyon, a Hotel in Cherry Creek",
        "slug": "halcyon-cherry-creek",
        "neighborhood": "Cherry Creek",
        "description": "A year-round heated rooftop pool that shrugs off the altitude — Rockies on the horizon, cabanas at the edge, and water blue enough to forgive the thin air. The 14ers visible from the pool deck on a clear morning are the kind of view that makes the resort fee feel optional.",
        "poolNote": "Year-round heated pool · Rocky Mountain views · Cabanas · Cherry Creek setting",
        "tags": [
          "Year-Round",
          "Mountain Views",
          "Cabanas",
          "Heated"
        ],
        "bookingUrl": "https://www.halcyonhotelcherrycreek.com",
        "pick": true,
        "priceRange": "$$$",
        "stay": "Halcyon is the settle-in one — 154 rooms and eleven suites that opened in 2016 in Cherry Creek, with Local Jones doing the all-day bistro downstairs and a Gear Garage lending outdoor gear for getting out of town. Cherry Creek is Denver at its most polished: low-rise gallery-and-boutique blocks southeast of downtown, quieter by night than the city core. At $$$ it's the grown-up base — the pick when the trip is pool, dinner, and mountain light rather than downtown nights, and the year-round heated water makes a clear January swim a real plan instead of a brochure line.",
        "verified": {
          "stay": "Opened 2016 in Cherry Creek; 154 rooms + 11 suites; Local Jones is the in-house restaurant; Gear Garage lending program; rooftop pool and hot tub — Confirmed 2026-07-19 via halcyonhotelcherrycreek.com, Denver Westword and Uncover Colorado."
        },
        "heroCredit": "Halcyon, a Hotel in Cherry Creek"
      },
      {
        "name": "The Jacquard, Autograph Collection",
        "slug": "jacquard-denver",
        "neighborhood": "Cherry Creek North",
        "description": "A 75-foot rooftop infinity lap pool in Cherry Creek North, with the Rockies on one side and downtown Denver on the other — the rare Denver deck where you can actually swim laps with the Front Range in the frame. Kisbee on the Roof handles the drinks.",
        "poolNote": "75-ft rooftop infinity lap pool · Rockies + downtown views · Kisbee on the Roof · Day passes from $29",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Mountain Views",
          "Lap Pool"
        ],
        "priceRange": "$$$",
        "stay": "The Jacquard is Cherry Creek's newer tower — a 201-room Autograph Collection hotel that opened in October 2018 in Cherry Creek North, the gallery-and-boutique blocks just north of the shopping center, with Kisbee on the Roof running the bar beside the pool. The neighborhood trade is the same as Halcyon's — shopping afternoons over downtown nights — so choosing between the two Cherry Creek roofs comes down to the water. At $$$, book the Jacquard to actually swim: the 75-foot infinity edge is real lap water, with the Rockies filling one end of the view and downtown the other.",
        "verified": {
          "pool": "75-ft infinity lap pool — Confirmed by Karen 2026-07-18. thejacquard.com publishes no dimensions and third-party sources disagreed on whether it is a lap pool.",
          "stay": "Opened October 3, 2018; 201 rooms; Kisbee on the Roof is the poolside rooftop bar, 180° Rockies-and-downtown views — Confirmed 2026-07-19 via the Cherry Creek North district, Marriott and thejacquard.com."
        },
        "heroCredit": "The Jacquard, Autograph Collection"
      },
      {
        "name": "Warwick Denver",
        "slug": "warwick-denver",
        "neighborhood": "Uptown",
        "description": "One of Denver's longest-running rooftop pools — heated and open all year on the Warwick's roof deck, with the Mile High skyline laid out below and designer loungers for the wait. Less scene than the newer arrivals, more reliable; here, the pool is actually the point.",
        "poolNote": "Heated rooftop pool · Year-round · Mile High skyline · Loungers + poolside dining",
        "tags": [
          "Rooftop",
          "Year-Round",
          "Heated",
          "Skyline"
        ],
        "priceRange": "$$",
        "stay": "The Warwick is the old guard — an Uptown fixture from Denver's mid-century social scene, its onetime Playboy Club connection now a design wink after a top-to-bottom renovation of all 216 rooms, each with a genuinely large private balcony. Uptown means Grant Street a block off the 17th Avenue restaurants, with the State Capitol and downtown both a short walk — city Denver, at a calmer address than the convention blocks. At $$ it's the value play of the three: book it for a balcony, the skyline, and a roof that's heated and open all year, and skip it if you want the scene the Cherry Creek decks charge $$$ for.",
        "verified": {
          "stay": "216 rooms and suites, fully renovated (completed 2017), each with a large private balcony (~120 sq ft); mid-century history including the Playboy Club connection; year-round heated rooftop pool; State Capitol and 17th Ave restaurants a short walk — Confirmed 2026-07-19 via warwickhotels.com and Hotel Management."
        },
        "heroCredit": "Warwick Denver"
      }
    ]
  },
  "houston": {
    "slug": "houston",
    "city": "Houston",
    "state": "TX",
    "tagline": "Houston is flat, humid, and enormous — which is exactly why the pools here matter. Getting above it is the whole point, and a handful of decks do it well enough to change how the city reads.",
    "neighborhoods": "Downtown & Montrose",
    "heroGradient": "linear-gradient(180deg, rgba(206,148,72,0.86) 0%, rgba(150,110,70,0.7) 30%, rgba(56,84,88,0.6) 62%, rgba(8,26,52,0.9) 100%)",
    "listingsHeading": "Getting above the sprawl.",
    "listingsLede": "Houston's best pools are podium decks — fourth, fifth, seventh floor — which sounds modest until you remember there's nothing else in the way. Five that clear the tree line and earn the climb.",
    "noteLabel": "On the season",
    "noteBody": "Houston pools run essentially year-round, but the calculus flips in summer: from June through September the deck is unusable between about eleven and four, and the water stops being refreshing. Spring and late fall are the real window — and the heated ones (Four Seasons, Marriott Marquis) stay good straight through January.",
    "hotels": [
      {
        "name": "Marriott Marquis Houston",
        "slug": "marriott-marquis-houston",
        "neighborhood": "Downtown",
        "description": "Yes, there's a Texas-shaped lazy river — but the real draw is the 77-foot infinity pool on the 6th-floor Altitude deck, heated year-round and aimed straight at the downtown skyline over Discovery Green. A bucket-list rooftop, gimmick and all.",
        "poolNote": "6th-floor rooftop · 77-ft infinity pool + Texas lazy river · Skyline views · Year-round",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Skyline",
          "Lazy River"
        ],
        "pick": true,
        "priceRange": "$$$",
        "stay": "The Marquis is the big-fun, do-it-all downtown hotel — a massive convention-and-family property on Discovery Green whose Texas-shaped lazy river and skyline infinity pool make it the most crowd- and kid-friendly rooftop in the city. You're in the thick of downtown, walkable to the convention center, Toyota Center, and Minute Maid Park, which makes it a natural for a game weekend or a work trip with the family along. At $$$ it's fair for the scale you get — the pick if you want the fun and the location, not if you're after quiet or intimate.",
        "verified": {
          "stay": "On Discovery Green; walkable to the George R. Brown Convention Center, Toyota Center, and Minute Maid Park — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "Marriott Marquis Houston"
      },
      {
        "name": "Thompson Houston, by Hyatt",
        "slug": "thompson-houston",
        "neighborhood": "Fourth Ward",
        "description": "The newest serious pool in the city, and it shows — an infinity edge on a seventh-floor deck that runs close to an acre, with Buffalo Bayou Park green on one side and downtown glass on the other. Rare thing for Houston: a pool deck with actual landscape in the view, not just tower.",
        "poolNote": "7th-floor deck · Infinity edge · Buffalo Bayou Park + skyline · Cabanas · Opened 2024",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Park Views",
          "New"
        ],
        "priceRange": "$$$$",
        "stay": "Thompson Houston is the new design flagship — the city's newest serious hotel (opened 2024), sleek and polished, with a near-acre pool deck that looks over Buffalo Bayou Park's green rather than just more towers. It sits in the Fourth Ward on the edge of downtown, close to the park and the bayou trails, a slightly quieter base than the downtown core. At $$$$ it's among the priciest in Houston, and you're paying to be in the newest, best-designed room in town — worth it if that's the appeal, less so if you'd rather skip the new-hotel premium.",
        "verified": {
          "stay": "Opened 2024; Fourth Ward, on the edge of downtown over Buffalo Bayou Park — Confirmed by Karen 2026-07-18.",
          "infinityEdge": "Confirmed by Karen 2026-07-18 from a rooftop photo she provided — glass-sided vanishing edge visible, water level with the lip."
        },
        "heroCredit": "Thompson Houston"
      },
      {
        "name": "Four Seasons Hotel Houston",
        "slug": "four-seasons-houston",
        "neighborhood": "Downtown",
        "description": "Fifty-five feet of climate-controlled water on a fourth-floor ipê deck — not the highest pool downtown, but the only one engineered to be genuinely pleasant in August. The temperature control is the amenity here; everything else is the usual Four Seasons competence.",
        "poolNote": "4th-floor deck · 55-ft climate-controlled pool · Year-round · Cabanas + poolside café · Skyline views",
        "tags": [
          "Elevated",
          "Year-Round",
          "Climate-Controlled",
          "Luxury"
        ],
        "priceRange": "$$$$",
        "stay": "The Four Seasons is the polished, reliable luxury choice — downtown, full-service, and the rare Houston pool engineered to stay pleasant through August, which in this city is the whole ballgame. You're in the downtown core, walkable to the business district and an easy base for work or a summer trip when the other decks are too hot to use. At $$$$ you're paying Four Seasons prices for Four Seasons competence and a genuinely usable summer pool — worth it if reliability and the August-proof deck matter more to you than novelty or scene.",
        "heroCredit": "Four Seasons Hotel Houston"
      },
      {
        "name": "La Colombe d'Or Hotel",
        "slug": "la-colombe-dor-houston",
        "neighborhood": "Montrose",
        "description": "Thirty-two suites and a pool ten floors up, which makes this the least crowded good deck in Houston almost by construction. Guests only, no day passes, no scene — the Montrose answer to a downtown rooftop, and better for it.",
        "poolNote": "10th-floor rooftop pool · Downtown skyline · Outdoor bar · Guests only · 32-suite property",
        "tags": [
          "Rooftop",
          "Skyline",
          "Intimate",
          "Guests Only"
        ],
        "priceRange": "$$$$",
        "stay": "La Colombe d'Or is the intimate, hidden one — a 32-suite boutique in a historic Montrose mansion where the guests-only rooftop is the least crowded good deck in the city almost by design. Montrose puts you in Houston's arts-and-dining heart, near the Museum District and the neighborhood's restaurants, a world away from the downtown convention crowd. At $$$$ you're paying for privacy, character, and scale-of-one service rather than amenities — the pick if you want quiet and a real neighborhood, not a big hotel.",
        "verified": {
          "stay": "Historic Montrose mansion, 32-suite property, near the Museum District — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "La Colombe d'Or Hotel"
      },
      {
        "name": "The Laura Hotel, Autograph Collection",
        "slug": "the-laura-houston",
        "neighborhood": "Downtown",
        "description": "The smallest pool on this list and the easiest to get into — a fifth-floor terrace above Discovery Green that sells day passes when it isn't full. Not a destination swim, but a genuinely good place to spend a Houston afternoon without booking a room.",
        "poolNote": "5th-floor terrace pool · Downtown skyline · Daybeds + cabanas · Day passes available",
        "tags": [
          "Elevated",
          "Day Pass",
          "Downtown",
          "Value"
        ],
        "priceRange": "$$$",
        "stay": "The Laura is the easy, accessible pick — a downtown Autograph Collection hotel above Discovery Green whose fifth-floor terrace sells day passes when it isn't full, so you don't even need a room to use it. It's right in the downtown core near the park, the convention center, and the ballpark, walkable and central. At $$$ it's a solid downtown value — the pick if you want a good, central base and easy pool access over a destination-grade swim.",
        "verified": {
          "stay": "Autograph Collection; downtown, above Discovery Green — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "The Laura Hotel"
      }
    ]
  },
  "los-angeles": {
    "slug": "los-angeles",
    "city": "Los Angeles",
    "state": "CA",
    "tagline": "Los Angeles invented the rooftop-pool-as-lifestyle, and it shows — from a Gehry deck over downtown to a saltwater edge above the Pacific, the only hard part is picking which skyline you want in the water.",
    "neighborhoods": "Hollywood & Downtown",
    "heroGradient": "linear-gradient(180deg, rgba(242,188,96,0.9) 0%, rgba(226,150,84,0.66) 30%, rgba(122,82,98,0.55) 62%, rgba(14,30,64,0.85) 100%)",
    "listingsHeading": "Pick your skyline.",
    "listingsLede": "The Hollywood Sign, the downtown towers, or the Pacific — every rooftop pool in LA points at a different postcard. These six point at the best ones.",
    "noteLabel": "Scene vs swim",
    "noteBody": "several of these double as weekend party decks — for an actual swim, aim for a weekday morning. Conrad DTLA and Santa Monica Proper hold up as genuine pools any day of the week; the Hollywood decks peak socially after 4pm.",
    "hotels": [
      {
        "name": "Conrad Los Angeles",
        "slug": "conrad-los-angeles",
        "neighborhood": "Downtown LA",
        "description": "A rooftop terrace of 16,000 square feet atop Gehry's Grand LA, with an infinity pool looking straight across downtown to the Walt Disney Concert Hall. One of the largest and most architecturally serious rooftop pools in the city — though the deck itself is Tara Bernerd's work, not Gehry's.",
        "poolNote": "Rooftop infinity pool · 16,000 sq ft terrace · DTLA + Disney Concert Hall · Cabanas",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Architecture",
          "Downtown"
        ],
        "pick": true,
        "priceRange": "$$$$",
        "stay": "The Conrad is the architectural splurge — it occupies Frank Gehry's Grand LA, and the whole hotel is pitched at people who care about design, with a 16,000-square-foot terrace to match. You're in the Bunker Hill culture cluster, walking distance to the Walt Disney Concert Hall, The Broad, and MOCA, which is about as walkable as Los Angeles gets. At $$$$ it's the priciest downtown stay and you're paying for the building and the deck — worth it if architecture and the museums are your LA, less so if you came for the beach.",
        "verified": {
          "stay": "Occupies Frank Gehry's Grand LA on Bunker Hill; walkable to the Walt Disney Concert Hall, The Broad and MOCA — Confirmed by Karen 2026-07-18. (The deck itself is Tara Bernerd's work, not Gehry's — see the description.)"
        },
        "heroCredit": "Conrad Los Angeles"
      },
      {
        "name": "The Hollywood Grande, Autograph Collection",
        "slug": "hollywood-grande",
        "formerName": "Thompson Hollywood",
        "neighborhood": "Hollywood",
        "description": "The rooftop pool most likely to end up in your camera roll — the Hollywood Sign, the Hills and downtown all in the frame from eleven floors up, with Bar Lis alongside. Know what it is before you book: a heated four-foot lounging pool, not somewhere to swim laps.",
        "poolNote": "11th-floor rooftop pool · Hollywood Sign + Hills + Downtown · Heated year-round · ~4ft max depth · Bar Lis",
        "tags": [
          "Rooftop",
          "Hollywood Views",
          "Scene",
          "Year-Round"
        ],
        "priceRange": "$$$",
        "stay": "The Hollywood Grande is the photogenic one — the rooftop that ends up in everyone's camera roll, with the Hollywood Sign in the frame and Bar Lis running alongside it. It's in the heart of Hollywood, walkable to the boulevard and the nightlife, which is the whole point of basing here rather than downtown or the coast. At $$$ it's fair for the location and the view, but know what you're buying: a four-foot lounging pool on a deck that's a scene first — come on a weekday morning if you actually want to swim.",
        "verified": {
          "rebrand": "Converted from Thompson Hollywood (Hyatt) to The Hollywood Grande, Autograph Collection (Marriott) on 2025-07-29. Confirmed 2026-07-18 via Hotel Dive, Boutique Hotelier and The Points Guy; Booking.com's thompson-hollywood URL 301s to the-hollywood-grande. Do not revert the name.",
          "pool": "11th-floor rooftop (the building is 11 storeys), heated year-round, ~4ft maximum depth — a lounging pool rather than a lap pool. Bar Lis still operates under the new brand. Confirmed 2026-07-18."
        },
        "heroCredit": "The Hollywood Grande, Autograph Collection"
      },
      {
        "name": "Santa Monica Proper",
        "slug": "santa-monica-proper",
        "neighborhood": "Santa Monica",
        "description": "One of the very few rooftop pools on the Westside — heated, on the top deck, with a panorama of the Pacific, the coastline, and the mountains, plus a Balearic-leaning poolside kitchen. Laps with an ocean in the frame.",
        "poolNote": "Rooftop heated pool · Pacific + coastline · Alcoves + daybeds · Poolside dining",
        "tags": [
          "Rooftop",
          "Ocean Views",
          "Heated",
          "Design Hotel"
        ],
        "priceRange": "$$$$",
        "stay": "Santa Monica Proper is the beach-side design hotel — a Kelly Wearstler interior and one of the very few real rooftop pools on the Westside, aimed at the Pacific rather than a skyline. Being in Santa Monica changes the whole trip: you're walkable to the beach, the pier, and Third Street, and out of the daily downtown-to-Hollywood traffic entirely. At $$$$ it's a genuine splurge, but it's the one hotel here where the ocean is the view — the pick if you want the coast, not the city.",
        "verified": {
          "stay": "Kelly Wearstler interiors; Santa Monica, walkable to the beach, the pier and Third Street — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "Santa Monica Proper"
      },
      {
        "name": "The Godfrey Hotel Hollywood",
        "slug": "godfrey-hollywood",
        "neighborhood": "Hollywood",
        "description": "A 7th-floor pool with a genuine 360 — Hollywood Sign to Downtown to the ocean — and one of the biggest rooftop pool decks in Hollywood. More swimmable and less precious than its neighbors.",
        "poolNote": "7th-floor rooftop pool · 360° Sign-to-ocean views · Big deck",
        "tags": [
          "Rooftop",
          "360 Views",
          "Big Deck",
          "Hollywood"
        ],
        "priceRange": "$$$",
        "stay": "The Godfrey is the practical Hollywood pick — one of the biggest pool decks in the neighborhood and the most genuinely swimmable of the Hollywood rooftops, without the velvet-rope energy of its neighbors. Same Hollywood base as the Hollywood Grande and the Everly, so you're central to the boulevard and the studio side of town. At $$$ it's solid value for that 360 view — the pick if you want a big deck and a real swim rather than a scene.",
        "heroCredit": "The Godfrey Hotel Hollywood"
      },
      {
        "name": "Kimpton Everly Hotel",
        "slug": "kimpton-everly-hollywood",
        "neighborhood": "Hollywood",
        "description": "A 5th-floor rooftop pool tucked into the Hollywood Hills with six named cabanas, an outdoor lounge, and a skyline-and-hills panorama. Heated and open year-round — the calmer, more design-driven Hollywood rooftop.",
        "poolNote": "5th-floor rooftop pool · LA skyline + Hollywood Hills · Six cabanas · Year-round",
        "tags": [
          "Rooftop",
          "Hills Views",
          "Cabanas",
          "Year-Round"
        ],
        "priceRange": "$$$",
        "stay": "The Everly is the calm one in Hollywood — design-driven and lower-key, with six named cabanas and a heated pool that runs year-round rather than a weekend party on the roof. It sits up against the Hollywood Hills near Hollywood and Vine, walkable to the Metro, which in this city is worth more than it sounds. At $$$ it's priced like its Hollywood neighbors but delivers a quieter stay — the pick if you want the location without the noise.",
        "verified": {
          "stay": "Near Hollywood and Vine, walkable to the Metro station — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "Kimpton Everly Hotel"
      },
      {
        "name": "The Hoxton, Downtown LA",
        "slug": "hoxton-dtla",
        "neighborhood": "Downtown LA",
        "description": "A lagoon-colored rooftop pool beside Inanna Bar, with a wide-open downtown skyline view and — unusually for LA — an operator who commits to opening it every day of the year. The Hoxton's usual knack for a good-looking rooftop, applied to Broadway.",
        "poolNote": "Rooftop pool · DTLA skyline · Inanna Bar · Open year-round",
        "tags": [
          "Rooftop",
          "Skyline View",
          "Year-Round",
          "Design Hotel"
        ],
        "priceRange": "$$$",
        "stay": "The Hoxton is the design hotel that doesn't charge like one — the brand's usual good-looking, well-considered rooms, on Broadway in the middle of downtown's historic theater district. It's the value counterweight to the Conrad a few blocks away: same downtown base, considerably less money. At $$$ it's the best-priced design stay in DTLA and the pool is open year-round — the pick if you want downtown and style without the Conrad's bill.",
        "verified": {
          "stay": "On Broadway in downtown's historic theater district — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "The Hoxton, Downtown LA"
      }
    ]
  },
  "miami": {
    "slug": "miami",
    "city": "Miami",
    "state": "FL",
    "tagline": "Ocean on one side, Biscayne Bay on the other, sun 363 days a year — Miami's rooftop pool scene is less about the infrastructure and more about choosing which version of the light you want.",
    "neighborhoods": "South Beach & Brickell",
    "heroGradient": "linear-gradient(180deg, rgba(233,116,112,0.9) 0%, rgba(172,72,80,0.7) 28%, rgba(42,76,94,0.6) 60%, rgba(10,42,72,0.84) 100%)",
    "listingsHeading": "Pools that earn the sun.",
    "listingsLede": "Miami has more poolside options than anywhere else on this list — we picked the three rooftop and elevated pools where the setting, not the scene, is the reason to be there.",
    "noteLabel": "South Beach vs Brickell",
    "noteBody": "South Beach pools trend toward the theatrical; the crowd and the energy are part of what you're paying for. Brickell pools are newer, higher up, and more likely to give you the city-and-water view with less ambient noise. Neither is wrong — they're just different afternoons.",
    "hotels": [
      {
        "name": "1 Hotel South Beach",
        "slug": "1-hotel-south-beach",
        "neighborhood": "South Beach",
        "description": "The hotel that made sustainable design feel genuinely aspirational. Four pools on property, including a sprawling oceanside one that runs parallel to the Atlantic — the water-meets-water effect on a clear day is difficult to improve on. The adults-only swim is the rooftop, eighteen storeys up.",
        "poolNote": "4 pools · Oceanfront · 18th-floor adults-only rooftop pool (21+) · Year-round",
        "tags": [
          "Multiple Pools",
          "Oceanfront",
          "Eco-Certified",
          "Adults Deck"
        ],
        "bookingUrl": "https://www.1hotels.com/south-beach",
        "pick": true,
        "priceRange": "$$$$",
        "stay": "1 Hotel South Beach is the flagship that launched the brand — opened in 2015 as the first 1 Hotel, with the sustainability built into the fabric of the place: living green walls, reclaimed driftwood, and rooms that average some of the most generous square footage on the beach. It sits on 600 feet of beachfront at the quieter upper end of South Beach, walkable to the middle of the action without sleeping above the clubs. At $$$$ it's one of Miami's most expensive stays and books like it — worth it if you want the four pools, the ocean, and design with a conscience; look to Brickell if the South Beach premium isn't your trip.",
        "verified": {
          "stay": "Opened March 2015 as the brand's first hotel; 600 feet of beachfront on Collins Avenue at the upper end of South Beach; LEED Silver certified, living-wall and reclaimed-material design — Confirmed 2026-07-19 via 1hotels.com, Haute Living and Architizer."
        },
        "heroCredit": "1 Hotel South Beach"
      },
      {
        "name": "Dua Miami",
        "slug": "dua-miami",
        "neighborhood": "Brickell",
        "description": "The right rooftop pool for the Brickell crowd — two infinity pools looking straight into downtown Miami, a proper bar setup, and none of the tourist energy of South Beach. Rebranded from SLS Brickell to Dua Miami (Autograph Collection) in 2024.",
        "poolNote": "Two rooftop infinity pools · Downtown Miami views · Day passes · Rebranded from SLS Brickell",
        "tags": [
          "Infinity Edge",
          "Rooftop",
          "Brickell",
          "Day Pass"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "EAST Miami",
        "slug": "east-miami",
        "neighborhood": "Brickell",
        "description": "The pool deck spreads across the fifth floor of Brickell City Centre — four pools over 20,000 square feet, with downtown Miami stacked up around you rather than below you. Sugar, the bar forty floors above, is the altitude play; this is the swim.",
        "poolNote": "Four pools across a 5th-floor deck · Brickell City Centre · Downtown Miami views · Day passes",
        "tags": [
          "Pool Deck",
          "Brickell",
          "Downtown Views",
          "Day Pass"
        ],
        "bookingUrl": "https://www.east-miami.com",
        "priceRange": "$$$"
      }
    ]
  },
  "nashville": {
    "slug": "nashville",
    "city": "Nashville",
    "state": "TN",
    "tagline": "Nashville's skyline is still finding itself, which means the rooftop pools here have an uncrowded, almost provisional quality — the city built up fast, and the views haven't been discovered yet.",
    "neighborhoods": "Downtown & Midtown",
    "heroGradient": "linear-gradient(180deg, rgba(214,54,132,0.9) 0%, rgba(150,40,116,0.74) 34%, rgba(44,44,92,0.72) 66%, rgba(10,24,50,0.88) 100%)",
    "listingsHeading": "A skyline still worth watching.",
    "listingsLede": "Nashville's pool scene is smaller than the hype might suggest — but the two we've picked are genuinely good, and rarely as crowded as the honky-tonks below.",
    "noteLabel": "Timing matters in Nashville",
    "noteBody": "The rooftop pool scene here is seasonal in a way Miami's isn't. Most pools run May through October, some close earlier. Call ahead or check current hours — the city's hospitality industry is still calibrating after rapid expansion.",
    "hotels": [
      {
        "name": "Graduate by Hilton Nashville",
        "slug": "graduate-nashville",
        "neighborhood": "Vanderbilt / Midtown",
        "description": "The 12th-floor pool belongs to White Limozeen, the rooftop bar, rather than to the hotel — which means a reservation is required for everyone, including guests staying downstairs. Worth the planning: the bar program is better than it needs to be, and the downtown skyline reads as a clean, low-horizon Nashville silhouette that earns the elevation.",
        "poolNote": "12th-floor pool at White Limozeen · Nashville skyline · May–September · Reservation required for everyone",
        "tags": [
          "Seasonal",
          "Skyline",
          "Bar",
          "Reservation Required"
        ],
        "pick": true,
        "priceRange": "$$"
      },
      {
        "name": "The Nash",
        "slug": "the-nash-nashville",
        "neighborhood": "Downtown",
        "description": "Rebranded from the Bobby in 2026, but the rooftop kept its best trick: a retrofitted 1956 Scenicruiser bus parked on the deck, which could be tacky and somehow reads as exactly right. The pool is seasonal, genuinely swimmable, and looks out over the Nashville skyline and the Avenue of the Arts.",
        "poolNote": "Seasonal rooftop pool · 1956 Scenicruiser bus on deck · Nashville skyline · Hotel guests only",
        "tags": [
          "Seasonal",
          "Unique",
          "Bar",
          "Guests Only"
        ],
        "priceRange": "$$"
      }
    ]
  },
  "new-orleans": {
    "slug": "new-orleans",
    "city": "New Orleans",
    "state": "LA",
    "tagline": "New Orleans doesn't do rooftop pools the way other cities do — the city is at sea level, the architecture runs low and lateral, and the pleasure principle here is horizontal, not vertical. But the two that make the list are genuinely excellent.",
    "neighborhoods": "Warehouse District",
    "heroGradient": "linear-gradient(180deg, rgba(70,140,64,0.9) 0%, rgba(150,120,44,0.72) 38%, rgba(96,52,128,0.72) 70%, rgba(10,24,50,0.9) 100%)",
    "motif": "fleur-de-lis",
    "listingsHeading": "Two pools, no argument.",
    "listingsLede": "New Orleans has just two rooftop pools worth recommending. We picked both. The city compensates by making the bars better than they need to be.",
    "noteLabel": "Why the Warehouse District",
    "noteBody": "The French Quarter's historic building stock doesn't allow for rooftop development in the same way. The Warehouse District has absorbed the city's new boutique hotel inventory, and the two pools here are a short walk apart — easy to compare, easier to commit to.",
    "hotels": [
      {
        "name": "The Barnett",
        "slug": "the-barnett-new-orleans",
        "neighborhood": "Warehouse District",
        "description": "The old Ace, reborn as The Barnett — and the rooftop was rebuilt with it, now High Five Rooftop Pool & Bar nine floors above the Warehouse District. Sweeping downtown views, a proper bar, and a pool that runs on New Orleans weather rather than a calendar.",
        "poolNote": "9th-floor High Five rooftop pool · Downtown skyline · Seasonal, weather permitting · Day passes",
        "tags": [
          "Rooftop",
          "Skyline",
          "Bar",
          "Day Pass"
        ],
        "pick": true,
        "priceRange": "$$",
        "stay": "The Barnett is the one with the Ace's DNA — the hotel that brought lobby-scene culture to the Warehouse District, renamed and folded into Hyatt's JdV collection, still running a jazz club, a lobby bar, and a run of restaurants inside a 1920s Art Deco building on Carondelet. The Warehouse District is the right base for most New Orleans trips: galleries and restaurants around you, the French Quarter a walk away, and none of Bourbon Street's chaos outside the window. At $$ it's one of the city's better hotel values — the pick if you want personality and music in the building, with Hyatt points besides; the trade is a lobby that hums rather than hushes.",
        "verified": {
          "stay": "Former Ace Hotel New Orleans, rebranded The Barnett, part of JdV by Hyatt; 600 Carondelet St, a 1920s Art Deco building; retains a jazz club and the rooftop pool — Confirmed 2026-07-19 via thebarnett.com, Tablet Hotels and Booking.com's ace-new-orleans listing."
        },
        "heroCredit": "The Barnett"
      },
      {
        "name": "Virgin Hotels New Orleans",
        "slug": "virgin-hotels-new-orleans",
        "neighborhood": "Warehouse District",
        "description": "The Pool Club is the most sociable rooftop in the Warehouse District — heated, downtown skyline filling the view, and programming most afternoons. Worth knowing before you go: a day pass buys you the water, not a lounger. Poolside seating is reserved for hotel guests.",
        "poolNote": "Heated rooftop pool · Downtown skyline · Day passes from $25 · Loungers for hotel guests only",
        "tags": [
          "Day Pass",
          "Scene",
          "Heated",
          "Skyline"
        ],
        "bookingUrl": "https://virginhotels.com/new-orleans",
        "priceRange": "$$",
        "stay": "The Virgin is the glossy new-build — opened in 2021 at Baronne and Lafayette with the brand's usual venue stack: Commons Club on the ground floor, the Pool Club on the roof, and the Dreamboat lounge on thirteen. It sits on the CBD edge of the Warehouse District, still an easy walk to the Quarter and the convention center, with the hotel itself supplying most of the evening. At $$ it's priced like the Barnett and the choice between them is temperament — this one for programmed, sociable energy and a proper rooftop scene; and since poolside loungers are reserved for hotel guests, the room is worth more here than the day pass.",
        "verified": {
          "stay": "Opened August 18, 2021 at Baronne and Lafayette in the Warehouse District; Commons Club on the ground floor, Dreamboat lounge on the 13th floor, The Pool Club on the roof — Confirmed 2026-07-19 via PR Newswire (opening release) and NOLA.com."
        },
        "heroCredit": "Virgin Hotels New Orleans"
      }
    ]
  },
  "new-york": {
    "slug": "new-york",
    "city": "New York",
    "state": "NY",
    "tagline": "Manhattan on one side, Brooklyn on the other, the East River between them — every rooftop pool in this city has an opinion about which view is worth more.",
    "neighborhoods": "Manhattan & Brooklyn",
    "heroGradient": "linear-gradient(180deg, rgba(26,80,110,0.5) 0%, rgba(10,42,72,0.75) 100%)",
    "skyline": true,
    "listingsHeading": "Every pool, ranked honestly.",
    "listingsLede": "Our top pick is starred. The rest are ordered by how often we'd choose them given a free afternoon and a willing companion.",
    "noteLabel": "What we look for in New York",
    "noteBody": "The city has more rooftop pools than any other on this list, which means there are also more bad ones. We filter for unobstructed skyline sight-lines, a functioning day-pass option, and a bar program that isn't an afterthought. The ones here survived all three tests.",
    "hotels": [
      {
        "name": "The William Vale",
        "slug": "william-vale",
        "neighborhood": "Williamsburg",
        "description": "A 60-foot rooftop pool hovering over North Brooklyn, with the Manhattan skyline laid out across the water like it owes you something. The views change character with the light — blinding at noon, cinematic at dusk.",
        "poolNote": "60-ft heated pool (80°F) · May–September · Day passes available · Deck bar",
        "tags": [
          "Day Pass",
          "Skyline View",
          "Adults-Focused",
          "Heated"
        ],
        "bookingUrl": "https://www.thewilliamvale.com",
        "pick": true,
        "priceRange": "$$$",
        "stay": "The William Vale is Williamsburg's flagship — a 2016 tower at Wythe and North 12th where all 183 rooms and suites come with floor-to-ceiling glass and a private balcony, Andrew Carmellini's Leuca does southern Italian at street level, and Westlight pours on the 22nd floor. North Williamsburg is the other half of the argument: McCarren Park a block over, the Wythe Avenue strip below, and the Manhattan skyline performing across the river. At $$$ it's priced like the landmark it has become — the pick when the trip deserves the balcony, remembering the pool itself runs May to September even though the view works year-round.",
        "verified": {
          "stay": "Opened 2016 at Wythe Ave & N 12th St; 183 rooms and suites, all with private balconies; Westlight on the 22nd floor; Leuca (Andrew Carmellini / NoHo Hospitality) confirmed still on site — Confirmed 2026-07-19 via thewilliamvale.com, The Points Guy and Forbes."
        },
        "debunked": {
          "infinityEdge": "Confirmed not an infinity edge by Karen 2026-07-18, despite the claim appearing across third-party coverage. thewilliamvale.com never uses the word. Do not re-add."
        },
        "heroCredit": "The William Vale"
      },
      {
        "name": "Arlo Williamsburg",
        "slug": "arlo-williamsburg",
        "neighborhood": "Williamsburg",
        "description": "Compact but capable — the rooftop pool is on the smaller side but is rarely crowded at the right hours. Good for an afternoon session, especially mid-week; the operator programmes weekend DJ sets and Sunday day parties, so that is when the deck turns.",
        "poolNote": "Seasonal heated rooftop pool · 40-ft · East River views · Day passes + cabanas",
        "tags": [
          "Seasonal",
          "Day Pass",
          "East River Views",
          "Boutique"
        ],
        "priceRange": "$$",
        "stay": "The Arlo is the reborn one — the eight-story brick tower at 96 Wythe opened in 2017 as the Williamsburg Hotel, then re-emerged in September 2023 under Arlo after Quadrum Global bought it out of bankruptcy: 147 rooms with floor-to-ceiling windows, and the roof's old wooden water tower rebuilt as a glass-walled cocktail bar with the skyline behind the bottles. It shares the Vale's corner of North Williamsburg at half the ceremony, which is the appeal. At $$ it's the value way into the neighborhood — book it for a midweek swim and a water-tower nightcap, and know the deck turns into a party on summer weekends.",
        "verified": {
          "heated": "Confirmed directly by Karen, 2026-07-18 — not stated on arlohotels.com or artrooftops.com",
          "stay": "Building opened 2017 as the Williamsburg Hotel; reopened as Arlo Williamsburg September 12, 2023 after Quadrum Global's purchase out of bankruptcy; 147 rooms incl. 8 suites; original water tower rebuilt as a glass-walled rooftop cocktail bar — Confirmed 2026-07-19 via Crain's New York Business, Forbes and arlohotels.com."
        },
        "heroCredit": "Arlo Williamsburg"
      },
      {
        "name": "ModernHaus SoHo",
        "slug": "jimmy-james-soho",
        "neighborhood": "SoHo",
        "description": "Manhattan's most reliably fun rooftop pool — the Jimmy rooftop, atop what's now ModernHaus SoHo (formerly The James) — where the scene is the point and it delivers on sunny weekends. Eighteen storeys up, the panorama runs from the Hudson round to Midtown and the East River bridges. Note the bar is open to the public but the pool is not.",
        "poolNote": "18 storeys above SoHo · Hotel guests only · Memorial Day–Labor Day · 21+ after 5pm",
        "tags": [
          "Scene",
          "Guests Only",
          "Manhattan",
          "Seasonal"
        ],
        "priceRange": "$$$",
        "stay": "ModernHaus is the James reborn — the onetime James New York tower at Grand and Thompson closed in March 2020 and reopened in 2021 rebuilt around a serious art collection (Calder, Condo, and KAWS among them), with Selene doing modern Greek under a retractable roof and Jimmy running the 18th-floor deck. SoHo from here means the gallery-and-boutique grid at the door, with Tribeca a short walk south for dinner reservations. At $$$, book it knowing the deal: the pool is guests-only — the rare Manhattan scene pool you can only swim in by sleeping over — and that exclusivity is exactly what keeps the deck usable on a hot Saturday.",
        "verified": {
          "stay": "Formerly The James New York (closed March 2020); reopened April 2021 as ModernHaus SoHo at Grand & Thompson; 114 rooms; art collection incl. Calder, Condo and KAWS; Jimmy on the 18th floor; opening restaurant Veranda since replaced by Selene (modern Greek, retractable-roof atrium) — Confirmed 2026-07-19 via Tribeca Citizen, InsideHook and modernhaushotel.com."
        },
        "heroCredit": "ModernHaus SoHo"
      },
      {
        "name": "Gansevoort Meatpacking",
        "slug": "gansevoort-meatpacking",
        "neighborhood": "Meatpacking District",
        "description": "The rooftop pool that helped invent the Meatpacking scene — 45 feet of water held at 84°F so it stays swimmable while the district hums below. The Hudson sits to the west, the skyline to the east, and the crowd is exactly as seen-and-be-seen as the neighborhood promises. Guests and members only, which keeps it from tipping over.",
        "poolNote": "45-ft heated rooftop pool (84°F) · Hudson + downtown skyline · Year-round · Guests & members only",
        "tags": [
          "Heated",
          "Year-Round",
          "Skyline View",
          "Members Only"
        ],
        "priceRange": "$$$",
        "stay": "The Gansevoort is the Meatpacking original — the district's first luxury hotel when it opened in 2004, and still its anchor after a top-to-bottom renovation finished in 2021. The address is the win: the High Line, the Whitney, Chelsea Market, and Little Island are all a few minutes on foot, with the West Village directly south for dinner. At $$$ it's fair for the location and the year-round pool — the pick if you want downtown New York's gallery-and-dinner circuit at the door and a real swim above it; expect scene, not seclusion, on weekend evenings.",
        "verified": {
          "stay": "Opened 2004 as the Meatpacking District's first luxury hotel; 18 Ninth Ave at W 13th St, steps from the High Line, the Whitney, Chelsea Market and Little Island; full renovation completed 2021 — Confirmed 2026-07-19 via gansevoorthotelgroup.com and The Points Guy."
        },
        "heroCredit": "Gansevoort Meatpacking"
      }
    ]
  },
  "philadelphia": {
    "slug": "philadelphia",
    "city": "Philadelphia",
    "state": "PA",
    "tagline": "Philadelphia has one of the great American hotel pools and then a seasonal scramble behind it — a short list, sharply tiered, and worth knowing in order before you book a July weekend.",
    "neighborhoods": "Center City & Old City",
    "heroGradient": "linear-gradient(180deg, rgba(126,152,186,0.78) 0%, rgba(78,104,148,0.76) 40%, rgba(24,48,96,0.9) 74%, rgba(8,22,52,0.95) 100%)",
    "listingsHeading": "One tower, then everyone else.",
    "listingsLede": "The Four Seasons pool is 57 floors up and effectively uncontested in the region. What's interesting is the tier below it — a 24th-floor infinity edge, a year-round heated deck, and two seasonal rooftops that are better than they need to be.",
    "noteLabel": "Seasonality is the whole story here",
    "noteBody": "Unlike the Sun Belt cities on this list, most Philadelphia rooftop pools run Memorial Day to Labor Day and nothing more — the Windsor stretches to October, the Sonesta and the Wyndham do not. Only the Four Seasons and the W's WET deck are genuinely year-round. If you're planning anything outside high summer, confirm the pool is open before you book the room.",
    "hotels": [
      {
        "name": "Four Seasons Hotel Philadelphia",
        "slug": "four-seasons-philadelphia",
        "neighborhood": "Center City",
        "description": "The highest hotel pool in the region — a 57th-floor infinity edge atop Philadelphia's tallest tower, where you swim toward the drop with Center City lit sixty stories below and the Delaware River beyond. Adults-only early and late, and long enough for actual laps.",
        "poolNote": "57th-floor infinity pool · Center City + Delaware River · Laps possible · Adults-only hours",
        "tags": [
          "Rooftop",
          "Highest in Region",
          "Infinity Edge",
          "Skyline"
        ],
        "pick": true,
        "priceRange": "$$$$",
        "stay": "The Four Seasons is the outright splurge — it occupies the top floors of Philadelphia's tallest tower, and the 57th-floor pool is the reason people book it rather than an amenity they discover later. You're in Center City with the whole downtown underneath you, walkable to the business district and a short ride from everything else. At $$$$ it's the most expensive stay in the city and it knows it — worth it if the view is the trip, hard to justify if you mainly want a pool and a bed.",
        "verified": {
          "stay": "Occupies the top floors of Philadelphia's tallest tower, Center City — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "Four Seasons Hotel Philadelphia"
      },
      {
        "name": "The Windsor Suites",
        "slug": "windsor-suites-philadelphia",
        "neighborhood": "Logan Square",
        "description": "Twenty-four floors up on the Parkway, heated, with a water wall and a genuine panorama back across Center City. It is the best value-to-altitude ratio in the city by a wide margin — and it sells day passes, which the Four Seasons does not.",
        "poolNote": "24th-floor heated infinity pool · Center City panorama · May–October · Day passes available",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Skyline",
          "Day Pass"
        ],
        "priceRange": "$$",
        "stay": "The Windsor is the value play, and an all-suite one — rooms come with kitchens, which makes it the obvious pick for a longer stay or a family that doesn't want to eat every meal out. It sits on the Benjamin Franklin Parkway in Logan Square, walking distance to the art museums and a straight shot into Center City. At $$ it's the best value-to-altitude ratio in Philadelphia, and the deck runs May through October — the longest season in town — so it's the pick if you're watching the budget or traveling outside high summer.",
        "verified": {
          "stay": "All-suite property, rooms with kitchens; on the Benjamin Franklin Parkway in Logan Square, walkable to the art museums — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "The Windsor Suites"
      },
      {
        "name": "W Philadelphia",
        "slug": "w-philadelphia",
        "neighborhood": "Center City",
        "description": "The WET deck is heated and open all 365 days, which in Philadelphia is close to a category of one. Skyscrapers and City Hall in the sight-line, fire pits at the edge, and weekend programming that tips it firmly toward scene — go midweek if you actually want to swim.",
        "poolNote": "Elevated WET deck · Heated year-round · City Hall + skyline · Fire pits + cabanas · Seasonal day passes",
        "tags": [
          "Rooftop",
          "Year-Round",
          "Scene",
          "Day Pass"
        ],
        "priceRange": "$$$$",
        "stay": "The W is the scene — high-energy, design-forward, and the WET deck is heated all year, which in Philadelphia makes it nearly a category of one. It's in Center City near City Hall, walkable to the shopping and nightlife the hotel is clearly built around. At $$$$ you're paying for the brand, the buzz, and a pool you can use in February — go midweek if the swim is the point, because on weekends the deck belongs to the party.",
        "verified": {
          "stay": "Center City, near City Hall — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "W Philadelphia"
      },
      {
        "name": "Sonesta Philadelphia Rittenhouse Square",
        "slug": "sonesta-rittenhouse-philadelphia",
        "neighborhood": "Rittenhouse Square",
        "description": "Eighth-floor, heated, and deep enough at the far end to actually swim rather than stand around — which separates it from most seasonal hotel rooftops. The poolside bar runs Friday through Sunday and the crowd stays reasonable.",
        "poolNote": "8th-floor heated rooftop pool · 3–8ft depth · Memorial Day–Labor Day · Poolside bar Fri–Sun · Day passes",
        "tags": [
          "Rooftop",
          "Heated",
          "Swimmable Depth",
          "Day Pass"
        ],
        "priceRange": "$$$",
        "stay": "The Sonesta is the sensible middle — no particular scene, a pool deep enough to actually swim in, and a location that does a lot of the work. Rittenhouse Square is arguably the best neighborhood in Philadelphia to stay in: the city's densest run of good restaurants, walkable and pleasant in every direction. At $$$ it's fairly priced for the address — the pick if you want the neighborhood and a real swim, though the deck is Memorial Day to Labor Day only, so it's a summer-trip hotel.",
        "heroCredit": "Sonesta Philadelphia Rittenhouse Square"
      },
      {
        "name": "Wyndham Philadelphia Historic District",
        "slug": "wyndham-philadelphia-historic",
        "neighborhood": "Old City",
        "description": "The value entry, and honest about it — a uniform five-foot rooftop pool on the eighth floor in Old City, open high summer only. The view is more modest than the Center City decks, but it's a real swim in a walkable part of town for a fraction of the price.",
        "poolNote": "8th-floor rooftop pool · Uniform ~5ft depth · Old City skyline · Memorial Day–Labor Day",
        "tags": [
          "Rooftop",
          "Value",
          "Old City",
          "Seasonal"
        ],
        "priceRange": "$$",
        "stay": "The Wyndham is the budget, sightseeing-first choice — a straightforward hotel that doesn't pretend otherwise, with a modest rooftop pool and a location built for walking to the historic sites. Old City puts Independence Hall, the Liberty Bell, and the cobblestone blocks right outside, which is the whole reason to stay here. At $$ it's the cheapest way onto a Philadelphia rooftop and the deck is high summer only — the pick if the history trip is the point and the pool is a bonus, not the reason.",
        "verified": {
          "stay": "Old City, walkable to Independence Hall and the Liberty Bell — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "Wyndham Philadelphia Historic District"
      }
    ]
  },
  "phoenix": {
    "slug": "phoenix",
    "city": "Phoenix",
    "state": "AZ",
    "tagline": "The Valley of the Sun runs on pool weather nine months a year — and the rooftop ones trade the resort sprawl for a real view: downtown Phoenix one way, Camelback Mountain the other.",
    "neighborhoods": "Downtown Phoenix & Scottsdale",
    "heroGradient": "linear-gradient(180deg, rgba(229,96,32,0.92) 0%, rgba(158,58,110,0.8) 42%, rgba(41,20,110,0.9) 80%, rgba(14,20,54,0.96) 100%)",
    "listingsHeading": "Downtown one way, Camelback the other.",
    "listingsLede": "Skip the ground-level resort sprawl — these three put you on a roof with a real view and water warm enough to use most of the year.",
    "noteLabel": "Rooftop, not resort",
    "noteBody": "Arizona is full of gorgeous ground-level resort pools — these three are the genuine elevated ones, chosen for the view. The Valley's summer highs mean early or evening is the move; Camelback from the Canopy deck is best right at sunset.",
    "hotels": [
      {
        "name": "Kimpton Hotel Palomar Phoenix",
        "slug": "palomar-phoenix",
        "neighborhood": "Downtown Phoenix",
        "description": "A 3rd-floor rooftop pool at the Lustre garden, open to a sweeping downtown Phoenix skyline with cabanas and the Eden bar alongside. Downtown's most reliable rooftop swim, and the one that reads least like a resort.",
        "poolNote": "3rd-floor rooftop pool · Downtown Phoenix skyline · Cabanas · Eden Rooftop Bar",
        "tags": [
          "Rooftop",
          "Skyline View",
          "Cabanas",
          "Downtown"
        ],
        "pick": true,
        "priceRange": "$$$",
        "stay": "The Palomar is the city-Phoenix one — a 242-room Kimpton that opened in 2012 anchoring CityScape, downtown's dining-and-entertainment block, with Blue Hound Kitchen & Cocktails downstairs and the brand's nightly social hour in the lobby. Staying here means skyline over saguaro: Chase Field and the Suns' arena are on foot, and the blocks below actually have a pulse after dark, which downtown Phoenix could not always claim. At $$$ it's fairly priced for the address — the pick if the trip is games, shows, and restaurants rather than spa days, with the trade-off that the third-floor deck is an urban rooftop, not resort acreage.",
        "verified": {
          "stay": "Opened 2012 in CityScape; 242 rooms; Blue Hound Kitchen & Cocktails and Eden Rooftop Bar on site; nightly social hour; Chase Field and the Suns' arena nearby — Confirmed 2026-07-19 via IHG/Kimpton and hotelpalomar-phoenix.com."
        },
        "heroCredit": "Kimpton Hotel Palomar Phoenix"
      },
      {
        "name": "Canopy by Hilton Scottsdale Old Town",
        "slug": "canopy-scottsdale",
        "neighborhood": "Old Town Scottsdale",
        "description": "The Outrider rooftop delivers the one view Scottsdale visitors come for: Camelback Mountain, dead ahead, from a pool that faces it square on. The sunsets are the reason to book.",
        "poolNote": "Rooftop pool · Camelback Mountain views · Old Town Scottsdale · Sunset-facing",
        "tags": [
          "Rooftop",
          "Mountain Views",
          "Sunset",
          "Old Town"
        ],
        "priceRange": "$$$",
        "stay": "The Canopy was Old Town's first new hotel in more than a decade when it opened in October 2020 — 177 rooms of Southwest-leaning mid-century design, with Cobre Kitchen + Cocktails on the ground floor and the Outrider lounge running the seventh-floor roof. Old Town is the point of booking it: Scottsdale's galleries, restaurants, and bars start at the front door, so the car sits while the resort crowd drives in. At $$$ it's priced like its neighborhood — the pick for a night-out Scottsdale trip rather than a spa retreat, and the roof at sunset is the closing argument.",
        "verified": {
          "stay": "Opened October 1, 2020 at 7142 E 1st St — Old Town's first new hotel in over a decade; 177 rooms; Cobre Kitchen + Cocktails on the ground floor; Outrider Rooftop Lounge on the 7th floor — Confirmed 2026-07-19 via Hilton's opening release and scottsdale.org."
        },
        "heroCredit": "Canopy by Hilton Scottsdale Old Town"
      },
      {
        "name": "AC Hotel Phoenix Tempe/Downtown",
        "slug": "ac-hotel-tempe",
        "neighborhood": "Downtown Tempe",
        "description": "A rooftop pool and sun terrace looking over Tempe and ASU's stadium — the Valley's East Side entry, swimmable and well-served, with the Sun Devil skyline for company.",
        "poolNote": "Rooftop pool · Downtown Tempe · 21+ to check in",
        "tags": [
          "Rooftop",
          "Stadium Views",
          "Tempe",
          "Value"
        ],
        "priceRange": "$$",
        "stay": "The AC is the East Valley's practical one — a six-story, 159-room hotel that opened in June 2016 as the first on Tempe Town Lake, with the brand's usual Euro-minimal rooms and the AC Lounge doing tapas and cocktails off the lobby. Mill Avenue and the ASU campus are on foot and the lake path starts right outside, which covers a football weekend or a graduation without touching the car. At $$ it's the value entry on this list — book it for the address and the roof, remembering check-in is 21-and-up, so it's a grown-ups' base rather than a family one.",
        "verified": {
          "stay": "Opened June 2016; first hotel on Tempe Town Lake; six stories, 159 rooms; AC Lounge on site; Mill Avenue and ASU walkable — Confirmed 2026-07-19 via Tempe Tourism and Marriott."
        },
        "heroCredit": "AC Hotel Phoenix Tempe/Downtown"
      }
    ]
  },
  "san-diego": {
    "slug": "san-diego",
    "city": "San Diego",
    "state": "CA",
    "tagline": "Perfect weather, a walkable Gaslamp, and a bay that glows at sunset — San Diego's rooftop pools are less about the scene than the setting, and the setting is hard to beat.",
    "neighborhoods": "Gaslamp Quarter & Bayfront",
    "heroGradient": "linear-gradient(180deg, rgba(38,180,182,0.74) 0%, rgba(26,124,148,0.6) 44%, rgba(10,44,84,0.84) 100%)",
    "listingsHeading": "Swim toward the bay.",
    "listingsLede": "San Diego's rooftops trade scene for setting — the Gaslamp skyline, the harbor, the Coronado Bridge, all from water you can actually swim in. Five that deliver.",
    "noteLabel": "Gaslamp vs Bayfront",
    "noteBody": "the Gaslamp rooftops — Pendry, Andaz, Solamar, Hard Rock — put you over the nightlife with skyline views; the InterContinental trades that for a straight bay-and-harbor panorama. All are a short walk from the Embarcadero, so it comes down to skyline or water.",
    "hotels": [
      {
        "name": "Pendry San Diego",
        "slug": "pendry-san-diego",
        "neighborhood": "Gaslamp Quarter",
        "description": "The Pool House rooftop perches above 5th Avenue with a sun-drenched deck and sweeping Gaslamp and downtown views — the Gaslamp's most polished rooftop swim, and its strongest luxury reputation.",
        "poolNote": "Rooftop pool · Gaslamp + downtown skyline · Cabanas · Non-guest cabanas Mon–Thu only",
        "tags": [
          "Rooftop",
          "Skyline View",
          "Gaslamp",
          "Luxury"
        ],
        "pick": true,
        "priceRange": "$$$$",
        "stay": "The Pendry is the Gaslamp's luxury flagship — the first hotel of Montage International's contemporary Pendry brand, opened in 2017 with enough in-house bars and restaurants that the evening can start and end without leaving the building. You're on J Street in the thick of the district, a few blocks from Petco Park and the convention center, with the nightlife beginning at the front door. At $$$$ it's the most expensive way to stay downtown — worth it if you want real luxury with the scene built in, less so if you'd rather sleep somewhere the street goes quiet.",
        "verified": {
          "stay": "First hotel of Montage International's Pendry brand, opened February 2017; on J Street a few blocks from Petco Park and the convention center — Confirmed 2026-07-19 via the opening press release (PR Newswire) and Times of San Diego."
        },
        "heroCredit": "Pendry San Diego"
      },
      {
        "name": "Andaz San Diego",
        "slug": "andaz-san-diego",
        "neighborhood": "Gaslamp Quarter",
        "description": "A heated, lap-size rooftop pool seven stories over the Gaslamp with a downtown skyline view. Scene-y on weekends, genuinely swimmable on a weekday morning — pick your hour.",
        "poolNote": "Rooftop pool · Lap-size, heated to 80° · Gaslamp skyline · Hotel guests only",
        "tags": [
          "Rooftop",
          "Lap Pool",
          "Skyline View",
          "Gaslamp"
        ],
        "priceRange": "$$$",
        "stay": "The Andaz is the historic one behind a modern face — Hyatt's boutique brand inside a 1913 building that spent decades as the Maryland Hotel, now running in the brand's usual dark, design-forward idiom. It sits on F Street at the northern edge of the Gaslamp, so everything the district does after dark is walkable while the loudest blocks stay a little further off. At $$$ it's fairly priced for the character and the roof — the pick if you want boutique history and a genuinely swimmable pool over big-hotel polish.",
        "verified": {
          "stay": "Occupies the 1913 Sefton building (later the Maryland Hotel), reopened as Andaz in 2010; northern edge of the Gaslamp at 600 F Street — Confirmed 2026-07-19 via gaslamp.org and Fathom."
        },
        "heroCredit": "Andaz San Diego"
      },
      {
        "name": "InterContinental San Diego",
        "slug": "intercontinental-san-diego",
        "neighborhood": "Embarcadero",
        "description": "The Layover rooftop pool sits four floors up on the Embarcadero with San Diego Bay filling the view — cabanas, a proper bar, and the harbour traffic going by below. Pool access is included in the guest amenity fee.",
        "poolNote": "4th-floor rooftop pool · San Diego Bay views · Layover bar · Cabanas",
        "tags": [
          "Rooftop",
          "Bay Views",
          "Bayfront",
          "Cabanas"
        ],
        "priceRange": "$$$",
        "stay": "The InterContinental is the bayfront choice — a glassy full-service tower from 2018 built on the site of Lane Field, where the Padres played before Petco, with the harbor rather than the Gaslamp filling the windows. You're on the Embarcadero across from the Santa Fe Depot, steps from the USS Midway and the Maritime Museum, with the Gaslamp a walk down the waterfront rather than outside the door. At $$$ it's fair for waterfront polish — the pick if the bay and the harbor light are the trip, less so if you want the nightlife at arm's reach.",
        "verified": {
          "stay": "Opened September 2018 on the former Lane Field site (the Padres' home 1936–1957), across from the Santa Fe Depot and steps from the USS Midway and the Maritime Museum — Confirmed 2026-07-19 via IHG's opening release."
        },
        "heroCredit": "InterContinental San Diego"
      },
      {
        "name": "Margaritaville Hotel San Diego Gaslamp Quarter",
        "slug": "margaritaville-san-diego",
        "neighborhood": "Gaslamp Quarter",
        "description": "Rebranded from the Kimpton Solamar in 2023 after a gut renovation, and the rooftop came out the other side as what the operator calls downtown San Diego's largest rooftop pool. The Gaslamp is right below and 5 o'Clock Somewhere handles the drinks — sillier than its neighbours, and a bigger swim than any of them.",
        "poolNote": "Rooftop pool · Downtown San Diego's largest · Gaslamp Quarter · 5 o'Clock Somewhere Bar",
        "tags": [
          "Rooftop",
          "Largest Downtown",
          "Gaslamp",
          "Scene"
        ],
        "priceRange": "$$",
        "stay": "Margaritaville is the one that refuses to take itself seriously, on purpose — the former Kimpton Solamar, gut-renovated and rebranded in 2023 as the brand's first city-center hotel on the West Coast. It keeps the same Gaslamp corner near Petco Park, so you get the walkable downtown base without the luxury-tier bill. At $$ it's the value play of the district — the pick if you want the rooftop pool the operator bills as downtown's largest and a vacation mood over designer restraint; skip it if the island-life theming would wear thin by day two.",
        "verified": {
          "stay": "Rebranded from Kimpton Hotel Solamar in August 2023 after a reported ~$30M renovation; the brand's first city-center hotel on the West Coast — Confirmed 2026-07-19 via San Diego Magazine and Meetings & Conventions."
        },
        "heroCredit": "Margaritaville Hotel San Diego Gaslamp Quarter"
      },
      {
        "name": "Hard Rock Hotel San Diego",
        "slug": "hard-rock-san-diego",
        "neighborhood": "Gaslamp Quarter",
        "description": "FLOAT is the fourth-floor rooftop pool and lounge, looking over the harbour, the Gaslamp and the Coronado Bridge. It runs seasonally and weather permitting — and the hotel is mid-renovation under new management, so confirm before you plan around it.",
        "poolNote": "Rooftop pool (FLOAT) · Harbor + Coronado Bridge · Seasonal, weather permitting",
        "tags": [
          "Rooftop",
          "Harbor Views",
          "Seasonal",
          "Gaslamp"
        ],
        "priceRange": "$$",
        "stay": "The Hard Rock is the wild card right now — the music-branded party hotel at the Gaslamp's Fifth Avenue entrance, across the street from the convention center, and in the middle of a change of era: new management arrived in mid-2025 with a full renovation to follow. The location is as convenient as downtown San Diego gets for a convention or a Padres game, which is exactly why people keep booking it through the disruption. At $$ it can be a genuine deal — the pick if the address matters most and you've confirmed what's open for your dates, the pool included; look elsewhere if you want a sure thing.",
        "verified": {
          "stay": "Coury Hospitality took over management July 2025 ahead of a full renovation planned for 2026; across the street from the San Diego Convention Center — Confirmed 2026-07-19 via Lodging Magazine and Fox 5 San Diego."
        },
        "heroCredit": "Hard Rock Hotel San Diego"
      }
    ]
  },
  "washington-dc": {
    "slug": "washington-dc",
    "city": "Washington",
    "state": "DC",
    "tagline": "The height limit means Washington will never have a skyline pool, and that turns out to be the interesting part — eleven floors is the top of the world here, and the view is the Capitol dome rather than a wall of glass.",
    "neighborhoods": "Capitol Hill & Logan Circle",
    "heroGradient": "linear-gradient(180deg, rgba(108,92,100,0.9) 0%, rgba(78,78,104,0.86) 34%, rgba(38,54,96,0.86) 66%, rgba(8,20,48,0.95) 100%)",
    "listingsHeading": "Three that clear the cornice.",
    "listingsLede": "Washington's building-height act caps most of the city around thirteen floors, so there is no infinity edge over a canyon here — and genuinely few hotel pools at all. These three are the real ones; almost everything else marketed as a DC rooftop pool is a bar.",
    "noteLabel": "Why the list is short",
    "noteBody": "We looked at more than twenty DC properties and cut nearly all of them: the Watergate, Mandarin Oriental and Salamander pools are indoor; the LINE, Eaton, Riggs, Conrad and Thompson have rooftop bars and no pool at all; the Capitol Skyline and Palomar pools sit at ground level. In a city this height-restricted, three genuine elevated swims is the honest number.",
    "hotels": [
      {
        "name": "InterContinental Washington D.C. – The Wharf",
        "slug": "intercontinental-dc-wharf",
        "neighborhood": "The Wharf",
        "description": "Washington has almost no true rooftop hotel pools; the WAVES deck here is the exception, looking over the Potomac waterfront and the DC skyline. Heated, guest-only, and an actual swim — not a bar with a puddle.",
        "poolNote": "Rooftop WAVES pool · Potomac waterfront + skyline · Heated · Guest-only",
        "tags": [
          "Rooftop",
          "Waterfront",
          "Skyline",
          "Rare"
        ],
        "pick": true,
        "priceRange": "$$$",
        "stay": "The InterContinental is the polished, waterfront choice — a full-service luxury hotel on The Wharf, DC's redeveloped Potomac-side strip of restaurants, bars, and the Anthem music hall, with one of the only real rooftop pools in the city up top. You're on the water and walkable to the Wharf's dining and the Tidal Basin, though it's a Metro ride or a long walk from the Mall's museums. At $$$ it's fair for waterfront luxury in a city where a swimmable rooftop barely exists — the pick if the Wharf scene and the pool are the point.",
        "verified": {
          "stay": "On The Wharf, DC's Potomac-side dining/nightlife strip; the Anthem music hall is at The Wharf — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "InterContinental Washington D.C. – The Wharf"
      },
      {
        "name": "YOTEL Washington DC",
        "slug": "yotel-washington-dc",
        "neighborhood": "Capitol Hill",
        "description": "Deck 11 is the largest rooftop pool on Capitol Hill and the only one where the Capitol dome is genuinely the view rather than a rumour of one. Eight hundred square feet of water inside an eight-thousand-square-foot deck, and day passes for about fifty dollars — the most accessible good pool in the city.",
        "poolNote": "11th-floor pool · ~800 sq ft in an 8,000 sq ft deck · Capitol dome views · Seasonal · Day passes ~$50",
        "tags": [
          "Rooftop",
          "Capitol Views",
          "Day Pass",
          "Largest on the Hill"
        ],
        "priceRange": "$$",
        "stay": "YOTEL is the value play — a compact, tech-forward hotel where the rooms (YOTEL calls them cabins) are small and efficient by design, the trade for a Capitol Hill address and the most accessible good pool in the city. You're near Union Station and the Capitol, walkable to the Hill and a quick Metro to everywhere else. At $$ it's the cheapest way onto a genuinely good DC rooftop — the pick if location and the pool matter more than square footage; skip it if you want a spacious, traditional room.",
        "verified": {
          "stay": "Rooms are branded 'cabins' (compact by design); Capitol Hill, near Union Station and the Capitol — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "YOTEL Washington DC"
      },
      {
        "name": "Hotel Zena Washington DC",
        "slug": "hotel-zena-dc",
        "neighborhood": "Logan Circle",
        "description": "Fourteen floors up on the 14th Street corridor, which in Washington counts as altitude. It is a real swim during the day and turns into Hedy's bar crowd after dark, so the move is a morning lap and an early afternoon before the deck changes character.",
        "poolNote": "14th-floor rooftop pool · City skyline · Memorial Day–Labor Day · 8am–8pm · Cabanas via day pass",
        "tags": [
          "Rooftop",
          "Skyline",
          "Logan Circle",
          "Cabanas"
        ],
        "priceRange": "$$$",
        "stay": "Zena is the design statement — a boldly art-forward hotel built around a theme of female empowerment, with a gallery's worth of work in the public spaces and a rooftop that swims by day and becomes Hedy's bar crowd after dark. It's on the 14th Street corridor in Logan Circle, one of DC's best strips for restaurants and nightlife, walkable and lively. At $$$ you're paying for the design and the location as much as the room — the pick if you want personality and a night-out neighborhood, less so if you want a quiet, classic DC stay.",
        "verified": {
          "stay": "Art-forward hotel themed around female empowerment; 14th Street corridor, Logan Circle — Confirmed by Karen 2026-07-18."
        },
        "heroCredit": "Hotel Zena Washington DC"
      }
    ]
  }
};

export const CITY_SLUGS = Object.keys(CITIES);

/** Flat list of every hotel, tagged with the city it belongs to. */
export const ALL_HOTELS = Object.values(CITIES).flatMap((c) =>
  c.hotels.map((h) => ({ ...h, citySlug: c.slug, city: c.city, state: c.state })),
);

/** Look up one hotel by its globally-unique slug. */
export const hotelBySlug = (slug) => ALL_HOTELS.find((h) => h.slug === slug);
