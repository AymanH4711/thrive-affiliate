import React from 'react';

interface AffiliateDisclosureProps {
  /** Shorter single-line variant for placement right under an in-body CTA
      (e.g. the MetaboSana review's "Considering MetaboSana?" box), instead
      of the full boxed banner used at the bottom of an article. */
  compact?: boolean;
  className?: string;
  /** Optional tag to adjust copy for where this is shown. Currently only
      'supplement-reviews' is a known/confirmed value (used on the /blog
      listing page, which aggregates many supplement review articles).
      NOTE: only one real usage of this prop exists in the codebase so far
      — if other context values get used elsewhere with different intended
      copy, add a case for them below rather than assuming this covers it. */
  context?: 'supplement-reviews' | string;
}

export const AffiliateDisclosure: React.FC<AffiliateDisclosureProps> = ({ compact = false, className = '', context }) => {
  if (compact) {
    return (
      <p className={`text-xs text-slate-500 ${className}`}>
        <span className="font-bold uppercase tracking-wider text-[10px] text-slate-600 mr-1">Affiliate Disclosure:</span>
        ThriveHealth360 may earn a commission from qualifying purchases at no extra cost to you.
      </p>
    );
  }

  const bodyText = context === 'supplement-reviews'
    ? 'ThriveHealth360 is committed to providing transparent, evidence-based wellness insights. Some of the supplement reviews and recommendations on this site contain affiliate links. This means that if you click a link and make a purchase, we may receive a small commission at absolutely no extra cost to you. These commissions help support our dedicated research team and keep our deep-dive resources completely free for everyone. Thank you for your support!'
    : 'ThriveHealth360 is committed to providing transparent, evidence-based wellness insights. Some of the links on this website are affiliate links. This means that if you click a link and make a purchase, we may receive a small commission at absolutely no extra cost to you. These commissions help support our dedicated research team and keep our deep-dive resources completely free for everyone. Thank you for your support!';

  return (
    <div className={`my-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-600 shadow-sm max-w-4xl mx-auto ${className}`}>
      <p className="leading-relaxed">
        <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] bg-slate-200 px-2 py-0.5 rounded-md mr-2">
          Affiliate Disclosure
        </span>
        {bodyText}
      </p>
    </div>
  );
};

// Exporting both ways ensures BlogPage.tsx will load it successfully either way!
export default AffiliateDisclosure;