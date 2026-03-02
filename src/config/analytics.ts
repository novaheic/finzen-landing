/**
 * Umami analytics config.
 *
 * Source of truth order:
 * 1. PUBLIC_UMAMI_WEBSITE_ID (env, e.g. Cloudflare Pages)
 * 2. Fallback below (committed in repo — never "disappears" after redeploys)
 *
 * The website ID is not secret (it appears in the page HTML). Setting the
 * fallback here avoids relying on Cloudflare env vars persisting.
 */
const FALLBACK_UMAMI_WEBSITE_ID = 'f02d28c2-2a15-4a90-b4a3-8906129ba1f5';

export const UMAMI_WEBSITE_ID =
  (import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || '').trim() || FALLBACK_UMAMI_WEBSITE_ID;

export const UMAMI_SCRIPT_URL =
  (import.meta.env.PUBLIC_UMAMI_SCRIPT_URL || '').trim() || 'https://cloud.umami.is/script.js';
