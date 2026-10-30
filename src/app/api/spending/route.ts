import { NextRequest, NextResponse } from 'next/server';
import { getSpendingCategories, DEFAULT_METADATA, CURRENT_TOTAL_BUDGET } from '@/lib/services/dataService';
import { calculateSpendingRates } from '@/lib/calculations';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fy = Number(searchParams.get('fy') || 2026);

  const rates = {
    annual: CURRENT_TOTAL_BUDGET,
    daily: calculateSpendingRates(CURRENT_TOTAL_BUDGET, 365).perDay,
    hourly: calculateSpendingRates(CURRENT_TOTAL_BUDGET, 365).perHour,
    minute: calculateSpendingRates(CURRENT_TOTAL_BUDGET, 365).perMinute,
    second: calculateSpendingRates(CURRENT_TOTAL_BUDGET, 365).perSecond,
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
