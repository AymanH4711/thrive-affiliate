// src/pages/prediabetes/PrediabetesSignsPage.tsx
// Route: /prediabetes-signs
// REWRITTEN — previously contained the exercise guide (wrong content)

import { Link } from 'react-router-dom';
import {
  AlertTriangle, CheckCircle, ArrowRight,
  Eye, Droplets, Zap, Activity, Wind,
  Thermometer, Hand, Moon, Info, ChevronRight,
  Brain, Tag
} from 'lucide-react';
import { SEO } from '@/components/seo/SEO';

export default function PrediabetesSignsPage() {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const signs = [
    {
      icon: Droplets,
      title: 'Increased Thirst',
      body: 'Excess glucose in your blood draws fluid from tissues, leaving you persistently thirsty — even after drinking. This is called polydipsia.',
      note: 'Not every thirsty person has prediabetes, but combined with other signs it is a key flag.',
    },
    {
      icon: Activity,
      title: 'Frequent Urination',
      body: 'Your kidneys work harder to filter excess glucose, producing more urine than normal (polyuria). Needing to urinate more than 7–8 times per day warrants attention.',
      note: 'Often noticed at night (nocturia) — waking once or more to urinate.',
    },
    {
      icon: Zap,
      title: 'Unexplained Fatigue',
      body: 'When glucose cannot enter cells efficiently due to insulin resistance, your body lacks energy despite eating. The result is persistent tiredness — especially after meals.',
      note: 'A spike followed by a sudden energy crash 1–2 hours after eating is a reliable signal.',
    },
    {
      icon: Eye,
      title: 'Blurred Vision',
      body: 'High blood sugar causes fluid shifts in the lens of the eye, temporarily altering its shape and affecting focus. Vision may fluctuate throughout the day.',
      note: 'This symptom often resolves when blood sugar normalises — but prompt evaluation is important.',
    },
    {
      icon: Thermometer,
      title: 'Slow-Healing Wounds',
      body: 'Elevated blood sugar impairs circulation and the immune response needed to repair tissue. Cuts and bruises that take longer than usual to heal can indicate metabolic dysfunction.',
      note: 'Particularly watch healing times on the lower legs and feet.',
    },
    {
      icon: Wind,
      title: 'Frequent Infections',
      body: 'Glucose-rich blood can feed bacteria and fungi, while insulin resistance weakens the immune system. Recurring skin, gum, bladder, or yeast infections may reflect prediabetes.',
      note: 'Recurring infections that do not respond quickly to treatment are worth investigating.',
    },
    {
      icon: Hand,
      title: 'Tingling or Numbness',
      body: 'Elevated glucose over time can begin to affect nerve fibres, causing tingling, burning, or numbness — particularly in the hands and feet (peripheral neuropathy).',
      note: 'Even in prediabetes — before full diabetes — early nerve changes can occur.',
    },
    {
      icon: Moon,
      title: 'Darkened Skin Patches',
      body: 'Acanthosis nigricans — patches of dark, velvety skin in body folds (neck, armpits, groin) — is strongly linked to insulin resistance and is considered a visible metabolic warning sign.',
      note: 'This is one of the most distinctive and visible signs of insulin resistance.',
    },
    {
      icon: Brain,
      title: 'Mood Changes & Brain Fog',
      body: 'Blood sugar fluctuations directly affect brain function and neurotransmitter balance. Insulin resistance can cause irritability, anxiety, poor concentration, and mental fatigue — particularly after meals rich in refined carbohydrates.',
      note: 'Mood swings that track with meal timing — better before eating, worse 1–2 hours after — are a notable pattern worth discussing with your doctor.',
    },
    {
      icon: Tag,
      title: 'Skin Tags',
      body: 'Small, soft skin growths appearing in body folds — neck, armpits, groin — are strongly associated with insulin resistance. Research suggests elevated insulin promotes tissue growth through IGF-1 receptor activation.',
      note: 'Skin tags alone are not diagnostic, but their presence alongside other signs significantly raises the probability of insulin resistance.',
    },
  ];

  const ranges = [
    { test: 'A1C', normal: 'Below 5.7%',       prediabetes: '5.7% – 6.4%',    diabetes: '6.5% or above' },
    { test: 'Fasting Glucose (mg/dL)', normal: 'Below 100', prediabetes: '100 – 125', diabetes: '126 or above' },
    { test: 'Fasting Glucose (mmol/L)', normal: 'Below 5.6', prediabetes: '5.6 – 6.9', diabetes: '7.0 or above' },
    { test: '2-hr Glucose (mg/dL)', normal: 'Below 140',   prediabetes: '140 – 199',   diabetes: '200 or above' },
    { test: '2-hr Glucose (mmol/L)', normal: 'Below 7.8',  prediabetes: '7.8 – 11.0',  diabetes: '11.1 or above' },
  ];

  const riskFactors = [
    'Overweight or obesity (BMI ≥ 25; or ≥ 23 for some Asian populations)',
    'Aged 35 or older',
    'Family history of type 2 diabetes (parent or sibling)',
    'Physically inactive (less than 3 sessions of moderate activity per week)',
    'History of gestational diabetes or baby over 9 lbs at birth',
    'Polycystic ovary syndrome (PCOS)',
    'Sleep apnoea or chronically poor sleep',
    'High blood pressure (above 140/90 mmHg)',
    'Low HDL cholesterol or high triglycerides',
    'History of cardiovascular disease',
  ];

  return (
    <>
      <SEO
        title="10 Warning Signs of Prediabetes | ThriveHealth360"
        description="Learn the 10 key warning signs of prediabetes — including fatigue, mood changes, skin tags, tingling, and darkened skin. Understand your blood sugar ranges and when to act."
        keywords="signs of prediabetes, prediabetes symptoms, warning signs high blood sugar, acanthosis nigricans, skin tags insulin resistance, mood changes blood sugar, prediabetes A1C range"
        image="/images/prediabetes-support-hero.webp"
        url="/prediabetes-signs"
      />

      <div className="bg-white min-h-screen font-sans text-gray-800">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <header className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <Link to="/prediabetes-support"
              className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition text-sm">
              ← Back to Prediabetes Support Hub
            </Link>
            <span className="bg-amber-400/20 text-amber-200 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
              Know Your Signs
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              10 Warning Signs of Prediabetes<br />
              <span className="text-emerald-400">Most People Miss</span>
            </h1>
            <p className="text-lg text-emerald-100 leading-relaxed max-w-2xl mb-8">
              Prediabetes rarely announces itself loudly. Most symptoms are subtle, gradual, and easy to dismiss.
              Knowing what to look for gives you the chance to act before type 2 diabetes develops.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('signs')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-7 rounded-xl transition flex items-center gap-2">
                See the 8 Signs <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('ranges')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-7 rounded-xl transition">
                Check Your Numbers
              </button>
            </div>
          </div>
        </header>

        {/* ── STICKY NAV ───────────────────────────────────────────────── */}
        <div className="bg-emerald-50 border-b border-emerald-100 sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-3.5 text-sm font-semibold text-emerald-800 whitespace-nowrap">
              {[
                ['signs',    'Warning Signs'],
                ['ranges',   'Blood Sugar Ranges'],
                ['risk',     'Risk Factors'],
                ['nextStep', 'What to Do Next'],
              ].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-emerald-600 transition">{label}</button>
              ))}
            </div>
          </div>
        </div>

                {/* ── MEDICAL DISCLAIMER ───────────────────────────────────────── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 max-w-4xl py-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-900 mb-1">Medical Disclaimer</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  The information on this page is for educational purposes only and does not constitute medical advice.
                  These statements have not been evaluated by the U.S. Food and Drug Administration (FDA).
                  No content here is intended to diagnose, treat, cure, or prevent any disease.
                  Insulin resistance is a serious metabolic condition — always consult a qualified healthcare provider
                  before starting any supplement regimen, making significant dietary changes, or beginning a new exercise
                  protocol, especially if you are taking medications or have an existing health condition.
                  Individual results may vary and reversal is not guaranteed.{' '}
                  <Link to="/medical-disclaimer" className="underline font-semibold">Full disclaimer →</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── WHAT IS PREDIABETES ──────────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { stat: '98M+',  label: 'US adults with prediabetes',       sub: '(CDC, 2024)' },
                { stat: '80%',   label: 'Don\'t know they have it',          sub: 'It is often asymptomatic' },
                { stat: '70%',   label: 'Risk of progression without action', sub: 'Action can reduce this to <5%' },
              ].map((c, i) => (
                <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-emerald-700 mb-1">{c.stat}</p>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{c.label}</p>
                  <p className="text-xs text-gray-500">{c.sub}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What Is Prediabetes?</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Prediabetes is a metabolic condition where blood glucose levels are higher than normal — but not yet high enough to be classified as type 2 diabetes. It reflects underlying <strong>insulin resistance</strong>: your cells have become less responsive to insulin, so glucose builds up in the bloodstream.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The encouraging reality is that prediabetes is <strong>reversible</strong>. Multiple large-scale trials — including the Diabetes Prevention Program — have shown that lifestyle changes reduce progression to type 2 diabetes by 58% or more. But the window for action requires recognising the signs early.
              </p>
            </div>
          </div>
        </section>

        {/* ── 8 SIGNS ──────────────────────────────────────────────────── */}
        <section id="signs" className="py-16 bg-emerald-50 scroll-mt-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Know Your Body</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The 10 Warning Signs</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              These signs do not confirm prediabetes on their own — but if several apply to you,
              it is worth asking your doctor for a blood sugar test. Signs 1–8 are the most
              clinically documented; signs 9–10 are also well-supported and covered in depth
              in our{' '}
              <a href="/blog/5-warning-signs-of-prediabetes"
                className="text-emerald-700 underline font-semibold hover:text-emerald-900">
                companion blog article
              </a>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {signs.map((sign, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <sign.icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Sign {i + 1}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{sign.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{sign.body}</p>
                      <div className="flex gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800">{sign.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOOD SUGAR RANGES ───────────────────────────────────────── */}
        <section id="ranges" className="py-16 bg-white scroll-mt-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Know Your Numbers</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Blood Sugar Reference Ranges</h2>
            <p className="text-gray-600 mb-8">
              These are the diagnostic thresholds used by the ADA, NHS, and equivalent bodies globally. Both mg/dL (US) and mmol/L (UK, CA, AU) values are shown.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-bold text-gray-700 border-b border-gray-200">Test</th>
                    <th className="text-center p-4 font-bold text-emerald-700 border-b border-gray-200">Normal</th>
                    <th className="text-center p-4 font-bold text-amber-700 border-b border-gray-200">Prediabetes</th>
                    <th className="text-center p-4 font-bold text-red-700 border-b border-gray-200">Diabetes</th>
                  </tr>
                </thead>
                <tbody>
                  {ranges.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-gray-800 border-b border-gray-100">{row.test}</td>
                      <td className="p-4 text-center text-emerald-700 font-medium border-b border-gray-100">{row.normal}</td>
                      <td className="p-4 text-center text-amber-700 font-bold border-b border-gray-100 bg-amber-50/50">{row.prediabetes}</td>
                      <td className="p-4 text-center text-red-700 font-medium border-b border-gray-100">{row.diabetes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Sources: American Diabetes Association (ADA) Standards of Medical Care in Diabetes 2024; WHO Diagnostic Criteria for Diabetes Mellitus.
            </p>
          </div>
        </section>

        {/* ── RISK FACTORS ─────────────────────────────────────────────── */}
        <section id="risk" className="py-16 bg-emerald-50 scroll-mt-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Am I at Risk?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Risk Factors for Prediabetes</h2>
            <p className="text-gray-600 mb-8">
              Having one or more of these factors does not mean you have prediabetes — but they significantly increase the probability and warrant a blood test.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {riskFactors.map((factor, i) => (
                <div key={i} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{factor}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">When to Ask for a Test</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The ADA recommends routine blood sugar screening for all adults aged 35+, or earlier if you have one or more risk factors above. A simple fasting glucose test or A1C blood draw is all that is needed — no fasting required for A1C. Ask your GP, primary care physician, or pharmacist.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT TO DO NEXT ──────────────────────────────────────────── */}
        <section id="nextStep" className="py-16 bg-white scroll-mt-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Take Action</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What to Do If You Recognise These Signs</h2>
            <p className="text-gray-600 mb-10">
              Prediabetes is not a life sentence. These are your next steps.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  step: '1',
                  title: 'Get Tested',
                  desc: 'Ask your doctor for a fasting glucose or A1C test. This is the only way to confirm prediabetes. Some pharmacies offer free or low-cost screening.',
                  color: 'emerald',
                },
                {
                  step: '2',
                  title: 'Start the 5-Step Plan',
                  desc: 'Diet, exercise, monitoring, supplements, and sleep optimisation — together these reduce progression by 58–80% in clinical trials.',
                  color: 'blue',
                },
                {
                  step: '3',
                  title: 'Track Your Progress',
                  desc: 'Monitor your fasting glucose at home. Repeat A1C every 3–6 months. Your numbers will show if the changes are working.',
                  color: 'purple',
                },
              ].map((card, i) => (
                <div key={i} className={`bg-${card.color}-50 border border-${card.color}-200 rounded-2xl p-6`}>
                  <div className={`w-9 h-9 bg-${card.color}-600 text-white rounded-full flex items-center justify-center font-bold mb-4 text-sm`}>
                    {card.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/reverse-prediabetes"
                className="flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl transition shadow-lg shadow-emerald-200">
                <span>Start the 5-Step Reversal Plan</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
              <Link to="/prediabetes-support"
                className="flex items-center justify-between bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-emerald-400 text-gray-800 font-bold px-6 py-4 rounded-xl transition">
                <span>Back to Support Hub</span>
                <ChevronRight className="w-5 h-5 flex-shrink-0 text-emerald-600" />
              </Link>
            </div>
          </div>
        </section>

                {/* ── AFFILIATE DISCLOSURE ─────────────────────────────────────── */}
        <section className="bg-gray-50 border-t border-gray-200 py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-700 mb-1">Affiliate Disclosure</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Transparency notice:</strong> This page contains affiliate links to supplement and wellness
                  products. ThriveHealth360 may earn a commission if you purchase through these links, at no additional
                  cost to you. This financial relationship may influence which products we feature and how they are
                  presented. We apply editorial and quality standards to all recommendations; however, you should
                  conduct your own research and consult a qualified healthcare professional before purchasing any
                  supplement. This disclosure is provided in accordance with the FTC's guidelines on endorsements and
                  testimonials (16 CFR §255).{' '}
                  <Link to="/affiliate-disclosure" className="underline text-emerald-700 font-semibold">Full Disclosure Policy →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}