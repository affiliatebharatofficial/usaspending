import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending by Year — Multi-Year Historical Explorer',
  description: 'Explore historical U.S. federal outlays, rate metrics, deficits, and year-over-year budget comparisons from FY2018 through FY2026.',
  alternates: {
    canonical: 'https://www.usaspending.us/spending-by-year',
  },
};

export default function SpendingByYearLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
