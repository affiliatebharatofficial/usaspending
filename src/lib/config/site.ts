export const SITE_CONFIG = {
  name: 'USA Spending',
  domain: 'usaspending.us',
  url: 'https://www.usaspending.us',
  tagline: 'See Where America\'s Money Goes',
  description: 'An independent visual data explorer rendering public U.S. federal spending datasets transparent and accessible.',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@usaspending.us',
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || 'privacy@usaspending.us',
  legalEntityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME || 'USA Spending Data Explorer Project',
  governingLaw: process.env.NEXT_PUBLIC_GOVERNING_LAW || 'State of Delaware, United States',
  lastUpdated: 'September 2026',
  disclaimerNotice: 'USA Spending (usaspending.us) is an independent public data visualization project. It is not affiliated with, operated by, sponsored by, or endorsed by the U.S. Government, USAspending.gov, the U.S. Department of the Treasury, or any federal agency.',
};
