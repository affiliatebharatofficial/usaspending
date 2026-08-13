import { NextRequest, NextResponse } from 'next/server';
import { AGENCIES_DATA } from '@/lib/data/spendingData';
import { DEFAULT_METADATA } from '@/lib/services/dataService';

export async function GET(req: NextRequest) {
  return NextResponse.json({
    data: AGENCIES_DATA,
    meta: DEFAULT_METADATA,
  });
}
