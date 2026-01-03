// src/pages/insulin-resistance/InsulinResistanceManagement.tsx
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Apple, 
  Dumbbell, 
  Moon, 
  Pill, 
  BarChart3, 
  Calendar, 
  ArrowRight,
  Zap,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function InsulinResistanceManagement() {
  
  // 1. Smooth Scroll Helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "headline": "Insulin Resistance Management Guide",
    "description": "Learn causes and reversal strategies for insulin resistance",
    "image": "https://thrive-health.com/images/insulin-resistance-og.png",
    "author": {
      "@type": "Organization",
      "name": "Thrive Health"
    }
  };

  return (
    <>
      <SEO
        title="Insulin Resistance Management Guide | Thrive Health"
        description="Complete guide to understanding insulin resistance. Learn the 'Lock & Key' mechanism, 6 warning signs, and the proven 3-pillar reversal protocol. Start healing."
        keywords="insulin resistance, insulin sensitivity, metabolic syndrome, how to reverse insulin resistance, PCOS"
        image="/images/insulin-resistance-og.png"
        url="/insulin-resistance-management"
        schema={schema}
      />
      <main className="min-h-screen bg-white font-sans text-gray-800">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left - Text */}
              <div className="order-2 md:order-1">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  2025 Complete Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Insulin Resistance Management
                </h1>
                <p className="text-xl text-emerald-800 font-medium mb-4">
                  The Silent Driver of Weight Gain & High Blood Sugar
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Insulin resistance is one of the most common metabolic conditions today — yet most people don't realize it's reversible. Learn the root cause and how to fix it naturally.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Updated Buttons */}
                  <button 
                    onClick={() => scrollToSection('lock-key')}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition shadow-lg"
                  >
                    The Lock & Key Problem
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link 
                    to="/reverse-prediabetes"
                    className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition"
                  >
                    How to Reverse It
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-md mx-auto">
                  <img 
                    src="/images/insulin-resistance-hero.webp" 
                    alt="Insulin resistance diagram"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEDICAL DISCLAIMER - COMPACT */}
        <section className="py-4 bg-amber-50 border-b-2 border-amber-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-amber-900 mb-1">⚠️ Medical Disclaimer</h3>
                  <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                    These statements have not been evaluated by the FDA. This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare provider before starting supplements or making health changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK NAVIGATION */}
        <div className="bg-emerald-50 border-b border-emerald-100 sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-4 text-sm font-semibold text-emerald-800 whitespace-nowrap">
              <button onClick={() => scrollToSection('lock-key')} className="hover:text-emerald-600">Lock & Key</button>
              <button onClick={() => scrollToSection('causes')} className="hover:text-emerald-600">Root Causes</button>
              <button onClick={() => scrollToSection('warning-signs')} className="hover:text-emerald-600">Warning Signs</button>
              <button onClick={() => scrollToSection('3-pillars')} className="hover:text-emerald-600">3-Pillar Reversal</button>
            </div>
          </div>
        </div>

        {/* 3. THE LOCK & KEY PROBLEM */}
        <section id="lock-key" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The "Lock & Key" Problem</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Insulin acts like a key that unlocks cells to let glucose in. Insulin resistance means your cells' "locks" become rusty—insulin can't open them efficiently anymore.
            </p>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <p className="text-emerald-900 font-semibold">
                Result: Glucose builds up in your blood while cells starve for energy. Your pancreas makes more insulin to compensate, creating a vicious cycle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-emerald-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Healthy System</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Insulin binds easily to cells</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Glucose enters quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Stable energy & blood sugar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">With Resistance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Cells ignore insulin signals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>High blood glucose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Pancreas overproduces insulin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ROOT CAUSES */}
        <section id="causes" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Root Causes of Insulin Resistance</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Insulin resistance develops from a combination of factors over time. Understanding these helps you target your reversal plan.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Excess Visceral Fat',
                  desc: 'Fat around organs releases inflammatory chemicals that block insulin signals.',
                  stat: '80% of people with insulin resistance are overweight'
                },
                {
                  title: 'Chronic Inflammation',
                  desc: 'From poor diet or stress, inflammation makes cells resistant to insulin.',
                  stat: 'Key driver in 90% of cases'
                },
                {
                  title: 'Sedentary Lifestyle',
                  desc: 'Lack of movement reduces muscle glucose uptake.',
                  stat: 'Exercise reverses this in weeks'
                },
                {
                  title: 'Poor Sleep & Stress',
                  desc: 'Raises cortisol, which directly increases resistance.',
                  stat: 'One bad night: +25% resistance'
                },
              ].map((cause, i) => (
                <div key={i} className="flex gap-4 bg-white border border-emerald-200 rounded-xl p-6">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{cause.title}</h3>
                    <p className="text-gray-700 mb-2">{cause.desc}</p>
                    <p className="text-sm text-emerald-700 font-semibold">{cause.stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WARNING SIGNS */}
        <section id="warning-signs" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6 Warning Signs You're Developing Resistance</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Insulin resistance is often silent at first. Watch for these early signals—most people have 2–3 before diagnosis.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Fatigue after meals (postprandial fatigue)',
                'Weight gain around midsection (visceral fat)',
                'Skin tags or dark patches (acanthosis nigricans)',
                'Frequent hunger or cravings',
                'High triglycerides or blood pressure',
                'PCOS or fertility issues in women',
              ].map((sign, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium">{sign}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-900 font-semibold">
                💡 Pro Tip: Get a fasting insulin test (not just glucose). Normal range: 2–25 mIU/L. Optimal: under 10 mIU/L.
              </p>
            </div>
          </div>
        </section>

        {/* 6. 3-PILLAR REVERSAL PROTOCOL */}
        <section id="3-pillars" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The 3-Pillar Reversal Protocol</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Reverse insulin resistance by targeting the root causes. This science-backed protocol can improve sensitivity by 50% in 3–6 months.
            </p>
            
            <div className="space-y-8">
              {/* Pillar 1: Nutrition */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-emerald-200">
                <div className="bg-emerald-600 px-6 py-4 flex items-center gap-3">
                  <Apple className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Pillar 1: Nutrition</h3>
                </div>
                <div className="px-6 py-6">
                  <p className="text-gray-700 mb-4">Focus on low-GI foods that don't spike insulin. Protein + fiber at every meal.</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Do This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✓ Protein-first meals</li>
                        <li>✓ High-fiber veggies</li>
                        <li>✓ Healthy fats</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Avoid This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✗ Sugary drinks</li>
                        <li>✗ Refined carbs</li>
                        <li>✗ Processed foods</li>
                      </ul>
                    </div>
                  </div>
                  <Link 
                    to="/prediabetes-diet" 
                    className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition"
                  >
                    Full Nutrition Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Pillar 2: Movement */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-orange-200">
                <div className="bg-orange-600 px-6 py-4 flex items-center gap-3">
                  <Dumbbell className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Pillar 2: Movement</h3>
                </div>
                <div className="px-6 py-6">
                  <p className="text-gray-700 mb-4">Build muscle to improve glucose uptake. Combine cardio with resistance training.</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Do This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✓ Strength training 3x/week</li>
                        <li>✓ Post-meal walks</li>
                        <li>✓ HIIT sessions</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Avoid This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✗ Prolonged sitting</li>
                        <li>✗ Overtraining</li>
                        <li>✗ No recovery</li>
                      </ul>
                    </div>
                  </div>
                  <Link 
                    to="/prediabetes-exercise" 
                    className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:text-orange-700 transition"
                  >
                    Full Exercise Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Pillar 3: Recovery */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-purple-200">
                <div className="bg-purple-600 px-6 py-4 flex items-center gap-3">
                  <Moon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Pillar 3: Recovery</h3>
                </div>
                <div className="px-6 py-6">
                  <p className="text-gray-700 mb-4">Manage stress and sleep to lower cortisol. Poor sleep worsens resistance by 25%.</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Do This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✓ 7-9 hours sleep</li>
                        <li>✓ Daily meditation</li>
                        <li>✓ Stress tracking</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Avoid This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✗ Chronic stress</li>
                        <li>✗ Poor sleep</li>
                        <li>✗ Overwork</li>
                      </ul>
                    </div>
                  </div>
                  <Link 
                    to="/prediabetes-sleep-stress" 
                    className="inline-flex items-center gap-2 text-purple-600 font-bold text-sm hover:text-purple-700 transition"
                  >
                    Full Recovery Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PROGRESS TRACKING */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Track Your Progress</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Measure these markers every 4-6 weeks to track your reversal. Most see improvements in 1-3 months.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: BarChart3, title: 'Fasting Insulin', goal: '<10 mIU/L' },
                { icon: Activity, title: 'HOMA-IR Score', goal: '<1.0' },
                { icon: Heart, title: 'A1C Level', goal: '<5.7%' },
              ].map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                    <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{metric.title}</h3>
                    <p className="text-sm text-gray-600">Target: {metric.goal}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. TIMELINE */}
        <section className="py-16 bg-emerald-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Reversal Timeline</h2>
            
            <div className="space-y-6">
              {[
                { month: 'Month 1', milestone: 'Improved energy, reduced cravings' },
                { month: 'Month 2', milestone: 'Better fasting glucose, weight loss' },
                { month: 'Month 3', milestone: 'Improved A1C, reduced insulin levels' },
                { month: 'Month 6+', milestone: 'Full reversal for many' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-emerald-200 rounded-xl p-6">
                  <Calendar className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.month}</h3>
                    <p className="text-gray-700">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SUPPLEMENTS SECTION */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Supplements That Help Sensitize Cells</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold text-lg text-emerald-700 mb-2">Berberine</h3>
                <p className="text-sm text-gray-600">Often called "Nature's Metformin," it helps activate AMPK, a metabolism master switch.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold text-lg text-emerald-700 mb-2">Inositol (Myo-Inositol)</h3>
                <p className="text-sm text-gray-600">Crucial for insulin signaling. Often used for PCOS and metabolic syndrome.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold text-lg text-emerald-700 mb-2">Magnesium Glycinate</h3>
                <p className="text-sm text-gray-600">Most people with insulin resistance are deficient in magnesium.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold text-lg text-emerald-700 mb-2">Chromium Picolinate</h3>
                <p className="text-sm text-gray-600">Helps improve the body's response to insulin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATIONAL PILLAR CTA - SUPPLEMENT CATEGORY */}
        <section className="py-16 bg-emerald-50 border-t border-emerald-200">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Support Your Reversal?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Now that you understand insulin resistance, explore evidence-based supplements 
              designed to accelerate cell sensitivity and metabolic recovery.
            </p>
            <Link 
              to="/supplements/insulin-sensitivity"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-emerald-700 transition shadow-lg"
            >
              Shop Insulin Sensitivity Supplements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* AFFILIATE DISCLOSURE - COMPACT */}
        <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-blue-900 mb-1">💰 Affiliate Disclosure</h3>
                  <p className="text-xs text-blue-800 leading-relaxed font-semibold">
                    Thrive Health may earn commissions from affiliate partnerships and supplement links. This does not affect product pricing. We only recommend products we believe in based on research and quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}