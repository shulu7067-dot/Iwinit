# IWinit

A fast, frontend-only deals/freebies/side-income directory site. Pure HTML, CSS and vanilla JavaScript — no build step, no backend, ready for GitHub Pages.

## What's inside

```
iwinit/
├── index.html              Home page
├── daily-deals.html        Category pages (7 total)
├── earn-money.html
├── freebies.html
├── student-deals.html
├── jobs.html
├── competitions.html
├── discount-codes.html
├── offer.html               Single dynamic article page — pass ?id=<offer-id>
├── blog.html
├── about.html
├── contact.html
├── css/style.css            Entire design system
├── js/offers-data.js        ★ All offer content lives here
├── js/main.js                Cards, search, filters, dark mode, favourites
├── js/offer-page.js          Renders the offer.html article from the data file
├── sitemap.xml, robots.txt, manifest.json, rss.xml
└── assets/favicon.svg
```

## Adding a new offer (no HTML editing needed)

Open `js/offers-data.js` and add one object to the `OFFERS` array, e.g.:

```js
{
  id: "my-new-offer",            // used in the URL: offer.html?id=my-new-offer
  title: "My New Offer",
  category: "freebies",          // must match a category page slug
  categoryLabel: "Free Software",
  short: "One sentence summary shown on the card.",
  image: "https://...",
  rating: 4.5,
  badges: ["new"],                // any of: featured, hot, new
  dateAdded: "2026-07-01",
  tags: ["Worldwide"],
  affiliateUrl: "#",
  earnPotential: "100% free",
  countries: "Worldwide",
  payment: "N/A",
  whatIsIt: "...", howItWorks: "...",
  pros: ["..."], cons: ["..."],
  tips: ["..."],
  faqs: [{ q: "...", a: "..." }]
}
```

It will automatically appear on the home page, its category page, and get its own SEO-optimised detail page at `offer.html?id=my-new-offer` — including JSON-LD Article/FAQ/Breadcrumb schema, Open Graph tags and related-offer suggestions.

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `iwinit`).
2. Upload everything inside this folder to the repository root (or push via git).
3. In the repo, go to **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/iwinit/` within a minute or two.
5. **Update the real URL**: open `build.py`-generated files aren't needed, but search-and-replace `https://example.github.io/iwinit` with your real Pages URL across `sitemap.xml`, `robots.txt`, and the `<head>` of every `.html` file (canonical/OG tags) so SEO metadata points to the right place.
6. Submit `sitemap.xml` in Google Search Console once it's live.

## Connecting real functionality later

- **Newsletter & contact forms** are front-end only right now. Point them at a service like Formspree, Getform, or a small serverless function to start receiving submissions.
- **Affiliate links**: replace the `affiliateUrl: "#"` value on each offer in `js/offers-data.js` with your real tracked link.
- **Automating offers with AI/GitHub Actions**: since all content lives in one JS data file, a scheduled GitHub Action could regenerate or append to `js/offers-data.js` programmatically if you want daily automation later.

## Features included

Sticky top navigation (no hamburger — links scroll horizontally on small screens), dark mode (persisted), client-side search and category filtering, favourites via localStorage, share buttons, breadcrumbs, related offers, FAQ accordions, scroll-to-top, lazy-loaded images, and full SEO (unique titles/meta per page, canonical URLs, Open Graph, Twitter Cards, JSON-LD Article/FAQ/Breadcrumb schema, sitemap, robots.txt, RSS feed, manifest).
