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
  Moon,
  AlertTriangle,
  Info
} from 'lucide-react';
import { SEO } from "@/components/seo/SEO";

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
        description="Complete guide to exercise for prediabetes: strength training, walking routines, HIIT workouts. See how regular movement improves insulin sensitivity and supports blood sugar control."
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
              Post-meal walks can meaningfully reduce glucose spikes. Add strength training to support insulin sensitivity over time. This is your step-by-step guide to movement that works with your blood sugar — not against it.
            </p>
          </div>
        </header>

        {/* ── MEDICAL DISCLAIMER ── */}
        <section className="bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4 max-w-4xl py-5">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">Medical Disclaimer</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  The information on this page is provided for general educational purposes only and is <strong>not a substitute for professional medical advice, diagnosis, or treatment.</strong> Always consult your doctor or a qualified healthcare provider before starting a new exercise programme, especially if you have prediabetes, diabetes, cardiovascular disease, joint problems, or any other health condition. Stop exercising and seek medical attention if you experience chest pain, dizziness, shortness of breath, or unusual discomfort. Individual results vary. Never disregard professional medical advice because of something you have read here.
                </p>
              </div>
            </div>
          </div>
        </section>

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
              
              {/* Exercise - active */}
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
              Physical activity helps your muscles absorb glucose directly — without needing extra insulin. This makes exercise one of the most effective and immediate tools for improving blood sugar control. It's not just about weight loss; it's about how your body handles glucose at a cellular level.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: '~22%', desc: 'Average post-meal glucose reduction from a short walk (results vary by individual)' },
                { stat: '4–8 Weeks', desc: 'Typical timeframe to notice meaningful insulin sensitivity improvements' },
                { stat: '~58%', desc: 'Reduction in diabetes progression risk with lifestyle exercise (DPP study, combined with diet)' },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</p>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">How Exercise Improves Blood Sugar</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                {[
                  { title: 'During exercise', desc: 'Muscles take up glucose for fuel independently of insulin, lowering blood glucose immediately.' },
                  { title: 'Hours after exercise', desc: 'Your muscles replenish glycogen stores by pulling glucose from the bloodstream, keeping levels lower for up to 24–48 hours.' },
                  { title: 'Over weeks & months', desc: 'Consistent training increases GLUT4 transporter expression in muscle cells, improving long-term insulin sensitivity.' },
                ].map((point, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-blue-700 mb-1">{point.title}</p>
                    <p>{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. POST-MEAL WALKS */}
        <section id="post-meal" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Meal Walks: Your Simplest Tool</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              A 10–15 minute walk after eating activates muscle glucose transport without requiring extra insulin — one of the most accessible and well-studied strategies for blunting post-meal spikes.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  step: 'Timing',
                  desc: 'Start within 30 minutes of finishing your meal, while glucose is still rising. Even 5 minutes of gentle movement is better than nothing.'
                },
                {
                  step: 'Duration',
                  desc: 'Aim for 10–15 minutes per meal. Research suggests even short bouts are effective; longer walks provide additional benefit.'
                },
                {
                  step: 'Intensity',
                  desc: 'Brisk but comfortable — enough to feel slightly warm and breathe a little harder. You should still be able to hold a conversation.'
                },
                {
                  step: 'Consistency',
                  desc: 'Try to walk after each main meal (breakfast, lunch, dinner). The cumulative effect across the day is significant and adds up to 30–45 minutes of daily movement effortlessly.'
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white border border-blue-200 rounded-xl p-6">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
                <strong>✅ Pro Tip:</strong> Can't get outside? March on the spot, pace your home, or use a treadmill. Even standing and doing light household tasks helps. Consistency matters more than setting.
              </p>
            </div>
          </div>
        </section>

        {/* 5. STRENGTH TRAINING */}
        <section id="strength" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strength Training: Build Muscle, Support Glucose Control</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Muscle tissue is your body's primary glucose storage site. More muscle mass means greater capacity to absorb and use blood glucose. Research consistently shows that regular resistance training improves insulin sensitivity and supports long-term blood sugar management — typically over several weeks to months of consistent training.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Beginner Routine (2x/week, ~20–30 min)</h3>
                <p className="text-sm text-gray-600 mb-4">Perform each exercise with slow, controlled movement. Rest 60–90 seconds between sets. Stop if you feel pain (not normal muscle fatigue).</p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Bodyweight squats: 3 sets of 8–12 reps',
                    'Wall push-ups or knee push-ups: 3 sets of 8–10 reps',
                    'Resistance band rows: 3 sets of 10–12 reps',
                    'Glute bridges: 3 sets of 10 reps',
                    'Standing calf raises: 2 sets of 15 reps',
                  ].map((ex, j) => (
                    <li key={j} className="flex gap-3">
                      <Dumbbell className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Why Resistance Training Works</h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    { icon: <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />, text: 'Increases GLUT4 transporter density in muscle cells, improving glucose uptake capacity' },
                    { icon: <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />, text: 'Greater muscle mass creates more "storage space" for blood glucose' },
                    { icon: <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />, text: 'Raises resting metabolic rate, helping with long-term weight and glucose management' },
                    { icon: <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />, text: 'Reduces visceral fat over time, which directly improves insulin sensitivity' },
                  ].map((point, j) => (
                    <li key={j} className="flex gap-3">
                      {point.icon}
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-900">
                <strong>💡 No gym needed.</strong> Bodyweight exercises and resistance bands are highly effective. Focus on proper form over heavy loads — especially when starting out. If you have joint issues or haven't exercised in a while, consider working with a physiotherapist or certified trainer initially.
              </p>
            </div>
          </div>
        </section>

        {/* 6. HIIT & CARDIO */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HIIT & Cardio: For When You're Ready</h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Once walking and strength training feel comfortable (typically after 4–6 weeks), adding short high-intensity intervals can further enhance insulin sensitivity and cardiovascular health. Research suggests HIIT is particularly effective at improving glucose metabolism — but it's not the right starting point for everyone.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Check with your doctor before starting HIIT</strong> if you have heart disease, hypertension, joint issues, or haven't been active for an extended period. HIIT is an <em>advanced</em> addition — not a requirement for blood sugar improvement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Sample Beginner HIIT Workout (~15 min)</h3>
                <ol className="space-y-3 text-gray-700">
                  {[
                    'Warm-up: 3 min brisk walk',
                    '20–30 sec moderate-high effort (brisk walk, marching, light jog — your choice)',
                    '90 sec easy recovery walk',
                    'Repeat 4–6 times',
                    'Cool-down: 2–3 min slow walk + gentle stretching',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="font-bold text-blue-600 flex-shrink-0">{i + 1}.</div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Benefits of Cardio & HIIT</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Improves cardiovascular health and heart function',
                    'Enhances the body\'s ability to use glucose for energy during and after exercise',
                    'Time-efficient — meaningful results in short sessions',
                    'Can improve VO₂ max, a marker linked to reduced metabolic disease risk',
                    'May support mood, energy, and sleep quality',
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-3">
                      <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WEEKLY PLAN */}
        <section id="weekly-plan" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Weekly Exercise Plan</h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              A balanced starting framework. The goal is at least 150 minutes of moderate activity per week, plus 2 strength sessions — consistent with major diabetes prevention guidelines.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                This is a <strong>general sample plan</strong>, not a personalised prescription. If you are new to exercise or have any health conditions, start with only the post-meal walks in Week 1 and add activities gradually. Consult your healthcare provider before beginning.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { day: 'Monday', activity: 'Post-meal walks + Strength training (upper body focus)', note: '~30–40 min total', emoji: '🏋️' },
                { day: 'Tuesday', activity: 'Post-meal walks + 20–30 min steady brisk walk', note: '~50 min total', emoji: '🚶' },
                { day: 'Wednesday', activity: 'Post-meal walks + Strength training (lower body focus)', note: '~30–40 min total', emoji: '🏋️' },
                { day: 'Thursday', activity: 'Post-meal walks + Light active recovery (yoga, stretching, swimming)', note: 'Low intensity', emoji: '🧘' },
                { day: 'Friday', activity: 'Post-meal walks + Strength training (full body) or HIIT (advanced — when ready)', note: '~30–40 min total', emoji: '⚡' },
                { day: 'Saturday', activity: 'Longer outdoor walk, cycling, swimming, or active hobby', note: '45–60 min', emoji: '🌳' },
                { day: 'Sunday', activity: 'Rest or gentle movement (walk, light stretching)', note: 'Recovery day', emoji: '☀️' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-0.5">{item.day}</h4>
                      <p className="text-gray-700">{item.activity}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                  <span className="text-3xl ml-4">{item.emoji}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-orange-900">
                <strong>⚠️ Start where you are.</strong> If this plan feels like too much, begin with just the post-meal walks for the first 1–2 weeks. Add one strength session in Week 2, a second in Week 3. Gradual progression protects against injury and builds sustainable habits. Consistency always beats intensity.
              </p>
            </div>
          </div>
        </section>

        {/* 8. TRACKING PROGRESS */}
        <section id="tracking" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Track Your Progress</h2>
            
            <div className="bg-white p-6 rounded-xl border border-blue-200 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">How to Know If Exercise Is Working</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Glucose meter (if you have one):</strong> Test 1–2 hours after a meal, then go for a 10–15 min walk and test again. Many people see a noticeable drop. Results vary — focus on the trend over multiple readings, not single data points.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Energy & mood:</strong> Many people notice more stable energy, fewer afternoon slumps, and improved mood within 1–2 weeks of regular movement — even before lab values change.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Lab tests:</strong> Discuss with your doctor when to recheck fasting glucose and HbA1c. Meaningful changes typically appear after 8–12 weeks of consistent lifestyle changes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Fitness tracking:</strong> Apps like Apple Health, Google Fit, or Strava can log walks, steps, and active minutes. Seeing a streak of consistent activity is motivating and helps you spot patterns.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Strength gains:</strong> Over 4–8 weeks, note whether exercises feel easier or you can perform more reps. Increased functional strength is a sign your muscles are adapting and becoming more metabolically active.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-green-900">
                <strong>✅ General Timeline (results vary):</strong> Weeks 1–2: Improved energy, better sleep, more stable mood. Weeks 3–4: Some improvement visible on home glucose readings. Weeks 8–12: Lab markers (fasting glucose, HbA1c) may begin to reflect sustained changes. Progress is individual — keep going even if results feel slow.
              </p>
            </div>
          </div>
        </section>

        {/* ── AFFILIATE DISCLOSURE ── */}
        <section className="bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl py-6">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-700 mb-1">Affiliate Disclosure</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Some links on this page may be affiliate links. This means that if you click a link and make a purchase, Thrive may earn a small commission at <strong>no extra cost to you</strong>. We only recommend products and services — such as fitness equipment, resistance bands, or tracking apps — that we genuinely believe may be helpful for people managing prediabetes. Affiliate relationships do not influence our editorial content or the exercise information provided on this page. Please read our full{' '}
                  <Link to="/affiliate-disclosure" className="underline text-blue-700 hover:text-blue-600">
                    Affiliate Disclosure Policy
                  </Link>{' '}
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. MAIN CTA - NEXT STEP */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <Activity className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready for Step 3?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              You've built your diet and movement foundations. Now it's time to track your progress with the right monitoring tools.
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