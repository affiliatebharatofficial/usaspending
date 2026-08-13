import { NextRequest, NextResponse } from 'next/server';
import { getSpendingCategories } from '@/lib/services/dataService';

export async function GET(req: NextRequest) {
  const { data, metadata } = await getSpendingCategories();

  return NextResponse.json({
    data,
    meta: metadata,
  });
}
