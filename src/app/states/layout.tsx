import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal Spending Associated With U.S. States — 50-State Explorer',
  description: 'Explore federal contract awards, grants, and direct outlays associated with all 50 states, Washington D.C., and territories.',
};

export default function StatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
