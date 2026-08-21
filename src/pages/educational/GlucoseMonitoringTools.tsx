// src/pages/glucose-monitoring/GlucoseMonitoringTools.tsx
import { Link } from 'react-router-dom';
import { SEO } from "@/components/seo/SEO";
import {
  Smartphone,
  Activity,
  BarChart3,
  Zap,
  Clock,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function GlucoseMonitoringTools() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <SEO
        title="Glucose Monitoring Tools & Technology | Step 3 of 5"
        description="Compare blood glucose meters (BGM) and continuous glucose monitors (CGM): accuracy, cost, top picks for 2026, and a buying guide for readers worldwide."
        keywords="glucose monitoring, blood glucose meter, continuous glucose monitor, CGM, BGM, prediabetes monitoring"
        url="/glucose-monitoring-tools"
      />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-14 lg:py-20 overflow-hidden relative">
        {/* Ambient blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* ── Two-column grid: text left | image right ── */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — text */}
            <div className="text-left">
              <Link to="/reverse-prediabetes"
                className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition text-sm">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" aria-hidden="true" /> Back to Plan
              </Link>

              <span className="bg-purple-500/20 text-purple-100 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
                Step 3 of 5
              </span>

              {/* "Track Your Progress" as label above H1 */}
              <p className="text-purple-200 font-semibold text-sm uppercase tracking-widest mb-2">
                Track Your Progress
              </p>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Glucose Monitoring Tools &amp; Technology
              </h1>

              <p className="text-lg text-purple-50 leading-relaxed max-w-lg">
                From traditional finger-prick meters to wearable CGMs, discover the right glucose monitoring
                technology for your needs — with honest comparisons and practical buying guidance for readers worldwide.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-5 mt-7 text-purple-200 text-sm">
                {[
                  'mg/dL & mmol/L covered',
                  'Global availability noted',
                  'Honest comparisons',
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-purple-400/30 flex items-center justify-center text-xs">✓</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-purple-400/20 blur-xl scale-105" />
                <img
                  src="/images/glucose-monitoring-hero-og.webp"
                  alt="Person using glucose monitoring app on tablet with healthy foods nearby"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl border border-purple-700/40 object-cover w-full max-w-sm"
                  loading="eager"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes('glucose-monitoring-hero.webp')) {
                      img.src = '/images/glucose-monitoring-hero.webp';
                    }
                  }}
                />
              </div>
            </div>

          </div>{/* end grid */}
        </div>
      </section>

      {/* ── MEDICAL DISCLAIMER ── */}
      <section className="bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4 max-w-4xl py-5">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Medical Disclaimer</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                The information on this page is for educational purposes only and does not constitute medical advice.
                These statements have not been evaluated by the U.S. Food and Drug Administration (FDA).
                No content here is intended to diagnose, treat, cure, or prevent any disease.
                Device availability, pricing, prescription requirements, and health scheme coverage vary significantly
                by country. Always consult a qualified healthcare provider before choosing or changing any glucose
                monitoring device, especially if you use insulin or have any other medical condition.
                Individual results may vary and reversal is not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY NAVIGATION ── */}
      <nav aria-label="Page sections" className="sticky top-0 z-20 bg-purple-50 border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-6 py-4 text-sm font-semibold text-purple-800 whitespace-nowrap">
            <button onClick={() => scrollToSection('why-monitor')} className="hover:text-purple-600">Why Monitor</button>
            <button onClick={() => scrollToSection('device-types')} className="hover:text-purple-600">Device Types</button>
            <button onClick={() => scrollToSection('bgm')} className="hover:text-purple-600">BGM Meters</button>
            <button onClick={() => scrollToSection('cgm')} className="hover:text-purple-600">CGM Systems</button>
            <button onClick={() => scrollToSection('comparison')} className="hover:text-purple-600">CGM vs BGM</button>
            <button onClick={() => scrollToSection('top-devices')} className="hover:text-purple-600">Top Picks</button>
            <button onClick={() => scrollToSection('apps')} className="hover:text-purple-600">Apps</button>
            <button onClick={() => scrollToSection('buying-guide')} className="hover:text-purple-600">Buying Guide</button>
          </div>
        </div>
      </nav>

      {/* ── PROGRESS INDICATOR ── */}
      <section className="bg-purple-50 border-b border-purple-100 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm font-semibold text-purple-800 mb-4">Your Progress Through Reversal:</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/prediabetes-diet" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-semibold text-gray-600 hover:text-purple-600 text-sm">Diet</span>
            </Link>
            <div className="w-8 h-1 bg-purple-300" aria-hidden="true"></div>
            <Link to="/prediabetes-exercise" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="font-semibold text-gray-600 hover:text-purple-600 text-sm">Exercise</span>
            </Link>
            <div className="w-8 h-1 bg-purple-300" aria-hidden="true"></div>
            {/* Current step — shows number, not checkmark, to distinguish from completed steps */}
            <div className="flex items-center gap-3" aria-current="step">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <span className="font-semibold text-purple-700 text-sm">Monitor</span>
            </div>
            <div className="w-8 h-1 bg-gray-300" aria-hidden="true"></div>
            <Link to="/natural-blood-sugar" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <span className="font-semibold text-gray-600 hover:text-purple-600 text-sm">Supplements</span>
            </Link>
            <div className="w-8 h-1 bg-gray-300" aria-hidden="true"></div>
            <Link to="/prediabetes-sleep-stress" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
              <span className="font-semibold text-gray-600 hover:text-purple-600 text-sm">Sleep & Stress</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">In This Guide</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: 'Why Monitoring Matters', link: '#why-monitor' },
              { title: 'Types of Devices', link: '#device-types' },
              { title: 'Traditional Blood Glucose Meters (BGM)', link: '#bgm' },
              { title: 'Continuous Glucose Monitors (CGM)', link: '#cgm' },
              { title: 'CGM vs BGM: Which is Right for You?', link: '#comparison' },
              { title: 'Top Devices of 2026', link: '#top-devices' },
              { title: 'Smartphone Apps & Integration', link: '#apps' },
              { title: 'Buying Guide', link: '#buying-guide' },
            ].map((item, i) => (
              <a key={i} href={item.link} className="text-base text-purple-600 hover:text-purple-800 hover:underline font-semibold flex items-center gap-2">
                <ChevronRight className="w-4 h-4 flex-shrink-0" /> {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Section 1: Why Monitor */}
          <section id="why-monitor" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Glucose Monitoring Matters</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              You can't manage what you don't measure. Regular glucose monitoring gives you real-time data to understand how food, exercise, sleep, and stress affect your blood sugar — empowering smarter, more informed decisions every day.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Benefits of Regular Monitoring:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Catch high or low blood sugar early before symptoms worsen',
                  'See directly how specific foods affect your glucose levels',
                  'Track how well medications or lifestyle changes are working',
                  'Reduce the risk of long-term complications through early action',
                  'Build confidence and a sense of control over your health',
                  'Share meaningful data with your doctor or care team',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-800 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
              <p className="text-base font-semibold text-gray-900">
                Evidence suggests that people who monitor their glucose regularly tend to achieve better HbA1c levels and experience fewer diabetes-related complications — though outcomes depend on many individual factors.
              </p>
            </div>

            {/* International units note */}
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-5 flex gap-3">
              <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm text-purple-900">
                <p className="font-bold mb-1">A note on measurement units</p>
                <p>Blood glucose is measured in <strong>mg/dL</strong> in the United States, and in <strong>mmol/L</strong> in the UK, Australia, Canada, most of Europe, and many other countries. Throughout this guide we include both where relevant. To convert: <strong>mg/dL ÷ 18 = mmol/L</strong>.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Device Types */}
          <section id="device-types" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Glucose Monitoring Devices</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              There are two main categories of glucose monitors, each with distinct advantages depending on your needs and circumstances:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Activity className="w-8 h-8 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Blood Glucose Meters (BGM)</h3>
                    <p className="text-gray-700 mb-4 text-sm">Traditional finger-prick devices that give instant spot readings</p>
                    <div className="space-y-1.5 text-sm">
                      <p className="text-gray-700">✓ Affordable and widely available</p>
                      <p className="text-gray-700">✓ Instant results (typically 5 seconds)</p>
                      <p className="text-gray-700">✓ Small, portable, battery-powered</p>
                      <p className="text-gray-700">✓ No prescription needed in most countries</p>
                      <p className="text-gray-700">✗ Requires finger-prick blood samples</p>
                      <p className="text-gray-700">✗ Only shows glucose at a single moment in time</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Smartphone className="w-8 h-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Glucose Monitors (CGM)</h3>
                    <p className="text-gray-700 mb-4 text-sm">Wearable sensors that track glucose automatically, around the clock</p>
                    <div className="space-y-1.5 text-sm">
                      <p className="text-gray-700">✓ No routine finger pricks</p>
                      <p className="text-gray-700">✓ Readings every 1–15 minutes, 24/7</p>
                      <p className="text-gray-700">✓ Shows glucose trends (rising, falling, stable)</p>
                      <p className="text-gray-700">✓ Alerts for high and low readings</p>
                      <p className="text-gray-700">✗ Higher ongoing cost</p>
                      <p className="text-gray-700">✗ Often requires a prescription</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: BGM */}
          <section id="bgm" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Traditional Blood Glucose Meters (BGM)</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              BGMs remain the most widely used glucose monitoring method worldwide — accessible, affordable, and effective for most people managing prediabetes or type 2 diabetes. Here's what to look for:
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Key Features to Look For in a BGM:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { feature: 'Accuracy', desc: 'Look for meters meeting ISO 15197:2013 — the international accuracy standard (≥95% of results within ±15% of lab values). FDA-cleared in the US; CE-marked in Europe.' },
                  { feature: 'Sample Size', desc: 'Smaller blood drops are easier to obtain and less uncomfortable. Look for ≤0.5 microlitres.' },
                  { feature: 'Result Speed', desc: 'Most modern meters return results in 5 seconds or less.' },
                  { feature: 'Memory', desc: 'Look for 200–500+ stored readings with date and time stamps for meaningful trend review.' },
                  { feature: 'Display & Usability', desc: 'A large, backlit screen is important — especially for low-light testing or users with vision challenges.' },
                  { feature: 'Strip Cost', desc: 'Test strips are the main ongoing expense. Check strip availability and cost in your country before choosing a meter.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.feature}</h4>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-amber-800">
                <strong>Pricing note:</strong> Device and strip prices vary widely by country, retailer, and whether you have health scheme or insurance coverage. Prices below reflect approximate retail costs in the US — your local pricing may differ significantly. Always check with your pharmacy or national health programme.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Widely Available BGM Devices:</h3>
              {[
                {
                  name: 'OneTouch Verio Reflect',
                  price: '~$20–$30 (US)',
                  strips: '~$1.00/strip (US)',
                  pros: 'Colour-coded results, Bluetooth sync, helpful companion app with actionable insights',
                  best: 'Good for app users & those new to monitoring'
                },
                {
                  name: 'Contour Next One',
                  price: '~$15–$25 (US)',
                  strips: '~$0.70/strip (US)',
                  pros: 'Second-chance sampling (reapply blood without a new strip), very accurate, strong app with pattern detection',
                  best: 'Strong all-round value'
                },
                {
                  name: 'Accu-Chek Guide',
                  price: '~$25–$35 (US)',
                  strips: '~$0.90/strip (US)',
                  pros: 'Spill-resistant strip vial, easy strip insertion, widely available internationally',
                  best: 'Good for those with dexterity challenges; available in many countries'
                },
              ].map((device, i) => (
                <div key={i} className="bg-white border-2 border-purple-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{device.name}</h4>
                      <p className="text-sm text-purple-600 font-semibold">{device.best}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-base font-bold text-gray-900">{device.price}</p>
                      <p className="text-xs text-gray-500">Strips: {device.strips}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{device.pros}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: CGM */}
          <section id="cgm" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Continuous Glucose Monitors (CGM)</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              CGMs have transformed blood sugar management. A small sensor worn on the arm or abdomen measures glucose in the interstitial fluid every few minutes, sending readings wirelessly to a smartphone or dedicated receiver — giving you a continuous picture of your glucose patterns without routine finger pricks.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How CGMs Work:</h3>
              <div className="space-y-3">
                {[
                  { step: '1', desc: 'Apply a small, pre-filled sensor to your upper arm or abdomen using an auto-applicator' },
                  { step: '2', desc: 'A tiny filament measures glucose in the interstitial fluid just beneath the skin every 1–15 minutes' },
                  { step: '3', desc: 'Readings transmit wirelessly via Bluetooth to your smartphone or a small dedicated receiver' },
                  { step: '4', desc: 'View real-time glucose readings, trend arrows (rising/falling), and customisable alerts' },
                  { step: '5', desc: 'Replace the sensor every 7–15 days depending on the system' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {item.step}
                    </div>
                    <p className="text-gray-800 text-sm pt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> CGM availability, prescription requirements, and costs vary by country. Many systems are prescription-only; some are available over the counter. Coverage under national health schemes (NHS, Medicare, etc.) depends on your diagnosis and country. Prices below are approximate US retail costs — check with your local healthcare provider or pharmacist.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Leading CGM Systems (2026):</h3>
              {[
                {
                  name: 'Dexcom G7',
                  price: '~$140–$160/month (US retail)',
                  sensor: '10 days per sensor',
                  pros: 'Fastest warm-up time (30 min), highly accurate, compact all-in-one sensor/transmitter, real-time alerts, excellent app and data sharing',
                  cons: 'Higher cost; prescription required in most countries',
                  best: 'Leading choice for insulin users & detailed data',
                  global: 'Available in US, UK, EU, Australia, Canada and others'
                },
                {
                  name: 'Abbott FreeStyle Libre 3',
                  price: '~$75–$95/month (US retail)',
                  sensor: '14 days per sensor',
                  pros: 'Most affordable CGM option; smallest sensor available; real-time automatic readings; no scanning required; good app',
                  cons: 'Alert customisation less granular than Dexcom; interstitial lag applies as with all CGMs',
                  best: 'Best value CGM; widely available internationally',
                  global: 'One of the most widely available CGMs globally'
                },
                {
                  name: 'Medtronic Guardian 4',
                  price: '~$120–$150/month (US retail)',
                  sensor: '7 days per sensor',
                  pros: 'Predictive alerts (warns before highs/lows occur); integrates with Medtronic insulin pumps for automated delivery',
                  cons: 'Best suited to Medtronic pump users; less compelling as a standalone CGM',
                  best: 'Best for Medtronic insulin pump users',
                  global: 'Available in select markets; check local availability'
                },
              ].map((device, i) => (
                <div key={i} className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{device.name}</h4>
                      <p className="text-sm text-blue-600 font-semibold">{device.best}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-sm font-bold text-gray-900">{device.price}</p>
                      <p className="text-xs text-gray-500">Sensor life: {device.sensor}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <p className="text-gray-700"><span className="font-semibold text-green-700">Pros: </span>{device.pros}</p>
                    <p className="text-gray-700"><span className="font-semibold text-orange-700">Cons: </span>{device.cons}</p>
                    <p className="text-gray-500 text-xs mt-1">🌍 {device.global}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Comparison */}
          <section id="comparison" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CGM vs BGM: Which Should You Choose?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm">Feature</th>
                    <th className="px-5 py-4 text-left text-sm">Blood Glucose Meter (BGM)</th>
                    <th className="px-5 py-4 text-left text-sm">Continuous Glucose Monitor (CGM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Upfront Cost', bgm: 'Low — often $10–$50 for the device', cgm: 'Varies — device often subsidised with sensor subscription' },
                    { feature: 'Ongoing Cost', bgm: 'Test strips (~$20–60/month in US; varies widely internationally)', cgm: 'Sensors (~$75–160/month in US; often subsidised by health schemes)' },
                    { feature: 'Testing Method', bgm: 'Finger-prick blood sample each test', cgm: 'One sensor insertion every 7–15 days; no routine pricks' },
                    { feature: 'Data Frequency', bgm: 'Only when you manually test', cgm: 'Automatic reading every 1–15 minutes, 24/7' },
                    { feature: 'Trend Information', bgm: 'Shows a single point in time only', cgm: 'Shows direction and speed of change (rising/falling/stable)' },
                    { feature: 'Alerts', bgm: 'None', cgm: 'Customisable alerts for high and low readings; some predict lows before they occur' },
                    { feature: 'Coverage / Subsidy', bgm: 'Widely covered or subsidised in most countries', cgm: 'Coverage varies; often covered for insulin users — check your national health scheme or insurer' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-5 py-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-700 text-sm">{row.bgm}</td>
                      <td className="px-5 py-4 text-gray-700 text-sm">{row.cgm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50 border-l-4 border-purple-600 rounded-r-xl p-6">
                <h3 className="font-bold text-base text-gray-900 mb-3">A BGM may be sufficient if you:</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>• Do not use insulin</li>
                  <li>• Have relatively stable, predictable blood sugar</li>
                  <li>• Only need to check 1–2 times per day</li>
                  <li>• Prefer a lower-cost, simpler option</li>
                  <li>• Don't want to wear a continuous sensor</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
                <h3 className="font-bold text-base text-gray-900 mb-3">A CGM may be beneficial if you:</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>• Use insulin (especially multiple daily injections)</li>
                  <li>• Experience unpredictable blood sugar swings</li>
                  <li>• Have frequent or unrecognised hypoglycaemia</li>
                  <li>• Want detailed trend data and pattern insights</li>
                  <li>• Find finger pricks difficult or distressing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Top Picks */}
          <section className="mb-16" id="top-devices">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Top Device Picks for 2026</h2>
            <p className="text-sm text-gray-500 mb-2">Based on accuracy, usability, international availability, and value. Always verify current availability and pricing in your country.</p>
            <p className="text-xs text-gray-400 italic mb-6">
              * Some product links on this page are affiliate links. We may earn a commission at no extra cost to you.{' '}
              <a href="#affiliate-disclosure" className="underline hover:text-gray-600">See full disclosure below.</a>
            </p>
            
            <div className="space-y-4">
              {[
                { emoji: '🏆', award: 'Best Overall CGM', device: 'Dexcom G7', reason: 'Leading accuracy, rapid warm-up, compact design, excellent alerts and app — the benchmark CGM for insulin users' },
                { emoji: '💰', award: 'Best Value CGM', device: 'Abbott FreeStyle Libre 3', reason: 'Excellent accuracy at a lower price point, widely available globally, smallest sensor, automatic readings' },
                { emoji: '🎯', award: 'Best Traditional Meter', device: 'Contour Next One', reason: 'Highly accurate, second-chance sampling saves strips, good app, affordable strips' },
                { emoji: '⭐', award: 'Best for Ease of Use', device: 'Accu-Chek Instant / Guide', reason: 'Simple operation, clear display, widely available internationally, good pharmacist support' },
                { emoji: '📱', award: 'Best App Experience', device: 'OneTouch Verio Reflect', reason: 'Colour-coded guidance, personalised pattern insights, motivating companion app' },
              ].map((pick, i) => (
                <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl" aria-hidden="true">{pick.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-purple-700 mb-1">{pick.award}</h3>
                      <p className="text-lg font-bold text-gray-900 mb-1">{pick.device}</p>
                      <p className="text-gray-700 text-sm">{pick.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Apps */}
          <section id="apps" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Smartphone Apps & Data Integration</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Modern glucose monitoring goes beyond numbers — the best apps surface patterns, flag problem areas, and help you understand what drives your readings. Most are free or low-cost, and many work with both BGMs and CGMs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'mySugr',
                  type: 'Universal Tracking App',
                  features: ['Works with most meters via manual entry or Bluetooth', 'Carbohydrate and meal logging', 'Medication and insulin logs', 'Trend analysis and estimated HbA1c', 'Available in many countries'],
                  price: 'Free (Pro subscription available)'
                },
                {
                  name: 'Glucose Buddy+',
                  type: 'All-in-One Tracker',
                  features: ['Food and carb database', 'Insulin and medication tracking', 'Apple Health & Google Fit sync', 'Shareable reports for your doctor'],
                  price: 'Free (Pro subscription available)'
                },
                {
                  name: 'Dexcom Clarity',
                  type: 'CGM Analytics (Dexcom users)',
                  features: ['Advanced time-in-range reporting', 'Pattern and episode detection', 'Share glucose data with your care team', 'Ambulatory Glucose Profile (AGP) reports'],
                  price: 'Free with Dexcom CGM'
                },
                {
                  name: 'LibreView / LibreLinkUp',
                  type: 'FreeStyle Libre Companion',
                  features: ['Real-time glucose trends and history', 'Share live readings with caregivers', 'AGP reports for clinic visits', 'Cloud storage and data export'],
                  price: 'Free with FreeStyle Libre'
                },
              ].map((app, i) => (
                <div key={i} className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <Smartphone className="w-8 h-8 text-blue-600 mb-3" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{app.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{app.type}</p>
                  <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
                    {app.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-purple-600">{app.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Buying Guide */}
          <section id="buying-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying Guide: How to Choose the Right Device</h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Questions to Ask Yourself:</h3>
              <div className="space-y-4">
                {[
                  {
                    q: '1. Do I use insulin?',
                    a: 'If yes, a CGM can be particularly valuable for seeing trends and preventing lows — and is often covered or subsidised by health schemes for insulin users. If no, a BGM is usually a practical, affordable starting point.'
                  },
                  {
                    q: '2. What is my budget?',
                    a: 'BGMs have a low upfront cost and modest ongoing strip expenses. CGMs have higher ongoing costs but may be partially or fully covered depending on your country and diagnosis. Always check your national health programme or insurer before purchasing.'
                  },
                  {
                    q: '3. How comfortable am I with technology?',
                    a: 'CGMs connect to smartphone apps and involve a small wearable sensor — straightforward for most, but worth considering. BGMs are simpler to operate, though many now offer optional Bluetooth app connectivity.'
                  },
                  {
                    q: '4. How often do I need to check?',
                    a: 'If you need multiple readings throughout the day (common with insulin use), a CGM saves significant time and discomfort. If once or twice daily is sufficient, a BGM works well.'
                  },
                  {
                    q: '5. Do I experience hypoglycaemia unawareness?',
                    a: 'If you don\'t reliably feel the symptoms of low blood sugar, a CGM with configurable low alerts can provide an important safety net — discuss this with your doctor.'
                  },
                  {
                    q: '6. Is the device available in my country?',
                    a: 'Not all devices are registered or available in every country. Check local pharmacy availability or your healthcare provider\'s recommendation before deciding.'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-5 border border-purple-200">
                    <p className="font-bold text-gray-900 mb-2 text-sm">{item.q}</p>
                    <p className="text-gray-700 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6 mt-8">
              <h3 className="font-semibold text-base text-gray-900 mb-3">Practical Tips:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <span className="font-semibold">Check your health scheme or insurer first:</span> Many CGMs are covered or subsidised for eligible patients — ask your doctor about a referral or prescription</li>
                <li>• <span className="font-semibold">Factor in strip or sensor costs:</span> For BGMs, the ongoing cost of strips matters more than the meter price. For CGMs, compare total monthly sensor costs</li>
                <li>• <span className="font-semibold">Try before you commit:</span> Some manufacturers offer trial programmes or starter kits — worth asking about</li>
                <li>• <span className="font-semibold">Speak to your pharmacist:</span> Pharmacists can advise on locally available options, pricing, and compatibility with your existing devices</li>
                <li>• <span className="font-semibold">Ask your care team:</span> Your doctor or diabetes nurse is the best person to recommend what fits your individual clinical needs</li>
              </ul>
            </div>
          </section>

          {/* ── MAIN CTA - NEXT STEP ── */}
          <section className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 text-white text-center py-16 px-4 mb-8">
            <Zap className="w-12 h-12 text-purple-200 mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Ready for Step 4?</h2>
            <p className="text-purple-100 mb-8 text-lg max-w-xl mx-auto">
              You've built your diet and exercise habits and now you're tracking your progress. Next, explore the evidence on natural lifestyle and supplement support.
            </p>
            <Link 
              to="/natural-blood-sugar" 
              className="inline-flex items-center justify-center gap-2 bg-purple-200 text-purple-900 font-bold px-10 py-4 rounded-xl hover:bg-white transition shadow-lg text-lg"
            >
              Continue to Step 4: Natural Support
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </section>

        </div>

        {/* ── AFFILIATE DISCLOSURE ── */}
        <section id="affiliate-disclosure" className="bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl py-6">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-gray-700 mb-1">Affiliate Disclosure</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Transparency notice:</strong> This page contains affiliate links to glucose monitoring
                  products and devices. ThriveHealth360 may earn a commission if you purchase through these links,
                  at no additional cost to you. This financial relationship may influence which products we feature
                  and how they are presented. We apply editorial and quality standards to all recommendations;
                  however, you should conduct your own research and consult a qualified healthcare professional
                  before purchasing any device. Device suitability, insurance coverage, and availability vary
                  by country. This disclosure is provided in accordance with the FTC's guidelines on endorsements
                  and testimonials (16 CFR §255).{' '}
                  <Link to="/affiliate-disclosure" className="underline text-purple-700 hover:text-purple-600 font-semibold">
                    Full Disclosure Policy →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}

// ── Small helper used in ToC only ──
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}