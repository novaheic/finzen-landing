# Portfolio Tracker Page — SEO Analysis Report

**Page:** `/portfolio-tracker`  
**Date:** 2025  
**Overall score: 7.5 / 10**

---

## What’s working well

| Area | Status |
|------|--------|
| **Single H1** | One H1: "Live Multi-Asset Portfolio Tracking" (keyword-rich). |
| **Title tag** | "Portfolio Tracker — Stocks, Crypto, ETFs & Net Worth \| Finzen" (~56 chars, under 60). |
| **Meta description** | ~98 chars, under 155, includes keywords. |
| **Canonical** | Set to `/{slug}` via Layout. |
| **OG image** | Now set to `/images/portfolio-tracker/portfolio_og.png`. |
| **OG / Twitter** | og:title, og:description, og:url, og:image; Twitter summary_large_image. |
| **FAQ schema** | FAQ in HTML with `itemscope`/`itemtype` FAQPage + Question/Answer. |
| **Heading structure** | Clear H2s for sections (DIY-Investing, True Diversification, Privacy-First, etc.). |
| **Internal links** | Links to /personal-finance-charts, /secure-finance-app, /budgeting-app + CTA + SiblingLinks. |
| **Keywords meta** | Passed to Layout for `meta name="keywords"`. |

---

## Easy wins (quick improvements)

1. **Add WebPage JSON-LD**  
   Other angle pages (e.g. mindful-money-tracking) have a `WebPage` script. Add the same on portfolio-tracker so the page is clearly described in structured data.  
   **Effort:** Low (copy pattern from mindful-money-tracking).

2. **Add BreadcrumbList JSON-LD**  
   Enables breadcrumb rich results in SERPs (e.g. Home > Portfolio Tracker).  
   **Effort:** Low (one script block).

3. **Fix subtitle typo**  
   Hero subtitle: "Always see your **networth**" → "**net worth**" (two words).  
   **Effort:** Trivial.

4. **Optional: FAQPage JSON-LD**  
   You already have FAQ schema in the HTML. Adding a separate `FAQPage` JSON-LD can reinforce eligibility for FAQ rich results.  
   **Effort:** Low (build from existing Q&A content).

5. **Confirm OG image dimensions**  
   SEO.astro assumes 1200×630. Ensure `portfolio_og.png` is 1200×630 (or close) for best display on social and in link previews.  
   **Effort:** Check/edit image once.

6. **Review key image `alt` text**  
   Hero and main screenshots should have short, descriptive alts (e.g. "Portfolio dashboard with allocation view") where they’re missing or generic.  
   **Effort:** Low (a few alt attributes).

---

## Summary

- **Score 7.5/10:** Strong basics (title, description, H1, canonical, OG, FAQ in HTML, internal links). Missing WebPage + BreadcrumbList schema and a couple of small copy/asset tweaks.
- **Highest impact easy wins:** WebPage + BreadcrumbList schema, fix "networth" → "net worth", and confirm OG image size. Implementing the two schema blocks and the typo fix would reasonably bring the page to **~8–8.5/10** for technical and on-page SEO.
