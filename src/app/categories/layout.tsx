import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending Categories — Verified Budget Functions',
  description: 'Explore official U.S. federal budget spending categories, major mandatory programs, and function totals with interactive donut charts.',
  alternates: {
    canonical: 'https://www.usaspending.us/categories',
  },
};

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
