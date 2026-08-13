import React from 'react';
import Link from 'next/link';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import { ArrowUpRight } from 'lucide-react';
import { SpendingCategoryItem } from '@/types';

interface CategoryCardProps {
  category?: SpendingCategoryItem;
  name?: string;
  slug?: string;
  amount?: number;
  percentage?: number;
  icon?: string;
  routePrefix?: string;
}

export default function CategoryCard({
  category,
  name,
  slug,
  amount,
  percentage,
  icon,
  routePrefix = '/',
}: CategoryCardProps) {
  const catName = category?.name || name || 'Category';
  const catSlug = category?.slug || slug || '';
  const catAmount = category?.amount ?? amount ?? 0;
  const catPct = category?.percentage ?? percentage ?? 0;
  const catIcon = category?.icon || icon;

  const targetHref = catSlug.startsWith('/') ? catSlug : `${routePrefix === '/' ? '' : routePrefix}/${catSlug}`;

  return (
    <Link
      href={targetHref.startsWith('/') ? targetHref : `/${targetHref}`}
      className="data-card data-card-hover p-5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {catIcon && <span className="text-xl">{catIcon}</span>}
            <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-base">
              {catName}
            </h4>
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            {formatPercent(catPct)}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-end justify-between mt-4">
        <div>
          <div className="text-[10px] uppercase font-semibold text-slate-500">Annual Outlays</div>
          <div className="text-lg font-extrabold font-mono text-slate-900 mt-0.5 numeral-tabular">
            {formatCurrency(catAmount, true)}
          </div>
        </div>

        <div className="p-1.5 rounded-md bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-400 transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
