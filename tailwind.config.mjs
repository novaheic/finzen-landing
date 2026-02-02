/**
 * Tailwind CSS Configuration — Design Tokens
 *
 * Brand: black/white. Light bg #ECECEC, dark bg #1B1B1B.
 * Accents: black in light mode, white in dark mode (use dark: prefix).
 */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],

  theme: {
    extend: {
      colors: {
        // Page backgrounds (use in components; body uses global.css)
        page: {
          light: '#ECECEC',
          dark: '#1B1B1B',
        },
        // Accent: black light / white dark — use bg-accent text-accent etc.
        accent: '#0a0a0a',
        // Neutral text/surfaces
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1a1a1a',
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
