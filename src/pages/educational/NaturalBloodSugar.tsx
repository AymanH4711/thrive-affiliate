import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Pill,
  Leaf,
  ArrowRight,
  AlertCircle,
  Zap,
} from 'lucide-react';
import { SEO } from "@/components/seo/SEO";

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
        <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-14 lg:py-20 overflow-hidden relative">
          {/* Ambient glow */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-rose-400 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-300 rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10">

            {/* ── Two-column grid: text left | image right ── */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left — text */}
              <div className="text-left">
                <Link to="/reverse-prediabetes"
                  className="inline-flex items-center text-rose-200 hover:text-white mb-6 transition text-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to Plan
                </Link>

                <span className="bg-rose-500/20 text-rose-100 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
                  Step 4 of 5
                </span>

                <p className="text-rose-200 font-semibold text-sm uppercase tracking-widest mb-2">
                  Supplement Support
                </p>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Natural Blood Sugar Control
                </h1>

                <p className="text-lg text-rose-50 leading-relaxed max-w-lg">
                  Science-backed herbs, foods &amp; lifestyle strategies for healthy glucose levels.
                  Complete your reversal plan with evidence-based supplement support.
                </p>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-5 mt-7 text-rose-200 text-sm">
                  {[
                    'Evidence-rated supplements',
                    'Peer-reviewed sources',
                    'No miracle claims',
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-rose-400/30 flex items-center justify-center text-xs">✓</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — hero image */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative">
                  {/* Glow ring behind image */}
                  <div className="absolute inset-0 rounded-2xl bg-rose-400/20 blur-xl scale-105" />
                  <img
                    src="/images/natural-blood-sugar-hero-thumb-og.webp"
                    alt="Natural blood sugar control — woman in kitchen with vegetables, tea and healthy foods"
                    width={400}
                    height={400}
                    className="relative rounded-2xl shadow-2xl border border-rose-700/40 object-cover w-full max-w-sm"
                    loading="eager"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.src.includes('natural-blood-sugar-hero.webp')) {
                        img.src = '/images/natural-blood-sugar-hero.webp';
                      }
                    }}
                  />
                </div>
              </div>

            </div>{/* end grid */}
          </div>
        </section>

        {/* MEDICAL DISCLAIMER - COMPACT */}
        <section className="py-4 bg-amber-50 border-b-2 border-amber-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sm text-amber-900 mb-1">Medical Disclaimer</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    The information on this page is for <strong>educational purposes only</strong> and does not constitute medical advice. These statements have not been evaluated by the U.S. Food and Drug Administration (FDA). No product or supplement mentioned here is intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Always consult a qualified healthcare provider before starting any supplement regimen, adjusting or stopping medications, or making significant dietary changes — especially if you have diabetes, prediabetes, or any other health condition.
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
              <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
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
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Diet</span>
              </Link>
              
              <div className="w-8 h-1 bg-rose-300" aria-hidden="true"></div>
              
              {/* Exercise */}
              <Link to="/prediabetes-exercise" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Exercise</span>
              </Link>
              
              <div className="w-8 h-1 bg-rose-300" aria-hidden="true"></div>
              
              {/* Monitoring */}
              <Link to="/glucose-monitoring-tools" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Monitor</span>
              </Link>
              
              <div className="w-8 h-1 bg-rose-300" aria-hidden="true"></div>
              
              {/* Supplements - Current (show number, not checkmark, to distinguish from completed steps) */}
              <div className="flex items-center gap-4" aria-current="step">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <span className="font-semibold text-rose-700 text-sm">Supplements</span>
              </div>
              
              <div className="w-8 h-1 bg-gray-300" aria-hidden="true"></div>
              
              {/* Sleep & Stress */}
              <Link to="/prediabetes-sleep-stress" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <span className="font-semibold text-gray-600 hover:text-rose-600 text-sm">Sleep & Stress</span>
              </Link>
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION */}
        <nav aria-label="Page sections" className="sticky top-0 z-20 bg-rose-50 border-b border-rose-100 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-4 text-sm font-semibold text-rose-800 whitespace-nowrap">
              <button onClick={() => scrollToSection('herbs')} className="hover:text-rose-600">Herbs That Work</button>
              <button onClick={() => scrollToSection('foods')} className="hover:text-rose-600">Foods to Eat</button>
              <button onClick={() => scrollToSection('supplements')} className="hover:text-rose-600">Supplements</button>
              <button onClick={() => scrollToSection('lifestyle')} className="hover:text-rose-600">Lifestyle Tips</button>
            </div>
          </div>
        </nav>

        {/* HERBS SECTION */}
        <section id="herbs" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Herbs That May Support Blood Sugar Control</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              These time-tested herbs have modern clinical evidence for glucose control. Use as teas, extracts, or supplements.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  name: 'Berberine',
                  desc: 'Natural isoquinoline alkaloid found in several plants. Some clinical trials suggest glucose-lowering effects that researchers have compared to metformin, though study populations and quality vary.',
                  evidence: 'Multiple meta-analyses report A1C reductions of ~0.45–0.73% and meaningful fasting glucose improvements in type 2 diabetes patients'
                },
                {
                  name: 'Cinnamon',
                  desc: 'Common spice that may improve insulin sensitivity and glucose uptake.',
                  evidence: 'Umbrella meta-analyses show ~11 mg/dL average fasting glucose reduction; evidence is promising but mixed across trials'
                },
                {
                  name: 'Fenugreek',
                  desc: 'Seeds used in traditional Indian cooking. High in soluble fiber and steroidal saponins.',
                  evidence: 'Studies report reductions in post-meal blood sugar spikes; effect size varies by dose and formulation'
                },
                {
                  name: 'Gymnema Sylvestre',
                  desc: 'Known as "sugar destroyer" in Ayurvedic medicine; may reduce sugar absorption in the gut.',
                  evidence: 'Some trials show reductions in fasting glucose and A1C; more large-scale RCTs are needed'
                },
              ].map((herb, i) => (
                <div key={i} className="flex gap-4 bg-rose-50 border border-rose-200 rounded-xl p-6">
                  <Leaf className="w-10 h-10 text-rose-600 flex-shrink-0" aria-hidden="true" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods That May Help Support Healthy Blood Sugar</h2>
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
              ].map((foodGroup, i) => (
                <div key={i} className="bg-white border border-rose-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">{foodGroup.category}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {foodGroup.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-rose-600" aria-hidden="true" />
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
                  dose: '600–1200mg/day',
                  evidence: 'Significantly improves insulin resistance (HOMA-IR) and reduces fasting blood sugar; benefits on HbA1c are more modest and dose/duration dependent'
                },
                {
                  name: 'Chromium Picolinate',
                  dose: '200–1000mcg/day',
                  evidence: 'May reduce fasting glucose and improve insulin signaling, particularly in those with chromium deficiency; benefits are modest in non-deficient individuals'
                },
                {
                  name: 'Magnesium',
                  dose: '300–400mg/day',
                  evidence: 'Associated with lower A1C and improved insulin sensitivity, especially in deficient individuals; magnesium deficiency is common in people with diabetes'
                },
                {
                  name: 'Vitamin D',
                  dose: '2000–4000 IU/day',
                  evidence: 'Supplementation may improve beta-cell function and insulin sensitivity in deficient individuals; test your levels before supplementing'
                },
              ].map((supp, i) => (
                <div key={i} className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Pill className="w-8 h-8 text-rose-600 flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{supp.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Dose: {supp.dose}</p>
                      <p className="text-gray-700">{supp.evidence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500 italic">
              Dose ranges above are drawn from published clinical research. Always discuss specific dosing with your healthcare provider before starting any supplement.
            </p>

            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
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
                'Apple cider vinegar before meals (1 tbsp diluted in water — consult your provider if on medications)',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white border border-rose-200 rounded-xl">
                  <Zap className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-gray-800 font-medium">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CTA - NEXT STEP */}
        <section className="py-20 bg-gradient-to-br from-rose-900 to-rose-800 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <Zap className="w-12 h-12 text-rose-300 mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Ready for Step 5?</h2>
            <p className="text-rose-100 mb-8 text-lg">
              You've covered nutrition, movement, monitoring, and supplements. Now let's optimize sleep & stress — the final piece of the reversal puzzle.
            </p>
            <Link
              to="/prediabetes-sleep-stress"
              className="inline-flex items-center justify-center gap-2 bg-rose-300 text-rose-900 font-bold px-10 py-4 rounded-xl hover:bg-white transition shadow-lg text-lg"
            >
              Continue to Step 5: Sleep & Stress Optimization
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
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
              Now that you know which supplements may support your goals, browse our curated collection of blood sugar support products.
            </p>
            <Link 
              to="/supplements/blood-sugar-support"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-emerald-700 transition shadow-lg"
            >
              Shop Blood Sugar Supplements
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-xs text-gray-500 italic">
              * Some product links are affiliate links. We may earn a commission at no extra cost to you.{' '}
              <a href="#affiliate-disclosure" className="underline hover:text-gray-700">See full disclosure below.</a>
            </p>
          </div>
        </section>

        {/* AFFILIATE DISCLOSURE - COMPACT */}
        <section id="affiliate-disclosure" className="py-4 bg-blue-50 border-t-2 border-blue-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sm text-blue-900 mb-1">Affiliate Disclosure</p>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Transparency notice:</strong> This page contains affiliate links. ThriveHealth360 may earn a commission if you purchase through these links, at <strong>no additional cost to you</strong>. This financial relationship may influence which products we feature and how they are presented. We apply editorial and quality standards to all recommendations; however, you should conduct your own research and consult a qualified healthcare professional before purchasing any supplement. This disclosure is provided in accordance with the FTC's guidelines on endorsements and testimonials (16 CFR §255).
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