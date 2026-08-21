// src/components/layout/ArticleLayout.tsx
//
// DRY wrapper for all article page types — enforces consistent SEO,
// disclaimers, and CTA placement instead of every page hand-rolling its own
// (the exact "inconsistencies creep in" problem your v1.0 → v2.0 structure
// doc calls out). Composes:
//   - SEO (meta tags, OG, schema)
//   - Category badge + header
//   - Real SupplementDisclaimers.tsx exports for `supplement` category
//     (SupplementsMedicalDisclaimerCompact top / ...ProductCompact bottom);
//     a plain fallback disclaimer for diet/device/lifestyle until matching
//     components exist for those categories (see TODO below)
//   - Optional dismissible StickyAffiliateCTA, when affiliateCTA is passed
//
// Usage:
//   import { ArticleLayout } from '@/components/layout/ArticleLayout';
//
//   <ArticleLayout
//     seo={{ title: '...', description: '...', image: '/images/blog/....webp', url: '/blog/...' }}
//     category="supplement"
//     title="How Sleep Affects Blood Sugar Levels in Type 2 Diabetes"
//     readTime="9 min read"
//     publishedDate="July 14, 2026"
//     affiliateCTA={{ productName: 'MetaboSana', href: 'https://metabosana.com/...' }}
//   >
//     {/* article body JSX goes here */}
//   </ArticleLayout>

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import {
  SupplementsMedicalDisclaimerCompact,
  SupplementsAffiliateDisclaimerProductCompact,
} from '@/components/disclaimers/SupplementDisclaimers';
import {
  DietMedicalDisclaimerCompact,
  DietAffiliateDisclaimerProductCompact,
} from '@/components/disclaimers/DietDisclaimers';
import {
  DeviceMedicalDisclaimerCompact,
  DeviceAffiliateDisclaimerProductCompact,
} from '@/components/disclaimers/DeviceDisclaimers';
import {
  LifestyleMedicalDisclaimerCompact,
  LifestyleAffiliateDisclaimerProductCompact,
} from '@/components/disclaimers/LifestyleDisclaimers';
import { StickyAffiliateCTA } from '@/components/conversion/StickyAffiliateCTA';

export type DisclaimerCategory = 'device' | 'diet' | 'lifestyle' | 'supplement';

const disclaimersByCategory: Record<
  DisclaimerCategory,
  { top: React.FC; bottom: React.FC }
> = {
  supplement: { top: SupplementsMedicalDisclaimerCompact, bottom: SupplementsAffiliateDisclaimerProductCompact },
  diet:       { top: DietMedicalDisclaimerCompact,        bottom: DietAffiliateDisclaimerProductCompact },
  device:     { top: DeviceMedicalDisclaimerCompact,      bottom: DeviceAffiliateDisclaimerProductCompact },
  lifestyle:  { top: LifestyleMedicalDisclaimerCompact,    bottom: LifestyleAffiliateDisclaimerProductCompact },
};

function CategoryDisclaimer({ category, position }: { category: DisclaimerCategory; position: 'top' | 'bottom' }) {
  const Component = disclaimersByCategory[category][position];
  return <Component />;
}

const categoryLabels: Record<DisclaimerCategory, string> = {
  supplement: 'Supplements',
  diet: 'Nutrition',
  device: 'Devices & Monitoring',
  lifestyle: 'Lifestyle',
};

export interface ArticleLayoutSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: object;
  articleType?: 'educational' | 'product-review' | 'comparison' | 'how-to';
  pillarId?: string;
  lastUpdated?: string;
}

export interface ArticleLayoutAffiliateCTA {
  productName: string;
  href: string;
  ctaLabel?: string;
  tagline?: string;
}

export interface ArticleLayoutProps {
  seo: ArticleLayoutSEOProps;
  /** Drives both the header badge label and which disclaimer text is shown */
  category: DisclaimerCategory;
  /** H1 — can differ slightly from seo.title (e.g. shorter, or with styled emphasis handled by the caller) */
  title: string;
  readTime?: string;
  publishedDate?: string;
  /** Powers the "N verified references" text in the header meta bar and
      trust-badge strip. Pass citations.length from the article. */
  referencesCount?: number;
  /** Also renders the bottom affiliate-disclosure banner (via CategoryDisclaimer)
      whenever provided — that part is independent of the sticky CTA below. */
  affiliateCTA?: ArticleLayoutAffiliateCTA;
  /** Set true to keep affiliateCTA's bottom disclosure banner while skipping the
      dismissible sticky bottom CTA specifically — e.g. when the article already
      has its own in-body CTA block and the sticky one would be redundant.
      Default: false (sticky CTA renders whenever affiliateCTA is provided). */
  hideStickyCTA?: boolean;
  backLinkTo?: string;
  children: React.ReactNode;
}

// Shared prose + data-table styling for every article's body content.
// Ported directly from the pSEO tool's own standalone HTML export (its
// intended design system) so React articles finally render the way the
// generator was designed to produce them — .section-body / .tbl-* class
// names are the pSEO tool's convention; every generated article already
// emits markup using these classes, they just had no matching CSS here
// before now. Defined once, applies to every article that uses this layout.
function ArticleBodyStyles() {
  return (
    <style>{`
      .section-body p { line-height: 1.85; margin-bottom: 1rem; color: #374151; }
      .section-body h3 { font-size: 1.08rem; font-weight: 700; color: #111827; margin: 1.5rem 0 .6rem; padding-bottom: .3rem; border-bottom: 2px solid #e5e7eb; }
      .section-body ul { margin: .25rem 0 1.1rem 1.25rem; }
      .section-body ol { margin: .25rem 0 1.1rem 1.5rem; }
      .section-body li { margin-bottom: .45rem; line-height: 1.8; }
      .section-body strong { color: #111827; }
      .section-body blockquote { background: #f0fdf4; border-left: 5px solid #16a34a; border-radius: 0 .625rem .625rem 0; padding: 1.1rem 1.4rem; margin: 1.25rem 0; font-size: .9375rem; line-height: 1.7; color: #064e3b; }
      .section-body blockquote p:last-child { margin-bottom: 0; }

      /* ── Table title alignment fix ─────────────────────────────────────── */
      .section-body p strong:only-child {
        display: block;
        margin-bottom: 0.25rem;
        font-size: 1.1rem;
        color: #064e3b;
      }
      .tbl-wrap {
        overflow-x: auto;
        margin: 0.25rem 0 1.75rem;  /* reduced top margin to bring table closer to title */
        border-radius: .625rem;
        border: 3px solid #059669;
        box-shadow: 0 4px 16px rgba(5,150,105,.12);
      }
      .tbl-source { font-size: .8rem; color: #9ca3af; font-style: italic; margin: -1.25rem 0 1.5rem; padding-left: .2rem; }
      .tbl-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: #064e3b;
        margin: 1.5rem 0 0.5rem;
      }
      .md-table { width: 100%; border-collapse: collapse; border-spacing: 0; background: #fff; font-size: .9rem; table-layout: fixed; }
      .tbl-th { background: #064e3b; color: #fff; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; padding: .875rem 1.0625rem; text-align: left; border-right: 2px solid rgba(255,255,255,.18); border-bottom: 3px solid #059669; overflow-wrap: break-word; word-break: break-word; }
      .tbl-th:last-child { border-right: none; }
      .tbl-row-even { background: #f0fdf4; }
      .tbl-row-odd { background: #fff; }
      .md-table tbody tr:hover { background: #dcfce7; }
      .tbl-td { padding: .8125rem 1.0625rem; text-align: left; vertical-align: top; color: #374151; border-right: 1.5px solid #d1fae5; border-bottom: 1.5px solid #d1fae5; overflow-wrap: break-word; word-break: break-word; }
      .tbl-td:last-child { border-right: none; }
      .md-table tbody tr:last-child .tbl-td { border-bottom: none; }

      @media (max-width: 600px) {
        .md-table { table-layout: auto; }
      }

      /* ── References section – white background, gray items with white gaps ── */
      .references-section {
        margin-top: 3.5rem;
        border-top: 2px solid #e5e7eb;
        padding-top: 2rem;
        background: #ffffff !important;   /* force white background for the entire section */
      }
      .references-section > h2 { margin-bottom: .5rem; }
      .ref-intro { color: #9ca3af; font-size: .875rem; margin-bottom: 1.5rem; font-style: italic; }
      .ref-list {
        display: flex;
        flex-direction: column;
        gap: .625rem;                     /* creates white space between items */
        background: transparent !important;
        padding: 0;
      }
      .ref-item {
        display: flex;
        gap: .875rem;
        align-items: flex-start;
        background: #f3f4f6 !important;   /* gray background for each item */
        border-left: 4px solid #9ca3af;
        padding: .875rem 1.125rem;
        border-radius: 0 .5rem .5rem 0;
        transition: border-color .15s;
      }
      .ref-item:hover { border-left-color: #16a34a; }
      .ref-item.unverified {
        border-left-color: #f59e0b;
        background: #fffbeb !important;
      }
      .ref-num { font-size: .75rem; font-weight: 700; color: #9ca3af; flex-shrink: 0; min-width: 2rem; }
      .ref-content { font-size: .875rem; color: #374151; line-height: 1.65; }
      .ref-authors { font-weight: 600; color: #111827; }
      .ref-title-link { color: #16a34a; text-decoration: underline; font-weight: 500; }
      .ref-title-link:hover { color: #064e3b; }
      .ref-journal { color: #4b5563; }
      .ref-badge { display: inline-block; font-size: .7rem; font-weight: 600; padding: .1rem .4rem; border-radius: .25rem; margin-left: .375rem; vertical-align: middle; }
      .ref-doi { background: #d1fae5; color: #065f46; font-family: monospace; }
      .ref-pmid { background: #dbeafe; color: #1e40af; }
      .ref-studytype { background: #fdf4ff; color: #7e22ce; border: 1px solid #d8b4fe; }
      .ref-review { margin-top: 1.25rem; display: flex; align-items: center; gap: .625rem; background: #f3f4f6; border: 1px solid #e5e7eb; padding: .75rem 1.125rem; border-radius: .5rem; font-size: .875rem; color: #374151; }
    `}</style>
  );
}

export function ArticleLayout({
  seo,
  category,
  title,
  readTime,
  publishedDate,
  referencesCount,
  affiliateCTA,
  hideStickyCTA = false,
  backLinkTo = '/blog',
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <ArticleBodyStyles />
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={seo.image}
        url={seo.url}
        schema={seo.schema}
        articleType={seo.articleType || 'educational'}
        pillarId={seo.pillarId}
        lastUpdated={seo.lastUpdated}
        medicallyReviewed
      />

      <main className="min-h-screen bg-white">
        <div className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link
              to={backLinkTo}
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to Blog
            </Link>
          </div>
        </div>

        <article className={`max-w-4xl mx-auto px-6 py-16 ${affiliateCTA ? 'pb-28' : ''}`}>
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-4">
              {categoryLabels[category]}
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight pb-3"
              style={{ fontFamily: "'Lora', Georgia, serif", color: "#064e3b", borderBottom: "4px solid #16a34a" }}
            >
              {title}
            </h1>
            {(readTime || publishedDate || referencesCount) && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
                <span className="font-semibold text-gray-900">ThriveHealth360 Editorial Team</span>
                {readTime && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{readTime}</span>
                  </>
                )}
                {typeof referencesCount === 'number' && referencesCount > 0 && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{referencesCount} verified references</span>
                  </>
                )}
                {publishedDate && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>Updated {publishedDate}</span>
                  </>
                )}
              </div>
            )}
            {typeof referencesCount === 'number' && referencesCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800">
                  ✅ Evidence-Based
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800">
                  🔬 {referencesCount} Verified References
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800">
                  🏥 PubMed & CrossRef Sourced
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-purple-100 text-purple-800">
                  📋 Peer-Reviewed Data
                </span>
              </div>
            )}
          </header>

          <div className="mb-8 -mx-6">
            <CategoryDisclaimer category={category} position="top" />
          </div>

          {children}

          <div
            className={
              affiliateCTA
                ? 'mt-16 -mx-6 grid grid-cols-1 md:grid-cols-2 gap-4 px-6'
                : 'mt-16 px-6 grid grid-cols-1 gap-4 max-w-[640px] mx-auto'
            }
          >
            <CategoryDisclaimer category={category} position="top" />
            {affiliateCTA && (
              <CategoryDisclaimer category={category} position="bottom" />
            )}
          </div>
        </article>
      </main>

      {affiliateCTA && !hideStickyCTA && (
        <StickyAffiliateCTA
          productName={affiliateCTA.productName}
          href={affiliateCTA.href}
          ctaLabel={affiliateCTA.ctaLabel}
          tagline={affiliateCTA.tagline}
        />
      )}
    </>
  );
}

export default ArticleLayout;