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

## Done (44)

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

Six of these also appear in the homepage Editor's Picks, which carries its own
collective credit line beneath the grid.

## Needed

### Denver, CO  (2)
- [ ] `jacquard-denver` — The Jacquard, Autograph Collection
- [ ] `warwick-denver` — Warwick Denver

### Miami, FL  (2)
- [ ] `dua-miami` — Dua Miami
- [ ] `east-miami` — EAST Miami

### Nashville, TN  (2)
- [ ] `graduate-nashville` — Graduate by Hilton Nashville
- [ ] `the-nash-nashville` — The Nash

### New York, NY  (2)
- [ ] `arlo-williamsburg` — Arlo Williamsburg
- [ ] `jimmy-james-soho` — ModernHaus SoHo

### Phoenix, AZ  (3)
- [ ] `palomar-phoenix` — Kimpton Hotel Palomar Phoenix
- [ ] `canopy-scottsdale` — Canopy by Hilton Scottsdale Old Town
- [ ] `ac-hotel-tempe` — AC Hotel Phoenix Tempe/Downtown

---

**11 to pull, 9 to re-verify.** Nine cities are fully photographed: Dallas,
Washington DC, Houston, Philadelphia, Los Angeles, San Diego, Austin, Chicago
and New Orleans. Remaining cities ranked by size: Phoenix (3), Denver (2),
Miami (2), New York (2), Nashville (2).

(The "Editor's Pick, homepage" markers previously on some entries were stale —
the homepage picks grid hard-codes six hotels, all photographed; a hotel's
city-level pick status lives in `pick: true` in src/data/hotels.js.)

Note on Fora availability: LA's Portal selection was thin — if better images
surface later, replacing one is a drop-in (the filename is the wiring, so
overwriting `<slug>.jpg` is the whole job).
