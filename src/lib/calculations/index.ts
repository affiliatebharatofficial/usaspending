export function getFiscalYearDays(fiscalYear: number): number {
  const isLeap = (fiscalYear % 4 === 0 && fiscalYear % 100 !== 0) || fiscalYear % 400 === 0;
  return isLeap ? 366 : 365;
}

export function calculateDailyRate(annualAmount: number, fiscalYear: number = 2026): number {
  if (annualAmount <= 0) return 0;
  const days = getFiscalYearDays(fiscalYear);
  return annualAmount / days;
}

export function calculateHourlyRate(annualAmount: number, fiscalYear: number = 2026): number {
  const daily = calculateDailyRate(annualAmount, fiscalYear);
  return daily / 24;
}

export function calculateMinuteRate(annualAmount: number, fiscalYear: number = 2026): number {
  const hourly = calculateHourlyRate(annualAmount, fiscalYear);
  return hourly / 60;
}

export function calculateSecondRate(annualAmount: number, fiscalYear: number = 2026): number {
  const minute = calculateMinuteRate(annualAmount, fiscalYear);
  return minute / 60;
}

export function calculateSpendingRates(annualAmount: number, fiscalYear: number = 2026) {
  const perDay = calculateDailyRate(annualAmount, fiscalYear);
  const perHour = calculateHourlyRate(annualAmount, fiscalYear);
  const perMinute = calculateMinuteRate(annualAmount, fiscalYear);
  const perSecond = calculateSecondRate(annualAmount, fiscalYear);

  return {
    annual: annualAmount,
    perDay,
    perHour,
    perMinute,
    perSecond,
  };
}

export function calculatePercentage(partAmount: number, totalAmount: number): number {
  if (totalAmount <= 0) return 0;
  return Number(((partAmount / totalAmount) * 100).toFixed(2));
}

export function calculateYearOverYearChange(currentAmount: number, previousAmount: number) {
  const changeAmount = currentAmount - previousAmount;
  const changePercent = previousAmount > 0 ? Number(((changeAmount / previousAmount) * 100).toFixed(2)) : 0;
  return { changeAmount, changePercent };
}
