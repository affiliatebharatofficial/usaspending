'use client';

import React, { useState, useEffect } from 'react';
import { TOTAL_FEDERAL_SPENDING_FY2026, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Info, Play, Pause, RefreshCw, Sparkles, TrendingUp } from 'lucide-react';

interface FederalSpendingClockProps {
  compact?: boolean;
}

export default function FederalSpendingClock({ compact = false }: FederalSpendingClockProps) {
  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);

  const [counter, setCounter] = useState<number>(0);
  const [isLive, setIsLive] = useState<boolean>(true);

  // Initialize counter based on time elapsed since start of today
  useEffect(() => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const elapsedSeconds = (now.getTime() - startOfDay) / 1000;
    const initialTodaySpent = elapsedSeconds * rates.perSecond;
    setCounter(initialTodaySpent);

    let animationFrameId: number;
    let lastTime = performance.now();

    const updateCounter = (currentTime: number) => {
      if (isLive) {
        const deltaTime = (currentTime - lastTime) / 1000; // in seconds
        setCounter((prev) => prev + deltaTime * rates.perSecond);
      }
      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(updateCounter);
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isLive, rates.perSecond]);

  const resetClock = () => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const elapsedSeconds = (now.getTime() - startOfDay) / 1000;
    setCounter(elapsedSeconds * rates.perSecond);
  };

  if (compact) {
    return (
      <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/80 text-center relative overflow-hidden">
        <div className="text-xs uppercase tracking-widest font-semibold text-blue-400 mb-1 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live Estimated Federal Spending Today
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 tracking-tight my-2">
          {formatCurrency(counter)}
        </div>
        <div className="text-xs text-slate-400">
          FY {CURRENT_FISCAL_YEAR} Rate: <span className="text-white font-medium">{formatCurrency(rates.perSecond)}/sec</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 bg-slate-950/90 text-center shadow-2xl overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Required PRD Tagline & Status Pill */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Live Rate Counter (FY {CURRENT_FISCAL_YEAR})
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-blue-400" />
          Estimated rate based on reported federal spending.
        </span>
      </div>

      <h2 className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">
        U.S. Federal Government Spending Today
      </h2>

      {/* Main Animated Counter Display */}
      <div className="my-4">
        <div className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-mono text-white tracking-tight digit-pulse inline-block bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
          {formatCurrency(counter)}
        </div>
        <div className="text-xs text-slate-400 mt-2 font-medium">
          Accrued spending since 12:00 AM Today (ET)
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 my-6">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1.5 border border-slate-700"
        >
          {isLive ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{isLive ? 'Pause Counter' : 'Resume Counter'}</span>
        </button>
        <button
          onClick={resetClock}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1"
          title="Recalibrate to exact current time"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Recalibrate</span>
        </button>
      </div>

      {/* Granular Breakdown Rate Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-slate-800/80">
        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-blue-500/30 transition-colors">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Per Day</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white mt-1">
            {formatCurrency(rates.perDay, true)}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">$18.49B / 24 hrs</div>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-blue-500/30 transition-colors">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Per Hour</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white mt-1">
            {formatCurrency(rates.perHour, true)}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">$770.5M / hour</div>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-blue-500/30 transition-colors">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Per Minute</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-white mt-1">
            {formatCurrency(rates.perMinute, true)}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">$12.84M / minute</div>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-emerald-500/30 transition-colors bg-gradient-to-br from-slate-900/60 to-emerald-950/20">
          <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider flex items-center justify-between">
            <span>Per Second</span>
            <Sparkles className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-1">
            {formatCurrency(rates.perSecond)}
          </div>
          <div className="text-[10px] text-emerald-500/80 mt-0.5">$214,041 every second</div>
        </div>
      </div>
    </div>
  );
}
