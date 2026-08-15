import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Executive Agencies Explorer — Federal Department Budgets',
  description: 'Explore budgetary outlays and obligations for U.S. Federal Cabinet Departments including DOD, HHS, Transportation, and NASA.',
};

export default function AgenciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
