import React, { useState } from 'react';

interface Supplement {
  name: string;
  category: string;
  primaryBenefit: string;
  clinicalEvidence: string;
  dosage: string;
  rating: string;
}

export const SupplementComparison: React.FC = () => {
  const supplements: Supplement[] = [
    {
      name: "Berberine HCL",
      category: "AMPK Activator",
      primaryBenefit: "Supports fasting glucose levels & insulin sensitivity.",
      clinicalEvidence: "High (comparable to baseline standard interventions in clinical trials).",
      dosage: "500 mg, 2-3 times daily before meals",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Alpha-Lipoic Acid (ALA)",
      category: "Mitochondrial Antioxidant",
      primaryBenefit: "Aids in peripheral glucose utilization & nerve comfort.",
      clinicalEvidence: "Strong (well-documented for oxidative stress mitigation).",
      dosage: "300 - 600 mg daily",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Chromium Picolinate",
      category: "Trace Mineral",
      primaryBenefit: "Enhances the intracellular signaling efficiency of insulin.",
      clinicalEvidence: "Moderate (highly effective for correcting trace deficiencies).",
      dosage: "200 - 500 mcg daily",
      rating: "⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
            Data Matrix
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mt-3">
            Metabolic Supplement Comparison Engine
          </h1>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Side-by-side breakdown of evidence-based ingredients, standard dosages, and verified tracking markers.
          </p>
        </div>

        {/* Desktop Comparison Table / Mobile Stack */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Supplement</th>
                  <th className="p-4 sm:p-5">Mechanism</th>
                  <th className="p-4 sm:p-5">Primary Focus</th>
                  <th className="p-4 sm:p-5">Clinical Evidence</th>
                  <th className="p-4 sm:p-5">Typical Serving</th>
                  <th className="p-4 sm:p-5 text-center">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                {supplements.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{item.name}</td>
                    <td className="p-4 sm:p-5"><span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 text-[11px] font-medium">{item.category}</span></td>
                    <td className="p-4 sm:p-5">{item.primaryBenefit}</td>
                    <td className="p-4 sm:p-5 text-slate-600 text-xs">{item.clinicalEvidence}</td>
                    <td className="p-4 sm:p-5 font-mono text-xs text-slate-600">{item.dosage}</td>
                    <td className="p-4 sm:p-5 text-center whitespace-nowrap">{item.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Defensive dual-export strategy protects App.tsx out of the box
export default SupplementComparison;