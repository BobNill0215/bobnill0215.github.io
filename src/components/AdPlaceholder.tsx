'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdPlaceholderProps {
  slot?: string;
  className?: string;
}

export default function AdPlaceholder({
  slot = 'article',
  className = '',
}: AdPlaceholderProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window as Window & { adsbygoogle?: unknown[] }).adsbygoogle = 
          (window as Window & { adsbygoogle?: unknown[] }).adsbygoogle || [];
        ((window as Window & { adsbygoogle?: unknown[] }).adsbygoogle as unknown[]).push({});
      }
    } catch (e) {
      console.log('AdSense load error:', e);
    }
  }, []);

  return (
    <div className={`my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6406389310465549"
        data-ad-slot={getAdSlot(slot)}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

function getAdSlot(slot: string): string {
  const slots: Record<string, string> = {
    'homepage-banner': '4952204698',
    'article-top': '4952204698',
    'article-middle': '4952204698',
    'article-bottom': '4952204698',
    'sidebar': '4952204698',
    'article': '4952204698',
    'default': '4952204698',
  };
  return slots[slot] || slots['default'];
}