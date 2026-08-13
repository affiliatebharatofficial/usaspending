import React from 'react';
import DonutChart, { DonutSliceItem } from './DonutChart';
import { formatCurrency } from '@/lib/utils/formatters';

interface AwardTypeBreakdownProps {
  contractsAmount: number;
  grantsAmount: number;
  loansAmount?: number;
  otherAmount?: number;
  fiscalYear?: number | string;
}

export default function AwardTypeBreakdown({
  contractsAmount,
  grantsAmount,
  loansAmount = 0,
  otherAmount = 0,
  fiscalYear = 2026,
}: AwardTypeBreakdownProps) {
  const total = contractsAmount + grantsAmount + loansAmount + otherAmount;

  if (total <= 0) return null;

  const items: DonutSliceItem[] = [
    {
      name: 'Contracts',
      amount: contractsAmount,
      percentage: Number(((contractsAmount / total) * 100).toFixed(1)),
      color: '#1e3a8a',
    },
    {
      name: 'Grants',
      amount: grantsAmount,
      percentage: Number(((grantsAmount / total) * 100).toFixed(1)),
      color: '#2563eb',
    },
  ];

  if (loansAmount > 0) {
    items.push({
      name: 'Loans',
      amount: loansAmount,
      percentage: Number(((loansAmount / total) * 100).toFixed(1)),
      color: '#0284c7',
    });
  }

  if (otherAmount > 0) {
    items.push({
      name: 'Other Awards / Direct Payments',
      amount: otherAmount,
      percentage: Number(((otherAmount / total) * 100).toFixed(1)),
      color: '#475569',
    });
  }

  return (
    <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-lg font-bold text-slate-900">
          Spending Breakdown by Award Type (FY {fiscalYear})
        </h3>
        <p className="text-xs text-slate-500">
          Distribution between prime contracts, grants, loans, and direct payments.
        </p>
      </div>

      <DonutChart
        data={items}
        centerLabel="Total Awards"
        centerValue={formatCurrency(total, true)}
        height={240}
      />
    </div>
  );
}
