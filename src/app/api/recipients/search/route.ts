import { NextRequest, NextResponse } from 'next/server';
import { RECIPIENTS_DATA } from '@/lib/data/spendingData';
import { DEFAULT_METADATA } from '@/lib/services/dataService';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';

  const results = RECIPIENTS_DATA.filter(
    (r) =>
      r.name.toLowerCase().includes(q.toLowerCase()) ||
      r.category.toLowerCase().includes(q.toLowerCase()) ||
      r.headquarters.toLowerCase().includes(q.toLowerCase())
  );

  return NextResponse.json({
    data: results,
    meta: {
      ...DEFAULT_METADATA,
      query: q,
      totalCount: results.length,
    },
  });
}
