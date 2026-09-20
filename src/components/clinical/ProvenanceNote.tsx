import React from "react";
import { Heart } from "lucide-react";

/**
 * ProvenanceNote
 * --------------
 * The footer trust line: "every claim links to a source, no named medical
 * reviewer, last updated <date>." One shared component so the wording lives
 * in one place instead of being hand-copied (and drifting) across articles.
 *
 * `lastUpdated` is a pre-formatted display string, deliberately NOT derived
 * here — each article passes whatever date it already treats as its own
 * "last updated" value, so rolling this out to an article changes only its
 * wording, never its date.
 */

interface ProvenanceNoteProps {
  lastUpdated: string;
}

export function ProvenanceNote({ lastUpdated }: ProvenanceNoteProps) {
  return (
    <div className="mt-6 bg-gray-100 border border-gray-300 rounded-lg p-4">
      <p className="text-sm text-gray-700 flex items-center gap-2">
        <Heart className="w-5 h-5 text-rose-500" />
        <strong>
          Every claim in this article links to a published source, retrieved from PubMed and
          CrossRef and listed in full above. Last updated {lastUpdated}. No named medical
          reviewer — see our editorial policy.
        </strong>
      </p>
    </div>
  );
}
