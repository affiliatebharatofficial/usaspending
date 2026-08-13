export interface RawUSAspendingCategoryResult {
  id?: number | string;
  code?: string;
  name?: string;
  amount?: number;
  gross_outlay_amount?: number;
  obligated_amount?: number;
  total_outlays?: number;
}

export interface RawUSAspendingCategoryResponse {
  category: string;
  limit: number;
  page_metadata: {
    page: number;
    has_next_page: boolean;
  };
  results: RawUSAspendingCategoryResult[];
}

export interface RawUSAspendingAgencyResult {
  agency_id: number;
  toptier_code: string;
  abbreviation: string;
  agency_name: string;
  budgetary_resources: number;
  obligated_amount: number;
  gross_outlay_amount: number;
}

export interface RawUSAspendingAgencyResponse {
  results: RawUSAspendingAgencyResult[];
}

export interface RawUSAspendingRecipientResult {
  id: string;
  name: string;
  uei?: string;
  duns?: string;
  amount: number;
}

export interface RawUSAspendingRecipientResponse {
  results: RawUSAspendingRecipientResult[];
}

export interface RawUSAspendingGeoResult {
  shape_code: string;
  display_name: string;
  aggregated_amount: number;
  per_capita?: number;
}

export interface RawUSAspendingGeoResponse {
  scope: string;
  results: RawUSAspendingGeoResult[];
}
