import React from 'react';
import Link from 'next/link';
import { Info, ArrowRight } from 'lucide-react';

export default function DataMethodologyNotice() {
  return (
    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
      <div className="flex items-start space-x-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-slate-700 leading-relaxed max-w-3xl">
          <strong className="text-slate-900 font-semibold">Data & Methodology Notice: </strong>
          Spending figures are based on publicly available U.S. government data. Per-day, per-hour, per-minute and per-second figures are calculated estimates and do not represent a real-time transaction stream.
        </div>
      </div>

      <Link
        href="/methodology"
        className="inline-flex items-center space-x-1 font-semibold text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0"
      >
        <span>Read Methodology</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
