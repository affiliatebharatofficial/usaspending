import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending Calculators & Comparison Suite',
  description: 'Use interactive financial calculators to understand U.S. government spending rates, per-capita allocation, time rates, and budget shares.',
};

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
