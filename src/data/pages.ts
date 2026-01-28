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
    title: 'Finzen — Financial Clarity in 3 Minutes a Day',
    description:
      'Finzen is a private, manual personal finance app. Track your finances in 2–3 minutes daily. No bank connections. Full AES-256 encryption. Calm, clear financial awareness.',
    keywords: ['finzen', 'personal finance app', 'manual finance tracking', 'privacy finance app'],
    footerLabel: 'Home',
    inFooter: true,
    siblings: [],
  },

  dailyExpenseTracker: {
    slug: 'daily-expense-tracker',
    title: 'Daily Expense Tracker — Build Your Finance Habit | Finzen',
    description:
      'A daily expense tracker designed around a 2–3 minute routine. Manual entry, instant clarity. No subscriptions to bank accounts. Just you and your finances.',
    keywords: ['daily expense tracker', 'daily money tracker', 'expense tracking habit'],
    footerLabel: 'Daily Expense Tracker',
    inFooter: true,
    siblings: ['simpleMoneyTracking', 'manualFinanceApp'],
  },

  manualFinanceApp: {
    slug: 'manual-personal-finance-app',
    title: 'Manual Personal Finance App — Awareness Over Automation | Finzen',
    description:
      'A personal finance app that is fully manual by design. No bank syncing. No automated categorization. You stay in control, aware of every dollar.',
    keywords: ['manual personal finance app', 'manual budget app', 'no bank connection finance app'],
    footerLabel: 'Manual Finance App',
    inFooter: true,
    siblings: ['privacyFirstFinance', 'dailyExpenseTracker'],
  },

  simpleMoneyTracking: {
    slug: 'simple-money-tracking',
    title: 'Simple Money Tracking — No Overwhelm, Just Clarity | Finzen',
    description:
      'Money tracking that does not require a finance degree. Simple interface, powerful insights. Start in minutes, not hours. Designed for beginners and busy professionals.',
    keywords: ['simple money tracking', 'easy money tracking app', 'beginner personal finance'],
    footerLabel: 'Simple Money Tracking',
    inFooter: true,
    siblings: ['dailyExpenseTracker', 'visualFinancialInsights'],
  },

  privacyFirstFinance: {
    slug: 'privacy-first-finance-app',
    title: 'Privacy-First Finance App — Your Data, Your Control | Finzen',
    description:
      'AES-256 encrypted. EU-hosted. No bank or wallet connections. Finzen is a finance app that never touches your accounts — because your financial data is private.',
    keywords: ['privacy first finance app', 'encrypted finance app', 'secure money tracking'],
    footerLabel: 'Privacy-First Finance',
    inFooter: true,
    siblings: ['manualFinanceApp', 'beYourOwnCFO'],
  },

  visualFinancialInsights: {
    slug: 'visual-financial-insights',
    title: 'Visual Financial Insights — See Where Your Money Goes | Finzen',
    description:
      'Sankey spending flow diagrams. Portfolio breakdowns. Trend charts. Finzen turns your daily entries into beautiful, actionable financial visualizations.',
    keywords: ['visual financial insights', 'spending visualization', 'sankey finance', 'money flow chart'],
    footerLabel: 'Visual Financial Insights',
    inFooter: true,
    siblings: ['dailyExpenseTracker', 'simpleMoneyTracking'],
  },

  beYourOwnCFO: {
    slug: 'be-your-own-cfo',
    title: 'Be Your Own CFO — Master Your Personal Finances | Finzen',
    description:
      'Stop outsourcing your financial awareness. Finzen gives you the tools to understand, plan, and grow your finances — manually, privately, and on your own terms.',
    keywords: ['be your own CFO', 'personal finance mastery', 'financial independence tracking'],
    footerLabel: 'Be Your Own CFO',
    inFooter: true,
    siblings: ['manualFinanceApp', 'privacyFirstFinance'],
  },
};

/**
 * Ordered list of angle pages for footer rendering.
 * Home is excluded — it's rendered separately.
 */
export const anglePages = [
  pages.dailyExpenseTracker,
  pages.manualFinanceApp,
  pages.simpleMoneyTracking,
  pages.privacyFirstFinance,
  pages.visualFinancialInsights,
  pages.beYourOwnCFO,
];

/**
 * App download / sign-up URL.
 * Update this to point to the actual Finzen app when ready.
 */
export const APP_URL = 'https://finzen.app/app';

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
