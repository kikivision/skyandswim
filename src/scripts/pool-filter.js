// Rooftop-pools hub: client-side filtering, URL state sync, and mobile drawer.
// Cards are all server-rendered; this shows/hides them. Each pool is wrapped in
// a `.pool-item` carrying data-state / data-tags / data-price. Feature and access
// filters match against the comma-separated data-tags; state and price are exact.
// OR within a group, AND across groups — same model as jetandswim's /resorts/.

const GROUPS = ["state", "feature", "access", "price"];
const TAG_GROUPS = ["feature", "access"]; // matched against data-tags

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function emptySets() {
  return { state: new Set(), feature: new Set(), access: new Set(), price: new Set() };
}

function readActiveFilters() {
  const active = emptySets();
  document.querySelectorAll("input[data-filter-group]:checked").forEach((el) => {
    active[el.dataset.filterGroup].add(el.value);
  });
  return active;
}

function writeUrl(active) {
  const url = new URL(window.location.href);
  GROUPS.forEach((g) => {
    const values = [...active[g]];
    if (values.length === 0) url.searchParams.delete(g);
    else url.searchParams.set(g, values.join(","));
  });
  window.history.replaceState({}, "", url.toString());
}

function readUrl() {
  const url = new URL(window.location.href);
  const state = emptySets();
  GROUPS.forEach((g) => {
    const raw = url.searchParams.get(g);
    if (raw) raw.split(",").forEach((v) => state[g].add(v));
  });
  return state;
}

function syncCheckboxesFrom(state) {
  document.querySelectorAll("input[data-filter-group]").forEach((el) => {
    el.checked = state[el.dataset.filterGroup].has(el.value);
  });
}

function matchesCard(card, active) {
  if (active.state.size && !active.state.has(card.dataset.state)) return false;
  if (active.price.size && !active.price.has(card.dataset.price)) return false;
  const tags = (card.dataset.tags || "").split(",").filter(Boolean);
  for (const g of TAG_GROUPS) {
    if (active[g].size && ![...active[g]].some((v) => tags.includes(v))) return false;
  }
  return true;
}

function applyFilters() {
  const active = readActiveFilters();
  let matched = 0;
  document.querySelectorAll(".pool-item").forEach((card) => {
    const ok = matchesCard(card, active);
    card.hidden = !ok;
    if (ok) matched += 1;
  });

  const totalActive = GROUPS.reduce((a, g) => a + active[g].size, 0);

  const countEl = document.querySelector("[data-result-count]");
  if (countEl) countEl.textContent = `${matched} ${matched === 1 ? "pool" : "pools"}`;

  const emptyEl = document.querySelector("[data-empty-state]");
  if (emptyEl) emptyEl.hidden = matched > 0;

  const clearEl = document.querySelector("[data-filter-clear]");
  if (clearEl) clearEl.hidden = totalActive === 0;

  writeUrl(active);
}

function clearAll() {
  document.querySelectorAll("input[data-filter-group]:checked").forEach((el) => {
    el.checked = false;
  });
  applyFilters();
}

// Mobile drawer with a simple focus trap and Escape-to-close.
function setupDrawer() {
  const panel = document.getElementById("filter-panel");
  const trigger = document.querySelector("[data-filter-trigger]");
  const closeBtn = document.querySelector("[data-filter-close]");
  const backdrop = document.querySelector("[data-filter-backdrop]");
  if (!panel || !trigger) return;

  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    panel.dataset.open = "true";
    if (backdrop) {
      backdrop.dataset.open = "true";
      backdrop.hidden = false;
    }
    document.body.style.overflow = "hidden";
    const focusable = panel.querySelectorAll(FOCUSABLE);
    if (focusable[0]) focusable[0].focus();
  };

  const close = () => {
    panel.dataset.open = "false";
    if (backdrop) {
      backdrop.dataset.open = "false";
      backdrop.hidden = true;
    }
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  };

  trigger.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (panel.dataset.open !== "true") return;
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "Tab") {
      const focusable = [...panel.querySelectorAll(FOCUSABLE)].filter((el) => !el.disabled);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  const mql = window.matchMedia("(min-width: 861px)");
  mql.addEventListener("change", (e) => {
    if (e.matches && panel.dataset.open === "true") close();
  });
}

function init() {
  syncCheckboxesFrom(readUrl());
  document.querySelectorAll("input[data-filter-group]").forEach((el) => {
    el.addEventListener("change", applyFilters);
  });
  document.querySelector("[data-filter-clear]")?.addEventListener("click", clearAll);
  setupDrawer();
  applyFilters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
