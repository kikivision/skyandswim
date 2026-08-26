# Photo pull list

Hero images for the hotel pages. One per hotel: `src/assets/hotels/<slug>.jpg`.
The filename IS the wiring — drop a correctly-named file in that directory and
the hero appears. Then set `heroCredit` on the hotel in `src/data/hotels.js` to
the property name, and the page renders *"Photo courtesy of <property>."*

> **Source rule** (inherited from Jet & Swim's `FORA_PULL_LIST.md`): Fora Portal
> assets, our own photography, or free stock only — **never** a hotel's own
> website, and never Booking.com. Booking's API terms permit hot-linking their
> images but explicitly forbid downloading them, so they are not usable here.

Credit the property under any Portal photo. Free stock (Unsplash/Pexels) needs no
property credit but should not be presented as the hotel if it isn't.

---

## Done (54)

Pulled from the Fora Portal and crediting the property. Each renders
*"Photo courtesy of &lt;property&gt;."* beneath the hero.

- [x] `1-hotel-south-beach` — 1 Hotel South Beach (Miami)
- [x] `conrad-los-angeles` — Conrad Los Angeles (Los Angeles)
- [x] `four-seasons-philadelphia` — Four Seasons Hotel Philadelphia (Philadelphia)
- [x] `four-seasons-seattle` — Four Seasons Hotel Seattle (on /beyond-the-cities)
- [x] `gansevoort-meatpacking` — Gansevoort Meatpacking (New York)
- [x] `halcyon-cherry-creek` — Halcyon, a Hotel in Cherry Creek (Denver)
- [x] `marriott-marquis-houston` — Marriott Marquis Houston (Houston)
- [x] `the-joule-dallas` — The Joule (Dallas)
- [x] `william-vale` — The William Vale (New York)
- [x] `thompson-dallas` — Thompson Dallas (Dallas)
- [x] `hotel-swexan-dallas` — Hôtel Swexan (Dallas)
- [x] `w-dallas-victory` — W Dallas (Dallas)
- [x] `statler-dallas` — The Statler Dallas (Dallas)
- [x] `the-adolphus-dallas` — The Adolphus (Dallas)
- [x] `intercontinental-dc-wharf` — InterContinental Washington D.C. – The Wharf (Washington)
- [x] `yotel-washington-dc` — YOTEL Washington DC (Washington)
- [x] `hotel-zena-dc` — Hotel Zena Washington DC (Washington)
- [x] `thompson-houston` — Thompson Houston, by Hyatt (Houston)
- [x] `four-seasons-houston` — Four Seasons Hotel Houston (Houston)
- [x] `la-colombe-dor-houston` — La Colombe d'Or Hotel (Houston)
- [x] `the-laura-houston` — The Laura Hotel, Autograph Collection (Houston)
- [x] `windsor-suites-philadelphia` — The Windsor Suites (Philadelphia)
- [x] `w-philadelphia` — W Philadelphia (Philadelphia)
- [x] `sonesta-rittenhouse-philadelphia` — Sonesta Philadelphia Rittenhouse Square (Philadelphia)
- [x] `wyndham-philadelphia-historic` — Wyndham Philadelphia Historic District (Philadelphia)
- [x] `santa-monica-proper` — Santa Monica Proper (Los Angeles)
- [x] `godfrey-hollywood` — The Godfrey Hotel Hollywood (Los Angeles)
- [x] `kimpton-everly-hollywood` — Kimpton Everly Hotel (Los Angeles)
- [x] `hoxton-dtla` — The Hoxton, Downtown LA (Los Angeles)
- [x] `hollywood-grande` — The Hollywood Grande, Autograph Collection (Los Angeles)
- [x] `pendry-san-diego` — Pendry San Diego (San Diego)
- [x] `andaz-san-diego` — Andaz San Diego (San Diego)
- [x] `intercontinental-san-diego` — InterContinental San Diego (San Diego)
- [x] `margaritaville-san-diego` — Margaritaville Hotel San Diego Gaslamp Quarter (San Diego)
- [x] `hard-rock-san-diego` — Hard Rock Hotel San Diego (San Diego)
- [x] `w-austin` — W Austin (Austin)
- [x] `hotel-van-zandt` — Hotel Van Zandt (Austin)
- [x] `austin-proper` — Austin Proper (Austin)
- [x] `cambria-austin-downtown` — Cambria Austin Downtown (Austin; exterior
      shot with the podium pool deck visible — swap in a closer deck photo if
      one surfaces in the Portal)
- [x] `viceroy-chicago` — Viceroy Chicago (Chicago)
- [x] `hoxton-chicago` — The Hoxton, Chicago (Chicago)
- [x] `doubletree-mag-mile` — DoubleTree by Hilton Chicago – Magnificent Mile (Chicago)
- [x] `the-barnett-new-orleans` — The Barnett (New Orleans)
- [x] `virgin-hotels-new-orleans` — Virgin Hotels New Orleans (New Orleans)
- [x] `palomar-phoenix` — Kimpton Hotel Palomar Phoenix (Phoenix)
- [x] `canopy-scottsdale` — Canopy by Hilton Scottsdale Old Town (Phoenix)
- [x] `ac-hotel-tempe` — AC Hotel Phoenix Tempe/Downtown (Phoenix; deck-level
      shot with no stadium/lake context visible — swap in a wider rooftop angle
      if one surfaces in the Portal)
- [x] `jacquard-denver` — The Jacquard, Autograph Collection (Denver)
- [x] `warwick-denver` — Warwick Denver (Denver)
- [x] `arlo-williamsburg` — Arlo Williamsburg (New York; Portal had no strong
      pool shot — best-available cabana-row angle, flagged by Karen as a
      possible edit/swap candidate)
- [x] `jimmy-james-soho` — ModernHaus SoHo (New York; source is ~1023px wide,
      soft in the 1200px hero slot on retina — swap for a higher-res frame if
      one surfaces in the Portal)
- [x] `dua-miami` — Dua Miami, Autograph Collection (Miami; the signature
      silver-duck deck shot, but ~1024px — same low-res swap note as above)
- [x] `east-miami` — EAST Miami (Miami; ~1023px — same low-res swap note)
- [x] `graduate-nashville` — Graduate by Hilton Nashville (Nashville; source
      arrived as AVIF-in-.jpg, converted to real JPEG)
- [x] `the-nash-nashville` — The Nash (Nashville; approved by Nori Guevara,
      Hayworth PR, 2026-07-21. Credit required verbatim: "The Nash Hotel".
      Delivered as a screen-capture — swap for the full-res original from her
      media link when convenient)

Six of these also appear in the homepage Editor's Picks, which carries its own
collective credit line beneath the grid.

## Needed

### Notable Pools  (3) — all photographed 2026-07-21
Non-rooftop standouts with detail pages (`/notable-pools/<slug>/`). `heroCredit`
wired in `src/data/notable.js`; heroes pulled and in `src/assets/hotels/`:
- [x] `faena-miami-beach` — Faena Hotel Miami Beach
- [x] `standard-spa-miami-beach` — The Standard Spa, Miami Beach
- [x] `line-austin` — The LINE Austin (June 3 2026 foreclosure returned it to
      lender JP Morgan; confirmed still open and LINE-branded 2026-07-21 —
      monitor for a future rebrand, as happened to LINE DC/LA)

Pulled 2026-07-21: `nautilus-sonesta-miami-beach` — closed for renovation,
reopening late 2026 as The James Nautilus Miami Beach. Re-add on reopening.

### Beyond the Cities  (7) — all photographed 2026-07-21
One-off standouts with detail pages (`/beyond-the-cities/<slug>/`); `heroCredit`
wired in `src/data/beyond.js`, heroes pulled to `src/assets/hotels/`:
- [x] `conrad-fort-lauderdale` — Conrad Fort Lauderdale Beach
- [x] `market-pavilion-charleston` — Market Pavilion Hotel
- [x] `perry-lane-savannah` — Perry Lane Hotel
- [x] `omni-battery-atlanta` — Omni Hotel at The Battery Atlanta
- [x] `thompson-san-antonio` — Thompson San Antonio – Riverwalk (like the LINE,
      went to its lender in a 2026 foreclosure; Hyatt still manages it — monitor)
- [x] `omni-louisville` — Omni Louisville Hotel
- [x] `ac-hotel-tucson` — AC Hotel Tucson Downtown

(Four Seasons Seattle, the eighth Beyond entry, was already photographed.)

### Miami Beach rooftops  (4) — added 2026-08-25, ALL FOUR NEED A HERO
Four new Miami city-page entries (`src/data/hotels.js`). Detail pages render
without a hero until the file exists, so these are live but unillustrated:
- [x] `the-betsy-south-beach` — The Betsy Hotel, South Beach (Ocean Drive;
      pulled 2026-08-25, 1600x1058, the rooftop pool at deck level with the
      Atlantic over the rail. Five further Betsy frames were supplied — room,
      exterior, ocean view, penthouse, cafe — and have no home: the schema is
      one hero per hotel. See the gallery note at the foot of this file.)
- [x] `kimpton-anglers-south-beach` — Kimpton Angler's Hotel South Beach
      (pulled 2026-08-25, 1024x683 — SOFT in the 1200px hero slot, same swap
      note as dua-miami and jimmy-james-soho. Correctly the ROOFTOP pool, not
      the ground-floor courtyard one; the coping reads 4 FT, which is what
      finally established a swimmable depth the operator never published.)
- [x] `kimpton-palomar-south-beach` — Kimpton Hotel Palomar South Beach
      (Sunset Harbour — bay side, NOT the oceanfront; a beach shot would
      misrepresent it. Pulled 2026-08-25, 1024x683 — same low-res swap note.
      Shows curtained cabanas and a low-rise treeline, no ocean: correct.)
- [x] `the-tony-hotel-south-beach` — The Tony Hotel South Beach (pulled
      2026-08-25, 1600x1068, sunrise on the rooftop deck with the Atlantic on
      the horizon; coping marked 3 FT 6 IN, the shallowest pool on the Miami
      list)

Fora note: Angler's was hard to find in the Portal — it is listed under the
full "Kimpton Angler's Hotel South Beach" and searching for the apostrophe form
can fail. It has NOT rebranded (verified 2026-08-25).

Affiliate status: **all four Miami Beach hotels are wired** (`the-betsy-south-beach` in
`src/data/affiliates.js`, plain property URL). Nothing is left unwired. Add the Booking.com property URLs
to turn those CTAs on — **plain `https://www.booking.com/hotel/us/<property>.html`
only**; strip any `aid`, `label`, `sid` or date parameters, since /go applies our
own CJ property ID and a foreign `aid` would divert the commission.

### New York  (2) — added 2026-08-25
- [x] `hotel-indigo-williamsburg` — Hotel Indigo Williamsburg (1600x1067,
      daylight, the full 70-ft pool with its stepped entry, lifeguard chair and
      the "4 FEET DEEP" coping legible on the far side — the frame that settled
      the depth. Affiliate wired.)

- [x] `margaritaville-times-square` — Margaritaville Resort Times Square
      (**night close-up, 1000x646 — LOW RES** for the 1200px hero slot.
      Two better frames — a daylight deck shot and a long-axis view — were
      shown to Claude on 2026-08-25 **for judgement only. They are NOT Fora
      assets and NOT ours, so they cannot be published**; they were used to
      settle what the view actually is and nothing more. Do not go looking for
      them to use as a hero. If a better frame is wanted it has to come from
      the Portal like everything else. Affiliate wired.)

## Galleries — BUILT 2026-08-25

A hotel can now carry extra frames beyond its hero. Same drop-in rule:

- Hero stays `src/assets/hotels/<slug>.jpg`.
- Every extra frame is `src/assets/hotels/<slug>-<descriptor>.jpg`. The glob in
  `HotelDetail.astro` picks them up automatically; a hotel with no extra files
  renders no gallery section at all, so nothing else changed.
- **Keep Karen's descriptor from the dropped filename verbatim** — change only
  the prefix. Those descriptors carry real information: `royal-ocean-view` and
  `skyline-penthouse` are the hotel's own room-category names, and renaming them
  to `ocean-view-room` / `penthouse` threw that away (caught and reverted on
  2026-08-25).
- Alt text is authored in `galleryAlt` on the hotel object in
  `src/data/hotels.js`, **keyed by that descriptor**, so the filename is the
  lookup key. Key order sets display order; a file with no `galleryAlt` entry
  still renders, sorted last, with a generic fallback alt.
- Frames lazy-load and share the hero's `heroCredit` via one "Photos courtesy
  of ..." line.

The Betsy is the only hotel with a gallery so far (5 frames). Adding one to
another hotel is purely a matter of dropping files plus a `galleryAlt` block.

---

**0 to pull, 11 to re-verify.** Thirteen of the fourteen rooftop cities are
fully photographed: Dallas, Washington DC, Houston, Philadelphia, Los Angeles,
San Diego, Austin, Chicago, New Orleans, Phoenix, Denver, New York and
Nashville — The Nash was the last of that round. All four Miami Beach hotels added
2026-08-25 are photographed too, so every rooftop city is complete again. The three Notable Pools detail
pages are photographed too; Nautilus waits on its 2026 reopening.

(The "Editor's Pick, homepage" markers previously on some entries were stale —
the homepage picks grid hard-codes six hotels, all photographed; a hotel's
city-level pick status lives in `pick: true` in src/data/hotels.js.)

Note on Fora availability: LA's Portal selection was thin — if better images
surface later, replacing one is a drop-in (the filename is the wiring, so
overwriting `<slug>.jpg` is the whole job).
