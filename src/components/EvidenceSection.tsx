// src/components/EvidenceSection.tsx
// Reusable component to display citations and entities for any pillar

import React from 'react';
import { useAuthorityPack } from '../hooks/useAuthorityPack';
import { ExternalLink } from 'lucide-react';

interface EvidenceSectionProps {
  pillarId: string;
  title?: string;
  maxCitations?: number;
  showEntities?: boolean;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({
  pillarId,
  title = "📚 What the Science Says",
  maxCitations = 6,
  showEntities = true
}) => {
  const pack = useAuthorityPack(pillarId);

  if (!pack) {
    console.warn(`EvidenceSection: No authority pack found for pillar: ${pillarId}`);
    return null;
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

      {/* Expert Vocabulary / Entities */}
      {showEntities && pack.entities.length > 0 && (
        <div className="mb-8 p-6 bg-emerald-50 rounded-lg border-l-4 border-emerald-600">
          <h3 className="text-lg font-bold text-emerald-900 mb-3">
            Key Scientific Concepts
          </h3>
          <p className="text-sm text-emerald-700 mb-4">
            This article covers these critical concepts that demonstrate our expertise:
          </p>
          <div className="flex flex-wrap gap-2">
            {pack.entities.map((entity, idx) => (
              <span
                key={idx}
                className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-sm font-medium"
              >
                {entity}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Citations */}
      <div className="space-y-4">
        <p className="text-gray-700 text-sm mb-4">
          This article is based on peer-reviewed clinical research. Below are the key studies cited:
        </p>
        
        {pack.citations.slice(0, maxCitations).map((citation, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded hover:bg-gray-100 transition"
          >
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">[{idx + 1}]</span>{' '}
              <span className="font-medium">{citation.authors}</span> ({citation.year}).
            </p>
            <p className="text-sm text-gray-700 mb-2">
              "<strong>{citation.title}</strong>" <em>{citation.journal}</em>
            </p>
            {citation.url && (
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-xs font-semibold"
              >
                View on PubMed
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Credibility footer */}
      <p className="text-xs text-slate-500 mt-6 pt-6 border-t border-gray-200">
        All citations are from peer-reviewed medical journals and health institutions. 
        Information is current as of January 2026.
      </p>
    </section>
  );
};

export default EvidenceSection;