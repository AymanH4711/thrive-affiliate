// src/components/conversion/StickyAffiliateCTA.tsx
//
// Sticky bottom CTA bar that appears after the user scrolls past a threshold.
// Used on supplement review and comparison pages to keep the top affiliate
// product visible without blocking content before the user shows intent.
//
// Compliance:
//   - "Ad" label always visible (FTC native advertising guidance)
//   - rel="noopener noreferrer sponsored" on every affiliate link
//   - Dismissible — never forces engagement
//   - No forbidden superlatives or disease-cure language
//
// Named export — always import with { }:
//   import { StickyAffiliateCTA } from '@/components/conversion/StickyAffiliateCTA';

import { useState, useEffect, useCallback } from 'react';
import { ExternalLink, X, Star, ShieldCheck } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StickyAffiliateCTAProps {
  /** Product name shown in the bar */
  productName: string;
  /** Short benefit line — keep under 60 chars, no disease-cure claims */
  tagline: string;
  /** Affiliate URL — rendered with rel sponsored */
  affiliateUrl: string;
  /** CTA button label. Default: "Check Price" */
  ctaLabel?: string;
  /** Star rating out of 5 (one decimal). Shown as filled stars + number. */
  rating?: number;
  /** Number of ratings/reviews to display, e.g. 1240 */
  reviewCount?: number;
  /** Small product image URL */
  imageSrc?: string;
  imageAlt?: string;
  /** Trust signal beneath product name, e.g. "3rd-party tested · GMP certified" */
  trustSignal?: string;
  /**
   * How far the user must scroll (px) before the bar slides in.
   * Default: 600
   */
  scrollThreshold?: number;
  /**
   * Session-storage key used to remember dismissal within the session.
   * Use a page-specific key so dismissal on one page doesn't hide it on another.
   * Default: "sticky-cta-dismissed"
   */
  dismissKey?: string;
  /** Variant — 'bar' (full-width bottom bar) or 'card' (floating card, bottom-right). Default: 'bar' */
  variant?: 'bar' | 'card';
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function MiniStars({ rating, reviewCount }: { rating: number; reviewCount?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars${reviewCount ? `, ${reviewCount.toLocaleString()} reviews` : ''}`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
      {hasHalf && (
        <span className="relative inline-block w-3 h-3" aria-hidden="true">
          <Star className="absolute inset-0 w-3 h-3 text-gray-300" />
          <span className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          </span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="w-3 h-3 text-gray-300" aria-hidden="true" />
      ))}
      <span className="ml-1 text-xs text-gray-600 font-medium">{rating.toFixed(1)}</span>
      {reviewCount && (
        <span className="ml-0.5 text-xs text-gray-400">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </span>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function StickyAffiliateCTA({
  productName,
  tagline,
  affiliateUrl,
  ctaLabel = 'Check Price',
  rating,
  reviewCount,
  imageSrc,
  imageAlt,
  trustSignal,
  scrollThreshold = 600,
  dismissKey = 'sticky-cta-dismissed',
  variant = 'bar',
}: StickyAffiliateCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Check session storage on mount — respect previous dismissal
  useEffect(() => {
    try {
      if (sessionStorage.getItem(dismissKey) === '1') {
        setDismissed(true);
      }
    } catch {
      // sessionStorage blocked (private browsing, etc.) — degrade gracefully
    }
  }, [dismissKey]);

  // Scroll listener — slide in after threshold
  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > scrollThreshold);
  }, [scrollThreshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(dismissKey, '1');
    } catch {
      // ignore
    }
  };

  // Don't render at all once dismissed — no layout shift
  if (dismissed) return null;

  // ── Shared inner content ───────────────────────────────────────────────────

  const productBlock = (
    <div className="flex items-center gap-3 min-w-0">
      {/* Product image */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt ?? productName}
          className="w-12 h-12 object-contain rounded flex-shrink-0 bg-white"
          loading="lazy"
        />
      ) : (
        <div
          className="w-12 h-12 rounded bg-white/20 flex-shrink-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <ShieldCheck className="w-6 h-6 text-white/60" />
        </div>
      )}

      <div className="min-w-0">
        <p className="text-sm font-bold text-white leading-tight truncate">{productName}</p>
        <p className="text-xs text-emerald-100 leading-snug truncate">{tagline}</p>
        {rating != null && (
          <div className="mt-0.5">
            <MiniStars rating={rating} reviewCount={reviewCount} />
          </div>
        )}
        {trustSignal && (
          <p className="text-xs text-emerald-200 mt-0.5 truncate">{trustSignal}</p>
        )}
      </div>
    </div>
  );

  const ctaButton = (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center gap-1.5 bg-white text-emerald-700 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-emerald-50 transition whitespace-nowrap flex-shrink-0"
      aria-label={`${ctaLabel} for ${productName} (affiliate link, opens in new tab)`}
    >
      {ctaLabel}
      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  );

  const dismissButton = (
    <button
      onClick={handleDismiss}
      className="flex-shrink-0 p-1.5 rounded-full hover:bg-white/20 transition text-white/70 hover:text-white"
      aria-label="Dismiss this recommendation"
    >
      <X className="w-4 h-4" aria-hidden="true" />
    </button>
  );

  const ftcLabel = (
    <span
      className="text-xs font-bold text-emerald-200 border border-emerald-300/50 px-1.5 py-0.5 rounded flex-shrink-0"
      aria-label="Paid affiliate link"
    >
      Ad
    </span>
  );

  // ── BAR variant ────────────────────────────────────────────────────────────
  if (variant === 'bar') {
    return (
      <div
        role="complementary"
        aria-label={`Recommended product: ${productName}`}
        className={`
          fixed bottom-0 left-0 right-0 z-50
          bg-gradient-to-r from-emerald-700 to-teal-700
          border-t-2 border-emerald-500
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${visible ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 py-3">
            {ftcLabel}
            <div className="flex-1 min-w-0">{productBlock}</div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {ctaButton}
              {dismissButton}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── CARD variant ───────────────────────────────────────────────────────────
  return (
    <div
      role="complementary"
      aria-label={`Recommended product: ${productName}`}
      className={`
        fixed bottom-6 right-4 z-50 w-72
        bg-gradient-to-br from-emerald-700 to-teal-700
        rounded-2xl border border-emerald-500
        shadow-2xl p-4
        transition-all duration-300 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
      `}
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-3">
        {ftcLabel}
        {dismissButton}
      </div>

      {/* Product info */}
      {productBlock}

      {/* CTA */}
      <div className="mt-4">{ctaButton}</div>
    </div>
  );
}