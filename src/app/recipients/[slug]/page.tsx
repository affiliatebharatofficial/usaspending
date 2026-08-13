import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SpendingAtAGlance from '@/components/visualizations/SpendingAtAGlance';
import AwardTypeBreakdown from '@/components/visualizations/AwardTypeBreakdown';
import DonutChart from '@/components/visualizations/DonutChart';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import MetricCard from '@/components/visualizations/MetricCard';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { getRecipientBySlug } from '@/lib/api/usaspending';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { ArrowLeft, Award, Building2, MapPin, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const recipient = getRecipientBySlug(params.slug);
  if (!recipient) return { title: 'Recipient Not Found — USA Spending' };

  return {
    title: `${recipient.name} Federal Awards & Contracts Profile`,
    description: `Detailed breakdown of federal awards granted to ${recipient.name}. ${formatCurrency(recipient.totalAwards, true)} total awards, awarding agencies, contracts vs grants, and historical timeline.`,
  };
}

export default function RecipientDetailPage({ params }: Props) {
  const recipient = getRecipientBySlug(params.slug);

  if (!recipient) {
    notFound();
  }

  const rates = calculateSpendingRates(recipient.totalAwards);

  const agencyDonutData = recipient.awardingAgencies.map((agency) => ({
    name: agency.name,
    amount: agency.amount,
    percentage: Number(((agency.amount / recipient.totalAwards) * 100).toFixed(1)),
    slug: `agencies/${agency.slug}`,
  }));

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <Link
          href="/recipients"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Recipients</span>
        </Link>
      </div>

      {/* Top Banner */}
      <SpendingAtAGlance
        title={recipient.name}
        totalAmount={recipient.totalAwards}
        yoyChange="+6.2%"
        dailyRate={rates.perDay}
      />

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Contracts Share"
          value={formatCurrency(recipient.contracts, true)}
          subtext="Prime procurements"
          highlight
        />
        <MetricCard
          label="Grants Share"
          value={formatCurrency(recipient.grants, true)}
          subtext="Financial assistance"
        />
        <MetricCard
          label="UEI Identifier"
          value={recipient.recipientId.substring(0, 10)}
          subtext="Official Recipient ID"
        />
        <MetricCard
          label="Headquarters"
          value={recipient.headquarters.split(',')[0]}
          subtext={recipient.headquarters}
        />
      </div>

      {/* MANDATORY Award Breakdown Donut Chart */}
      <AwardTypeBreakdown
        contractsAmount={recipient.contracts}
        grantsAmount={recipient.grants}
        loansAmount={recipient.loans}
        otherAmount={recipient.otherAwards}
      />

      {/* Awarding Agencies Donut Visualization */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-700" />
          Awarding Executive Agencies for {recipient.name}
        </h3>
        <DonutChart
          data={agencyDonutData}
          centerLabel="Funding Agencies"
          centerValue={formatCurrency(recipient.totalAwards, true)}
          height={260}
        />
      </div>

      {/* Historical Trend Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-700" />
              Historical Award Obligations (2020 – 2026)
            </h2>
            <p className="text-xs text-slate-500">
              Multi-year award outlays for {recipient.name}.
            </p>
          </div>
          <DataFreshness />
        </div>

        <SpendingTrendChart data={recipient.historicalSpending} color="#1e3a8a" height={320} />
      </div>

      {/* Clean Award Details Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Official Award Details Table
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Awarding Agency</th>
                <th className="pb-3 font-semibold">Award Type</th>
                <th className="pb-3 font-semibold text-right">Award Amount</th>
                <th className="pb-3 font-semibold text-right">Fiscal Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {recipient.awardingAgencies.map((agency) => (
                <tr key={agency.name} className="hover:bg-slate-50">
                  <td className="py-3 font-sans font-semibold text-slate-900">{agency.name}</td>
                  <td className="py-3 font-sans text-xs font-semibold text-slate-600">Prime Contract</td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(agency.amount, true)}
                  </td>
                  <td className="py-3 text-right text-slate-700">FY 2026</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
