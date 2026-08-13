'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

interface FiscalYearSelectorProps {
  selectedYear: number;
  availableYears?: number[];
  onChange: (year: number) => void;
}

export default function FiscalYearSelector({
  selectedYear,
  availableYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026],
  onChange,
}: FiscalYearSelectorProps) {
  return (
    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 p-1.5 rounded-lg shadow-sm">
      <Calendar className="w-4 h-4 text-blue-700 ml-1" />
      <span className="text-xs font-semibold text-slate-600">Fiscal Year:</span>
      <select
        value={selectedYear}
        onChange={(e) => onChange(Number(e.target.value))}
        className="bg-slate-50 text-slate-900 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold font-mono focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {availableYears.map((fy) => (
          <option key={fy} value={fy}>
            FY {fy} {fy === 2026 ? '(Current)' : ''}
          </option>
        ))}
      </select>
    </div>
  );
}
