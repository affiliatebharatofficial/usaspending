import React from 'react';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { TOTAL_FEDERAL_SPENDING_FY2026, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { Clock, Percent, Shield, HeartPulse, GraduationCap, Building2 } from 'lucide-react';

interface AmountMeaningProps {
  amount: number;
  fiscalYear?: number | string;
}

export default function AmountMeaning({
  amount,
  fiscalYear = 2026,
}: AmountMeaningProps) {
  if (amount <= 0) return null;

  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);
  const percentageOfBudget = Number(((amount / TOTAL_FEDERAL_SPENDING_FY2026) * 100).toFixed(4));
  const timeInSeconds = amount / rates.perSecond;
  const timeInMinutes = timeInSeconds / 60;
  const timeInHours = timeInMinutes / 60;
  const timeInDays = timeInHours / 24;

  const categoryComparisons = [
    { name: 'Defense & Military', amount: 895_000_000_000, icon: Shield, color: 'text-blue-700' },
    { name: 'Medicare & Health', amount: 920_000_000_000, icon: HeartPulse, color: 'text-rose-700' },
    { name: 'Education & Training', amount: 240_000_000_000, icon: GraduationCap, color: 'text-amber-700' },
    { name: 'Infrastructure', amount: 135_000_000_000, icon: Building2, color: 'text-teal-700' },
  ];

  const donutVisualData = [
    { name: 'Entered Amount', amount: amount, percentage: Math.max(percentageOfBudget, 0.01), color: '#2563eb' },
    { name: 'Remaining FY Outlays', amount: TOTAL_FEDERAL_SPENDING_FY2026 - amount, percentage: Number((100 - percentageOfBudget).toFixed(2)), color: '#e2e8f0' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-extrabold text-slate-900">
          What Does {formatCurrency(amount, true)} Represent?
        </h2>
        <p className="text-xs text-slate-500">
          Mathematical proportions and time equivalencies based on FY{fiscalYear} reported federal outlays.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Share of Federal Budget"
          value={`${percentageOfBudget}%`}
          subtext="Illustrative proportion"
          highlight
        />
        <MetricCard
          label="Hours Equivalent"
          value={timeInHours >= 1 ? `${timeInHours.toFixed(1)} hrs` : `${timeInMinutes.toFixed(1)} mins`}
          subtext="Estimated spending time"
        />
        <MetricCard
          label="Days Equivalent"
          value={`${timeInDays.toFixed(2)} days`}
          subtext="Estimated spending duration"
        />
        <MetricCard
          label="Seconds Equivalent"
          value={`${Math.round(timeInSeconds).toLocaleString()} sec`}
          subtext="Seconds to spend"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-4">
          <h3 className="text-base font-bold text-slate-900">
            Visual Share of FY{fiscalYear} Budget
          </h3>
          <DonutChart
            data={donutVisualData}
            centerLabel="Entered vs Total"
            centerValue={formatCurrency(amount, true)}
            height={240}
          />
        </div>

        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-4">
          <h3 className="text-base font-bold text-slate-900">
            Category Equivalent Ratios
          </h3>
          <div className="space-y-3">
            {categoryComparisons.map((cat) => {
              const ratio = Number(((amount / cat.amount) * 100).toFixed(2));
              const Icon = cat.icon;
              return (
                <div key={cat.name} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 ${cat.color}`} />
                      {cat.name}
                    </span>
                    <span className="font-mono text-slate-900 font-bold">
                      {ratio}% of category
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Annual outlays: {formatCurrency(cat.amount, true)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
