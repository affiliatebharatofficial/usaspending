import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetricCard from '@/components/visualizations/MetricCard';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import DonutChart from '@/components/visualizations/DonutChart';
import { STATES_DATA, SPENDING_CATEGORIES, RECIPIENTS_DATA, AGENCIES_DATA, HISTORICAL_SPENDING } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { GitCompare, ArrowLeft, TrendingUp } from 'lucide-react';

interface Props {
  params: {
    states: string;
  };
}

export default function DynamicComparisonPage({ params }: Props) {
  const pairSlug = params.states; // e.g. "california-vs-texas" or "defense-vs-education"
  const parts = pairSlug.split('-vs-');

  const slugA = parts[0] || 'california';
  const slugB = parts[1] || 'texas';

  // State match attempt
  const stateA = STATES_DATA.find((s) => s.slug === slugA || s.id === slugA);
  const stateB = STATES_DATA.find((s) => s.slug === slugB || s.id === slugB);

  // Category match attempt
  const catA = SPENDING_CATEGORIES.find((c) => c.slug.includes(slugA) || c.id.includes(slugA));
  const catB = SPENDING_CATEGORIES.find((c) => c.slug.includes(slugB) || c.id.includes(slugB));

  // Determine entity titles and amounts
  const entityA = {
    name: stateA?.name || catA?.name || 'Entity A',
    amount: stateA?.totalSpending || catA?.amount || 148_200_000_000,
    perCapita: stateA ? `$${stateA.perCapita.toLocaleString()}` : `${catA?.percentage}% of total`,
    subtext: stateA ? `Population: ${stateA.population.toLocaleString()}` : 'Budget Category',
  };

  const entityB = {
    name: stateB?.name || catB?.name || 'Entity B',
    amount: stateB?.totalSpending || catB?.amount || 112_400_000_000,
    perCapita: stateB ? `$${stateB.perCapita.toLocaleString()}` : `${catB?.percentage}% of total`,
    subtext: stateB ? `Population: ${stateB.population.toLocaleString()}` : 'Budget Category',
  };

  const ratesA = calculateSpendingRates(entityA.amount);
  const ratesB = calculateSpendingRates(entityB.amount);

  const diffAmount = entityA.amount - entityB.amount;
  const diffPercent = Number(((diffAmount / entityB.amount) * 100).toFixed(1));

  const comparisonDonut = [
    { name: entityA.name, amount: entityA.amount, percentage: Number(((entityA.amount / (entityA.amount + entityB.amount)) * 100).toFixed(1)), color: '#1e3a8a' },
    { name: entityB.name, amount: entityB.amount, percentage: Number(((entityB.amount / (entityA.amount + entityB.amount)) * 100).toFixed(1)), color: '#2563eb' },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Comparison Engine', url: '/compare' },
          { name: `${entityA.name} vs. ${entityB.name}`, url: `/compare/${pairSlug}` },
        ]}
      />

      <div>
        <Link
          href="/compare"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Comparisons</span>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <GitCompare className="w-3.5 h-3.5" />
          Side-by-Side Analytical Comparison
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          {entityA.name} vs. {entityB.name}
        </h1>
        <p className="text-sm text-slate-600">
          Direct financial comparison of total outlays, daily allocation rates, and percentage composition.
        </p>
      </div>

      {/* Side by Side Key Metric Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Side-by-Side Metric Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Financial Metric</th>
                <th className="pb-3 font-semibold text-right text-blue-900">{entityA.name}</th>
                <th className="pb-3 font-semibold text-right text-blue-700">{entityB.name}</th>
                <th className="pb-3 font-semibold text-right">Difference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Total Outlays</td>
                <td className="py-3.5 text-right font-extrabold text-blue-900 numeral-tabular">
                  {formatCurrency(entityA.amount, true)}
                </td>
                <td className="py-3.5 text-right font-extrabold text-blue-700 numeral-tabular">
                  {formatCurrency(entityB.amount, true)}
                </td>
                <td className="py-3.5 text-right font-bold text-slate-900 numeral-tabular">
                  {diffAmount >= 0 ? '+' : ''}{formatCurrency(diffAmount, true)} ({diffPercent}%)
                </td>
              </tr>
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Per Capita / Relative Share</td>
                <td className="py-3.5 text-right font-semibold text-slate-900">{entityA.perCapita}</td>
                <td className="py-3.5 text-right font-semibold text-slate-900">{entityB.perCapita}</td>
                <td className="py-3.5 text-right text-slate-500 font-sans">N/A</td>
              </tr>
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Daily Allocation Rate</td>
                <td className="py-3.5 text-right text-slate-900 numeral-tabular">{formatCurrency(ratesA.perDay, true)} / day</td>
                <td className="py-3.5 text-right text-slate-900 numeral-tabular">{formatCurrency(ratesB.perDay, true)} / day</td>
                <td className="py-3.5 text-right font-bold text-slate-900 numeral-tabular">
                  {formatCurrency(ratesA.perDay - ratesB.perDay, true)}
                </td>
              </tr>
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Per Second Allocation Rate</td>
                <td className="py-3.5 text-right text-slate-900 numeral-tabular">{formatCurrency(ratesA.perSecond, true)} / sec</td>
                <td className="py-3.5 text-right text-slate-900 numeral-tabular">{formatCurrency(ratesB.perSecond, true)} / sec</td>
                <td className="py-3.5 text-right font-bold text-slate-900 numeral-tabular">
                  {formatCurrency(ratesA.perSecond - ratesB.perSecond, true)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Composition Donut Visual */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Relative Outlay Composition (Donut View)
        </h2>
        <DonutChart
          data={comparisonDonut}
          centerLabel="Combined Total"
          centerValue={formatCurrency(entityA.amount + entityB.amount, true)}
          height={260}
        />
      </div>
    </div>
  );
}
