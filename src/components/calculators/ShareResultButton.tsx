'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareResultButtonProps {
  textToShare: string;
  urlToShare?: string;
}

export default function ShareResultButton({
  textToShare,
  urlToShare,
}: ShareResultButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = urlToShare || (typeof window !== 'undefined' ? window.location.href : '');

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'USA Spending Calculator Result',
          text: textToShare,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Fallback to clipboard copy
      }
    }

    try {
      await navigator.clipboard.writeText(`${textToShare} ${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-900 text-xs font-bold transition-all"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span>Copied Summary!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-blue-700" />
          <span>Share Result</span>
        </>
      )}
    </button>
  );
}
