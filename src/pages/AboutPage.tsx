import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Award, BookOpen, Stethoscope, Globe, CheckCircle, ShieldCheck } from 'lucide-react';

/**
 * Internal SEO component
 * Ensures the page is SEO-ready without requiring external file resolution in this environment.
 */
const SEO: React.FC<{ 
  title?: string; 
  description?: string; 
  keywords?: string; 
  image?: string; 
  url?: string 
}> = () => null;

/**
 * Internal Card component
 * Provides the professional layout for disclosure and value sections.
 */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-xl border border-gray-200 shadow-sm ${className || ''}`}>
    {children}
  </div>
);

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Evidence-Based',
      description: 'Every guide is built on a foundation of 2024–2026 clinical research and peer-reviewed studies.'
    },
    {
      icon: Stethoscope,
      title: 'Safety First',
      description: 'We prioritize products with NSF, GMP, and third-party purity certifications.'
    },
    {
      icon: BookOpen,
      title: 'Empowerment',
      description: 'We translate complex metabolic science into simple, actionable steps for daily life.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Our recommendations are based on research, not commission rates.'
    },
  ];

  return (
    <>
      <SEO
        title="About ThriveHealth360 | Our Mission to Reverse Prediabetes"
        description="Learn about the mission, values, and evidence-based editorial process behind ThriveHealth360. Dedicated to helping you master your blood sugar."
        url="/about"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-emerald-600 py-20 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-tight">
              Our Mission: Your Metabolic Freedom
            </h1>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed font-light">
              ThriveHealth360 was founded to bridge the gap between complex clinical research and the millions of people looking to reverse prediabetes naturally.
            </p>
          </div>
        </section>

        {/* Editorial Leadership Section */}
        <section className="py-20 border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-50 aspect-square group bg-gray-50">
                {/* 🚀 Using your local image path: public/images/about/thrive-team.webp */}
                <img 
                  src="/images/about/thrive-team.webp" 
                  alt="ThriveHealth360 clinical research and editorial team reviewing metabolic data."
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  onError={(e) => {
                    // Fallback to high-quality medical stock photo if local image is missing
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div>
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Editorial Leadership</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Ayman, Lead Health Strategist</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With a focus on metabolic data and clinical research, Ayman founded ThriveHealth360 to provide a global perspective on chronic disease prevention. 
                  Our team analyzes emerging studies from around the world to ensure our readers receive the most up-to-date, safe, and effective protocols.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 text-sm text-amber-800 leading-relaxed">
                  <strong>Editorial Note:</strong> Ayman and the ThriveHealth360 team are health researchers and strategists, not licensed medical professionals (MD, RD, or equivalent). All content is for informational purposes only. Please consult a qualified healthcare provider for personal medical advice.
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

        {/* Affiliate Disclosure */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 underline decoration-emerald-500 decoration-4 underline-offset-8">Affiliate & Compensation Disclosure</h2>
            <Card>
              <p className="text-gray-700 leading-relaxed text-left text-sm p-2">
                <strong>Material Connection Disclosure (FTC 16 CFR §255):</strong> ThriveHealth360 participates in affiliate marketing programmes, including Amazon Associates and partnerships with selected supplement brands. We have a material connection with these sellers — when you click an affiliate link and make a qualifying purchase, we earn a commission at <strong>no additional cost to you</strong>. Where products have been gifted, sponsored, or provided for review, this is disclosed in the relevant article. These relationships never influence our editorial content, product rankings, or health guidance. We only recommend products that pass our independent vetting process regardless of commission rate. This disclosure applies to US readers (FTC), UK readers (ASA/CAP), Australian readers (ACCC), and Canadian readers (Competition Act).{' '}
                <Link to="/affiliate-disclosure" className="text-emerald-600 font-semibold hover:text-emerald-700">Read our full Affiliate Disclosure Policy →</Link>
              </p>
            </Card>
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