// src/components/clinical/AdvisorModeBox.tsx
import { ShieldCheck, AlertTriangle, Info } from 'lucide-react';

type EvidenceLevel = 'strong' | 'moderate' | 'limited' | 'emerging';

interface AdvisorModeBoxProps {
  title: string;
  evidence: EvidenceLevel;
  summary: string;
  caveats?: string[];
}

const evidenceConfig: Record<EvidenceLevel, {
  label: string;
  bgColor: string;
  borderColor: string;
  headerBg: string;
  iconColor: string;
  labelBg: string;
  labelText: string;
  Icon: typeof ShieldCheck;
}> = {
  strong: {
    label: 'Strong Evidence',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    headerBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    labelBg: 'bg-blue-700',
    labelText: 'text-white',
    Icon: ShieldCheck,
  },
  moderate: {
    label: 'Moderate Evidence',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-300',
    headerBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
    labelBg: 'bg-indigo-600',
    labelText: 'text-white',
    Icon: Info,
  },
  limited: {
    label: 'Limited Evidence',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    headerBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    labelBg: 'bg-amber-600',
    labelText: 'text-white',
    Icon: AlertTriangle,
  },
  emerging: {
    label: 'Emerging Evidence',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    headerBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    labelBg: 'bg-purple-600',
    labelText: 'text-white',
    Icon: Info,
  },
};

export function AdvisorModeBox({ title, evidence, summary, caveats }: AdvisorModeBoxProps) {
  const config = evidenceConfig[evidence];
  const { Icon } = config;

  return (
    <div
      className={`rounded-xl border-2 ${config.borderColor} ${config.bgColor} overflow-hidden`}
      role="region"
      aria-label={`Clinical advisor box: ${title}`}
    >
      {/* Header */}
      <div className={`${config.headerBg} px-5 py-3 flex items-center gap-3`}>
        <Icon className={`w-5 h-5 flex-shrink-0 ${config.iconColor}`} aria-hidden="true" />
        <span className="font-bold text-base text-gray-900">{title}</span>
        <span
          className={`ml-auto text-xs font-bold px-2.5 py-1 rounded-full ${config.labelBg} ${config.labelText}`}
        >
          {config.label}
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        <p className="text-sm text-gray-800 leading-relaxed">{summary}</p>

        {caveats && caveats.length > 0 && (
          <div>
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
              Important Caveats
            </p>
            <ul className="space-y-1.5">
              {caveats.map((caveat, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.labelBg}`} aria-hidden="true" />
                  {caveat}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}