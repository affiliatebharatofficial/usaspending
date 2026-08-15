import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historical Federal Spending & National Debt Trajectory (2018–2026)',
  description: 'Examine historical U.S. federal outlays, national debt growth, annual deficits, and fiscal year trends from 2018 through 2026.',
  alternates: {
    canonical: 'https://www.usaspending.us/history',
  },
};

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
