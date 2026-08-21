// src/pages/ReversePrediabetesPage.tsx
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

export default function ReversePrediabetesPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "headline": "5-Step Prediabetes Reversal Plan",
    "description": "Evidence-based 5-step plan to support prediabetes reversal naturally",
    "image": "https://www.thrivehealth360.com/images/reverse-prediabetes-hero-og.webp",
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
      description: 'Every meal either raises or lowers your insulin levels. By choosing blood-sugar-friendly foods, you reduce insulin spikes and allow your cells to become sensitive again.',
      points: [
        'Eliminate refined carbs: White bread, sugar, processed snacks',
        'Add protein & fiber: Stabilize blood sugar at every meal',
        'Practice intermittent fasting: Give your pancreas a rest'
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
      description: 'When you move, your muscles consume glucose directly—bypassing the insulin pathway. This immediately improves insulin sensitivity.',
      points: [
        'Post-meal walks: 10-15 minutes after eating reduces glucose spikes by 20-30%',
        'Strength training: 3x per week builds muscle (your biggest glucose sink)',
        'Daily walking: 7,000+ steps to stay active'
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
      description: 'Data is motivation. Seeing your numbers improve keeps you committed and helps you understand what works for your body.',
      points: [
        'Fasting glucose: Test first thing in the morning (target: below 100 mg/dL)',
        'A1C test: Every 3 months (target: below 5.7)',
        'CGM (optional): Continuous glucose monitor shows real-time patterns'
      ]
    },
    {
      id: 'step-4',
      number: 4,
      title: 'Add Supplement Support',
      subtitle: 'Accelerate Your Results',
      icon: Zap,
      color: 'amber',
      link: '/natural-blood-sugar',
      description: 'Supplements amplify the effects of diet and exercise. They fill nutritional gaps and support your body\'s natural ability to restore insulin sensitivity.',
      points: [
        'Berberine: Nature\'s metformin—activates the same cellular pathways',
        'Cinnamon & Chromium: Improve glucose uptake by cells',
        'Magnesium: Supports metabolic function and reduces insulin resistance'
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
      description: 'Poor sleep and chronic stress raise cortisol, which directly blocks insulin sensitivity and promotes belly fat storage. These are foundational.',
      points: [
        '7-9 hours of sleep: Non-negotiable for metabolic healing',
        'Stress management: Meditation, breathing, yoga reduce cortisol',
        'Magnesium & relaxation: Create a sleep sanctuary'
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
        title="5-Step Prediabetes Reversal Plan | ThriveHealth360"
        description="The evidence-based 5-step prediabetes reversal plan: diet, exercise, monitoring, natural supplements and sleep optimisation. Backed by peer-reviewed research."
        keywords="reverse prediabetes, prediabetes treatment, 5-step plan, blood sugar reversal, diabetes prevention"
        image="/images/reverse-prediabetes-hero-og.webp"
        url="/reverse-prediabetes"
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
                  The 5-Step Reversal Plan
                </h1>
                <p className="text-lg text-gray-700 mb-4 font-semibold">
                  Your Complete Roadmap to Restore Healthy Blood Sugar
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-7">
                  Follow these five interconnected steps to address the root cause of prediabetes and achieve lasting reversal in 3 years or less.
                </p>
              </div>

              {/* Hero Image */}
              <div className="hidden md:block">
                <img 
                  src="/images/reverse-prediabetes-hero-thumb-og.webp" 
                  alt="Woman preparing healthy food as part of prediabetes reversal plan"
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
            alt="Woman preparing healthy food as part of prediabetes reversal plan"
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
                  These statements have not been evaluated by the U.S. Food and Drug Administration (FDA). This content is for educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease or health condition, and is not a substitute for professional medical advice, diagnosis, or treatment. Individual results may vary. Always consult a qualified healthcare provider before making changes to your diet, exercise routine, or supplement regimen, especially if you have a pre-existing medical condition or are taking prescription medications. Individual results may vary and reversal is not guaranteed.
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
              summary="Multiple large-scale RCTs — including the Diabetes Prevention Program (n=3,234) and the Finnish Diabetes Prevention Study — show lifestyle intervention reduces progression to type 2 diabetes by 58% overall and 71% in adults over 60. The five steps below are grounded in that evidence base."
              caveats={[
                'Individual outcomes depend on adherence, baseline A1C, age, and comorbidities.',
                'Supplements on this page have not been FDA-evaluated for diabetes prevention.',
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
                Prediabetes is a metabolic condition that develops over time. Reversing it requires a comprehensive approach that addresses all the factors driving insulin resistance.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
                <p className="text-2xl font-semibold text-gray-900">
                  This 5-step plan isn't about quick fixes. It's about sustainable lifestyle changes that rewire your metabolism and restore your health.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Reversal Timeline</h2>
              <div className="space-y-6">
                {[
                  { period: 'Weeks 1-4', title: 'Foundation', desc: 'Establish new habits. Start seeing energy improvements.' },
                  { period: 'Weeks 5-8', title: 'Momentum', desc: 'Diet adaptation improves. Exercise becomes easier. First lab improvements possible.' },
                  { period: 'Months 3-6', title: 'Breakthrough', desc: 'Significant A1C improvements. Noticeable weight loss. Insulin sensitivity restoration begins.' },
                  { period: 'Months 6-12', title: 'Transformation', desc: 'Major metabolic improvements. Sustainable lifestyle integrated. Prediabetes reversal likely.' },
                  { period: '1-3 Years', title: 'Complete Reversal', desc: 'Full prediabetes reversal possible. New baseline established. Long-term health secured.' },
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Reversal?</h2>
                <p className="text-lg mb-8 text-emerald-50">
                  Complete all 5 steps within 4-6 weeks. Measurable blood sugar improvements typically appear within 6-8 weeks.
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