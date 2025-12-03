// src/app/page.tsx (New File Path)
// FIX: Changed import from 'react-router-dom' to 'next/link'
import Link from 'next/link'; 
import { ArrowRight, Heart, BookOpen, Users, Activity, Brain, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION - ADJUSTED: WIDER IMAGE, SMALLER GAP */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* GAP REDUCED from gap-8 to gap-4 to shift image left */}
          <div className="grid md:grid-cols-12 gap-4 items-center">
            {/* LEFT: Text - NARROWER (4 columns instead of 5) to give space to image */}
            <div className="order-2 md:order-1 md:col-span-4 space-y-6 text-center md:text-left">
              <div className="space-y-1 max-w-full mx-auto md:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Take Control of Your Blood Sugar
                </h1>
                <h2 className="text-3xl sm:text-5xl font-bold text-emerald-600 leading-tight">
                  Naturally & Safely
                </h2>
              </div>
              <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0 leading-tight">
                Evidence-based blood sugar guides and supplement reviews to help you stay healthy—naturally.
              </p>
              {/* CTA BUTTONS - UPDATED TO PREDIABETES SUPPORT */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link
                  // FIX: Changed 'to' to 'href'
                  href="/prediabetes-support"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition shadow-lg"
                >
                  <Heart className="w-5 h-5" />
                  Find Supplements
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  // FIX: Changed 'to' to 'href'
                  href="/blog/lower-blood-sugar-naturally"
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition"
                >
                  <BookOpen className="w-5 h-5" />
                  Learn How
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE — UPDATED TO .webp */}
            <div className="order-1 md:order-2 md:col-span-8 pl-0 md:pl-4">
              <img
                src="/images/blood-sugar-hero.webp" 
                alt="Healthy living blood sugar support"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover" 
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST INDICATORS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><p className="text-4xl font-bold text-emerald-600">422M</p><p className="text-gray-600">People with Blood Sugar Issues</p></div>
            <div><p className="text-4xl font-bold text-emerald-600">$34B</p><p className="text-gray-600">Global Supplement Market</p></div>
            <div><p className="text-4xl font-bold text-emerald-600">40+</p><p className="text-gray-600">Science-Backed Guides</p></div>
            <div><p className="text-4xl font-bold text-emerald-600">100%</p><p className="text-gray-600">Transparent Affiliate Reviews</p></div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CATEGORIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h3>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Explore science-backed health solutions for blood sugar and metabolic wellness.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              // FIX: Changed 'to' to 'href'
              { href: '/prediabetes-support', title: '🩸 Blood Sugar Support', market: 'Regulate Glucose Levels' },
              { href: '/metabolic-health', title: '🔥 Metabolism & Weight Support', market: 'Boost Fat Burning' },
              { href: '/herbal-remedies', title: '🌿 Herbal Remedies', market: 'Natural Plant Extracts' },
              { href: '/monitoring-tools', title: '🧪 Testing & Monitoring Tools', market: 'Track Health Metrics' },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
                <p className="font-semibold text-lg">{cat.title}</p>
                <p className="text-sm text-gray-500 mt-1">{cat.market}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium mt-3">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PERSONALIZED FOR YOUR NEEDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Personalized for Your Needs</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Health solutions tailored to your life stage and wellness goals</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Prediabetes & Insulin Resistance', items: ['Lower A1C naturally', 'Improve insulin sensitivity', 'Early intervention guides'] },
              { icon: HeartHandshake, title: 'Natural Support Seekers', items: ['Herbal remedies', 'Dietary fiber', 'Vitamin deficiencies'] },
              { icon: Activity, title: 'Weight Management Goals', items: ['Metabolism boosting', 'Appetite control', 'Fat burning supplements'] },
              { icon: Brain, title: 'Seniors & Glucose Monitoring', items: ['Cognitive protection', 'Heart health support', 'Easy-to-use devices'] },
            ].map((g, i) => (
              <div key={i} className="bg-emerald-50 p-6 rounded-xl">
                <g.icon className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-lg">{g.title}</h4>
                <ul className="text-sm text-gray-600 mt-3 space-y-1">
                  {g.items.map((it, j) => <li key={j} className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-600 rounded-full"></div>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Your path to better health starts here</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Learn', desc: 'Read science-backed guides on managing your blood sugar and insulin resistance' },
              { step: '02', title: 'Compare', desc: 'View in-depth reviews and side-by-side comparisons of top-rated supplements' },
              { step: '03', title: 'Choose the Best Supplement', desc: 'Select the right product with confidence through transparent affiliate links' },
            ].map((item) => (
              <div key={item.step}>
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">{item.step}</div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LATEST HEALTH INSIGHTS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest Health Insights</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Evidence-based guides to help you make informed health decisions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Signs of Prediabetes: A 5-Minute Self-Assessment', time: '5 min read', tag: 'Health Insights' },
              { title: 'Best Supplements for Lowering Blood Sugar (Top 5 Ranked)', time: '12 min read', tag: 'Supplement Review' },
              { title: 'Berberine vs Metformin: Which is Right for Glucose Control?', time: '10 min read', tag: 'Comparison Guide' },
            ].map((post, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-emerald-600" />
                </div>
                <span className="text-xs text-emerald-600 font-medium">{post.tag}</span>
                <h4 className="font-bold text-lg mt-2 line-clamp-2">{post.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{post.time}</p>
                {/* FIX: Changed 'to' to 'href' */}
                <Link href="/blog" className="inline-flex items-center gap-1 text-emerald-600 font-medium mt-4">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            {/* FIX: Changed 'to' to 'href' */}
            <Link href="/blog" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-700 transition">
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: WEEKLY TIPS */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Get Blood Sugar Tips Weekly — Foods, Supplements, Daily Habits</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join thousands of others receiving expert advice on blood sugar management, product reviews, and exclusive offers</p>
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
          <p className="text-sm mt-4 opacity-90">No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>
      </section>
    </>
  );
}