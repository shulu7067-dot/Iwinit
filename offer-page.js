/* =========================================================
   IWinit — offer-page.js
   Renders a complete SEO-friendly article for a single offer
   based on the ?id= query parameter, reading from OFFERS.
   ========================================================= */

(function () {
  "use strict";

  const SITE_URL = "https://example.github.io/iwinit";
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const offer = OFFERS.find(o => o.id === id);

  const contentEl = document.getElementById("offerContent");
  const breadcrumbEl = document.getElementById("breadcrumbWrap");

  if (!offer) {
    contentEl.innerHTML = `
      <div class="empty-msg">
        <span class="emoji">🙈</span>
        <h1 style="margin-bottom:8px;">Offer not found</h1>
        <p>This offer may have been removed or the link is incorrect.</p>
        <p style="margin-top:16px;"><a class="btn btn-primary" href="index.html">Back to all offers</a></p>
      </div>`;
    document.title = "Offer Not Found | IWinit";
    document.querySelector('meta[name="robots"]').setAttribute("content", "noindex, follow");
  } else {
    renderOffer(offer);
  }

  function categoryFile(cat) { return `${cat}.html`; }

  function setMeta(id, attr, value) {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, value);
  }

  function renderOffer(o) {
    const title = `${o.title} Review ${new Date().getFullYear()} — What It Is, How It Works & Tips | IWinit`;
    const desc = `${o.short} Read our full ${o.title} review: how it works, pros and cons, payment methods, supported countries and our rating.`;
    const canonical = `${SITE_URL}/offer.html?id=${o.id}`;

    document.title = title;
    setMeta("pageDesc", "content", desc);
    setMeta("pageCanonical", "href", canonical);
    setMeta("ogTitleTag", "content", title);
    setMeta("ogDesc", "content", desc);
    setMeta("ogUrl", "content", canonical);
    setMeta("ogImage", "content", o.image);
    setMeta("twTitle", "content", title);
    setMeta("twDesc", "content", desc);
    setMeta("twImage", "content", o.image);

    /* Breadcrumb */
    breadcrumbEl.innerHTML = `
      <a href="index.html">Home</a><span class="sep">/</span>
      <a href="${categoryFile(o.category)}">${o.categoryLabel}</a><span class="sep">/</span>
      <span aria-current="page">${o.title}</span>`;

    const stars = window.IWinit.starString(o.rating);
    const fav = window.IWinit.isFavourite(o.id);

    contentEl.innerHTML = `
      <div class="article-wrap fade-up">
        <article>
          <img class="article-hero-img" src="${o.image}" alt="${o.title} — ${o.categoryLabel}" width="1200" height="514">
          <div class="article-title-row">
            <h1>${o.title}</h1>
            <button class="fav-btn ${fav ? 'active' : ''}" style="position:static;" data-fav-id="${o.id}" aria-pressed="${fav}" aria-label="Save ${o.title} to favourites">
              <svg viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
            </button>
          </div>
          <div class="article-meta">
            <span class="stars" aria-label="Rated ${o.rating} out of 5">${stars} ${o.rating.toFixed(1)} / 5</span>
            <span>•</span><span>${o.categoryLabel}</span>
            <span>•</span><span>Updated ${formatDate(o.dateAdded)}</span>
          </div>

          <div class="share-row" aria-label="Share this offer">
            <a href="https://wa.me/?text=${encodeURIComponent(o.title + ' — ' + location.href)}" target="_blank" rel="noopener" aria-label="Share on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.6 2.4 3.8 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.4-.2z"/></svg></a>
            <a href="https://t.me/share/url?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(o.title)}" target="_blank" rel="noopener" aria-label="Share on Telegram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.4 18.7 19.8c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.6 13 1.9 11.5c-1-.3-1-1 .2-1.5l18.2-7c.8-.3 1.6.2 1.6 1.4z"/></svg></a>
            <a href="mailto:?subject=${encodeURIComponent(o.title)}&body=${encodeURIComponent(location.href)}" aria-label="Share by email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
          </div>

          <div class="article-body prose">
            <h2>What is ${o.title}?</h2>
            <p>${o.whatIsIt}</p>

            <h2>How does it work?</h2>
            <p>${o.howItWorks}</p>

            <h2>How much can you earn / save?</h2>
            <div class="info-pills">
              <span>💰 ${o.earnPotential}</span>
              <span>🌍 ${o.countries}</span>
              <span>💳 ${o.payment}</span>
            </div>

            <h2>Pros and cons</h2>
            <div class="pros-cons">
              <div class="pros"><h4>Pros</h4><ul>${o.pros.map(p => `<li>${p}</li>`).join("")}</ul></div>
              <div class="cons"><h4>Cons</h4><ul>${o.cons.map(c => `<li>${c}</li>`).join("")}</ul></div>
            </div>

            <h2>Tips to get the most out of it</h2>
            <ul class="tip-list">${o.tips.map(t => `<li>${t}</li>`).join("")}</ul>

            <h2>Frequently asked questions</h2>
            <div id="faqWrap">
              ${o.faqs.map(f => `<details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join("")}
            </div>
          </div>
        </article>

        <aside class="sidebar-card" aria-label="Offer summary">
          <img src="${o.image}" alt="${o.title} logo">
          <h3>${o.title}</h3>
          <div class="sidebar-rating stars" aria-label="Rated ${o.rating} out of 5">${stars} <span style="color:var(--text-grey);font-size:.8rem;">${o.rating.toFixed(1)} / 5</span></div>
          <p style="font-size:.86rem;color:var(--text-grey);">${o.short}</p>
          <a class="btn btn-primary btn-block btn-lg" href="${o.affiliateUrl}" target="_blank" rel="noopener sponsored">Visit ${o.title} →</a>
          <p class="sidebar-disclosure">IWinit may earn a commission if you sign up through this link, at no extra cost to you. This never affects our rating.</p>
          <div class="sidebar-related">
            <h4>More in ${o.categoryLabel}</h4>
            <div id="sidebarRelated"></div>
          </div>
        </aside>
      </div>
    `;

    /* Related offers — same category, excluding current */
    const related = OFFERS.filter(r => r.category === o.category && r.id !== o.id).slice(0, 4);
    const relatedSection = document.getElementById("relatedSection");
    const relatedGrid = document.getElementById("relatedGrid");
    const sidebarRelated = document.getElementById("sidebarRelated");

    if (related.length) {
      relatedSection.style.display = "";
      relatedGrid.innerHTML = related.map(r => offerCardMini(r)).join("");
      sidebarRelated.innerHTML = related.slice(0, 3).map(r => `
        <a class="related-mini" href="offer.html?id=${r.id}">
          <img src="${r.image}" alt="${r.title}">
          <div>
            <div class="t">${r.title}</div>
            <div class="stars">${window.IWinit.starString(r.rating)}</div>
          </div>
        </a>`).join("");
    }

    injectSchema(o);
  }

  function offerCardMini(o) {
    // Reuse main.js card markup by triggering the same structure inline
    const div = document.createElement("div");
    div.innerHTML = `<div data-offer-grid style="display:none"></div>`;
    return `
    <article class="offer-card fade-up">
      <div class="offer-card__media">
        <a href="offer.html?id=${o.id}"><img src="${o.image}" alt="${o.title}" loading="lazy" width="800" height="450"></a>
      </div>
      <div class="offer-card__body">
        <span class="offer-card__cat">${o.categoryLabel}</span>
        <h3><a href="offer.html?id=${o.id}">${o.title}</a></h3>
        <div class="stars">${window.IWinit.starString(o.rating)}</div>
        <p class="offer-card__desc">${o.short}</p>
      </div>
      <div class="offer-card__stub">
        <div class="stub-meta">Potential<b>${o.earnPotential}</b></div>
        <a class="btn-read-more" href="offer.html?id=${o.id}">Read More</a>
      </div>
    </article>`;
  }

  function formatDate(d) {
    return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  function injectSchema(o) {
    const point = document.getElementById("schemaInjectionPoint");
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/index.html` },
        { "@type": "ListItem", "position": 2, "name": o.categoryLabel, "item": `${SITE_URL}/${o.category}.html` },
        { "@type": "ListItem", "position": 3, "name": o.title, "item": `${SITE_URL}/offer.html?id=${o.id}` }
      ]
    };
    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${o.title} Review — How It Works, Pros, Cons & Tips`,
      "description": o.short,
      "image": o.image,
      "datePublished": o.dateAdded,
      "dateModified": o.dateAdded,
      "author": { "@type": "Organization", "name": "IWinit" },
      "publisher": { "@type": "Organization", "name": "IWinit" }
    };
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": o.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };
    point.innerHTML =
      `<script type="application/ld+json">${JSON.stringify(breadcrumbData)}</` + `script>` +
      `<script type="application/ld+json">${JSON.stringify(articleData)}</` + `script>` +
      `<script type="application/ld+json">${JSON.stringify(faqData)}</` + `script>`;
  }
})();
