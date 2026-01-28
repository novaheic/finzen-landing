/**
 * Tailwind CSS Configuration — Design Tokens
 *
 * This is the single source of truth for Finzen's visual design system.
 * All colors, spacing, typography, and shadows are defined here.
 *
 * Philosophy: Muted, grounded, calm. Sage green as primary signal.
 * Warm stone tones for backgrounds and text. Generous whitespace.
 */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],

  theme: {
    extend: {
      /**
       * Color Palette
       * Primary: Emerald (green family — calm, growth, nature)
       * Neutral: Stone (warm grays — not cold blue-gray)
       * Accent: Amber (optional warm accent for highlights)
       */
      colors: {
        // Primary action / brand color
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',  // emerald-500
          600: '#059669',  // emerald-600
          700: '#047857',  // emerald-700
          800: '#065f46',  // emerald-800
        },
        // Warm neutral — slightly warmer than default stone
        neutral: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e5e0',
          300: '#d4d0c8',
          400: '#a8a29e',  // stone-400
          500: '#78716c',  // stone-500
          600: '#57534e',  // stone-600
          700: '#44403c',  // stone-700
          800: '#292524',  // stone-800
          900: '#1c1917',  // stone-900
        },
      },

      /**
       * Typography
       * Using system font stack as fallback.
       * If adding Google Fonts later, swap here.
       */
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },

      /**
       * Font Sizes — Modular scale
       * Base: 16px (1rem). Scale factor: ~1.25 (major third)
       */
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],           // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }],       // 14px
        base: ['1rem', { lineHeight: '1.6' }],             // 16px — body
        lg: ['1.125rem', { lineHeight: '1.75rem' }],       // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],        // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],         // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],      // 36px
        '5xl': ['3rem', { lineHeight: '3.25rem' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '4rem' }],        // 60px
      },

      /**
       * Spacing — 8px base unit
       * Generous spacing signals confidence and calm.
       */
      spacing: {
        // Standard Tailwind spacing is fine.
        // Extend only if custom values are needed.
      },

      /**
       * Border Radius
       * Slightly softer than sharp. Not pill-shaped.
       */
      borderRadius: {
        sm: '0.375rem',   // 6px
        md: '0.5rem',     // 8px — default for cards
        lg: '0.75rem',    // 12px — buttons, larger cards
        xl: '1rem',       // 16px — hero CTAs
        '2xl': '1.5rem',  // 24px — optional for feature cards
      },

      /**
       * Shadows — Subtle. No heavy drop shadows.
       */
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.06)',
        md: '0 2px 8px rgba(0, 0, 0, 0.08)',
        lg: '0 4px 16px rgba(0, 0, 0, 0.10)',
      },

      /**
       * Max Width — for content containers
       */
      maxWidth: {
        content: '48rem',     // 768px — body text
        wide: '56rem',        // 896px — wider sections
        page: '64rem',        // 1024px — full page width
      },
    },
  },

  plugins: [],
};
