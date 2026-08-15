import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal Spending Comparison Engine — Compare States & Agencies',
  description: 'Side-by-side comparison tools for evaluating U.S. federal spending across states, executive agencies, fiscal years, and contractors.',
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
