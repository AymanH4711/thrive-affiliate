import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, Pill, Heart, Zap, ShieldCheck, Activity, Home } from 'lucide-react';
import { SupplementsMedicalDisclaimer, SupplementsAffiliateDisclaimerHub } from '@/components/disclaimers/SupplementDisclaimers';
import { TIMELINES, SUPPLEMENT_CLAIMS } from "../config/contentGuidelines";
import { SEO } from "../components/SEO";

export default function SupplementsPage() {
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
      description: 'Support longevity, inflammation, and healthy aging',
      icon: ShieldCheck,
      color: 'teal',
      productCount: 1,
      products: ['Resveratrol'],
      pillarLink: '/natural-blood-sugar',
      pillarName: 'Natural Blood Sugar Control',
      bestFor: 'Anti-aging, longevity, prevention, overall health'
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
        keywords="blood sugar supplements, diabetes supplements, berberine, cinnamon supplement, natural remedies"
        image="/images/supplements-og.png"
        url="/supplements"
        schema={schema}
      />
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-12">
            <Pill className="w-5 h-5" />
            <span className="font-medium">Science-Backed Supplements</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quality Supplements for Blood Sugar Support
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Carefully selected supplement categories to support your blood sugar health goals. Each category has been researched for safety and effectiveness.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Research-Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Quality Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Third-Party Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEDICAL DISCLAIMER - IMMEDIATELY AFTER HERO (COMPACT) */}
      <section className="py-4 bg-amber-50 border-b-2 border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm text-amber-900 mb-1">⚠️ Medical Disclaimer</h3>
                <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                  These statements have not been evaluated by the FDA. This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare provider before starting supplements or making health changes.
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
                <h2 className="text-xl font-bold text-gray-900 mb-3">👋 New Here? Start With The Right Category</h2>
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
            {categoryCards.map((cat) => (
              <Link
                key={cat.id}
                to={`/supplements/${cat.id}`}
                className={`bg-gradient-to-br from-${cat.color}-50 to-${cat.color}-100 border-2 border-${cat.color}-200 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 group`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-${cat.color}-600 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{cat.name}</h3>
                
                <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
                
                <div className="text-xs text-gray-500 mb-4">
                  <span className="font-semibold">Best for:</span> {cat.bestFor}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">{cat.productCount} {cat.productCount === 1 ? 'product' : 'products'}</span>
                  <span className={`inline-flex items-center gap-1 text-${cat.color}-600 font-medium text-sm group-hover:gap-2 transition-all`}>
                    View <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
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

      {/* 7. AFFILIATE DISCLOSURE - COMPACT */}
      <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm text-blue-900 mb-1">💰 Affiliate Disclosure</h3>
                <p className="text-xs text-blue-800 leading-relaxed font-semibold">
                  Thrive Health may earn commissions from affiliate partnerships and supplement links. This does not affect product pricing. We only recommend products we believe in based on research and quality standards.
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
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}