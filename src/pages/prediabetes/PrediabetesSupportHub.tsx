// src/pages/prediabetes/PrediabetesSupportHub.tsx
import React from 'react';
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
  TrendingDown
} from 'lucide-react';

export default function PrediabetesSupportHub() {
  
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

            {/* Left - Text */}
            <div className="order-2 md:order-1">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Prediabetes Hub
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Prediabetes Support
              </h1>

              <h2 className="text-xl text-gray-700 mb-6 font-semibold">
                Your Complete Guide to Reversing Prediabetes Naturally
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Prediabetes is reversible. Follow our step-by-step roadmap to lower blood sugar, improve insulin sensitivity, and prevent Type 2 Diabetes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('reversal-path')} 
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex overflow-x-auto space-x-6 py-4">
            {[
              { title: 'What is Prediabetes?', id: 'what-is' },
              { title: 'The 6 Pillars', id: 'six-pillars' },
              { title: 'Your Reversal Path', id: 'reversal-path' },
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
      <section id="what-is" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Prediabetes?</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Prediabetes is a condition where your blood sugar is higher than normal, but not yet high enough to be Type 2 Diabetes. It's your body's warning signal — and the good news is that it's <strong>completely reversible</strong> with the right approach.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Fasting Glucose</p>
              <p className="text-2xl font-bold text-emerald-600">100–125 mg/dL</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">A1C Level</p>
              <p className="text-2xl font-bold text-emerald-600">5.7%–6.4%</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Post-Meal Glucose</p>
              <p className="text-2xl font-bold text-emerald-600">140–199 mg/dL</p>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <p className="text-lg text-gray-800 font-semibold">
              💡 The most important fact: 80% of prediabetes cases can be reversed within 6–12 months with lifestyle changes.
            </p>
          </div>
        </div>
      </section>

      {/* THE 6 PILLARS */}
      <section id="six-pillars" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">The 6 Pillars of Prediabetes Reversal</h2>
            <p className="text-gray-600 mt-2">These foundational elements work together to restore your metabolic health.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Know Your Signs',
                desc: 'Learn the early warning signals of prediabetes so you can take action before it progresses.',
              },
              {
                icon: Apple,
                title: 'Master Your Diet',
                desc: 'Switch from refined carbs to fiber-rich foods and prioritize protein at every meal.',
              },
              {
                icon: Move,
                title: 'Move Your Body',
                desc: 'Exercise is the fastest way to improve insulin sensitivity and lower glucose.',
              },
              {
                icon: Moon,
                title: 'Optimize Sleep & Stress',
                desc: 'Poor sleep and chronic stress directly raise blood sugar levels.',
              },
              {
                icon: BarChart3,
                title: 'Track Your Progress',
                desc: 'Monitor glucose levels to see real results and stay motivated.',
              },
              {
                icon: Pill,
                title: 'Add Supplement Support',
                desc: 'Evidence-based supplements can accelerate your recovery when paired with lifestyle changes.',
              },
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR PREDIABETES REVERSAL PATH */}
      <section id="reversal-path" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Your Prediabetes Reversal Path</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Start with Step 1 and follow the roadmap. Each step builds on the previous one to create lasting metabolic change.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/prediabetes-signs" className="group bg-white border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg hover:border-emerald-600 transition">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                Step 1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Know Your Signs</h3>
              <p className="text-gray-600 mb-4">Spot the early warning signs of prediabetes and understand what your body is telling you.</p>
              <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700">
                Start Here <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link to="/reverse-prediabetes" className="group bg-white border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg hover:border-emerald-600 transition">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                Step 2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reverse It</h3>
              <p className="text-gray-600 mb-4">Proven strategies to lower blood sugar, improve insulin sensitivity, and reverse prediabetes.</p>
              <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700">
                Learn How <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link to="/prediabetes-diet" className="group bg-white border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg hover:border-emerald-600 transition">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                Step 3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Master Your Diet</h3>
              <p className="text-gray-600 mb-4">Complete food guide, meal plans, and recipes that stabilize blood sugar naturally.</p>
              <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700">
                View Recipes <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link to="/prediabetes-exercise" className="group bg-white border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg hover:border-emerald-600 transition">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                Step 4
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Move Your Body</h3>
              <p className="text-gray-600 mb-4">Simple, proven exercises that improve insulin sensitivity faster than diet alone.</p>
              <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700">
                See Workouts <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BUILD YOUR KNOWLEDGE FOUNDATION */}
      <section id="resources" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your Knowledge Foundation</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Understanding the mechanisms behind prediabetes helps you make better decisions. Explore these complementary guides to deepen your knowledge and create a personalized reversal plan.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/insulin-resistance-management" className="group block bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
              <Heart className="w-10 h-10 text-emerald-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Insulin Resistance Management</h3>
              <p className="text-gray-600 text-sm mb-4">Learn WHY your body stopped responding to insulin — and how to fix it. This is the root cause of prediabetes.</p>
              <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                Read Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/natural-blood-sugar" className="group block bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
              <Apple className="w-10 h-10 text-emerald-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Natural Blood Sugar</h3>
              <p className="text-gray-600 text-sm mb-4">Discover which foods and herbs actively support healthy glucose levels. Learn what your body thrives on.</p>
              <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/glucose-monitoring-tools" className="group block bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
              <BarChart3 className="w-10 h-10 text-emerald-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Glucose Monitoring Tools</h3>
              <p className="text-gray-600 text-sm mb-4">See your progress in real-time with the right tools. Track what works best for your unique body.</p>
              <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                View Tools <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <TrendingDown className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Reverse Prediabetes?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Start with Step 1 — know your signs and understand what's happening in your body.
          </p>
          <Link to="/prediabetes-signs" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold px-8 py-4 rounded-lg hover:bg-emerald-50 transition shadow-lg">
            Begin Your Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}