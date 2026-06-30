/* =========================================================
   IWinit — main.js
   Shared behaviour for every page: header interactions,
   dark mode, favourites, offer-card rendering, search and
   category filtering. Reads data from OFFERS (offers-data.js).
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Dark mode ---------- */
  const THEME_KEY = "iwinit-theme";
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.setAttribute("aria-pressed", theme === "dark");
    });
  }
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }
  initTheme();

  /* ---------- Favourites (localStorage) ---------- */
  const FAV_KEY = "iwinit-favourites";
  function getFavourites() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch (e) { return []; }
  }
  function isFavourite(id) { return getFavourites().includes(id); }
  function toggleFavourite(id) {
    let favs = getFavourites();
    if (favs.includes(id)) { favs = favs.filter(f => f !== id); } else { favs.push(id); }
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    return favs.includes(id);
  }

  /* ---------- Helpers ---------- */
  function starString(rating) {
    const full = Math.round(rating);
    let s = "";
    for (let i = 1; i <= 5; i++) s += i <= full ? "★" : '<span class="muted">★</span>';
    return s;
  }
  function badgeHtml(badges) {
    if (!badges || !badges.length) return "";
    const map = { featured: "Featured", hot: "Hot Deal", new: "New Today" };
    return `<div class="offer-card__badges">${badges.map(b => `<span class="badge ${b}">${map[b] || b}</span>`).join("")}</div>`;
  }
  function tagHtml(tags) {
    if (!tags) return "";
    return `<div class="tag-row">${tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
  }

  /* ---------- Offer card renderer ---------- */
  function offerCardHtml(offer) {
    const fav = isFavourite(offer.id) ? "active" : "";
    return `
    <article class="offer-card fade-up" data-id="${offer.id}" data-category="${offer.category}">
      <div class="offer-card__media">
        <a href="${offerHref(offer.id)}" aria-label="View ${offer.title}">
          <img src="${offer.image}" alt="${offer.title} — ${offer.categoryLabel}" loading="lazy" width="800" height="450">
        </a>
        ${badgeHtml(offer.badges)}
        <button class="fav-btn ${fav}" data-fav-id="${offer.id}" aria-pressed="${!!fav}" aria-label="Save ${offer.title} to favourites">
          <svg viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
        </button>
      </div>
      <div class="offer-card__body">
        <span class="offer-card__cat">${offer.categoryLabel}</span>
        <h3><a href="${offerHref(offer.id)}">${offer.title}</a></h3>
        <div class="stars" aria-label="Rated ${offer.rating} out of 5">${starString(offer.rating)} <span style="color:var(--text-grey);font-size:.78rem;">${offer.rating.toFixed(1)}</span></div>
        <p class="offer-card__desc">${offer.short}</p>
        ${tagHtml(offer.tags)}
      </div>
      <div class="offer-card__stub">
        <div class="stub-meta">Potential<b>${offer.earnPotential}</b></div>
        <a class="btn-read-more" href="${offerHref(offer.id)}">Read More</a>
      </div>
    </article>`;
  }

  function offerHref(id) {
    const inPagesRoot = !location.pathname.includes("/offer.html") && location.pathname.split("/").filter(Boolean).length <= 1;
    return `offer.html?id=${encodeURIComponent(id)}`;
  }

  /* ---------- Grid rendering with optional category filter + search ---------- */
  function renderGrid(container, list) {
    if (!list.length) {
      container.classList.add("empty-state");
      container.innerHTML = `<div class="empty-msg"><span class="emoji">🔍</span><p>No offers match your search yet. Try a different keyword or check back soon — new offers are added regularly.</p></div>`;
      return;
    }
    container.classList.remove("empty-state");
    container.innerHTML = list.map(offerCardHtml).join("");
  }

  function setupOfferGrid(container) {
    const category = container.getAttribute("data-category"); // null = all
    const limit = parseInt(container.getAttribute("data-limit") || "0", 10);
    const sortBy = container.getAttribute("data-sort"); // "newest" | "rating" | "featured"
    const searchInput = document.querySelector(container.getAttribute("data-search-input") || "#offerSearch");
    const resultCount = document.querySelector(container.getAttribute("data-result-count") || "#resultCount");
    const chipWrap = document.querySelector(container.getAttribute("data-filter-chips") || "#filterChips");

    function baseList() {
      let list = category ? OFFERS.filter(o => o.category === category) : OFFERS.slice();
      if (sortBy === "newest") list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
      if (sortBy === "featured") list = list.filter(o => o.badges.includes("featured"));
      if (sortBy === "hot") list = list.filter(o => o.badges.includes("hot"));
      return list;
    }

    let activeTag = "all";

    function update() {
      let list = baseList();
      const q = (searchInput && searchInput.value || "").trim().toLowerCase();
      if (q) {
        list = list.filter(o =>
          o.title.toLowerCase().includes(q) ||
          o.short.toLowerCase().includes(q) ||
          o.categoryLabel.toLowerCase().includes(q) ||
          (o.tags || []).some(t => t.toLowerCase().includes(q))
        );
      }
      if (activeTag !== "all") {
        list = list.filter(o => (o.tags || []).includes(activeTag));
      }
      if (limit) list = list.slice(0, limit);
      renderGrid(container, list);
      if (resultCount) resultCount.textContent = `${list.length} offer${list.length === 1 ? "" : "s"} found`;
    }

    if (searchInput) searchInput.addEventListener("input", update);

    if (chipWrap) {
      chipWrap.addEventListener("click", e => {
        const chip = e.target.closest(".filter-chip");
        if (!chip) return;
        chipWrap.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        activeTag = chip.getAttribute("data-tag") || "all";
        update();
      });
    }

    update();
  }

  /* ---------- Favourite click delegation (works for dynamically rendered cards) ---------- */
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-fav-id]");
    if (!btn) return;
    e.preventDefault();
    const id = btn.getAttribute("data-fav-id");
    const active = toggleFavourite(id);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active);
    const svg = btn.querySelector("svg");
    if (svg) svg.setAttribute("fill", active ? "currentColor" : "none");
  });

  /* ---------- Theme toggle delegation ---------- */
  document.addEventListener("click", e => {
    if (e.target.closest("[data-theme-toggle]")) toggleTheme();
  });

  /* ---------- Mobile search bar toggle ---------- */
  document.addEventListener("click", e => {
    if (e.target.closest("[data-mobile-search-toggle]")) {
      const bar = document.querySelector(".mobile-search-bar");
      if (bar) {
        bar.classList.toggle("open");
        if (bar.classList.contains("open")) bar.querySelector("input").focus();
      }
    }
  });

  /* ---------- Hero / page search -> redirect to a relevant category or home search ---------- */
  document.querySelectorAll("[data-site-search-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector("input");
      const q = input.value.trim();
      if (!q) return;
      const base = location.pathname.includes("/index.html") || location.pathname.endsWith("/") ? "index.html" : "index.html";
      window.location.href = `${base}?q=${encodeURIComponent(q)}#latest-offers`;
    });
  });

  /* ---------- Newsletter (frontend only, no backend) ---------- */
  document.querySelectorAll("[data-newsletter-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const btn = form.querySelector("button");
      const original = btn.textContent;
      btn.textContent = "Subscribed ✓";
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 2500);
    });
  });

  /* ---------- Contact form (frontend only placeholder) ---------- */
  document.querySelectorAll("[data-contact-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const note = form.querySelector("[data-form-note]");
      if (note) note.textContent = "Thanks — your message has been captured. Connect a form backend (e.g. Formspree) to receive these by email.";
    });
  });

  /* ---------- Scroll to top ---------- */
  const scrollBtn = document.querySelector(".scroll-top");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("show", window.scrollY > 500);
    });
    scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- Active nav link ---------- */
  (function highlightNav() {
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".primary-nav a").forEach(a => {
      const href = a.getAttribute("href");
      if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
    });
  })();

  /* ---------- Init grids present on this page ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-offer-grid]").forEach(setupOfferGrid);

    /* Apply a ?q= search param coming from the hero search redirect */
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    if (q) {
      const input = document.getElementById("offerSearch");
      if (input) { input.value = q; input.dispatchEvent(new Event("input")); }
    }

    /* Category counts on home page pills */
    document.querySelectorAll("[data-cat-count]").forEach(el => {
      const cat = el.getAttribute("data-cat-count");
      el.textContent = OFFERS.filter(o => o.category === cat).length;
    });
  });

  /* Expose small helpers for offer.html */
  window.IWinit = { isFavourite, toggleFavourite, starString, offerHref };
})();
