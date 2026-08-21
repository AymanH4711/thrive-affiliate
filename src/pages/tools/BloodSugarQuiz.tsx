import React, { useState } from 'react';

export const BloodSugarQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-600 p-8 text-white text-center">
          <span className="text-xs font-bold uppercase tracking-wider bg-emerald-700 px-3 py-1 rounded-full">
            Interactive Assessment
          </span>
          <h1 className="text-3xl font-bold mt-3">Blood Sugar & Metabolic Health Quiz</h1>
          <p className="text-emerald-100 text-sm mt-2">
            Evaluate your daily energy patterns, cravings, and lifestyle markers.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="my-6">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Discover Your Metabolic Signature</h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Answer a few simple questions about your routine to get a personalized breakdown of your metabolic trends and natural support strategies.
            </p>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <button 
              onClick={() => alert("Quiz functionality initializing...")}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-md shadow-emerald-600/10"
            >
              Start Free Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting both ways completely protects App.tsx from crashing!
export default BloodSugarQuiz;