import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Award, BookOpen, Stethoscope, Globe, CheckCircle, ShieldCheck, UserCheck } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';

/**
 * Internal Card component
 * Provides the professional layout for disclosure and value sections.
 */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-xl border border-gray-200 shadow-sm ${className || ''}`}>
    {children}
  </div>
);

// Role only — there is no reviewer name or photo to show, and inventing either
// is worse than showing none. Role text is the one fact we can state.
const REVIEWER = {
  role: "4th-year Doctor of Physical Therapy student, Cairo University",
};

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Evidence-Based',
      description: 'Every guide is built on peer-reviewed clinical research, with a focus on the most recent studies (2024–2026) where available.'
    },
    {
      icon: Stethoscope,
      title: 'Safety First',
      description: 'We prioritize products with NSF or USP certifications, made by manufacturers operating under GMP standards.'
    },
    {
      icon: BookOpen,
      title: 'Empowerment',
      description: 'We translate complex metabolic science into simple, actionable steps for daily life.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Our recommendations are based on evidence quality, third-party testing, and ingredient transparency.'
    },
  ];

  return (
    <>
      <SEO
        title="About ThriveHealth360 | Our Mission & Editorial Team"
        description="Learn about the mission, values, and evidence-based editorial process behind ThriveHealth360 — helping you understand and manage your blood sugar."
        url="/about"
        image="/images/about/ayman-hathoot-founder.webp"
        schemaType="AboutPage"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-emerald-600 py-20 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-tight">
              Our Mission: Your Metabolic Freedom
            </h1>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed font-light">
              ThriveHealth360 was founded to bridge the gap between complex clinical research and the millions of people working to understand and manage their blood sugar naturally.
            </p>
          </div>
        </section>

        {/* Editorial Leadership Section */}
        <section className="py-20 border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-50 aspect-square group bg-gray-50">
                <img 
                  src="/images/about/ayman-hathoot-founder.webp" 
                  alt="Ayman Hathoot, founder of ThriveHealth360."
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  onError={(e) => {
                    // If the real photo fails to load, hide it rather than
                    // substitute a stock photo of an unrelated person — a
                    // fake "founder" photo is worse than no photo.
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Editorial Leadership</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Ayman Hathoot, Founder</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I started ThriveHealth360 after my own wake-up call. Shortly after retiring, a persistent
                  tooth infection that wouldn't clear up led my dentist to ask if I had blood sugar problems.
                  I didn't think so — but at his insistence, I had an HbA1c test done. The result came back
                  at 11.9%. Working closely with my doctor over the following months — medication, dietary
                  changes, and regular follow-up testing — I brought that number down to around 6% within
                  about three months.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  That experience is why this site exists. I spent months reading everything I could find
                  about blood sugar and metabolic health, and I wanted to build a resource — backed by the
                  same peer-reviewed research I leaned on myself — that could help other people going
                  through the same thing. Our small team reviews recent studies from PubMed and CrossRef to
                  keep the content current as new research comes out. That team includes a physical
                  therapy student who checks the passages we flag about movement, exercise safety, or
                  physiology — you can read more about how that works below.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My background is in software development — I built this site myself — and I hold a
                  master's degree in demography, which is where my interest in reading population health
                  data started.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 text-sm text-amber-800 leading-relaxed">
                  <strong>Editorial Note:</strong> Ayman and the ThriveHealth360 team are not licensed medical
                  professionals (MD, RD, or equivalent). Ayman's story reflects his personal experience, not
                  medical advice — individual results vary, and no outcome is guaranteed. All content is for
                  informational purposes only. Please consult a qualified healthcare provider for personal
                  medical advice.
                </div>
                <div className="flex items-center gap-3 text-gray-600 mb-6">
                  <Globe className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium italic text-gray-500">Synthesizing global research for readers worldwide — US, UK, Australia, Canada, and beyond.</span>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                  <p className="text-emerald-900 leading-relaxed font-medium italic">
                    "We believe that accurate information, paired with empathy, is the ultimate tool for supporting healthy blood sugar and reclaiming your energy."
                  </p>
                  <p className="text-emerald-700 text-xs mt-3">This reflects our editorial philosophy, not a medical claim. Individual outcomes vary. Always consult your doctor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Editorial Pillars</h2>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">The standards we live by when reviewing products and clinical research.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <value.icon className="w-12 h-12 text-emerald-600 mb-6 bg-emerald-50 p-2 rounded-lg" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Vetting Authority Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <Award className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Our Product Vetting Process</h2>
            <div className="text-left space-y-8 bg-white p-10 rounded-3xl border-2 border-emerald-50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <ShieldCheck className="w-32 h-32 text-emerald-600" />
              </div>
              
              <div className="flex gap-5">
                <div className="bg-emerald-100 p-2 h-fit rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Third-Party Verification</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mt-1">We prioritize brands that utilize NSF, USP, or Informed-Choice testing to ensure label accuracy.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-emerald-100 p-2 h-fit rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Clinical Dosage Matching</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mt-1">We compare supplement dosages against concentrations used in published human clinical trials. This is an editorial assessment — we do not conduct independent clinical testing.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-emerald-100 p-2 h-fit rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Zero Proprietary Blends</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mt-1">We reject products that hide dosages behind proprietary blends, ensuring full ingredient transparency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Fact-Check */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">How We Fact-Check</h2>
            <div className="text-left space-y-4 bg-white p-10 rounded-3xl border-2 border-emerald-50 shadow-lg">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">Every health claim in our articles is linked to a peer-reviewed source.</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">References are checked against PubMed and CrossRef, alongside our own review, before publication.</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">We do not accept payment for positive reviews, and commission doesn't determine which products we cover or how we rank and describe them — those calls are based on evidence quality, third-party testing, and ingredient transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Review Process */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-8">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Editorial Process</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">How We Review What We Publish</h2>
            </div>
            <div className="text-left bg-white p-10 rounded-3xl border-2 border-emerald-50 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-8">
                I read every article, guide, and product page end-to-end before it goes live and whenever
                it's updated. Where something touches movement, exercise safety, or physiology beyond
                general knowledge, I flag the specific passage for our physical therapy reviewer to check
                before it's published.
              </p>

              {/* Reviewer identity — icon and role only, no name or photo */}
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-8">
                <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">{REVIEWER.role}</p>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-4">What I check on every page</h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Source verification, line by line</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Every claim is traced back to the specific study or official guidance it came from, not to an abstract or a secondhand summary of it.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Overclaim detection</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">I look for sentences that outrun the evidence — a small single trial presented as settled, animal or lab work presented as a human outcome, or an effect size rounded up on the way into the text.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Plain-language accuracy</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">The simple version has to stay true to the detailed one. If a plain-language explanation would change what the study actually found, it gets rewritten.</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2">What gets flagged for clinical review</h3>
              <p className="text-gray-500 text-sm mb-4">Only when a passage calls for it — not on every page.</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Metabolic & physiological accuracy</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">How the body actually works — glucose and insulin dynamics, metabolic pathways, and what a lab value does or does not mean.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Movement & exercise safety</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Whether an exercise instruction is safe and appropriate for the reader it is written for, including people with neuropathy, retinopathy, or cardiovascular risk.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mt-8 text-sm text-amber-800 leading-relaxed">
                <strong>Editorial Note:</strong> Our physical therapy reviewer is a 4th-year Doctor of Physical
                Therapy student at Cairo University, not a licensed clinician. This reviewer's role is limited to
                checking flagged passages for movement and physiological accuracy; it is not a medical review of the
                site's content, and it does not replace advice from your own healthcare provider.
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 underline decoration-emerald-500 decoration-4 underline-offset-8">Affiliate & Compensation Disclosure</h2>
            <Card>
              <p className="text-gray-700 leading-relaxed text-left text-sm p-2">
                <strong>Material Connection Disclosure (FTC 16 CFR §255):</strong> ThriveHealth360 participates in affiliate marketing programmes, including the Digistore24 affiliate marketplace and partnerships with selected supplement brands. We have a material connection with these sellers — when you click an affiliate link and make a qualifying purchase, we earn a commission at <strong>no additional cost to you</strong>. Where products have been gifted, sponsored, or provided for review, this is disclosed in the relevant article. That financial relationship doesn't determine which products we cover, how we rank them, or how we describe them — those calls are based on evidence quality, third-party testing, and ingredient transparency. We only recommend products that pass our independent vetting process regardless of commission rate. This disclosure applies to US readers (FTC), UK readers (ASA/CAP), Australian readers (ACCC), and Canadian readers (Competition Act).{' '}
                <Link to="/affiliate-disclosure" className="text-emerald-600 font-semibold hover:text-emerald-700">Read our full Affiliate Disclosure Policy →</Link>
              </p>
            </Card>
          </div>
        </section>
        {/* Last Updated & Contact */}
        <section className="py-6 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-sm text-gray-500 mb-2">Last updated: September 2026</p>
            <p className="text-sm text-gray-600">
              Questions, corrections, or feedback? Reach us through our{' '}
              <Link to="/contact" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Contact page
              </Link>.
            </p>
          </div>
        </section>

        {/* Policy Links Footer */}
        <section className="py-6 bg-amber-50 border-t border-amber-200">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-sm text-amber-800 leading-relaxed text-center">
              <strong>Medical Disclaimer:</strong> All content on ThriveHealth360 is for general educational and informational purposes only. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Supplements and lifestyle interventions discussed have not been evaluated by the FDA, MHRA, TGA, or Health Canada and are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary and are not guaranteed. Health regulations differ by country — content may not apply to your jurisdiction. Always consult a qualified healthcare provider before making changes to your diet, exercise, medications, or supplement regimen.{' '}
              <Link to="/medical-disclaimer" className="text-amber-900 hover:underline font-semibold">Full Medical Disclaimer</Link>
              {' '}·{' '}
              <Link to="/affiliate-disclosure" className="text-amber-900 hover:underline font-semibold">Affiliate Disclosure Policy</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;