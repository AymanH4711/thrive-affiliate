import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, ArrowRight, Activity, Heart, Scale, ArrowLeft, Zap } from 'lucide-react';

export default function PrediabetesSignsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/prediabetes-support" className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Prediabetes Support
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Prediabetes Symptoms & Early Signs
          </h1>
          <p className="text-2xl text-emerald-100 mb-4">What Your Body Is Telling You</p>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-2xl">
            Most people with prediabetes have no clear symptoms. Learn the subtle warning signs and how to catch them before they develop into Type 2 Diabetes.
          </p>
        </div>
      </section>

      {/* THE "SILENT" WARNING SECTION */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 flex gap-6 items-start">
            <AlertCircle className="w-12 h-12 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Why is it called the "Silent" Condition?</h2>
              <p className="text-gray-600 text-lg">
                Over 80% of people with prediabetes don't know they have it. The symptoms often develop so gradually that you might think they are just part of "getting older" or "being tired."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SYMPTOMS CHECKLIST */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The "Classic 5" Warning Signs</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: Zap, 
                title: "Increased Thirst & Urination", 
                desc: "Your kidneys work overtime to filter excess sugar, pulling fluids from your tissues." 
              },
              { 
                icon: Heart, 
                title: "Unexplained Hunger", 
                desc: "Insulin resistance prevents glucose from entering cells, leaving your body starving for energy." 
              },
              { 
                icon: Activity, 
                title: "Fatigue & Sluggishness", 
                desc: "Blood sugar spikes and crashes can leave you feeling exhausted, especially after meals." 
              },
              { 
                icon: AlertCircle, 
                title: "Blurred Vision", 
                desc: "High blood sugar can cause the lens of your eye to swell, changing your ability to focus." 
              },
              { 
                icon: CheckCircle, 
                title: "Slow-Healing Cuts", 
                desc: "High glucose levels can impair blood flow and nerve function, making healing difficult." 
              },
              {
                icon: Scale,
                title: "Unexplained Weight Changes",
                desc: "Insulin resistance can lead to sudden weight gain, especially around the midsection."
              }
            ].map((symptom, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-gray-200 rounded-xl hover:shadow-md hover:border-emerald-200 transition bg-gray-50">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit">
                  <symptom.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{symptom.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{symptom.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKIN SIGNS (Acanthosis Nigricans) */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-400">The Skin Symptom You Can See</h2>
              <h3 className="text-2xl font-semibold mb-4 text-white">Acanthosis Nigricans</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                One of the few visible signs of insulin resistance is dark, velvety patches of skin. These commonly appear in body folds like the neck, armpits, groin, or under the breasts. If you see this, it's a strong indicator of high insulin levels.
              </p>
              <div className="bg-emerald-900/40 p-6 rounded-lg border border-emerald-700">
                <p className="text-emerald-200 text-base">
                  <strong>⚠️ Important:</strong> If you notice darkening skin patches, ask your doctor for an A1C test and fasting insulin level immediately.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-emerald-800/30 rounded-full flex items-center justify-center border-4 border-emerald-600 p-8">
                <Activity className="w-32 h-32 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METABOLIC SIGNS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Lab/Metabolic Signs (What Doctors Look For)</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'Fasting Glucose',
                range: '100–125 mg/dL',
                normal: '< 100 mg/dL',
                color: 'orange'
              },
              {
                label: 'A1C Level',
                range: '5.7%–6.4%',
                normal: '< 5.7%',
                color: 'orange'
              },
              {
                label: 'Fasting Insulin',
                range: '> 12 mIU/L',
                normal: '< 12 mIU/L',
                color: 'orange'
              }
            ].map((test, i) => (
              <div key={i} className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">Prediabetic Range:</p>
                <p className="text-2xl font-bold text-orange-600 mb-3">{test.range}</p>
                <p className="text-xs text-gray-600">Normal: {test.normal}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">🔬 Why These Numbers Matter</h3>
            <p className="text-gray-700">
              These values show your body is struggling to process glucose efficiently. The higher the numbers, the closer you are to Type 2 Diabetes. But remember: these numbers are reversible with lifestyle changes.
            </p>
          </div>
        </div>
      </section>

      {/* RISK FACTORS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Are You At Risk?</h2>
          <div className="space-y-4">
            {[
              "Are you over the age of 45?",
              "Do you have a parent or sibling with Type 2 Diabetes?",
              "Are you physically active less than 3 times a week?",
              "Have you ever had gestational diabetes (during pregnancy)?",
              "Are you overweight or obese (BMI > 25)?",
              "Do you have high blood pressure?",
              "Do you have high cholesterol or triglycerides?"
            ].map((risk, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">✓</div>
                <p className="text-gray-700 font-medium text-lg">{risk}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-10 text-base font-semibold">
            If you answered "Yes" to 2 or more, it's time to get tested.
          </p>
        </div>
      </section>

      {/* NEXT STEP CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 border-t border-emerald-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Good News? It's Reversible.</h2>
          <p className="text-xl text-gray-700 mb-8">
            Prediabetes is a warning sign, not a life sentence. With the right strategies, you can lower your blood sugar and reverse the condition completely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/prediabetes-diet" 
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition shadow-lg transform hover:-translate-y-1"
            >
              How to Reverse Prediabetes
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/prediabetes-support" 
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 border-2 border-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition"
            >
              Back to Support Hub
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}