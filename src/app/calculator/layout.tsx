import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flagship U.S. Government Spending Calculator',
  description: 'Enter any dollar amount to calculate its percentage of total U.S. federal outlays and equivalent time rates.',
  alternates: {
    canonical: 'https://www.usaspending.us/calculator',
  },
};

export default function MainCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
