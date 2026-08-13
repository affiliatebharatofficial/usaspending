'use client';

import React from 'react';
import { Layers } from 'lucide-react';

export type MetricType = 'Outlays' | 'Obligations' | 'Budgetary Resources' | 'Awards';

interface MetricTypeSelectorProps {
  selectedMetric: MetricType;
  availableMetrics?: MetricType[];
  onChange: (metric: MetricType) => void;
}

export default function MetricTypeSelector({
  selectedMetric,
  availableMetrics = ['Outlays', 'Obligations', 'Budgetary Resources', 'Awards'],
  onChange,
}: MetricTypeSelectorProps) {
  return (
    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 p-1.5 rounded-lg shadow-sm">
      <Layers className="w-4 h-4 text-blue-700 ml-1" />
      <span className="text-xs font-semibold text-slate-600">Metric Type:</span>
      <select
        value={selectedMetric}
        onChange={(e) => onChange(e.target.value as MetricType)}
        className="bg-slate-50 text-slate-900 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold font-mono focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {availableMetrics.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
}
