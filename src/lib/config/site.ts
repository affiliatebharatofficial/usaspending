export const SITE_CONFIG = {
  name: 'USA Spending',
  domain: 'usaspending.us',
  url: 'https://www.usaspending.us',
  tagline: 'See Where America\'s Money Goes',
  description: 'An independent visual government spending data explorer using official USAspending.gov data.',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@usaspending.us',
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || 'privacy@usaspending.us',
  legalEntityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME || 'USA Spending Data Inc.',
  governingLaw: process.env.NEXT_PUBLIC_GOVERNING_LAW || 'State of Delaware, United States',
  lastUpdated: 'August 14, 2026',
  disclaimerNotice: 'USA Spending is an independent project and is not affiliated with, operated by, sponsored by, or endorsed by the U.S. Government, USAspending.gov, the U.S. Department of the Treasury, or any government agency.',
};
