// src/components/conversion/ProductComparisonTable.tsx
//
// Reusable affiliate product comparison table for ThriveHealth360.
// Used on supplement review pages, CGM comparisons, and hub pages.
//
// Compliance:
//   - Affiliate links flagged with rel="noopener noreferrer sponsored"
//   - Inline FTC disclosure note on every table (per ftc-disclosure-templates.md)
//   - No forbidden superlatives ("best ever", "cure", "guaranteed")
//   - "Our Pick" badge available — use sparingly, one per table max
//
// Named export — always import with { }:
//   import { ProductComparisonTable } from '@/components/conversion/ProductComparisonTable';

import { ExternalLink, Star, CheckCircle2, XCircle, Minus, Award } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type CellValue =
  | string
  | boolean          // true → ✅  false → ❌
  | null             // → — (not applicable)
  | { text: string; sub?: string }; // text with optional subscript/note

export interface ComparisonProduct {
  /** Unique key — used as React key and anchor id */
  id: string;
  name: string;
  /** Alt text for image */
  imageAlt?: string;
  imageSrc?: string;
  /** Star rating out of 5, one decimal (e.g. 4.3) */
  rating?: number;
  /** Price string, e.g. "$39.99 / month" */
  price?: string;
  /** Affiliate CTA link */
  affiliateUrl?: string;
  /** CTA button label. Default: "Check Price" */
  ctaLabel?: string;
  /** Highlight this product (e.g. editorial pick). Max one per table. */
  isTopPick?: boolean;
  /** Values keyed by ComparisonColumn.key — must cover every column */
  values: Record<string, CellValue>;
}

export interface ComparisonColumn {
  /** Must match keys in ComparisonProduct.values */
  key: string;
  label: string;
  /** Show a tooltip explaining this criterion */
  tooltip?: string;
}

export interface ProductComparisonTableProps {
  /** Table caption / heading */
  title: string;
  products: ComparisonProduct[];
  columns: ComparisonColumn[];
  /** Override the default FTC note */
  disclosureNote?: string;
  /** Hide the FTC disclosure row. Not recommended. Default: false */
  hideDisclosure?: boolean;
  /** Show star ratings row. Default: true */
  showRatings?: boolean;
  /** Show price row. Default: true */
  showPrices?: boolean;
  /** Show CTA button row. Default: true */
  showCTA?: boolean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  const empty = 5 - full - (partial > 0 ? 1 : 0);

  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
      {partial > 0 && (
        <span className="relative inline-block w-3.5 h-3.5" aria-hidden="true">
          <Star className="absolute inset-0 w-3.5 h-3.5 text-gray-300" />
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partial * 100}%` }}
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="w-3.5 h-3.5 text-gray-300" aria-hidden="true" />
      ))}
      <span className="ml-1 text-xs text-gray-600 font-medium">{rating.toFixed(1)}</span>
    </span>
  );
}

function CellRenderer({ value }: { value: CellValue }) {
  if (value === null) {
    return (
      <span className="text-gray-400" aria-label="Not applicable">
        <Minus className="w-4 h-4 mx-auto" aria-hidden="true" />
      </span>
    );
  }
  if (value === true) {
    return (
      <span className="flex justify-center" aria-label="Yes">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="flex justify-center" aria-label="No">
        <XCircle className="w-5 h-5 text-red-400" aria-hidden="true" />
      </span>
    );
  }
  if (typeof value === 'object') {
    return (
      <span className="text-sm text-gray-800">
        {value.text}
        {value.sub && (
          <span className="block text-xs text-gray-500 mt-0.5">{value.sub}</span>
        )}
      </span>
    );
  }
  return <span className="text-sm text-gray-800">{value}</span>;
}

// ─── Component ────────────────────────────────────────────────────────────────

const DEFAULT_DISCLOSURE =
  'This table contains affiliate links. ThriveHealth360 may earn a commission if you purchase through these links, at no additional cost to you. Our editorial ratings are independent of affiliate relationships. See our full Affiliate Disclosure.';

export function ProductComparisonTable({
  title,
  products,
  columns,
  disclosureNote = DEFAULT_DISCLOSURE,
  hideDisclosure = false,
  showRatings = true,
  showPrices = true,
  showCTA = true,
}: ProductComparisonTableProps) {
  if (products.length === 0 || columns.length === 0) return null;

  return (
    <div className="my-10">
      {/* Section heading */}
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>

      {/* FTC disclosure — above the table so it's seen before any CTA */}
      {!hideDisclosure && (
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          <span className="font-semibold text-gray-600">Affiliate disclosure: </span>
          {disclosureNote}
        </p>
      )}

      {/* Scrollable wrapper for narrow viewports */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse text-left" aria-label={title}>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {/* Criterion label column */}
              <th
                scope="col"
                className="py-3 px-4 text-xs font-bold text-gray-500 uppercase tracking-wide w-36 sticky left-0 bg-gray-50 z-10"
              >
                Criteria
              </th>

              {/* One column per product */}
              {products.map((product) => (
                <th
                  key={product.id}
                  scope="col"
                  className={`py-3 px-4 text-center min-w-[160px] relative ${
                    product.isTopPick
                      ? 'bg-emerald-50 border-x-2 border-emerald-400'
                      : ''
                  }`}
                >
                  {product.isTopPick && (
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-emerald-600 text-white text-xs font-bold px-3 py-0.5 rounded-b-md whitespace-nowrap">
                      <Award className="w-3 h-3" aria-hidden="true" />
                      Our Pick
                    </span>
                  )}

                  {/* Product image */}
                  {product.imageSrc ? (
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt ?? product.name}
                      className="w-16 h-16 object-contain mx-auto mb-2 mt-4 rounded"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded bg-gray-100 mx-auto mb-2 mt-4 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="text-gray-400 text-xs text-center leading-tight px-1">
                        {product.name}
                      </span>
                    </div>
                  )}

                  <span className="block text-sm font-bold text-gray-900 leading-snug">
                    {product.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {/* ── Star ratings row ── */}
            {showRatings && (
              <tr className="hover:bg-gray-50 transition-colors">
                <th
                  scope="row"
                  className="py-3 px-4 text-xs font-semibold text-gray-600 sticky left-0 bg-white hover:bg-gray-50"
                >
                  Rating
                </th>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className={`py-3 px-4 text-center ${
                      product.isTopPick ? 'bg-emerald-50/50 border-x-2 border-emerald-400' : ''
                    }`}
                  >
                    {product.rating != null ? (
                      <StarRating rating={product.rating} />
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </td>
                ))}
              </tr>
            )}

            {/* ── Price row ── */}
            {showPrices && (
              <tr className="hover:bg-gray-50 transition-colors">
                <th
                  scope="row"
                  className="py-3 px-4 text-xs font-semibold text-gray-600 sticky left-0 bg-white hover:bg-gray-50"
                >
                  Price
                </th>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className={`py-3 px-4 text-center ${
                      product.isTopPick ? 'bg-emerald-50/50 border-x-2 border-emerald-400' : ''
                    }`}
                  >
                    <span className="text-sm font-semibold text-gray-800">
                      {product.price ?? '—'}
                    </span>
                  </td>
                ))}
              </tr>
            )}

            {/* ── Dynamic criteria rows ── */}
            {columns.map((col) => (
              <tr key={col.key} className="hover:bg-gray-50 transition-colors">
                <th
                  scope="row"
                  className="py-3 px-4 text-xs font-semibold text-gray-600 sticky left-0 bg-white hover:bg-gray-50"
                  title={col.tooltip}
                >
                  {col.label}
                  {col.tooltip && (
                    <span className="ml-1 text-gray-400 cursor-help" aria-hidden="true">ⓘ</span>
                  )}
                </th>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className={`py-3 px-4 text-center ${
                      product.isTopPick ? 'bg-emerald-50/50 border-x-2 border-emerald-400' : ''
                    }`}
                  >
                    <CellRenderer value={product.values[col.key] ?? null} />
                  </td>
                ))}
              </tr>
            ))}

            {/* ── CTA row ── */}
            {showCTA && (
              <tr className="bg-gray-50 border-t-2 border-gray-200">
                <th
                  scope="row"
                  className="py-4 px-4 text-xs font-semibold text-gray-600 sticky left-0 bg-gray-50"
                >
                  {/* intentionally blank */}
                </th>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className={`py-4 px-4 text-center ${
                      product.isTopPick ? 'bg-emerald-50 border-x-2 border-b-2 border-emerald-400' : ''
                    }`}
                  >
                    {product.affiliateUrl ? (
                      <a
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className={`inline-flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-lg transition whitespace-nowrap ${
                          product.isTopPick
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'bg-gray-800 hover:bg-gray-900 text-white'
                        }`}
                        aria-label={`${product.ctaLabel ?? 'Check Price'} for ${product.name} (opens affiliate link)`}
                      >
                        {product.ctaLabel ?? 'Check Price'}
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400">Not available</span>
                    )}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom note — reinforces no-endorsement stance per compliance rules */}
      <p className="mt-3 text-xs text-gray-400 leading-relaxed">
        Ratings reflect editorial assessment based on published research, ingredient
        transparency, and third-party testing data. Individual results may vary.
        These statements have not been evaluated by the FDA. These products are not
        intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}