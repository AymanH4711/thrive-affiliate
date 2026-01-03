// src/pages/prediabetes/ReversePrediabetesPage.tsx
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Heart, 
  Activity, 
  Apple, 
  Zap,
  BarChart3,
  Moon,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { TIMELINES } from '../../config/contentGuidelines';

export default function ReversePrediabetesPage() {
  // ✅ ScrollToSection function inside component
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Schema inside component
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
      {/* ✅ SEO Meta Tags */}
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

        {/* QUICK NAV - STICKY */}
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
            
            {/* OVERVIEW SECTION */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Plan Works</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Prediabetes is a metabolic condition that develops over time. Reversing it requires a comprehensive approach that addresses all the factors driving insulin resistance.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  This 5-step plan isn't about quick fixes or extreme measures. It's about sustainable lifestyle changes that rewire your metabolism and restore your health.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each step builds on the previous one. Together, they create a powerful synergy that transforms how your body processes glucose.
              </p>
            </section>

            {/* STEP 1: DIET */}
            <section id="step-1" className="mb-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Redesign Your Diet</h3>
                  <p className="text-lg text-gray-600">The Foundation of Everything</p>
                </div>
              </div>
              
              <div className="bg-white border-l-4 border-emerald-600 rounded-r-lg p-8 mb-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Apple className="w-5 h-5 text-emerald-600" />
                  Why Diet Matters Most
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Every single meal either raises or lowers your insulin levels. By choosing blood-sugar-friendly foods, you reduce insulin spikes and allow your cells to become sensitive again. This is the foundation of reversal.
                </p>
                
                <div className="bg-emerald-50 rounded-lg p-6 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4">The Three Dietary Pillars:</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900">Eliminate Refined Carbs</p>
                        <p className="text-sm text-gray-700">White bread, sugar, processed snacks spike insulin dramatically</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900">Add Protein & Fiber</p>
                        <p className="text-sm text-gray-700">Stabilize blood sugar at every meal. Target 30g protein, 10g+ fiber per meal</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900">Practice Intermittent Fasting</p>
                        <p className="text-sm text-gray-700">12-16 hour eating window gives your pancreas a rest</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Quick Win:</strong> Just replacing sugary drinks with water can lower A1C by 0.5-1.0 points in 3 months.
                  </p>
                </div>
              </div>

              <Link to="/prediabetes-diet" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                Read Complete Diet Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 2: EXERCISE */}
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
              
              <div className="bg-white border-l-4 border-blue-600 rounded-r-lg p-8 mb-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Why Movement Matters
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  When you move, your muscles consume glucose directly—bypassing the insulin pathway entirely. This immediately improves insulin sensitivity. Exercise is possibly the most powerful tool you have.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4">The Exercise Trinity:</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-200">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Post-Meal Walks (10-15 min)</p>
                        <p className="text-sm text-gray-700">Reduces glucose spikes by 20-30%. Do this after your biggest meals.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-200">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Strength Training (3x/week)</p>
                        <p className="text-sm text-gray-700">Builds muscle—your biggest glucose sink. 20-30 min sessions are enough.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-200">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Daily Walking (7,000+ steps)</p>
                        <p className="text-sm text-gray-700">Stay active throughout the day. Low impact, sustainable, and effective.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Quick Win:</strong> A 15-minute walk after meals can reduce blood sugar by 20-30mg/dL compared to sitting.
                  </p>
                </div>
              </div>

              <Link to="/prediabetes-exercise" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Read Complete Exercise Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 3: MONITORING */}
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
              
              <div className="bg-white border-l-4 border-purple-600 rounded-r-lg p-8 mb-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Why Monitoring Matters
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Data is motivation. Seeing your numbers improve—even slightly—keeps you committed and helps you understand what actually works for your unique body.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4">Key Metrics to Track:</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-purple-200">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Fasting Glucose</p>
                        <p className="text-sm text-gray-700">Test first thing in the morning. Target: below 100 mg/dL (normal is below 99)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-purple-200">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">A1C Test</p>
                        <p className="text-sm text-gray-700">Every 3 months. Target: below 5.7% (shows 3-month average)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-purple-200">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">CGM (Optional)</p>
                        <p className="text-sm text-gray-700">Continuous glucose monitor shows real-time patterns and trends</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Quick Win:</strong> Most people see improvements in fasting glucose within 2-4 weeks of dietary changes.
                  </p>
                </div>
              </div>

              <Link to="/glucose-monitoring-tools" className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                Read Complete Monitoring Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 4: SUPPLEMENTS */}
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
              
              <div className="bg-white border-l-4 border-amber-600 rounded-r-lg p-8 mb-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  Why Supplements Matter
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Think of supplements as force multipliers. They amplify the effects of diet and exercise. Supplements fill nutritional gaps and support your body's natural ability to restore insulin sensitivity.
                </p>
                
                <div className="bg-amber-50 rounded-lg p-6 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4">Evidence-Based Supplement Stack:</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-amber-200">
                      <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Berberine (500mg, 2-3x daily)</p>
                        <p className="text-sm text-gray-700">Nature's metformin. Activates the same cellular pathways as the diabetes drug.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-amber-200">
                      <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Cinnamon & Chromium</p>
                        <p className="text-sm text-gray-700">Improve glucose uptake by cells. Studies show 0.5-1.0 point A1C reduction.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-amber-200">
                      <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Magnesium (400-500mg daily)</p>
                        <p className="text-sm text-gray-700">Supports metabolic function. Most prediabetics are deficient.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> Supplements work best WITH diet and exercise changes, not instead of them.
                  </p>
                </div>
              </div>

              <Link to="/natural-blood-sugar" className="inline-flex items-center gap-2 bg-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-700 transition">
                Read Complete Supplement Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* STEP 5: SLEEP & STRESS */}
            <section id="step-5" className="mb-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Optimize Sleep & Stress</h3>
                  <p className="text-lg text-gray-600">The Amplifier of Everything</p>
                </div>
              </div>
              
              <div className="bg-white border-l-4 border-rose-600 rounded-r-lg p-8 mb-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-rose-600" />
                  Why Sleep & Stress Are Critical
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Poor sleep and chronic stress raise cortisol, which directly blocks insulin sensitivity and promotes belly fat storage. These aren't optional—they're foundational to reversal.
                </p>
                
                <div className="bg-rose-50 rounded-lg p-6 mb-6">
                  <h5 className="font-bold text-gray-900 mb-4">The Sleep & Stress Protocol:</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-rose-200">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">7-9 Hours of Sleep (Non-Negotiable)</p>
                        <p className="text-sm text-gray-700">Essential for metabolic healing. Poor sleep increases insulin resistance by 30%.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-rose-200">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Stress Management (Daily)</p>
                        <p className="text-sm text-gray-700">Meditation, breathing, yoga, or nature walks reduce cortisol.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-rose-200">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Sleep Sanctuary (Dark, Cool, Quiet)</p>
                        <p className="text-sm text-gray-700">Use magnesium, no screens 1 hour before bed, consistent schedule.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Quick Win:</strong> Just improving sleep from 6 to 7 hours can improve insulin sensitivity within 1 week.
                  </p>
                </div>
              </div>

              <Link to="/prediabetes-sleep-stress" className="inline-flex items-center gap-2 bg-rose-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-700 transition">
                Read Complete Sleep & Stress Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </section>

            {/* TIMELINE SECTION */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Reversal Timeline</h2>
              <div className="space-y-4">
                {[
                  { 
                    period: 'Weeks 1-4', 
                    title: 'Foundation', 
                    icon: 'calendar',
                    desc: 'Establish new habits. Diet becomes easier. First energy improvements. Fasting glucose may improve.' 
                  },
                  { 
                    period: 'Weeks 5-8', 
                    title: 'Momentum', 
                    icon: 'trending-up',
                    desc: 'Diet adaptation complete. Exercise becomes enjoyable. Weight loss starts. First significant lab improvements.' 
                  },
                  { 
                    period: 'Months 3-6', 
                    title: 'Breakthrough', 
                    icon: 'zap',
                    desc: 'Significant A1C improvements (0.5-1.5 point drops). Noticeable weight loss. Insulin sensitivity restoration begins.' 
                  },
                  { 
                    period: 'Months 6-12', 
                    title: 'Transformation', 
                    icon: 'heart',
                    desc: 'Major metabolic improvements. Sustainable lifestyle fully integrated. Prediabetes reversal likely. Energy restored.' 
                  },
                  { 
                    period: '1-3 Years', 
                    title: 'Complete Reversal', 
                    icon: 'check-circle-2',
                    desc: 'Full prediabetes reversal possible. A1C below 5.7%. New metabolic baseline established. Long-term health secured.' 
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                    <div className="flex-shrink-0">
                      <p className="font-bold text-emerald-700 text-sm">{item.period}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* KEY TAKEAWAYS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '✅', text: 'All 5 steps must work together—no shortcuts' },
                  { icon: '⏱️', text: 'Plan for 3 years, celebrate progress every month' },
                  { icon: '🎯', text: 'Focus on healthy behaviors, not just numbers' },
                  { icon: '💪', text: 'You have the power to reverse this. You\'ve got this.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white border-l-4 border-emerald-600 rounded-r-lg">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <p className="text-gray-800 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Reversal?</h2>
                <p className="text-xl mb-2 text-emerald-50">
                  {TIMELINES.mainMessage}
                </p>
                <p className="text-lg mb-8 text-emerald-100">
                  Begin with Step 1 and build from there. You don't need to do everything at once—just start.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/prediabetes-diet" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold px-8 py-4 rounded-lg hover:bg-emerald-50 transition text-lg">
                    Begin with Step 1: Diet
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/supplements/blood-sugar-support" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-emerald-400 transition text-lg">
                    Fast-Track to Supplements
                    <Zap className="w-5 h-5" />
                  </Link>
                </div>
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