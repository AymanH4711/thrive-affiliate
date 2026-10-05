// src/pages/reversal-plan/PrediabetesPlanPage.tsx
import { Link } from 'react-router-dom';
import { SEO } from "@/components/seo/SEO";
import { AdvisorModeBox } from "@/components/clinical/AdvisorModeBox";
import { EvidenceStrengthBadge } from "@/components/clinical/EvidenceStrengthBadge";
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Apple, 
  Activity, 
  BarChart3,
  Zap,
  Moon,
  Home
} from 'lucide-react';

export default function PrediabetesPlanPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "headline": "5-Step Prediabetes Plan",
    "description": "A 5-step lifestyle plan for prediabetes covering diet, movement, tracking, supplements and sleep. Educational only.",
    "image": "https://thrivehealth360.org/images/reverse-prediabetes-hero-og.webp",
    "url": "https://thrivehealth360.org/prediabetes-plan",
    "author": {
      "@type": "Organization",
      "name": "ThriveHealth360"
    }
  };

  // 5 Steps Configuration
  const steps = [
    {
      id: 'step-1',
      number: 1,
      title: 'Redesign Your Diet',
      evidence: 'strong' as const,
      subtitle: 'The Foundation',
      icon: Apple,
      color: 'emerald',
      link: '/prediabetes-diet',
      description: 'Food choices shape how much your blood sugar and insulin rise after meals. Choosing blood-sugar-friendly foods can reduce those spikes and support insulin sensitivity over time.',
      points: [
        'Cut back on refined carbs: white bread, sugary drinks, processed snacks',
        'Add protein & fiber: helps steady blood sugar after meals',
        'Meal timing: some people find regular meal times or time-restricted eating helpful — check with your doctor first'
      ]
    },
    {
      id: 'step-2',
      number: 2,
      title: 'Move Your Body',
      evidence: 'strong' as const,
      subtitle: 'Build Insulin Sensitivity',
      icon: Activity,
      color: 'blue',
      link: '/prediabetes-exercise',
      description: 'During and after activity, your muscles take up glucose partly without needing insulin, and insulin sensitivity stays improved for hours afterward. Regular movement helps keep that effect going.',
      points: [
        'Post-meal walks: a 10-15 minute walk after eating can help blunt the blood sugar rise',
        'Strength training: 2-3 times per week builds muscle, a major site of glucose uptake',
        'Daily walking: many people aim for 7,000+ steps — build up gradually'
      ]
    },
    {
      id: 'step-3',
      number: 3,
      title: 'Track Your Progress',
      subtitle: 'Measure What Matters',
      icon: BarChart3,
      color: 'purple',
      link: '/glucose-monitoring-tools',
      description: 'Data can be motivating. Tracking your numbers helps you see what works for your body and gives you something concrete to review with your doctor.',
      points: [
        'Fasting glucose: test first thing in the morning (normal range: below 100 mg/dL or 5.6 mmol/L)',
        'A1C test: ask your doctor how often to repeat it (normal range: below 5.7%)',
        'CGM (optional): a continuous glucose monitor shows real-time patterns — ask your doctor whether it makes sense for you'
      ]
    },
    {
      id: 'step-4',
      number: 4,
      title: 'Add Supplement Support',
      subtitle: 'Optional, After the Basics',
      icon: Zap,
      color: 'amber',
      link: '/natural-blood-sugar',
      description: 'Supplements are an optional add-on, never a replacement for diet, movement, sleep, or medical care. Some have early research behind them, but effects are modest and vary, and they can interact with medications.',
      points: [
        'Berberine: some studies suggest a modest effect on blood sugar; it can interact with medications and is not suitable for everyone, including during pregnancy',
        'Cinnamon & chromium: evidence is mixed and effects, if any, are small',
        'Magnesium: low intake is linked to higher type 2 diabetes risk; food sources come first, so ask your doctor before supplementing, especially with kidney problems'
      ]
    },
    {
      id: 'step-5',
      number: 5,
      title: 'Optimize Sleep & Stress',
      evidence: 'moderate' as const,
      subtitle: 'The Amplifier',
      icon: Moon,
      color: 'rose',
      link: '/prediabetes-sleep-stress',
      description: 'Poor sleep and chronic stress are linked with higher cortisol, worse insulin sensitivity, and harder blood sugar control. These habits support the other four steps.',
      points: [
        '7-9 hours of sleep: the range most adults need for healthy metabolism',
        'Stress management: meditation, breathing exercises, or yoga can help you manage stress',
        'A calm sleep routine: regular bedtime, a dark cool room, screens off before bed'
      ]
    }
  ];

  const colorClasses = {
    emerald: { bg: 'bg-emerald-600', bgLight: 'bg-emerald-50', border: 'border-emerald-600', text: 'text-emerald-600' },
    blue: { bg: 'bg-blue-600', bgLight: 'bg-blue-50', border: 'border-blue-600', text: 'text-blue-600' },
    purple: { bg: 'bg-purple-600', bgLight: 'bg-purple-50', border: 'border-purple-600', text: 'text-purple-600' },
    amber: { bg: 'bg-amber-600', bgLight: 'bg-amber-50', border: 'border-amber-600', text: 'text-amber-600' },
    rose: { bg: 'bg-rose-600', bgLight: 'bg-rose-50', border: 'border-rose-600', text: 'text-rose-600' },
  };

  return (
    <>
      <SEO
        title="5-Step Prediabetes Plan | ThriveHealth360"
        description="A 5-step lifestyle plan for prediabetes: diet, movement, tracking, supplements and sleep, grounded in research on lowering type 2 diabetes risk. Educational only."
        keywords="prediabetes plan, 5-step prediabetes plan, lower diabetes risk, prediabetes lifestyle changes, blood sugar support"
        image="/images/reverse-prediabetes-hero-og.webp"
        url="/prediabetes-plan"
        schema={schema}
      />

      <main className="min-h-screen bg-white">
        {/* HERO SECTION WITH IMAGE */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition font-semibold">
                  <Home className="w-4 h-4 mr-2" /> Back Home
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                  The 5-Step Prediabetes Plan
                </h1>
                <p className="text-lg text-gray-700 mb-4 font-semibold">
                  A Practical Roadmap to Support Healthy Blood Sugar
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-7">
                  Follow these five connected steps to build the habits linked to a lower risk of type 2 diabetes. Progress takes months, not weeks, and results vary from person to person.
                </p>
              </div>

              {/* Hero Image */}
              <div className="hidden md:block">
                <img 
                  src="/images/reverse-prediabetes-hero-thumb-og.webp" 
                  alt="Woman preparing a healthy meal as part of a prediabetes lifestyle plan"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Hero Image */}
        <div className="md:hidden bg-white px-4 py-6">
          <img 
            src="/images/reverse-prediabetes-hero.webp" 
            alt="Woman preparing a healthy meal as part of a prediabetes lifestyle plan"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* STICKY NAVIGATION - 5 STEPS */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b-2 border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex overflow-x-auto gap-2 py-4">
              {steps.map((step) => {
                const colors = colorClasses[step.color as keyof typeof colorClasses];
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToSection(step.id)}
                    className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg font-bold whitespace-nowrap transition hover:scale-105 ${colors.bgLight}`}
                  >
                    <div className={`w-8 h-8 rounded-full ${colors.bg} text-white flex items-center justify-center text-sm`}>
                      {step.number}
                    </div>
                    <span className={colors.text}>{step.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER */}
        <section className="py-6 bg-amber-50 border-b-2 border-amber-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-base text-amber-900 mb-2">Medical Disclaimer</p>
                <p className="text-base text-amber-800 leading-relaxed">
                  All content on ThriveHealth360 is for general educational and informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Supplements, foods, and lifestyle interventions discussed on this site have not been evaluated by the FDA, MHRA, TGA, or Health Canada and are not intended to diagnose, treat, cure, or prevent any disease. Always consult your doctor or a qualified healthcare provider before making changes to your diet, exercise routine, medications, or supplement regimen. Individual results vary and are not guaranteed. Health regulations differ by country — content may not apply in your jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        {/* ── ADVISOR MODE — clinical evidence summary (Excel guide) ── */}
        <section className="bg-blue-50 border-y border-blue-200 py-5">
          <div className="container mx-auto px-4 max-w-5xl">
            <AdvisorModeBox
              title="Clinical Evidence Summary"
              evidence="strong"
              summary="Two landmark trials tested intensive diet-and-activity programmes in overweight adults with impaired glucose tolerance: the Diabetes Prevention Program (n=3,234) and the Finnish Diabetes Prevention Study (n=522). In the DPP, lifestyle intervention lowered the risk of developing type 2 diabetes by 58% over about three years compared with placebo (71% in adults over 60); the Finnish study also found a 58% reduction. Steps 1 and 2 reflect those programmes; steps 3-5 are supporting habits with less direct evidence."
              caveats={[
                'Results depend on adherence, starting blood sugar, age, weight, and other health conditions.',
                'Not everyone returns to the normal range, and some people progress to type 2 diabetes despite their efforts.',
                'Supplements are not part of this evidence and have not been evaluated by regulators for preventing or treating prediabetes or diabetes.',
                'Consult your doctor before starting any new supplement, diet, or exercise programme.',
              ]}
            />
          </div>
        </section>

        {/* MAIN CONTENT */}
        <article className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* OVERVIEW */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Plan Works</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Prediabetes means your blood sugar is higher than normal but not yet in the diabetes range. For many people it develops gradually, and lifestyle changes are the best-studied way to lower the risk of it progressing to type 2 diabetes. This plan brings the main habits together in one place.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
                <p className="text-2xl font-semibold text-gray-900">
                  This plan isn't about quick fixes. It's about sustainable habits that support your metabolism and your long-term health.
                </p>
              </div>
            </section>

            {/* ALL 5 STEPS */}
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              const Icon = step.icon;
              
              return (
                <section key={step.id} id={step.id} className="mb-20 scroll-mt-32">
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 ${colors.bg} text-white rounded-full flex items-center justify-center font-bold text-3xl flex-shrink-0`}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      {step.evidence && (
                        <div className="mb-3">
                          <EvidenceStrengthBadge level={step.evidence} />
                        </div>
                      )}
                      <p className="text-base text-gray-600">{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className={`bg-white border-l-4 ${colors.border} rounded-r-lg p-8 mb-8`}>
                    <h4 className="font-bold text-2xl text-gray-900 mb-4 flex items-center gap-3">
                      <Icon className="w-7 h-7" style={{ color: `var(--color-${step.color}-600)` }} />
                      Why {step.title} Matters
                    </h4>
                    <p className="text-base text-gray-700 mb-5">
                      {step.description}
                    </p>
                    <ul className="space-y-4 text-lg text-gray-700">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: `var(--color-${step.color}-600)` }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={step.link} className={`inline-flex items-center gap-2 ${colors.text} font-bold text-lg hover:opacity-80 transition`}>
                    Read Complete {step.title} Guide <ArrowRight className="w-5 h-5" />
                  </Link>
                  {step.id === 'step-4' && (
                    <p className="mt-3 text-sm text-gray-500 italic">
                      * Some product links in this section are affiliate links. We may earn a commission at no extra cost to you. See our full{' '}
                      <a href="#affiliate-disclosure" className="underline hover:text-gray-700">Affiliate Disclosure</a> below.
                    </p>
                  )}

                  {/* Next Step Button */}
                  {index < steps.length - 1 && (
                    <div className="mt-10 text-center">
                      <button
                        onClick={() => scrollToSection(steps[index + 1].id)}
                        className={`inline-flex items-center gap-2 ${colors.bg} text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition`}
                      >
                        Next Step: {steps[index + 1].title} <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </section>
              );
            })}

            {/* TIMELINE */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect Over Time</h2>
              <p className="text-lg text-gray-700 mb-8">
                Everyone's timeline is different. This is a general picture of how progress often looks, not a promise or a prediction.
              </p>
              <div className="space-y-6">
                {[
                  { period: 'Weeks 1-4', title: 'Foundation', desc: 'Build the habits. Some people notice steadier energy or better sleep; changes in lab results usually take longer.' },
                  { period: 'Weeks 5-8', title: 'Momentum', desc: 'Routines start to feel more natural. Home readings may begin to show patterns. A1C reflects about three months, so it changes more slowly.' },
                  { period: 'Months 3-6', title: 'Checkpoint', desc: 'A good time to repeat tests with your doctor. Some people see improvements in A1C, fasting glucose, or weight; others see little change and may need a different approach.' },
                  { period: 'Months 6-12', title: 'Consolidation', desc: 'Habits become routine. In the major prevention trials, lifestyle changes lowered the risk of developing type 2 diabetes; your own results depend on your starting point and consistency.' },
                  { period: '1-3 Years', title: 'Long-Term', desc: 'Keeping the habits going matters most. Some people return to normal blood sugar levels, some stay in the prediabetes range, and some progress. In follow-up research on the Diabetes Prevention Program, people who returned to normal even once had about 56% lower risk of later diabetes than those who stayed in the prediabetes range. Regular check-ups keep you informed.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200">
                    <div className="flex-shrink-0">
                      <p className="font-bold text-lg text-emerald-700 min-w-fit">{item.period}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-lg text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Plan?</h2>
                <p className="text-lg mb-8 text-emerald-50">
                  Start with one step this week and add the next when it feels manageable. Most people need a few months of steady habits before lab results change, and it is a good idea to talk with your doctor before you begin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection('step-1')}
                    className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold px-10 py-5 rounded-lg hover:bg-emerald-50 transition text-lg"
                  >
                    Begin with Step 1: Diet
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-10 py-5 rounded-lg hover:bg-white hover:text-emerald-600 transition text-lg"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </section>


            {/* SOURCES */}
            <section className="mt-16 text-sm text-gray-600">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Sources</h2>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Knowler WC, et al. Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin. N Engl J Med 2002;346:393-403.</li>
                <li>Tuomilehto J, et al. Prevention of type 2 diabetes mellitus by changes in lifestyle among subjects with impaired glucose tolerance. N Engl J Med 2001;344:1343-1350.</li>
                <li>Perreault L, et al. Effect of regression from prediabetes to normal glucose regulation on long-term reduction in diabetes risk: results from the Diabetes Prevention Program Outcomes Study. Lancet 2012;379:2243-2251.</li>
              </ol>
            </section>

          </div>
        </article>

        {/* AFFILIATE DISCLOSURE */}
        <section id="affiliate-disclosure" className="py-6 bg-blue-50 border-t-2 border-blue-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-base text-blue-900 mb-2">Affiliate Disclosure</p>
                <p className="text-base text-blue-800 leading-relaxed">
                  <strong>Transparency notice:</strong> This page contains affiliate links to supplement and wellness products. ThriveHealth360 may earn a commission if you purchase through these links, at no additional cost to you. This financial relationship may influence which products we feature and how they are presented. We apply editorial and quality standards to all recommendations; however, you should conduct your own research and consult a qualified healthcare professional before purchasing any supplement. This disclosure is provided in accordance with the FTC's guidelines on endorsements and testimonials (16 CFR §255).
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}