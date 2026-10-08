import React from 'react';
import Link from 'next/link';
import { CalendarDays, Clock, Tag, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { BLOG_ARTICLES } from '@/lib/blog/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Federal Spending Analysis | USA Spending',
  description:
    'Researched analysis of U.S. federal spending: debt interest vs defense, budget breakdowns, state spotlights, and historical trends — built on real Treasury data.',
  alternates: { canonical: 'https://www.usaspending.us/blog' },
};

const CATEGORIES = ['Data Stories', 'Explainers', 'State Spotlights', 'Comparisons'];

export default function BlogIndexPage() {
  const sorted = [...BLOG_ARTICLES].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} />

      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Federal Spending, Explained
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Researched stories built on real U.S. Treasury data — new analysis
          published daily. Every number traces back to the Monthly Treasury
          Statement; every article links its sources.
        </p>
      </header>

      {CATEGORIES.map((cat) => {
        const items = sorted.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">{cat}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm transition group flex flex-col"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-700">
                      <Tag className="w-3 h-3" /> {a.category}
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 group-hover:text-blue-800 leading-snug flex-1">
                    {a.title}
                  </div>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-2">{a.description}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-3">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {a.datePublished}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {a.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1 ml-auto text-blue-700 font-semibold">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {sorted.length === 0 && (
        <p className="text-slate-500">First articles are on the way — check back soon.</p>
      )}
    </div>
  );
}
