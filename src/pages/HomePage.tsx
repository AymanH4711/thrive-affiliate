// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Zap, CheckCircle, Download,
  Globe, Lock, Heart, ChevronRight, BookOpen,
  MessageSquare, AlertTriangle, Info
} from 'lucide-react';

import { SEO } from '@/components/seo/SEO';

import { subscribeToNewsletter } from '@/api/subscribe';

// ── Lead Magnet ───────────────────────────────────────────────────────────────
const LeadMagnet: React.FC = () => {
  const [email, setEmail]           = useState('');
  const [name, setName]             = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSending, setIsSending]   = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Same EmailJS service/template already proven working for the 7-Day
      // guide in DownloadModal.tsx — reused here so both lead magnets send
      // through the same verified, working configuration.
      const templateParams = {
        user_email: email,
        downloaded_resources: 'The Complete 12-Week Metabolic Reset Protocol',
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);

        const link = document.createElement('a');
        link.href = '/downloads/MetabolicReset_FullBook.pdf';
        link.download = 'MetabolicReset_FullBook.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Fire-and-forget — download/email already succeeded above; a
        // failed list-add here shouldn't block the user's download.
        subscribeToNewsletter(email, '12-week-protocol').then((result) => {
          if (!result.success) {
            console.warn('Newsletter subscribe failed (download still succeeded):', result.message);
          }
        });
      } else {
        alert('There was an error sending your guide. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-emerald-900 rounded-3xl overflow-hidden shadow-2xl my-12 border border-emerald-800 text-left">
      <div className="md:flex">
        {/* Marketing Content */}
        <div className="md:w-1/2 p-8 md:p-12 text-white bg-gradient-to-br from-emerald-900 to-emerald-800">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-emerald-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
              Free Access
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            The Complete 12-Week Metabolic Reset Protocol
          </h2>
          <p className="text-emerald-100 mb-6 leading-relaxed text-sm">
            An evidence-based lifestyle guide to support blood sugar management and help reverse
            prediabetes — built on peer-reviewed research and practical, real-world strategies.
          </p>
          <ul className="space-y-3">
            {[
              '6 Evidence-Based Lifestyle & Nutrition Protocols',
              '30 Peer-Reviewed Clinical References',
              '12-Week Step-by-Step Implementation Calendar',
              'Adapted for all countries & measurement systems',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-emerald-50">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-emerald-200 text-xs mt-6 leading-relaxed border-t border-emerald-700/50 pt-4">
            <strong className="text-emerald-100">Medical Disclaimer:</strong> This guide is for
            informational purposes only. The protocols discussed have not been evaluated by the FDA
            or equivalent health authorities and are not intended to diagnose, treat, cure, or
            prevent any disease. Always consult your doctor before making changes.
          </p>
        </div>

        {/* Signup Form */}
        <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
          {!isSubscribed ? (
            <form onSubmit={handleDownload} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Instant Access</h3>
              <p className="text-sm text-gray-500 mb-4">Free for readers worldwide. No credit card required.</p>
              <div className="space-y-3">
                <input type="text" placeholder="First Name" required value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-50 focus:border-emerald-600 outline-none transition text-sm" />
                <input type="email" placeholder="Email Address" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-50 focus:border-emerald-600 outline-none transition text-sm" />
              </div>
              <button type="submit" disabled={isSending}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <Download className="w-5 h-5" /> {isSending ? 'Sending...' : 'Send My Free Guide'}
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                <Lock className="w-3 h-3" /> Secure & Spam-Free
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Your Downloads</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Your guide is downloading now — check your downloads folder.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Didn't start automatically? <a href="/downloads/MetabolicReset_FullBook.pdf" download className="underline hover:text-gray-600">Click here to download it directly</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── HomePage ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [quizStarted,      setQuizStarted]      = useState(false);
  const [currentQuestion,  setCurrentQuestion]  = useState(0);
  const [answers,          setAnswers]           = useState<boolean[]>([]);
  const [showResults,      setShowResults]       = useState(false);

  const quizQuestions = [
    { id: 0, question: 'Have you been told you have prediabetes or elevated blood sugar?',        description: 'By a doctor, nurse, or through recent lab results' },
    { id: 1, question: 'Is your fasting blood glucose in the prediabetes range?',                 description: '100–125 mg/dL (US) · 5.6–6.9 mmol/L (UK, AU, CA) · HbA1c 5.7–6.4%' },
    { id: 2, question: 'Do you experience frequent fatigue, brain fog, or intense cravings?',     description: 'Common signs of blood sugar instability and metabolic dysfunction' },
    { id: 3, question: 'Do you have a family history of type 2 diabetes?',                        description: 'A family history increases your risk and makes early action more important' },
    { id: 4, question: 'Are you looking for evidence-based, natural approaches to improve your blood sugar?', description: 'Diet, movement, sleep, stress management, and lifestyle-based strategies' },
  ];

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <>
      <SEO
        title="Thrive Health | Science-Backed Blood Sugar & Metabolic Guides"
        description="Evidence-based guides to help you reverse prediabetes, stabilize blood sugar, and reclaim your energy — for readers worldwide."
        url="/"
      />

      <div className="bg-white min-h-screen">

        {/* ── HERO ── (updated for less cliché, more direct) */}
        <section className="relative bg-emerald-900 pt-14 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <span className="inline-flex items-center gap-2 bg-emerald-800/50 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-700">
                  <Globe className="w-4 h-4" /> Global Research. Worldwide Guidance.
                </span>

                {/* Hero headline – more conversational, less hype (Humanizer + /ghost) */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                  Tired of energy crashes? <br />
                  <span className="text-emerald-400 italic">Let's fix your blood sugar – step by step.</span>
                </h1>

                <p className="text-base text-emerald-100 mb-7 leading-relaxed font-light max-w-lg">
                  Evidence-based guides that help you reverse prediabetes, stabilise glucose, and take back control – without the noise.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => { setQuizStarted(true); setCurrentQuestion(0); setAnswers([]); setShowResults(false); }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-2xl transition shadow-xl shadow-emerald-900/40 text-base flex items-center justify-center gap-2"
                  >
                    Take the Free Assessment <ArrowRight className="w-5 h-5" />
                  </button>
                  <Link
                    to="/blog"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-8 rounded-2xl transition text-base backdrop-blur-sm text-center flex items-center justify-center gap-2"
                  >
                    View Latest Research <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-5 mt-8 text-emerald-300 text-sm">
                  {['Peer-reviewed sources', 'No medical jargon', 'Free for all readers', 'Available worldwide'].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex justify-center items-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl scale-105" />
                  <img
                    src="/images/blood-sugar-hero-og.webp"
                    alt="Thrive Health – Prediabetes Support, Natural Blood Sugar, Insulin Resistance, Glucose Monitoring"
                    width={400}
                    height={400}
                    className="relative rounded-2xl shadow-2xl border border-emerald-700/40 w-full max-w-md object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MEDICAL DISCLAIMER BANNER ── */}
        <section className="bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4 max-w-6xl py-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Medical Disclaimer:</strong> All content on Thrive Health is for general educational and informational purposes only and is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Any supplements, foods, or lifestyle interventions discussed have <strong>not been evaluated by the FDA, MHRA, TGA, or Health Canada</strong> and are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare provider before making changes to your diet, exercise routine, medications, or supplement regimen. Read our full{' '}
                <a href="/medical-disclaimer" className="underline font-semibold hover:text-amber-900">Medical Disclaimer</a>.
              </p>
            </div>
          </div>
        </section>

        {/* ── LEAD MAGNET (now with id for scroll target) ── */}
        <section id="reset-guide" className="bg-white relative px-4 pt-4 scroll-mt-20">
          <div className="container mx-auto max-w-6xl text-center">
            <LeadMagnet />
          </div>
        </section>

        {/* ── VALUES SECTION (humanized, less corporate) ── */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto px-4">
            <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Why Thrive Health?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Built for Everyone, Backed by Science</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-16" />
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Shield, title: 'Clinically Grounded',  desc: 'No trends, no shortcuts. Every guide draws on peer-reviewed trials and human data.' },
                { icon: Globe,  title: 'Truly Global',         desc: 'Blood sugar units (mg/dL + mmol/L), global foods, and research from health institutions worldwide.' },
                { icon: Heart,  title: 'Real Life, Not a Lab', desc: 'Sustainable changes that fit your schedule – not a rigid protocol you’ll abandon in two weeks.' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-sm border border-emerald-100">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID (with inline affiliate disclosure on supplement card) ── */}
        <section className="py-20 bg-emerald-50 border-y border-emerald-100">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Our Content</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need in One Place</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-14" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                { title: 'Prediabetes Diet Guide',       desc: 'What to eat, what to avoid, meal timing, a 7-day plan, and a shopping list — adapted for international cuisines.',                       href: '/prediabetes-diet', affiliate: false },
                { title: 'Exercise for Blood Sugar',      desc: 'Post-meal walks, strength training, and HIIT — with beginner routines that need no gym or equipment.',                                    href: '/prediabetes-exercise', affiliate: false },
                { title: 'Glucose Monitoring',            desc: 'How to track your blood sugar at home, understand your readings (mg/dL & mmol/L), and use the data.',                                    href: '/glucose-monitoring-tools', affiliate: false },
                { title: 'Natural Blood Sugar Support',   desc: 'Evidence-based supplements and lifestyle approaches reviewed for safety and effectiveness.',                                              href: '/natural-blood-sugar', affiliate: true },
                { title: 'Sleep & Stress Management',     desc: 'How sleep quality and cortisol directly affect your glucose — and practical steps to improve both.',                                     href: '/prediabetes-sleep-stress', affiliate: false },
                { title: 'Full Reversal Plan',            desc: 'A structured 5-step guide that brings diet, movement, monitoring, and lifestyle together into one clear programme.',                     href: '/reverse-prediabetes', affiliate: false },
              ].map((card, i) => (
                <div key={i} className="bg-white border border-emerald-100 rounded-2xl overflow-hidden hover:shadow-md transition">
                  <a href={card.href} className="block p-6 hover:border-emerald-400 group">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                    <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold mt-4">
                      Read guide <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                  {card.affiliate && (
                    <div className="px-6 pb-4 pt-0 text-xs text-gray-400 border-t border-gray-100 mt-2">
                      🔗 We may earn a commission if you buy (at no extra cost to you). 
                      <a href="/affiliate-disclosure" className="underline" target="_blank" rel="noopener noreferrer">
                        Learn more
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW: SKEPTIC'S CORNER (pre-empt objections) ── */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> A Skeptic’s View
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Not everyone reverses prediabetes with lifestyle alone. Genetics, medications, and other health conditions matter. 
                Some people may need medical intervention despite perfect habits. <strong>Always monitor with your doctor</strong> – 
                this site provides educational tools, not guarantees.
              </p>
            </div>
          </div>
        </section>

        {/* ── QUIZ MODAL ── */}
        {quizStarted && !showResults && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-md text-left" role="dialog" aria-modal="true" aria-labelledby="quiz-question-heading">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-xl w-full shadow-2xl border border-white/20">
              <div className="mb-10 text-emerald-600">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-xs uppercase tracking-[0.2em]">Question {currentQuestion + 1} of 5</span>
                  <button onClick={resetQuiz} aria-label="Close assessment" className="text-gray-400 hover:text-gray-600 p-2 text-xl">✕</button>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${((currentQuestion + 1) / 5) * 100}%` }} />
                </div>
              </div>
              <h3 id="quiz-question-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">{quizQuestions[currentQuestion].question}</h3>
              <p className="text-gray-500 mb-10 text-base font-light leading-relaxed">{quizQuestions[currentQuestion].description}</p>
              <div className="grid grid-cols-2 gap-5">
                <button onClick={() => handleAnswer(true)}  className="py-5 rounded-2xl border-2 border-emerald-50 bg-emerald-50/30 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-900 font-bold transition-all transform hover:-translate-y-1">Yes</button>
                <button onClick={() => handleAnswer(false)} className="py-5 rounded-2xl border-2 border-gray-50 bg-gray-50/30 hover:border-gray-500 hover:bg-gray-50 text-gray-900 font-bold transition-all transform hover:-translate-y-1">No</button>
              </div>
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mt-6 text-center leading-relaxed">
                ⚠️ This is a general wellness assessment only — <strong>not a medical diagnosis</strong>. Always consult your healthcare provider.
              </p>
            </div>
          </div>
        )}

        {/* ── RESULTS MODAL (updated CTA to scroll to lead magnet correctly) ── */}
        {showResults && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/90 backdrop-blur-xl text-center" role="dialog" aria-modal="true" aria-labelledby="quiz-results-heading">
            <div className="bg-white rounded-[3rem] p-12 max-w-2xl w-full shadow-2xl border border-emerald-100">
              <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12">
                <Zap className="w-12 h-12 text-emerald-600 -rotate-12" />
              </div>
              <h2 id="quiz-results-heading" className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Your Guide Is Ready</h2>
              <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                Based on your answers, this guide is designed for people in a similar situation.
              </p>
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-8 leading-relaxed text-left">
                ⚠️ <strong>Not a medical diagnosis.</strong> Please consult your doctor before making changes to your diet, exercise, or medications.
              </p>
              <button
                onClick={() => {
                  resetQuiz();
                  const leadMagnet = document.getElementById('reset-guide');
                  if (leadMagnet) leadMagnet.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-emerald-600 text-white font-bold py-5 rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 mb-4"
              >
                Get My Free Reset Guide
              </button>
              <button onClick={resetQuiz} className="text-sm text-gray-400 hover:text-gray-600 underline">Close</button>
            </div>
          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-gray-50 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Reclaim Your Health?</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-sans">
              We provide the science — clearly, honestly, and without the noise. Start your journey today, wherever you are in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/prediabetes-support" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-xl hover:border-emerald-500 transition-all flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" /> Learn Our Process
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" /> Contact Support
              </Link>
            </div>
          </div>
        </section>

        {/* ── AFFILIATE DISCLOSURE (bottom, as required) ── */}
        <section className="bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl py-6">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-700 mb-1">Affiliate & Compensation Disclosure</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Material Connection Disclosure (FTC 16 CFR §255):</strong> Some links on Thrive Health are affiliate links – meaning we earn a commission if you click and purchase, at <strong>no extra cost to you</strong>. Compensation never influences our editorial content or clinical references. Read our full{' '}
                  <a href="/affiliate-disclosure" className="underline text-emerald-700 hover:text-emerald-600 font-semibold">Affiliate Disclosure Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}