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
  /** Optional: image directory under /public/images (defaults to slug). Use when URL slug changed but assets stayed. */
  imageBase?: string;
}

export const pages: Record<string, PageMeta> = {
  home: {
    slug: '',
    title: 'Finzen - The Zen Personal Finance Tracker',
    description:
      'The all in one personal finance dashboard. Envelope-budgeting, expense tracking, and portfolio management in one. Designed to give you a calm, clear view of your money.',
    ogImage: '/images/landing/finzen_og.png',
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
    slug: 'budgeting',
    title: 'Budgeting with Finzen - Spend with Intention',
    description:
      'Give every dollar a purpose. Set spending envelopes by category, log purchases as you go, and see your remaining budget update in real time.',
    ogImage: '/images/budgeting-app/og-budgeting-app.png',
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
    title: 'The Zen Portfolio Tracker - Finzen',
    description:
      'Stocks, ETFs, crypto, forex, and commodities - all in one beautiful dashboard. Track your performance, and watch your net worth grow in real time.',
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
    ogImage: '/images/portfolio-tracker/portfolio_og.png',
  },

  personalFinanceGuide: {
    slug: 'personal-finance-guide',
    title: 'Personal Finance Made Simple - Finzen',
    description:
      'Managing money doesn\'t have to feel overwhelming. Finzen is built for people who just want to know where they stand - no spreadsheets, no stress.',
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
    slug: 'the-finzen-method',
    title: 'Mindfulness for Your Money - Finzen',
    description:
      'Spend 2-3 minutes a day logging your expenses and you\'ll understand your money better than any bank sync ever could. No automation. Just awareness.',
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
    slug: 'privacy-and-security',
    imageBase: 'secure-finance-app',
    title: 'Security & Privacy - Finzen',
    description:
      'Finzen uses AES-256 encryption, EU servers, and zero-knowledge architecture. We can\'t read your financial data even if we wanted to. Privacy by design.',
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
    ogImage: '/images/secure-finance-app/og-secure-finance-app.png',
  },

  personalFinanceCharts: {
    slug: 'data-visualization',
    title: 'See Your Money Clearly - Finzen',
    description:
      'Log your spending, get the full picture. Daily entries become spending flows, budget charts, portfolio views, and a net worth timeline. All in one place.',
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
    ogImage: '/images/personal-finance-charts/og_personal_finance_charts.png',
  },

  ourStory: {
    slug: 'our-story',
    title: 'Finzen | The Story Behind Finzen',
    description:
      'No app did budgeting and investing well, so we built one. The story of years of testing, a lot of ramen, and a finance app made the way it should\'ve been.',
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
/** Default OG image when a page doesn't set ogImage (1200×630 recommended). */
export const DEFAULT_OG_IMAGE = '/images/landing/finzen_og.png';
export const SITE_URL = 'https://finzen.app';

/**
 * Social links shown in the footer. Same URLs are used for Organization schema (sameAs).
 * Add or edit here; footer and SEO stay in sync.
 */
export const SOCIAL_LINKS: ReadonlyArray<{ href: string; label: string; icon: 'instagram' | 'reddit' | 'linkedin' | 'email' }> = [
  { href: 'https://www.instagram.com/finzen.app/', label: 'Instagram', icon: 'instagram' },
  { href: 'https://www.reddit.com/r/finzen_app/', label: 'Reddit', icon: 'reddit' },
  { href: 'https://www.linkedin.com/company/finzen-org/', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'mailto:hi@finzen.org', label: 'Email', icon: 'email' },
];

/** Organization schema sameAs: public profile URLs only (no mailto). */
export const ORGANIZATION_SAME_AS: string[] = SOCIAL_LINKS.filter((l) => l.href.startsWith('http')).map((l) => l.href);
