export const SITE_CONFIG = {
  name: 'USA Spending',
  domain: 'usa-spending.com',
  url: 'https://usa-spending.com',
  tagline: 'See Where America\'s Money Goes',
  description: 'An independent visual government spending data explorer using official USAspending.gov data.',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@usa-spending.com',
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || 'privacy@usa-spending.com',
  legalEntityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME || 'USA Spending Data Inc.',
  governingLaw: process.env.NEXT_PUBLIC_GOVERNING_LAW || 'State of Delaware, United States',
  lastUpdated: 'August 13, 2026',
  disclaimerNotice: 'USA Spending is an independent project and is not affiliated with, operated by, sponsored by, or endorsed by the U.S. Government, USAspending.gov, the U.S. Department of the Treasury, or any government agency.',
};
