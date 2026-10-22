// src/pages/blog/Prediabetes-Support/InsulinSensitivityFAQ2026.tsx
// ThriveHealth360 — Insulin sensitivity FAQ for people navigating prediabetes.
// Content is intentionally cautious where the evidence is indirect or mixed.
// No product-specific affiliate CTA is currently attached to this article.

import React, { useState } from 'react';
import { submitLeadMagnet, triggerDownload } from '@/api/leadMagnet';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  AlertCircle,
  Zap,
  Mail,
  Download,
  ArrowRight,
  Heart,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Moon,
  Apple,
  Activity,
  ShieldCheck,
  Microscope,
  Droplet,
  Brain,
  HelpCircle,
} from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import type { BlogArticleMeta } from '@/data/types';
import { FAQSection } from '@/components/FAQSection';
import {
  DATE_MODIFIED,
  actionPlan,
  basicsAndTestingFAQs,
  citations,
  comparisonData,
  getColorClasses,
  improvingNaturallyFAQs,
  insulinSensitivityIngredients,
  measurementItems,
  schemaMarkup,
  supplementsFAQs,
  trackingFAQs,
  warningSigns,
} from './insulinSensitivityFaqData';

// ─── Hero image (1536×1024, 3:2, webp) ──────────────────────────────────────
const heroImage = '/images/blog/insulin-sensitivity-faq-hero.webp';

// ─── Component ───────────────────────────────────────────────────────────────
const InsulinSensitivityFAQ2026: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const lastUpdatedLabel = new Date(`${DATE_MODIFIED}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleLeadMagnet = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();

    try {
      // Start the file immediately; lead capture and email delivery are best-effort.
      triggerDownload('7-day-blood-sugar-reset.pdf');

      const { subscribed, emailed } = await submitLeadMagnet({
        email,
        name,
        resourceName: '7-Day Blood Sugar Reset Guide',
        source: 'blog-insulin-sensitivity-faq-2026',
      });

      if (subscribed || emailed) {
        setMessage({
          type: 'success',
          text: emailed
            ? 'Check your email, and your guide is downloading now.'
            : 'Your guide is downloading now.',
        });
        form.reset();
      } else {
        setMessage({ type: 'error', text: 'Your guide downloaded, but we could not save your email. Please try again.' });
      }
    } catch (error) {
      console.error('Lead magnet submission failed:', error);
      setMessage({ type: 'error', text: 'Your guide downloaded, but we could not save your email. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      <SEO
        title="Insulin Sensitivity FAQ 2026: 14 Evidence-Informed Answers"
        description="Insulin sensitivity, HOMA-IR, and blood sugar: 14 practical, evidence-informed answers, including what the research does and does not support."
        keywords="insulin sensitivity FAQ 2026, how to improve insulin sensitivity, what causes insulin resistance, HOMA-IR explained, insulin sensitivity supplements"
        image={heroImage}
        imageWidth={1536}
        imageHeight={1024}
        url="/blog/insulin-sensitivity-faq-2026"
        type="article"
        author="ThriveHealth360 Editorial Team"
        pillarId="insulin-resistance"
        schema={schemaMarkup}
      />

      <main className="min-h-screen bg-white">
        <div className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link to="/blog" className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to Blog
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-6 py-16">

          {/* ── HEADER ── */}
          <header className="mb-12 pb-8 border-b-2 border-gray-200">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Insulin Sensitivity</span>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">FAQ Guide</span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">2026 Evidence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Insulin Sensitivity FAQ 2026:
              <span className="text-emerald-700"> 14 Evidence-Informed Answers to Common Questions</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span>ThriveHealth360 Editorial Team</span>
              <span aria-hidden="true">•</span>
              <span>16 min read</span>
              <span aria-hidden="true">•</span>
              <span>Last updated: {lastUpdatedLabel}</span>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-bold text-amber-900 mb-2">
                    <span aria-hidden="true">⚠️ </span>Medical Disclaimer
                  </p>
                  <p className="text-sm text-amber-800">
                    This guide is educational and does not replace individualized care.
                    <strong> Talk with your prescriber before adding any supplement, especially if you use metformin, insulin, a sulfonylurea, or another glucose-lowering medication.</strong>{' '}
                    Some supplements can amplify low blood sugar or interact with other medicines.
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* ── HERO IMAGE ── */}
          <figure className="mb-12">
            <img
              src={heroImage}
              alt="Illustration of a glucose meter, a HOMA-IR result, and glucose transport in muscle cells"
              className="w-full h-auto rounded-xl shadow-lg"
              width={1536}
              height={1024}
            />
            <figcaption className="text-center text-sm text-gray-600 mt-4">
              From left: GLUT4 glucose transport, a glucose meter, and examples of supplements discussed below. The displayed HOMA-IR value is illustrative—cutoffs vary by lab and clinical context.
            </figcaption>
          </figure>

          {/* ── TL;DR ── */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-700" aria-hidden="true" />
              <h2 className="text-xl font-bold text-gray-900">
                <span aria-hidden="true">⚡ </span>TL;DR — Key Takeaways
              </h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Insulin sensitivity is not a diagnosis.</strong> It describes how readily cells respond to insulin; resistance develops gradually and has several contributors.</li>
              <li><strong>HOMA-IR can be useful for tracking, but cutoffs are not standardized.</strong> Interpret it with the lab range and your clinician, not as a stand-alone diagnosis.</li>
              <li><strong>Movement, sleep, and a sustainable eating pattern have the strongest lifestyle evidence.</strong> Supplements are optional and should be evaluated individually.</li>
              <li><strong>Timelines vary.</strong> Post-meal glucose can change quickly, while HbA1c reflects roughly three months of glucose exposure. There is no guaranteed “reversal” deadline.</li>
              <li><strong>Supplement evidence is uneven.</strong> Berberine is the best studied of the options here, but formulations differ and interactions are common.</li>
              <li><strong>Where the evidence is uncertain, this guide says so.</strong> A cautious plan you can sustain is more useful than an aggressive one you cannot.</li>
            </ul>
          </div>

          {/* ── TABLE OF CONTENTS ── */}
          <nav aria-label="Article sections" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
            <h2 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" aria-hidden="true" /> Quick Navigation — 14 Questions in 4 Sections
            </h2>
            <div className="grid md:grid-cols-2 gap-y-2 gap-x-4 text-sm text-blue-800">
              <a href="#what-is-insulin-sensitivity" className="hover:underline"><span aria-hidden="true">↓ </span>What Is Insulin Sensitivity?</a>
              <a href="#why-matters" className="hover:underline"><span aria-hidden="true">↓ </span>Why It Matters for Diabetes</a>
              <a href="#how-to-measure" className="hover:underline"><span aria-hidden="true">↓ </span>How to Measure It (HOMA-IR)</a>
              <a href="#signs-of-resistance" className="hover:underline"><span aria-hidden="true">↓ </span>7 Warning Signs</a>
              <a href="#pillars-to-improve" className="hover:underline"><span aria-hidden="true">↓ </span>5 Pillars to Improve It</a>
              <a href="#faq-basics" className="hover:underline"><span aria-hidden="true">↓ </span>Basics & Testing FAQ (4 Qs)</a>
              <a href="#faq-natural" className="hover:underline"><span aria-hidden="true">↓ </span>Improving Naturally FAQ (5 Qs)</a>
              <a href="#comparison-table" className="hover:underline"><span aria-hidden="true">↓ </span>Supplement Comparison Table</a>
              <a href="#ingredient-breakdown" className="hover:underline"><span aria-hidden="true">↓ </span>Supplement Ingredients (8)</a>
              <a href="#faq-supplements" className="hover:underline"><span aria-hidden="true">↓ </span>Supplement FAQ (3 Qs)</a>
              <a href="#action-plan" className="hover:underline"><span aria-hidden="true">↓ </span>8-Week Action Plan</a>
              <a href="#faq-tracking" className="hover:underline"><span aria-hidden="true">↓ </span>Tracking & Progress FAQ (2 Qs)</a>
            </div>
          </nav>

          {/* ── SECTION: WHAT IS INSULIN SENSITIVITY? ── */}
          <section id="what-is-insulin-sensitivity" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Is Insulin Sensitivity? A Simple Explanation</h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-6">
              <p className="text-emerald-900 font-semibold mb-2">
                <span aria-hidden="true">🔑 </span>A volume-knob analogy:
              </p>
              <p className="text-emerald-800">
                Insulin is less like an on/off switch and more like a volume knob. In sensitive cells, a quiet insulin signal is enough to move glucose out of the bloodstream. In resistant cells, the pancreas has to turn the volume up. That compensation can keep glucose looking normal for a while, even as the underlying biology is changing.
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              More precisely, insulin sensitivity is how readily muscle, liver, and fat cells respond to insulin’s signal. When sensitivity is high, a small amount of insulin clears glucose efficiently. When it falls, the pancreas produces more insulin to achieve the same result. Over time, that extra demand can contribute to prediabetes (fasting glucose 100–125 mg/dL) or type 2 diabetes (126 mg/dL or higher), but the timeline is highly individual.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Insulin resistance can begin years before fasting glucose crosses 100 mg/dL, but the exact timeline varies and is difficult to predict for one person. A single normal lab result does not rule out early resistance, and a single borderline result does not diagnose it. The useful question is whether your glucose, insulin, waist, blood pressure, and triglycerides are moving in a consistent direction over time.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">
                <span aria-hidden="true">🧬 </span>Key terms in plain language
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><strong>GLUT4</strong> — A glucose transporter in muscle and fat cells. Insulin signaling moves it toward the cell surface; exercise can also influence it through other pathways.</li>
                <li><strong>AMPK</strong> — An energy-sensing pathway that responds to exercise and some experimental compounds. “Activating AMPK” in a lab does not automatically translate into a meaningful clinical benefit.</li>
                <li><strong>HOMA-IR</strong> — An estimate calculated from fasting glucose and insulin. There is no universal cutoff; many studies use about 2.0 as a reference, but labs and populations differ.</li>
                <li><strong>Postprandial glucose</strong> — Blood glucose after eating. A two-hour value below 140 mg/dL is commonly used as a normal reference, but targets vary by context.</li>
              </ul>
            </div>
          </section>

          {/* ── SECTION: WHY IT MATTERS ── */}
          <section id="why-matters" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Insulin Sensitivity Matters for Type 2 Diabetes &amp; Prediabetes</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-700" aria-hidden="true" /> What better sensitivity looks like
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>Fasting glucose within the normal range (70–99 mg/dL)</li>
                  <li>HbA1c below 5.7% for most adults</li>
                  <li>More stable energy after meals</li>
                  <li>More stable post-meal glucose patterns</li>
                  <li>Easier weight maintenance when other factors are addressed</li>
                  <li>Risk associations are not guarantees; genetics and other conditions still matter</li>
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-700" aria-hidden="true" /> What resistance can look like
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>Fasting glucose 100–125 mg/dL (prediabetes range)</li>
                  <li>HbA1c 5.7–6.4% (prediabetes range)</li>
                  <li>Fatigue, brain fog, or cravings that may have other causes</li>
                  <li>Central weight gain, high triglycerides, or low HDL</li>
                  <li>Progression risk varies; annual progression is often cited around 5–10%, but it is not inevitable [1]</li>
                  <li>Chronically elevated insulin can promote fat storage, but it is only one part of a complex picture</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Insulin resistance is a major contributor to prediabetes and type 2 diabetes, not the only one. The original Diabetes Prevention Program found that intensive lifestyle change reduced progression by about 58% over roughly three years [8], and long-term follow-up shows that the benefit can persist [2]. There is no guaranteed reversal and no single “right” time to act; earlier, sustained changes are simply easier to build on than waiting for a crisis.
            </p>
          </section>

          {/* ── SECTION: HOW TO MEASURE ── */}
          <section id="how-to-measure" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Droplet className="w-8 h-8 text-emerald-600" aria-hidden="true" />
              How to Measure Your Insulin Sensitivity
            </h2>
            <div className="space-y-4">
              {measurementItems.map((item) => {
                const c = getColorClasses(item.color);
                return (
                  <div key={item.title} className={`${c.bg50} border-l-4 ${c.border600} p-5 rounded-r-lg`}>
                    <h3 className={`font-bold ${c.text900} mb-2`}>
                      <span aria-hidden="true">{item.emoji} </span>{item.title}
                    </h3>
                    <p className={`text-sm ${c.text800} mb-2`}>{item.body}</p>
                    <p className={`text-xs font-semibold ${c.text700} bg-white/60 px-3 py-1.5 rounded`}>{item.tip}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── SECTION: 7 WARNING SIGNS ── */}
          <section id="signs-of-resistance" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-amber-600" aria-hidden="true" />
              7 Warning Signs of Poor Insulin Sensitivity
            </h2>
            <p className="text-gray-700 mb-6">
              These are conversation starters, not a diagnosis. Some are direct clues (such as acanthosis nigricans); others are nonspecific and can have many causes. A clinician can help you decide which findings are worth investigating.
            </p>
            <div className="space-y-3">
              {warningSigns.map((item) => (
                <div key={item.sign} className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <span className="text-amber-700 font-bold text-lg flex-shrink-0" aria-hidden="true">⚠️</span>
                  <div>
                    <p className="font-bold text-amber-900 text-sm">{item.sign}</p>
                    <p className="text-xs text-amber-800 mt-0.5">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION: 5 PILLARS ── */}
          <section id="pillars-to-improve" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">5 Practical Pillars That Support Insulin Sensitivity</h2>
            <p className="text-gray-700 mb-6">
              No single pillar is a cure, and stacking all five at once is a recipe for burnout. Pick one or two that fit your life, practice them until they are boring, then add another. The evidence below is strongest for the basics—not for any one product.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  num: '1', icon: Apple, color: 'emerald', wide: false,
                  title: 'A sustainable, minimally processed eating pattern',
                  content: 'Build meals around non-starchy vegetables, legumes, whole grains, nuts, olive oil, fish, and other minimally processed foods. Protein and fiber at meals can slow digestion, and cutting sugary drinks is one of the simplest ways to reduce large glucose swings. The best pattern is the one you can keep.',
                  evidence: 'A 2025 systematic review found that lifestyle interventions, including dietary change, can support reversion to normoglycemia; the optimal pattern varies by person. [3]',
                },
                {
                  num: '2', icon: Activity, color: 'blue', wide: false,
                  title: 'Movement: aerobic, resistance, and short walks',
                  content: 'Build toward about 150 minutes per week of moderate aerobic activity and two or three resistance sessions. A short walk after meals is a low-cost way to add movement and may blunt post-meal glucose, though the size of the effect varies. Muscle is a major glucose disposal site; use it regularly.',
                  evidence: 'A 2024 network meta-analysis found that combined aerobic and resistance training had a favorable overall profile for glycemia in prediabetes. [4]',
                },
                {
                  num: '3', icon: Zap, color: 'amber', wide: false,
                  title: 'Supplements—optional, not foundational',
                  content: 'Berberine has the most consistent clinical evidence among the options reviewed; cinnamon and chromium are more mixed, and banaba is preliminary. If you and your clinician decide to try one, choose a third-party-tested product, use the studied dose, and avoid stacking multiple glucose-lowering products.',
                  evidence: 'A 2025 RCT reported improvements with berberine plus cinnamon in type 2 diabetes [5]; reviews describe modest and uneven effects across supplements. [7]',
                },
                {
                  num: '4', icon: Moon, color: 'indigo', wide: false,
                  title: 'Sleep: consistency before perfection',
                  content: 'Short sleep and irregular timing are associated with higher HOMA-IR. A consistent schedule, a dark and cool room, and less late caffeine and alcohol are practical starting points. If snoring or daytime sleepiness suggests sleep apnea, ask for evaluation rather than relying on a wearable score.',
                  evidence: 'A 2025 review found that short sleep is associated with elevated HOMA-IR and prediabetes risk. [6]',
                },
                {
                  num: '5', icon: Heart, color: 'purple', wide: true,
                  title: 'Stress management as adjunctive support',
                  content: 'Cortisol can raise glucose and work against insulin, but the evidence that a specific stress-reduction technique changes hard metabolic outcomes is limited. Short breathing exercises, walks, and protecting sleep are low-risk additions—not replacements for medical care.',
                  evidence: 'Stress physiology is plausible and clinically relevant, but evidence for long-term glycemic outcomes from specific stress interventions is limited.',
                },
              ].map((pillar) => {
                const c = getColorClasses(pillar.color);
                return (
                  <div key={pillar.num} className={`${c.bg50} border-l-4 ${c.border500} p-5 rounded-r-lg ${pillar.wide ? 'md:col-span-2' : ''}`}>
                    <h3 className={`font-bold ${c.text900} mb-2 flex items-center gap-2`}>
                      <pillar.icon className={`w-5 h-5 ${c.text700}`} aria-hidden="true" />
                      {pillar.num}. {pillar.title}
                    </h3>
                    <p className={`text-sm ${c.text800} mb-2`}>{pillar.content}</p>
                    <p className={`text-xs font-semibold ${c.text700} bg-white/60 px-2 py-1 rounded`}>
                      <span aria-hidden="true">📊 </span>{pillar.evidence}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── FAQ: BASICS & TESTING ── */}
          <section id="faq-basics" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-sm">1</div>
              <h2 className="text-3xl font-bold text-gray-900">FAQ: Basics &amp; Testing (4 Questions)</h2>
            </div>
            <FAQSection faqs={basicsAndTestingFAQs} title="" enableSchema={false} showContact={false} />
          </section>

          {/* ── FAQ: IMPROVING NATURALLY ── */}
          <section id="faq-natural" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-sm">2</div>
              <h2 className="text-3xl font-bold text-gray-900">FAQ: Improving Insulin Sensitivity Naturally (5 Questions)</h2>
            </div>
            <FAQSection faqs={improvingNaturallyFAQs} title="" enableSchema={false} showContact={false} />
          </section>

          {/* ── CTA #1 — 50% MARK — Lead Magnet ── */}
          <section id="reset-guide" className="mb-12 bg-gradient-to-br from-purple-700 to-indigo-700 text-white rounded-xl p-10 text-center shadow-lg">
            <Mail className="w-12 h-12 text-purple-200 mx-auto mb-4" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-widest text-purple-100 mb-2">Free printable — no product purchase</p>
            <h2 className="text-3xl font-bold mb-4">A practical 7-day reset, not a miracle cure</h2>
            <p className="text-lg text-purple-100 mb-6 max-w-xl mx-auto">
              One week of simple meals, a supplement-timing worksheet, a fasting-glucose log, and a HOMA-IR tracker. Designed for adults who want a clear starting point—not another 30-day detox.
            </p>
            <form className="max-w-md mx-auto flex flex-col gap-3" onSubmit={handleLeadMagnet}>
              <label htmlFor="lead-name" className="sr-only">First name</label>
              <input
                id="lead-name"
                type="text"
                name="name"
                autoComplete="given-name"
                placeholder="First name"
                required
                disabled={isLoading}
                className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <label htmlFor="lead-email" className="sr-only">Email address</label>
              <input
                id="lead-email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder="Your email address"
                required
                disabled={isLoading}
                aria-describedby="lead-privacy"
                className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
                className="bg-white text-purple-800 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Download className="w-5 h-5" aria-hidden="true" /> {isLoading ? 'Sending…' : 'Get the guide'}
              </button>
            </form>
            {message && (
              <p
                role={message.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                className={`mt-4 font-semibold ${message.type === 'success' ? 'text-emerald-200' : 'text-red-200'}`}
              >
                <span aria-hidden="true">{message.type === 'success' ? '✓' : '✗'} </span>
                {message.text}
              </p>
            )}
            <p id="lead-privacy" className="text-xs text-purple-100 mt-4">
              We will email the guide plus occasional health tips. Unsubscribe anytime.{' '}
              <Link to="/privacy" className="underline">Privacy Policy</Link>
            </p>
          </section>

          {/* ── SUPPLEMENT COMPARISON TABLE ── */}
          <section id="comparison-table" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Microscope className="w-8 h-8 text-emerald-700" aria-hidden="true" />
              Supplement Comparison: What the Evidence Suggests
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Ordered by the strength of available evidence, not by marketing claims. These labels summarize a messy literature; they are not a grading score, and the sources are listed below.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full bg-white">
                <caption className="sr-only">
                  Comparison of berberine, cinnamon, chromium, and banaba for insulin sensitivity, including mechanism, evidence quality, typical findings, and safety notes.
                </caption>
                <thead className="bg-gray-100">
                  <tr>
                    {['Supplement', 'Mechanism', 'Evidence Strength', 'Typical Improvement', 'Notes'].map((heading) => (
                      <th key={heading} scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-700 border-b uppercase tracking-wide">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={item.name} className={`border-b ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <th scope="row" className="px-4 py-4 text-left text-sm font-semibold text-gray-900">{item.name}</th>
                      <td className="px-4 py-4 text-sm text-gray-700">{item.mechanism}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-900">
                          {item.evidenceLabel}
                        </span>
                        <p className="mt-1 text-xs text-gray-600">{item.evidenceNote}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">{item.typicalImprovement}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── INGREDIENT BREAKDOWN ── */}
          <section id="ingredient-breakdown" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-700" aria-hidden="true" />
              Individually-Studied Ingredients — Mechanisms &amp; Evidence
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              These entries describe individual ingredients, not a branded formula. The labels reflect the quality and consistency of human evidence; they are not a recommendation to self-prescribe.
            </p>
            <div className="space-y-4 mb-8">
              {insulinSensitivityIngredients.map((ing, i) => {
                const c = getColorClasses(ing.color);
                return (
                  <div key={ing.name} className={`${c.bg50} border-l-4 ${c.border500} p-5 rounded-r-lg`}>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`text-xs font-bold ${c.bg200} ${c.text900} px-2 py-0.5 rounded-full`}>#{i + 1}</span>
                      <h3 className={`font-bold ${c.text900}`}>{ing.name}</h3>
                      <span className={`text-xs ${c.text700} italic`}>{ing.phase}</span>
                    </div>
                    <p className={`text-sm ${c.text800} mb-2`}><strong>Role:</strong> {ing.role}</p>
                    <p className={`text-xs font-semibold bg-white/60 ${c.text700} px-3 py-1.5 rounded`}>
                      <span aria-hidden="true">📊 </span>Evidence: {ing.evidence}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-gray-600">
              No specific supplement product is recommended in this article. If you are considering one, check for third-party testing and review the interaction profile with a pharmacist or clinician.
            </p>
          </section>

          {/* ── FAQ: SUPPLEMENTS ── */}
          <section id="faq-supplements" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-sm">3</div>
              <h2 className="text-3xl font-bold text-gray-900">FAQ: Supplements (3 Questions)</h2>
            </div>
            <FAQSection faqs={supplementsFAQs} title="" enableSchema={false} showContact={false} />
          </section>

          {/* ── 8-WEEK ACTION PLAN ── */}
          <section id="action-plan" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Practical 8-Week Action Plan</h2>
            <p className="text-gray-700 mb-6">
              This is a template, not a prescription. Choose the smallest version of each step that fits your life, and ask your clinician before changing medication, fasting routines, or supplement use. If you use insulin or a sulfonylurea, review any major diet or activity change with them first.
            </p>
            <div className="space-y-4">
              {actionPlan.map((phase, i) => {
                const c = getColorClasses(phase.color);
                return (
                  <div key={phase.label} className={`bg-white border-2 ${c.border300} rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${c.bg600} text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm`}>{i + 1}</div>
                      <h3 className={`font-bold ${c.text900} text-lg`}>{phase.label}</h3>
                    </div>
                    <ul className="space-y-2">
                      {phase.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 ${c.text600} flex-shrink-0 mt-0.5`} aria-hidden="true" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── FAQ: TRACKING & PROGRESS ── */}
          <section id="faq-tracking" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-sm">4</div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <TrendingDown className="w-7 h-7 text-rose-700" aria-hidden="true" /> FAQ: Tracking &amp; Progress (2 Questions)
              </h2>
            </div>
            <FAQSection faqs={trackingFAQs} title="" enableSchema={false} />
          </section>

          {/* ── SCIENTIFIC REFERENCES ── */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Scientific References</h2>
            <p className="text-gray-700 mb-6">
              This guide draws on 8 selected sources (2002–2026), including the original Diabetes Prevention Program trial, its long-term follow-up, and recent reviews and meta-analyses. Click any title to view the source. Where the evidence is indirect or mixed, the text says so rather than presenting a single study as proof.
            </p>
            <div className="space-y-4">
              {citations.map((c, i) => (
                <div key={c.doi ?? c.title} className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">[{i + 1}]</span> {c.authors} ({c.year}).{' '}
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 underline font-medium">
                      {c.title}
                    </a>. <em>{c.journal}</em>.
                    {c.doi && <span className="text-gray-500 text-xs ml-2">DOI: {c.doi}</span>}
                    {c.pmid && <span className="text-gray-500 text-xs ml-2">PMID: {c.pmid}</span>}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-100 border border-gray-300 rounded-lg p-4">
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <Microscope className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>How this guide was prepared:</strong> The ThriveHealth360 editorial team reviewed the cited literature and separated direct evidence from inference. This article is educational and is not a substitute for individualized medical advice.
                </span>
              </p>
            </div>
          </section>

          {/* ── CURATED RELATED READING ── */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <span aria-hidden="true">📚 </span>Related reading
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Go deeper on the questions that come up most often after learning you have insulin resistance or prediabetes.
              </p>
              <ul className="space-y-4">
                <li className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
                  <Link to="/blog/berberine-vs-metformin" className="font-bold text-lg text-blue-700 hover:text-blue-900 hover:underline">
                    Berberine vs. metformin: what the evidence actually shows
                  </Link>
                  <p className="mt-1 text-sm text-gray-600">A side-by-side look at effect sizes, tolerability, interactions, and why they are not interchangeable.</p>
                </li>
                <li className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
                  <Link to="/blog/post-meal-walks" className="font-bold text-lg text-blue-700 hover:text-blue-900 hover:underline">
                    Why a short walk after meals can blunt a glucose spike
                  </Link>
                  <p className="mt-1 text-sm text-gray-600">Practical timing, realistic expectations, and how to build the habit without overtraining.</p>
                </li>
                <li className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
                  <Link to="/blog/5-warning-signs-of-prediabetes" className="font-bold text-lg text-blue-700 hover:text-blue-900 hover:underline">
                    5 early warning signs of prediabetes
                  </Link>
                  <p className="mt-1 text-sm text-gray-600">Which signs are specific, which are nonspecific, and when to ask for a lab review.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* ── CROSS-SILO: Reverse Prediabetes 2026 ── */}
          <section className="mb-16">
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0" aria-hidden="true">🎯</span>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-1">Main pillar guide</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Want the broader prediabetes picture?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Insulin sensitivity is one part of a larger clinical picture. Our prediabetes guide walks through the broader evidence—including what the DPP Outcomes Study and the ADA 2026 Standards of Care do and do not support.
                  </p>
                  <Link
                    to="/blog/reverse-prediabetes-2026"
                    className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
                  >
                    Read the prediabetes guide
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── CLOSING ── */}
          <section className="mb-16 bg-gradient-to-br from-emerald-700 to-teal-700 text-white rounded-xl p-10 text-center shadow-lg">
            <ShieldCheck className="w-12 h-12 text-emerald-200 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Put the answers into practice—without chasing perfection</h2>
            <p className="text-lg text-emerald-100 mb-6 max-w-xl mx-auto">
              Start with one meal and one walk. Add the next habit only when the first one feels automatic. If you take glucose-lowering medication, involve your clinician before making big changes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#action-plan"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-emerald-800 hover:bg-emerald-50 transition"
              >
                Review the 8-week plan
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                to="/blog/post-meal-walks"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-5 py-3 font-bold text-white hover:bg-white/10 transition"
              >
                Read the post-meal walking guide
              </Link>
            </div>
          </section>

          {/* ── FOOTER DISCLAIMERS ── */}
          <footer className="border-t-2 border-gray-200 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3">
                  <span aria-hidden="true">⚠️ </span>Medical Disclaimer
                </h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  This article is for educational purposes only and is not medical advice.
                  Always consult a qualified healthcare provider before starting any supplement or changing your diet, exercise, or medications.
                  ThriveHealth360 does not diagnose, treat, cure, or prevent any disease. Individual results vary.
                  Statements about supplements have not been evaluated by the FDA.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3">
                  <span aria-hidden="true">💰 </span>Affiliate Disclosure
                </h3>
                <p className="text-xs text-blue-800 leading-relaxed">
                  ThriveHealth360 may earn a commission from affiliate partnerships in some articles, but this article does not currently link to a specific product.
                  Affiliate relationships do not change the evidence criteria used here. We do not recommend a supplement for everyone, and no product should replace medical care.
                </p>
              </div>
            </div>
          </footer>

        </article>
      </main>
    </>
  );
};

export default InsulinSensitivityFAQ2026;

export const blogMeta: BlogArticleMeta = {
  title: "Insulin Sensitivity FAQ 2026: 14 Evidence-Informed Answers",
  excerpt: "Practical, evidence-informed answers about insulin sensitivity, HOMA-IR, lifestyle changes, and supplements—including where the research is still uncertain.",
  readTime: "16 min read",
  image: "/images/blog/insulin-sensitivity-faq-hero.webp",
  path: "/blog/insulin-sensitivity-faq-2026",
  category: "prediabetes",
};