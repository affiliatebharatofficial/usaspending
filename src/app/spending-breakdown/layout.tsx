import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending Breakdown — 100% Reconciled Outlay Chart',
  description: 'Explore the 100% reconciled breakdown of U.S. federal outlays by major budget category, agency allocations, and rate inspectors.',
  alternates: {
    canonical: 'https://www.usaspending.us/spending-breakdown',
  },
};

export default function BreakdownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
