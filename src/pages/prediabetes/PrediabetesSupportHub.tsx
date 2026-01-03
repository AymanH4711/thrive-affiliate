// src/pages/prediabetes/ReversePrediabetesPage.tsx
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO'; // ✅ CORRECT IMPORT PATH
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Heart, 
  Activity, 
  Apple, 
  Zap,
  BarChart3,
  Moon
} from 'lucide-react';
import { TIMELINES } from '../../config/contentGuidelines';

export default function ReversePrediabetesPage() {
  // ✅ SCROLLTOSECTION FUNCTION - INSIDE COMPONENT
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ SCHEMA - INSIDE COMPONENT
  const schema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "headline": "5-Step Prediabetes Reversal Plan",
    "description": "Clinically proven 5-step plan to reverse prediabetes naturally",
    "image": "https://thrive-health.com/images/reverse-prediabetes-og.png",
    "author": {
      "@type": "Organization",
      "name": "Thrive Health"
    }
  };

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <SEO
        title="5-Step Prediabetes Reversal Plan | Thrive Health"
        description="The complete 5-step prediabetes reversal plan: diet, exercise, monitoring, supplements & sleep optimization. Clinically proven to reverse prediabetes in 3 years."
        keywords="reverse prediabetes, prediabetes treatment, 5-step plan, blood sugar reversal, diabetes prevention"
        image="/images/reverse-prediabetes-og.png"
        url="/reverse-prediabetes"
        schema={schema}
      />

      <main className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Link to="/prediabetes-support" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4 transition">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Support Hub
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The 5-Step Reversal Plan
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Your Complete Roadmap to Restore Healthy Blood Sugar
              </p>
              <p className="text-lg text-gray-600">
                Follow these five interconnected steps to address the root cause of prediabetes and achieve lasting reversal in 3 years or less.
              </p>
            </div>
          </div>
        </section>

        {/* MEDICAL DISCLAIMER */}
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

        {/* QUICK NAV */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex overflow-x-auto space-x-6 py-4">
              {[
                { title: 'Step 1: Diet', id: 'step-1' },
                { title: 'Step 2: Exercise', id: 'step-2' },
                { title: 'Step 3: Monitor', id: 'step-3' },
                { title: 'Step 4: Supplements', id: 'step-4' },
                { title: 'Step 5: Sleep & Stress', id: 'step-5' },
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

        {/* MAIN CONTENT */}
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* OVERVIEW */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Plan Works</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Prediabetes is a metabolic condition that develops over time. Reversing it requires a comprehensive approach that addresses all the factors driving insulin resistance.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  This 5-step plan isn't about quick fixes. It's about sustainable lifestyle changes that rewire your metabolism and restore your health.
                </p>
              </div>
            </section>

            {/* STEP 1 */}
            <section id="step-1" className="mb-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Redesign Your Diet</h3>
                  <p className="text-lg text-gray-600">The Foundation</p>
                </div>
              </div>
              
              <div className="bg-white border-l-4 border-emerald-600 rounded-r-lg p-6 mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Apple className="w-5 h-5 text-emerald-600" />
                  Why Diet Matters
                </h4>
                <p className="text-gray-700 mb-4">
                  Every meal either raises or lowers your insulin levels. By choosing blood-sugar-friendly foods, you reduce insulin spikes and allow your cells to become sensitive again.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Eliminate refined carbs:</strong> White bread, sugar, processed snacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Add protein & fiber:</strong> Stabilize blood sugar at every meal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Practice intermittent fasting:</strong> Give your pancreas a rest</span>
                  </li>
                </ul>
              </div>

              <Link to="/prediabetes-diet" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700">
                Read Complete Diet Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 2 */}
            <section id="step-2" className="mb-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Move Your Body</h3>
                  <p className="text-lg text-gray-600">Build Insulin Sensitivity</p>
                </div>
              </div>
              
              <div className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Why Movement Matters
                </h4>
                <p className="text-gray-700 mb-4">
                  When you move, your muscles consume glucose directly—bypassing the insulin pathway. This immediately improves insulin sensitivity.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Post-meal walks:</strong> 10-15 minutes after eating reduces glucose spikes by 20-30%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Strength training:</strong> 3x per week builds muscle (your biggest glucose sink)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Daily walking:</strong> 7,000+ steps to stay active</span>
                  </li>
                </ul>
              </div>

              <Link to="/prediabetes-exercise" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
                Read Complete Exercise Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 3 */}
            <section id="step-3" className="mb-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Track Your Progress</h3>
                  <p className="text-lg text-gray-600">Measure What Matters</p>
                </div>
              </div>
              
              <div className="bg-white border-l-4 border-purple-600 rounded-r-lg p-6 mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Why Monitoring Matters
                </h4>
                <p className="text-gray-700 mb-4">
                  Data is motivation. Seeing your numbers improve keeps you committed and helps you understand what works for your body.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Fasting glucose:</strong> Test first thing in the morning (target: below 100 mg/dL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>A1C test:</strong> Every 3 months (target: below 5.7)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>CGM (optional):</strong> Continuous glucose monitor shows real-time patterns</span>
                  </li>
                </ul>
              </div>

              <Link to="/glucose-monitoring-tools" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700">
                Read Complete Monitoring Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 4 */}
            <section id="step-4" className="mb-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Add Supplement Support</h3>
                  <p className="text-lg text-gray-600">Accelerate Your Results</p>
                </div>
              </div>
              
              <div className="bg-white border-l-4 border-amber-600 rounded-r-lg p-6 mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  Why Supplements Matter
                </h4>
                <p className="text-gray-700 mb-4">
                  Supplements amplify the effects of diet and exercise. They fill nutritional gaps and support your body's natural ability to restore insulin sensitivity.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Berberine:</strong> Nature's metformin—activates the same cellular pathways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Cinnamon & Chromium:</strong> Improve glucose uptake by cells</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Magnesium:</strong> Supports metabolic function and reduces insulin resistance</span>
                  </li>
                </ul>
              </div>

              <Link to="/natural-blood-sugar" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700">
                Read Complete Supplement Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 5 */}
            <section id="step-5" className="mb-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Optimize Sleep & Stress</h3>
                  <p className="text-lg text-gray-600">The Amplifier</p>
                </div>
              </div>
              
              <div className="bg-white border-l-4 border-rose-600 rounded-r-lg p-6 mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-rose-600" />
                  Why Sleep & Stress Matter
                </h4>
                <p className="text-gray-700 mb-4">
                  Poor sleep and chronic stress raise cortisol, which directly blocks insulin sensitivity and promotes belly fat storage. These are foundational.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>7-9 hours of sleep:</strong> Non-negotiable for metabolic healing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Stress management:</strong> Meditation, breathing, yoga reduce cortisol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Magnesium & relaxation:</strong> Create a sleep sanctuary</span>
                  </li>
                </ul>
              </div>

              <Link to="/prediabetes-sleep-stress" className="inline-flex items-center gap-2 text-rose-600 font-bold hover:text-rose-700">
                Read Complete Sleep & Stress Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* TIMELINE */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Reversal Timeline</h2>
              <div className="space-y-4">
                {[
                  { period: 'Weeks 1-4', title: 'Foundation', desc: 'Establish new habits. Start seeing energy improvements.' },
                  { period: 'Weeks 5-8', title: 'Momentum', desc: 'Diet adaptation improves. Exercise becomes easier. First lab improvements possible.' },
                  { period: 'Months 3-6', title: 'Breakthrough', desc: 'Significant A1C improvements. Noticeable weight loss. Insulin sensitivity restoration begins.' },
                  { period: 'Months 6-12', title: 'Transformation', desc: 'Major metabolic improvements. Sustainable lifestyle integrated. Prediabetes reversal likely.' },
                  { period: '1-3 Years', title: 'Complete Reversal', desc: 'Full prediabetes reversal possible. New baseline established. Long-term health secured.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                    <div className="flex-shrink-0">
                      <p className="font-bold text-emerald-700">{item.period}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start?</h2>
                <p className="text-xl mb-8 text-emerald-50">
                  {TIMELINES.mainMessage}
                </p>
                <Link to="/prediabetes-diet" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold px-8 py-4 rounded-lg hover:bg-emerald-50 transition text-lg">
                  Begin with Step 1: Diet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* AFFILIATE DISCLOSURE */}
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