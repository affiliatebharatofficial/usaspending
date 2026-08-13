'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config/site';
import { ShieldAlert, List, ChevronDown, ChevronUp, FileText, ArrowRight } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
}

interface InfoPageLayoutProps {
  title: string;
  subtitle: string;
  breadcrumbName: string;
  breadcrumbUrl: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export default function InfoPageLayout({
  title,
  subtitle,
  breadcrumbName,
  breadcrumbUrl,
  toc,
  children,
}: InfoPageLayoutProps) {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <Breadcrumbs items={[{ name: breadcrumbName, url: breadcrumbUrl }]} />

      {/* Page Header */}
      <div className="data-card p-6 sm:p-10 rounded-2xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
            <FileText className="w-3.5 h-3.5" />
            Official Documentation & Transparency
          </div>
          <div className="text-xs font-mono font-semibold text-slate-500">
            Last Updated: <span className="text-slate-900 font-bold">{SITE_CONFIG.lastUpdated}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
          {title}
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          {subtitle}
        </p>

        {/* Independent Website Warning Banner */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start space-x-3 mt-4">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">Independent Project Notice:</span>
            <p className="leading-relaxed">
              {SITE_CONFIG.disclaimerNotice}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Table of Contents */}
      <div className="lg:hidden data-card rounded-xl border border-slate-200 bg-white overflow-hidden">
        <button
          onClick={() => setMobileTocOpen(!mobileTocOpen)}
          className="w-full p-4 flex items-center justify-between text-xs font-bold text-slate-900 bg-slate-50 hover:bg-slate-100"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-blue-700" />
            Table of Contents ({toc.length} sections)
          </span>
          {mobileTocOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {mobileTocOpen && (
          <nav className="p-4 space-y-2 text-xs border-t border-slate-200 bg-white">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileTocOpen(false)}
                className="block text-slate-600 hover:text-blue-700 font-medium py-1 hover:underline"
              >
                {item.title}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Main Content Layout with Sticky Sidebar TOC */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sticky Desktop TOC Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 space-y-4">
          <div className="sticky top-24 data-card p-5 rounded-xl border border-slate-200 bg-white space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <List className="w-4 h-4 text-blue-700" />
              On This Page
            </div>
            <nav className="space-y-1.5 text-xs">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-slate-600 hover:text-blue-700 hover:bg-slate-50 px-2 py-1.5 rounded transition-colors font-medium"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Informational Main Body */}
        <main className="lg:col-span-3 space-y-8 prose prose-slate max-w-none">
          {children}

          {/* Cross-linking Footer Banner */}
          <div className="not-prose data-card p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 mt-12">
            <h3 className="text-lg font-bold text-slate-900">Explore Related Documentation & Explorer Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold">
              <Link href="/about" className="p-3 rounded-lg bg-white border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
                <span>About USA Spending</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
              <Link href="/methodology" className="p-3 rounded-lg bg-white border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
                <span>Data Methodology</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
              <Link href="/data-sources" className="p-3 rounded-lg bg-white border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
                <span>Official Data Sources</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
              <Link href="/disclaimer" className="p-3 rounded-lg bg-white border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
                <span>Legal Disclaimer</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
              <Link href="/privacy" className="p-3 rounded-lg bg-white border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
                <span>Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
              <Link href="/terms" className="p-3 rounded-lg bg-white border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
                <span>Terms of Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
