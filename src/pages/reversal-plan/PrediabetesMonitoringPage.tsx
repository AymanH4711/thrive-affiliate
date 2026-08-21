import React from 'react';
import { Link } from 'react-router-dom';

export const PrediabetesMonitoringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-8 md:p-12 text-white">
          <span className="text-xs font-bold uppercase tracking-wider bg-teal-700/50 px-3 py-1 rounded-full border border-teal-400/30">
            Reversal Framework
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 tracking-tight">
            The Prediabetes Monitoring & Tracking Blueprint
          </h1>
          <p className="text-teal-100 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
            Track the right metabolic markers, spot trends early, and deploy proactive lifestyle interventions to restore insulin sensitivity.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-8">
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-amber-900 mb-2">Why Active Monitoring Matters</h2>
            <p className="text-amber-800 text-sm leading-relaxed">
              Prediabetes is an early structural warning sign, but it is entirely reversible. By tracking fasting glucose, postprandial spikes, and lifestyle habits daily, you dismantle insulin resistance before it becomes chronic.
            </p>
          </section>

          {/* Key Metrics Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Core Metrics to Track</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 rounded-xl hover:border-emerald-500 transition shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase">Marker 01</span>
                <h4 className="font-bold text-slate-800 mt-1 mb-2">Fasting Blood Glucose</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Measured immediately upon waking. Target threshold for prediabetes reversal is safely tracking back below 100 mg/dL (5.6 mmol/L).
                </p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl hover:border-emerald-500 transition shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase">Marker 02</span>
                <h4 className="font-bold text-slate-800 mt-1 mb-2">Postprandial Response</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Checked 1 to 2 hours after a meal to observe how efficiently your body processes specific carbohydrate loads.
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-slate-500 text-xs">
              Always coordinate major dietary or diagnostic changes with a licensed healthcare provider.
            </p>
            <Link 
              to="/blog"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition"
            >
              Explore Educational Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Defensive dual-export strategy protects App.tsx regardless of its import styling
export default PrediabetesMonitoringPage;