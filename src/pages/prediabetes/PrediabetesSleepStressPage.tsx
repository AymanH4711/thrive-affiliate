import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Moon,
  Brain,
  Heart,
  Activity,
  ArrowRight,
  Clock,
  Zap,
  Droplet
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function PrediabetesSleepStressPage() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Sleep & Stress Management for Prediabetes | Thrive"
        description="Complete guide to sleep optimization and stress reduction for prediabetes reversal. Learn how poor sleep raises blood sugar and simple fixes to improve both."
        keywords="prediabetes sleep, stress and blood sugar, cortisol and insulin, sleep optimization"
        image="/images/sleep-stress-og.png"
        url="/prediabetes-sleep-stress"
      />
      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* 1. HERO SECTION */}
        <header className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <Link to="/reverse-prediabetes" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plan
            </Link>
            <span className="bg-indigo-500/20 text-indigo-100 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
              Step 5 of 5
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Optimize Sleep & Stress:<br/>
              <span className="text-indigo-400">The Recovery Foundation</span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed max-w-2xl">
              Poor sleep and chronic stress raise cortisol, which directly increases blood glucose. This guide shows you how to use sleep and stress management to complete your reversal plan.
            </p>
          </div>
        </header>

        {/* 2. PROGRESS INDICATOR - 5 STEPS INLINE */}
        <section className="bg-indigo-50 border-b border-indigo-100 py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-semibold text-indigo-800 mb-4">Your Progress Through Reversal:</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Diet */}
              <Link to="/prediabetes-diet" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-indigo-600 text-sm">Diet</span>
              </Link>
              
              <div className="w-8 h-1 bg-indigo-300"></div>
              
              {/* Exercise */}
              <Link to="/prediabetes-exercise" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-indigo-600 text-sm">Exercise</span>
              </Link>
              
              <div className="w-8 h-1 bg-indigo-300"></div>
              
              {/* Monitoring */}
              <Link to="/glucose-monitoring-tools" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <span className="font-semibold text-gray-600 hover:text-indigo-600 text-sm">Monitor</span>
              </Link>
              
              <div className="w-8 h-1 bg-indigo-300"></div>
              
              {/* Supplements */}
              <Link to="/natural-blood-sugar" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <span className="font-semibold text-gray-600 hover:text-indigo-600 text-sm">Supplements</span>
              </Link>

              <div className="w-8 h-1 bg-indigo-300"></div>

              {/* Sleep & Stress - Current */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-indigo-700 text-sm">Sleep & Stress</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. QUICK NAVIGATION */}
        <div className="bg-indigo-50 border-b border-indigo-100 sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-4 text-sm font-semibold text-indigo-800 whitespace-nowrap">
              <button onClick={() => scrollToSection('why-matters')} className="hover:text-indigo-600">Why It Matters</button>
              <button onClick={() => scrollToSection('sleep-guide')} className="hover:text-indigo-600">Sleep Optimization</button>
              <button onClick={() => scrollToSection('stress-guide')} className="hover:text-indigo-600">Stress Management</button>
              <button onClick={() => scrollToSection('cortisol')} className="hover:text-indigo-600">Cortisol & Blood Sugar</button>
              <button onClick={() => scrollToSection('implementation')} className="hover:text-indigo-600">30-Day Protocol</button>
            </div>
          </div>
        </div>

        {/* 4. WHY IT MATTERS */}
        <section id="why-matters" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Sleep & Stress Optimization Matters</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-indigo-600" />
                  Sleep's Role in Blood Sugar
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Poor sleep impairs insulin sensitivity</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Sleep deprivation increases appetite hormones</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Even one night of poor sleep raises fasting glucose</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  Stress's Impact on Glucose
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Stress hormones trigger glucose release from liver</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Chronic stress impairs insulin secretion</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Cortisol elevation directly raises A1C levels</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-900 font-semibold">
                <strong>📊 The Science:</strong> Studies show that improving sleep quality and stress management can improve A1C by 0.5–1.5% on their own–comparable to some medications.
              </p>
            </div>
          </div>
        </section>

        {/* 5. SLEEP OPTIMIZATION GUIDE */}
        <section id="sleep-guide" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sleep Optimization for Blood Sugar Control</h2>

            <div className="space-y-6">
              {/* Sleep Tip 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Target: 7–9 Hours Nightly</h3>
                    <p className="text-gray-700 mb-3">
                      This is the "sweet spot" for insulin sensitivity. Less than 6 hours significantly impairs glucose control. More than 10 hours may indicate poor sleep quality.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Action:</strong> Set a consistent bedtime and wake time, even on weekends.</p>
                  </div>
                </div>
              </div>

              {/* Sleep Tip 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Moon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Create a Sleep Ritual: 30 Minutes Before Bed</h3>
                    <p className="text-gray-700 mb-3">
                      Your body needs a wind-down period. Dim lights, stop screen time, and prepare your environment for rest.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Ritual options:</strong> Reading, journaling, meditation, warm bath, or gentle stretching.</p>
                  </div>
                </div>
              </div>

              {/* Sleep Tip 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Optimize Your Sleep Environment</h3>
                    <p className="text-gray-700 mb-3">
                      Temperature, darkness, and noise all affect sleep quality. A cool, dark, quiet room is ideal.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Checklist:</strong> 65–68°F temperature, blackout curtains, white noise if needed, comfortable bedding.</p>
                  </div>
                </div>
              </div>

              {/* Sleep Tip 4 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Avoid Sleep Disruptors</h3>
                    <p className="text-gray-700 mb-3">
                      Caffeine, alcohol, and large meals before bed can significantly disrupt sleep quality and morning glucose levels.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Guidelines:</strong> No caffeine after 2 PM, no alcohol 3 hours before bed, finish eating 2–3 hours before sleep.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. STRESS MANAGEMENT GUIDE */}
        <section id="stress-guide" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Stress Management for Cortisol Control</h2>

            <div className="space-y-6">
              {/* Stress Technique 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Daily Meditation or Mindfulness (10–15 min)</h3>
                    <p className="text-gray-700 mb-3">
                      Even 10 minutes of meditation can lower cortisol significantly. Apps like Headspace or Calm make this accessible.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Best time:</strong> Morning (prevents stress buildup) or evening (promotes sleep).</p>
                  </div>
                </div>
              </div>

              {/* Stress Technique 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Exercise as Stress Relief (30 min, 4–5x/week)</h3>
                    <p className="text-gray-700 mb-3">
                      Aerobic exercise is one of the most effective stress reducers. It lowers cortisol while also improving insulin sensitivity (double benefit).
                    </p>
                    <p className="text-sm text-gray-600"><strong>Best options:</strong> Walking, jogging, swimming, cycling, yoga, or any activity you enjoy.</p>
                  </div>
                </div>
              </div>

              {/* Stress Technique 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Social Connection and Support</h3>
                    <p className="text-gray-700 mb-3">
                      Time with loved ones, community involvement, and meaningful relationships are powerful stress buffers that reduce cortisol.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Action:</strong> Schedule regular social activities. Even 20 minutes of quality time with friends/family can significantly reduce stress.</p>
                  </div>
                </div>
              </div>

              {/* Stress Technique 4 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Boundary Setting and Work-Life Balance</h3>
                    <p className="text-gray-700 mb-3">
                      Chronic work stress significantly elevates cortisol. Setting boundaries and unplugging regularly is essential.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Practices:</strong> No emails after 6 PM, unplugged weekends, vacation days (actually taken), saying "no" to excessive commitments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CORTISOL & BLOOD SUGAR CONNECTION */}
        <section id="cortisol" className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How Cortisol Directly Impacts Your Blood Sugar</h2>

            <div className="bg-white p-8 rounded-xl border border-indigo-200 shadow-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-indigo-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cortisol Triggers Glucose Release</h3>
                    <p className="text-gray-700">
                      When stressed, your body releases cortisol, which signals your liver to release glucose for "fight or flight." Even without eating, stress can raise blood sugar 20–50 mg/dL.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-indigo-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cortisol Impairs Insulin Function</h3>
                    <p className="text-gray-700">
                      High cortisol makes cells insulin-resistant, forcing your pancreas to work harder and produce more insulin. This accelerates prediabetes progression.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-4xl font-bold text-indigo-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Chronic Stress Raises Baseline Cortisol</h3>
                    <p className="text-gray-700">
                      Unmanaged stress doesn't just spike cortisol temporarily–it keeps it elevated 24/7, creating persistent glucose control problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-green-900 font-semibold">
                <strong>✅ The Solution:</strong> By managing stress and optimizing sleep, you reduce baseline cortisol, improve insulin sensitivity, and accelerate prediabetes reversal.
              </p>
            </div>
          </div>
        </section>

        {/* 7. MEASURING PROGRESS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring Your Progress</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Track these markers to see how sleep and stress management lower cortisol, improve insulin sensitivity, and accelerate prediabetes reversal.
            </p>
          </div>
        </section>

        {/* 8. 30-DAY IMPLEMENTATION PROTOCOL */}
        <section id="implementation" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your 30-Day Sleep & Stress Protocol</h2>

            <div className="space-y-6">
              {[
                { week: 'Week 1', focus: 'Foundation', tasks: ['Set consistent sleep schedule (same bedtime/wake time)', 'Add one 10-min daily meditation', 'Identify your top 3 stressors'] },
                { week: 'Week 2', focus: 'Deepen', tasks: ['Complete sleep ritual 30 min before bed', 'Add 20-min stress-relief exercise', 'Practice boundary-setting (no work emails after 6 PM)'] },
                { week: 'Week 3', focus: 'Optimize', tasks: ['Optimize sleep environment (temp, darkness, quiet)', 'Increase stress relief to 4x/week', 'Strengthen social connections (weekly social time)'] },
                { week: 'Week 4', focus: 'Sustain', tasks: ['Evaluate sleep quality (tracking app optional)', 'Assess stress levels honestly', 'Plan long-term stress management routine'] }
              ].map((week, i) => (
                <div key={i} className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{week.week}: {week.focus}</h3>
                  <ul className="space-y-2 mt-3">
                    {week.tasks.map((task, j) => (
                      <li key={j} className="flex gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">⚠️ Common Obstacles & Solutions</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>"I can't sleep early because of work:"</strong> Start with a 15-minute wind-down routine instead of a full lifestyle change. Small steps compound.</p>
                <p><strong>"Meditation doesn't work for me:"</strong> Try walking meditation, yoga, or simply sitting quietly. The key is calming your nervous system, not the specific technique.</p>
                <p><strong>"I'm too busy for stress management:"</strong> Remember: stress management IS health management. Skipping it delays your reversal. Make it non-negotiable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONGRATULATIONS & MAIN CTA - JOURNEY COMPLETE */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-5xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Congratulations! You've Completed All 5 Steps!</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              You now have a complete, evidence-based plan to reverse your prediabetes. You've mastered nutrition, movement, monitoring, supplements, and recovery. Your journey to better health starts now.
            </p>
            <Link 
              to="/prediabetes-support" 
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition shadow-lg text-lg"
            >
              Return to Support Hub
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}