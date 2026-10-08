'use client';

import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import type { ArticleChartData } from '@/lib/blog/types';

function formatValue(value: number, unit?: string): string {
  if (unit === '$B') {
    return value >= 1000
      ? `$${(value / 1000).toFixed(2)}T`
      : `$${value.toFixed(0)}B`;
  }
  if (unit === '%') return `${value.toFixed(1)}%`;
  return value.toLocaleString('en-US');
}

export default function ArticleChart({ chart }: { chart: ArticleChartData }) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-lg border border-slate-200 bg-white text-xs shadow-xl">
          <div className="font-semibold text-slate-700">{label}</div>
          {payload.map((p: any, i: number) => (
            <div key={i} className="text-sm font-bold mt-1" style={{ color: p.color }}>
              {p.name}: {formatValue(p.value, chart.unit)}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const lineData =
    chart.series2Label && chart.series2Data
      ? chart.data.map((d, i) => ({
          label: d.label,
          series1: d.value,
          series2: chart.series2Data![i]?.value ?? null,
        }))
      : chart.data;

  const chartBody =
    chart.type === 'bar' ? (
      <BarChart data={chart.data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#475569' }} interval={0} angle={-18} dy={8} height={52} />
        <YAxis
          tick={{ fontSize: 11, fill: '#475569' }}
          tickFormatter={(v: number) => formatValue(v, chart.unit)}
          width={64}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
      </BarChart>
    ) : (
      <LineChart data={lineData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#475569' }} interval={0} angle={-18} dy={8} height={52} />
        <YAxis
          tick={{ fontSize: 11, fill: '#475569' }}
          tickFormatter={(v: number) => formatValue(v, chart.unit)}
          width={64}
        />
        <Tooltip content={<CustomTooltip />} />
        {chart.series2Label ? (
          <>
            <Line type="monotone" dataKey="series1" name="Net interest" stroke="#dc2626" strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="series2" name={chart.series2Label} stroke="#1d4ed8" strokeWidth={2.5} dot={{ r: 3 }} />
          </>
        ) : (
          <Line type="monotone" dataKey="value" stroke="#1d4ed8" strokeWidth={2.5} dot={{ r: 3 }} />
        )}
      </LineChart>
    );

  return (
    <figure className="my-6 rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-6">
      <figcaption className="text-sm font-bold text-slate-900 mb-3">{chart.title}</figcaption>
      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartBody}
        </ResponsiveContainer>
      </div>
      {chart.caption && (
        <p className="text-xs text-slate-500 mt-3 leading-relaxed">{chart.caption}</p>
      )}
    </figure>
  );
}
