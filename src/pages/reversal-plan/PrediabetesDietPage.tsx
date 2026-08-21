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
  Moon,
  AlertTriangle,
  Info
} from 'lucide-react';
import { SEO } from "@/components/seo/SEO";

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
              Diet is the foundation of blood sugar management. This complete guide shows you exactly what to eat, what to avoid, and how to build meals that stabilize glucose naturally.
            </p>
          </div>
        </section>

        {/* ── MEDICAL DISCLAIMER ── */}
        <section className="bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4 max-w-4xl py-5">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">Medical Disclaimer</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  The information on this page is provided for general educational purposes only and is <strong>not a substitute for professional medical advice, diagnosis, or treatment.</strong> Always consult your doctor, registered dietitian, or qualified healthcare provider before making significant changes to your diet, especially if you have been diagnosed with prediabetes, diabetes, or any other health condition. Individual results vary. Never disregard professional medical advice or delay seeking it because of something you have read here.
                </p>
              </div>
            </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Diet is Central to Reversal</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Food directly influences your blood sugar response. Research shows that sustained dietary changes can meaningfully lower HbA1c and improve insulin sensitivity—often without medication—when combined with a healthy lifestyle.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: 'Up to 1.5%', desc: 'Potential HbA1c reduction from diet & lifestyle changes (results vary)' },
                { stat: '20–30%', desc: 'Reduction in post-meal glucose spikes with smart food ordering' },
                { stat: '4–12 Weeks', desc: 'Typical timeframe to see measurable fasting glucose improvements' },
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
              Focus on low-glycemic, nutrient-dense foods that slow glucose absorption. A practical starting point: fill half your plate with non-starchy vegetables, a quarter with lean protein, and a quarter with whole-grain carbohydrates.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Non-Starchy Vegetables',
                  items: ['Broccoli', 'Spinach', 'Kale', 'Zucchini', 'Cauliflower', 'Brussels sprouts', 'Bell peppers', 'Cucumber']
                },
                {
                  category: 'Lean Proteins',
                  items: ['Skinless chicken or turkey', 'Fatty fish (salmon, sardines)', 'Eggs', 'Tofu & tempeh', 'Plain Greek yogurt', 'Legumes (lentils, chickpeas)']
                },
                {
                  category: 'Healthy Fats',
                  items: ['Avocados', 'Mixed nuts (unsalted)', 'Seeds (chia, flax, pumpkin)', 'Extra-virgin olive oil', 'Fatty fish', 'Nut butters (no added sugar)']
                },
                {
                  category: 'Whole Grains & Legumes',
                  items: ['Oats (rolled or steel-cut)', 'Quinoa', 'Brown rice (small portions)', 'Whole-grain bread & pasta', 'Barley', 'Black beans & lentils']
                },
                {
                  category: 'Low-Glycemic Fruits',
                  items: ['Berries (blueberries, strawberries)', 'Cherries', 'Apples (with skin)', 'Pears', 'Grapefruit', 'Kiwi']
                },
                {
                  category: 'Beneficial Beverages',
                  items: ['Water (still or sparkling)', 'Unsweetened green or herbal tea', 'Black coffee (moderate)', 'Apple cider vinegar water (diluted)', 'Low-fat milk or unsweetened plant milk']
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
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Foods to Limit or Avoid</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              These foods cause rapid blood sugar spikes or worsen insulin resistance. You don't need to eliminate them permanently—but limiting them significantly supports reversal.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Sugary Drinks',
                  items: ['Soda & cola', 'Fruit juice (even 100% juice)', 'Sports & energy drinks', 'Sweetened teas & coffees', 'Flavored water with added sugar'],
                  alternative: 'Still or sparkling water, unsweetened herbal tea, black coffee'
                },
                {
                  title: 'Refined & Processed Carbs',
                  items: ['White bread & white rice', 'Regular pasta', 'Pastries, cakes & cookies', 'Bagels & croissants', 'Breakfast cereals with added sugar'],
                  alternative: 'Whole-grain bread, brown rice, quinoa, oats, sweet potato'
                },
                {
                  title: 'Ultra-Processed Foods',
                  items: ['Packaged chips & crackers', 'Fast food & fried foods', 'Frozen ready meals (high sodium)', 'Candy & sweets', 'Flavored yogurts with added sugar'],
                  alternative: 'Whole foods, home-cooked meals, plain Greek yogurt with fresh fruit'
                },
                {
                  title: 'Alcohol & Hidden Sugars',
                  items: ['Beer & sweet wines', 'Cocktails with mixers', 'Condiments with added sugar (ketchup, BBQ sauce)', 'Flavored protein bars (check labels)', 'Dried fruit in large quantities'],
                  alternative: 'Dry red wine (occasional, small amounts), fresh herbs & spices, whole fruit'
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
                        <div className="w-4 h-4 text-red-600 font-bold flex-shrink-0">✗</div>
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
              When you eat matters alongside what you eat. These evidence-informed strategies can meaningfully reduce post-meal glucose spikes.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Start with Protein & Fiber',
                  desc: 'Eating vegetables and protein before carbohydrates at the same meal has been shown in studies to significantly blunt post-meal glucose and insulin responses.',
                  tip: 'Eat your salad or protein first—then move on to carbs at the same sitting.'
                },
                {
                  title: 'Post-Meal Movement',
                  desc: 'Even a short 10–15 minute walk after eating can lower post-meal blood glucose by helping muscles take up glucose without needing extra insulin.',
                  tip: 'Set a timer for 10 minutes after finishing your meal and take a gentle walk.'
                },
                {
                  title: 'Apple Cider Vinegar Before Meals',
                  desc: 'Some small studies suggest that diluted apple cider vinegar consumed before a meal may modestly reduce post-meal glucose. Evidence is preliminary—consult your doctor before using regularly.',
                  tip: 'Mix 1–2 tsp (not tablespoons) in a large glass of water before meals. Do not take undiluted.'
                },
                {
                  title: 'Consistent Meal Timing',
                  desc: 'Eating at irregular times disrupts your body\'s internal clock and can worsen glucose regulation. Consistent mealtimes help keep cortisol and insulin rhythms stable.',
                  tip: 'Try to eat breakfast, lunch, and dinner within the same 1-hour window each day.'
                },
                {
                  title: 'Avoid Late-Night Eating',
                  desc: 'Insulin sensitivity is naturally lower in the evening. Eating large meals close to bedtime is associated with higher blood sugar and disrupted sleep.',
                  tip: 'Aim to finish your last meal at least 2–3 hours before sleep.'
                },
              ].map((strategy, i) => (
                <div key={i} className="flex gap-4 bg-white border border-emerald-200 rounded-xl p-6">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7-Day Sample Meal Plan</h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              A balanced starting point — not a rigid prescription. Carbohydrate needs vary by individual; work with a registered dietitian to personalise portions to your goals and health status.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">This meal plan is a <strong>general example only</strong> and is not tailored to individual calorie or carbohydrate targets. Consult a registered dietitian for personalised guidance.</p>
            </div>
            
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
                      breakfast: 'Plain Greek yogurt with mixed berries & almonds',
                      lunch: 'Grilled chicken salad with olive oil & lemon',
                      dinner: 'Baked salmon with steamed broccoli & quinoa',
                      snack: 'Apple slices with natural peanut butter'
                    },
                    {
                      day: 'Day 2',
                      breakfast: 'Veggie omelet (spinach, peppers, mushrooms)',
                      lunch: 'Turkey & avocado lettuce wrap',
                      dinner: 'Stir-fry tofu with mixed vegetables & brown rice',
                      snack: 'Carrot & celery sticks with hummus'
                    },
                    {
                      day: 'Day 3',
                      breakfast: 'Chia seed pudding (unsweetened almond milk) topped with walnuts',
                      lunch: 'Quinoa & roasted veggie salad with feta',
                      dinner: 'Grilled white fish with asparagus & olive oil',
                      snack: 'Plain Greek yogurt with a few berries'
                    },
                    {
                      day: 'Day 4',
                      breakfast: 'Avocado on whole-grain toast with a poached egg',
                      lunch: 'Red lentil soup with a side salad',
                      dinner: 'Chicken stir-fry with bok choy & cauliflower rice',
                      snack: 'Small handful of mixed unsalted nuts'
                    },
                    {
                      day: 'Day 5',
                      breakfast: 'Spinach & protein smoothie (unsweetened plant milk, mixed berries)',
                      lunch: 'Tuna salad (olive oil, lemon) over mixed greens',
                      dinner: 'Tofu & vegetable stir-fry with soba noodles',
                      snack: 'Celery with almond butter (no added sugar)'
                    },
                    {
                      day: 'Day 6',
                      breakfast: 'Scrambled eggs with sautéed spinach & avocado',
                      lunch: 'Chickpea & cucumber salad with herbs',
                      dinner: 'Baked chicken thigh (skinless) with roasted greens',
                      snack: 'Fresh mixed berries'
                    },
                    {
                      day: 'Day 7',
                      breakfast: 'Steel-cut oats with chia seeds, cinnamon & walnuts',
                      lunch: 'Grilled veggie wrap in a whole-grain tortilla',
                      dinner: 'Baked salmon with roasted cauliflower & side salad',
                      snack: 'Cottage cheese with cucumber slices'
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
              Quick, easy recipes designed to keep blood sugar stable.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Protein Berry Smoothie',
                  time: '5 min',
                  ingredients: ['Plain Greek yogurt (½ cup)', 'Mixed frozen berries (½ cup)', 'Handful of spinach', 'Unsweetened protein powder (1 scoop)', 'Unsweetened almond milk (1 cup)', 'Ice (optional)'],
                  steps: ['Add all ingredients to a blender', 'Blend until smooth — add more almond milk to reach desired consistency', 'Serve immediately']
                },
                {
                  name: 'Chickpea Power Salad',
                  time: '10 min',
                  ingredients: ['Canned chickpeas, rinsed (½ cup)', 'Mixed salad greens (2 cups)', 'Cucumber, diced', 'Cherry tomatoes, halved', 'Crumbled feta (1 tbsp)', 'Extra-virgin olive oil & red wine vinegar'],
                  steps: ['Combine greens, cucumber, and tomatoes in a bowl', 'Add chickpeas and crumbled feta', 'Drizzle with olive oil and vinegar; toss and serve']
                },
                {
                  name: 'Baked Salmon with Roasted Broccoli',
                  time: '25 min',
                  ingredients: ['Salmon fillet (150g)', 'Broccoli florets (2 cups)', 'Olive oil (1 tbsp)', 'Garlic (1 clove, minced)', 'Lemon juice, salt & pepper'],
                  steps: ['Preheat oven to 200°C / 400°F', 'Toss broccoli with olive oil, garlic, salt & pepper; spread on a baking tray', 'Place salmon alongside; season with lemon, salt & pepper', 'Bake for 18–20 minutes until salmon flakes easily']
                },
                {
                  name: 'Overnight Chia Oats',
                  time: '5 min + overnight',
                  ingredients: ['Rolled oats (½ cup)', 'Chia seeds (1 tbsp)', 'Unsweetened almond milk (1 cup)', 'Cinnamon (¼ tsp)', 'Blueberries & walnuts to serve'],
                  steps: ['Stir oats, chia seeds, almond milk, and cinnamon in a jar', 'Cover and refrigerate overnight (at least 6 hours)', 'In the morning, stir well and top with blueberries and walnuts']
                },
              ].map((recipe, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900">{recipe.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-emerald-600 font-semibold whitespace-nowrap ml-2">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Ingredients:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {recipe.ingredients.map((ing, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
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
        <section id="shopping-list" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Weekly Shopping List Template</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Proteins',
                  items: ['Chicken breasts (skinless)', 'Ground turkey', 'Salmon fillets', 'Eggs', 'Plain Greek yogurt', 'Cottage cheese', 'Firm tofu', 'Canned tuna in water']
                },
                {
                  category: 'Vegetables',
                  items: ['Spinach / baby kale', 'Broccoli', 'Bell peppers', 'Zucchini', 'Asparagus', 'Cauliflower', 'Green beans', 'Cucumber', 'Cherry tomatoes']
                },
                {
                  category: 'Pantry Staples',
                  items: ['Extra-virgin olive oil', 'Whole-grain bread', 'Brown rice or quinoa', 'Rolled oats (no added sugar)', 'Canned chickpeas / black beans', 'Chia seeds', 'Mixed unsalted nuts', 'Apple cider vinegar', 'Herbs & spices (cinnamon, cumin, turmeric)']
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

        {/* ── AFFILIATE DISCLOSURE ── */}
        <section className="bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl py-6">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-700 mb-1">Affiliate Disclosure</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Some links on this page may be affiliate links. This means that if you click a link and make a purchase, Thrive may earn a small commission at <strong>no extra cost to you</strong>. We only recommend products and services we genuinely believe may be helpful for people managing prediabetes. Affiliate relationships do not influence our editorial content or the dietary information provided on this page. Please read our full{' '}
                  <Link to="/affiliate-disclosure" className="underline text-emerald-700 hover:text-emerald-600">
                    Affiliate Disclosure Policy
                  </Link>{' '}
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CTA - NEXT STEP */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <Zap className="w-12 h-12 text-emerald-200 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready for Step 2?</h2>
            <p className="text-emerald-100 mb-8 text-lg">
              You've built your dietary foundation. Now it's time to learn how movement can accelerate your results.
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