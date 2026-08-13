import React from 'react';
import MetricCard from './MetricCard';

export interface MetricItem {
  label: string;
  value: string | number;
  subtext?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

interface ByTheNumbersProps {
  title?: string;
  metrics: MetricItem[];
}

export default function ByTheNumbers({
  title = 'By the Numbers',
  metrics,
}: ByTheNumbersProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-bold text-slate-900">{title}</h3>}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => (
          <MetricCard
            key={idx}
            label={m.label}
            value={m.value}
            subtext={m.subtext}
            change={m.change}
            changeType={m.changeType}
          />
        ))}
      </div>
    </div>
  );
}
