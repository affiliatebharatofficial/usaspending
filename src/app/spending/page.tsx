import React from 'react';
import Link from 'next/link';
import FederalSpendingClock from '@/components/clock/FederalSpendingClock';
import GovernmentSpendingPieChart from '@/components/visualizations/GovernmentSpendingPieChart';
import SpendingBreakdown from '@/components/visualizations/SpendingBreakdown';
import GovernmentSpendingByYear from '@/components/visualizations/GovernmentSpendingByYear';
import SpendingAtAGlance from '@/components/visualizations/SpendingAtAGlance';
import MetricCard from '@/components/visualizations/MetricCard';
import JsonLd from '@/components/seo/JsonLd';
import { SPENDING_CATEGORIES, TOTAL_FEDERAL_SPENDING_FY2026, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { ArrowLeft, PieChart, TrendingUp, BarChart3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Federal Government Spending Overview — FY2026 Outlays Profile',
  description: 'Comprehensive public data visual analysis of U.S. Federal Government spending. $6.75 Trillion total outlays, live rate ticker, pie chart, and breakdown by agency and category.',
};

export default function SpendingOverviewPage() {
  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <JsonLd
        type="Dataset"
        data={{
          name: 'U.S. Federal Government Spending Dataset',
          description: 'Official U.S. Federal spending data sourced from USAspending.gov API.',
          url: 'https://usa-spending.com/spending',
        }}
      />

      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      <SpendingAtAGlance
        title="U.S. Federal Outlays & Budget Overview"
        totalAmount={TOTAL_FEDERAL_SPENDING_FY2026}
        sharePercentage={100}
        yoyChange="+4.2%"
        dailyRate={rates.perDay}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Per Day Rate"
          value={formatCurrency(rates.perDay, true)}
          subtext="Estimated / day"
          highlight
        />
        <MetricCard
          label="Per Hour Rate"
          value={formatCurrency(rates.perHour, true)}
          subtext="Estimated / hour"
        />
        <MetricCard
          label="Per Minute Rate"
          value={formatCurrency(rates.perMinute, true)}
          subtext="Estimated / minute"
        />
        <MetricCard
          label="Per Second Rate"
          value={formatCurrency(rates.perSecond, true)}
          subtext="Estimated / second"
        />
      </div>

      <FederalSpendingClock />

      <GovernmentSpendingPieChart />

      <SpendingBreakdown data={SPENDING_CATEGORIES} />

      <GovernmentSpendingByYear />
    </div>
  );
}
