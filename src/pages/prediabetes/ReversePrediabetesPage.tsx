import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Utensils, 
  Move, 
  Moon, 
  ArrowRight,
  Eye,
  Activity,
  Pill,
  BarChart3,
  TrendingDown
} from 'lucide-react';

export default function ReversePrediabetesPage() {
  
  // Helper function for smooth scroll
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      
      {/* 1. HERO SECTION */}
      <header className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Link to="/prediabetes-support" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Support Hub
          </Link>
          <span className="bg-emerald-500/20 text-emerald-100 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
            Evidence-Based Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            How to Reverse Prediabetes:<br/>
            <span className="text-emerald-400">The 30-Day Action Plan</span>
          </h1>
          <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl">
            You don't need "perfect" genetics to lower your blood sugar. You need a protocol. Here is the science-backed roadmap to lower your A1C naturally.
          </p>
        </div>
      </header>

      {/* 2. QUICK NAVIGATION */}
      <div className="bg-emerald-50 border-b border-emerald-100 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-6 py-4 text-sm font-semibold text-emerald-800 whitespace-nowrap">
            <button onClick={() => scrollToSection('baseline')} className="hover:text-emerald-600">Your Baseline</button>
            <button onClick={() => scrollToSection('reality-check')} className="hover:text-emerald-600">The Science</button>
            <button onClick={() => scrollToSection('six-steps')} className="hover:text-emerald-600">The 6 Pillars</button>
            <button onClick={() => scrollToSection('action-plan')} className="hover:text-emerald-600">30-Day Plan</button>
            <button onClick={() => scrollToSection('resources')} className="hover:text-emerald-600">Tools & Resources</button>
          </div>
        </div>
      </div>

      {/* 3. BASELINE NUMBERS SECTION (NEW) */}
      <section id="baseline" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 0: Know Your Baseline Numbers</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Before starting your reversal protocol, get tested to establish your baseline. This lets you measure real progress and know exactly when you've reversed prediabetes. These three markers tell your complete story.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-emerald-200 shadow-sm">
              <TrendingDown className="w-8 h-8 text-emerald-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Fasting Glucose</h4>
              <p className="text-2xl font-bold text-emerald-600 mb-3">100–125 mg/dL</p>
              <p className="text-sm text-gray-600 mb-2"><strong>What it measures:</strong> Blood sugar after 8+ hours of fasting</p>
              <p className="text-sm text-gray-600"><strong>Your goal:</strong> Lower to &lt;100 mg/dL</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-emerald-200 shadow-sm">
              <BarChart3 className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">A1C Level</h4>
              <p className="text-2xl font-bold text-blue-600 mb-3">5.7%–6.4%</p>
              <p className="text-sm text-gray-600 mb-2"><strong>What it measures:</strong> 3-month average blood sugar</p>
              <p className="text-sm text-gray-600"><strong>Your goal:</strong> Lower to &lt;5.7%</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-emerald-200 shadow-sm">
              <Activity className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Fasting Insulin</h4>
              <p className="text-2xl font-bold text-purple-600 mb-3">≥12 mIU/L</p>
              <p className="text-sm text-gray-600 mb-2"><strong>What it measures:</strong> Insulin levels after fasting</p>
              <p className="text-sm text-gray-600"><strong>Your goal:</strong> Lower to &lt;12 mIU/L</p>
            </div>
          </div>

          <div className="mt-8 bg-emerald-100 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <p className="text-emerald-900">
              <strong>💡 Pro Tip:</strong> Ask your doctor for all three tests at once. This gives you the complete picture of your metabolic health. Retest in 6-8 weeks to see your progress.
            </p>
          </div>
        </div>
      </section>

      {/* 4. REALITY CHECK */}
      <section id="reality-check" className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-orange-900 mb-2">Is Reversal Really Possible?</h3>
            <p className="text-orange-800">
              <strong>Yes.</strong> The Diabetes Prevention Program (DPP) study proved that lifestyle changes are <span className="underline">twice as effective</span> as Metformin for preventing Type 2 Diabetes. Your body <em>wants</em> to heal. With the right protocol, 80% of people reverse prediabetes within 6–12 months.
            </p>
          </div>
        </div>
      </section>

      {/* 5. THE STRATEGY: 6 PILLARS OF REVERSAL */}
      <section id="six-steps" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">The 6 Pillars of Reversal</h2>
            <p className="text-gray-600 mt-2">A holistic approach to resetting your metabolism. Each pillar builds on the previous one.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">1. Know Your Signs</h3>
              <p className="text-sm text-gray-600 mb-2">Understand your body's early warning signals like fatigue after meals, constant thirst, and afternoon energy crashes. These symptoms disappear once you reverse prediabetes.</p>
              <p className="text-xs text-gray-500 italic">Foundation: Self-awareness</p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">2. Master Your Diet</h3>
              <p className="text-sm text-gray-600 mb-2">Switch from refined carbs to fiber-rich foods and prioritize protein at every meal. This is the most impactful change—diet controls 70% of blood sugar management.</p>
              <p className="text-xs text-gray-500 italic">Core pillar: 70% of the battle</p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Move className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">3. Move Your Body</h3>
              <p className="text-sm text-gray-600 mb-2">Post-meal walking reduces glucose spikes by 20–30%. Just 10 minutes after eating can blunt blood sugar by forcing muscles to absorb glucose without insulin.</p>
              <p className="text-xs text-gray-500 italic">Most effective: Post-meal walks</p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">4. Optimize Sleep & Stress</h3>
              <p className="text-sm text-gray-600 mb-2">Poor sleep and chronic stress raise cortisol, which increases glucose production even without food. Quality sleep and stress relief are non-negotiable for reversal.</p>
              <p className="text-xs text-gray-500 italic">Foundation: 7–8 hours nightly</p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">5. Track Your Progress</h3>
              <p className="text-sm text-gray-600 mb-2">Use a glucometer to learn your personal glucose response to foods. What raises your neighbor's blood sugar might not affect yours—data reveals your unique metabolic signature.</p>
              <p className="text-xs text-gray-500 italic">Insight: Personalized feedback</p>
            </div>

            {/* Pillar 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                <Pill className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">6. Supplement Support</h3>
              <p className="text-sm text-gray-600 mb-2">Fill nutritional gaps with evidence-based supplements like Berberine and Chromium. These accelerate reversal when paired with the 5 pillars above—they're force multipliers, not replacements.</p>
              <p className="text-xs text-gray-500 italic">Accelerator: 10–20% impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE TIMELINE: 30-DAY PLAN (EXPANDED) */}
      <section id="action-plan" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Your 30-Day Action Plan: Start Today</h2>
          <div className="space-y-6">
            
            {/* Week 1 */}
            <div className="flex gap-4 p-6 border border-emerald-100 rounded-xl bg-emerald-50/50">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 1: The "Clean Slate" Week</h4>
                <p className="text-sm text-gray-600 mb-4">Focus: Remove the worst offenders</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 1–3:</strong> Remove all sugary drinks (soda, juice, flavored coffee)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 4–5:</strong> Swap breakfast for a high-protein option (eggs, Greek yogurt, etc.)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 6–7:</strong> Add a 10-minute walk after dinner</span></li>
                </ul>
              </div>
            </div>

            {/* Week 2 */}
            <div className="flex gap-4 p-6 border border-emerald-100 rounded-xl bg-emerald-50/50">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 2: The "Fiber Fix" Week</h4>
                <p className="text-sm text-gray-600 mb-4">Focus: Build better meals</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 8–10:</strong> Add a side salad or cooked vegetables to lunch and dinner</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 11–12:</strong> Swap white bread for whole grain or reduce bread portions</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 13–14:</strong> Aim for 30g of fiber daily (track with an app)</span></li>
                </ul>
              </div>
            </div>

            {/* Week 3 */}
            <div className="flex gap-4 p-6 border border-emerald-100 rounded-xl bg-emerald-50/50">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 3: The "Movement" Week</h4>
                <p className="text-sm text-gray-600 mb-4">Focus: Boost exercise</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 15–17:</strong> Add post-meal walks (10 min after lunch AND dinner)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 18–19:</strong> Try 1 strength training session (bodyweight, yoga, or light weights)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 20–21:</strong> Aim for 7–8 hours of quality sleep each night</span></li>
                </ul>
              </div>
            </div>

            {/* Week 4 */}
            <div className="flex gap-4 p-6 border border-emerald-100 rounded-xl bg-emerald-50/50">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Week 4: The "Data & Lock In" Phase</h4>
                <p className="text-sm text-gray-600 mb-4">Focus: Measure and solidify habits</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 22–24:</strong> Get a glucometer and test your fasting glucose (optional but powerful)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 25–26:</strong> Consider adding a supplement (Berberine or Magnesium)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <span className="text-sm text-gray-700"><strong>Days 27–30:</strong> Schedule follow-up labs with your doctor for 6–8 weeks out</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-900">
                <strong>📊 Expected Results After 30 Days:</strong> Most people see fasting glucose drops of 5–15 mg/dL and feel more energy. Real reversal (A1C improvement) takes 6–12 weeks, so stay consistent and retest in 8 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESOURCES GRID */}
      <section id="resources" className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tools for Your Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Resource 1: Diet */}
            <Link to="/prediabetes-diet" className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Utensils className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Detailed Diet Guide</h3>
              <p className="text-sm text-gray-600 mb-4">The complete list of foods to eat and avoid for blood sugar stability. Includes meal plans and shopping lists.</p>
              <span className="text-emerald-600 text-sm font-semibold flex items-center">Read Guide <ArrowRight className="w-4 h-4 ml-1"/></span>
            </Link>

            {/* Resource 2: Monitoring */}
            <Link to="/glucose-monitoring-tools" className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Activity className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Monitoring Tools</h3>
              <p className="text-sm text-gray-600 mb-4">Top-rated glucose meters and CGMs to track your progress in real time.</p>
              <span className="text-blue-600 text-sm font-semibold flex items-center">Compare Devices <ArrowRight className="w-4 h-4 ml-1"/></span>
            </Link>

            {/* Resource 3: Supplements */}
            <Link to="/natural-blood-sugar" className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Pill className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Natural Support</h3>
              <p className="text-sm text-gray-600 mb-4">Evidence-based supplements that accelerate reversal when paired with lifestyle changes.</p>
              <span className="text-purple-600 text-sm font-semibold flex items-center">View Reviews <ArrowRight className="w-4 h-4 ml-1"/></span>
            </Link>

          </div>
        </div>
      </section>

      {/* 8. MAIN CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Target className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-gray-300 mb-8">
            You have the plan. Now get the tools. Browse our curated list of blood-sugar-friendly supplements and monitoring devices to accelerate your reversal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/natural-blood-sugar" 
              className="inline-flex items-center justify-center bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition"
            >
              Shop Support Supplements <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/glucose-monitoring-tools" 
              className="inline-flex items-center justify-center bg-gray-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-600 transition"
            >
              Get a Glucose Monitor <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}