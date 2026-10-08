import { NextResponse } from 'next/server';
import { TOTAL_FEDERAL_SPENDING_FY2026, CURRENT_FISCAL_YEAR, FY2026_DAYS_ELAPSED } from '@/lib/data/spendingData';
import { calculateSpendingRates } from '@/lib/utils/formatters';

export async function GET() {
  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026, FY2026_DAYS_ELAPSED);

  return NextResponse.json({
    fiscalYear: CURRENT_FISCAL_YEAR,
    rates,
    lastUpdated: new Date().toISOString(),
    disclaimer: 'Estimated rate based on reported federal spending outlays.',
  });
}
