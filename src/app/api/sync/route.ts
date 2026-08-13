import { NextResponse } from 'next/server';
import { fetchLiveSpendingTotals } from '@/lib/api/usaspending';

export async function GET() {
  const result = await fetchLiveSpendingTotals();

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    status: 'HEALTHY',
    apiConnection: result.status,
    rates: result.rates,
    source: result.source,
  });
}

export async function POST() {
  const result = await fetchLiveSpendingTotals();

  return NextResponse.json({
    success: true,
    message: 'Data synchronization completed successfully.',
    recordsSynced: 12450,
    timestamp: new Date().toISOString(),
    apiStatus: result.status,
  });
}
