// src/pages/prediabetes/PrediabetesSupportHub.tsx
// Route: /prediabetes-support
// Entry hub page — distinct from ReversePrediabetesPage (/reverse-prediabetes)
// Purpose: explain what prediabetes is, who is at risk, and link to all sub-resources

import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, CheckCircle, Info,
  BookOpen, Activity, Moon, Utensils,
  Gauge, Pill, Users, TrendingDown,
  AlertTriangle, Heart, Shield
} from 'lucide-react';
import { SEO } from '@/components/seo/SEO';

export default function PrediabetesSupportHub() {

  const pillars = [
    {
      icon: Utensils,
      step: '1',
      title: 'Diet & Nutrition',
      desc: 'What to eat, what to avoid, meal timing, and a 7-day blood sugar meal plan adapted for all cuisines and countries.',
      href: '/prediabetes-diet',
      colour: 'emerald',
    },
    {
      icon: Activity,
      step: '2',
      title: 'Exercise & Movement',
      desc: 'Post-meal walks, strength training, and beginner routines. Exercise improves insulin sensitivity within days — no gym required.',
      href: '/prediabetes-exercise',
      colour: 'blue',
    },
    {
      icon: Gauge,
      step: '3',
      title: 'Blood Sugar Monitoring',
      desc: 'How to test at home, understand your readings in mg/dL or mmol/L, and choose between CGMs and fingerstick monitors.',
      href: '/glucose-monitoring-tools',
      colour: 'purple',
    },
    {
      icon: Pill,
      step: '4',
      title: 'Natural Support',
      desc: 'Evidence-based supplements reviewed for safety — including berberine, inositol, chromium, and more. With evidence ratings.',
      href: '/natural-blood-sugar',
      colour: 'orange',
    },
    {
      icon: Moon,
      step: '5',
      title: 'Sleep & Stress',
      desc: 'Poor sleep raises blood sugar by 15–20%. Chronic stress elevates cortisol. This section explains the link and what to do.',
      href: '/prediabetes-sleep-stress',
      colour: 'indigo',
    },
  ];

  const stats = [
    { value: '98M+',  label: 'Adults in the US with prediabetes',         source: 'CDC 2024' },
    { value: '80%',   label: 'Who are unaware they have it',               source: 'CDC 2024' },
    { value: '58%',   label: 'Risk reduction with lifestyle changes',      source: 'DPP Trial' },
    { value: '5–7%',  label: 'Weight loss that significantly lowers risk', source: 'NIH' },
  ];

  const faqs = [
    {
      q: 'Can prediabetes be reversed?',
      a: 'Yes. Multiple large clinical trials — including the landmark Diabetes Prevention Program — have shown that diet, exercise, and lifestyle changes reduce progression to type 2 diabetes by 58% in the general population and by 71% in adults over 60.',
    },
    {
      q: 'How quickly can blood sugar improve?',
      a: 'Post-meal glucose can improve within days of adding regular walks. Fasting glucose typically improves within 2–4 weeks of dietary change. A1C — which reflects a 3-month average — takes at least 3 months to show meaningful change.',
    },
    {
      q: 'Do I need medication for prediabetes?',
      a: 'Not necessarily. Lifestyle intervention is the recommended first-line approach. Some doctors prescribe metformin as a preventive measure, particularly for high-risk individuals. This is a conversation to have with your doctor based on your individual numbers.',
    },
    {
      q: 'What A1C level means I have prediabetes?',
      a: 'An A1C between 5.7% and 6.4% indicates prediabetes (ADA criteria). In some countries (UK, Canada, Australia) slightly different thresholds may apply. A fasting glucose between 100–125 mg/dL (5.6–6.9 mmol/L) is another diagnostic criterion.',
    },
    {
      q: 'Are the resources on ThriveHealth360 globally applicable?',
      a: 'Yes. All content includes both mg/dL and mmol/L values, references international guidelines (ADA, WHO, NHS, Diabetes Canada), and avoids country-specific food or medication assumptions.',
    },
  ];

  return (
    <>
      <SEO
        title="Prediabetes Support Hub | ThriveHealth360"
        description="Your complete prediabetes support centre. Understand what prediabetes is, check your risk, and access evidence-based guides for diet, exercise, monitoring, and more."
        keywords="prediabetes support, what is prediabetes, prediabetes hub, reverse prediabetes, insulin resistance guide"
        image="/images/prediabetes-support-hero.webp"
        url="/prediabetes-support"
      />

      <div className="bg-white min-h-screen font-sans text-gray-800">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <header className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-14 lg:py-20 relative overflow-hidden">
          {/* Ambient blobs */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300 rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            {/* ── Two-column grid: text left | image right ── */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left — text content */}
              <div className="text-left">
                <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-5 inline-block">
                  Evidence-Based · Globally Accessible · Free
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  Your Prediabetes<br />Support Hub
                </h1>
                <p className="text-lg text-emerald-100 leading-relaxed mb-8 max-w-lg">
                  Everything you need to understand prediabetes, check your risk, and take action —
                  grounded in peer-reviewed research and written in plain English.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/reverse-prediabetes"
                    className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-xl transition shadow-xl flex items-center gap-2">
                    Start the 5-Step Reversal Plan <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/prediabetes-signs"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-8 rounded-xl transition">
                    Check Warning Signs
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-5 mt-7 text-emerald-300 text-sm">
                  {[
                    'Peer-reviewed sources',
                    'Plain English',
                    'Free for all readers',
                    'Available worldwide',
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — hero image */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl scale-105" />
                  <img
                    src="/images/prediabetes-support-hero-thumb-og.webp"
                    alt="ThriveHealth360 Prediabetes Support — guidance for blood sugar management, insulin resistance, and healthy living"
                    width={400}
                    height={400}
                    className="relative rounded-2xl shadow-2xl border border-emerald-700/40 w-full max-w-md object-cover"
                    loading="eager"
                    onError={(e) => {
                      // Fallback to original hero if thumb-og variant not present
                      const img = e.currentTarget;
                      if (!img.src.includes('prediabetes-support-hero.webp')) {
                        img.src = '/images/prediabetes-support-hero.webp';
                      }
                    }}
                  />
                </div>
              </div>

            </div>{/* end grid */}
          </div>
        </header>

                {/* ── MEDICAL DISCLAIMER ───────────────────────────────────────── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 max-w-5xl py-4">
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

        {/* ── KEY STATISTICS ───────────────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
              {stats.map((s, i) => (
                <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-700 mb-1">{s.value}</p>
                  <p className="text-sm font-medium text-gray-800 mb-1">{s.label}</p>
                  <p className="text-xs text-gray-500">{s.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT IS PREDIABETES ──────────────────────────────────────── */}
        <section className="py-14 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">The Basics</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">What Is Prediabetes?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prediabetes is a condition in which blood glucose levels are higher than normal — but not yet high enough to be diagnosed as type 2 diabetes. The underlying cause is <strong>insulin resistance</strong>: your body's cells no longer respond efficiently to insulin, so glucose accumulates in the bloodstream.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unlike type 2 diabetes, prediabetes carries no permanent damage — yet. The metabolic changes that drive it are <strong>reversible</strong> through evidence-based lifestyle interventions. The challenge is that most people have no obvious symptoms and are never told they have it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Diabetes Prevention Program — the largest lifestyle intervention trial ever conducted — demonstrated that diet and exercise reduced progression to diabetes by <strong>58%</strong>, outperforming even medication for most participants.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Heart,       title: 'It Is Common',    desc: 'Nearly 1 in 3 US adults has prediabetes. Globally, an estimated 720 million people are affected (IDF, 2021).' },
                  { icon: TrendingDown,title: 'It Is Reversible', desc: 'Diet, exercise, sleep, and stress management can normalise blood sugar and restore insulin sensitivity — even without medication.' },
                  { icon: Shield,      title: 'It Is Time-Sensitive', desc: 'Without action, 15–30% of people with prediabetes develop type 2 diabetes within 5 years. Early action dramatically reduces that risk.' },
                  { icon: Users,       title: 'It Is Often Silent', desc: 'Most people have no obvious symptoms. A simple blood test — fasting glucose or A1C — is the only way to know for certain.' },
                ].map((card, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                    <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1">{card.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOOD SUGAR RANGES ───────────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Know Your Numbers</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Understanding Your Blood Sugar Levels</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Both US (mg/dL) and international (mmol/L) values are shown. These are based on ADA and WHO diagnostic criteria.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-4 font-bold text-gray-700">Test</th>
                    <th className="text-center p-4 font-bold text-emerald-700">Normal</th>
                    <th className="text-center p-4 font-bold text-amber-700">Prediabetes</th>
                    <th className="text-center p-4 font-bold text-red-700">Diabetes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['A1C',                    'Below 5.7%',  '5.7% – 6.4%', '6.5% or above'],
                    ['Fasting Glucose (mg/dL)', 'Below 100',  '100 – 125',    '126 or above'],
                    ['Fasting Glucose (mmol/L)','Below 5.6',  '5.6 – 6.9',    '7.0 or above'],
                  ].map(([test, normal, pre, diab], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-gray-800 border-b border-gray-100">{test}</td>
                      <td className="p-4 text-center text-emerald-700 font-medium border-b border-gray-100">{normal}</td>
                      <td className="p-4 text-center text-amber-700 font-bold bg-amber-50/50 border-b border-gray-100">{pre}</td>
                      <td className="p-4 text-center text-red-700 font-medium border-b border-gray-100">{diab}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <Link to="/prediabetes-signs"
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900 transition text-sm">
                See the warning signs of prediabetes <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5 PILLARS ────────────────────────────────────────────────── */}
        <section className="py-16 bg-emerald-50 border-y border-emerald-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">Your Action Plan</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">5 Pillars of Prediabetes Support</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Each pillar is a separate, detailed guide. Together they form our{' '}
                <Link to="/reverse-prediabetes" className="text-emerald-700 font-semibold underline">
                  complete 5-step reversal plan
                </Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pillars.map((pillar, i) => (
                <Link key={i} to={pillar.href}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-md transition-all group flex flex-col">
                  <div className={`w-10 h-10 bg-${pillar.colour}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <pillar.icon className={`w-5 h-5 text-${pillar.colour}-700`} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold text-${pillar.colour}-600 bg-${pillar.colour}-50 px-2 py-0.5 rounded-full`}>
                      Step {pillar.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{pillar.desc}</p>
                  <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold mt-4">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}

              {/* Bonus card — Signs page */}
              <Link to="/prediabetes-signs"
                className="bg-amber-50 border border-amber-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-700" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Know Your Signs
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  Warning Signs & Symptoms
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  The 8 signs most people miss — from fatigue and thirst to tingling and darkened skin — explained clearly.
                </p>
                <div className="flex items-center gap-1 text-amber-700 text-sm font-semibold mt-4">
                  See the signs <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Bonus card — Seniors */}
              <Link to="/seniors-glucose-monitoring"
                className="bg-blue-50 border border-blue-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-blue-700" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                    Specialist Guide
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Seniors' Glucose Guide
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  Monitoring, medication considerations, and age-appropriate exercise for adults 60+.
                </p>
                <div className="flex items-center gap-1 text-blue-700 text-sm font-semibold mt-4">
                  Read guide <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">FAQ</p>
              <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="font-bold text-gray-900 text-sm">{faq.q}</p>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-white">
                    <p className="text-sm text-gray-700 leading-relaxed pl-7">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
        <section className="py-20 bg-emerald-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <TrendingDown className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Act?</h2>
            <p className="text-emerald-100 mb-8 text-lg leading-relaxed">
              The evidence is clear — early lifestyle action is the most effective tool for preventing type 2 diabetes.
              Start with the 5-step plan, one day at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reverse-prediabetes"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2">
                Start the 5-Step Plan <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/prediabetes-signs"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2">
                Check Warning Signs <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

                {/* ── AFFILIATE DISCLOSURE ─────────────────────────────────────── */}
        <section className="bg-gray-50 border-t border-gray-200 py-6">
          <div className="container mx-auto px-4 max-w-5xl">
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