'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Loader2, Building2, MapPin, Award, PieChart } from 'lucide-react';

interface SearchResult {
  type: 'Category' | 'Agency' | 'State' | 'Recipient';
  title: string;
  subtitle: string;
  url: string;
}

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const json = await res.json();
        setResults(json.data || []);
        setIsOpen(true);
      } catch (err) {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (url: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(url);
  };

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'Agency':
        return <Building2 className="w-3.5 h-3.5 text-blue-700" />;
      case 'State':
        return <MapPin className="w-3.5 h-3.5 text-emerald-700" />;
      case 'Recipient':
        return <Award className="w-3.5 h-3.5 text-purple-700" />;
      case 'Category':
        return <PieChart className="w-3.5 h-3.5 text-amber-700" />;
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-xs sm:max-w-sm">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search agencies, states, recipients..."
          className="w-full bg-slate-50 border border-slate-300 rounded-lg py-1.5 pl-9 pr-8 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
        />
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        {isLoading && (
          <Loader2 className="w-3.5 h-3.5 text-blue-700 animate-spin absolute right-3 top-1/2 -translate-y-1/2" />
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-lg shadow-xl border border-slate-200 py-1.5 z-50 max-h-80 overflow-y-auto divide-y divide-slate-100">
          {results.map((r, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(r.url)}
              className="p-2.5 hover:bg-slate-50 cursor-pointer flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                <div className="p-1 rounded bg-slate-100">{getIcon(r.type)}</div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{r.title}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{r.subtitle}</div>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 flex-shrink-0">
                {r.type}
              </span>
            </div>
          ))}
        </div>
      )}

      {isOpen && !isLoading && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-lg shadow-xl border border-slate-200 p-4 text-center text-xs text-slate-500 z-50">
          No matching agencies, states, or recipients found.
        </div>
      )}
    </div>
  );
}
