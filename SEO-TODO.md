# SEO / Copy — Outstanding Items

Tracking list for pjprelaunchprivatelift.com.my. Grouped by effort/impact.

## Done
- [x] Fix footer disclaimer typos (Specifications, without, with) + missing period
- [x] Fix broken header nav anchors (#living-hall, #sky-semi-d)
- [x] Remove trailing space in "Type B1"
- [x] OG image — created 1200×630 `og-image.jpg` from sky-frontage.webp; updated og/twitter/schema paths to `/assets/og-image.jpg` + added width/height meta

## Quick fixes
- [ ] **Residences heading** — "Three layouts, each a balcony design" is confusing (only Type C1 has a balcony). Reword.
- [ ] **Contact identity** — agent uses a personal Gmail (jiaweii927@gmail.com) while marketing is by Nexsgen Realty. Consider a branded agency email for credibility + schema consistency.
- [ ] **Floorplan sizes** — cards show "1,8xx / 1,5xx / 1,1xx" while schema shows exact figures. Confirm the teaser blur is intentional.

## Higher-impact SEO
- [ ] **FAQ section** — capture high-intent keywords: price, launch date, maintenance fee, developer name, completion date. Add FAQ schema (JSON-LD) for rich results.
- [ ] **Developer content** — "Established Malaysian Developer" appears everywhere and ranks for nothing. Name the developer + add a short track-record block once confirmed.
- [ ] **H1 keyword alignment** — H1 "When arrival becomes an experience" has none of the target keywords. Add a keyword-bearing subhead (PJ / private lift / new launch) near the top.
- [ ] **Thin content** — only one real page. Consider adding location/neighbourhood detail, developer page, or a short blog for long-tail keywords.

## Technical SEO
- [x] `robots.txt` created (public/robots.txt) — allows all, declares sitemap
- [x] `sitemap.xml` now auto-generated via src/pages/sitemap.xml.ts (auto-discovers pages)
- [x] Removed old static public/sitemap.xml (avoided build collision)
- [x] Fixed stale `site` in astro.config.mjs (accentpj → www.pjprelaunchprivatelift)
- [x] Fixed invalid structured data — RealEstateAgent: removed invalid `jobTitle`, added address/image/url/priceRange
- [ ] Rebuild + redeploy so robots.txt / sitemap.xml / schema fix go live (dist/ is stale)
- [ ] Submit sitemap to Google Search Console
- [ ] **SSL / apex DNS fix** (root cause found): www is on Vercel ✅ but apex still points to old Linode host 139.162.7.203 (serves aafiyah.com.my cert). FIX: in BigDomain DNS panel change apex A record → `76.76.21.21`; in Vercel add apex domain + set it to redirect to www. Auto-issues valid cert + handles non-www→www 301.
- [ ] Re-validate structured data with Google Rich Results Test after deploy
- [ ] Google Search Console + Analytics installed
- [ ] Image `alt` text audit (mostly good already)
- [ ] Page speed / Core Web Vitals check
