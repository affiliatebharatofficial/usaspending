'use client';

import React, { useState } from 'react';
import { SPENDING_CATEGORIES, TOTAL_FEDERAL_SPENDING_FY2026 } from '@/lib/data/spendingData';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import { ShieldAlert, DollarSign, PieChart, Info, CheckCircle2 } from 'lucide-react';

export default function WhereDoesMyMoneyGo() {
  const [income, setIncome] = useState<number>(75_000);
  const [filingStatus, setFilingStatus] = useState<string>('single');

  // Estimated average federal effective income tax rate calculation (for illustrative allocation purposes)
  // Single: ~$75k income => ~12.5% effective tax ($9,375 tax)
  const getEstimatedTaxPaid = () => {
    if (income <= 20_000) return income * 0.05;
    if (income <= 50_000) return income * 0.09;
    if (income <= 100_000) return income * 0.135;
    if (income <= 250_000) return income * 0.19;
    return income * 0.24;
  };

  const estimatedTaxPaid = getEstimatedTaxPaid();

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 bg-slate-950/90 shadow-2xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 mb-3">
          <PieChart className="w-3.5 h-3.5" />
          Illustrative Tax Share Allocation
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          Where Does Your Federal Tax Money Go?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Enter your annual income to see an estimated breakdown of how your federal tax contribution is distributed across defense, healthcare, social security, and public programs.
        </p>
      </div>

      {/* Income & Filing Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
            Annual Income (USD)
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm font-bold text-slate-400">$</span>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Math.max(0, Number(e.target.value)))}
              className="block w-full pl-8 pr-4 py-3 text-lg font-bold font-mono text-white bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
            Filing Status
          </label>
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
            className="block w-full px-3 py-3 text-sm font-medium text-white bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="single">Single Filer</option>
            <option value="joint">Married Filing Jointly</option>
            <option value="head">Head of Household</option>
          </select>
        </div>
      </div>

      {/* Summary Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950/40 border border-emerald-900/50 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400">Estimated Federal Income Tax Share</div>
          <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-1">
            {formatCurrency(estimatedTaxPaid)}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Based on ~{((estimatedTaxPaid / (income || 1)) * 100).toFixed(1)}% estimated effective federal tax rate
          </div>
        </div>

        <div className="text-right text-xs text-slate-400 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-6">
          <div>FY2026 Budget Basis</div>
          <div className="font-bold text-white font-mono text-sm mt-0.5">$6.75 Trillion Outlays</div>
        </div>
      </div>

      {/* Category Breakdown Table */}
      <div className="space-y-3 mb-8">
        <h3 className="text-sm font-bold text-white mb-2">
          Your Illustrative Share Allocation:
        </h3>

        <div className="grid grid-cols-1 gap-2.5">
          {SPENDING_CATEGORIES.map((cat) => {
            const catShare = estimatedTaxPaid * (cat.percentage / 100);
            return (
              <div
                key={cat.id}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{cat.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm">{cat.name}</div>
                    <div className="text-[11px] text-slate-400">{formatPercent(cat.percentage)} of total federal spending</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-emerald-400 font-mono text-base">
                    {formatCurrency(catShare)}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {formatCurrency(catShare / 365, false)} / day
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PRD Mandated Legal Disclaimer */}
      <div className="p-4 rounded-xl border border-amber-900/50 bg-amber-950/20 flex items-start gap-3 text-xs text-amber-300/90">
        <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-amber-300">Important Disclaimer: </span>
          This is an illustrative allocation of federal spending and is not a calculation of your actual federal tax liability or individual tax return. Tax obligations vary based on deductions, credits, local exemptions, and individual tax law status.
        </div>
      </div>
    </div>
  );
}
