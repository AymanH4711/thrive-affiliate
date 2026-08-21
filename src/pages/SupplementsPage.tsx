import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, Pill, Heart, Zap, ShieldCheck, Activity, Home } from 'lucide-react';
import { TIMELINES, SUPPLEMENT_CLAIMS } from "../config/contentGuidelines";
import { SEO } from "@/components/seo/SEO";

export default function SupplementsPage() {
  // Static color map — dynamic Tailwind classes like `bg-${color}-600` are purged at build time
  const colorClasses: Record<string, { bg: string; bgLight: string; bgTo: string; border: string; text: string }> = {
    emerald: { bg: 'bg-emerald-600', bgLight: 'bg-emerald-50', bgTo: 'to-emerald-100', border: 'border-emerald-200', text: 'text-emerald-600' },
    blue:    { bg: 'bg-blue-600',    bgLight: 'bg-blue-50',    bgTo: 'to-blue-100',    border: 'border-blue-200',    text: 'text-blue-600'    },
    purple:  { bg: 'bg-purple-600',  bgLight: 'bg-purple-50',  bgTo: 'to-purple-100',  border: 'border-purple-200',  text: 'text-purple-600'  },
    teal:    { bg: 'bg-teal-600',    bgLight: 'bg-teal-50',    bgTo: 'to-teal-100',    border: 'border-teal-200',    text: 'text-teal-600'    },
  };

  const categoryNav = [
    { id: 'blood-sugar-support', name: 'Blood Sugar Support', icon: Heart, color: 'emerald' },
    { id: 'metabolic-weight', name: 'Metabolic & Weight', icon: Zap, color: 'blue' },
    { id: 'insulin-sensitivity', name: 'Insulin Sensitivity', icon: Activity, color: 'purple' },
    { id: 'general-wellness', name: 'General Wellness', icon: ShieldCheck, color: 'teal' }
  ];

  const categoryCards = [
    {
      id: 'blood-sugar-support',
      name: 'Blood Sugar Support',
      description: 'Lower glucose levels and stabilize blood sugar spikes',
      icon: Heart,
      color: 'emerald',
      productCount: 3,
      products: ['Berberine', 'Cinnamon Extract', 'Chromium Picolinate'],
      pillarLink: '/prediabetes-support',
      pillarName: 'Prediabetes Support',
      bestFor: 'Prediabetes, high A1C (5.7%+), blood sugar spikes'
    },
    {
      id: 'metabolic-weight',
      name: 'Metabolic & Weight',
      description: 'Boost metabolism, energy, and healthy weight loss',
      icon: Zap,
      color: 'blue',
      productCount: 2,
      products: ['Green Tea Extract', 'Magnesium Glycinate'],
      pillarLink: '/weight-wellness',
      pillarName: 'Weight & Wellness',
      bestFor: 'Weight loss support, low energy, metabolism boost'
    },
    {
      id: 'insulin-sensitivity',
      name: 'Insulin Sensitivity',
      description: 'Improve how your cells respond to insulin',
      icon: Activity,
      color: 'purple',
      productCount: 1,
      products: ['Alpha-Lipoic Acid (ALA)'],
      pillarLink: '/insulin-resistance-management',
      pillarName: 'Insulin Resistance Management',
      bestFor: 'Insulin resistance, metabolic syndrome, lab-confirmed IR'
    },
    {
      id: 'general-wellness',
      name: 'General Wellness',
      description: 'Educational guides and resources for self-directed blood sugar management',
      icon: ShieldCheck,
      color: 'teal',
      productCount: 2,
      products: ['Fix Blood Sugar', 'Diabetes Self-Tracking Personal Operating System'],
      pillarLink: '/natural-blood-sugar',
      pillarName: 'Natural Blood Sugar Control',
      bestFor: 'A structured starting point to bring to your own care team'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blood Sugar Support Supplements",
    "description": "Shop natural supplements for blood sugar control and metabolic health"
  };

  return (
    <>
      <SEO
        title="Natural Supplements for Blood Sugar | Shop Now"
        description="Shop science-backed supplements for blood sugar support, metabolic health & insulin sensitivity. Compare products, read reviews, and find the best for your needs."
        keywords="blood sugar supplements, prediabetes supplements, berberine, cinnamon supplement, natural blood sugar support"
        image="/images/supplements-og.png"
        url="/supplements"
        schema={schema}
      />
      <main>
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-12">
            <Pill className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium">Research-Reviewed Supplements</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quality Supplements for Blood Sugar Support
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Carefully selected supplement categories to support your blood sugar health goals. Each category has been reviewed for available research and quality criteria.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>Evidence-Reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>Quality Criteria Applied</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>Third-Party Testing Preferred</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEDICAL DISCLAIMER */}
      <section className="py-4 bg-amber-50 border-b-2 border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-sm text-amber-900 mb-1">Medical Disclaimer</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  The information on this page is for <strong>educational purposes only</strong> and does not constitute medical advice. These statements have not been evaluated by the U.S. Food and Drug Administration (FDA). No product listed here is intended to diagnose, treat, cure, or prevent any disease. Supplements are not a substitute for prescribed medications or a balanced diet and lifestyle. <strong>Always consult a qualified healthcare provider before starting any supplement</strong>, especially if you have diabetes, prediabetes, or any other health condition, or are taking medications such as metformin, insulin, blood thinners, or other glucose-lowering drugs — some supplements can interact with these medications or cause blood sugar to drop too low. Individual results vary and are not guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO SHOULD START HERE */}
      <section className="py-12 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <Pill className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">New Here? Start With The Right Category</h2>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold text-emerald-600">Blood Sugar Support</span> – If you have prediabetes, high A1C (5.7%+), or blood sugar spikes</p>
                  <p><span className="font-semibold text-blue-600">Metabolic & Weight</span> – If seeking fat loss support, metabolism boost, or better energy</p>
                  <p><span className="font-semibold text-purple-600">Insulin Sensitivity</span> – If you have insulin resistance confirmed by labs</p>
                  <p><span className="font-semibold text-teal-600">General Wellness</span> – If focused on prevention, anti-aging, and overall health</p>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">💡 Not sure? Start with Blood Sugar Support or consult your healthcare provider.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATEGORY CARDS - MAIN NAVIGATION (HUB PAGE) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Click any category to view supplements and detailed product information</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categoryCards.map((cat) => {
              const colors = colorClasses[cat.color];
              return (
              <Link
                key={cat.id}
                to={`/supplements/${cat.id}`}
                className={`bg-gradient-to-br ${colors.bgLight} ${colors.bgTo} border-2 ${colors.border} rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 group`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.bg} text-white rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{cat.name}</h3>
                
                <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
                
                <div className="text-xs text-gray-500 mb-4">
                  <span className="font-semibold">Best for:</span> {cat.bestFor}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">{cat.productCount} {cat.productCount === 1 ? 'product' : 'products'}</span>
                  <span className={`inline-flex items-center gap-1 ${colors.text} font-medium text-sm group-hover:gap-2 transition-all`}>
                    View <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-500 mt-6 italic">
            * Some product links within these categories are affiliate links. We may earn a commission at no extra cost to you.{' '}
            <a href="#affiliate-disclosure" className="underline hover:text-gray-700">See full disclosure below.</a>
          </p>
        </div>
      </section>

      {/* 5. HOW SUPPLEMENTS FIT YOUR SYSTEM */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Supplements Fit Your System</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Supplements work best when combined with proper diet, exercise, and lifestyle changes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Foundation First</h3>
              <p className="text-gray-600">Supplements enhance–but don't replace–a healthy diet and active lifestyle</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quality Matters</h3>
              <p className="text-gray-600">Choose third-party tested brands with transparent ingredient sourcing</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Pill className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Personalized Approach</h3>
              <p className="text-gray-600">Work with your healthcare provider to find what works for your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supplement FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Can supplements replace medication for blood sugar control?",
                a: "No. Supplements are meant to support–not replace–prescribed medications. Always consult your healthcare provider before making changes to your treatment plan."
              },
              {
                q: "How long does it take to see results from supplements?",
                a: `${SUPPLEMENT_CLAIMS.acceleration} Results typically appear within ${TIMELINES.resultsWeeks} when combined with diet, exercise, and monitoring. ${SUPPLEMENT_CLAIMS.when_to_take}`
              },
              {
                q: "Which category should I start with?",
                a: "Start with Blood Sugar Support if you have prediabetes or diabetes. If you have insulin resistance confirmed by labs, try Insulin Sensitivity. Always consult your healthcare provider for personalized guidance."
              },
              {
                q: "Are supplements safe to take together?",
                a: "Many supplements can be combined safely, but it's essential to consult with a healthcare provider, especially if you're on medications. Some supplements may have additive effects or interactions."
              },
              {
                q: "How do I know if a supplement brand is quality?",
                a: "Look for third-party testing (USP, NSF, ConsumerLab), GMP certification, transparent ingredient sourcing, and brands with good manufacturing practices."
              },
              {
                q: "What if I'm already on medication for blood sugar?",
                a: "Do not start any supplement without consulting your doctor. Some supplements can interact with medications or cause your blood sugar to drop too low."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AFFILIATE DISCLOSURE */}
      <section id="affiliate-disclosure" className="py-4 bg-blue-50 border-t-2 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-sm text-blue-900 mb-1">Affiliate Disclosure</p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  <strong>Transparency notice:</strong> This page contains affiliate links to supplement products. ThriveHealth360 may earn a commission if you purchase through these links, at <strong>no additional cost to you</strong>. This financial relationship may influence which products or categories we feature and how they are presented. We apply editorial and quality standards to all recommendations; however, you should conduct your own research and consult a qualified healthcare professional before purchasing any supplement. This disclosure is provided in accordance with the FTC&apos;s guidelines on endorsements and testimonials (16 CFR §255).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BACK TO HOME */}
      <section className="py-12 text-center border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-6">Explore more ways to manage your blood sugar</p>
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}