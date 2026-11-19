import { NextRequest, NextResponse } from 'next/server';
import { getSpendingCategories, DEFAULT_METADATA, CURRENT_TOTAL_BUDGET } from '@/lib/services/dataService';
import { FY2027_DAYS_ELAPSED } from '@/lib/data/spendingData';
import { calculateSpendingRates } from '@/lib/utils/formatters';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fy = Number(searchParams.get('fy') || 2027);

  const rates = {
    annual: CURRENT_TOTAL_BUDGET,
    daily: calculateSpendingRates(CURRENT_TOTAL_BUDGET, FY2027_DAYS_ELAPSED).perDay,
    hourly: calculateSpendingRates(CURRENT_TOTAL_BUDGET, FY2027_DAYS_ELAPSED).perHour,
    minute: calculateSpendingRates(CURRENT_TOTAL_BUDGET, FY2027_DAYS_ELAPSED).perMinute,
    second: calculateSpendingRates(CURRENT_TOTAL_BUDGET, FY2027_DAYS_ELAPSED).perSecond,
  };

  return NextResponse.json({
    data: {
      totalSpending: CURRENT_TOTAL_BUDGET,
      rates,
    },
    meta: {
      ...DEFAULT_METADATA,
      fiscalYear: fy,
    },
  });
}
