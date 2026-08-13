export interface DataMetadata {
  source: string;
  fiscalYear: string | number;
  lastUpdated: string;
  dataType: 'Outlays' | 'Obligations' | 'Calculated Rate' | 'Budget Request';
  methodologyUrl?: string;
}

export interface SpendingCategoryItem {
  id: string;
  name: string;
  category: string;
  slug: string;
  icon: string;
  description: string;
  amount: number; // in USD
  annualAmount: number; // in USD
  percentage: number;
  dailyRate: number;
  hourlyRate?: number;
  historicalTrend: { year: number; amount: number }[];
  primaryAgencies: string[];
  topRecipients: string[];
}

export interface HistoricalSpendingItem {
  year: number;
  spending: number;
  totalSpending: number;
  totalObligations: number;
  outlays?: number;
  debtTotal?: number;
  deficit?: number;
  changeAmount?: number;
  changePercent?: number;
}

export interface AgencyItem {
  id: string;
  name: string;
  slug: string;
  code: string;
  abbreviation: string;
  description: string;
  budget: number;
  obligations: number;
  outlays: number;
  spendingTrend: { year: number; amount: number }[];
  majorPrograms: { name: string; amount: number }[];
  topRecipients: { name: string; slug: string; amount: number }[];
  categories: string[];
  websiteUrl: string;
}

export interface StateSpendingItem {
  id: string;
  name: string;
  slug: string;
  code: string;
  population: number;
  totalSpending: number;
  contractsAmount: number;
  grantsAmount: number;
  otherAwardsAmount: number;
  perCapita: number;
  historicalTrend: { year: number; amount: number }[];
  majorAgencies: { name: string; slug: string; amount: number }[];
  majorRecipients: { name: string; slug: string; amount: number }[];
}

export interface RecipientItem {
  id: string;
  name: string;
  slug: string;
  recipientId: string;
  category: string;
  totalAwards: number;
  contracts: number;
  grants: number;
  loans: number;
  otherAwards: number;
  awardingAgencies: { name: string; slug: string; amount: number }[];
  historicalSpending: { year: number; amount: number }[];
  headquarters: string;
  description: string;
}

export interface DataSyncLog {
  id: string;
  source: 'USAspending API' | 'Treasury Fiscal Data API';
  endpoint: string;
  timestamp: string;
  recordsSynced: number;
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
  durationMs: number;
  message: string;
}

// Aliases for compatibility
export type SpendingCategory = SpendingCategoryItem;
export type Agency = AgencyItem;
export type StateSpending = StateSpendingItem;
export type Recipient = RecipientItem;
export type FiscalYearSpending = HistoricalSpendingItem;
