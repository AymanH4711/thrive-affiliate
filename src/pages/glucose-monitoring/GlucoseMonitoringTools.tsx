// src/pages/glucose-monitoring-tools.tsx
import { Link } from 'react-router-dom';
import { Smartphone, Activity, BarChart3, Zap, Clock, TrendingUp, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function GlucoseMonitoringTools() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left - Text */}
            <div className="order-2 md:order-1">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Complete Device Guide 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Glucose Monitoring Tools & Technology
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Choose the Right Device for Data-Driven Blood Sugar Management
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From traditional meters to cutting-edge CGMs, discover the best glucose monitoring technology for your needs—with honest reviews, comparisons, and buying guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#compare-devices" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                  Compare Devices
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to="/categories/glucose-monitoring" className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition">
                  View All Reviews
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
                <img 
                  src="/images/glucose-monitoring-hero.webp" 
                  alt="Modern glucose monitoring devices and technology"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Why Monitoring Matters', link: '#why-monitor' },
              { title: 'Types of Devices', link: '#device-types' },
              { title: 'Traditional Blood Glucose Meters', link: '#bgm' },
              { title: 'Continuous Glucose Monitors (CGM)', link: '#cgm' },
              { title: 'CGM vs BGM: Which is Better?', link: '#comparison' },
              { title: 'Top Devices of 2025', link: '#top-devices' },
              { title: 'Smartphone Apps & Integration', link: '#apps' },
              { title: 'Buying Guide', link: '#buying-guide' },
            ].map((item, i) => (
              <a key={i} href={item.link} className="text-emerald-600 hover:text-emerald-700 hover:underline">
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Section 1: Why Monitor */}
          <section id="why-monitor" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Glucose Monitoring Matters</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              You can't manage what you don't measure. Glucose monitoring gives you real-time data to make informed decisions about food, exercise, and medications.
            </p>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 my-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Regular Monitoring:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Catch high/low blood sugar early',
                  'See how food affects your levels',
                  'Track medication effectiveness',
                  'Prevent dangerous complications',
                  'Gain confidence and control',
                  'Share data with your doctor',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
              <p className="text-lg font-semibold text-gray-900">
                Studies show that people who monitor regularly have better A1C levels and fewer complications than those who don't.
              </p>
            </div>
          </section>

          {/* Section 2: Device Types */}
          <section id="device-types" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Glucose Monitoring Devices</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              There are two main categories of glucose monitors, each with distinct advantages:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* BGM Card */}
              <div className="bg-white border-2 border-emerald-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Activity className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Blood Glucose Meters (BGM)</h3>
                    <p className="text-gray-700 mb-3 text-sm">Traditional finger-prick devices that give instant readings</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700">✓ Affordable ($10-$50)</p>
                      <p className="text-gray-700">✓ Instant results</p>
                      <p className="text-gray-700">✓ Small & portable</p>
                      <p className="text-gray-700">✗ Requires finger pricks</p>
                      <p className="text-gray-700">✗ Only shows single moments</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CGM Card */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Smartphone className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Glucose Monitors (CGM)</h3>
                    <p className="text-gray-700 mb-3 text-sm">Wearable sensors that track glucose 24/7</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700">✓ No finger pricks</p>
                      <p className="text-gray-700">✓ 24/7 monitoring</p>
                      <p className="text-gray-700">✓ Trend analysis</p>
                      <p className="text-gray-700">✗ More expensive ($75-$150/month)</p>
                      <p className="text-gray-700">✗ Requires sensor changes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Traditional BGM */}
          <section id="bgm" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Traditional Blood Glucose Meters</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              BGMs are the standard for most people with diabetes. Here are the key features to look for:
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Look For in a BGM:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { feature: 'Accuracy', desc: 'Look for FDA-approved meters with <15% error margin' },
                  { feature: 'Sample Size', desc: 'Smaller blood drops are easier (0.3-0.5 microliters)' },
                  { feature: 'Speed', desc: '5 seconds or less for results' },
                  { feature: 'Memory', desc: 'Stores 200-500+ readings with date/time' },
                  { feature: 'Display', desc: 'Large, backlit screen for easy reading' },
                  { feature: 'Strip Cost', desc: 'Most important ongoing expense—check before buying' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1">{item.feature}</h4>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Top BGM Devices:</h3>
              
              {[
                {
                  name: 'OneTouch Verio Reflect',
                  price: '$20-$30',
                  strips: '~$1.00/strip',
                  pros: 'Color-coded results, Bluetooth sync, excellent app',
                  best: 'Best for app users'
                },
                {
                  name: 'Contour Next One',
                  price: '$15-$25',
                  strips: '~$0.70/strip',
                  pros: 'Second-chance sampling, very accurate, great app',
                  best: 'Best overall value'
                },
                {
                  name: 'Accu-Chek Guide',
                  price: '$25-$35',
                  strips: '~$0.90/strip',
                  pros: 'Spill-resistant vial, easy strip insertion',
                  best: 'Best for dexterity issues'
                },
              ].map((device, i) => (
                <div key={i} className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{device.name}</h4>
                      <p className="text-sm text-emerald-600 font-semibold">{device.best}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{device.price}</p>
                      <p className="text-sm text-gray-600">Strips: {device.strips}</p>
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
              CGMs represent the future of glucose monitoring. A tiny sensor under your skin measures glucose every 1-15 minutes, giving you a complete picture of your blood sugar patterns.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How CGMs Work:</h3>
              <div className="space-y-4">
                {[
                  { step: '1', desc: 'Apply a small sensor to your arm or abdomen' },
                  { step: '2', desc: 'Sensor measures glucose in interstitial fluid every few minutes' },
                  { step: '3', desc: 'Data transmits wirelessly to your phone or receiver' },
                  { step: '4', desc: 'View real-time glucose, trends, and alerts' },
                  { step: '5', desc: 'Replace sensor every 7-14 days (depending on model)' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-gray-800 pt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Top CGM Systems 2025:</h3>
              
              {[
                {
                  name: 'Dexcom G7',
                  price: '$140-$160/month',
                  sensor: '10 days',
                  pros: 'Most accurate, real-time alerts, smallest sensor, excellent app',
                  cons: 'Requires prescription, higher cost',
                  best: 'Best for insulin users'
                },
                {
                  name: 'FreeStyle Libre 3',
                  price: '$75-$95/month',
                  sensor: '14 days',
                  pros: 'Affordable, real-time readings, tiny sensor, no warm-up time',
                  cons: 'Less customizable alerts than Dexcom',
                  best: 'Best value for CGM'
                },
                {
                  name: 'Guardian Connect',
                  price: '$120-$150/month',
                  sensor: '7 days',
                  pros: 'Predictive alerts, integrates with Medtronic pumps',
                  cons: 'Requires more calibration, shorter sensor life',
                  best: 'Best for Medtronic pump users'
                },
              ].map((device, i) => (
                <div key={i} className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{device.name}</h4>
                      <p className="text-sm text-blue-600 font-semibold">{device.best}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{device.price}</p>
                      <p className="text-sm text-gray-600">Sensor: {device.sensor}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700"><span className="font-semibold text-green-700">Pros:</span> {device.pros}</p>
                    <p className="text-gray-700"><span className="font-semibold text-orange-700">Cons:</span> {device.cons}</p>
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
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-left">Blood Glucose Meter</th>
                    <th className="px-6 py-4 text-left">CGM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Cost', bgm: '$10-50 device, $20-60/month strips', cgm: '$0-100 device, $75-160/month sensors' },
                    { feature: 'Pain Level', bgm: 'Finger pricks multiple times daily', cgm: 'One insertion every 7-14 days' },
                    { feature: 'Data Frequency', bgm: 'Only when you test', cgm: 'Every 1-15 minutes, 24/7' },
                    { feature: 'Trends', bgm: 'No real-time trends', cgm: 'See if rising/falling, predict highs/lows' },
                    { feature: 'Alerts', bgm: 'None', cgm: 'Customizable high/low alerts' },
                    { feature: 'Insurance', bgm: 'Usually covered', cgm: 'Often covered for Type 1, sometimes Type 2' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{row.bgm}</td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{row.cgm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Choose BGM if you:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Don't take insulin</li>
                  <li>• Have stable, predictable blood sugar</li>
                  <li>• Only need to check 1-2 times daily</li>
                  <li>• Prefer lower cost</li>
                  <li>• Don't want to wear a device</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Choose CGM if you:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Take insulin (especially multiple daily injections)</li>
                  <li>• Have unpredictable blood sugar</li>
                  <li>• Experience frequent lows (hypoglycemia)</li>
                  <li>• Want detailed data and trends</li>
                  <li>• Hate finger pricks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Top Devices Summary */}
          <section className="mb-16" id="compare-devices">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Top Picks for 2025</h2>
            
            <div className="space-y-6">
              {[
                { award: '🏆 Best Overall CGM', device: 'Dexcom G7', reason: 'Most accurate, best app, smallest sensor' },
                { award: '💰 Best Value CGM', device: 'FreeStyle Libre 3', reason: 'Great accuracy at half the cost of Dexcom' },
                { award: '🎯 Best Traditional Meter', device: 'Contour Next One', reason: 'Accurate, affordable strips, excellent app integration' },
                { award: '👴 Best for Seniors', device: 'Prodigy Voice', reason: 'Talking meter with large display and simple interface' },
                { award: '📱 Best App Experience', device: 'OneTouch Verio Reflect', reason: 'Color-coded guidance and personalized insights' },
              ].map((pick, i) => (
                <div key={i} className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{pick.award.split(' ')[0]}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-emerald-700 mb-1">{pick.award}</h3>
                      <p className="text-xl font-bold text-gray-900 mb-2">{pick.device}</p>
                      <p className="text-gray-700">{pick.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600 text-white rounded-xl p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">See Detailed Device Reviews</h3>
              <p className="text-lg mb-6 text-emerald-50">
                Read in-depth reviews, compare specs, and find the best device for your needs
              </p>
              <Link to="/categories/glucose-monitoring" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition">
                View All Reviews
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Section 7: Apps */}
          <section id="apps" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Smartphone Apps & Data Integration</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Modern glucose monitoring is about more than just numbers—it's about insights. The best apps help you understand patterns and make better decisions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'MySugr',
                  type: 'Universal Tracking App',
                  features: ['Works with any meter', 'Carb tracking', 'Medication logs', 'Trend analysis'],
                  price: 'Free (Premium $3/month)'
                },
                {
                  name: 'Glucose Buddy',
                  type: 'All-in-One Tracker',
                  features: ['Food database', 'Insulin calculator', 'Apple Health sync', 'Doctor reports'],
                  price: 'Free (Pro $5/month)'
                },
                {
                  name: 'Dexcom Clarity',
                  type: 'CGM Analytics',
                  features: ['Advanced reports', 'Time in range', 'Pattern detection', 'Share with doctor'],
                  price: 'Free with Dexcom'
                },
                {
                  name: 'LibreView',
                  type: 'FreeStyle Libre App',
                  features: ['Glucose trends', 'Pattern insights', 'AGP reports', 'Cloud storage'],
                  price: 'Free with Libre'
                },
              ].map((app, i) => (
                <div key={i} className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <Smartphone className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{app.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{app.type}</p>
                  <ul className="space-y-1 text-sm text-gray-700 mb-4">
                    {app.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-emerald-600">{app.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Buying Guide */}
          <section id="buying-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying Guide: How to Choose</h2>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ask Yourself These Questions:</h3>
              <div className="space-y-6">
                {[
                  {
                    q: '1. Do I take insulin?',
                    a: 'If yes, a CGM may be life-changing (and often covered by insurance). If no, a BGM is usually sufficient.'
                  },
                  {
                    q: '2. What\'s my budget?',
                    a: 'BGMs cost $20-60/month total. CGMs cost $75-160/month. Check insurance coverage first.'
                  },
                  {
                    q: '3. How tech-savvy am I?',
                    a: 'CGMs require smartphone apps. BGMs are simpler but some have great app integration if desired.'
                  },
                  {
                    q: '4. How often do I need to check?',
                    a: 'Multiple times daily → Consider CGM. Once or twice daily → BGM is fine.'
                  },
                  {
                    q: '5. Do I have hypoglycemia unawareness?',
                    a: 'CGM with alerts can be lifesaving if you don\'t feel low blood sugar symptoms.'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-5 border border-emerald-200">
                    <p className="font-bold text-gray-900 mb-2">{item.q}</p>
                    <p className="text-gray-700 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6 mt-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">💡 Pro Tips:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <span className="font-semibold">Check insurance first:</span> Many CGMs are covered—ask your doctor for a prescription</li>
                <li>• <span className="font-semibold">Consider strip costs:</span> For BGMs, ongoing strip expenses matter more than meter price</li>
                <li>• <span className="font-semibold">Try before you buy:</span> Many companies offer free trials or starter kits</li>
                <li>• <span className="font-semibold">Ask your pharmacist:</span> They can help you compare options and check compatibility</li>
              </ul>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Data is Power</h2>
              <p className="text-xl mb-8 leading-relaxed">
                The right monitoring device gives you the information you need to take control of your blood sugar and your health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/categories/glucose-monitoring" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition">
                  Browse All Devices
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/prediabetes-support" className="inline-flex items-center gap-2 bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-800 transition border-2 border-white">
                  Blood Sugar Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/seniors-glucose-monitoring" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                <Activity className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Seniors Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Monitoring tips for older adults</p>
                <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link to="/natural-blood-sugar" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                <TrendingUp className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Natural Support</h3>
                <p className="text-gray-600 text-sm mb-4">Herbs and foods for blood sugar</p>
                <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link to="/insulin-resistance-management" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                <BarChart3 className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Insulin Resistance</h3>
                <p className="text-gray-600 text-sm mb-4">Improve insulin sensitivity</p>
                <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}