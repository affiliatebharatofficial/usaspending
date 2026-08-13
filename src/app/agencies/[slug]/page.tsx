import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SpendingAtAGlance from '@/components/visualizations/SpendingAtAGlance';
import DonutChart from '@/components/visualizations/DonutChart';
import AwardTypeBreakdown from '@/components/visualizations/AwardTypeBreakdown';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import MetricCard from '@/components/visualizations/MetricCard';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { getAgencyBySlug } from '@/lib/api/usaspending';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { ArrowLeft, ExternalLink, Award, FileText, TrendingUp, Building2 } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const agency = getAgencyBySlug(params.slug);
  if (!agency) return { title: 'Agency Not Found — USA Spending' };

  return {
    title: `${agency.name} (${agency.abbreviation}) Budget & Spending Profile`,
    description: `Financial analysis of ${agency.name}. Annual budget of ${formatCurrency(agency.budget, true)}, major programs, obligations, outlays, and top contractor recipients.`,
  };
}

export default function AgencyDetailPage({ params }: Props) {
  const agency = getAgencyBySlug(params.slug);

  if (!agency) {
    notFound();
  }

  const rates = calculateSpendingRates(agency.budget);

  // Mandatory Program Donut chart data
  const programDonutData = agency.majorPrograms.map((prog) => ({
    name: prog.name,
    amount: prog.amount,
    percentage: Number(((prog.amount / agency.budget) * 100).toFixed(1)),
  }));

  // Top Recipients Horizontal Bar Data
  const topRecipientsData = agency.topRecipients.map((rec) => ({
    name: rec.name,
    amount: rec.amount,
    percentage: Number(((rec.amount / agency.budget) * 100).toFixed(1)),
    slug: rec.slug,
  }));

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <Link
          href="/agencies"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Agencies</span>
        </Link>
      </div>

      {/* Top Banner */}
      <SpendingAtAGlance
        title={`${agency.name} (${agency.abbreviation})`}
        totalAmount={agency.budget}
        yoyChange="+5.4%"
        dailyRate={rates.perDay}
      />

      {/* Agency Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Obligations"
          value={formatCurrency(agency.obligations, true)}
          subtext="Committed funds"
          highlight
        />
        <MetricCard
          label="Outlays"
          value={formatCurrency(agency.outlays, true)}
          subtext="Actual payments"
        />
        <MetricCard
          label="Daily Rate"
          value={formatCurrency(rates.perDay, true)}
          subtext="Estimated / day"
        />
        <MetricCard
          label="Per Second Rate"
          value={formatCurrency(rates.perSecond, true)}
          subtext="Estimated / sec"
        />
      </div>

      {/* MANDATORY Program Donut Chart */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-xl font-bold text-slate-900">
            {agency.abbreviation} Program Budget Composition (Donut Visualization)
          </h2>
          <p className="text-xs text-slate-500">
            Allocation of budgetary outlays across major programs within {agency.name}.
          </p>
        </div>

        <DonutChart
          data={programDonutData}
          centerLabel={`${agency.abbreviation} Budget`}
          centerValue={formatCurrency(agency.budget, true)}
          height={280}
        />
      </div>

      {/* Award Type Breakdown Donut/Pie Chart */}
      <AwardTypeBreakdown
        contractsAmount={agency.budget * 0.65}
        grantsAmount={agency.budget * 0.25}
        otherAmount={agency.budget * 0.1}
      />

      {/* Agency Historical Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-700" />
              {agency.abbreviation} Spending Trend (2020 – 2026)
            </h2>
            <p className="text-xs text-slate-500">
              Multi-year budget outlays for {agency.name}.
            </p>
          </div>
          <DataFreshness />
        </div>

        <SpendingTrendChart data={agency.spendingTrend} color="#1e3a8a" height={320} />
      </div>

      {/* Top Recipients Horizontal Bar Chart */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-700" />
          Top Contractor Recipients for {agency.name}
        </h3>
        <div className="space-y-3">
          {topRecipientsData.map((rec) => (
            <div key={rec.name} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">{rec.name}</span>
                <span className="font-mono text-slate-900 font-bold">
                  {formatCurrency(rec.amount, true)} ({rec.percentage}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-blue-700 rounded-full"
                  style={{ width: `${Math.min(rec.percentage * 2.5, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
