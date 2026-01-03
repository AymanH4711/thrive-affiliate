// src/pages/weight-wellness.tsx
import { Link } from 'react-router-dom';
import { Scale, Activity, Apple, Heart, Flame, TrendingDown, ArrowRight, CheckCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function WeightWellness() {
  return (
    <>
      <SEO
        title="Weight & Metabolic Wellness for Blood Sugar Control"
        description="Complete guide to sustainable weight management and metabolic health for better blood sugar control. 12-week reset plan, nutrition strategy, and exercise guide."
        keywords="weight loss and blood sugar, metabolic health, sustainable weight loss, metabolism, weight management"
        image="/images/weight-wellness-og.png"
        url="/weight-wellness"
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left - Text */}
              <div className="order-2 md:order-1">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Complete Wellness Guide 2025
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Weight & Metabolic Wellness
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Sustainable Weight Management for Better Blood Sugar Control
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Discover the connection between healthy weight, metabolism, and blood sugar—plus practical strategies for sustainable results without extreme dieting.
                </p>
              </div>

              {/* Right - Image */}
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
                  <img 
                    src="/images/weight-wellness-hero.webp" 
                    alt="Weight management and metabolic wellness"
                    className="w-full h-[350px] md:h-[450px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop ';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MEDICAL DISCLAIMER - COMPACT */}
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

        {/* Table of Contents */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'The Blood Sugar-Weight Connection', link: '#connection' },
                { title: 'Why Diets Fail', link: '#why-diets-fail' },
                { title: 'Metabolic Health Basics', link: '#metabolic-basics' },
                { title: 'Nutrition Strategy', link: '#nutrition' },
                { title: 'Movement & Exercise', link: '#exercise' },
                { title: 'Sleep & Hormones', link: '#sleep-hormones' },
                { title: 'Supplements That Help', link: '#supplements' },
                { title: '12-Week Action Plan', link: '#action-plan' },
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
            
            {/* Section 1: Connection */}
            <section id="connection" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Blood Sugar-Weight Connection</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Weight and blood sugar are deeply interconnected. Excess weight—especially belly fat—drives insulin resistance, which makes blood sugar control harder. High blood sugar, in turn, promotes fat storage.
              </p>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 my-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Vicious Cycle:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">1. Excess Weight → Insulin Resistance</p>
                      <p className="text-gray-700 text-sm">Fat cells release inflammatory compounds that interfere with insulin signaling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">2. Insulin Resistance → High Blood Sugar</p>
                      <p className="text-gray-700 text-sm">Cells can't take up glucose effectively, leading to elevated levels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">3. High Blood Sugar → More Fat Storage</p>
                      <p className="text-gray-700 text-sm">Excess glucose gets converted to fat, especially around the belly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
                <p className="text-lg font-semibold text-gray-900">
                  Good News: Breaking this cycle at ANY point creates positive momentum. Losing just 5-10% of body weight can significantly improve blood sugar control.
                </p>
              </div>
            </section>

            {/* Section 2: Why Diets Fail */}
            <section id="why-diets-fail" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Traditional Diets Fail</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                95% of people who lose weight on restrictive diets gain it back within 1-5 years. Here's why:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    problem: 'Extreme Calorie Restriction',
                    why: 'Slows metabolism, increases hunger hormones, impossible to sustain'
                  },
                  {
                    problem: 'Eliminating Food Groups',
                    why: 'Creates cravings, social isolation, nutritional deficiencies'
                  },
                  {
                    problem: 'All-or-Nothing Mindset',
                    why: 'One "slip" leads to giving up entirely'
                  },
                  {
                    problem: 'Ignoring Root Causes',
                    why: 'Stress, sleep, hormones drive weight gain—not addressed by diets'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">❌ {item.problem}</h3>
                    <p className="text-gray-700 text-sm">{item.why}</p>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-600 text-white rounded-xl p-8 mt-8 text-center">
                <h3 className="text-2xl font-bold mb-4">The Better Approach:</h3>
                <p className="text-lg text-emerald-50">
                  Focus on metabolic health, not just weight. When your metabolism works properly, healthy weight becomes a natural byproduct.
                </p>
              </div>
            </section>

            {/* Section 3: Metabolic Basics */}
            <section id="metabolic-basics" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Metabolic Health</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Metabolic health means your body efficiently converts food to energy and maintains stable blood sugar, blood pressure, cholesterol, and triglycerides.
              </p>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">5 Markers of Metabolic Health:</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Waist Circumference', ideal: '<40 inches (men), <35 inches (women)' },
                    { metric: 'Fasting Glucose', ideal: '<100 mg/dL' },
                    { metric: 'Blood Pressure', ideal: '<120/80 mmHg' },
                    { metric: 'Triglycerides', ideal: '<150 mg/dL' },
                    { metric: 'HDL Cholesterol', ideal: '>40 mg/dL (men), >50 mg/dL (women)' },
                  ].map((marker, i) => (
                    <div key={i} className="flex items-center justify-between bg-white rounded-lg p-4 border border-emerald-200">
                      <span className="font-semibold text-gray-900">{marker.metric}</span>
                      <span className="text-emerald-600 font-medium">{marker.ideal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: Nutrition Strategy */}
            <section id="nutrition" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition Strategy for Metabolic Health</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Forget counting calories. Focus on food quality, meal timing, and supporting your metabolism.
              </p>
              
              <div className="space-y-8">
                {/* Principle 1 */}
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Apple className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Prioritize Protein (30g per meal)</h3>
                      <p className="text-gray-700 mb-3">Protein preserves muscle during weight loss, increases satiety, and has the highest thermic effect (burns calories during digestion).</p>
                      <div className="bg-emerald-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Example Protein Sources:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 6 oz chicken breast = 54g</li>
                          <li>• 6 oz salmon = 40g</li>
                          <li>• 1 cup Greek yogurt = 20g</li>
                          <li>• 4 eggs = 24g</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principle 2 */}
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Flame className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Reduce Ultra-Processed Foods</h3>
                      <p className="text-gray-700 mb-3">These are designed to override satiety signals, leading to overeating and insulin spikes.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <p className="font-semibold text-red-700 mb-2">❌ Limit These:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Packaged snacks</li>
                            <li>• Sugary cereals</li>
                            <li>• Frozen meals</li>
                            <li>• Fast food</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="font-semibold text-green-700 mb-2">✓ Choose These:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Whole foods</li>
                            <li>• Fresh produce</li>
                            <li>• Lean proteins</li>
                            <li>• Healthy fats</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principle 3 */}
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Time-Restricted Eating (Optional)</h3>
                      <p className="text-gray-700 mb-3">Eating within an 8-12 hour window can improve insulin sensitivity and fat burning—without calorie counting.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Simple 12-Hour Example:</p>
                        <p className="text-sm text-gray-700">First meal at 8am → Last meal by 8pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Exercise */}
            <section id="exercise" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Movement & Exercise for Weight Loss</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exercise supports weight loss by building muscle, increasing metabolism, and improving body composition. While dietary changes drive fat loss, movement ensures you lose fat (not muscle) and look better when the weight comes off.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 mb-8">
                <p className="text-lg font-semibold text-gray-900">
                  💡 Key Difference: Exercise + Weight Loss
                </p>
                <p className="text-gray-700 mt-2">
                  Diet controls weight, but exercise controls where weight comes from. Without strength training, you lose muscle along with fat. With it, you preserve lean tissue and reshape your body.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                  <Activity className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Strength Training (3x/week)</h3>
                  <p className="text-gray-700 mb-4">Preserves muscle during weight loss, increases resting metabolic rate, and creates a toned appearance.</p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Why It Matters for Weight Loss:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 1 lb of muscle burns ~6 calories/day at rest</li>
                      <li>• Strength training increases calorie burn for hours</li>
                      <li>• Muscle gives shape and definition</li>
                      <li>• Prevents "skinny fat" appearance</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    <strong>For detailed exercise guide:</strong> See Step 2: Move Your Body
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <Scale className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Walking (7,000+ steps)</h3>
                  <p className="text-gray-700 mb-4">Low-impact movement that burns calories, improves cardiovascular health, and can be done daily without recovery time.</p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Weight Loss Benefits:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Burns 200-300 calories per hour</li>
                      <li>• No cortisol spike (unlike intense exercise)</li>
                      <li>• Can be done every single day</li>
                      <li>• Supports fat loss without muscle loss</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                <h4 className="font-bold text-gray-900 mb-4">Simple Weekly Movement Plan for Weight Loss</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-900">Monday, Wednesday, Friday</span>
                    <span className="text-gray-700">Strength training (20-30 min)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-900">Every Day</span>
                    <span className="text-gray-700">7,000+ steps or 30-45 min walking</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-900">Saturday & Sunday</span>
                    <span className="text-gray-700">Light activity or rest days</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Sleep & Hormones */}
            <section id="sleep-hormones" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sleep & Hormones</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Poor sleep wrecks your metabolism faster than anything else. Just one night of bad sleep increases insulin resistance by 30%.
              </p>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep's Impact on Weight:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Increases hunger hormones (ghrelin)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Decreases fullness hormones (leptin)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Raises cortisol (stress hormone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Reduces willpower and decision-making</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sleep Optimization Checklist:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    '7-9 hours per night',
                    'Consistent sleep schedule',
                    'Dark, cool bedroom',
                    'No screens 1 hour before bed',
                    'Magnesium supplement',
                    'Morning sunlight exposure',
                  ].map((tip, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-800">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7: Supplements */}
            <section id="supplements" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Supplements for Weight & Metabolism</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                These supplements have research backing for metabolic support and healthy weight management:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Berberine', benefit: 'Improves insulin sensitivity, may reduce body fat', dose: '500mg, 3x daily' },
                  { name: 'Green Tea Extract (EGCG)', benefit: 'Boosts metabolism, aids fat burning', dose: '400-500mg daily' },
                  { name: 'Fiber Supplements', benefit: 'Increases fullness, stabilizes blood sugar', dose: '5-10g with meals' },
                  { name: 'Omega-3 Fish Oil', benefit: 'Reduces inflammation, supports fat loss', dose: '2000mg EPA/DHA daily' },
                ].map((supp, i) => (
                  <div key={i} className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{supp.name}</h3>
                    <p className="text-gray-700 text-sm mb-3">{supp.benefit}</p>
                    <p className="text-emerald-600 font-semibold text-sm">{supp.dose}</p>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Combine Supplements with Healthy Habits</h3>
                <p className="text-lg text-gray-700">
                  Remember: supplements support your lifestyle, they don't replace nutrition, exercise, and sleep. The foundation of metabolic health comes from consistent healthy choices.
                </p>
              </div>
            </section>

            {/* Section 8: Action Plan */}
            <section id="action-plan" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12-Week Metabolic Reset Plan</h2>
              
              <div className="space-y-6">
                <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 1-4: Foundation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Track sleep—aim for 7+ hours</li>
                    <li>• Add 30g protein to breakfast</li>
                    <li>• Walk 10 minutes after dinner</li>
                    <li>• Remove sugary drinks</li>
                  </ul>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 5-8: Build Momentum</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Start strength training 2x/week</li>
                    <li>• Increase daily steps to 7,000</li>
                    <li>• Reduce ultra-processed foods by 50%</li>
                    <li>• Consider berberine supplement</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 border-l-4 border-cyan-600 rounded-r-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 9-12: Optimize</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Strength training 3x/week</li>
                    <li>• 12-hour eating window</li>
                    <li>• Measure waist circumference</li>
                    <li>• Retest metabolic markers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final CTA - Your Metabolism Can Heal */}
            <section className="mb-16" id="getting-started">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Metabolism Can Heal</h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Focus on health markers, not just the scale. When metabolism improves, sustainable weight loss follows naturally.
                </p>
                <Link to="/reverse-prediabetes" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition text-lg">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/prediabetes-support" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                  <Apple className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Prediabetes Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Complete guide to reversing prediabetes naturally</p>
                  <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link to="/glucose-monitoring-tools" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                  <Activity className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Glucose Monitoring</h3>
                  <p className="text-gray-600 text-sm mb-4">Track your metabolic progress</p>
                  <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                    View Tools <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link to="/natural-blood-sugar" className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition">
                  <Heart className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Natural Remedies</h3>
                  <p className="text-gray-600 text-sm mb-4">Science-backed natural approaches</p>
                  <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </section>

            {/* Supplement Support CTA */}
            <section className="py-16 bg-blue-50 border-t border-blue-200 rounded-xl mb-16">
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Accelerate Your Results
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Lifestyle changes form the foundation. Optimize with supplements 
                  designed for metabolic health and sustainable weight management.
                </p>
                <Link 
                  to="/supplements/metabolic-weight"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg"
                >
                  Shop Metabolic & Weight Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* AFFILIATE DISCLOSURE - COMPACT */}
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

      </main>
    </>
  );
}