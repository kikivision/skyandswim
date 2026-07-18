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
    "noteBody": "Austin averages 228 sunny days a year, which means unlike Nashville or Denver, most of these pools run 12 months. The window from October through February is actually the underrated time — warm water, thinner crowds, and the full Austin skyline without the August heat.",
    "hotels": [
      {
        "name": "W Austin",
        "slug": "w-austin",
        "neighborhood": "Downtown",
        "description": "WET deck — the W's branded pool experience — is Austin's most premium rooftop pool offering, situated above the 2nd Street District with views into the Congress Avenue corridor. The DJ schedule means it leans scene on weekends, serene midweek.",
        "poolNote": "WET deck · Downtown views · DJ weekends · Day passes",
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
        "description": "Named for the songwriter, the hotel carries the music city energy well. The rooftop pool deck faces east toward the Colorado River, and the Rainey Street neighborhood below provides a lively context without intruding on the deck itself.",
        "poolNote": "River-facing pool · Rainey Street location · Live music events",
        "tags": [
          "River View",
          "Rainey Street",
          "Live Music",
          "Boutique"
        ],
        "bookingUrl": "https://www.hotelvanzandt.com",
        "priceRange": "$$$"
      },
      {
        "name": "Austin Proper",
        "slug": "austin-proper",
        "neighborhood": "Second Street",
        "description": "Kelly Wearstler's design makes Austin Proper's rooftop pool feel like a set piece — and it is, but a very good one. The pool is heated year-round and the adjacent bar is one of the better designed rooftop spaces in the city.",
        "poolNote": "Year-round heated · Wearstler-designed deck · Excellent bar",
        "tags": [
          "Year-Round",
          "Design Hotel",
          "Bar",
          "Aesthetic"
        ],
        "bookingUrl": "https://www.properhotels.com/austin",
        "priceRange": "$$$$"
      },
      {
        "name": "Cambria Austin Downtown",
        "slug": "cambria-austin-downtown",
        "neighborhood": "Downtown",
        "description": "The value pick in downtown Austin — a smaller rooftop pool with clean views and a deck that doesn't try too hard. Good option when the bigger properties are sold out or over-priced for the weekend.",
        "poolNote": "Compact rooftop pool · Downtown access · Best value midrise option",
        "tags": [
          "Value",
          "Compact",
          "Downtown"
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
    "listingsLede": "Chicago's rooftop pools compete with what may be the finest collection of buildings any American skyline has produced. The ones here have the views to justify the comparison.",
    "noteLabel": "Chicago is seasonal",
    "noteBody": "Unlike the Sun Belt cities on this list, most Chicago rooftop pools operate May through September, with some brave enough to stay open into October. If you're planning a spring or fall trip, confirm current pool status before booking — nothing deflates a Chicago weekend like a drained rooftop.",
    "hotels": [
      {
        "name": "Viceroy Chicago",
        "slug": "viceroy-chicago",
        "neighborhood": "Gold Coast",
        "description": "Eighteen floors up in the Gold Coast, the Viceroy trades the Loop's architecture for Lake Michigan — a heated, guest-only rooftop deck beside the Devereaux bar where, on the right afternoon, the water and the lake read as one blue plane. Seasonal, and worth timing a trip around.",
        "poolNote": "18th-floor rooftop pool · Lake Michigan + Gold Coast views · Guest-exclusive · Seasonal",
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
        "description": "The Hoxton stacks a rooftop pool above Cabra's Peruvian rooftop restaurant, with the West Loop and the downtown skyline filling the frame. Seasonal and guest-favored, it's the most design-forward pool deck in the neighborhood that's become the city's most design-forward.",
        "poolNote": "Rooftop pool above Cabra · Fulton Market skyline · Guests + members · Seasonal",
        "tags": [
          "Rooftop",
          "Skyline View",
          "Fulton Market",
          "Design Hotel"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "DoubleTree by Hilton Chicago – Magnificent Mile",
        "slug": "doubletree-mag-mile",
        "neighborhood": "Streeterville",
        "description": "Thirty floors up in Streeterville, this is the highest genuinely swimmable rooftop pool on the list — a heated deck with a panoramic downtown sweep and cabanas for the afternoon. Unfussy, well-placed, and a real value for the elevation.",
        "poolNote": "30th-floor rooftop pool · Panoramic downtown views · Cabanas · Seasonal",
        "tags": [
          "Rooftop",
          "High Floor",
          "Panoramic",
          "Value"
        ],
        "priceRange": "$$"
      },
      {
        "name": "Radisson Blu Aqua Chicago",
        "slug": "radisson-blu-aqua-chicago",
        "neighborhood": "Lakeshore East",
        "description": "The city's most serious rooftop swim: a 25-meter outdoor lap pool on the Aqua tower's 80,000-square-foot sky-deck, ringed by cabanas, fire pits, and a quarter-mile track. It sits on the podium rather than the summit, but the skyline is right there and the water is long enough to actually swim.",
        "poolNote": "25m outdoor lap pool · Elevated Aqua sky-deck · Cabanas + fire pits · Skyline views",
        "tags": [
          "Lap Pool",
          "Elevated",
          "Skyline View",
          "Big Deck"
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
    "noteBody": "the Main Street District clusters the historic-tower rooftops — Joule, Thompson, Statler, Adolphus — within a few blocks of each other; Uptown's Swexan and Victory Park's W trade walkability for sheer height. Either way, the Texas heat keeps most of them usable close to year-round.",
    "hotels": [
      {
        "name": "The Joule",
        "slug": "the-joule-dallas",
        "neighborhood": "Main Street District",
        "description": "Downtown's showpiece: a rooftop pool cantilevered eight feet past the building edge behind glass, so you swim out over Main Street ten floors up and look straight down. The single most distinctive pool in Texas.",
        "poolNote": "Rooftop pool · Glass ledge over Main Street · 10 floors up · Cabanas",
        "tags": [
          "Rooftop",
          "Glass Ledge",
          "Iconic",
          "Downtown"
        ],
        "pick": true,
        "priceRange": "$$$$"
      },
      {
        "name": "Thompson Dallas",
        "slug": "thompson-dallas",
        "neighborhood": "Main Street District",
        "description": "A heated infinity-edge rooftop pool atop The National tower, with an open-air sweep of the downtown skyline, private cabanas, and poolside dining. The polished, grown-up end of the Dallas rooftop scene.",
        "poolNote": "Rooftop infinity-edge pool · Downtown skyline · Cabanas · Poolside dining",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Skyline",
          "Downtown"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "Hôtel Swexan",
        "slug": "hotel-swexan-dallas",
        "neighborhood": "Harwood District",
        "description": "A 75-foot infinity-edge pool on the 20th floor with a 180-degree turn of the Dallas skyline, a guests-only deck, cabanas, and the Pomelo pool bar. The newest and highest of the city's serious pools.",
        "poolNote": "20th-floor 75-ft infinity pool · 180° skyline · Guests-only · Pool bar",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "High Floor",
          "Uptown"
        ],
        "priceRange": "$$$$"
      },
      {
        "name": "W Dallas – Victory",
        "slug": "w-dallas-victory",
        "neighborhood": "Victory Park",
        "description": "The 16th-floor WET Deck puts an infinity edge and a glass wall between you and the skyline, so you can swim right up to the view. Daybeds, a full bar, and the Victory Park energy below.",
        "poolNote": "16th-floor WET Deck infinity pool · Skyline · Daybeds · Full bar",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Scene",
          "High Floor"
        ],
        "priceRange": "$$$"
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
        "priceRange": "$$$"
      },
      {
        "name": "The Adolphus",
        "slug": "the-adolphus-dallas",
        "neighborhood": "Main Street District",
        "description": "The 1912 grande dame caps itself with a temperature-controlled rooftop pool deck — cabanas, a fire pit, a full pool bar, and downtown views from a genuine Dallas landmark.",
        "poolNote": "Rooftop pool deck · Downtown views · Cabanas + fire pit · Historic 1912 landmark",
        "tags": [
          "Rooftop",
          "Historic",
          "Cabanas",
          "Downtown"
        ],
        "priceRange": "$$$"
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
        "priceRange": "$$$"
      },
      {
        "name": "The Jacquard, Autograph Collection",
        "slug": "jacquard-denver",
        "neighborhood": "Cherry Creek North",
        "description": "A 75-foot rooftop infinity lap pool in Cherry Creek North, with a 180-degree turn of the Rockies on one side and downtown Denver on the other — the rare Denver pool where you can actually swim laps with the Front Range in the frame. Kisbee on the Roof handles the drinks.",
        "poolNote": "75-ft rooftop infinity lap pool · 180° Rockies + downtown · Kisbee rooftop bar · Opens 6am",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Mountain Views",
          "Lap Pool"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "Warwick Denver",
        "slug": "warwick-denver",
        "neighborhood": "Uptown",
        "description": "One of Denver's longest-running rooftop pools — heated and open year-round on the Warwick's top floor, the Front Range on the horizon and cabanas for the wait. Less scene than the newer arrivals, more reliable; here, the pool is actually the point.",
        "poolNote": "Top-floor heated rooftop pool · Year-round · Front Range + skyline · Cabanas",
        "tags": [
          "Rooftop",
          "Year-Round",
          "Mountain Views",
          "Heated"
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
        "priceRange": "$$$"
      },
      {
        "name": "Thompson Houston, by Hyatt",
        "slug": "thompson-houston",
        "neighborhood": "Fourth Ward",
        "description": "The newest serious pool in the city, and it shows — a tiled infinity edge on a seventh-floor deck that runs close to an acre, with Buffalo Bayou Park green on one side and downtown glass on the other. Rare thing for Houston: a pool deck with actual landscape in the view, not just tower.",
        "poolNote": "7th-floor deck · Tiled infinity edge · Buffalo Bayou Park + skyline · Cabanas · Opened 2024",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Park Views",
          "New"
        ],
        "priceRange": "$$$$"
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
        "priceRange": "$$$$"
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
        "priceRange": "$$$$"
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
        "priceRange": "$$$"
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
        "description": "A Frank Gehry-designed rooftop with a 16,000-square-foot deck and an infinity pool looking straight across downtown to City Hall and the Walt Disney Concert Hall. The largest and most architecturally serious rooftop pool in the city.",
        "poolNote": "Rooftop infinity pool · 16,000 sq ft Gehry deck · DTLA + Disney Concert Hall · Cabanas",
        "tags": [
          "Rooftop",
          "Infinity Edge",
          "Architecture",
          "Downtown"
        ],
        "pick": true,
        "priceRange": "$$$$"
      },
      {
        "name": "Thompson Hollywood",
        "slug": "thompson-hollywood",
        "neighborhood": "Hollywood",
        "description": "The rooftop pool most likely to end up in your camera roll — Hollywood Hills and the Hollywood Sign on one side, the Pacific haze on the other. It doubles as a scene, but the view earns it.",
        "poolNote": "Rooftop pool · Hollywood Sign + Pacific · Rooftop bar · Scene",
        "tags": [
          "Rooftop",
          "Hollywood Views",
          "Scene",
          "Sunset"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "Santa Monica Proper",
        "slug": "santa-monica-proper",
        "neighborhood": "Santa Monica",
        "description": "The only rooftop pool on the Westside — a heated saltwater pool on the top deck with a panorama of the Pacific, the coastline, and the mountains, plus a Balearic-leaning poolside kitchen. Laps with an ocean in the frame.",
        "poolNote": "Rooftop saltwater pool · Pacific + coastline · Cabanas · Poolside dining",
        "tags": [
          "Rooftop",
          "Ocean Views",
          "Saltwater",
          "Design Hotel"
        ],
        "priceRange": "$$$$"
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
        "priceRange": "$$$"
      },
      {
        "name": "Kimpton Everly Hotel",
        "slug": "kimpton-everly-hollywood",
        "neighborhood": "Hollywood",
        "description": "A 5th-floor rooftop pool tucked into the Hollywood Hills with six cabanas, an outdoor lounge, and Sign-and-skyline views. The calmer, more design-driven Hollywood rooftop.",
        "poolNote": "5th-floor rooftop pool · Hollywood Hills + Sign · Six cabanas · Lounge",
        "tags": [
          "Rooftop",
          "Hills Views",
          "Cabanas",
          "Design Hotel"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "The Hoxton, Downtown LA",
        "slug": "hoxton-dtla",
        "neighborhood": "Downtown LA",
        "description": "A lagoon-colored rooftop pool beside the Pilot rooftop restaurant, with a wide-open downtown skyline view. The Hoxton's usual knack for a good-looking rooftop, applied to LA.",
        "poolNote": "Rooftop pool · DTLA skyline · Pilot rooftop restaurant · Design-forward",
        "tags": [
          "Rooftop",
          "Skyline View",
          "Downtown",
          "Design Hotel"
        ],
        "priceRange": "$$$"
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
    "listingsLede": "Miami has more poolside options than anywhere else on this list — we picked the four rooftop and elevated pools where the setting, not the scene, is the reason to be there.",
    "noteLabel": "South Beach vs Brickell",
    "noteBody": "South Beach pools trend toward the theatrical; the crowd and the energy are part of what you're paying for. Brickell pools are newer, higher up, and more likely to give you the city-and-water view with less ambient noise. Neither is wrong — they're just different afternoons.",
    "hotels": [
      {
        "name": "1 Hotel South Beach",
        "slug": "1-hotel-south-beach",
        "neighborhood": "South Beach",
        "description": "The hotel that made sustainable design feel genuinely aspirational. Three pools on property, including a sprawling oceanside one that runs parallel to the Atlantic — the water-meets-water effect on a clear day is difficult to improve on.",
        "poolNote": "3 pools · Oceanfront · Adults deck on 7th floor · Year-round warm",
        "tags": [
          "Multiple Pools",
          "Oceanfront",
          "Eco-Certified",
          "Adults Deck"
        ],
        "bookingUrl": "https://www.1hotels.com/south-beach",
        "pick": true,
        "priceRange": "$$$$"
      },
      {
        "name": "Dua Miami",
        "slug": "dua-miami",
        "neighborhood": "Brickell",
        "description": "The right rooftop pool for the Brickell crowd — elevated views over Biscayne Bay, a proper bar setup, and none of the tourist energy of South Beach. Rebranded from SLS to Dua Miami (Autograph Collection) in 2024, with a refreshed pool deck and cabanas. The bay-and-skyline combination is Miami's quieter but equally good alternative view.",
        "poolNote": "Rooftop · Bay views · Brickell skyline · Refreshed 2024",
        "tags": [
          "Bay Views",
          "Rooftop",
          "Brickell",
          "Scene"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "EAST Miami",
        "slug": "east-miami",
        "neighborhood": "Brickell",
        "description": "The pool deck on the 40th floor of Brickell City Centre makes this one of Miami's most genuinely elevated positions. Downtown on one side, the bay bleeding into the horizon on the other. The infinity edge disappears into the view.",
        "poolNote": "40th floor infinity edge · Brickell City Centre · 360° views",
        "tags": [
          "Infinity Edge",
          "High Floor",
          "360 Views",
          "Downtown"
        ],
        "bookingUrl": "https://www.east-miami.com",
        "priceRange": "$$$"
      },
      {
        "name": "Soho Beach House",
        "slug": "soho-beach-house",
        "neighborhood": "Mid-Beach",
        "description": "Members club that offers hotel rooms and pool access to guests. The outdoor pool setup is extensive — multiple levels, an ocean-facing orientation, and the kind of crowd that actually swims. The beach access makes it worth the rates.",
        "poolNote": "Multiple pools · Ocean-facing · Beach access · Members & hotel guests",
        "tags": [
          "Multiple Pools",
          "Ocean",
          "Beach Access",
          "Exclusive"
        ],
        "bookingUrl": "https://www.sohobeachhouse.com",
        "priceRange": "$$$$"
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
        "name": "Graduate Nashville",
        "slug": "graduate-nashville",
        "neighborhood": "Vanderbilt / Midtown",
        "description": "The rooftop bar and pool deck at Graduate is where the Vanderbilt crowd and the weekend visitors find each other, usually agreeably. The bar program is better than it needs to be. The downtown skyline view is a clean, low-horizon Nashville silhouette that earns the elevation.",
        "poolNote": "Rooftop pool · Nashville skyline · Open to hotel guests and day pass",
        "tags": [
          "Day Pass",
          "Skyline",
          "Bar",
          "Midtown"
        ],
        "bookingUrl": "https://www.graduatehotels.com/nashville",
        "pick": true,
        "priceRange": "$$"
      },
      {
        "name": "Bobby Hotel",
        "slug": "bobby-hotel-nashville",
        "neighborhood": "Downtown",
        "description": "The rooftop space at Bobby is a converted Airstream trailer bar perched atop the pool deck — a Nashville touch that could be tacky but somehow reads as exactly right. Views stretch toward the stadium. The pool is seasonal and genuinely swimmable.",
        "poolNote": "Seasonal pool · Airstream bar on deck · Stadium views",
        "tags": [
          "Seasonal",
          "Unique",
          "Bar",
          "Downtown"
        ],
        "bookingUrl": "https://www.bobbyhotel.com",
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
        "slug": "ace-hotel-new-orleans",
        "neighborhood": "Warehouse District",
        "description": "The rooftop pool occupies the building's converted upper floors — the Superdome in view, the downtown grid below, and water warmer than the city deserves. The Ace brand has since left; it now runs as The Barnett (JdV by Hyatt), but the rooftop and its more-considered bar program carried over.",
        "poolNote": "Year-round heated pool · Superdome views · Warehouse District rooftop · Formerly the Ace",
        "tags": [
          "Year-Round",
          "Superdome Views",
          "Bar",
          "Warehouse District"
        ],
        "pick": true,
        "priceRange": "$$"
      },
      {
        "name": "Virgin Hotels New Orleans",
        "slug": "virgin-hotels-new-orleans",
        "neighborhood": "Warehouse District",
        "description": "Virgin's rooftop pool — called The Pool Club — carries the brand's social energy to the top of the Warehouse District with Mississippi River views in the distance. The pool is properly sized and the whole deck is open to day-pass guests, which keeps the energy up.",
        "poolNote": "The Pool Club · Mississippi River distant views · Day passes · Social scene",
        "tags": [
          "Day Pass",
          "Scene",
          "River Views",
          "Social"
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
        "poolNote": "60-ft heated infinity edge pool · Day passes available · Elevated deck bar",
        "tags": [
          "Infinity Edge",
          "Day Pass",
          "Skyline View",
          "Adults-Focused"
        ],
        "bookingUrl": "https://www.thewilliamvale.com",
        "pick": true,
        "priceRange": "$$$"
      },
      {
        "name": "Arlo Williamsburg",
        "slug": "arlo-williamsburg",
        "neighborhood": "Williamsburg",
        "description": "Compact but capable — the rooftop pool is on the smaller side but is rarely crowded at the right hours. Good for an afternoon session, especially mid-week when the deck becomes genuinely calm.",
        "poolNote": "Seasonal heated pool · Best mid-week · Happy hour deals",
        "tags": [
          "Seasonal",
          "Happy Hour",
          "Uncrowded"
        ],
        "priceRange": "$$"
      },
      {
        "name": "ModernHaus SoHo",
        "slug": "jimmy-james-soho",
        "neighborhood": "SoHo",
        "description": "Manhattan's most reliably fun rooftop pool — the Jimmy rooftop, atop what's now ModernHaus SoHo (formerly The James) — where the scene is the point and it delivers on sunny weekends. The skyline angles south, putting One World Trade in the frame from the water.",
        "poolNote": "Day passes with food & drink minimum · Manhattan skyline · Weekend scene",
        "tags": [
          "Scene",
          "Day Pass",
          "Manhattan",
          "Views South"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "Gansevoort Meatpacking",
        "slug": "gansevoort-meatpacking",
        "neighborhood": "Meatpacking District",
        "description": "The rooftop pool that helped invent the Meatpacking scene — heated so the water stays swimmable while the district hums below. The Hudson sits to the west, the skyline to the east, and the crowd is exactly as seen-and-be-seen as the neighborhood promises.",
        "poolNote": "Heated rooftop pool · Hudson + downtown skyline · Poolside bar · Day passes seasonal",
        "tags": [
          "Heated",
          "Scene",
          "Skyline View",
          "Day Pass"
        ],
        "priceRange": "$$$"
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
        "priceRange": "$$$$"
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
        "priceRange": "$$"
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
        "priceRange": "$$$$"
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
        "priceRange": "$$$"
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
        "priceRange": "$$"
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
    "listingsLede": "Skip the ground-level resort sprawl — these four put you on a roof with a real view and water warm enough to use most of the year.",
    "noteLabel": "Rooftop, not resort",
    "noteBody": "Arizona is full of gorgeous ground-level resort pools — these four are the genuine elevated ones, chosen for the view. The Valley's summer highs mean early or evening is the move; Camelback from the Canopy deck is best right at sunset.",
    "hotels": [
      {
        "name": "Kimpton Hotel Palomar Phoenix",
        "slug": "palomar-phoenix",
        "neighborhood": "Downtown Phoenix",
        "description": "A 3rd-floor rooftop pool at the Lustre garden, open to a sweeping downtown Phoenix skyline with cabanas and the Eden bar alongside. Downtown's most reliable rooftop swim, and the one that reads least like a resort.",
        "poolNote": "3rd-floor rooftop pool · Downtown Phoenix skyline · Cabanas · Rooftop bar",
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
        "description": "The 7th-floor Outrider rooftop delivers the one view Scottsdale visitors come for: Camelback Mountain, dead ahead, from a heated pool with full poolside service. The sunsets are the reason to book.",
        "poolNote": "7th-floor rooftop pool + hot tub · Camelback Mountain · Heated · Poolside service",
        "tags": [
          "Rooftop",
          "Mountain Views",
          "Sunset",
          "Old Town"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "Cambria Downtown Phoenix",
        "slug": "cambria-phoenix",
        "neighborhood": "Roosevelt Row",
        "description": "A 7th-floor rooftop pool with a genuine 360 of the Phoenix skyline off the Roosevelt Row arts district, loungers, and a rooftop bar. An easy, well-reviewed downtown pick that doesn't cost resort money.",
        "poolNote": "7th-floor rooftop pool · 360° Phoenix skyline · Loungers · Rooftop bar",
        "tags": [
          "Rooftop",
          "360 Views",
          "Roosevelt Row",
          "Value"
        ],
        "priceRange": "$$"
      },
      {
        "name": "AC Hotel Phoenix Tempe/Downtown",
        "slug": "ac-hotel-tempe",
        "neighborhood": "Downtown Tempe",
        "description": "A rooftop pool and sun terrace looking over Tempe and ASU's stadium — the Valley's East Side entry, swimmable and well-served, with the Sun Devil skyline for company.",
        "poolNote": "Rooftop pool + sun terrace · Tempe + ASU stadium views · Poolside service",
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
        "poolNote": "Rooftop pool (The Pool House) · Gaslamp + downtown skyline · Cabanas · Luxury",
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
        "poolNote": "7th-floor rooftop pool · Heated, lap-size · Gaslamp skyline · Scene",
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
        "description": "A 4th-floor rooftop pool right over the water, heated to 81°, with San Diego Bay and the harbor filling the view and the Layover bar alongside. The cleanest 'swim with a bay view' in the city.",
        "poolNote": "4th-floor bayfront rooftop pool · Heated 81° · San Diego Bay + harbor · Rooftop bar",
        "tags": [
          "Rooftop",
          "Bay Views",
          "Heated",
          "Bayfront"
        ],
        "priceRange": "$$$"
      },
      {
        "name": "Kimpton Solamar San Diego",
        "slug": "solamar-san-diego",
        "neighborhood": "Gaslamp Quarter",
        "description": "The Upper East Bar wraps a rooftop pool in a lush poolside terrace with sweeping downtown views — the more laid-back Gaslamp rooftop, easy to spend a whole afternoon on.",
        "poolNote": "Rooftop pool (Upper East Bar) · Downtown views · Poolside terrace · Relaxed",
        "tags": [
          "Rooftop",
          "Skyline View",
          "Gaslamp",
          "Relaxed"
        ],
        "priceRange": "$$"
      },
      {
        "name": "Hard Rock Hotel San Diego",
        "slug": "hard-rock-san-diego",
        "neighborhood": "Gaslamp Quarter",
        "description": "The 4th-floor FLOAT rooftop pool takes in the Gaslamp, the harbor, and the Coronado Bridge — a full-scene rooftop that still lets you get in the water.",
        "poolNote": "4th-floor rooftop pool (FLOAT) · Harbor + Coronado Bridge · Scene",
        "tags": [
          "Rooftop",
          "Harbor Views",
          "Scene",
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
        "priceRange": "$$$"
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
        "priceRange": "$$"
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
        "priceRange": "$$$"
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
