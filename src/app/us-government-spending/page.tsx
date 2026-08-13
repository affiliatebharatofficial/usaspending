import React from 'react';
import FederalSpendingClock from '@/components/clock/FederalSpendingClock';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import { HISTORICAL_SPENDING, TOTAL_FEDERAL_SPENDING_FY2026, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Clock, ShieldAlert, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal Spending Clock — Real-Time U.S. Government Counter',
  description: 'Live estimated counter of U.S. Federal Government spending per second, minute, hour, day, and fiscal year based on official USAspending data.',
};

export default function FederalSpendingClockPage() {
  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);

  const chartData = HISTORICAL_SPENDING.map((h) => ({
    year: h.year,
    amount: h.spending || h.totalSpending || 0,
  }));

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <Clock className="w-3.5 h-3.5" />
          Primary Feature — Live Rate Counter
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. Federal Spending Clock
        </h1>
        <p className="text-sm text-slate-600">
          Continuously estimated spending rates based on reported FY{CURRENT_FISCAL_YEAR} United States Federal Budget outlays.
        </p>
      </div>

      <FederalSpendingClock />

      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Fiscal Year {CURRENT_FISCAL_YEAR} Spending Breakdown
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Timeframe Metric</th>
                <th className="pb-3 font-semibold text-right">Calculated Rate</th>
                <th className="pb-3 font-semibold text-right">Daily Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td className="py-3 font-sans font-semibold text-slate-900">Annual Total</td>
                <td className="py-3 text-right font-bold text-slate-900 numeral-tabular">{formatCurrency(rates.annual)}</td>
                <td className="py-3 text-right font-sans text-slate-500">100%</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-semibold text-slate-900">Per Month (Avg)</td>
                <td className="py-3 text-right text-slate-700 numeral-tabular">{formatCurrency(rates.annual / 12)}</td>
                <td className="py-3 text-right font-sans text-slate-500">8.33%</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-semibold text-slate-900">Per Day</td>
                <td className="py-3 text-right text-blue-700 font-bold numeral-tabular">{formatCurrency(rates.perDay)}</td>
                <td className="py-3 text-right font-sans text-slate-500">0.274%</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-semibold text-slate-900">Per Hour</td>
                <td className="py-3 text-right text-slate-700 numeral-tabular">{formatCurrency(rates.perHour)}</td>
                <td className="py-3 text-right font-sans text-slate-500">0.011%</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-semibold text-slate-900">Per Minute</td>
                <td className="py-3 text-right text-slate-700 numeral-tabular">{formatCurrency(rates.perMinute)}</td>
                <td className="py-3 text-right font-sans text-slate-500">0.00018%</td>
              </tr>
              <tr className="bg-blue-50/50">
                <td className="py-3.5 font-sans font-bold text-blue-900">Per Second</td>
                <td className="py-3.5 text-right font-extrabold text-blue-900 text-base numeral-tabular">{formatCurrency(rates.perSecond)}</td>
                <td className="py-3.5 text-right font-sans text-blue-900 font-bold">0.000003%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-700" />
          U.S. Federal Spending History (2018 – 2026)
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Historical growth of U.S. Federal Outlays including COVID relief spikes in 2020-2021.
        </p>

        <SpendingTrendChart data={chartData} color="#1e3a8a" height={340} />
      </div>
    </div>
  );
}
