// src/components/conversion/StickyAffiliateCTA.tsx
//
// Persistent scroll-triggered affiliate CTA — appears once the reader has
// scrolled past a threshold (default 600px, roughly past the hero/intro),
// stays fixed at the bottom of the viewport, and is dismissible.
//
// NOTE: your structure doc lists src/hooks/useAffiliateCTA.ts [NEW] as the
// intended home for the scroll-trigger logic below. It's kept inline here
// since that hook file wasn't available to build against — if/when you
// write useAffiliateCTA.ts, the useState/useEffect block below is a
// reasonable starting point to extract into it, and this component would
// then just call the hook instead.
//
// Usage:
//   import { StickyAffiliateCTA } from '@/components/conversion/StickyAffiliateCTA';
//   <StickyAffiliateCTA
//     productName="MetaboSana"
//     href="https://metabosana.com/metabosana-pdp-fe#aff=Ayman_Hathoot"
//     ctaLabel="Check Price & Availability"
//   />

import { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export interface StickyAffiliateCTAProps {
  productName: string;
  href: string;
  ctaLabel?: string;
  /** Short supporting line shown above the button, e.g. a USP */
  tagline?: string;
  /** Scroll distance (px) before the CTA appears. Default: 600 */
  showAfterScroll?: number;
}

export function StickyAffiliateCTA({
  productName,
  href,
  ctaLabel = 'Check Price & Availability',
  tagline,
  showAfterScroll = 600,
}: StickyAffiliateCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > showAfterScroll) setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // handle case where page loads already scrolled
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfterScroll]);

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-emerald-200 shadow-[0_-4px_20px_rgba(0,0,0,.08)]"
      role="complementary"
      aria-label={`${productName} affiliate offer`}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="font-bold text-gray-900 text-sm truncate">{productName}</p>
          {tagline && (
            <p className="text-xs text-gray-500 truncate hidden sm:block">{tagline}</p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition whitespace-nowrap"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="p-1.5 text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyAffiliateCTA;
