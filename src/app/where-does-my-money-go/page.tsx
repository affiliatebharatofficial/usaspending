import CalculatorPage from '../calculator/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where Does My Money Go? — Taxpayer Federal Spending Calculator',
  description: 'Interactive visualization showing how your federal tax dollars are distributed across Defense, Healthcare, Social Security, Education, and Infrastructure.',
};

export default function WhereDoesMyMoneyGoPage() {
  return <CalculatorPage />;
}
