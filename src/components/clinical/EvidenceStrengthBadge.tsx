// src/components/clinical/EvidenceStrengthBadge.tsx
//
// Inline badge showing the evidence strength level for a claim or step.
// Level values are identical to AdvisorModeBox's `evidence` prop —
// the two components are always in sync.
//
// Usage:
//   import { EvidenceStrengthBadge } from '@/components/clinical/EvidenceStrengthBadge';
//   <EvidenceStrengthBadge level="strong" />
//   <EvidenceStrengthBadge level="moderate" showTooltip />

import { ShieldCheck, TrendingUp, AlertTriangle, FlaskConical } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type EvidenceLevel = 'strong' | 'moderate' | 'limited' | 'emerging';

export interface EvidenceStrengthBadgeProps {
  level: EvidenceLevel;
  /** Show a plain-English tooltip on hover explaining what the level means. Default: false */
  showTooltip?: boolean;
  /** Render as a larger pill (e.g. for section headers). Default: false */
  large?: boolean;
}

// ─── Level config ─────────────────────────────────────────────────────────────

const levelConfig: Record<
  EvidenceLevel,
  {
    label: string;
    tooltip: string;
    bg: string;
    text: string;
    border: string;
    icon: typeof ShieldCheck;
  }
> = {
  strong: {
    label: 'Strong Evidence',
    tooltip:
      'Supported by multiple large-scale RCTs or systematic reviews with consistent findings.',
    bg: 'bg-blue-50',
    text: 'text-blue-800',
    border: 'border-blue-300',
    icon: ShieldCheck,
  },
  moderate: {
    label: 'Moderate Evidence',
    tooltip:
      'Supported by well-designed observational studies or smaller RCTs. Further research may refine conclusions.',
    bg: 'bg-indigo-50',
    text: 'text-indigo-800',
    border: 'border-indigo-300',
    icon: TrendingUp,
  },
  limited: {
    label: 'Limited Evidence',
    tooltip:
      'Based on preliminary studies, case reports, or expert opinion. Interpret with caution.',
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    border: 'border-amber-300',
    icon: AlertTriangle,
  },
  emerging: {
    label: 'Emerging Evidence',
    tooltip:
      'Early-stage research; findings are promising but not yet replicated at scale.',
    bg: 'bg-purple-50',
    text: 'text-purple-800',
    border: 'border-purple-300',
    icon: FlaskConical,
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function EvidenceStrengthBadge({
  level,
  showTooltip = false,
  large = false,
}: EvidenceStrengthBadgeProps) {
  const cfg = levelConfig[level];
  const Icon = cfg.icon;

  const sizeClasses = large
    ? 'text-sm px-3 py-1.5 gap-1.5'
    : 'text-xs px-2.5 py-1 gap-1';

  const iconSize = large ? 'w-4 h-4' : 'w-3.5 h-3.5';

  const badge = (
    <span
      className={`
        inline-flex items-center font-semibold rounded-full border
        ${sizeClasses}
        ${cfg.bg} ${cfg.text} ${cfg.border}
      `}
      aria-label={`Evidence level: ${cfg.label}`}
    >
      <Icon className={`${iconSize} flex-shrink-0`} aria-hidden="true" />
      {cfg.label}
    </span>
  );

  if (!showTooltip) return badge;

  // Tooltip wrapper — pure CSS, no JS dependency
  return (
    <span className="relative inline-flex group">
      {badge}
      <span
        role="tooltip"
        className="
          pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          w-64 rounded-lg bg-gray-900 text-white text-xs leading-relaxed px-3 py-2
          opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
          transition-opacity duration-150 z-50 shadow-lg
        "
      >
        {cfg.tooltip}
        {/* Arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
      </span>
    </span>
  );
}