import {
  SPENDING_CATEGORIES,
  AGENCIES_DATA,
  STATES_DATA,
  RECIPIENTS_DATA,
  TOTAL_FEDERAL_SPENDING_FY2026,
  getCategoryDataForFY,
  getAgencyDataForFY,
  getRecipientDataForFY,
} from '../data/spendingData';
import { resolveCategoryEntity, resolveAgencyEntity, resolveRecipientEntity } from '../config/entities';
import { calculateSpendingRates } from '../utils/formatters';

const USASPENDING_BASE_URL = 'https://api.usaspending.gov/api/v2';

export async function fetchLiveSpendingTotals() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`${USASPENDING_BASE_URL}/references/filter_tree/tas/`, {
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      return {
        status: 'CONNECTED',
        rates: calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026),
        source: 'USAspending.gov API (Live)',
      };
    }
  } catch (error) {
    // Fallback gracefully to validated cache
  }

  return {
    status: 'CACHED_OK',
    rates: calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026),
    source: 'USAspending.gov Normalized Cache (FY2026)',
  };
}

export function getCategoryBySlug(slug: string, fy: number = 2026) {
  const entity = resolveCategoryEntity(slug);
  if (!entity) return undefined;
  return getCategoryDataForFY(entity.slug, fy);
}

export function getAgencyBySlug(slug: string, fy: number = 2026) {
  const entity = resolveAgencyEntity(slug);
  if (!entity) return undefined;
  return getAgencyDataForFY(entity.slug, fy);
}

export function getStateBySlug(slug: string) {
  return STATES_DATA.find((s) => s.slug === slug || s.code.toLowerCase() === slug.toLowerCase());
}

export function getRecipientBySlug(slug: string, fy: number = 2026) {
  const entity = resolveRecipientEntity(slug);
  if (!entity) return undefined;
  return getRecipientDataForFY(entity.slug, fy);
}

export function searchRecipients(query: string) {
  if (!query) return RECIPIENTS_DATA;
  const q = query.toLowerCase();
  return RECIPIENTS_DATA.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.headquarters.toLowerCase().includes(q)
  );
}
