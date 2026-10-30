'use client';

import React, { useEffect, useRef } from 'react';

// Bauval native banner unit supplied by the site owner (placement id
// f3210bedf8dc9639401782dd2fc56628). The vendor script is injected
// client-side after the container div is in the DOM, matching the
// snippet's original script-then-container ordering.
const SCRIPT_SRC = 'https://bauval.org/21/f3210bedf8dc9639401782dd2fc56628';
const CONTAINER_ID = 'container-f3210bedf8dc9639401782dd2fc56628';

export default function BauvalAd() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = SCRIPT_SRC;
    wrapper.appendChild(script);
  }, []);

  return (
    <div ref={wrapperRef} className="w-full flex flex-col items-center justify-center my-6">
      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1">
        Advertisement
      </span>
      <div id={CONTAINER_ID} className="w-full flex justify-center" />
    </div>
  );
}
