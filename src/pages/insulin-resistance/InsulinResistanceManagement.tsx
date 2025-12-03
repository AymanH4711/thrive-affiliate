// src/pages/insulin-resistance-management.tsx
import { Link } from 'react-router-dom';
import { Heart, Activity, Apple, Dumbbell, Moon, Pill, BarChart3, Calendar, ArrowRight } from 'lucide-react';

export default function InsulinResistanceManagement() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left - Text */}
            <div className="order-2 md:order-1">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                2025 Complete Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Insulin Resistance Management
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Complete Guide to Improving Insulin Sensitivity Naturally
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Insulin resistance is one of the most common metabolic conditions today — yet most people don't realize it's reversible. This in-depth guide shows you the exact steps proven to restore healthy insulin sensitivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#getting-started" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                  Start Your Reset
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to="/categories/insulin-resistance" className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition">
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
                <img 
                  src="/images/insulin-resistance-hero.webp" 
                  alt="Insulin resistance management and healthy lifestyle"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=450&fit=crop';
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
              { title: 'What Is Insulin Resistance?', link: '#what-is' },
              { title: 'Signs & Symptoms', link: '#symptoms' },
              { title: 'Causes & Risk Factors', link: '#causes' },
              { title: 'How Diet Impacts Insulin', link: '#diet-impact' },
              { title: 'Best Foods to Eat', link: '#best-foods' },
              { title: 'Foods to Avoid', link: '#avoid-foods' },
              { title: 'Best Exercises', link: '#exercise' },
              { title: 'Sleep, Stress & Hormones', link: '#sleep-stress' },
              { title: 'Supplements That Help', link: '#supplements' },
              { title: 'Testing & Monitoring', link: '#testing' },
              { title: '30-Day Reset Plan', link: '#reset-plan' },
              { title: 'Final Takeaway', link: '#takeaway' },
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
          
          {/* Section 1 */}
          <section id="what-is" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Insulin Resistance?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Insulin resistance occurs when the body's cells stop responding properly to insulin — the hormone that moves glucose from the blood into cells for energy.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              When your cells don't respond well:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
              <li>Blood sugar rises</li>
              <li>Insulin rises</li>
              <li>The body stores more fat (especially belly fat)</li>
              <li>Energy levels drop</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Over time, this can progress to <strong>prediabetes</strong>, <strong>type 2 diabetes</strong>, <strong>fatty liver</strong>, and <strong>metabolic syndrome</strong>.
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 font-semibold">
                The good news? Insulin resistance is highly reversible with specific lifestyle and nutrition changes.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="symptoms" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs & Symptoms of Insulin Resistance</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Many people have insulin resistance for years without knowing. Common symptoms include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Belly fat that\'s hard to lose',
                'Carb cravings or sugar crashes',
                'Fatigue after meals',
                'Dark velvety skin patches',
                'Skin tags',
                'Brain fog',
                'High fasting insulin',
                'High triglycerides',
                'High fasting glucose (100–125 mg/dL)',
                'Elevated A1C (5.7%–6.4%)',
              ].map((symptom, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Heart className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{symptom}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              If you have several of these, improving insulin sensitivity can make a huge difference.
            </p>
          </section>

          {/* Section 3 */}
          <section id="causes" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Causes & Risk Factors</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Insulin resistance develops due to:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
              {[
                'High-carb, high-sugar diet',
                'Low physical activity',
                'Chronic stress',
                'Poor sleep',
                'Excess visceral fat',
                'Hormonal imbalances (cortisol, estrogen, testosterone)',
                'Genetics',
                'Aging',
                'Ultra-processed foods',
              ].map((cause, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-800 text-lg">{cause}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed font-semibold">
              Most people develop it over many years — and reverse it in months.
            </p>
          </section>

          {/* Section 4 */}
          <section id="diet-impact" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Diet Impacts Insulin Sensitivity</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Food is the fastest way to improve or worsen insulin resistance.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Carbohydrates — especially refined carbs — digest into glucose quickly, causing spikes. Protein, fat, and fiber slow digestion and prevent sharp rises.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">To Manage Insulin Resistance:</h3>
              <ul className="space-y-3">
                {[
                  'Reduce refined carbs',
                  'Increase protein',
                  'Increase healthy fats',
                  'Eat more fiber',
                  'Add movement after meals',
                ].map((tip, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Apple className="w-5 h-5 text-emerald-600" />
                    <span className="text-lg text-gray-800 font-medium">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="best-foods" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Foods for Reversing Insulin Resistance</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-4">High-Protein Foods</h3>
                <ul className="space-y-2">
                  {['Eggs', 'Salmon, tuna, sardines', 'Chicken, turkey', 'Greek yogurt', 'Lentils, chickpeas'].map((food, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{food}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-4">Healthy Fats</h3>
                <ul className="space-y-2">
                  {['Olive oil', 'Avocado', 'Nuts & seeds', 'Chia & flax'].map((food, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{food}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-4">Low-Glycemic Carbs</h3>
                <ul className="space-y-2">
                  {['Berries', 'Apples', 'Pears', 'Oats', 'Beans'].map((food, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{food}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-4">Vegetables</h3>
                <ul className="space-y-2">
                  {['Spinach', 'Broccoli', 'Zucchini', 'Kale', 'Cauliflower'].map((food, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{food}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="avoid-foods" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods to Limit or Avoid</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'Bread, pasta, white rice',
                  'Sugary drinks',
                  'Desserts & pastries',
                  'Deep-fried foods',
                  'Ultra-processed snacks',
                  'Fast food',
                  'High-sugar fruits (pineapple, mango, grapes)',
                ].map((food, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-800">
                    <span className="text-red-500">✗</span>
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="exercise" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Exercises for Insulin Sensitivity</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              You don't need intense workouts. The best insulin-sensitizing activities are simple:
            </p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-600">
                <div className="flex items-start gap-4">
                  <Activity className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Post-Meal Walking (10–20 minutes)</h3>
                    <p className="text-gray-700">Reduces glucose spikes by 20–30%.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-600">
                <div className="flex items-start gap-4">
                  <Dumbbell className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Strength Training (2–3× weekly)</h3>
                    <p className="text-gray-700">Builds muscle → improves glucose uptake.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-600">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Light Daily Movement</h3>
                    <p className="text-gray-700">Mini-movements every hour keep insulin low.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-600">
                <div className="flex items-start gap-4">
                  <Activity className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. HIIT (Optional)</h3>
                    <p className="text-gray-700">Short, intense bursts improve carbohydrate metabolism.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="sleep-stress" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sleep & Stress — Hidden Causes of Insulin Resistance</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Poor sleep and chronic stress raise glucose even without food.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <Moon className="w-8 h-8 text-indigo-600" />
                  <h3 className="text-xl font-bold text-gray-900">Better Sleep</h3>
                </div>
                <ul className="space-y-2">
                  {['7–8 hours nightly', 'No screens before bed', 'Cool, dark room', 'Magnesium before bed (optional)'].map((tip, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Reduce Stress</h3>
                </div>
                <ul className="space-y-2">
                  {['Deep breathing', 'Sunlight exposure', 'Light stretching', 'Prayer/meditation', 'Slow walking'].map((tip, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9 - Supplements */}
          <section id="supplements" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Supplements That Support Insulin Sensitivity</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Supplements don't replace lifestyle — but they support it. Most evidence-supported ingredients include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Berberine', benefit: 'Improves glucose metabolism' },
                { name: 'Cinnamon Extract', benefit: 'Antioxidant support' },
                { name: 'Chromium Picolinate', benefit: 'Carbohydrate processing' },
                { name: 'Alpha-Lipoic Acid (ALA)', benefit: 'Enhances glucose uptake' },
                { name: 'Magnesium Glycinate', benefit: 'Supports insulin signaling' },
                { name: 'Green Tea Extract', benefit: 'Metabolic support' },
                { name: 'Resveratrol', benefit: 'Anti-inflammatory benefits' },
              ].map((supp, i) => (
                <div key={i} className="bg-white border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-3">
                    <Pill className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{supp.name}</h3>
                      <p className="text-gray-600 text-sm">{supp.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600 text-white rounded-xl p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Find the Right Supplements?</h3>
              <p className="text-lg mb-6 text-emerald-50">
                View our evidence-based supplement reviews and comparisons
              </p>
              <Link to="/categories/insulin-resistance" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition">
                View Supplement Reviews
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Section 10 */}
          <section id="testing" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing & Monitoring</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To monitor insulin resistance, track:
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Fasting glucose',
                  'Post-meal glucose (1–2 hours)',
                  'A1C',
                  'Fasting insulin',
                  'HOMA-IR score',
                ].map((test, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-800 font-medium">{test}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Tools:</h3>
            <ul className="space-y-2">
              {['Home glucose meters', 'CGMs (Freestyle Libre, Dexcom)', 'Tracking apps'].map((tool, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  {tool}
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <Link to="/categories/glucose-monitoring" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
                View Glucose Monitoring Tools
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Section 11 - 30-Day Reset */}
          <section id="reset-plan" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The 30-Day Insulin Sensitivity Reset</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A simple one-month plan to jumpstart your insulin sensitivity improvement:
            </p>
            
            <div className="space-y-6">
              {[
                {
                  week: 'Week 1',
                  title: 'Diet Reset',
                  color: 'emerald',
                  tasks: ['Remove sugary drinks', 'Add protein to every meal', 'Walk after dinner'],
                },
                {
                  week: 'Week 2',
                  title: 'Movement',
                  color: 'teal',
                  tasks: ['Two strength sessions', '10-min post-lunch walks', 'High-fiber meals'],
                },
                {
                  week: 'Week 3',
                  title: 'Reduce Spikes',
                  color: 'cyan',
                  tasks: ['Replace refined carbs', 'Drink cinnamon/ginger tea', 'Track 3 meals'],
                },
                {
                  week: 'Week 4',
                  title: 'Stabilize',
                  color: 'blue',
                  tasks: ['Morning walk', 'Reduce processed snacks', 'Consider a supplement', 'Review numbers'],
                },
              ].map((phase, i) => (
                <div key={i} className={`bg-${phase.color}-50 border-l-4 border-${phase.color}-600 rounded-r-xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className={`w-8 h-8 text-${phase.color}-600`} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{phase.week} — {phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <div className={`w-1.5 h-1.5 bg-${phase.color}-600 rounded-full`}></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 12 - Final Takeaway */}
          <section id="takeaway" className="mb-16">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Final Takeaway</h2>
              <p className="text-xl mb-4 leading-relaxed">
                Insulin resistance is reversible — and often surprisingly quickly.
              </p>
              <p className="text-lg mb-6 text-emerald-50">
                By improving diet, movement, sleep, and supplements, most people see progress in 3–12 weeks.
              </p>
              <p className="text-2xl font-bold">
                Small steps, done consistently, lead to major improvements.
              </p>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-16" id="getting-started">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/prediabetes-support" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                <Heart className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Prediabetes Support</h3>
                <p className="text-gray-600 text-sm mb-4">Complete guide to reversing prediabetes naturally</p>
                <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link to="/categories/weight-wellness" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                <Activity className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Weight & Wellness</h3>
                <p className="text-gray-600 text-sm mb-4">Metabolic health and weight management strategies</p>
                <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link to="/categories/glucose-monitoring" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                <BarChart3 className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Glucose Monitoring</h3>
                <p className="text-gray-600 text-sm mb-4">Best tools and devices to track your progress</p>
                <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                  View Tools <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}