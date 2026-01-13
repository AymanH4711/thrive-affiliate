import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO'; // ✅ Using SEO Component
import { 
  ArrowRight, 
  Heart, 
  BookOpen, 
  Activity, 
  BarChart3, 
  Moon, 
  Scale, 
  CheckCircle2, 
  Map,
  ShieldCheck,
  Users,
  AlertCircle,
  Download // ✅ Added Download icon
} from 'lucide-react';

export default function HomePage() {
  // Schema for Organization
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Thrive Health",
    "description": "Natural prediabetes reversal program with science-backed guidance on diet, exercise, supplements, and lifestyle changes",
    "url": "https://thrive-health.com",
    "logo": "https://thrive-health.com/logo.png",
    "sameAs": [
      "https://facebook.com/thrivehealth",
      "https://instagram.com/thrivehealth",
      "https://twitter.com/ThriveHealth"
    ]
  };

  return (
    <>
      {/* ✅ SEO Meta Tags - Using Component */}
      <SEO
        title="Reverse Prediabetes Naturally | Thrive Health"
        description="Discover the proven 5-step plan to reverse prediabetes without medication. Get personalized guidance on diet, exercise, supplements & more. Start today!"
        keywords="reverse prediabetes, prediabetes reversal, blood sugar control, diabetes prevention, natural remedies"
        image="/images/home-og.png"
        url="/"
        type="website"
        schema={schema}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            
            {/* LEFT: Text Section - 40% Width */}
            <div className="order-2 md:order-1 md:col-span-2 space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Reverse Your Prediabetes
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-emerald-600 leading-tight">
                  In 5 Simple Steps
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
                A science-backed, natural path to lower A1C, lose weight, and regain your energy—without relying on medication alone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Link to="/prediabetes-signs" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition shadow-lg hover:shadow-emerald-200">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/prediabetes-support" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-emerald-700 bg-white border-2 border-emerald-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50 transition">
                  Learn the Basics
                </Link>
              </div>
            </div>

            {/* RIGHT: Image/Visual - 60% Width */}
            <div className="order-1 md:order-2 md:col-span-3 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img 
                  src="/images/hero-lifestyle.jpg" 
                  alt="Healthy active lifestyle for prediabetes reversal" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop';
                  }}
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-emerald-500 max-w-xs hidden sm:block">
                  <p className="font-bold text-gray-900 text-sm">"I lowered my A1C from 6.2 to 5.6 in 3 months!"</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-yellow-400">★★★★★</div>
                    <span className="text-xs text-gray-500">- Sarah T., Community Member</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚠️ MEDICAL DISCLAIMER */}
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

      {/* 🎁 FREE RESOURCE CTA - NEW SECTION */}
      <section className="bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Your Free 7-Day Blood Sugar Reset Guide
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of people reversing prediabetes with our proven method.
          </p>
          
          <a 
            href="/downloads/7-day-blood-sugar-reset.pdf" 
            download 
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg"
          >
            <Download size={20} />
            Download Free Guide (PDF)
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            No email required • Immediate download • 12 pages
          </p>
        </div>
      </section>

      {/* 2. THE 5 PILLARS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">The Thrive Method</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">The 5 Pillars of Reversal</h2>
            <p className="text-xl text-gray-600">Prediabetes isn't just about sugar. It's a metabolic signal. We address the root cause through five interconnected pillars.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Pillar 1 */}
            <Link to="/prediabetes-diet" className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition">
                <Heart className="w-6 h-6 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Nutrition</h3>
              <p className="text-sm text-gray-600">Blood sugar friendly foods that taste great and keep you full.</p>
            </Link>

            {/* Pillar 2 */}
            <Link to="/prediabetes-exercise" className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <Activity className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Movement</h3>
              <p className="text-sm text-gray-600">Simple activities to burn glucose and improve insulin sensitivity.</p>
            </Link>

            {/* Pillar 3 */}
            <Link to="/glucose-monitoring-tools" className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition">
                <BarChart3 className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Monitoring</h3>
              <p className="text-sm text-gray-600">Track your numbers to understand how your body responds.</p>
            </Link>

            {/* Pillar 4 */}
            <Link to="/supplements" className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition">
                <Scale className="w-6 h-6 text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">4. Supplements</h3>
              <p className="text-sm text-gray-600">Strategic support to fill gaps and boost metabolic function.</p>
            </Link>

            {/* Pillar 5 */}
            <Link to="/prediabetes-sleep-stress" className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-600 transition">
                <Moon className="w-6 h-6 text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">5. Sleep & Stress</h3>
              <p className="text-sm text-gray-600">Recovery is key. Manage cortisol to stop storing visceral fat.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. GUIDED PATHWAYS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Are You on Your Journey?</h2>
              <p className="text-lg text-gray-600">Choose the path that best describes your current situation for tailored advice.</p>
            </div>
            <Link to="/about" className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center">
              Learn about our methodology <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pathway 1: Just Diagnosed */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition shadow-sm hover:shadow-md">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <Map className="w-8 h-8 text-teal-600" />
                </div>
                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">New Here?</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Just Diagnosed?</h3>
              <p className="text-gray-600 mb-6">
                Feeling overwhelmed by a new prediabetes diagnosis? Don't panic. 
                We've broken down exactly what you need to do in your first 7 days.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Understanding your A1C</li>
                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> First grocery shop list</li>
                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Talking to your doctor</li>
              </ul>
              <Link to="/prediabetes-signs" className="block w-full py-3 text-center bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition">
                Start the 7-Day Guide
              </Link>
            </div>

            {/* Pathway 2: Ready for Advanced Reversal */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition shadow-sm hover:shadow-md">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-indigo-600" />
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full">Advanced</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Reverse?</h3>
              <p className="text-gray-600 mb-6">
                You know the basics, but the numbers aren't budging. 
                Dive deep into insulin resistance, supplement protocols, and advanced metabolic strategies.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Insulin resistance deep dive</li>
                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Supplement stacking guide</li>
                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Advanced fasting protocols</li>
              </ul>
              <Link to="/reverse-prediabetes" className="block w-full py-3 text-center bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition">
                Go to Advanced Protocols
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED RESOURCES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Latest from the Journal</h2>
            <p className="text-lg text-gray-600 mt-2">Evidence-based articles to keep you informed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link to="/natural-blood-sugar" className="group">
              <div className="rounded-xl overflow-hidden mb-4 relative h-64">
                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:bg-transparent transition-all duration-500">
                   <img 
                     src="/images/supplements-guide.jpg" 
                     alt="Supplements Guide" 
                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                     onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&h=600&fit=crop'}
                   />
                </div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Guide
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">Natural Blood Sugar Support</h3>
              <p className="text-gray-600 line-clamp-2">Detailed breakdown of Berberine, Cinnamon, and Chromium. What actually works according to science?</p>
            </Link>

            {/* Article 2 */}
            <Link to="/seniors-glucose-monitoring" className="group">
              <div className="rounded-xl overflow-hidden mb-4 relative h-64">
                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:bg-transparent transition-all duration-500">
                   <img 
                     src="/images/seniors-monitoring.jpg" 
                     alt="Seniors Monitoring" 
                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                     onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160550-217358c7e618?w=800&h=600&fit=crop'}
                   />
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Seniors
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">Monitoring After 60</h3>
              <p className="text-gray-600 line-clamp-2">Why glucose monitoring changes as we age and the best devices for seniors in 2025.</p>
            </Link>

            {/* Article 3 */}
            <Link to="/insulin-resistance-management" className="group">
              <div className="rounded-xl overflow-hidden mb-4 relative h-64">
                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:bg-transparent transition-all duration-500">
                   <img 
                     src="/images/insulin-resistance.jpg" 
                     alt="Insulin Resistance" 
                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                     onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop'}
                   />
                </div>
                <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Deep Dive
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">Understanding Insulin Resistance</h3>
              <p className="text-gray-600 line-clamp-2">The silent driver of prediabetes. Learn the signs and how to reverse it naturally.</p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700">
              View All Articles <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EMAIL SIGNUP */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Get Blood Sugar Tips Weekly &mdash; Foods, Supplements, Habits</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of others receiving expert advice on prediabetes reversal and exclusive resource downloads.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white" 
            />
            <button 
              type="submit" 
              className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-emerald-200 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* 💰 AFFILIATE DISCLOSURE */}
      <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
    </>
  );
}