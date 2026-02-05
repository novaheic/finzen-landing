/**
 * Page metadata registry.
 * Single source of truth for titles, descriptions, keywords, and structured data.
 * Every page imports its metadata from here — no duplication.
 */

export interface PageMeta {
  /** URL path (without leading slash for consistency) */
  slug: string;
  /** <title> tag — keep under 60 chars */
  title: string;
  /** <meta description> — keep under 155 chars */
  description: string;
  /** Primary keyword cluster (for internal reference, not injected as meta keyword tag) */
  keywords: string[];
  /** Open Graph image override (relative to /public). Falls back to default og-image.png */
  ogImage?: string;
  /** Short description for footer navigation */
  footerLabel: string;
  /** Whether this page appears in the footer site map */
  inFooter: boolean;
  /** Sibling angle pages this page should link to (by slug) */
  siblings: string[];
}

export const pages: Record<string, PageMeta> = {
  home: {
    slug: '',
    title: 'Finzen — Budget, Track Spending & Investments in One App',
    description:
      'All-in-one personal finance software. Envelope budgeting, expense tracking, and portfolio management combined. Privacy-first, AES-256 encrypted, no bank sync.',
    keywords: [
      'personal finance app',
      'personal finance software',
      'all-in-one finance',
      'budgeting and investing app',
      'finance management',
      'money tracking app',
    ],
    footerLabel: 'Home',
    inFooter: true,
    siblings: [],
  },

  budgetingApp: {
    slug: 'budgeting-app',
    title: 'Budgeting App — Envelope Budgeting & Expense Tracking | Finzen',
    description:
      'Zero-based envelope budgeting meets daily expense tracking. Set spending categories, track every purchase, see budget vs. actual in real-time.',
    keywords: [
      'budgeting app',
      'budget app',
      'budget planner',
      'expense tracking',
      'envelope budgeting',
      'zero based budgeting',
      'spending tracker',
      'money tracker',
    ],
    footerLabel: 'Budget & Track Spending',
    inFooter: true,
    siblings: ['portfolioTracker', 'personalFinanceCharts', 'mindfulMoneyTracking'],
  },

  portfolioTracker: {
    slug: 'portfolio-tracker',
    title: 'Portfolio Tracker — Stocks, Crypto, ETFs & Net Worth | Finzen',
    description:
      'Track stocks, ETFs, crypto, forex, and commodities in one portfolio view. Real-time prices, multi-asset allocation, net worth over time.',
    keywords: [
      'portfolio tracker',
      'investment tracker',
      'stock tracker',
      'crypto tracker',
      'net worth tracking',
      'asset tracker',
      'wealth tracker',
      'portfolio management',
    ],
    footerLabel: 'Portfolio & Net Worth',
    inFooter: true,
    siblings: ['budgetingApp', 'personalFinanceCharts', 'secureFinanceApp'],
  },

  personalFinanceGuide: {
    slug: 'personal-finance-guide',
    title: 'Personal Finance Guide — Start Managing Money Today | Finzen',
    description:
      'Personal finance made simple. No finance degree required. Clean interface, powerful insights. Perfect for beginners or anyone overwhelmed by complex apps.',
    keywords: [
      'personal finance guide',
      'personal finance for beginners',
      'simple budgeting app',
      'budgeting for beginners',
      'easy budgeting app',
      'how to manage personal finances',
      'budgeting made simple',
    ],
    footerLabel: 'Personal Finance Basics',
    inFooter: true,
    siblings: ['budgetingApp', 'mindfulMoneyTracking', 'personalFinanceCharts'],
    ogImage: '/images/personal-finance-guide/og-personal-finance-guide.png',
  },

  mindfulMoneyTracking: {
    slug: 'mindful-money-tracking',
    title: 'Mindful Money Tracking — Intentional Finance | Finzen',
    description:
      'A personal finance app without bank sync. Manual entry creates awareness. 2–3 minutes a day. No bank sync. Build financial mindfulness through daily practice.',
    keywords: [
      'mindful money tracking',
      'manual expense tracker',
      'budgeting app without bank sync',
      'daily expense tracker',
      'mindful budgeting',
      'conscious spending',
      'financial wellness app',
      'intentional finance',
    ],
    footerLabel: 'The Finzen Method',
    inFooter: true,
    siblings: ['secureFinanceApp', 'personalFinanceGuide', 'personalFinanceCharts'],
    ogImage: '/images/mindful-money-tracking/og-mindful-money-tracking.png',
  },

  secureFinanceApp: {
    slug: 'secure-finance-app',
    title: 'Secure Finance App — AES-256 Encrypted, EU Hosted | Finzen',
    description:
      'Your financial data encrypted with AES-256-GCM. EU servers, GDPR compliant. No bank connections, no wallet sync. Finzen never touches your accounts.',
    keywords: [
      'secure finance app',
      'private finance app',
      'encrypted finance app',
      'private budgeting',
      'GDPR finance app',
    ],
    footerLabel: 'Privacy & Security',
    inFooter: true,
    siblings: ['mindfulMoneyTracking', 'portfolioTracker'],
  },

  personalFinanceCharts: {
    slug: 'personal-finance-charts',
    title: 'Personal Finance Charts — Sankey, Trends & Reports | Finzen',
    description:
      'Sankey spending flows, portfolio breakdowns, budget charts, and net worth timelines. Turn daily entries into beautiful, actionable financial visualizations.',
    keywords: [
      'personal finance charts',
      'budget sankey',
      'money flow chart',
      'expense charts',
      'budget visualization',
      'monthly financial report',
      'financial analytics',
    ],
    footerLabel: 'Charts, Reports & Insights',
    inFooter: true,
    siblings: ['budgetingApp', 'portfolioTracker', 'mindfulMoneyTracking'],
  },

  ourStory: {
    slug: 'our-story',
    title: 'Our Story — Why We Built Finzen',
    description:
      'Why we built an all-in-one personal finance app. The frustration with juggling tools. The inspiration. 700 hours of obsessive building.',
    keywords: [
      'YNAB alternative',
      'blockfolio alternative',
      'personal finance app story',
    ],
    footerLabel: 'Our Story',
    inFooter: true,
    siblings: ['mindfulMoneyTracking', 'secureFinanceApp'],
  },
};

/**
 * Ordered list of angle pages for footer rendering.
 * Home is excluded — it's rendered separately.
 */
export const anglePages = [
  pages.personalFinanceGuide,
  pages.budgetingApp,
  pages.portfolioTracker,
  pages.mindfulMoneyTracking,
  pages.secureFinanceApp,
  pages.personalFinanceCharts,
  pages.ourStory,
];

/**
 * App download / sign-up URL.
 * Update this to point to the actual Finzen app when ready.
 */
export const APP_URL = 'https://app.finzen.org';

/**
 * Site-wide defaults
 */
export const SITE_NAME = 'Finzen';
/**
 * NOTE: OG images should be PNG for maximum compatibility.
 * The current og-image.svg is a placeholder — convert to PNG (1200×630) before launch.
 * Use a tool like Inkscape, Figma export, or an online converter.
 */
export const DEFAULT_OG_IMAGE = '/og-image.svg';
export const SITE_URL = 'https://finzen.app';
