import React from 'react';
import Link from 'next/link';
import FederalSpendingClock from '@/components/clock/FederalSpendingClock';
import GovernmentSpendingPieChart from '@/components/visualizations/GovernmentSpendingPieChart';
import SpendingBreakdown from '@/components/visualizations/SpendingBreakdown';
import GovernmentSpendingByYear from '@/components/visualizations/GovernmentSpendingByYear';
import SpendingAtAGlance from '@/components/visualizations/SpendingAtAGlance';
import CategoryCard from '@/components/visualizations/CategoryCard';
import MetricCard from '@/components/visualizations/MetricCard';
import DataMethodologyNotice from '@/components/visualizations/DataMethodologyNotice';
import DataFreshness from '@/components/visualizations/DataFreshness';

import {
  SPENDING_CATEGORIES,
  AGENCIES_DATA,
  STATES_DATA,
  RECIPIENTS_DATA,
  TOTAL_FEDERAL_SPENDING_FY2026,
  CURRENT_FISCAL_YEAR,
} from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import {
  ArrowRight,
  TrendingUp,
  PieChart as PieIcon,
  BarChart3,
  Building2,
  MapPin,
  Award,
  Calculator,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="navy-hero text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-900/80 text-blue-200 border border-blue-700/60">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Official U.S. Federal Spending Portal</span>
            <span className="text-blue-400">•</span>
            <span>FY{CURRENT_FISCAL_YEAR} Budget Explorer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            See Where America’s Money Goes
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transparent, interactive visual exploration of United States Federal outlays, budget categories, executive agencies, and contractor awards.
          </p>

          {/* Quick Nav Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-semibold">
            <Link
              href="/spending-breakdown"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-1.5"
            >
              <PieIcon className="w-4 h-4" />
              <span>Explore Pie Chart</span>
            </Link>
            <Link
              href="/spending-by-year"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all flex items-center gap-1.5"
            >
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Spending by Year</span>
            </Link>
            <Link
              href="/calculator"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-blue-400" />
              <span>Tax Calculator</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 2. Top At-A-Glance Banner */}
        <SpendingAtAGlance
          title="U.S. Federal Outlays at a Glance"
          totalAmount={TOTAL_FEDERAL_SPENDING_FY2026}
          sharePercentage={100}
          yoyChange="+4.2%"
          dailyRate={rates.perDay}
          fiscalYear={CURRENT_FISCAL_YEAR}
        />

        {/* 3. Live Spending Clock Ticker */}
        <section id="clock-section">
          <FederalSpendingClock />
        </section>

        {/* 4. Spending at a Glance Stats */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">
              FY{CURRENT_FISCAL_YEAR} Spending Rates
            </h2>
            <DataFreshness />
          </div>

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
        </section>

        {/* 5. MANDATORY U.S. Government Spending Pie Chart */}
        <section id="pie-chart-section">
          <GovernmentSpendingPieChart />
        </section>

        {/* 6. U.S. Government Spending Breakdown */}
        <section id="breakdown-section">
          <SpendingBreakdown data={SPENDING_CATEGORIES} />
        </section>

        {/* 7. U.S. Government Spending by Year */}
        <section id="by-year-section">
          <GovernmentSpendingByYear />
        </section>

        {/* 8. Major Spending Categories */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Major Spending Categories
              </h2>
              <p className="text-xs text-slate-500">
                Click any category for subcomponent details, agency management, and recipient lists.
              </p>
            </div>
            <Link
              href="/categories"
              className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPENDING_CATEGORIES.slice(0, 6).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* 9. Agency Explorer */}
        <section className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-700" />
                U.S. Executive Agencies Explorer
              </h2>
              <p className="text-xs text-slate-500">
                Budgetary resources managed by key Cabinet departments.
              </p>
            </div>
            <Link
              href="/agencies"
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              View All Agencies →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AGENCIES_DATA.slice(0, 4).map((agency) => (
              <Link
                key={agency.id}
                href={`/agencies/${agency.slug}`}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all space-y-2 block"
              >
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                  {agency.abbreviation}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 line-clamp-1">
                  {agency.name}
                </h3>
                <div className="text-lg font-extrabold text-slate-900 font-mono numeral-tabular">
                  {formatCurrency(agency.budget, true)}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 10. State Explorer */}
        <section className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-700" />
                Federal Spending Associated with States
              </h2>
              <p className="text-xs text-slate-500">
                Federal contract awards, grants, and direct payments allocated across U.S. states.
              </p>
            </div>
            <Link
              href="/states"
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              View All States →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATES_DATA.slice(0, 4).map((state) => (
              <Link
                key={state.id}
                href={`/states/${state.slug}`}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all space-y-2 block"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {state.name}
                  </h3>
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    {state.code}
                  </span>
                </div>
                <div className="text-lg font-extrabold text-slate-900 font-mono numeral-tabular">
                  {formatCurrency(state.totalSpending, true)}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  ${state.perCapita.toLocaleString()} / person
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 11. Recipient Explorer */}
        <section className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-700" />
                Top Contractor & Award Recipients
              </h2>
              <p className="text-xs text-slate-500">
                Prime contractors, defense suppliers, and research institutions.
              </p>
            </div>
            <Link
              href="/recipients"
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              View All Recipients →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RECIPIENTS_DATA.slice(0, 3).map((rec) => (
              <Link
                key={rec.id}
                href={`/recipients/${rec.slug}`}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all space-y-2 block"
              >
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                  {rec.category}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 line-clamp-1">
                  {rec.name}
                </h3>
                <div className="text-lg font-extrabold text-blue-900 font-mono numeral-tabular">
                  {formatCurrency(rec.totalAwards, true)}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 12. Data Methodology Notice */}
        <DataMethodologyNotice />
      </div>
    </div>
  );
}
