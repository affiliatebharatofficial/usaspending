'use client';

import React, { useState } from 'react';
import { TOTAL_FEDERAL_SPENDING_FY2026, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Calculator, Clock, Sparkles, TrendingUp, Info } from 'lucide-react';

export default function CustomAmountCalculator() {
  const [amount, setAmount] = useState<number>(1_000_000_000); // Default $1 Billion

  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);
  const percentOfBudget = (amount / TOTAL_FEDERAL_SPENDING_FY2026) * 100;

  // Time equivalent calculations
  const secondsEquivalent = amount / rates.perSecond;
  const minutesEquivalent = amount / rates.perMinute;
  const hoursEquivalent = amount / rates.perHour;
  const daysEquivalent = amount / rates.perDay;

  const quickPresets = [
    { label: '$1 Million', value: 1_000_000 },
    { label: '$100 Million', value: 100_000_000 },
    { label: '$1 Billion', value: 1_000_000_000 },
    { label: '$10 Billion', value: 10_000_000_000 },
    { label: '$100 Billion', value: 100_000_000_000 },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 bg-slate-950/90 shadow-2xl max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 mb-3">
          <Calculator className="w-3.5 h-3.5" />
          Interactive Federal Spending Calculator
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          What Does <span className="text-amber-400">{formatCurrency(amount, true)}</span> Represent?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Enter any custom dollar amount to see how fast the U.S. Federal Government spends it and how it compares to major federal programs.
        </p>
      </div>

      {/* Input Field & Presets */}
      <div className="space-y-4 max-w-2xl mx-auto mb-10">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-xl font-bold text-slate-400">$</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            placeholder="Enter dollar amount..."
            className="block w-full pl-10 pr-4 py-4 text-2xl font-extrabold font-mono text-amber-400 bg-slate-900 border border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all shadow-inner"
          />
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Quick Presets:</span>
          {quickPresets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => setAmount(preset.value)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                amount === preset.value
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <div className="text-xs text-slate-400 uppercase font-semibold">Share of Federal Budget</div>
          <div className="text-3xl font-extrabold text-white font-mono mt-2">
            {percentOfBudget < 0.01 ? '< 0.01%' : `${percentOfBudget.toFixed(3)}%`}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Out of $6.75 Trillion FY2026 total</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <div className="text-xs text-slate-400 uppercase font-semibold">Time to Spend This Amount</div>
          <div className="text-3xl font-extrabold text-amber-400 font-mono mt-2">
            {hoursEquivalent >= 24
              ? `${daysEquivalent.toFixed(1)} Days`
              : minutesEquivalent >= 60
              ? `${hoursEquivalent.toFixed(1)} Hours`
              : secondsEquivalent >= 60
              ? `${minutesEquivalent.toFixed(1)} Mins`
              : `${secondsEquivalent.toFixed(1)} Secs`}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Exact: {Math.round(secondsEquivalent).toLocaleString()} seconds
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          <div className="text-xs text-slate-400 uppercase font-semibold">Rate Equivalence</div>
          <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-2">
            {(amount / rates.perDay).toFixed(2)}x
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Multiple of full 24-hour daily spending</div>
        </div>
      </div>

      {/* Category Comparisons */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
        <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          What {formatCurrency(amount, true)} represents in Major Federal Programs:
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {SPENDING_CATEGORIES.slice(0, 6).map((cat) => {
            const catDays = amount / cat.dailyRate;
            return (
              <div
                key={cat.id}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{cat.icon}</span>
                  <span className="font-semibold text-slate-200">{cat.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-amber-400 font-mono">
                    {catDays >= 1 ? `${catDays.toFixed(1)} Days` : `${(catDays * 24).toFixed(1)} Hours`}
                  </div>
                  <div className="text-[10px] text-slate-500">of {cat.name} budget</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
