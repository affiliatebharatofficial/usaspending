export function isValidNumericAmount(val: any): boolean {
  if (val === null || val === undefined) return false;
  const num = Number(val);
  return !isNaN(num) && isFinite(num);
}

export function isValidFiscalYear(fy: any): boolean {
  const year = Number(fy);
  return Number.isInteger(year) && year >= 2000 && year <= 2030;
}

export function validateRawCategoryResult(item: any): boolean {
  if (!item || typeof item !== 'object') return false;
  const hasName = typeof item.name === 'string' && item.name.trim().length > 0;
  const hasAmount = isValidNumericAmount(item.amount || item.gross_outlay_amount || item.obligated_amount);
  return hasName && hasAmount;
}

export function validateRawAgencyResult(item: any): boolean {
  if (!item || typeof item !== 'object') return false;
  const hasName = typeof item.agency_name === 'string' && item.agency_name.trim().length > 0;
  return hasName;
}

export function sanitizeText(text: string | undefined, fallback: string = 'Unknown'): string {
  if (!text || typeof text !== 'string') return fallback;
  return text.trim();
}
