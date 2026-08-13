import React from 'react';
import Link from 'next/link';
import { Landmark, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Col 1: Brand & Tagline */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-navy-950 flex items-center justify-center text-white">
              <Landmark className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-900 text-base tracking-wider">USA SPENDING</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            See Where America's Money Goes. An independent public data visualization website rendering U.S. government financial datasets transparent and understandable.
          </p>
        </div>

        {/* Col 2: Explore */}
        <div className="space-y-2 text-xs">
          <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 font-medium">
            <li><Link href="/spending" className="hover:text-blue-700 transition-colors">Spending</Link></li>
            <li><Link href="/spending-breakdown" className="hover:text-blue-700 transition-colors">Spending Breakdown</Link></li>
            <li><Link href="/spending-by-year" className="hover:text-blue-700 transition-colors">Spending by Year</Link></li>
            <li><Link href="/categories" className="hover:text-blue-700 transition-colors">Categories</Link></li>
            <li><Link href="/agencies" className="hover:text-blue-700 transition-colors">Agencies</Link></li>
            <li><Link href="/states" className="hover:text-blue-700 transition-colors">States</Link></li>
            <li><Link href="/recipients" className="hover:text-blue-700 transition-colors">Recipients</Link></li>
            <li><Link href="/calculator" className="hover:text-blue-700 transition-colors">Calculator</Link></li>
          </ul>
        </div>

        {/* Col 3: Information */}
        <div className="space-y-2 text-xs">
          <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Information</h4>
          <ul className="space-y-2 font-medium">
            <li><Link href="/about" className="hover:text-blue-700 transition-colors">About</Link></li>
            <li><Link href="/methodology" className="hover:text-blue-700 transition-colors">Methodology</Link></li>
            <li><Link href="/data-sources" className="hover:text-blue-700 transition-colors">Data Sources</Link></li>
            <li><Link href="/disclaimer" className="hover:text-blue-700 transition-colors">Disclaimer</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-700 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-700 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Col 4: Data Sources & Links */}
        <div className="space-y-3 text-xs">
          <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Official Data Portals</h4>
          <a
            href="https://www.usaspending.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-slate-700 font-medium"
          >
            <span>USAspending.gov API</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </a>
          <a
            href="https://fiscaldata.treasury.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-slate-700 font-medium"
          >
            <span>Treasury Fiscal Data</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </a>
        </div>
      </div>

      {/* Mandatory Section 23 Disclaimer */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 text-center text-xs text-slate-500 space-y-2">
        <p className="font-medium text-slate-600">
          USA Spending is an independent data visualization project and is not affiliated with or endorsed by the U.S. Government.
        </p>
        <p className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} USA Spending. All visualizations are based on public U.S. Federal Government datasets.
        </p>
      </div>
    </footer>
  );
}
