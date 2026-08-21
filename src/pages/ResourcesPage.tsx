import React from 'react';

export const ResourcesPage: React.FC = () => {
  const categories = [
    {
      title: "Metabolic Tracking Tools",
      description: "Precision hardware to monitor your glucose baselines and postprandial trends.",
      items: [
        { name: "Continuous Glucose Monitors (CGMs)", desc: "Advanced subcutaneous sensors for real-time glycemic data visibility." },
        { name: "Premium Blood Glucose Meters", desc: "Highly accurate, clinical-grade fingerstick kits for daily tracking stability." }
      ]
    },
    {
      title: "Evidence-Based Nutritional Guides",
      description: "Deep-dive frameworks designed to target and restore insulin sensitivity naturally.",
      items: [
        { name: "Glycemic Index Deep-Dive Planners", desc: "Comprehensive companion maps for structuring low-glycemic, high-satiety meals." },
        { name: "The Metabolic Reversal Blueprint", desc: "Our signature step-by-step curriculum for managing chronic insulin spikes." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Vetted Tools & Resources
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our curated collective of clinically supported tracking equipment, literary foundations, and health optimization solutions.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="space-y-10">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950 mb-1">{category.title}</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-500 transition-colors group">
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-sm sm:text-base">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Dual-export safety buffer guarantees App.tsx compiles correctly either way
export default ResourcesPage;