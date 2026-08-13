'use client';

import React, { useState, useEffect } from 'react';
import { DataMetadata } from '@/types';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Info, Pause, Play, RefreshCw } from 'lucide-react';

interface SpendingClockProps {
  annualBudget?: number;
  metadata?: DataMetadata;
  compact?: boolean;
}

export default function SpendingClock({
  annualBudget = 6_750_000_000_000,
  metadata,
  compact = false,
}: SpendingClockProps) {
  const rates = calculateSpendingRates(annualBudget);

  const [counter, setCounter] = useState<number>(0);
  const [isLive, setIsLive] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const elapsedSeconds = (now.getTime() - startOfDay) / 1000;
    setCounter(elapsedSeconds * rates.perSecond);

    let animationFrameId: number;
    let lastTime = performance.now();

    const updateCounter = (currentTime: number) => {
      if (isLive) {
        const deltaTime = (currentTime - lastTime) / 1000;
        setCounter((prev) => prev + deltaTime * rates.perSecond);
      }
      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(updateCounter);
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isLive, rates.perSecond]);

  return (
    <div className="navy-hero p-6 sm:p-10 rounded-2xl border border-navy-800 shadow-xl text-center space-y-6 relative overflow-hidden">
      {/* Header Pill */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Live Calculated Spending Rate
        </span>

        {/* Info Tooltip Button */}
        <div className="relative inline-block">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>Estimated spending rate</span>
          </button>

          {showTooltip && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-72 p-3 bg-slate-900 text-white rounded-lg text-xs shadow-2xl border border-slate-700 z-50 text-left">
              The per-second, per-minute, and per-hour figures displayed are mathematical rate calculations based on total reported annual federal outlays. This is not a live real-time treasury bank transaction stream.
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
          Federal Government Spending Today
        </h2>
        {/* Large Scanning Number */}
        <div className="text-4xl sm:text-6xl font-black font-mono text-white tracking-tight numeral-tabular">
          {formatCurrency(counter)}
        </div>
        <div className="text-xs text-slate-400 mt-2 font-medium">
          Accrued spending since 12:00 AM Today (ET)
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setIsLive(!isLive)}
          className="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1 border border-slate-700"
        >
          {isLive ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{isLive ? 'Pause Rate' : 'Resume Rate'}</span>
        </button>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-slate-800 text-left">
        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Per Year</div>
          <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
            {formatCurrency(rates.annual, true)}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Per Day</div>
          <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
            {formatCurrency(rates.perDay, true)}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Per Hour</div>
          <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
            {formatCurrency(rates.perHour, true)}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Per Minute</div>
          <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
            {formatCurrency(rates.perMinute, true)}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
          <div className="text-[10px] text-emerald-400 uppercase font-semibold">Per Second</div>
          <div className="text-sm sm:text-base font-bold font-mono text-emerald-400 mt-0.5">
            {formatCurrency(rates.perSecond)}
          </div>
        </div>
      </div>
    </div>
  );
}
