import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCard {
  title: string;
  description: string;
  path: string;
  badge: string;
  colorClass: string;
}

export const SupplementsHub: React.FC = () => {
  const categories: CategoryCard[] = [
    {
      title: "Blood Sugar Support",
      description: "Clinically backed herbal formulations and compound isolates targeting daily glycemic stability.",
      path: "/supplements/blood-sugar-support",
      badge: "Glycemic Control",
      colorClass: "border-emerald-100 hover:border-emerald-500 text-emerald-700 bg-emerald-50/30"
    },
    {
      title: "Insulin Sensitivity",
      description: "Advanced nutrient profiles engineered to support intracellular cellular signaling and metabolic efficiency.",
      path: "/supplements/insulin-sensitivity",
      badge: "Cellular Health",
      colorClass: "border-blue-100 hover:border-blue-500 text-blue-700 bg-blue-50/30"
    },
    {
      title: "Metabolic Weight Management",
      description: "Natural compounds optimized to support clean energy expenditure, healthy lipid profiles, and metabolic balance.",
      path: "/supplements/metabolic-weight",
      badge: "Adipose & Lipids",
      colorClass: "border-purple-100 hover:border-purple-500 text-purple-700 bg-purple-50/30"
    },
    {
      title: "General Metabolic Wellness",
      description: "Essential foundational vitamins, minerals, and organic antioxidants for daily energy homeostasis.",
      path: "/supplements/general-wellness",
      badge: "Foundational Care",
      colorClass: "border-slate-100 hover:border-slate-500 text-slate-700 bg-slate-50/30"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
            Product Directory
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mt-3">
            The Supplement Evaluation Hub
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our deeply researched breakdown of ingredients, therapeutic target windows, and third-party verified solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between transition-all duration-200 group ${cat.colorClass}`}
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white border rounded-md shadow-sm">
                  {cat.badge}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-4 mb-2 group-hover:text-slate-950">
                  {cat.title}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>
              
              <div>
                <Link 
                  to={cat.path}
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-sm w-full sm:w-auto"
                >
                  View Verified Formulations
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Defensive dual-export setup guarantees App.tsx boots correctly either way
export default SupplementsHub;