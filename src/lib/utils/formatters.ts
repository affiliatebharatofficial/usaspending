/**
 * Formats a raw number as a standard USD currency string ($1,234,567)
 */
export function formatCurrency(amount: number, compact: boolean = false): string {
  if (compact) {
    if (amount >= 1_000_000_000_000) {
      return `$${(amount / 1_000_000_000_000).toFixed(2)} Trillion`;
    }
    if (amount >= 1_000_000_000) {
      return `$${(amount / 1_000_000_000).toFixed(2)} Billion`;
    }
    if (amount >= 1_000_000) {
      return `$${(amount / 1_000_000).toFixed(2)} Million`;
    }
    if (amount >= 1_000) {
      return `$${(amount / 1_000).toFixed(0)} Thousand`;
    }
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats a raw number with US comma separators (e.g. 38,965,193) consistently on SSR and Client
 */
export function formatNumber(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) return '0';
  return new Intl.NumberFormat('en-US').format(amount);
}

/**
 * Calculates per-timeframe rates based on an annual amount
 */
export function calculateSpendingRates(annualAmount: number) {
  const perDay = annualAmount / 365;
  const perHour = perDay / 24;
  const perMinute = perHour / 60;
  const perSecond = perMinute / 60;

  return {
    annual: annualAmount,
    perDay,
    perHour,
    perMinute,
    perSecond,
  };
}

/**
 * Calculates elapsed spending from the start of the current year (or day)
 */
export function getElapsedSpendingToday(annualAmount: number): number {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const elapsedMs = now.getTime() - startOfDay;
  const rates = calculateSpendingRates(annualAmount);

  return (elapsedMs / 1000) * rates.perSecond;
}

/**
 * Formats a percentage number with 1 decimal place
 */
export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}
