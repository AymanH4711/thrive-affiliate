// src/pages/seniors/SeniorsGlucoseMonitoring.tsx
import { Link } from 'react-router-dom';
import { Heart, Activity, Shield, Smartphone, Users, AlertCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function SeniorsGlucoseMonitoring() {
  const actionItems = [
    { day: 'Day 1', task: 'Get a glucose meter (ask your doctor for a prescription)' },
    { day: 'Day 2', task: 'Learn how to use it (ask pharmacist for demonstration)' },
    { day: 'Day 3', task: 'Check fasting blood sugar in the morning' },
    { day: 'Day 4', task: 'Check 2 hours after largest meal' },
    { day: 'Day 5', task: 'Start a simple log (notebook or app)' },
    { day: 'Day 6', task: 'Add a 10-minute post-meal walk' },
    { day: 'Day 7', task: 'Review your numbers and identify patterns' },
  ];

  return (
    <>
      <SEO
        title="Glucose Monitoring for Seniors | Easy Guide + Tips"
        description="Senior-friendly glucose monitoring guide. Target ranges for 60+, device recommendations, 7-day action plan, caregiver tips, and medication safety considerations."
        keywords="diabetes in seniors, glucose monitoring seniors, diabetes management older adults, senior health"
        image="/images/seniors-glucose-og.png"
        url="/seniors-glucose-monitoring"
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left - Text */}
              <div className="order-2 md:order-1">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Complete Senior Health Guide 2025
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Blood Sugar Monitoring for Seniors
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Stay Healthy, Independent, and Confident at Any Age
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Learn how to effectively monitor and manage blood sugar as you age—with practical advice, technology guides, and strategies designed specifically for older adults.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#getting-started" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link to="/supplements/blood-sugar-support" className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition">
                    Browse Resources
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
                  <img 
                    src="/images/seniors-glucose-hero.webp" 
                    alt="Senior adult managing blood sugar with confidence"
                    className="w-full h-[350px] md:h-[450px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=450&fit=crop';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 mt-4 mb-4">
          <div className="bg-yellow-50 rounded-lg p-4 text-sm text-yellow-800 flex items-start gap-2">
            <span>⚠️</span>
            <p>Medical Disclaimer: These statements have not been evaluated by the FDA. This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with qualified healthcare providers before starting supplements or making health changes.</p>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Why Monitoring Matters More as We Age', link: '#why-matters' },
                { title: 'Understanding Your Numbers', link: '#understanding-numbers' },
                { title: 'Best Glucose Monitors for Seniors', link: '#best-monitors' },
                { title: 'How to Use a Glucose Meter', link: '#how-to-use' },
                { title: 'Managing Medications Safely', link: '#medications' },
                { title: 'Nutrition for Seniors', link: '#nutrition' },
                { title: 'Exercise & Movement', link: '#exercise' },
                { title: 'Working with Your Healthcare Team', link: '#healthcare-team' },
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
            
            {/* Section 1: Why It Matters */}
            <section id="why-matters" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Blood Sugar Monitoring Matters More as We Age</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                After age 60, the risk of type 2 diabetes increases significantly. Regular monitoring helps catch problems early and prevents serious complications.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 my-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Age-Related Blood Sugar Challenges:</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Reduced Insulin Sensitivity', desc: 'Cells become less responsive to insulin with age' },
                    { title: 'Muscle Loss', desc: 'Less muscle means reduced glucose storage capacity' },
                    { title: 'Medication Interactions', desc: 'Multiple medications can affect blood sugar' },
                    { title: 'Slower Symptom Recognition', desc: 'High blood sugar symptoms may be mistaken for aging' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl p-6">
                <p className="text-lg font-semibold text-gray-900">
                  Good News: With proper monitoring and management, seniors can maintain excellent blood sugar control and enjoy active, independent lives.
                </p>
              </div>
            </section>

            {/* Section 2: Understanding Numbers */}
            <section id="understanding-numbers" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Numbers</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Blood sugar targets may be slightly different for older adults to balance control with safety and quality of life.
              </p>
              
              <div className="bg-white border-2 border-emerald-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Target Ranges for Seniors:</h3>
                <div className="space-y-4">
                  {[
                    { test: 'Fasting Glucose', healthy: '80–130 mg/dL', concern: 'Above 130 mg/dL' },
                    { test: 'After Meals (2 hours)', healthy: 'Below 180 mg/dL', concern: 'Above 180 mg/dL' },
                    { test: 'A1C (3-month average)', healthy: '7.0–7.5%', concern: 'Above 8.0%' },
                    { test: 'Bedtime', healthy: '100–140 mg/dL', concern: 'Below 80 or above 180 mg/dL' },
                  ].map((range, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-lg p-4">
                      <span className="font-semibold text-gray-900 mb-2 md:mb-0">{range.test}</span>
                      <div className="flex flex-col md:flex-row gap-2">
                        <span className="text-green-600 font-medium text-sm">✓ Target: {range.healthy}</span>
                        <span className="text-orange-600 font-medium text-sm">⚠ Alert: {range.concern}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
                <p className="font-semibold text-gray-900 mb-2">⚠️ Important Note:</p>
                <p className="text-gray-700">
                  For seniors with multiple health conditions, slightly higher targets (A1C 7.5–8.0%) may be safer to avoid dangerous low blood sugar. Always follow your doctor's personalized recommendations.
                </p>
              </div>
            </section>

            {/* Section 3: Best Monitors */}
            <section id="best-monitors" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Glucose Monitors for Seniors</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Modern glucose monitors are easier to use than ever. Here are the best options for seniors:
              </p>
              
              <div className="space-y-6">
                {/* Option 1: Traditional Meter */}
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Heart className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Blood Glucose Meters</h3>
                      <p className="text-gray-700 mb-3">Simple, reliable, and affordable. Best for occasional checking.</p>
                      <div className="bg-emerald-50 rounded-lg p-4 mb-3">
                        <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Seniors not taking insulin</li>
                          <li>• Those who check 1–2 times daily</li>
                          <li>• Budget-conscious users</li>
                        </ul>
                      </div>
                      <p className="text-sm text-emerald-600 font-semibold">Examples: OneTouch Verio, Contour Next</p>
                    </div>
                  </div>
                </div>

                {/* Option 2: Large Display Meter */}
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Activity className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Large Display Meters</h3>
                      <p className="text-gray-700 mb-3">Extra-large screens and talking features for vision challenges.</p>
                      <div className="bg-blue-50 rounded-lg p-4 mb-3">
                        <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Seniors with vision impairment</li>
                          <li>• Those who want audio readouts</li>
                          <li>• Easy-to-read displays</li>
                        </ul>
                      </div>
                      <p className="text-sm text-blue-600 font-semibold">Examples: Prodigy Voice, OneTouch Ultra 2</p>
                    </div>
                  </div>
                </div>

                {/* Option 3: CGM */}
                <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Smartphone className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Glucose Monitors (CGM)</h3>
                      <p className="text-gray-700 mb-3">Automatic monitoring 24/7 with no finger pricks.</p>
                      <div className="bg-purple-50 rounded-lg p-4 mb-3">
                        <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Seniors taking insulin</li>
                          <li>• Those with unpredictable blood sugar</li>
                          <li>• Active seniors who want convenience</li>
                        </ul>
                      </div>
                      <p className="text-sm text-purple-600 font-semibold">Examples: FreeStyle Libre, Dexcom G7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 text-white rounded-xl p-8 mt-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Compare Monitoring Devices</h3>
                <p className="text-lg mb-6 text-emerald-50">
                  See detailed reviews and comparisons of senior-friendly glucose monitors
                </p>
                <Link to="/glucose-monitoring-tools" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition">
                  View Device Reviews
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </section>

            {/* Section 4: How to Use */}
            <section id="how-to-use" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use a Glucose Meter: Step-by-Step</h2>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Wash Your Hands', desc: 'Use warm water and soap. Dry completely.' },
                    { step: '2', title: 'Prepare the Meter', desc: 'Insert a test strip and turn on the device.' },
                    { step: '3', title: 'Prepare the Lancet', desc: 'Load a fresh lancet into the lancing device.' },
                    { step: '4', title: 'Prick Your Finger', desc: 'Use the side of your fingertip, not the center. Rotate fingers to avoid soreness.' },
                    { step: '5', title: 'Apply Blood Drop', desc: 'Touch the test strip to the blood drop (usually needs only a tiny amount).' },
                    { step: '6', title: 'Read Result', desc: 'Wait 5–10 seconds. Record the number in your log.' },
                    { step: '7', title: 'Dispose Safely', desc: 'Put used lancet in a sharps container. Discard test strip.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 mt-6">
                <p className="font-semibold text-gray-900 mb-2">💡 Pro Tips:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Test at the same times each day for consistency</li>
                  <li>• Keep supplies in one place so you don't forget</li>
                  <li>• Set phone reminders for testing times</li>
                  <li>• Ask your pharmacist to demonstrate if unsure</li>
                </ul>
              </div>
            </section>

            {/* Section 5: Medications */}
            <section id="medications" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Medications Safely</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many seniors take multiple medications. Here's how to stay safe and avoid dangerous interactions:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Safety Checklist</h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      'Keep an updated medication list',
                      'Use a pill organizer',
                      'Set alarms for medication times',
                      'Review meds with doctor annually',
                      'Know signs of low blood sugar',
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                  <AlertCircle className="w-10 h-10 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Watch for Low Blood Sugar (Hypoglycemia)</h3>
                  <p className="text-gray-700 mb-3">Common symptoms:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Shakiness, sweating</li>
                    <li>• Confusion, irritability</li>
                    <li>• Rapid heartbeat</li>
                    <li>• Dizziness or weakness</li>
                  </ul>
                  <div className="bg-red-100 border border-red-300 rounded-lg p-3 mt-4">
                    <p className="font-bold text-red-800 text-sm">Emergency Treatment:</p>
                    <p className="text-red-700 text-sm">15g fast-acting carbs (juice, glucose tablets), recheck in 15 minutes</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Nutrition */}
            <section id="nutrition" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition Guidelines for Seniors</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Eating well becomes even more important with age. Focus on nutrient-dense foods that support stable blood sugar.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Prioritize Protein',
                    foods: ['Eggs', 'Greek yogurt', 'Fish', 'Chicken', 'Beans'],
                    why: 'Preserves muscle, increases satiety'
                  },
                  {
                    title: 'Eat More Vegetables',
                    foods: ['Leafy greens', 'Broccoli', 'Carrots', 'Peppers', 'Squash'],
                    why: 'High fiber, low calories, rich nutrients'
                  },
                  {
                    title: 'Choose Good Fats',
                    foods: ['Olive oil', 'Avocados', 'Nuts', 'Fatty fish', 'Seeds'],
                    why: 'Support heart and brain health'
                  },
                ].map((category, i) => (
                  <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{category.title}</h3>
                    <ul className="space-y-1 text-sm text-gray-700 mb-3">
                      {category.foods.map((food, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                          {food}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-600 italic">{category.why}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Simple Plate Method:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥗</div>
                    <p className="font-semibold text-gray-900">½ Plate</p>
                    <p className="text-sm text-gray-600">Non-starchy vegetables</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🍗</div>
                    <p className="font-semibold text-gray-900">¼ Plate</p>
                    <p className="text-sm text-gray-600">Lean protein</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🍚</div>
                    <p className="font-semibold text-gray-900">¼ Plate</p>
                    <p className="text-sm text-gray-600">Whole grains/starch</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Exercise */}
            <section id="exercise" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safe Exercise & Movement for Seniors</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Physical activity helps lower blood sugar, maintain muscle, and improve balance. Start slow and build gradually.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    activity: 'Walking',
                    recommendation: '20–30 minutes daily or after meals',
                    benefits: 'Lowers blood sugar immediately, improves cardiovascular health',
                    safety: 'Use supportive shoes, walk with a partner if balance is a concern'
                  },
                  {
                    activity: 'Chair Exercises',
                    recommendation: '15–20 minutes, 3–4 times per week',
                    benefits: 'Builds strength without stress on joints',
                    safety: 'Use a sturdy chair, keep movements controlled'
                  },
                  {
                    activity: 'Water Aerobics',
                    recommendation: '30–45 minutes, 2–3 times per week',
                    benefits: 'Low-impact, supports joints, builds endurance',
                    safety: 'Many community centers offer senior classes'
                  },
                ].map((ex, i) => (
                  <div key={i} className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <Activity className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{ex.activity}</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-semibold text-gray-900">Frequency:</span> <span className="text-gray-700">{ex.recommendation}</span></p>
                          <p><span className="font-semibold text-gray-900">Benefits:</span> <span className="text-gray-700">{ex.benefits}</span></p>
                          <p><span className="font-semibold text-emerald-600">Safety Tip:</span> <span className="text-gray-700">{ex.safety}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6 mt-6">
                <p className="font-semibold text-gray-900 mb-2">⚠️ Exercise Safety:</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Check blood sugar before and after exercise</li>
                  <li>• Carry glucose tablets or juice in case of low blood sugar</li>
                  <li>• Stay hydrated</li>
                  <li>• Stop if you feel dizzy, short of breath, or chest pain</li>
                </ul>
              </div>
            </section>

            {/* Section 8: Healthcare Team */}
            <section id="healthcare-team" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Working with Your Healthcare Team</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Regular communication with your doctors is essential for optimal blood sugar management.
              </p>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Bring to Appointments:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Blood sugar log (last 2–4 weeks)',
                    'List of all medications and supplements',
                    'Questions or concerns written down',
                    'Recent symptoms or changes',
                    'Your glucose meter for accuracy check',
                    'Insurance and pharmacy information',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Recommended Check-ups:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <span className="font-semibold">Primary Care:</span> Every 3–6 months</li>
                  <li>• <span className="font-semibold">Eye Exam:</span> Annually</li>
                  <li>• <span className="font-semibold">Foot Exam:</span> At every visit</li>
                  <li>• <span className="font-semibold">A1C Test:</span> Every 3–6 months</li>
                  <li>• <span className="font-semibold">Kidney Function:</span> Annually</li>
                </ul>
              </div>
            </section>

            {/* Getting Started Section */}
            <section id="getting-started" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your First Week Action Plan</h2>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
                <div className="space-y-4">
                  {actionItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                      <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.day}</p>
                        <p className="text-gray-700">{item.task}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Senior-Friendly Supplement Support CTA */}
            <section className="py-16 bg-teal-50 border-t border-teal-200 rounded-xl mb-16">
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Senior-Friendly Supplement Support
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Combine easy monitoring with gentle, researched supplements designed for healthy aging and stable blood sugar. These products are specifically chosen to be safe, effective, and easy to take.
                </p>
                <Link 
                  to="/supplements/blood-sugar-support"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-teal-700 transition shadow-lg"
                >
                  Shop Senior-Friendly Supplements
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </section>

            {/* Final CTA */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">You're Never Too Old to Take Control</h2>
                <p className="text-xl mb-8 leading-relaxed">
                  With the right tools and knowledge, managing blood sugar can be simple and empowering at any age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/prediabetes-support" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition">
                    Prediabetes Guide
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/glucose-monitoring-tools" className="inline-flex items-center gap-2 bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-800 transition border-2 border-white">
                    View Monitoring Tools
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/glucose-monitoring-tools" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                  <Smartphone className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Monitoring Devices</h3>
                  <p className="text-gray-600 text-sm mb-4">Compare the best glucose meters and CGMs</p>
                  <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                    View Devices <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link to="/natural-blood-sugar" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                  <Heart className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Natural Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Herbs and foods for blood sugar</p>
                  <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link to="/weight-wellness" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                  <Users className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Metabolic Wellness</h3>
                  <p className="text-gray-600 text-sm mb-4">Weight and metabolism guide</p>
                  <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </section>

          </div>
          <div className="container mx-auto px-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800 flex items-start gap-2">
              <span>💰</span>
              <p>Affiliate Disclosure: Thrive Health may earn commissions from affiliate partnerships and supplement links. This does not affect product pricing. We only recommend products we believe in based on research and quality standards.</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}