'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalSearch from '@/components/search/GlobalSearch';
import { Menu, X, Landmark, Calculator } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Spending', href: '/spending' },
  { name: 'Breakdown', href: '/spending-breakdown' },
  { name: 'By Year', href: '/spending-by-year' },
  { name: 'Categories', href: '/categories' },
  { name: 'Agencies', href: '/agencies' },
  { name: 'States', href: '/states' },
  { name: 'Recipients', href: '/recipients' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-500 transition-colors">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block leading-none">
                USA SPENDING
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                usa-spending.com
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-sm">
            <GlobalSearch />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5 text-xs font-semibold text-slate-300">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/calculator"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Tax Calculator</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <div className="pt-2">
            <GlobalSearch />
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
