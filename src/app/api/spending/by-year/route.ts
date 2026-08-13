import { NextRequest, NextResponse } from 'next/server';
import { getHistoricalSpending } from '@/lib/services/dataService';

export async function GET(req: NextRequest) {
  const { data, metadata } = await getHistoricalSpending();

  return NextResponse.json({
    data,
    meta: metadata,
  });
}
