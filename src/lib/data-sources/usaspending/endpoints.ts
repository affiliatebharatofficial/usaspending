export const USASPENDING_BASE_URL = 'https://api.usaspending.gov/api/v2';

export const ENDPOINTS = {
  SPENDING_BY_CATEGORY: `${USASPENDING_BASE_URL}/spending/by_category/`,
  TOPTIER_AGENCIES: `${USASPENDING_BASE_URL}/references/toptier_agencies/`,
  AGENCY_OVERVIEW: (agencyId: string) => `${USASPENDING_BASE_URL}/agency/${agencyId}/overview/`,
  RECIPIENT_TOP: `${USASPENDING_BASE_URL}/recipient/top_250/`,
  SPENDING_BY_GEOGRAPHY: `${USASPENDING_BASE_URL}/search/spending_by_geography/`,
  BUDGET_AUTHORITY: `${USASPENDING_BASE_URL}/references/filter_tree/tas/`,
} as const;
