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
const FALLBACK_UMAMI_WEBSITE_ID = 'fcff4ca4-dac6-4c81-93a8-e8a61de6e489';

export const UMAMI_WEBSITE_ID =
  (import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || '').trim() || FALLBACK_UMAMI_WEBSITE_ID;

export const UMAMI_SCRIPT_URL =
  (import.meta.env.PUBLIC_UMAMI_SCRIPT_URL || '').trim() || 'https://cloud.umami.is/script.js';
