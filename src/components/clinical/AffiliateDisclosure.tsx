// src/components/conversion/AffiliateDisclosure.tsx
//
// Inline FTC disclosure — designed to sit directly next to (not just once in
// a page footer) every product mention or affiliate CTA, per FTC 16 CFR 255
// "clear and conspicuous, near the claim" guidance. SupplementDisclaimers.tsx
// handles the page-level medical disclaimer; this handles the affiliate
// relationship disclosure specifically, at the point of each individual link.
//
// Two variants:
//   - default: a small standalone line, for use right under/beside a CTA button
//   - compact: an inline <span>, for use mid-sentence next to a contextual
//     product mention (e.g. "...MetaboSana combines these ingredients (affiliate link).")
//
// Usage:
//   import { AffiliateDisclosure } from '@/components/conversion/AffiliateDisclosure';
//   <AffiliateDisclosure />
//   <AffiliateDisclosure productName="MetaboSana" />
//   <AffiliateDisclosure compact />

import { Info } from 'lucide-react';

export interface AffiliateDisclosureProps {
  /** Named product, for a more specific disclosure line. Omit for a generic one. */
  productName?: string;
  /** Render as a compact inline span instead of a standalone block. Default: false */
  compact?: boolean;
  /** Additional className passed through to the root element */
  className?: string;
}

export function AffiliateDisclosure({
  productName,
  compact = false,
  className = '',
}: AffiliateDisclosureProps) {
  const text = productName
    ? `We may earn a commission if you purchase ${productName} through this link, at no extra cost to you.`
    : 'We may earn a commission from qualifying purchases through links on this page, at no extra cost to you.';

  if (compact) {
    return (
      <span className={`text-xs text-gray-500 italic ${className}`}>
        (affiliate link)
      </span>
    );
  }

  return (
    <p
      className={`flex items-start gap-1.5 text-xs text-gray-500 leading-relaxed ${className}`}
      role="note"
      aria-label="Affiliate disclosure"
    >
      <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
      {text}
    </p>
  );
}

export default AffiliateDisclosure;
