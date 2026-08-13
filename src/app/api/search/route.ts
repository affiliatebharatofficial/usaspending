import { NextRequest, NextResponse } from 'next/server';
import { SPENDING_CATEGORIES, AGENCIES_DATA, STATES_DATA, RECIPIENTS_DATA } from '@/lib/data/spendingData';
import { DEFAULT_METADATA } from '@/lib/services/dataService';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  if (!q) {
    return NextResponse.json({ data: [], meta: { ...DEFAULT_METADATA, query: '' } });
  }

  const categories = SPENDING_CATEGORIES.filter((c) =>
    c.name.toLowerCase().includes(q)
  ).map((c) => ({
    type: 'Category',
    title: c.name,
    subtitle: `${c.percentage}% of total budget`,
    url: `/${c.slug}`,
  }));

  const agencies = AGENCIES_DATA.filter(
    (a) => a.name.toLowerCase().includes(q) || a.abbreviation.toLowerCase().includes(q)
  ).map((a) => ({
    type: 'Agency',
    title: `${a.name} (${a.abbreviation})`,
    subtitle: `Budget: $${(a.budget / 1e9).toFixed(1)}B`,
    url: `/agencies/${a.slug}`,
  }));

  const states = STATES_DATA.filter(
    (s) => s.name.toLowerCase().includes(q) || s.code.toLowerCase() === q
  ).map((s) => ({
    type: 'State',
    title: `Federal Spending in ${s.name}`,
    subtitle: `Per Capita: $${s.perCapita.toLocaleString()}`,
    url: `/states/${s.slug}`,
  }));

  const recipients = RECIPIENTS_DATA.filter((r) =>
    r.name.toLowerCase().includes(q)
  ).map((r) => ({
    type: 'Recipient',
    title: r.name,
    subtitle: `Total Awards: $${(r.totalAwards / 1e9).toFixed(1)}B`,
    url: `/recipients/${r.slug}`,
  }));

  const results = [...categories, ...agencies, ...states, ...recipients].slice(0, 10);

  return NextResponse.json({
    data: results,
    meta: {
      ...DEFAULT_METADATA,
      query: q,
      totalMatches: results.length,
    },
  });
}
