import { NextResponse } from 'next/server';
import { TOTAL_FEDERAL_SPENDING_FY2026, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { calculateSpendingRates } from '@/lib/utils/formatters';

export async function GET() {
  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);

  return NextResponse.json({
    fiscalYear: CURRENT_FISCAL_YEAR,
    rates,
    lastUpdated: new Date().toISOString(),
    disclaimer: 'Estimated rate based on reported federal spending outlays.',
  });
}
