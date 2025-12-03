// src/pages/natural-blood-sugar.tsx
import { Link } from 'react-router-dom';
// FIX: Added missing icons Pill and Activity back to the import list
import { Leaf, Apple, Coffee, Droplet, Pill, Activity, ArrowRight, CheckCircle } from 'lucide-react';

export default function NaturalBloodSugar() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left - Text */}
            <div className="order-2 md:order-1">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Natural Remedies Guide 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Natural Blood Sugar Control
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Science-Backed Herbs, Foods & Lifestyle Strategies for Healthy Glucose Levels
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Discover the most effective natural approaches to maintaining healthy blood sugar—from powerful herbs and spices to dietary strategies proven by research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#top-remedies" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                  View Top Remedies
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link to="/categories/natural-blood-sugar" className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition">
                  Browse All Resources
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
                <img
                  src="/images/natural-blood-sugar-hero.webp"
                  alt="Natural blood sugar control with herbs and healthy foods"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop';
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
              { title: 'Why Choose Natural Approaches?', link: '#why-natural' },
              { title: 'Top 10 Blood Sugar Herbs', link: '#top-herbs' },
              { title: 'Foods That Lower Blood Sugar', link: '#foods' },
              { title: 'Spices & Extracts', link: '#spices' },
              { title: 'Lifestyle Strategies', link: '#lifestyle' },
              { title: 'Supplements Guide', link: '#supplements' },
              { title: 'How to Combine Approaches', link: '#combining' },
              { title: 'Safety & Precautions', link: '#safety' },
              { title: 'Success Stories', link: '#stories' },
              { title: 'Getting Started Plan', link: '#getting-started' },
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

          {/* Section 1: Why Natural */}
          <section id="why-natural" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Natural Approaches?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Natural blood sugar management isn't about replacing medical care—it's about supporting your body's natural glucose regulation through evidence-based nutrition and lifestyle choices.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 my-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Natural Approaches:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Fewer side effects than medications',
                  'Support overall metabolic health',
                  'Can work alongside medical treatment',
                  'Often improve multiple health markers',
                  'Sustainable for long-term use',
                  'Address root causes, not just symptoms',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-emerald-600 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Top Herbs */}
          <section id="top-herbs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top 5 Science-Backed Blood Sugar Herbs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                // Pill is used here
                { name: 'Berberine', icon: Pill, benefit: 'Lowers fasting blood glucose and A1C, comparable to prescription drugs.', dosage: '500mg, 3x daily', evidence: 'Strong evidence' },
                { name: 'Cinnamon', icon: Coffee, benefit: 'Improves insulin sensitivity and reduces fasting glucose slightly.', dosage: '1-6g daily', evidence: 'Moderate evidence' },
                // Activity is used here
                { name: 'Alpha-Lipoic Acid (ALA)', icon: Activity, benefit: 'Improves insulin sensitivity and may protect nerve health.', dosage: '600-1800mg daily', evidence: 'Strong evidence' },
                { name: 'Chromium', icon: Droplet, benefit: 'Enhances insulin action, primarily for those with a deficiency.', dosage: '200-1000mcg daily', evidence: 'Good preliminary data' },
                { name: 'Gymnema Sylvestre', icon: Leaf, benefit: 'Reduces sugar cravings and blocks sugar absorption in the intestine.', dosage: '200-400mg daily', evidence: 'Moderate support' },
              ].map((herb, i) => (
                <div key={i} className="bg-white border-2 border-emerald-200 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <herb.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{herb.name}</h3>
                      <p className="text-gray-700 mb-3 text-sm">{herb.benefit}</p>
                      <p className="text-sm font-semibold text-emerald-700">Dosage: {herb.dosage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Foods That Lower Blood Sugar */}
          <section id="foods" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Foods for Glucose Control</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              These foods have a low glycemic index and high fiber content, making them essential for slowing down sugar absorption and preventing spikes.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Box 1: Vegetables */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                  Non-Starchy Vegetables
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Broccoli</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Spinach & Kale</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Asparagus</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Bell Peppers</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">Tip: Aim to fill half your plate with these.</p>
              </div>

              {/* Box 2: Low-Glycemic Fruits */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Apple className="w-6 h-6 text-emerald-600" />
                  Berries & High-Fiber Fruits
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Blueberries</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Strawberries</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Raspberries</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Avocados</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">Fiber and antioxidants slow glucose absorption.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Spices & Extracts */}
          <section id="spices" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Spices & Extracts for Daily Use</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Apple Cider Vinegar (ACV)', use: 'Take 1 tbsp in water before a high-carb meal.', benefit: 'Can reduce post-meal glucose spikes by up to 20%.' },
                { name: 'Turmeric (Curcumin)', use: 'Add to smoothies, curries, or take as a supplement.', benefit: 'Strong anti-inflammatory effect that improves insulin sensitivity.' },
                { name: 'Fenugreek Seeds', use: 'Soak and consume seeds, or use powder in meals.', benefit: 'Contains soluble fiber that slows carbohydrate digestion and absorption.' },
              ].map((spice, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{spice.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">**How to Use:** {spice.use}</p>
                  <p className="text-emerald-700 font-medium text-sm">{spice.benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Lifestyle Strategies */}
          <section id="lifestyle" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle Strategies</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Natural remedies work best when combined with these evidence-based lifestyle practices:
            </p>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Post-Meal Movement</h3>
                <p className="text-gray-700 mb-2">A 10-15 minute walk after meals can reduce glucose spikes by up to 30%. Muscle contraction helps soak up excess blood sugar.</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Prioritize Protein and Fiber</h3>
                <p className="text-gray-700 mb-2">Always eat protein and fiber *before* carbohydrates in a meal. This is a simple trick to blunt the glucose response.</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Manage Stress & Sleep</h3>
                <p className="text-gray-700 mb-2">Poor sleep and high stress raise cortisol, which directly increases blood sugar. Prioritize 7-9 hours of sleep and stress-reduction techniques.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Supplements Guide */}
          <section id="supplements" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Supplements: Which Ones Are Worth It?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              While whole foods and lifestyle are the foundation, targeted supplements can bridge nutritional gaps and provide therapeutic doses of powerful compounds.
            </p>

            {/* CTA to Reviews */}
            <div className="bg-emerald-600 text-white rounded-xl p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Find Quality Supplements?</h3>
              <p className="text-lg mb-6 text-emerald-50">
                View our evidence-based reviews of the best natural blood sugar supplements
              </p>
              <Link to="/supplements/best-natural-sugar" className="inline-flex items-center gap-2 bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition shadow-md">
                See Our Top-Rated List
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Section 7: Getting Started Plan */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your 1-Day Getting Started Plan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Morning</h4>
                    <p className="text-gray-700">Berberine 500mg + glass of water with lemon</p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Breakfast</h4>
                    <p className="text-gray-700">Greek yogurt + berries + cinnamon + chia seeds</p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Mid-Morning</h4>
                    <p className="text-gray-700">Green tea + handful of almonds</p>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Before Lunch</h4>
                    <p className="text-gray-700">1 tbsp apple cider vinegar in water</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Step 5 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Lunch</h4>
                    <p className="text-gray-700">Large spinach salad + chicken breast + olive oil dressing</p>
                  </div>
                </div>
                {/* Step 6 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Post-Lunch</h4>
                    <p className="text-gray-700">15-minute brisk walk</p>
                  </div>
                </div>
                {/* Step 7 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">7</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dinner</h4>
                    <p className="text-gray-700">Salmon + steamed broccoli + small serving of brown rice</p>
                  </div>
                </div>
                {/* Step 8 */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">8</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Night</h4>
                    <p className="text-gray-700">Magnesium supplement (essential for sleep & glucose)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Links */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/categories/insulin-resistance-management" className="block p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
                <h3 className="font-bold text-xl text-emerald-700">Insulin Resistance Guide →</h3>
                <p className="text-gray-600 text-sm mt-1">A deep dive into cellular sensitivity.</p>
              </Link>
              <Link to="/blog/cinnamon-for-blood-sugar" className="block p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
                <h3 className="font-bold text-xl text-emerald-700">Cinnamon: The Full Research →</h3>
                <p className="text-gray-600 text-sm mt-1">Dosage, safety, and forms of cinnamon.</p>
              </Link>
              <Link to="/supplements/best-berberine" className="block p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
                <h3 className="font-bold text-xl text-emerald-700">Top Berberine Supplements →</h3>
                <p className="text-gray-600 text-sm mt-1">Our #1 ranked affiliate review for 2025.</p>
              </Link>
            </div>
          </section>

        </div>
      </article>

    </main>
  );
}