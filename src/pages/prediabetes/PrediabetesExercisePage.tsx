import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock,
  Heart,
  Zap,
  TrendingUp,
  Activity,
  ArrowRight,
  Users,
  Calendar,
  Dumbbell,
  Footprints,
  Moon
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function PrediabetesExercisePage() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Best Exercises for Prediabetes | Thrive Health Guide"
        description="Complete guide to exercise for prediabetes: strength training, walking routines, HIIT workouts. See how exercise improves insulin sensitivity in 2-3 weeks."
        keywords="prediabetes exercise, best exercises for blood sugar, strength training, walking for blood sugar control"
        image="/images/prediabetes-exercise-og.png"
        url="/prediabetes-exercise"
      />
      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* 1. HERO SECTION */}
        <header className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <Link to="/reverse-prediabetes" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plan
            </Link>
            <span className="bg-blue-500/20 text-blue-100 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
              Step 2 of 5
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Move Your Body:<br/>
              <span className="text-blue-400">The Complete Exercise Guide</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              Post-meal walks reduce glucose spikes by 20–30%. Add strength training to maximize insulin sensitivity. This is your step-by-step guide to movement that actually lowers blood sugar.
            </p>
          </div>
        </header>

        {/* 2. QUICK NAVIGATION */}
        <div className="bg-blue-50 border-b border-blue-100 sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-4 text-sm font-semibold text-blue-800 whitespace-nowrap">
              <button onClick={() => scrollToSection('why-matters')} className="hover:text-blue-600">Why It Matters</button>
              <button onClick={() => scrollToSection('post-meal')} className="hover:text-blue-600">Post-Meal Walks</button>
              <button onClick={() => scrollToSection('strength')} className="hover:text-blue-600">Strength Training</button>
              <button onClick={() => scrollToSection('weekly-plan')} className="hover:text-blue-600">Weekly Plan</button>
              <button onClick={() => scrollToSection('tracking')} className="hover:text-blue-600">Track Progress</button>
            </div>
          </div>
        </div>

        {/* PROGRESS INDICATOR - 5 STEPS INLINE */}
        <section className="bg-blue-50 border-b border-blue-100 py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-semibold text-blue-800 mb-4">Your Progress Through Reversal:</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Diet */}
              <Link to="/prediabetes-diet" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-600 hover:text-blue-600 text-sm">Diet</span>
              </Link>
              
              <div className="w-8 h-1 bg-blue-300"></div>
              
              {/* Exercise */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-blue-700 text-sm">Exercise</span>
              </div>
              
              <div className="w-8 h-1 bg-gray-300"></div>
              
              {/* Monitor */}
              <Link to="/glucose-monitoring-tools" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <span className="font-semibold text-gray-600 hover:text-blue-600 text-sm">Monitor</span>
              </Link>
              
              <div className="w-8 h-1 bg-gray-300"></div>
              
              {/* Supplements */}
              <Link to="/natural-blood-sugar" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <span className="font-semibold text-gray-600 hover:text-blue-600 text-sm">Supplements</span>
              </Link>

              <div className="w-8 h-1 bg-gray-300"></div>

              {/* Sleep & Stress */}
              <Link to="/prediabetes-sleep-stress" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <span className="font-semibold text-gray-600 hover:text-blue-600 text-sm">Sleep & Stress</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. WHY EXERCISE MATTERS */}
        <section id="why-matters" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise Matters for Prediabetes</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Exercise increases insulin sensitivity by 20–30% within days. It's not about weight loss—it's about muscle glucose uptake.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: '20–30%', desc: 'Glucose reduction after meals' },
                { stat: '2–3 Weeks', desc: 'To see insulin sensitivity gains' },
                { stat: '58%', desc: 'Diabetes prevention with movement' },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</p>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. POST-MEAL WALKS */}
        <section id="post-meal" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Meal Walks: Your Secret Weapon</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              A 10–15 minute walk after eating lowers glucose spikes by activating muscle glucose transport—without insulin.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  step: 'Timing',
                  desc: 'Start within 30 minutes after eating. Even 5 minutes helps.'
                },
                {
                  step: 'Duration',
                  desc: 'Aim for 10–15 minutes. Longer is better if possible.'
                },
                {
                  step: 'Intensity',
                  desc: 'Brisk but comfortable—enough to raise your heart rate slightly.'
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white border border-blue-200 rounded-xl p-6">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.step}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-green-900">
                <strong>✅ Pro Tip:</strong> If you can't walk outside, pace indoors or use a treadmill. Consistency is key—do this after every major meal.
              </p>
            </div>
          </div>
        </section>

        {/* 5. STRENGTH TRAINING */}
        <section id="strength" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strength Training: Build Muscle, Burn Glucose</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Muscle acts like a "glucose sponge." 2–3 sessions per week increase insulin sensitivity by 48% in 4 months.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Beginner Routine (2x/week)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <Dumbbell className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Squats: 3 sets of 10</span>
                  </li>
                  <li className="flex gap-3">
                    <Dumbbell className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Push-ups (wall/knee): 3 sets of 8</span>
                  </li>
                  <li className="flex gap-3">
                    <Dumbbell className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Rows (bands/weights): 3 sets of 10</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Why It Works</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Increases GLUT4 transporters</span>
                  </li>
                  <li className="flex gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Builds more muscle mass</span>
                  </li>
                  <li className="flex gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Boosts 24-hour metabolism</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-900">
                <strong>💡 Tip:</strong> No gym? Use bodyweight or resistance bands. Focus on form—start light and build up.
              </p>
            </div>
          </div>
        </section>

        {/* 6. HIIT & CARDIO */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HIIT & Cardio: Advanced Options</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Once walking is routine, add HIIT 1–2x/week. It improves insulin sensitivity by 35% in 2 weeks.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Sample HIIT Workout (15 min)</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <div className="font-bold text-blue-600">1.</div>
                    <span>Warm-up: 3 min light walk</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold text-blue-600">2.</div>
                    <span>30 sec high intensity (jog/squat jumps)</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold text-blue-600">3.</div>
                    <span>90 sec recovery walk</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold text-blue-600">4.</div>
                    <span>Repeat 6x</span>
                  </li>
                </ol>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Improves heart health</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Burns more calories</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Time-efficient</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WEEKLY PLAN */}
        <section id="weekly-plan" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Weekly Exercise Plan</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Start simple and build. Total time: 150 minutes/week + strength sessions.
            </p>
            
            <div className="space-y-4">
              {[
                { day: 'Monday', activity: 'Post-meal walks + Strength (upper body)', emoji: '🏋️‍♂️' },
                { day: 'Tuesday', activity: 'Post-meal walks + 20 min brisk walk', emoji: '🚶‍♂️' },
                { day: 'Wednesday', activity: 'Post-meal walks + Strength (lower body)', emoji: '🏋️‍♂️' },
                { day: 'Thursday', activity: 'Post-meal walks + HIIT session', emoji: '⚡' },
                { day: 'Friday', activity: 'Post-meal walks + Strength (full body)', emoji: '🏋️‍♂️' },
                { day: 'Saturday', activity: 'Longer walk or active hobby', emoji: '🌳' },
                { day: 'Sunday', activity: 'Rest or light yoga', emoji: '🧘‍♂️' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.day}</h4>
                      <p className="text-gray-700">{item.activity}</p>
                    </div>
                  </div>
                  <span className="text-3xl">{item.emoji}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <p className="text-orange-900">
                <strong>⚠️ Important:</strong> Start where you are. If daily walks feel overwhelming, start with 1–2 walks per day and add more gradually. Consistency beats intensity.
              </p>
            </div>
          </div>
        </section>

        {/* 8. TRACKING PROGRESS */}
        <section id="tracking" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Track Your Progress</h2>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">How to Know If Exercise Is Working</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Glucose meter:</strong> Test before and after a meal. Walk after the meal and test again. You should see 15–30 mg/dL lower after walking.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Energy levels:</strong> Most people notice more stable energy and fewer afternoon crashes within 1–2 weeks.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Lab tests:</strong> In 6–8 weeks, your A1C and fasting glucose should show measurable improvement.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Fitness app:</strong> Use Apple Health, Google Fit, or Strava to track walks and count steps. Seeing your progress motivates consistency.</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-green-900">
                <strong>✅ Expected Timeline:</strong> Week 1–2: Better energy, more stable moods. Week 3–4: Visible glucose improvements on meter. Week 6–8: Lab tests show A1C improvement.
              </p>
            </div>
          </div>
        </section>

        {/* 9. MAIN CTA - NEXT STEP */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <Activity className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready for Step 3?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              You've mastered diet and movement. Now it's time to track your progress with monitoring tools.
            </p>
            <Link 
              to="/glucose-monitoring-tools" 
              className="inline-flex items-center justify-center gap-2 bg-blue-400 text-blue-900 font-bold px-10 py-4 rounded-xl hover:bg-blue-300 transition shadow-lg text-lg"
            >
              Continue to Step 3: Track Your Progress
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}