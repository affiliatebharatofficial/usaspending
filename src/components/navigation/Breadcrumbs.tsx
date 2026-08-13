import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullList = [
    { name: 'Home', url: '/' },
    ...items,
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" data={fullList} />
      <nav className="flex items-center space-x-1.5 text-xs text-slate-500 font-medium py-2 overflow-x-auto">
        <Link
          href="/"
          className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-900 transition-colors flex-shrink-0"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.url}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-xs">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-slate-900 transition-colors truncate max-w-[150px]"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
