'use client';

import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  type: '728x90' | '300x250';
  className?: string;
}

export default function AdUnit({ type, className = '' }: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous elements
    container.innerHTML = '';

    const is728 = type === '728x90';
    const key = is728 ? '5d57193dedfceb7084b06a3655956d7d' : 'c3f8caa480897cdb3d54925a13f9ae03';
    const width = is728 ? 728 : 300;
    const height = is728 ? 90 : 250;

    // Set configuration script
    const confScript = document.createElement('script');
    confScript.type = 'text/javascript';
    confScript.text = `
      atOptions = {
        'key' : '${key}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;

    // Set invocation script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = `https://www.highrevenueformat.com/${key}/invoke.js`;

    container.appendChild(confScript);
    container.appendChild(invokeScript);
  }, [type]);

  const is728 = type === '728x90';
  const width = is728 ? 728 : 300;
  const height = is728 ? 90 : 250;

  return (
    <div className={`w-full flex flex-col items-center justify-center my-6 ${className}`}>
      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1">
        Advertisement
      </span>
      <div className="w-full max-w-full overflow-x-auto flex justify-center py-2 px-1">
        <div
          className="flex justify-center items-center rounded-lg bg-slate-50 border border-slate-200/80 p-1.5 shadow-sm max-w-full overflow-hidden"
          style={{ minWidth: is728 ? '320px' : '300px', minHeight: `${height + 12}px` }}
        >
          <div
            ref={containerRef}
            style={{ width: `${width}px`, minHeight: `${height}px` }}
            className="flex justify-center items-center overflow-hidden max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
