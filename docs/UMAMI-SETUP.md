# Umami analytics – setup and troubleshooting

This site loads the Umami script when a website ID is available. The value is **baked in at build time** (e.g. on Cloudflare Pages when the build runs).

**Where the ID comes from (in order):**

1. **Env var** `PUBLIC_UMAMI_WEBSITE_ID` (e.g. set in Cloudflare Pages → Settings → Environment variables).
2. **Fallback in repo** `src/config/analytics.ts` → `FALLBACK_UMAMI_WEBSITE_ID`.

If you set the fallback in the repo, you don’t depend on Cloudflare remembering the env var, so it won’t “disappear” after redeploys. The website ID is not secret (it’s in the page HTML).

## Checklist when realtime stays at 0

### 1. Confirm the script is in the built page

On your **deployed** site (the live URL), open **View Page Source** (right‑click → View Page Source, or Ctrl+U). Search for:

- `umami` or `script.js` (cloud.umami.is)

If you see a comment like `<!-- Umami: enabled (website-id set at build) -->` and a `<script ... data-website-id="...">` tag, the env var was present at build and the script is there.

If there is **no** Umami script or comment:

- The build did not have `PUBLIC_UMAMI_WEBSITE_ID` when it ran.
- In **Cloudflare Pages** → your project → **Settings** → **Environment variables**:
  - Add `PUBLIC_UMAMI_WEBSITE_ID` (exact name) with your website UUID.
  - Set it for **Production** (and **Preview** if you test on preview URLs).
- **Redeploy** after adding the variable (new build must run with the var). Re-run the build or push a new commit.

### 2. Ad blockers and privacy tools

Extensions (uBlock, Privacy Badger, etc.) often block `cloud.umami.is`. Test in an **incognito/private** window with extensions disabled, or in a browser profile with no ad blocker.

### 3. Domain in Umami (if you use it)

In Umami → **Websites** → your site → **Domain**: this is used for referrer filtering, not for blocking. If you’re testing on a **Cloudflare Pages URL** (e.g. `something.pages.dev`), you can add that hostname (e.g. `your-project.pages.dev`) as an extra domain for the same website so referrers are correct. It does **not** need to be there for events to be accepted; the main thing is that the script is present and not blocked.

### 4. Correct website ID

In Umami → **Websites**, open your website and copy the **Website ID** (UUID). It must match the value of `PUBLIC_UMAMI_WEBSITE_ID` exactly (no spaces, full UUID). In the dashboard, make sure you're viewing **Realtime** for this same website (not the old placeholder).

### 5. See if the tracker is sending (Network tab)

With the site open in incognito:

1. Open **DevTools** (F12) → **Network** tab.
2. Reload the page.
3. In the filter box type `umami` or `cloud.umami.is`, or scroll for requests to `cloud.umami.is`.

You should see at least one request to `cloud.umami.is` (often to `/api/send` or similar) when the page loads. Check:

- **Status 200** → Request reached Umami. If realtime is still 0, you may be looking at a different website in the dashboard, or there can be a short delay; try another page view.
- **Status 4xx/5xx or failed** → Umami or the network rejected the request; note the status and response.
- **No request to cloud.umami.is** → The script may be blocked (e.g. strict privacy/script blocker) or failing before it sends; check **Console** for errors.

### 6. Domain in Umami

In Umami → **Websites** → your site → **Edit** → **Domain**: add the **exact hostname** you're visiting (e.g. `your-project.pages.dev` or `finzen.app`). Some setups only accept data when the request hostname matches a configured domain.

---

## Swapping from the placeholder site to the new Finzen landing

1. In Umami: **Websites** → **Add website** → set name and domain → save → copy the new **Website ID**.
2. In this project: set `PUBLIC_UMAMI_WEBSITE_ID` to that new ID (e.g. in Cloudflare env vars), then redeploy.
3. Optionally retire the old placeholder (remove its script or delete that website in Umami).

## Local / preview

- Leave `PUBLIC_UMAMI_WEBSITE_ID` unset locally to avoid loading the script.
- For staging, create a separate website in Umami and use its ID in the staging env.
