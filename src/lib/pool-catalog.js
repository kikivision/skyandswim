// Unified catalog of every rooftop pool on the site, plus the facet builder that
// powers the /rooftop-pools hub filters. Pulls from the two data sources — the
// city listings (src/data/hotels.js → ALL_HOTELS) and the smaller-cities set
// (src/data/beyond.js → BEYOND_HOTELS) — so the hub is a true superset of every
// pool page. Each pool is annotated with a working detail link, slugified tags
// for client-side filtering, a numeric price level, and a display state name.

import { ALL_HOTELS } from "../data/hotels.js";
import { BEYOND_HOTELS } from "../data/beyond.js";

// US state/territory code → display name. Fallback to the raw code for anything
// not listed, so a new state never renders blank.
export const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas",
  CA: "California", CO: "Colorado", CT: "Connecticut", DE: "Delaware",
  DC: "Washington, D.C.", FL: "Florida", GA: "Georgia", HI: "Hawaii",
  ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas",
  KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi",
  MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada",
  NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah",
  VT: "Vermont", VA: "Virginia", WA: "Washington", WV: "West Virginia",
  WI: "Wisconsin", WY: "Wyoming",
};

export const slugify = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Beyond-the-cities pools live at /beyond-the-cities/<slug>/, except the one
// that graduated to a full hotel page. Keep in sync with beyond-the-cities.astro.
function beyondDetailHref(slug) {
  return slug === "four-seasons-seattle"
    ? "/hotels/four-seasons-seattle/"
    : `/beyond-the-cities/${slug}/`;
}

const cityPools = ALL_HOTELS.map((h) => ({
  ...h,
  source: "city",
  detailHref: `/cities/${h.citySlug}/${h.slug}/`,
}));

const beyondPools = BEYOND_HOTELS.map((h) => ({
  ...h,
  source: "beyond",
  detailHref: beyondDetailHref(h.slug),
}));

/** Every pool on the site, flattened and annotated, sorted by name. */
export const POOLS = [...cityPools, ...beyondPools]
  .map((h) => ({
    ...h,
    tagSlugs: (h.tags || []).map(slugify),
    priceLevel: h.priceRange ? h.priceRange.replace(/[^$]/g, "").length : 0,
    stateName: STATE_NAMES[h.state] || h.state || "",
    // "City, ST" — shown on the hub card in place of the micro-neighborhood,
    // since on a mixed-state directory the city is the info that matters.
    cityLabel: [h.city, h.state].filter(Boolean).join(", "),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Feature/access filters are driven off the pool tags. We only surface a fixed,
// curated set (in display order) — and only those that actually occur — so the
// panel never shows a noisy or dead filter.
const FEATURE_TAGS = [
  "Heated", "Infinity Edge", "Year-Round", "Cabanas",
  "Skyline View", "Oceanfront", "Water Views",
];
const ACCESS_TAGS = ["Day Pass", "Guests Only"];

function tagFacets(pools, tagLabels) {
  return tagLabels
    .map((label) => {
      const value = slugify(label);
      const count = pools.filter((p) => p.tagSlugs.includes(value)).length;
      return { value, label, count };
    })
    .filter((f) => f.count > 0);
}

/** Build the facet lists (with live counts) for the filter panel. */
export function buildPoolFacets(pools) {
  const stateCounts = new Map();
  for (const p of pools) {
    if (!p.state) continue;
    stateCounts.set(p.state, (stateCounts.get(p.state) || 0) + 1);
  }
  const states = [...stateCounts.entries()]
    .map(([code, count]) => ({ value: code, label: STATE_NAMES[code] || code, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));

  const features = tagFacets(pools, FEATURE_TAGS);
  const access = tagFacets(pools, ACCESS_TAGS);

  const prices = [1, 2, 3, 4]
    .map((level) => ({
      value: String(level),
      label: "$".repeat(level),
      count: pools.filter((p) => p.priceLevel === level).length,
    }))
    .filter((f) => f.count > 0);

  return { states, features, access, prices, totalCount: pools.length };
}
