import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Pill,
  Leaf,
  Star,
  TrendingDown,
  ArrowRight,
  AlertCircle,
  Zap,
  Heart,
  ShieldAlert
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function NaturalBloodSugar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Natural Blood Sugar Control | Foods & Supplements"
        description="Natural ways to control blood sugar: best foods, herbs with clinical evidence (cinnamon, berberine), supplements & lifestyle changes. Evidence-based guide."
        keywords="natural blood sugar control, lower blood sugar naturally, foods that lower blood sugar, blood sugar supplements"
        image="/images/natural-blood-sugar-og.png"
        url="/natural-blood-sugar"
      />
      <main className="min-h-screen bg-white font-sans text-gray-800">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/reverse-prediabetes" className="inline-flex items-center text-rose-200 hover:text-white mb-6 transition">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plan
            </Link>
            <span className="bg-rose-500/20 text-rose-100 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
              Step 4 of 5
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Supplement Support
            </h1>
            <p className="text-2xl text-rose-100 mb-4">Natural Blood Sugar Control</p>
            <p className="text-xl text-rose-50 leading-relaxed max-w-2xl">
              Science-backed herbs, foods & lifestyle strategies for healthy glucose levels. Complete your reversal plan with evidence-based supplement support.
            </p>
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

        {/* FORCE MULTIPLIER CLARIFICATION - PROMINENT */}
        <section className="bg-blue-50 border-l-4 border-blue-600 py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">Supplements Are Force Multipliers, Not Replacements</h3>
                <p className="text-blue-800 mb-2">
                  Without significant diet and exercise changes, supplements have minimal effect on blood sugar control.
                </p>
                <p className="text-blue-800 font-semibold">
                  Always consult your doctor before starting supplements, especially if taking medications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRESS INDICATOR - 5 STEPS INLINE */}
        <section className="bg-rose-50 border-b border-rose-100 py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-semibold text-rose-800 mb-4">Your Progress Through Reversal:</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Diet */}
              <Link to="/prediabetes-diet" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Diet</span>
              </Link>
              
              <div className="w-8 h-1 bg-rose-300"></div>
              
              {/* Exercise */}
              <Link to="/prediabetes-exercise" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Exercise</span>
              </Link>
              
              <div className="w-8 h-1 bg-rose-300"></div>
              
              {/* Monitoring */}
              <Link to="/glucose-monitoring-tools" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Monitor</span>
              </Link>
              
              <div className="w-8 h-1 bg-rose-300"></div>
              
              {/* Supplements - Current */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-rose-700 text-sm">Supplements</span>
              </div>
              
              <div className="w-8 h-1 bg-gray-300"></div>
              
              {/* Sleep & Stress */}
              <Link to="/prediabetes-sleep-stress" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Sleep & Stress</span>
              </Link>
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION */}
        <div className="sticky top-0 z-20 bg-rose-50 border-b border-rose-100 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-4 text-sm font-semibold text-rose-800 whitespace-nowrap">
              <button onClick={() => scrollToSection('herbs')} className="hover:text-rose-600">Herbs That Work</button>
              <button onClick={() => scrollToSection('foods')} className="hover:text-rose-600">Foods to Eat</button>
              <button onClick={() => scrollToSection('supplements')} className="hover:text-rose-600">Supplements</button>
              <button onClick={() => scrollToSection('lifestyle')} className="hover:text-rose-600">Lifestyle Tips</button>
            </div>
          </div>
        </div>

        {/* HERBS SECTION */}
        <section id="herbs" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Herbs That Lower Blood Sugar</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              These time-tested herbs have modern clinical evidence for glucose control. Use as teas, extracts, or supplements.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  name: 'Berberine',
                  desc: 'From goldenseal plant. As effective as metformin in some studies.',
                  evidence: 'Lowers A1C by 0.5-1.0% in 3 months'
                },
                {
                  name: 'Cinnamon',
                  desc: 'Common spice that improves insulin sensitivity.',
                  evidence: 'Reduces fasting glucose by 10-29 mg/dL'
                },
                {
                  name: 'Fenugreek',
                  desc: 'Seeds used in Indian cooking. High in soluble fiber.',
                  evidence: 'Lowers post-meal spikes by 20%'
                },
                {
                  name: 'Gymnema Sylvestre',
                  desc: 'Known as "sugar destroyer" in Ayurvedic medicine.',
                  evidence: 'Reduces sugar cravings and A1C'
                },
              ].map((herb, i) => (
                <div key={i} className="flex gap-4 bg-rose-50 border border-rose-200 rounded-xl p-6">
                  <Leaf className="w-10 h-10 text-rose-600 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{herb.name}</h3>
                    <p className="text-gray-700 mb-2">{herb.desc}</p>
                    <p className="text-sm text-rose-700 font-semibold">Evidence: {herb.evidence}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOODS SECTION */}
        <section id="foods" className="py-16 bg-rose-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods That Naturally Lower Blood Sugar</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Incorporate these daily for steady glucose control. Focus on fiber-rich, low-GI options.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Vegetables',
                  items: ['Broccoli', 'Spinach', 'Kale', 'Brussels sprouts']
                },
                {
                  category: 'Proteins',
                  items: ['Salmon', 'Chicken', 'Eggs', 'Greek yogurt']
                },
                {
                  category: 'Fats & Others',
                  items: ['Avocados', 'Nuts', 'Olive oil', 'Chia seeds']
                },
              ].map((section, i) => (
                <div key={i} className="bg-white border border-rose-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">{section.category}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-rose-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPLEMENTS SECTION */}
        <section id="supplements" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Evidence-Based Supplements</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              These supplements have strong clinical evidence for blood sugar support. Start with one and monitor.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  name: 'Alpha-Lipoic Acid (ALA)',
                  dose: '600-1200mg/day',
                  evidence: 'Improves insulin sensitivity by 20-30%'
                },
                {
                  name: 'Chromium Picolinate',
                  dose: '200-1000mcg/day',
                  evidence: 'Reduces fasting glucose in deficient people'
                },
                {
                  name: 'Magnesium',
                  dose: '300-400mg/day',
                  evidence: 'Lowers A1C in deficient individuals'
                },
                {
                  name: 'Vitamin D',
                  dose: '2000-4000 IU/day',
                  evidence: 'Improves beta cell function if deficient'
                },
              ].map((supp, i) => (
                <div key={i} className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Pill className="w-8 h-8 text-rose-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{supp.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Dose: {supp.dose}</p>
                      <p className="text-gray-700">{supp.evidence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="text-yellow-900 font-semibold">
                <strong>⚠️ Caution:</strong> Supplements interact with medications. Get blood work before/after. Don't exceed recommended doses.
              </p>
            </div>
          </div>
        </section>

        {/* LIFESTYLE SECTION */}
        <section id="lifestyle" className="py-16 bg-rose-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle Strategies</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Combine these habits with herbs/foods for maximum effect.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Post-meal walks (10-15 min)',
                'Strength training 2-3x/week',
                '7-9 hours quality sleep',
                'Stress reduction (meditation)',
                'Intermittent fasting (12-16 hours)',
                'Vinegar before meals (1 tbsp)',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white border border-rose-200 rounded-xl">
                  <Zap className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPLEMENT CTA */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Optimize?</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Shop our curated collection of natural blood sugar support supplements.
            </p>
            <Link 
              to="/supplements/blood-sugar-support"
              className="inline-flex items-center gap-2 bg-rose-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-rose-700 transition"
            >
              View Supplements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* MAIN CTA - NEXT STEP */}
        <section className="py-20 bg-gradient-to-br from-rose-900 to-rose-800 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <Zap className="w-12 h-12 text-rose-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready for Step 5?</h2>
            <p className="text-rose-100 mb-8 text-lg">
              You've covered nutrition, movement, monitoring, and supplements. Now let's optimize sleep & stress—the final piece of the reversal puzzle.
            </p>
            <Link 
              to="/prediabetes-sleep-stress" 
              className="inline-flex items-center justify-center gap-2 bg-rose-300 text-rose-900 font-bold px-10 py-4 rounded-xl hover:bg-white transition shadow-lg text-lg"
            >
              Continue to Step 5: Sleep & Stress Optimization
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* CTA - Complete Your Stack */}
        <section className="py-16 bg-emerald-50 border-t border-emerald-200">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Your Stack
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Now that you know which supplements work best, shop our curated 
              collection of blood sugar support products.
            </p>
            <Link 
              to="/supplements/blood-sugar-support"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-emerald-700 transition shadow-lg"
            >
              Shop Blood Sugar Supplements
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