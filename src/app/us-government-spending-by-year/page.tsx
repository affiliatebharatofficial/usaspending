import React from 'react';
import Link from 'next/link';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import { HISTORICAL_SPENDING, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Calendar, ArrowLeft, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending by Year (2018 – 2026 Historical Budget)',
  description: 'Historical breakdown of U.S. Federal Government spending by year from 2018 to 2026. Compare annual outlays, deficits, and total national debt trajectory.',
};

export default function SpendingByYearPage() {
  const chartData = HISTORICAL_SPENDING.map((h) => ({
    year: h.year,
    amount: h.spending || h.totalSpending || 0,
  }));

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <Calendar className="w-3.5 h-3.5" />
          Historical Timeline (2018 – 2026)
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. Government Spending by Year
        </h1>
        <p className="text-sm text-slate-600">
          Multi-year evolution of United States Federal Outlays, annual deficits, and public national debt.
        </p>
      </div>

      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-700" />
          Federal Outlays Trajectory (2018 – 2026)
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Notice the sharp increase during FY2020-FY2021 due to emergency COVID-19 relief legislation.
        </p>

        <SpendingTrendChart data={chartData} color="#1e3a8a" height={360} />
      </div>

      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Year-by-Year Federal Financial Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Fiscal Year</th>
                <th className="pb-3 font-semibold text-right">Total Federal Outlays</th>
                <th className="pb-3 font-semibold text-right">Annual Deficit</th>
                <th className="pb-3 font-semibold text-right">Total National Debt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {HISTORICAL_SPENDING.map((row) => (
                <tr
                  key={row.year}
                  className={`hover:bg-slate-50 ${
                    row.year === CURRENT_FISCAL_YEAR ? 'bg-blue-50/60 font-bold' : ''
                  }`}
                >
                  <td className="py-3.5 font-sans font-bold text-slate-900">
                    FY {row.year} {row.year === CURRENT_FISCAL_YEAR && <span className="text-[10px] text-blue-700 font-normal">(Current)</span>}
                  </td>
                  <td className="py-3.5 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(row.spending || row.totalSpending || 0, true)}
                  </td>
                  <td className="py-3.5 text-right text-red-700 numeral-tabular">
                    {row.deficit ? formatCurrency(row.deficit, true) : 'N/A'}
                  </td>
                  <td className="py-3.5 text-right text-slate-900 numeral-tabular">
                    {row.debtTotal ? formatCurrency(row.debtTotal, true) : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
