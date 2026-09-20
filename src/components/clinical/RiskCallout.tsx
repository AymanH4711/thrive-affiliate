import React from "react";
import { AlertCircle } from "lucide-react";

/**
 * RiskCallout
 * -----------
 * The top-of-article warning box. Content is condition-specific (which
 * drug classes, which mechanism, what to do) and is supplied per article
 * by the generator via children — this component only standardizes the
 * markup (icon, color, heading, layout) so every article gets the same
 * visual treatment without duplicating the wrapper JSX each time.
 *
 * Kept as a separate component from MedicalDisclaimer on purpose: this one
 * has no "product" variant and no FDA/DSHEA language, so there's no path
 * by which supplement-label phrasing can end up in a diet or lifestyle
 * article's top warning.
 */

interface RiskCalloutProps {
  title?: string;
  children: React.ReactNode;
}

export function RiskCallout({ title = "⚠️ Medical Disclaimer", children }: RiskCalloutProps) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
      <div className="flex gap-4">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-amber-900 mb-2">{title}</h3>
          <p className="text-sm text-amber-800">{children}</p>
        </div>
      </div>
    </div>
  );
}
