import React from 'react';
import Link from 'next/link';
import { Landmark, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Col 1: Brand & Tagline */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white">
              <Landmark className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-900 text-base tracking-wider">USA SPENDING</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            See Where America's Money Goes. An independent public data visualization website rendering U.S. government financial datasets transparent, accurate, and understandable.
          </p>
          <div className="pt-1 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-200 leading-normal font-sans">
            <strong>Disclaimer:</strong> Independent data visualization project. Not affiliated with or endorsed by the U.S. Government or USAspending.gov.
          </div>
        </div>

        {/* Col 2: Top Detail Pages */}
        <div className="space-y-2 text-xs">
          <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Top Detail Pages</h4>
          <ul className="space-y-2 font-medium">
            <li><Link href="/categories/defense-military" className="hover:text-blue-700 transition-colors">Defense & Military</Link></li>
            <li><Link href="/categories/medicaid-spending" className="hover:text-blue-700 transition-colors">Medicaid Spending</Link></li>
            <li><Link href="/categories/education-training" className="hover:text-blue-700 transition-colors">Education & Training</Link></li>
            <li><Link href="/categories/agriculture-food-assistance" className="hover:text-blue-700 transition-colors">Agriculture & Food Assistance</Link></li>
            <li><Link href="/categories/infrastructure-transport" className="hover:text-blue-700 transition-colors">Infrastructure & Transport</Link></li>
            <li><Link href="/categories/science-medical-research" className="hover:text-blue-700 transition-colors">Science & Medical Research</Link></li>
            <li><Link href="/categories/nasa-space-exploration" className="hover:text-blue-700 transition-colors">NASA & Space Exploration</Link></li>
            <li><Link href="/agencies/department-of-transportation" className="hover:text-blue-700 transition-colors">Department of Transportation</Link></li>
            <li><Link href="/recipients/boeing" className="hover:text-blue-700 transition-colors">Federal Awards to Boeing</Link></li>
          </ul>
        </div>

        {/* Col 3: Explore Index */}
        <div className="space-y-2 text-xs">
          <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Explore Index</h4>
          <ul className="space-y-2 font-medium">
            <li><Link href="/categories" className="hover:text-blue-700 transition-colors">All Categories Index</Link></li>
            <li><Link href="/agencies" className="hover:text-blue-700 transition-colors">All Agencies Index</Link></li>
            <li><Link href="/states" className="hover:text-blue-700 transition-colors">State Geographic Explorer</Link></li>
            <li><Link href="/recipients" className="hover:text-blue-700 transition-colors">Recipient Contractors</Link></li>
            <li><Link href="/spending-by-year" className="hover:text-blue-700 transition-colors">Spending by Year</Link></li>
            <li><Link href="/calculator" className="hover:text-blue-700 transition-colors">Tax Calculator</Link></li>
            <li><Link href="/calculators" className="hover:text-blue-700 transition-colors">Calculators Hub</Link></li>
            <li><Link href="/compare" className="hover:text-blue-700 transition-colors">Comparison Engine</Link></li>
          </ul>
        </div>

        {/* Col 4: Mandatory Legal & Information Links */}
        <div className="space-y-3 text-xs">
          <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Legal & Info</span>
          </h4>
          <ul className="space-y-2 font-medium">
            <li><Link href="/about" className="hover:text-blue-700 transition-colors font-bold text-slate-800">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-700 transition-colors font-bold text-slate-800">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-700 transition-colors font-bold text-slate-800">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-700 transition-colors font-bold text-slate-800">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-blue-700 transition-colors">Disclaimer</Link></li>
            <li><Link href="/methodology" className="hover:text-blue-700 transition-colors">Data Methodology</Link></li>
            <li><Link href="/data-sources" className="hover:text-blue-700 transition-colors">Government Data Sources</Link></li>
          </ul>

          <div className="pt-2">
            <a
              href="https://www.usaspending.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-slate-700 font-medium text-[11px]"
            >
              <span>USAspending.gov (Official Govt Site)</span>
              <ExternalLink className="w-3 h-3 text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 text-center text-xs text-slate-500 space-y-2">
        <p className="font-medium text-slate-600">
          USA Spending (usaspending.us) is an independent public data visualization website rendering public U.S. Federal Government datasets. Not affiliated with, authorized by, or endorsed by the U.S. Government or USAspending.gov.
        </p>
        <p className="text-[11px] text-slate-500">
          Built and maintained by <a href="https://www.linkedin.com/in/firoz-khan-1153358a/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 hover:text-blue-700 underline">Firoz Khan</a>. Connect on <a href="https://www.linkedin.com/in/firoz-khan-1153358a/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 hover:text-blue-700 underline">LinkedIn</a> or check out projects on <a href="https://github.com/fkdigitalmedia" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 hover:text-blue-700 underline">GitHub</a>.
        </p>
        <p className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} USA Spending. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
