// src/components/clinical/CitationList.tsx
//
// Renders the citations array for any ThriveHealth360 article page.
// Status values align with the /cite-audit → /cite-clean workflow
// defined in the ThriveHealth360 Prompt & Skill Library.
//
// Usage:
//   import { CitationList } from '@/components/clinical/CitationList';
//   <CitationList citations={citations} />

import { ExternalLink, AlertTriangle, CheckCircle2, XCircle, Info } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type CitationStatus =
  | 'verified'       // ✅ VERIFIED — in array, cited in body, DOI/PMID confirmed
  | 'bridged'        // ✅ BRIDGED — orphan resolved via /cite-bridge
  | 'confirmed'      // ✅ CONFIRMED — non-PubMed source, URL verified
  | 'unverified'     // ⚠️ UNVERIFIED — DOI/PMID not confirmed; pending block shown
  | 'orphan'         // ⚠️ ORPHAN — in array but not cited in body; run /cite-bridge
  | 'citation-error' // ❌ CITATION ERROR — DOI resolves to a different paper; manual fix required
  | 'pending';       // ⏳ PENDING — awaiting /cite-fill or author review

export interface Citation {
  /** Short author + year label used in body text, e.g. "Knowler et al. (2002)" */
  id: string;
  authors: string;
  year: number | string;
  title: string;
  journal: string;
  /** Full DOI string, e.g. "10.1056/NEJMoa012512" */
  doi?: string;
  /** 8-digit PubMed ID */
  pmid?: string;
  /** URL for non-PubMed sources */
  url?: string;
  status: CitationStatus;
  /** Optional note — required for non-PubMed sources per the skill library */
  note?: string;
}

// ─── Status config ────────────────────────────────────────────────────────────

const statusConfig: Record<
  CitationStatus,
  {
    label: string;
    icon: typeof CheckCircle2;
    iconColor: string;
    badgeBg: string;
    badgeText: string;
    rowBg: string;
  }
> = {
  verified: {
    label: '✅ VERIFIED',
    icon: CheckCircle2,
    iconColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    rowBg: '',
  },
  bridged: {
    label: '✅ BRIDGED',
    icon: CheckCircle2,
    iconColor: 'text-teal-600',
    badgeBg: 'bg-teal-100',
    badgeText: 'text-teal-800',
    rowBg: '',
  },
  confirmed: {
    label: '✅ CONFIRMED',
    icon: CheckCircle2,
    iconColor: 'text-blue-600',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    rowBg: '',
  },
  unverified: {
    label: '⚠️ UNVERIFIED',
    icon: AlertTriangle,
    iconColor: 'text-amber-600',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    rowBg: 'bg-amber-50',
  },
  orphan: {
    label: '⚠️ ORPHAN',
    icon: AlertTriangle,
    iconColor: 'text-orange-600',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-800',
    rowBg: 'bg-orange-50',
  },
  'citation-error': {
    label: '❌ CITATION ERROR',
    icon: XCircle,
    iconColor: 'text-red-600',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    rowBg: 'bg-red-50',
  },
  pending: {
    label: '⏳ PENDING',
    icon: Info,
    iconColor: 'text-gray-500',
    badgeBg: 'bg-gray-100',
    badgeText: 'text-gray-700',
    rowBg: 'bg-gray-50',
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildUrl(citation: Citation): string | null {
  if (citation.doi) return `https://doi.org/${citation.doi}`;
  if (citation.pmid) return `https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}/`;
  if (citation.url) return citation.url;
  return null;
}

function buildIdentifierLabel(citation: Citation): string {
  if (citation.doi) return `DOI: ${citation.doi}`;
  if (citation.pmid) return `PMID: ${citation.pmid}`;
  return 'No DOI/PMID';
}

// ─── Single citation row ──────────────────────────────────────────────────────

function CitationRow({ citation, index }: { citation: Citation; index: number }) {
  const cfg = statusConfig[citation.status];
  const StatusIcon = cfg.icon;
  const href = buildUrl(citation);
  const identifierLabel = buildIdentifierLabel(citation);
  const isUnverified = citation.status === 'unverified' || citation.status === 'orphan' || citation.status === 'pending';

  return (
    <div
      className={`ref-item ${isUnverified ? 'unverified' : ''}`}
      id={`ref-${citation.id.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <span className="ref-num">{index + 1}.</span>

      <div className="ref-content">
        <span className="ref-authors">{citation.authors} ({citation.year}).</span>{' '}
        <span className="ref-title-link">{citation.title}</span>{' '}
        <span className="ref-journal">{citation.journal}.</span>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline transition"
              aria-label={`Open ${identifierLabel} in new tab`}
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              {identifierLabel}
            </a>
          ) : (
            <span className="text-xs text-gray-500">{identifierLabel}</span>
          )}

          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.badgeBg} ${cfg.badgeText}`}
          >
            <StatusIcon className={`w-3 h-3 ${cfg.iconColor}`} aria-hidden="true" />
            {cfg.label}
          </span>
        </div>

        {citation.note && (
          <p className="mt-1.5 text-xs text-gray-500 italic">{citation.note}</p>
        )}

        {citation.status === 'citation-error' && (
          <p className="mt-2 text-xs text-red-700 font-medium">
            DOI resolves to a different paper. Author must supply the correct DOI manually.
            Do not publish until resolved.
          </p>
        )}

        {citation.status === 'orphan' && (
          <p className="mt-2 text-xs text-orange-700 font-medium">
            In citations array but not cited in article body. Run{' '}
            <code className="bg-orange-100 px-1 rounded">/cite-bridge {citation.id}</code>{' '}
            or remove this entry.
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Summary banner ───────────────────────────────────────────────────────────

function CitationSummaryBanner({ citations }: { citations: Citation[] }) {
  const verified = citations.filter(
    (c) => c.status === 'verified' || c.status === 'bridged' || c.status === 'confirmed'
  ).length;
  const warnings = citations.filter(
    (c) => c.status === 'unverified' || c.status === 'orphan' || c.status === 'pending'
  ).length;
  const errors = citations.filter((c) => c.status === 'citation-error').length;

  const allGreen = warnings === 0 && errors === 0;

  return (
    <div
      className={`flex flex-wrap items-center gap-4 px-5 py-3 rounded-lg text-sm font-medium mb-6 ${
        allGreen
          ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
          : 'bg-amber-50 border border-amber-200 text-amber-800'
      }`}
      role="status"
      aria-live="polite"
    >
      <span>
        {allGreen ? '✅ READY TO PUBLISH' : '⚠️ NOT READY — resolve issues below'}
      </span>
      <span className="text-emerald-700">✅ {verified} verified</span>
      {warnings > 0 && <span className="text-amber-700">⚠️ {warnings} pending</span>}
      {errors > 0 && <span className="text-red-700">❌ {errors} error{errors > 1 ? 's' : ''}</span>}
      <span className="text-gray-500 font-normal">{citations.length} total references</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface CitationListProps {
  citations: Citation[];
  /** Show the cite-audit status summary banner. Default: true */
  showStatusBanner?: boolean;
  /** Section heading text. Default: "References" */
  heading?: string;
}

export function CitationList({
  citations,
  showStatusBanner = true,
  heading = 'References',
}: CitationListProps) {
  if (citations.length === 0) return null;

  return (
    <section
      aria-labelledby="citation-list-heading"
      className="references-section"
    >
      <h2
        id="citation-list-heading"
        className="text-xl font-bold text-gray-900 mb-1"
      >
        {heading}
      </h2>

      <p className="ref-intro">
        {showStatusBanner ? 'READY TO PUBLISH' : 'REFERENCES'}
      </p>

      {showStatusBanner && <CitationSummaryBanner citations={citations} />}

      <div className="ref-list">
        {citations.map((citation, i) => (
          <CitationRow key={citation.id} citation={citation} index={i} />
        ))}
      </div>

      <p className="mt-6 text-xs text-gray-400 leading-relaxed">
        Citation status managed via the ThriveHealth360 /cite-audit → /cite-clean workflow.
        Do not publish until all entries show ✅ VERIFIED, ✅ BRIDGED, or ✅ CONFIRMED.
      </p>
    </section>
  );
}