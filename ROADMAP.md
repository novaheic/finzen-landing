# Finzen Landing — What's Next

## 1. Keyword Research (do this first)
- Target long-tail queries: "envelope budgeting app", "manual expense tracker", "privacy first finance app", "all in one budgeting and investing"
- Check search volume + competition (Ubersuggest, Ahrefs, Google Trends)
- Map each keyword to a page: homepage gets broadest terms, each angle page owns one cluster
- Document your findings — feed them directly into page titles, H1s, and meta descriptions

## 2. Final Copy (pages.ts → components → page content)
- Update `src/data/pages.ts` first: titles, descriptions, keywords for every page. These drive `<title>`, `<meta description>`, and the sitemap.
- Then rewrite each page's body copy to match the keyword intent. Each page has `COPY PLACEHOLDER` comments marking what to replace.
- Homepage sections are independent blocks — reorder or cut any that don't work.

## 3. Your Assets
- **OG image** — replace `public/og-image.svg` with a 1200×630 PNG (SVGs don't render in most OG scrapers)
- **Favicon** — replace `public/favicon.svg` with your final icon (keep SVG, it works fine for favicon)
- **Screenshots / mockups** — Section 5 (Visual Intelligence) on the homepage is built for this. Drop images in once the app UI is stable.

## 4. Fix and Polish
- Verify every internal link resolves (angle pages → siblings, footer nav)
- Test `npm run build` — zero errors, clean HTML output
- Run through Lighthouse: target 95+ on SEO and Performance
- Check sitemap.xml generates correctly at `/sitemap.xml`

## 5. Launch Checklist
- `APP_URL` in `src/data/pages.ts` → point to actual sign-up URL
- `site` in `astro.config.mjs` → confirm final domain
- Deploy to Cloudflare Pages / Netlify / Vercel (static, zero config)
- Submit sitemap to Google Search Console
