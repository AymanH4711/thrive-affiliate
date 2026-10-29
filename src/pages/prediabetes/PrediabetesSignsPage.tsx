// src/pages/prediabetes/PrediabetesSignsPage.tsx
// Route: /prediabetes-signs
// REWRITTEN — previously contained the exercise guide (wrong content)

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle, ArrowRight,
  Eye, Droplets, Zap, Waves, ShieldAlert,
  Thermometer, Hand, Layers, ChevronRight,
  Brain, Tag, Info, type LucideIcon
} from 'lucide-react';
import { SEO } from '@/components/seo/SEO';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://thrivehealth360.org').replace(/\/$/, '');

// The site header is sticky and its height can change when the desktop menu
// wraps or the mobile menu opens. Use a measured CSS variable so the section
// nav always sits directly below it instead of overlapping.
const sectionScrollStyle = {
  scrollMarginTop: 'calc(var(--site-header-height, 72px) + 64px)',
};

// Full literal class names per color, so Tailwind's JIT scanner can see and
// generate them. Interpolated strings like `bg-${card.color}-50` are
// invisible to the scanner — only classes it sees as complete literals in
// source get generated. Same fix pattern applied in IntermittentFastingBloodSugar.tsx.
const colorClasses = {
  emerald: { bg50: 'bg-emerald-50', border200: 'border-emerald-200', bg600: 'bg-emerald-600' },
  blue:    { bg50: 'bg-blue-50',    border200: 'border-blue-200',    bg600: 'bg-blue-600' },
  purple:  { bg50: 'bg-purple-50',  border200: 'border-purple-200',  bg600: 'bg-purple-600' },
} as const;

type CardColor = keyof typeof colorClasses;

type Sign = {
  icon: LucideIcon;
  title: string;
  body: string;
  note: string;
  /** The two signs that can be seen on the skin — foreground these. */
  visible?: boolean;
};

// Ordered deliberately: the two visible insulin-resistance signs come first,
// then the symptoms that may appear as blood sugar rises. Most people with
// prediabetes have no symptoms at all, which the section intro makes explicit.
const signs: Sign[] = [
  {
    icon: Layers,
    title: 'Darkened Skin Patches',
    body: 'Acanthosis nigricans — patches of dark, velvety skin in body folds such as the neck, armpits, or groin — is strongly linked to insulin resistance. It is one of the few visible signs of prediabetes.',
    note: 'Acanthosis nigricans is one of the most distinctive visible signs of insulin resistance.',
    visible: true,
  },
  {
    icon: Tag,
    title: 'Skin Tags',
    body: 'Small, soft skin growths that appear in body folds — neck, armpits, groin — are commonly seen alongside insulin resistance, though the exact mechanism is not fully understood.',
    note: 'Skin tags alone are not diagnostic, but they are worth mentioning to your doctor, especially alongside other signs.',
    visible: true,
  },
  {
    icon: Droplets,
    title: 'Increased Thirst',
    body: 'Excess glucose in your blood draws fluid from tissues, leaving you persistently thirsty — even after drinking. This is called polydipsia.',
    note: 'Persistent thirst has many causes; mention it to your doctor, especially if it occurs alongside other signs.',
  },
  {
    icon: Waves,
    title: 'Frequent Urination',
    body: 'When blood sugar is high, the kidneys work harder to filter excess glucose, producing more urine than usual (polyuria).',
    note: 'Waking at night to urinate is common and often unrelated to blood sugar, but it is worth discussing if it is new or persistent.',
  },
  {
    icon: Zap,
    title: 'Unexplained Fatigue',
    body: 'When glucose cannot enter cells efficiently due to insulin resistance, your body may lack energy despite eating. The result can be persistent tiredness — especially after meals.',
    note: 'An energy crash after a high-carbohydrate meal can happen for many reasons and is not specific to prediabetes.',
  },
  {
    icon: Eye,
    title: 'Blurred Vision',
    body: 'High blood sugar causes fluid shifts in the lens of the eye, temporarily altering its shape and affecting focus. Vision may fluctuate throughout the day.',
    note: 'Blood sugar-related blurring often improves when glucose normalizes, but sudden vision changes need prompt medical care.',
  },
  {
    icon: Thermometer,
    title: 'Slow-Healing Wounds',
    body: 'Elevated blood sugar impairs circulation and the immune response needed to repair tissue. Cuts and bruises that take longer than usual to heal can indicate metabolic dysfunction.',
    note: 'This is more typical after blood sugar has been elevated for some time. Watch healing on the lower legs and feet.',
  },
  {
    icon: ShieldAlert,
    title: 'Frequent Infections',
    body: 'High blood sugar can impair immune function, and glucose-rich blood can feed bacteria and fungi. Recurring skin, gum, bladder, or yeast infections may reflect prediabetes.',
    note: 'Recurring infections have many causes; persistent or unusual infections should be evaluated.',
  },
  {
    icon: Hand,
    title: 'Tingling or Numbness',
    body: 'Elevated glucose over time can begin to affect nerve fibers, causing tingling, burning, or numbness — particularly in the hands and feet (peripheral neuropathy).',
    note: 'Numbness or tingling has many causes; tell your doctor if it is persistent or spreading.',
  },
  {
    icon: Brain,
    title: 'Mood Changes & Brain Fog',
    body: 'Blood sugar fluctuations can affect mood, concentration, and energy. Some people with insulin resistance report irritability, anxiety, poor concentration, and mental fatigue — particularly after meals rich in refined carbohydrates.',
    note: 'Mood and concentration changes are nonspecific and can have many causes; tracking them alongside meals may help your doctor.',
  },
];

// ADA criteria. mg/dL and mmol/L are combined into one row per test so readers
// do not have to map two rows together. WHO 2006 and NICE/NHS differ — see the
// regional note under the table.
const ranges = [
  {
    test: 'A1C',
    normal: 'Below 5.7% (39 mmol/mol)',
    prediabetes: '5.7% – 6.4% (39–47 mmol/mol)',
    diabetes: '6.5% or above (48 mmol/mol)',
  },
  {
    test: 'Fasting Glucose',
    normal: 'Below 100 mg/dL (5.6 mmol/L)',
    prediabetes: '100 – 125 mg/dL (5.6 – 6.9 mmol/L)',
    diabetes: '126 mg/dL or above (7.0 mmol/L)',
  },
  {
    test: '2-Hour Glucose (OGTT)',
    normal: 'Below 140 mg/dL (7.8 mmol/L)',
    prediabetes: '140 – 199 mg/dL (7.8 – 11.0 mmol/L)',
    diabetes: '200 mg/dL or above (11.1 mmol/L)',
  },
];

const riskFactors = [
  'Overweight or obesity (BMI ≥ 25; or ≥ 23 for some Asian populations)',
  'Aged 35 or older (ADA screening threshold)',
  'Family history of type 2 diabetes (parent or sibling)',
  'High-risk race or ethnicity (e.g., African American, Latino, Native American, Asian American, Pacific Islander)',
  'Physically inactive (less than 3 sessions of moderate activity per week)',
  'History of gestational diabetes or baby over 9 lbs at birth',
  'Polycystic ovary syndrome (PCOS)',
  'High blood pressure (130/80 mmHg or higher, or on treatment for hypertension)',
  'Low HDL cholesterol or high triglycerides',
  'History of cardiovascular disease',
  'History of prediabetes (previous A1C 5.7–6.4% or fasting glucose 100–125 mg/dL)',
  'Other conditions linked to insulin resistance (e.g., severe obesity, acanthosis nigricans)',
];

// Grounded in facts already stated and sourced on this page — ADA ranges from
// the table, the DPP figures below, and the no-fasting-required note. Same
// array drives both the visible FAQ section and FAQPage schema, so the two
// can't drift apart.
const faqs = [
  {
    q: 'What are the first signs of prediabetes?',
    a: 'Most people with prediabetes have no symptoms. If blood sugar rises further, increased thirst, fatigue, and frequent urination may occur. No single symptom confirms prediabetes; a blood test is the only way to know.',
  },
  {
    q: 'What A1C level is considered prediabetes?',
    a: 'An A1C between 5.7% and 6.4% is classified as prediabetes by the ADA. WHO’s 2006 criteria do not define prediabetes by A1C, and NICE/NHS uses 6.0–6.4% (42–47 mmol/mol).',
  },
  {
    q: 'Can prediabetes be reversed?',
    a: 'Often. The Diabetes Prevention Program found that diet, activity, and modest weight loss reduced progression to type 2 diabetes by 58% over about 2.8 years — and by 71% in adults over 60 (CDC).',
  },
  {
    q: 'Do I need to fast before an A1C test?',
    a: 'No. Unlike a fasting glucose test, the A1C blood draw does not require fasting and can be done at any time of day.',
  },
  {
    q: 'At what age should I get screened for prediabetes?',
    a: 'The ADA recommends routine screening from age 35, or earlier if you have risk factors such as overweight, a family history of type 2 diabetes, or high blood pressure. The CDC recommends starting at 45 for adults at average risk. Guidelines vary by country, so ask your clinician.',
  },
  {
    q: 'What is acanthosis nigricans?',
    a: 'Acanthosis nigricans is dark, velvety skin in body folds such as the neck, armpits, or groin. It is strongly associated with insulin resistance and is one of the few visible signs of prediabetes.',
  },
];

// MedicalWebPage + FAQPage structured data. reviewedBy is deliberately
// omitted — no fabricated reviewers (sitewide policy).
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: '10 Warning Signs of Prediabetes',
      description: 'Most people with prediabetes have no symptoms. Learn the possible signs of high blood sugar, ADA blood sugar ranges, and when to get tested.',
      url: `${SITE_URL}/prediabetes-signs`,
      dateModified: '2026-10-29',
      author: { '@type': 'Organization', name: 'ThriveHealth360', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'ThriveHealth360',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
      },
      mainEntity: {
        '@type': 'MedicalCondition',
        name: 'Prediabetes',
        code: { '@type': 'MedicalCode', codeValue: 'R73.03', codingSystem: 'ICD-10' },
        signOrSymptom: signs.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s.title })),
        riskFactor: riskFactors.map((r) => ({ '@type': 'MedicalRiskFactor', description: r })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

const nextSteps: Array<{ step: string; title: string; desc: string; color: CardColor }> = [
  {
    step: '1',
    title: 'Get Tested',
    desc: 'Ask your doctor for a fasting glucose or A1C test. This is the only way to confirm prediabetes. Some pharmacies offer free or low-cost screening.',
    color: 'emerald',
  },
  {
    step: '2',
    title: 'Start the 5-Step Plan',
    desc: 'Diet, exercise, and weight loss are the interventions tested in the DPP, which reduced progression by 58% over about 2.8 years. Monitoring, sleep, and evidence-based natural support are supportive steps — not DPP-tested interventions.',
    color: 'blue',
  },
  {
    step: '3',
    title: 'Track Your Progress',
    desc: 'Monitor glucose at home if your clinician recommends it. Repeat A1C at least annually, or as advised by your clinician. Your numbers show whether the changes are working.',
    color: 'purple',
  },
];

export default function PrediabetesSignsPage() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const siteHeader = document.querySelector<HTMLElement>('[data-site-header]');

    const applyScrollBehavior = () => {
      root.style.scrollBehavior = reducedMotion.matches ? 'auto' : 'smooth';
    };

    const updateHeaderHeight = () => {
      if (!siteHeader) return;
      const height = Math.ceil(siteHeader.getBoundingClientRect().height);
      root.style.setProperty('--site-header-height', `${height}px`);
    };

    applyScrollBehavior();
    updateHeaderHeight();
    reducedMotion.addEventListener('change', applyScrollBehavior);
    window.addEventListener('resize', updateHeaderHeight);

    const observer =
      siteHeader && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(updateHeaderHeight)
        : null;
    if (siteHeader) observer?.observe(siteHeader);

    return () => {
      root.style.scrollBehavior = '';
      root.style.removeProperty('--site-header-height');
      reducedMotion.removeEventListener('change', applyScrollBehavior);
      window.removeEventListener('resize', updateHeaderHeight);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <SEO
        title="10 Warning Signs of Prediabetes | ThriveHealth360"
        description="Learn the possible signs of prediabetes and high blood sugar — including darkened skin and skin tags — plus ADA ranges and when to get tested."
        keywords="signs of prediabetes, prediabetes symptoms, high blood sugar signs, acanthosis nigricans, skin tags insulin resistance, prediabetes A1C range, prediabetes no symptoms"
        image="/images/prediabetes-signs-og.webp"
        imageWidth={1200}
        imageHeight={630}
        url="/prediabetes-signs"
        schema={schemaMarkup}
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
              Prediabetes rarely announces itself.{' '}
              <strong className="text-white">Most people with prediabetes have no symptoms at all.</strong>{' '}
              The most visible signs — darkened skin patches and skin tags — are linked to insulin
              resistance. When blood sugar rises, possible signs include increased thirst, frequent
              urination, fatigue, and blurred vision. These signs do not confirm prediabetes — only a
              blood test can.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#signs"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-7 rounded-xl transition flex items-center gap-2">
                See the 10 Signs <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#ranges"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-7 rounded-xl transition">
                Check Your Numbers
              </a>
            </div>
          </div>
        </header>

        {/* ── STICKY NAV ───────────────────────────────────────────────── */}
        <nav
          aria-label="On this page"
          className="bg-emerald-50 border-b border-emerald-100 sticky z-30 shadow-sm"
          style={{ top: 'var(--site-header-height, 72px)' }}
        >
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-3.5 text-sm font-semibold text-emerald-800 whitespace-nowrap">
              {[
                ['signs',    'Warning Signs'],
                ['ranges',   'Blood Sugar Ranges'],
                ['risk',     'Risk Factors'],
                ['nextStep', 'What to Do Next'],
                ['faq',      'FAQ'],
              ].map(([id, label]) => (
                <a key={id} href={`#${id}`} className="hover:text-emerald-700 transition">{label}</a>
              ))}
            </div>
          </div>
        </nav>

        {/* ── MEDICAL DISCLAIMER ───────────────────────────────────────── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 max-w-4xl py-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-amber-900 mb-1">Medical Disclaimer</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  The information on this page is for educational purposes only and does not constitute medical advice.
                  No content here is intended to diagnose, treat, cure, or prevent any disease.
                  Insulin resistance is a serious metabolic condition — always consult a qualified healthcare provider
                  before making significant dietary changes or beginning a new exercise
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
                {
                  stat: '115.2M',
                  label: 'US adults with prediabetes',
                  sub: 'CDC, 2026 · 8 in 10 don’t know they have it',
                },
                {
                  stat: 'Up to 70%',
                  label: 'Lifetime risk of progression',
                  sub: 'CDC estimate; 15–30% progress within 5 years without action',
                },
                {
                  stat: '58%',
                  label: 'Lower progression with lifestyle change',
                  sub: 'Over ~2.8 years in the Diabetes Prevention Program (CDC)',
                },
              ].map((c) => (
                <div key={c.label} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
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
                Prediabetes is <strong>often reversible</strong>. In the Diabetes Prevention Program (DPP), diet, activity, and modest weight loss reduced progression to type 2 diabetes by 58% over about 2.8 years — and by 71% in adults over 60 (CDC). Because most people have no symptoms, a blood test is the only reliable way to find it early.
              </p>
            </div>
          </div>
        </section>

        {/* ── 10 SIGNS ─────────────────────────────────────────────────── */}
        <section id="signs" className="py-16 bg-emerald-50" style={sectionScrollStyle}>
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">Know Your Body</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">10 Signs of High Blood Sugar to Watch For</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Most people with prediabetes have no symptoms at all. The signs below can appear as
              blood sugar rises — they do not confirm prediabetes on their own. If several apply to
              you, ask your doctor for a blood test. For a shorter overview, see our{' '}
              <Link to="/blog/5-warning-signs-of-prediabetes"
                className="text-emerald-700 underline font-semibold hover:text-emerald-900">
                companion blog article
              </Link>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {signs.map((sign, i) => (
                <div key={sign.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <sign.icon className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Sign {i + 1}</span>
                        {sign.visible && (
                          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">Visible sign</span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{sign.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{sign.body}</p>
                      <div className="flex gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
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
        <section id="ranges" className="py-16 bg-white" style={sectionScrollStyle}>
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">Know Your Numbers</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Blood Sugar Reference Ranges</h2>
            <p className="text-gray-600 mb-8">
              This table follows <strong>American Diabetes Association (ADA)</strong> criteria used
              in the US. Both mg/dL and mmol/L values are shown.
            </p>
            <div
              className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
              role="region"
              aria-label="ADA blood sugar reference ranges"
              tabIndex={0}
            >
              <table className="w-full text-sm">
                <caption className="sr-only">
                  ADA blood sugar reference ranges for normal, prediabetes, and diabetes
                </caption>
                <thead>
                  <tr className="bg-gray-50">
                    <th scope="col" className="text-left p-4 font-bold text-gray-700 border-b border-gray-200">Test</th>
                    <th scope="col" className="text-center p-4 font-bold text-emerald-700 border-b border-gray-200">Normal</th>
                    <th scope="col" className="text-center p-4 font-bold text-amber-700 border-b border-gray-200">Prediabetes</th>
                    <th scope="col" className="text-center p-4 font-bold text-red-700 border-b border-gray-200">Diabetes</th>
                  </tr>
                </thead>
                <tbody>
                  {ranges.map((row, i) => (
                    <tr key={row.test} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <th scope="row" className="p-4 text-left font-semibold text-gray-800 border-b border-gray-100">{row.test}</th>
                      <td className="p-4 text-center text-emerald-700 font-medium border-b border-gray-100">{row.normal}</td>
                      <td className="p-4 text-center text-amber-700 font-bold border-b border-gray-100 bg-amber-50/50">{row.prediabetes}</td>
                      <td className="p-4 text-center text-red-700 font-medium border-b border-gray-100">{row.diabetes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              This table follows ADA criteria (US). WHO’s 2006 diagnostic criteria use a fasting
              glucose lower limit of 6.1 mmol/L and do not define prediabetes by A1C; NICE/NHS uses
              A1C 6.0–6.4% (42–47 mmol/mol).
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Sources:{' '}
              <a href="https://diabetesjournals.org/care/article/48/Supplement_1/S27/157566/2-Diagnosis-and-Classification-of-Diabetes"
                target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                ADA Standards of Care in Diabetes—2025
              </a>;{' '}
              <a href="https://www.who.int/publications/i/item/definition-and-diagnosis-of-diabetes-mellitus-and-intermediate-hyperglycaemia"
                target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                WHO 2006
              </a>;{' '}
              <a href="https://www.nice.org.uk/guidance/ph38/chapter/recommendations"
                target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                NICE PH38
              </a>. Sources last checked October 29, 2026.
            </p>
          </div>
        </section>

        {/* ── RISK FACTORS ─────────────────────────────────────────────── */}
        <section id="risk" className="py-16 bg-emerald-50" style={sectionScrollStyle}>
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">Am I at Risk?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Risk Factors for Prediabetes</h2>
            <p className="text-gray-600 mb-8">
              Having one or more of these factors does not mean you have prediabetes — but they
              increase the probability and warrant a blood test. This list follows ADA screening
              guidance.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {riskFactors.map((factor) => (
                <div key={factor} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <Info className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-gray-700">{factor}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">When to Ask for a Test</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The ADA recommends routine blood sugar screening for all adults aged 35 and older,
                or earlier if you have one or more risk factors above. The CDC recommends starting
                at 45 for adults at average risk, so guidance varies. A fasting glucose or A1C test
                can screen for prediabetes; A1C does not require fasting. An abnormal result may
                need confirmation with a repeat test. Ask your GP, primary care physician, or
                pharmacist.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT TO DO NEXT ──────────────────────────────────────────── */}
        <section id="nextStep" className="py-16 bg-white" style={sectionScrollStyle}>
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">Take Action</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What to Do If You Recognize These Signs</h2>
            <p className="text-gray-600 mb-10">
              Prediabetes is often reversible. These are your next steps.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {nextSteps.map((card) => (
                <div key={card.step} className={`${colorClasses[card.color].bg50} border ${colorClasses[card.color].border200} rounded-2xl p-6`}>
                  <div className={`w-9 h-9 ${colorClasses[card.color].bg600} text-white rounded-full flex items-center justify-center font-bold mb-4 text-sm`}>
                    {card.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Seek prompt medical care</strong> for sudden vision changes, a wound that is
                not healing, or signs of infection such as fever, spreading redness, or swelling.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/prediabetes-plan"
                className="flex items-center justify-between bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-4 rounded-xl transition shadow-lg shadow-emerald-200">
                <span>Start the 5-Step Prediabetes Plan</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              </Link>
              <Link to="/prediabetes-support"
                className="flex items-center justify-between bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-emerald-400 text-gray-800 font-bold px-6 py-4 rounded-xl transition">
                <span>Back to Support Hub</span>
                <ChevronRight className="w-5 h-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              The 5-step plan includes optional supplement information and affiliate links; see its{' '}
              <Link to="/prediabetes-plan#affiliate-disclosure" className="underline hover:text-gray-700">
                affiliate disclosure
              </Link>{' '}
              for details.
            </p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" className="py-16 bg-emerald-50" style={sectionScrollStyle}>
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">Common Questions</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="bg-white border border-gray-200 rounded-xl p-5 group">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                    {item.q}
                    <ChevronRight className="w-4 h-4 text-emerald-600 flex-shrink-0 transition-transform group-open:rotate-90" aria-hidden="true" />
                  </summary>
                  <p className="text-sm text-gray-700 leading-relaxed mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
