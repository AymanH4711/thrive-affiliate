import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Activity, BarChart3, Pill, Moon, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { DownloadModal } from '../components/DownloadModal';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Reverse Your Prediabetes | ThriveHealth - Science-Backed Methods"
        description="Learn how to naturally reverse prediabetes in 5 simple steps. Science-backed strategies for blood sugar, nutrition, movement, and more."
        keywords="reverse prediabetes, lower A1C, blood sugar control, prediabetes reversal"
      />

      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm text-emerald-600 font-semibold mb-4">🏥 Healthy Lifestyle</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Reverse Your Prediabetes
                <span className="text-emerald-600"> In 5 Simple Steps</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                A science-backed, natural path to lower A1C, regain your energy—without relying on medications alone.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/prediabetes"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg"
                >
                  Start Your Journey <ChevronRight size={20} />
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition font-semibold text-lg"
                >
                  Learn the Basics
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=300&fit=crop"
                  alt="Woman exercising"
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <section className="bg-amber-50 border-l-4 border-amber-500 py-4 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-amber-900">
            ⚠️ <strong>Medical Disclaimer:</strong> These statements have not been evaluated by the FDA. This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare provider before starting supplements or making health changes.
          </p>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg mb-12 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Your Free 7-Day Blood Sugar Reset Guide
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of people reversing prediabetes with our proven method.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg"
          >
            <TrendingUp size={20} />
            Download Free Guide (PDF)
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Immediate download • 12 pages
          </p>
        </div>
      </section>

      {/* The ThriveHealth Method - 5 Pillars */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          The ThriveHealth Method
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Prediabetes isn't just about sugar. It's a metabolic signal. We address the root cause through five interconnected pillars.
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Pillar 1: Nutrition */}
          <Link 
            to="/prediabetes/diet"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-4xl mb-3">🥗</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Nutrition</h3>
            <p className="text-sm text-gray-600">
              Blood sugar friendly foods that keep you full
            </p>
            <p className="text-xs text-emerald-600 font-semibold mt-4 group-hover:translate-x-1 transition">
              Learn more →
            </p>
          </Link>

          {/* Pillar 2: Movement */}
          <Link 
            to="/prediabetes/exercise"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-4xl mb-3">🏃</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Movement</h3>
            <p className="text-sm text-gray-600">
              Simple activities to boost glucose and improve insulin sensitivity
            </p>
            <p className="text-xs text-emerald-600 font-semibold mt-4 group-hover:translate-x-1 transition">
              Learn more →
            </p>
          </Link>

          {/* Pillar 3: Monitoring */}
          <Link 
            to="/glucose-monitoring"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Monitoring</h3>
            <p className="text-sm text-gray-600">
              Track your progress in real time with the right tools
            </p>
            <p className="text-xs text-emerald-600 font-semibold mt-4 group-hover:translate-x-1 transition">
              Learn more →
            </p>
          </Link>

          {/* Pillar 4: Supplements */}
          <Link 
            to="/supplements"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-4xl mb-3">💊</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Supplements</h3>
            <p className="text-sm text-gray-600">
              Strategic support supplements that help stabilize blood sugar
            </p>
            <p className="text-xs text-emerald-600 font-semibold mt-4 group-hover:translate-x-1 transition">
              Learn more →
            </p>
          </Link>

          {/* Pillar 5: Sleep & Stress */}
          <Link 
            to="/prediabetes/sleep-stress"
            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-4xl mb-3">😴</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Sleep & Stress</h3>
            <p className="text-sm text-gray-600">
              Recovery is key. Manage stress to control blood sugar
            </p>
            <p className="text-xs text-emerald-600 font-semibold mt-4 group-hover:translate-x-1 transition">
              Learn more →
            </p>
          </Link>
        </div>
      </section>

      {/* Journey Assessment */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Where Are You on Your Journey?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the path that best describes your current situation for tailored advice.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Just Diagnosed */}
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-teal-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏥</span>
              <h3 className="text-2xl font-bold text-gray-900">Just Diagnosed?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Feeling overwhelmed by a new prediabetes diagnosis? Don't panic. We've created clear steps to help you understand exactly what you need to do in your first 7 days.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span className="text-gray-700">Understanding your A1C</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span className="text-gray-700">First grocery shop list</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span className="text-gray-700">Talking to your doctor</span>
              </li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-semibold"
            >
              Start the 7-Day Guide
            </button>
          </div>

          {/* Ready to Reverse */}
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-emerald-600">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🚀</span>
              <h3 className="text-2xl font-bold text-gray-900">Ready to Reverse?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              You know the basics, but the numbers aren't budging. Dive into advanced strategies for stubborn metabolic resistance and supplement protocols.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span className="text-gray-700">Insulin resistance deep dive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span className="text-gray-700">Supplement stacking guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span className="text-gray-700">Advanced testing protocols</span>
              </li>
            </ul>
            <Link
              to="/insulin-resistance"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold text-center block"
            >
              Go to Advanced Protocols
            </Link>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Latest from the Journal
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Evidence-based articles to keep you informed.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              tag: 'Nutrition',
              title: 'Natural Blood Sugar Support',
              description: 'Powerful breakdown of Berberine, Cinnamon, and Chromium. What actually works according to...',
              image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop'
            },
            {
              tag: 'Sensors',
              title: 'Monitoring After 60',
              description: 'Why glucose monitoring changes as an age and the best devices for seniors in 2025...',
              image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop'
            },
            {
              tag: 'Lifestyle',
              title: 'Understanding Insulin Resistance',
              description: 'The silent driver of prediabetes. Understand the signs and how to reverse it naturally...',
              image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop'
            }
          ].map((article, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-semibold text-white bg-emerald-600 px-3 py-1 rounded-full">
                  {article.tag}
                </span>
                <h3 className="font-bold text-lg text-gray-900 mt-3">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/blog"
            className="text-emerald-600 font-semibold hover:text-emerald-700 transition"
          >
            View All Articles →
          </Link>
        </div>
      </section>

      {/* Email Newsletter */}
      <section className="bg-teal-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">
            Get Blood Sugar Tips Weekly
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Join thousands receiving expert advice on prediabetes reversal and exclusive resource downloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-teal-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};