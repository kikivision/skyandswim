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
        "priceRange": "$$$$"
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
        "priceRange": "$$$"
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
        "priceRange": "$$$$"
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
        "priceRange": "$$"
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
        "priceRange": "$$$"
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
        "priceRange": "$$$"
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
        "priceRange": "$$"
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
        "verified": {
          "pool": "75-ft infinity lap pool — Confirmed by Karen 2026-07-18. thejacquard.com publishes no dimensions and third-party sources disagreed on whether it is a lap pool."
        }
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
        "priceRange": "$$"
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
    "noteBody": "several of these double as weekend party decks — for an actual swim, aim for a weekday morning. Conrad DTLA and Santa Monica Proper hold up as genuine pools any day of the week; Thompson and the Hollywood rooftops peak socially after 4pm.",
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
        "heroCredit": "Conrad Los Angeles"
      },
      {
        "name": "Thompson Hollywood",
        "slug": "thompson-hollywood",
        "neighborhood": "Hollywood",
        "description": "The rooftop pool most likely to end up in your camera roll — Hollywood Hills and the Hollywood Sign filling the frame, with Bar Lis and its retractable roof alongside. It doubles as a scene, but the view earns it.",
        "poolNote": "Rooftop pool · Hollywood Hills + Hollywood Sign · Bar Lis · Scene",
        "tags": [
          "Rooftop",
          "Hollywood Views",
          "Scene",
          "Sunset"
        ],
        "priceRange": "$$$",
        "stay": "Thompson Hollywood is the photogenic one — the rooftop that ends up in everyone's camera roll, with the Hollywood Sign in the frame and Bar Lis running alongside it. It's in the heart of Hollywood, walkable to the boulevard and the nightlife, which is the whole point of basing here rather than downtown or the coast. At $$$ it's fair for the location and the view, but know what you're buying: this deck is a scene first — come on a weekday morning if you actually want to swim."
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
        "stay": "Santa Monica Proper is the beach-side design hotel — a Kelly Wearstler interior and one of the very few real rooftop pools on the Westside, aimed at the Pacific rather than a skyline. Being in Santa Monica changes the whole trip: you're walkable to the beach, the pier, and Third Street, and out of the daily downtown-to-Hollywood traffic entirely. At $$$$ it's a genuine splurge, but it's the one hotel here where the ocean is the view — the pick if you want the coast, not the city."
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
        "stay": "The Godfrey is the practical Hollywood pick — one of the biggest pool decks in the neighborhood and the most genuinely swimmable of the Hollywood rooftops, without the velvet-rope energy of its neighbors. Same Hollywood base as the Thompson and the Everly, so you're central to the boulevard and the studio side of town. At $$$ it's solid value for that 360 view — the pick if you want a big deck and a real swim rather than a scene."
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
        "stay": "The Everly is the calm one in Hollywood — design-driven and lower-key, with six named cabanas and a heated pool that runs year-round rather than a weekend party on the roof. It sits up against the Hollywood Hills near Hollywood and Vine, walkable to the Metro, which in this city is worth more than it sounds. At $$$ it's priced like its Hollywood neighbors but delivers a quieter stay — the pick if you want the location without the noise."
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
        "stay": "The Hoxton is the design hotel that doesn't charge like one — the brand's usual good-looking, well-considered rooms, on Broadway in the middle of downtown's historic theater district. It's the value counterweight to the Conrad a few blocks away: same downtown base, considerably less money. At $$$ it's the best-priced design stay in DTLA and the pool is open year-round — the pick if you want downtown and style without the Conrad's bill."
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
        "priceRange": "$$"
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
        "priceRange": "$$"
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
        "verified": {
          "heated": "Confirmed directly by Karen, 2026-07-18 — not stated on arlohotels.com or artrooftops.com"
        }
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
        "priceRange": "$$$"
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
    "noteBody": "Arizona is full of gorgeous ground-level resort pools — these four are the genuine elevated ones, chosen for the view. The Valley's summer highs mean early or evening is the move; Camelback from the Canopy deck is best right at sunset.",
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
        "priceRange": "$$$"
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
        "priceRange": "$$$"
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
        "priceRange": "$$"
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
        "priceRange": "$$$$"
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
        "priceRange": "$$$"
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
        "priceRange": "$$$"
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
        "priceRange": "$$"
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
        "priceRange": "$$"
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
