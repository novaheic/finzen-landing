# Umami analytics – setup and swapping sites

This site uses [Umami](https://umami.is) for privacy-friendly analytics. Tracking is only loaded when `PUBLIC_UMAMI_WEBSITE_ID` is set (see `.env.example`).

## Swapping from the placeholder site to the new Finzen landing

You already have a placeholder site in Umami. To move to the new Finzen-Landing site:

### 1. Add a new website in Umami

1. Log in to your Umami dashboard (e.g. [cloud.umami.is](https://cloud.umami.is) or your self-hosted URL).
2. Go to **Settings** → **Websites** (or **Websites** in the sidebar).
3. Click **Add website**.
4. Set:
   - **Name**: e.g. `Finzen Landing` or `finzen.app`
   - **Domain**: your production domain, e.g. `finzen.app` (and add `www.finzen.app` if you use it).
5. Save. Copy the **Website ID** (UUID) you’re given.

### 2. Configure this project to use the new site

1. In this repo, create a `.env` or `.env.local` (see `.env.example`).
2. Set:
   - `PUBLIC_UMAMI_WEBSITE_ID` = the **Website ID** from step 1.
   - Optionally `PUBLIC_UMAMI_SCRIPT_URL` if you’re not using Umami Cloud (e.g. your self-hosted script URL).
3. Build and deploy. The new Finzen-Landing site will send events to this new website in Umami.

### 3. Optional: retire the placeholder site

- **Keep both**: Leave the old website as-is. The placeholder keeps its old data; the new website gets data only from the new site.
- **Stop tracking the placeholder**: Remove or change the Umami script on the placeholder so it no longer sends events (or take the placeholder site offline).
- **Delete the old website in Umami**: In Umami → Settings → Websites, delete the placeholder website if you no longer need its data. This cannot be undone.

## Local / preview

- If you don’t set `PUBLIC_UMAMI_WEBSITE_ID`, no analytics script is loaded (good for local dev).
- For staging, create a separate website in Umami (e.g. “Finzen Staging”) and use its ID in your staging env so production and staging data stay separate.
