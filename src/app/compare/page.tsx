import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { GitCompare, ArrowRight, Shield, HeartPulse, GraduationCap, MapPin, Building2, Award } from 'lucide-react';

export default function CompareOverviewPage() {
  const popularComparisons = [
    { title: 'California vs. Texas', type: 'State Comparison', url: '/compare/california-vs-texas', icon: MapPin },
    { title: 'Defense vs. Education', type: 'Category Comparison', url: '/compare/defense-vs-education', icon: Shield },
    { title: 'Social Security vs. Medicare', type: 'Category Comparison', url: '/compare/social-security-vs-medicare', icon: HeartPulse },
    { title: 'Lockheed Martin vs. Boeing', type: 'Recipient Comparison', url: '/compare/lockheed-martin-vs-boeing', icon: Award },
    { title: 'Dept of Defense vs. HHS', type: 'Agency Comparison', url: '/compare/dod-vs-hhs', icon: Building2 },
    { title: 'NASA vs. Dept of Energy', type: 'Agency Comparison', url: '/compare/nasa-vs-doe', icon: Building2 },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Comparison Engine', url: '/compare' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <GitCompare className="w-3.5 h-3.5" />
          Side-by-Side Analytical Tool
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. Spending Comparison Engine
        </h1>
        <p className="text-sm text-slate-600">
          Compare federal outlays, per-capita allocations, YoY trends, and recipient distributions across states, categories, agencies, and defense contractors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularComparisons.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.url}
              href={item.url}
              className="data-card p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                    {item.type}
                  </span>
                  <Icon className="w-4 h-4 text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                <span>Run Comparison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
