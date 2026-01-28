# Finzen Landing — Design & Architecture Document

> **Purpose:** Single source of truth for the marketing site's structure, intent, and execution.
> **Audience:** Solo founder executing the build. No ambiguity allowed.
> **Status:** Living document. Update as decisions solidify.

---

## 1. Philosophy & Brand Voice

Finzen's marketing site must radiate the same calm, intentional energy as the product. This is not a startup shouting for attention — it is a quiet invitation to a better relationship with money.

### Brand Voice Pillars

| Pillar | What it sounds like | What it does NOT sound like |
|--------|--------------------|-----------------------------|
| **Calm** | Measured sentences. Generous whitespace. | Exclamation marks. Buzzword stacking. |
| **Confident** | States truths directly. No hedging. | Hype. "Revolutionary." "Game-changing." |
| **Warm** | Speaks to a real person's real frustration. Built by someone who lived it. | Corporate. Detached. Generic. |
| **Intelligent** | Respects the reader's ability to understand. | Condescending explainer tone. |
| **Authentic** | Founder voice. Personal. Occasionally dry humor. Earned credibility. | Polished PR copy. "We're passionate about..." |

### Core Narrative Arc (Homepage)

The homepage is one continuous story, told through scroll. The central hook is **consolidation** — stop juggling apps and spreadsheets — layered with the mindful-awareness angle.

1. **Hook** — Stop juggling. One app. Budgeting, cashflow, and portfolio — all in one place.
2. **Reframe** — You don't need 4 apps and a spreadsheet. You need one tool that sees the full picture.
3. **How It Works** — Budget → Track spending → Watch investments → See it all connected.
4. **The Experience** — What it feels like to actually understand your finances (not just see numbers).
5. **Visual Intelligence** — Show the data. Sankey flows. Portfolio views. Trend charts.
6. **Trust & Privacy** — AES-256 encryption. EU servers. No bank connections. Your data, yours alone.
7. **Founder Story** — Brief, authentic. Why this was built. The spreadsheet that broke.
8. **Qualify** — Who this is for. Who it isn't. Be honest.
9. **Convert** — Get started.

### Founder Voice (use on homepage, sparingly on angle pages)

The founder's story is a genuine asset. It reads as: personal finance nerd, decade of experience, tried everything, ended up on a Google Sheet held together by duct tape. Built the app because nothing else did everything in one place.

This is not "humble brag" copy — it is earned credibility. Use it to:
- Establish authenticity (real person built this for a real problem)
- Justify the "all-in-one" positioning (the founder lived the fragmentation)
- Add personality without being unprofessional

Tone examples:
- ✅ "I spent 700 hours building this because no app did what I needed."
- ✅ "The spreadsheet was fine. Until it wasn't."
- ❌ "As a passionate finance enthusiast with over a decade of experience..."

### Metaphorical Framing (use sparingly, contextually)

- The ugly spreadsheet → the clean dashboard (upgrade, not just alternative)
- Juggling multiple apps → one place that does it all (consolidation)
- Becoming your own CFO (ownership, mastery, not dependency)
- Mindfulness applied to money (presence, not anxiety)

---

## 2. UX & Design Principles

### Interaction Philosophy

1. **Speed is a virtue.** Every page loads in under 1 second. Zero layout shift. No flash of unstyled content. Performance IS the experience.
2. **HTML first.** Semantic, clean, readable HTML is the foundation. JavaScript is a progressive enhancement, never a dependency.
3. **One scroll, one story.** The homepage is a single narrative. No carousels. No tabs that hide content. No lazy-loading tricks that fragment the reading experience.
4. **Shared bones, distinct souls.** Angle pages reuse layout and components, but each has its own H1, emotional hook, and positioning. They are not the same page with a different title.
5. **Typography does the heavy lifting.** A well-chosen type system communicates more than illustrations. Get the type right first.
6. **Whitespace is content.** Generous spacing signals confidence. Cramped layouts signal anxiety. We are not anxious.
7. **No dark patterns.** No fake urgency. No countdown timers. No "only 3 left" nonsense. No aggressive exit popups. Trust the product.

### Visual Design Direction

- **Color Palette:** Muted, grounded. Sage green as a primary signal. Warm stone / off-white backgrounds. Deep navy or charcoal for text. One accent color for CTAs (a deeper green or a warm amber).
- **Typography:** A geometric sans-serif for headings (Inter or DM Sans). Same family, different weights, for body. Generous line-height (1.6–1.7 for body). Large type at key moments.
- **Imagery:** Abstract, organic. Soft gradients. Flowing data-like lines. No stock photos of people staring at laptops or phones.
- **Icons:** Minimal, thin-line style. Consistent stroke weight. Custom-feeling, not generic icon-pack.
- **Spacing:** 8px base unit. Sections breathe. Vertical rhythm is consistent.

### Responsive Strategy

The app itself is desktop-first. The landing page follows suit: **design for desktop, ensure mobile works cleanly.**

- Desktop is the primary design target. Layout decisions optimize for ~1200px viewports.
- Mobile is a clean fallback — sections stack, type scales down, grids go single-column. No mobile-specific features or layouts.
- Navigation stays minimal on all screen sizes: logo + CTA. No hamburger needed — the footer is the full map.
- Use Tailwind's `md:` breakpoints as enhancements on top of a readable single-column base. The base state is intentionally simple so it degrades gracefully without special mobile work.

### Beta & Evolvability

The site is launching during beta. Expect the product to shift. The architecture must support this:

- **Sections are independent.** Each homepage section is a self-contained block. Adding or removing one requires zero changes elsewhere.
- **Copy is marked as provisional.** Every placeholder comment (`COPY PLACEHOLDER`) signals that the text is structural, not final. Rewrite freely.
- **No section depends on another.** The narrative flows better with all sections present, but any single section can be cut without breaking the page.
- **New angle pages are cheap to add.** Register metadata in `pages.ts`, create the `.astro` file following the template, wire sibling links. Done.
- **Avoid premature polish.** Do not obsess over pixel-perfect copy or imagery until the product positioning stabilizes. Get the structure right first.

---

## 3. Site Architecture & Page List

### Page Inventory

| # | Page | URL | Role | Primary Keyword Cluster |
|---|------|-----|------|------------------------|
| 1 | **Homepage** | `/` | Brand hub. Full narrative. Main conversion page. | finzen app, personal finance app |
| 2 | **Daily Expense Tracker** | `/daily-expense-tracker` | Habit-loop angle. Targets daily-tracking searchers. | daily expense tracker, daily money tracker |
| 3 | **Manual Personal Finance App** | `/manual-personal-finance-app` | Anti-automation manifesto. Core identity page. | manual personal finance app, manual budget app |
| 4 | **Simple Money Tracking** | `/simple-money-tracking` | Beginner-friendly. Low overwhelm. | simple money tracking, easy money tracking app |
| 5 | **Privacy-First Finance App** | `/privacy-first-finance-app` | Security-conscious audience. Trust-heavy. | privacy first finance app, encrypted finance app |
| 6 | **Visual Financial Insights** | `/visual-financial-insights` | Data-visual learners. Shows the "what." | visual financial insights, spending visualization |
| 7 | **Be Your Own CFO** *(optional)* | `/be-your-own-cfo` | Empowerment angle. Ownership framing. | be your own CFO, personal finance mastery |

### Navigation Strategy

```
Top Nav:
  [Finzen logo]                              [Get Started →]
  (That's it. Clean. No clutter.)

Footer:
  ├── About / Philosophy (brief)
  ├── All angle pages listed with 1-line descriptions
  ├── Privacy Policy link
  └── App download / sign-up CTA

Hero Sections:
  └── Contextual links to 2-3 most relevant angle pages
      (Not all of them. Curated per page.)
```

**Principle:** Angle pages are *discovered*, not navigated to. They exist to capture search intent and funnel into the brand story. The homepage is the true hub.

### Internal Linking Map

```
Homepage (/)
  ├── → /daily-expense-tracker        (hero + body + footer)
  ├── → /manual-personal-finance-app  (hero + body + footer)
  ├── → /simple-money-tracking        (body + footer)
  ├── → /privacy-first-finance-app    (trust section + footer)
  ├── → /visual-financial-insights    (visual section + footer)
  └── → /be-your-own-cfo             (footer + optional body)

/daily-expense-tracker
  ├── → /                             (back to brand story)
  ├── → /simple-money-tracking        (sibling: same audience)
  └── → /manual-personal-finance-app  (sibling: related philosophy)

/manual-personal-finance-app
  ├── → /                             (brand story)
  ├── → /privacy-first-finance-app    (sibling: aligned values)
  └── → /daily-expense-tracker        (sibling: the practice)

/simple-money-tracking
  ├── → /                             (brand story)
  ├── → /daily-expense-tracker        (next step: daily habit)
  └── → /visual-financial-insights    (reward: see your progress)

/privacy-first-finance-app
  ├── → /                             (brand story)
  ├── → /manual-personal-finance-app  (why manual = why private)
  └── → /be-your-own-cfo             (your data, your control)

/visual-financial-insights
  ├── → /                             (brand story)
  ├── → /daily-expense-tracker        (the input that makes visuals possible)
  └── → /simple-money-tracking        (getting started)

/be-your-own-cfo
  ├── → /                             (brand story)
  ├── → /manual-personal-finance-app  (the philosophy behind ownership)
  └── → /privacy-first-finance-app    (your data, your control)
```

---

## 4. Tech Stack

### Why Astro

| Criterion | Astro | Next.js (SSG) |
|-----------|-------|---------------|
| Ships zero JS by default | ✅ Yes | ❌ Always ships React runtime |
| Static-first mental model | ✅ Native | ⚠️ Requires discipline |
| Framework-agnostic islands | ✅ Svelte/Vue/React/Vanilla | ❌ React only |
| Built-in image optimization | ✅ Yes | ✅ Yes (but heavier) |
| SEO-friendly HTML output | ✅ Excellent | ✅ Good |
| Complexity for a solo founder | ✅ Lower | ⚠️ Higher (config, RSC, etc.) |
| Bundle size baseline | ✅ Minimal | ⚠️ Larger |

**Decision: Astro.** It is purpose-built for this exact use case — fast, static, content-driven marketing sites with minimal JavaScript.

### Full Stack

```
┌─────────────────────────────────────────────┐
│  Astro 5.x                                  │
│    ├── Static build (zero client JS)         │
│    ├── TypeScript                            │
│    ├── Tailwind CSS (via @astrojs/tailwind)  │
│    ├── @astrojs/sitemap (auto sitemap)       │
│    └── Astro Image API (built-in)            │
│                                              │
│  Deployment: Cloudflare Pages                │
│    ├── Free tier                             │
│    ├── Edge network (fast globally)          │
│    ├── Git-based deploys                     │
│    └── Built-in analytics                    │
└─────────────────────────────────────────────┘
```

### What We Are NOT Using (and why)

| Skipped | Reason |
|---------|--------|
| CMS (Contentful, Sanity, etc.) | Overkill. 7 pages. Edit files directly. |
| Blog / MDX content layer | No blog initially. Add later if needed. |
| Analytics heavy (GA4 full setup) | Cloudflare Analytics + simple event tracking is enough. |
| CSS-in-JS | Adds JS weight. Tailwind is sufficient. |
| UI component library | 7 pages, unique design. Custom is better. |
| i18n on launch | Single language. Add structure for it, but don't implement yet. |

---

## 5. Repo Structure

```
finzen-landing/
│
├── DESIGN.md                          ← This file
├── package.json
├── package-lock.json
├── astro.config.mjs                   ← Astro config (sitemap, integrations)
├── tailwind.config.mjs                ← Design tokens, color palette, type scale
├── tsconfig.json                      ← TypeScript config (extends astro/tsconfig)
│
├── public/                            ← Static assets (served as-is)
│   ├── favicon.svg
│   ├── robots.txt
│   └── og-image.png                   ← Default Open Graph image (1200×630)
│
└── src/
    ├── pages/                         ← Route = file. One file per URL.
    │   ├── index.astro                ← Homepage (/)
    │   ├── daily-expense-tracker.astro
    │   ├── manual-personal-finance-app.astro
    │   ├── simple-money-tracking.astro
    │   ├── privacy-first-finance-app.astro
    │   ├── visual-financial-insights.astro
    │   └── be-your-own-cfo.astro
    │
    ├── layouts/
    │   └── Layout.astro               ← Base layout: <head>, <Header>, <main>, <Footer>
    │
    ├── components/
    │   ├── Header.astro               ← Logo + single CTA. Mobile-responsive.
    │   ├── Footer.astro               ← Full site map + philosophy snippet + CTA
    │   ├── Hero.astro                 ← Homepage hero (philosophy-first)
    │   ├── AngleHero.astro            ← Angle page hero (accepts props: title, subtitle, keyword)
    │   ├── Section.astro              ← Generic section wrapper (padding, max-width, heading)
    │   ├── FeatureList.astro          ← Renders a list of features with icons
    │   ├── TrustBadge.astro           ← Security/privacy trust signals
    │   ├── CTABlock.astro             ← Reusable CTA section (heading + button + optional subtext)
    │   ├── SiblingLinks.astro         ← "Continue exploring" links between angle pages
    │   └── SEO.astro                  ← <head> meta management (OG, Twitter, canonical, schema)
    │
    ├── styles/
    │   └── global.css                 ← @tailwind directives + base typography overrides
    │
    └── data/
        └── pages.ts                   ← Page metadata registry (title, desc, keywords, OG, schema)
```

---

## 6. Implementation Plan

### Phase 0: Foundation *(Get it building and deploying)*

- [ ] `npm create astro@latest` — scaffold project
- [ ] Install and configure Tailwind CSS (`@astrojs/tailwind`)
- [ ] Define design tokens in `tailwind.config.mjs` (colors, spacing, font sizes, line-heights)
- [ ] Configure `astro.config.mjs` with `@astrojs/sitemap`
- [ ] Create `public/robots.txt` and `public/favicon.svg`
- [ ] Write `src/data/pages.ts` — metadata registry for all pages
- [ ] Build `src/components/SEO.astro` — handles `<title>`, `<meta>`, OG tags, canonical, schema
- [ ] Build `src/layouts/Layout.astro` — base shell importing SEO, Header, Footer
- [ ] Build `src/components/Header.astro` — logo + CTA only
- [ ] Build `src/components/Footer.astro` — full site links
- [ ] Create all 7 page files as minimal stubs (just Layout + one `<h1>`)
- [ ] Verify: `npm run build` succeeds, all routes resolve
- [ ] Deploy to Cloudflare Pages. Confirm live.

### Phase 1: Homepage *(The main event)*

- [ ] `Hero.astro` — philosophy hook, tagline, primary CTA button
- [ ] "Reframing" section — why manual tracking is intentional, not lazy
- [ ] "How It Works" — 3 clear steps (enter → see → understand). Simple, scannable.
- [ ] "The Experience" — emotional/sensory description of daily use
- [ ] "Visual Intelligence" — show what Sankey / portfolio views look like (static mockups or abstract visuals)
- [ ] "Trust & Privacy" — AES-256, EU servers, no bank connections. Use `TrustBadge.astro`.
- [ ] "Who This Is For" — qualification list (positive + negative). Honest.
- [ ] Homepage CTA — `CTABlock.astro` with habit-framing headline
- [ ] Wire hero links to 3 most relevant angle pages

### Phase 2: Angle Pages *(Capture intent, funnel to brand)*

Each angle page follows this structure:
1. `AngleHero` — unique H1, positioning statement, 1 CTA
2. Core argument (2–3 short sections, reusing `Section.astro`)
3. Feature relevance (how Finzen's capabilities serve THIS specific intent)
4. Trust signal (brief `TrustBadge` or inline mention)
5. CTA (back to app or sign-up)
6. `SiblingLinks` — 2–3 contextual links to related angle pages

Build order:
- [ ] `/daily-expense-tracker` — habit loop, routine, 3-minute pitch
- [ ] `/manual-personal-finance-app` — anti-automation, intentionality
- [ ] `/simple-money-tracking` — low friction, beginner-welcoming
- [ ] `/privacy-first-finance-app` — security deep-dive, encryption details
- [ ] `/visual-financial-insights` — data storytelling, Sankey, charts
- [ ] `/be-your-own-cfo` — empowerment, mastery, ownership

### Phase 3: SEO & Structured Data *(Maximize discoverability)*

- [ ] Verify Schema.org `SoftwareApplication` markup renders correctly on all pages
- [ ] Add FAQ schema to angle pages (future: when FAQ sections are written)
- [ ] Audit heading hierarchy on every page (exactly one H1, logical H2→H3 nesting)
- [ ] Verify sitemap.xml contains all pages with correct priorities
- [ ] Review canonical tags — ensure no duplicates
- [ ] Internal link audit — every page links back to homepage, every page has 2+ sibling links
- [ ] Test with Google Rich Results Test
- [ ] Review OG images render correctly (use og:image on every page)

### Phase 4: Performance & Polish *(Launch-ready quality)*

- [ ] Run Lighthouse on all pages — target 95+ Performance, 100 SEO, 95+ Accessibility
- [ ] Optimize all images (WebP, correct sizes, lazy-load below fold)
- [ ] Audit Core Web Vitals (LCP < 2.5s, CLS < 0.1)
- [ ] Add `<link rel="preconnect">` for any external fonts
- [ ] Mobile responsiveness review on real devices
- [ ] Cross-browser spot-check (Chrome, Firefox, Safari)
- [ ] Final copy review (when copy is written)
- [ ] Typography audit — line-lengths, sizes, weights all intentional

### Phase 5: Launch *(Ship it)*

- [ ] Final build + deploy to production
- [ ] Verify all URLs resolve (no 404s)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Cloudflare Web Analytics dashboard
- [ ] Monitor: first-week indexing, initial traffic, any crawl errors
- [ ] Document: any post-launch changes or learnings back into this file

---

## 7. SEO & LLM-Discoverability Strategy

### Search Engine Optimization

**Keyword Philosophy:** Each page owns one primary keyword cluster. No page competes with another. The homepage is the brand hub — it doesn't target long-tail keywords aggressively. Angle pages do the long-tail heavy lifting.

**Technical SEO Checklist:**
- Static HTML output (no client-side rendering lag for crawlers)
- Semantic HTML5 elements on every page: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Exactly one `<h1>` per page, containing the primary keyword
- Descriptive `alt` attributes on all images
- Schema.org structured data (`SoftwareApplication` type)
- XML sitemap with all pages
- Canonical `<link>` on every page
- Clean, keyword-friendly URLs (no query strings, consistent trailing slash policy)
- Mobile-responsive (Google mobile-first indexing)

**Internal Authority Strategy:**
- Hub-and-spoke: Homepage is the hub, angle pages are spokes
- Every spoke links back to the hub
- Spokes link to 2–3 contextual siblings (not all of them — keep it natural)
- Footer provides a complete map (useful for crawlers and users alike)
- Body copy contains contextual links (not just nav/footer links)

### LLM-Discoverability (Emerging Channel)

LLMs are increasingly used as search engines. Content that is well-structured, factual, and directly answers questions gets cited. Design for this:

**Principle 1: Answer questions explicitly.**
Every angle page should implicitly (and sometimes explicitly) answer a question:
- `/privacy-first-finance-app` answers: *"Is there a finance app that doesn't connect to my bank?"*
- `/manual-personal-finance-app` answers: *"What finance apps don't use automation?"*
- `/daily-expense-tracker` answers: *"What's the best daily expense tracker?"*

**Principle 2: Use comparison framing.**
LLMs often compare products. Make Finzen's differentiation scannable:
- "Unlike apps that require bank access, Finzen is fully manual."
- "Where other apps automate categorization, Finzen keeps you in control."

**Principle 3: Be factual and specific.**
Vague marketing claims are invisible to LLMs. Specific, verifiable claims get cited:
- ✅ "AES-256-GCM encryption. Data stored on EU servers."
- ❌ "We take your privacy seriously."
- ✅ "Supports stocks, crypto, commodities, forex, and real estate."
- ❌ "Track all your assets in one place."

**Principle 4: Structure reads well as plain text.**
LLMs often strip HTML and read the content as text. Write so that the page makes sense even without visual layout. Use clear transitions between sections. Don't rely on visual hierarchy alone to convey meaning.

**Principle 5: Explicit feature lists.**
Structured lists (even in HTML `<ul>`) are easy for LLMs to extract and cite. Every angle page should have at least one clear, factual feature list relevant to its intent.

---

## 8. Content Planning (Intent, Not Copy)

This section maps what each page needs to *accomplish* — not what it says. Final copy comes later.

### Homepage `/`

| Section | Intent | Key Message |
|---------|--------|-------------|
| Hero | Consolidation hook + calm tone | "One app. Budgeting, cashflow, portfolio — the full picture." |
| Reframe | Challenge the status quo | Stop juggling apps and spreadsheets. One place does it all. |
| How It Works | Reduce friction anxiety | Budget → Track → Invest → See it connected. Simple steps. |
| Experience | Paint the feeling | Calm. In control. Finally understanding your money. |
| Visual Intelligence | Show capability | Sankey flow, portfolio breakdown, trend charts. Show, don't tell. |
| Trust | Eliminate security concerns | AES-256 encryption. EU data. No bank connections. Factual, brief. |
| Founder Story | Build authenticity | Why this was built. The spreadsheet problem. Personal, brief. |
| Qualification | Help people self-select | "This is for you if..." / "This is NOT for you if..." |
| CTA | Convert | Get started. Low friction. No bank connection required. |

### Angle Page Template

| Section | Intent |
|---------|--------|
| AngleHero | Hook the specific searcher. "You searched for X. Here's why Finzen." |
| Core Argument | 2–3 short sections deepening the angle |
| Feature Relevance | "Here's how Finzen delivers on this specific promise" |
| Trust Signal | Brief credibility mention (encryption, privacy, or simplicity) |
| CTA | Convert or explore further |
| Sibling Links | "If this resonated, also read..." |

---

## 9. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-28 | Astro over Next.js | Zero JS by default. Static-first. Simpler for solo founder. |
| 2026-01-28 | Cloudflare Pages over Vercel | Free tier is generous. Edge network. No vendor lock-in. |
| 2026-01-28 | No blog at launch | Focus on converting, not content marketing volume. Add later if needed. |
| 2026-01-28 | 6 angle pages + homepage | Covers the 5 core intents. `/be-your-own-cfo` is optional Phase 2. |
| 2026-01-28 | Tailwind CSS | Utility-first. No CSS bloat. Fast to build custom designs. |
| 2026-01-28 | Single CTA in nav | Clean. Reduces cognitive load. Footer handles full navigation. |
| 2026-01-28 | Desktop-first responsive | App is desktop-first. Landing page matches. Mobile is a clean fallback, not the design target. |
| 2026-01-28 | Narrative pivot to consolidation | "All-in-one" is the stronger hook than "manual tracking." The mindfulness angle layers in, not leads. |
| 2026-01-28 | Added founder story section | Authentic origin story is a genuine differentiator. Earns trust without corporate polish. |
| 2026-01-28 | Beta evolvability philosophy | Site launches during beta. Sections are independent blocks. Easy add/remove. No premature polish. |
