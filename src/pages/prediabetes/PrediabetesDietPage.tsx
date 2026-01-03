import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Apple,
  Utensils,
  ShoppingCart,
  BarChart3,
  Heart,
  Clock,
  Zap,
  ArrowRight,
  Coffee,
  Leaf,
  Moon
} from 'lucide-react';
import { SEO } from "../../components/SEO";

export default function PrediabetesDietPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Prediabetes Diet Plan: What to Eat & Avoid | Thrive"
        description="Complete prediabetes diet guide. Learn which foods stabilize blood sugar, meal timing strategies, and a 7-day meal plan to reverse prediabetes naturally."
        keywords="prediabetes diet, blood sugar diet, foods for blood sugar, what to eat with prediabetes, diabetes diet"
        image="/images/prediabetes-diet-og.png"
        url="/prediabetes-diet"
      />
      <main className="min-h-screen bg-white font-sans text-gray-800">
        
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/reverse-prediabetes" className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plan
            </Link>
            <span className="bg-emerald-500/20 text-emerald-100 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
              Step 1 of 5
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Master Your Diet
            </h1>
            <p className="text-2xl text-emerald-100 mb-4">The Prediabetes Diet Guide</p>
            <p className="text-xl text-emerald-50 leading-relaxed max-w-2xl">
              Diet is 70% of blood sugar management. This complete guide shows you exactly what to eat, what to avoid, and how to build meals that stabilize glucose naturally.
            </p>
          </div>
        </section>

        {/* PROGRESS INDICATOR - 5 STEPS INLINE */}
        <section className="bg-emerald-50 border-b border-emerald-100 py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-semibold text-emerald-800 mb-4">Your Progress Through Reversal:</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Diet */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-emerald-700 text-sm">Diet</span>
              </div>
              
              <div className="w-8 h-1 bg-emerald-300"></div>
              
              {/* Exercise */}
              <Link to="/prediabetes-exercise" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <span className="font-semibold text-gray-600 hover:text-emerald-600 text-sm">Exercise</span>
              </Link>
              
              <div className="w-8 h-1 bg-gray-300"></div>
              
              {/* Monitor */}
              <Link to="/glucose-monitoring-tools" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <span className="font-semibold text-gray-600 hover:text-emerald-600 text-sm">Monitor</span>
              </Link>
              
              <div className="w-8 h-1 bg-gray-300"></div>
              
              {/* Supplements */}
              <Link to="/natural-blood-sugar" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <span className="font-semibold text-gray-600 hover:text-emerald-600 text-sm">Supplements</span>
              </Link>

              <div className="w-8 h-1 bg-gray-300"></div>

              {/* Sleep & Stress */}
              <Link to="/prediabetes-sleep-stress" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <span className="font-semibold text-gray-600 hover:text-emerald-600 text-sm">Sleep & Stress</span>
              </Link>
            </div>
          </div>
        </section>

        {/* STICKY NAVIGATION */}
        <div className="sticky top-0 z-20 bg-emerald-50 border-b border-emerald-100 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-4 text-sm font-semibold text-emerald-800 whitespace-nowrap">
              <button onClick={() => scrollToSection('foods-to-eat')} className="hover:text-emerald-600">Foods to Eat</button>
              <button onClick={() => scrollToSection('foods-to-avoid')} className="hover:text-emerald-600">Foods to Avoid</button>
              <button onClick={() => scrollToSection('timing')} className="hover:text-emerald-600">Meal Timing</button>
              <button onClick={() => scrollToSection('7-day-plan')} className="hover:text-emerald-600">7-Day Plan</button>
              <button onClick={() => scrollToSection('shopping-list')} className="hover:text-emerald-600">Shopping List</button>
            </div>
          </div>
        </div>

        {/* WHY DIET MATTERS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Diet is 70% of Reversal</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Food directly controls your blood sugar spikes. The right choices can lower A1C by 0.5-1.0% in weeks—without medication.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: '70%', desc: 'Of blood sugar control comes from diet' },
                { stat: '30-50%', desc: 'Reduction in post-meal spikes with smart choices' },
                { stat: '2-4 Weeks', desc: 'To see fasting glucose improvements' },
              ].map((item, i) => (
                <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">{item.stat}</p>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOODS TO EAT */}
        <section id="foods-to-eat" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods to Eat</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Focus on low-GI foods that stabilize blood sugar. Aim for 50% veggies, 25% protein, 25% whole grains.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Vegetables',
                  items: ['Broccoli', 'Spinach', 'Kale', 'Zucchini', 'Cauliflower', 'Brussels sprouts']
                },
                {
                  category: 'Proteins',
                  items: ['Chicken', 'Fish', 'Eggs', 'Tofu', 'Greek yogurt', 'Lentils']
                },
                {
                  category: 'Healthy Fats',
                  items: ['Avocados', 'Nuts', 'Seeds', 'Olive oil', 'Fatty fish', 'Chia seeds']
                },
              ].map((section, i) => (
                <div key={i} className="bg-white border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Apple className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-lg text-gray-900">{section.category}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOODS TO AVOID */}
        <section id="foods-to-avoid" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods to Avoid</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Limit high-GI foods that cause spikes. Replace with whole food alternatives.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Sugary Drinks',
                  items: ['Soda', 'Juice', 'Sports drinks', 'Sweetened tea'],
                  alternative: 'Water, herbal tea, black coffee'
                },
                {
                  title: 'Refined Carbs',
                  items: ['White bread', 'Pasta', 'White rice', 'Pastries'],
                  alternative: 'Whole grains, quinoa, sweet potatoes'
                },
              ].map((section, i) => (
                <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Utensils className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-lg text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-4 h-4 text-red-600 font-bold">✗</div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-emerald-700 font-semibold">
                    Better: {section.alternative}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEAL TIMING */}
        <section id="timing" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meal Timing & Strategies</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              When you eat matters as much as what you eat. These strategies can lower daily glucose by 20-30%.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Start with Protein & Fiber',
                  desc: 'Begin meals with veggies/protein to reduce carb absorption by 40%.',
                  tip: 'Eat salad first, then carbs last.'
                },
                {
                  title: 'Post-Meal Movement',
                  desc: 'A 10-minute walk after eating lowers glucose spikes by 22%.',
                  tip: 'Set a timer after meals.'
                },
                {
                  title: 'Vinegar Hack',
                  desc: '1-2 tbsp apple cider vinegar before meals reduces spikes by 20-30%.',
                  tip: 'Dilute in water or add to salad.'
                },
              ].map((strategy, i) => (
                <div key={i} className="flex gap-4 bg-white border border-emerald-200 rounded-xl p-6">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{strategy.title}</h3>
                    <p className="text-gray-700 mb-2">{strategy.desc}</p>
                    <p className="text-sm text-emerald-700 font-semibold">Pro Tip: {strategy.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7-DAY MEAL PLAN */}
        <section id="7-day-plan" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Meal Plan</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Simple, balanced meals under 50g carbs per meal. Adjust portions to your needs.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Day</th>
                    <th className="p-4 text-left">Breakfast</th>
                    <th className="p-4 text-left">Lunch</th>
                    <th className="p-4 text-left">Dinner</th>
                    <th className="p-4 text-left">Snack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      day: 'Day 1',
                      breakfast: 'Greek yogurt with berries & almonds',
                      lunch: 'Grilled chicken salad with veggies',
                      dinner: 'Baked salmon & broccoli',
                      snack: 'Apple with peanut butter'
                    },
                    {
                      day: 'Day 2',
                      breakfast: 'Veggie omelet with spinach',
                      lunch: 'Turkey wrap in lettuce',
                      dinner: 'Stir-fry tofu & veggies',
                      snack: 'Carrot sticks & hummus'
                    },
                    {
                      day: 'Day 3',
                      breakfast: 'Chia pudding with nuts',
                      lunch: 'Quinoa salad with feta',
                      dinner: 'Grilled fish & asparagus',
                      snack: 'Greek yogurt'
                    },
                    {
                      day: 'Day 4',
                      breakfast: 'Avocado toast on whole grain',
                      lunch: 'Lentil soup with salad',
                      dinner: 'Chicken stir-fry',
                      snack: 'Handful of nuts'
                    },
                    {
                      day: 'Day 5',
                      breakfast: 'Smoothie with spinach & protein',
                      lunch: 'Tuna salad',
                      dinner: 'Veggie stir-fry with tofu',
                      snack: 'Celery & almond butter'
                    },
                    {
                      day: 'Day 6',
                      breakfast: 'Eggs with avocado',
                      lunch: 'Chickpea salad',
                      dinner: 'Baked chicken & greens',
                      snack: 'Berries'
                    },
                    {
                      day: 'Day 7',
                      breakfast: 'Oatmeal with nuts',
                      lunch: 'Veggie wrap',
                      dinner: 'Salmon & cauliflower',
                      snack: 'Cheese stick'
                    },
                  ].map((day, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="p-4 font-semibold text-emerald-600">{day.day}</td>
                      <td className="p-4 text-gray-700">{day.breakfast}</td>
                      <td className="p-4 text-gray-700">{day.lunch}</td>
                      <td className="p-4 text-gray-700">{day.dinner}</td>
                      <td className="p-4 text-gray-700">{day.snack}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SAMPLE RECIPES */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Recipes</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Quick, easy recipes that keep blood sugar stable.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Protein Berry Smoothie',
                  time: '5 min',
                  ingredients: ['Greek yogurt', 'Mixed berries', 'Spinach', 'Protein powder', 'Almond milk'],
                  steps: ['Blend all ingredients', 'Add ice if desired', 'Serve immediately']
                },
                {
                  name: 'Chickpea Power Salad',
                  time: '10 min',
                  ingredients: ['Chickpeas', 'Mixed greens', 'Cucumber', 'Tomato', 'Feta', 'Olive oil & vinegar'],
                  steps: ['Combine all greens and veggies', 'Add chickpeas and feta', 'Dress with olive oil & vinegar']
                },
              ].map((recipe, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900">{recipe.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-emerald-600 font-semibold">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Ingredients:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {recipe.ingredients.map((ing, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-emerald-600 rounded-full"></span>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Steps:</p>
                    <ol className="text-sm text-gray-700 space-y-1">
                      {recipe.steps.map((step, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="font-bold text-emerald-600 flex-shrink-0">{j + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHOPPING LIST */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Weekly Shopping List Template</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Proteins',
                  items: ['Chicken breasts', 'Ground turkey', 'Salmon fillets', 'Eggs', 'Greek yogurt', 'Cottage cheese']
                },
                {
                  category: 'Vegetables',
                  items: ['Spinach', 'Broccoli', 'Bell peppers', 'Zucchini', 'Asparagus', 'Cauliflower', 'Green beans']
                },
                {
                  category: 'Pantry Staples',
                  items: ['Olive oil', 'Whole wheat bread', 'Brown rice', 'Oats', 'Canned beans', 'Herbs & spices']
                },
              ].map((section, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ShoppingCart className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-lg text-gray-900">{section.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-700">
                        <input type="checkbox" className="w-4 h-4 text-emerald-600 cursor-pointer" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CTA - NEXT STEP */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <Zap className="w-12 h-12 text-emerald-200 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready for Step 2?</h2>
            <p className="text-emerald-100 mb-8 text-lg">
              You've mastered what to eat. Now it's time to master how to move to maximize your results.
            </p>
            <Link 
              to="/prediabetes-exercise" 
              className="inline-flex items-center justify-center gap-2 bg-emerald-200 text-emerald-900 font-bold px-10 py-4 rounded-xl hover:bg-white transition shadow-lg text-lg"
            >
              Continue to Step 2: Movement Guide
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}