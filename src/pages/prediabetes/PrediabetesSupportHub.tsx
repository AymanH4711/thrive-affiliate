// src/pages/prediabetes-support.tsx
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Apple, 
  CheckCircle, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  Move, 
  Moon, 
  Pill,
  Search
} from 'lucide-react';

export default function PrediabetesSupport() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left */}
            <div className="order-2 md:order-1">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Prediabetes Hub
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Prediabetes Support
              </h1>

              {/* Improved SEO heading */}
              <h2 className="text-xl text-gray-700 mb-6 font-semibold">
                Your Complete Guide to Reversing Prediabetes Naturally
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Prediabetes is reversible. Follow our step-by-step roadmap to lower blood sugar, improve insulin sensitivity, and prevent Type 2 Diabetes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('action-plan')} 
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button 
                  onClick={() => scrollToSection('what-is')} 
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto border-4 border-white">
                <img 
                  src="/images/prediabetes-hero.webp" 
                  alt="Prediabetes support and blood sugar management"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex overflow-x-auto space-x-6 py-4">
            {[
              { title: 'What is Prediabetes?', id: 'what-is' },
              { title: 'The 6-Step Plan', id: 'action-plan' },
              { title: 'Resources', id: 'resources' },
            ].map((item, i) => (
              <button 
                key={i} 
                onClick={() => scrollToSection(item.id)} 
                className="text-emerald-600 hover:text-emerald-800 font-semibold text-sm whitespace-nowrap transition"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT IS PREDIABETES */}
      {/* ... No changes needed ... */}

      {/* ACTION PLAN (Updated link path for Step 5 below) */}
      {/* ... */}
      
      {/* Step 5: Monitoring */}
      <Link to="/glucose-monitoring" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
          <BarChart3 className="w-6 h-6" />
        </div>
        <div className="mb-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 5</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1">Track Progress</h3>
        </div>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">Use glucometers to see what foods trigger you. Data drives results.</p>
        <span className="text-emerald-600 font-bold text-sm flex items-center group-hover:text-emerald-700">
          Compare Monitors <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
        </span>
      </Link>

      {/* ... Other sections unchanged except for color harmonization ... */}

    </main>
  );
}
