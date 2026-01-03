import { useParams, Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowLeft, Clock, User, Zap } from 'lucide-react';
import { SEO } from '../components/SEO';

const BlogArticlePage = () => {
  const { topic } = useParams();

  const articles: Record<string, any> = {
    'prediabetes-warning-signs': {
      title: '5 Warning Signs of Prediabetes (And What to Do About It)',
      description: 'Learn the 8 early warning signs of prediabetes you shouldn\'t ignore. Recognize symptoms like fatigue, skin tags, dark patches & constant hunger. Get tested today.',
      category: 'Prediabetes Support',
      readTime: '8 min read',
      image: '/images/prediabetes-signs-og.png',
      url: '/blog/prediabetes-warning-signs',
      keywords: 'prediabetes signs, prediabetes symptoms, blood sugar symptoms, diabetes warning signs, early warning signs',
      content: [
        {
          heading: 'What is Prediabetes?',
          text: 'Prediabetes is a condition where your blood sugar is higher than normal but not yet high enough to be Type 2 Diabetes. The good news? It\'s completely reversible with the right approach. About 96 million American adults have prediabetes, and most don\'t know it.'
        },
        {
          heading: '1. Increased Thirst & Frequent Urination',
          text: 'When blood sugar rises, your kidneys work harder to filter excess glucose from your blood. This pulls water from your tissues, making you feel thirsty even when you\'ve had plenty to drink. You might also notice you\'re urinating more frequently, especially at night.'
        },
        {
          heading: '2. Unexplained Fatigue & Low Energy',
          text: 'If you\'re getting enough sleep but still feel exhausted, it could be prediabetes. When cells can\'t use glucose properly (due to insulin resistance), your body can\'t produce energy efficiently. This leads to afternoon crashes and difficulty focusing.'
        },
        {
          heading: '3. Blurred Vision',
          text: 'High blood sugar causes the lens of your eye to swell, which disrupts your ability to focus. This blurring is usually painless and may come and go. If you notice sudden vision changes, see your doctor for testing.'
        },
        {
          heading: '4. Slow-Healing Cuts or Sores',
          text: 'High glucose levels impair blood flow and nerve function, which slows down the healing process. A small cut that normally heals in a week might take 2-3 weeks. Pay attention to any wounds that aren\'t healing as expected.'
        },
        {
          heading: '5. Dark Patches of Skin (Acanthosis Nigricans)',
          text: 'One of the most visible signs is dark, velvety patches of skin, usually on the neck, armpits, or groin. This is called acanthosis nigricans and signals high insulin levels. If you notice these patches, it\'s time to get tested.'
        },
        {
          heading: 'The Lab Numbers That Matter',
          text: 'The most important thing to know: Many people with prediabetes have NO symptoms. That\'s why testing is crucial. Ask your doctor for these three tests:\n\n• Fasting Glucose: 100-125 mg/dL = Prediabetes\n• A1C Level: 5.7%-6.4% = Prediabetes\n• Fasting Insulin: >12 mIU/L = Insulin Resistance\n\nYou might feel perfectly fine and still have prediabetes. This is why it\'s called the "silent" condition.'
        },
        {
          heading: 'What to Do Right Now',
          text: 'If you recognize any of these signs:\n\n1. Schedule a doctor appointment and ask for prediabetes screening\n2. Don\'t panic—prediabetes is reversible\n3. Follow the 5-step reversal plan: Diet → Exercise → Monitoring → Supplements → Sleep & Stress\n4. You can return to normal glucose levels within 6-12 months with consistent effort\n\nThe time to act is now, before prediabetes becomes Type 2 Diabetes.'
        },
      ],
      resources: [
        'Schedule your fasting glucose test',
        'Get your A1C checked',
        'Follow the 5-step reversal plan',
        'Track your progress with a glucose meter'
      ]
    },
    'best-foods-blood-sugar': {
      title: 'The Best Foods for Blood Sugar Control: Complete Guide',
      description: 'Complete prediabetes diet guide. Learn which foods stabilize blood sugar, meal timing strategies, and a 7-day meal plan to reverse prediabetes naturally.',
      category: 'Diet & Blood Sugar',
      readTime: '10 min read',
      image: '/images/prediabetes-diet-og.png',
      url: '/blog/best-foods-blood-sugar',
      keywords: 'prediabetes diet, blood sugar diet, foods for blood sugar, what to eat with prediabetes, diabetes diet',
      content: [
        {
          heading: 'Why Food Choices Matter Most',
          text: 'Diet is responsible for 70% of blood sugar management. The foods you eat directly determine your glucose levels and how your body produces insulin. Even small dietary changes can lead to dramatic improvements in your A1C within weeks.'
        },
        {
          heading: 'The Plate Rule: Your Foundation',
          text: 'Fill half your plate with non-starchy vegetables (broccoli, spinach, peppers). Fill one quarter with lean protein (chicken, fish, eggs, beans). Fill one quarter with whole grains or legumes (brown rice, quinoa, lentils). This simple ratio stabilizes blood sugar naturally.'
        },
        {
          heading: 'Best Vegetables (Unlimited)',
          text: 'Eat as many non-starchy vegetables as you want. They have minimal impact on blood sugar while providing fiber, nutrients, and satiety. Best choices: leafy greens (spinach, kale), cruciferous vegetables (broccoli, cauliflower), and colorful peppers (red, yellow, orange).'
        },
        {
          heading: 'Best Proteins (25-30g per meal)',
          text: 'Protein slows digestion and prevents blood sugar spikes. Include protein at every meal: chicken breast, turkey, fatty fish (salmon, mackerel), eggs, Greek yogurt, cottage cheese, and plant-based options like tofu and tempeh. Aim for 25-30g protein per meal.'
        },
        {
          heading: 'Best Healthy Fats',
          text: 'Fat slows carb absorption and improves satiety. Include: olive oil, avocado, nuts (almonds, walnuts), seeds (chia, flax), and fatty fish. These fats are heart-healthy and support stable energy throughout the day.'
        },
        {
          heading: 'Best Whole Grains (Limited Portions)',
          text: 'Choose whole grains over refined carbs. Options: steel-cut oats, quinoa, brown rice, whole wheat bread (one slice), and legumes (beans, lentils). These contain fiber which slows glucose absorption. Limit portions to 1/4 of your plate.'
        },
        {
          heading: 'Low-Glycemic Fruits (1-2 servings daily)',
          text: 'Fruits are nutrient-dense but contain natural sugar. Choose low-glycemic options: berries (blueberries, raspberries), apples, pears, and oranges. Always eat fruit with protein or fat to slow sugar absorption. Avoid high-glycemic fruits like bananas, raisins, and dried fruit.'
        },
        {
          heading: 'Foods to Avoid (The Big Offenders)',
          text: 'These spike blood sugar rapidly and should be eliminated:\n\n• Refined carbs: white bread, white rice, pastries\n• Sugary drinks: soda, juice, energy drinks\n• Sweets: candy, cookies, cakes, ice cream\n• Processed foods: fast food, chips, frozen meals\n• Added sugars: desserts, sweetened cereals, chocolate bars\n\nThese foods cause blood sugar spikes, trigger excess insulin production, and accelerate prediabetes progression.'
        },
        {
          heading: 'Meal Timing Tips',
          text: 'When you eat matters as much as what you eat:\n\n• Eat protein and vegetables first (slows carb absorption)\n• Save starches for last\n• Walk for 10 minutes after meals (reduces glucose spike by 20-30%)\n• Don\'t skip meals (irregular eating raises baseline glucose)\n• Eat within 30 minutes of waking (activates metabolism)'
        },
      ],
      resources: [
        'Download the printable food list',
        'Get sample meal plans',
        'Find 10 easy recipes',
        'Use a food tracking app'
      ]
    },
    'post-meal-walks': {
      title: 'Post-Meal Walks: The Most Powerful Blood Sugar Tool',
      description: 'Why 10 minutes after eating is the perfect time to walk. Science-backed timing and protocol for maximum glucose reduction.',
      category: 'Exercise & Movement',
      readTime: '7 min read',
      image: '/images/prediabetes-exercise-og.png',
      url: '/blog/post-meal-walks',
      keywords: 'prediabetes exercise, best exercises for blood sugar, strength training, walking for blood sugar control',
      content: [
        {
          heading: 'Why Post-Meal Walks Work',
          text: 'A 10-minute walk after eating is one of the most powerful tools for controlling blood sugar. When muscles contract, they pull glucose from your bloodstream WITHOUT requiring insulin. This simple action can reduce glucose spikes by 20-30% with zero side effects.'
        },
        {
          heading: 'The Science: Why the 5-Minute Window Matters',
          text: 'Glucose enters your bloodstream 15-30 minutes after eating. Walking within 5 minutes of finishing your meal means your muscles absorb glucose exactly when it\'s being absorbed from food. This prevents blood sugar from spiking in the first place—much more effective than walking later in the day.'
        },
        {
          heading: 'The Protocol: How to Do It Right',
          text: 'Step 1: Finish your meal. Step 2: Stand up immediately (don\'t wait). Step 3: Walk at a comfortable pace (you should be able to talk but not sing) for at least 10 minutes. Step 4: Ideally, continue walking for 15-20 minutes for maximum benefit. That\'s it. No gym required, no special equipment needed.'
        },
        {
          heading: 'Real Results: What to Expect',
          text: 'Users who add post-meal walks report:\n\n• Fasting glucose drops 10-20 mg/dL within 2-3 weeks\n• More stable energy throughout the day\n• Fewer afternoon crashes\n• Reduced cravings\n• Better sleep quality\n• A1C improvements within 6-8 weeks\n\nThis is measurable, real progress that shows your body is responding.'
        },
        {
          heading: 'The Weekly Schedule',
          text: 'Ideally, walk after all three meals (breakfast, lunch, dinner). This gives you 3 opportunities daily to control glucose. Even if you can\'t walk after every meal, aim for at least 2-3 post-meal walks daily. The more consistent you are, the faster your results.'
        },
        {
          heading: 'Why Walking Beats the Gym',
          text: 'You don\'t need a gym to reverse prediabetes. Walking is:\n\n• Accessible (you can do it anywhere)\n• Sustainable (people actually stick with it)\n• Effective (research proves post-meal walks lower glucose)\n• Low-injury (minimal joint stress)\n• Social (walk with a friend)\n• Free (no membership required)\n\nConsistency matters more than intensity. A daily walk beats sporadic intense exercise.'
        },
        {
          heading: 'Pro Tips for Success',
          text: 'Set a phone alarm for 5 minutes after finishing meals. Walk with a family member or friend (increases accountability). Wear comfortable shoes and appropriate clothing. Walk indoors if weather is bad. Use a fitness tracker to count steps and stay motivated. The goal is 10+ minutes, but more is always better.'
        },
      ],
      resources: [
        'Get the 30-day walking challenge',
        'Download meal timing guide',
        'Track your glucose improvements',
        'Join our walking community'
      ]
    },
    'cgm-vs-bgm': {
      title: 'CGM vs Blood Glucose Meter: Which Should You Use in 2025?',
      description: 'Complete guide to glucose monitoring devices. Compare CGM systems (Dexcom, Freestyle Libre) vs traditional meters. Reviews, buying guide, and app recommendations.',
      category: 'Glucose Monitoring',
      readTime: '9 min read',
      image: '/images/glucose-monitors-og.png',
      url: '/blog/cgm-vs-bgm',
      keywords: 'glucose monitor, CGM, continuous glucose monitor, blood glucose meter, Dexcom, FreeStyle Libre, glucose monitoring',
      content: [
        {
          heading: 'Why Monitoring Matters',
          text: 'You can\'t manage what you don\'t measure. Glucose monitoring gives you real data about how your body responds to different foods, exercises, and stress. This personalized insight is invaluable for reversing prediabetes.'
        },
        {
          heading: 'Blood Glucose Meters (BGM): The Traditional Choice',
          text: 'BGMs use a finger-prick test to measure glucose in a single moment. You get instant results (5-10 seconds). They\'re affordable ($20-50 for the device, $0.70-1.00 per test strip), portable, and easy to use. Best for: people who don\'t take insulin, stable blood sugar, checking 1-2 times daily.'
        },
        {
          heading: 'Continuous Glucose Monitors (CGM): The Future',
          text: 'CGMs are tiny sensors worn on your arm or abdomen that measure glucose every 1-15 minutes, 24/7. No finger pricks. You see real-time glucose trends, patterns, and alerts. Cost: $75-160/month. Best for: anyone wanting detailed data, seeing how foods affect you, preventing low blood sugar.'
        },
        {
          heading: 'BGM vs CGM: Direct Comparison',
          text: 'Cost: BGM wins ($20-60/month vs $75-160/month). Data Frequency: CGM wins (every 5-15 min vs only when you test). Convenience: CGM wins (no finger pricks vs multiple pricks daily). Insurance: BGM usually covered, CGM sometimes covered. Accuracy: Both accurate, CGM slightly better for trends.'
        },
        {
          heading: 'Which Should You Choose?',
          text: 'Start with a BGM. It\'s affordable and teaches you how foods affect your glucose. Test before and 2 hours after meals to see patterns. If you want more detailed data, try a CGM trial (many companies offer 2-week free trials). You\'ll see 24/7 patterns that reveal hidden triggers.'
        },
        {
          heading: 'Top Devices Recommended for 2025',
          text: 'BGM: Contour Next One ($15-25 device, $0.70/strip). CGM: FreeStyle Libre 3 ($75-95/month, 14-day sensor). Both are accurate, affordable, and have excellent apps. Check your insurance—many plans cover these.'
        },
        {
          heading: 'Tracking Apps That Work',
          text: 'Pair your meter or CGM with an app: MySugr (works with any meter), Glucose Buddy (all-in-one tracking), Dexcom Clarity (CGM analytics), LibreView (for Libre). These apps show patterns, trends, and improvements over time. Seeing your progress motivates consistency.'
        },
      ],
      resources: [
        'Compare all glucose meters',
        'Get CGM trial information',
        'Download tracking app guides',
        'See sample glucose reports'
      ]
    },
    'berberine-metformin': {
      title: 'Berberine: The Natural Alternative to Metformin (Evidence-Based)',
      description: 'How berberine works, dosing recommendations, and why research shows it\'s as effective as some diabetes medications.',
      category: 'Supplements',
      readTime: '8 min read',
      image: '/images/berberine-og.png',
      url: '/blog/berberine-metformin',
      keywords: 'berberine, metformin alternative, insulin sensitivity, blood sugar',
      content: [
        {
          heading: 'What is Berberine?',
          text: 'Berberine is an alkaloid compound found in plants like barberry and goldenseal. For centuries, traditional medicine has used berberine for various health conditions. Today, modern science confirms its remarkable ability to lower blood glucose—comparable to the popular diabetes drug Metformin.'
        },
        {
          heading: 'The Research: How Berberine Compares to Metformin',
          text: 'Multiple clinical studies show berberine is as effective as Metformin for lowering A1C. In one landmark study, berberine reduced A1C by 1.2% after 3 months—equivalent to Metformin results. No prescription needed, no side effects reported, and significantly cheaper than medication.'
        },
        {
          heading: 'How Berberine Works',
          text: 'Berberine improves insulin sensitivity by:\n\n• Activating AMPK (a cellular enzyme that improves glucose metabolism)\n• Reducing liver glucose production\n• Improving gut bacteria composition (which affects glucose)\n• Reducing inflammation (a root cause of insulin resistance)\n• Preventing glucose absorption in the intestines\n\nUnlike some supplements, berberine has a clear mechanism of action backed by research.'
        },
        {
          heading: 'Recommended Dosing',
          text: 'Standard dose: 500mg berberine, 2-3 times daily with meals (1000-1500mg total daily). Take with food to minimize digestive upset and improve absorption. Some people experience loose stools initially—this usually resolves within a week. Start with 500mg once daily if your stomach is sensitive, then increase gradually.'
        },
        {
          heading: 'Expected Results',
          text: 'Week 1-2: Better energy, more stable moods, fewer cravings. Week 3-4: Visible glucose improvements on meter (fasting glucose drops 10-20 mg/dL). Week 6-8: Lab tests show A1C improvement (typically 0.5-1.5% reduction). Results compound over time—the longer you take it, the greater the benefit.'
        },
        {
          heading: 'Why Berberine Beats Metformin',
          text: 'Berberine advantages: All-natural, no prescription needed, fewer side effects, supports gut health, improves multiple metabolic pathways. Metformin advantages: Longer track record, insurance coverage, established dosing. Best approach: Use berberine as part of your comprehensive 5-step plan (diet, exercise, monitoring, supplements, sleep/stress).'
        },
        {
          heading: 'Safety & Important Considerations',
          text: 'Berberine is safe for most people. However, if you\'re on diabetes medication, consult your doctor—berberine may lower blood sugar further and require medication adjustment. Avoid if pregnant. May interact with certain medications. Always buy from reputable brands with 3rd-party testing (NSF or USP certified).'
        },
        {
          heading: 'Your Supplement Stack',
          text: 'For maximum results, combine berberine with:\n\n• Chromium 200mcg (improves insulin sensitivity)\n• Alpha-Lipoic Acid 600mg (antioxidant, glucose control)\n• Cinnamon 1-2 tsp daily (modest glucose reduction)\n• Magnesium glycinate 300mg (supports insulin function)\n\nStart with berberine alone, then add others weekly as your body adjusts. Consistency matters more than complexity.'
        },
      ],
      resources: [
        'Buy quality berberine',
        'View complete supplement guide',
        'Track your A1C progress',
        'Download dosing schedule'
      ]
    },
    'sleep-blood-sugar': {
      title: 'How Sleep Affects Your Blood Sugar: The Science Behind Glucose Control',
      description: 'Why poor sleep raises blood glucose, how much sleep you need, and a 7-day sleep optimization protocol.',
      category: 'Sleep & Stress',
      readTime: '8 min read',
      image: '/images/sleep-stress-og.png',
      url: '/blog/sleep-blood-sugar',
      keywords: 'prediabetes sleep, stress management blood sugar, sleep and diabetes, cortisol and insulin resistance',
      content: [
        {
          heading: 'The Sleep-Glucose Connection',
          text: 'Poor sleep is one of the most overlooked factors in prediabetes. Even one night of poor sleep raises fasting glucose by 10-20 mg/dL. Chronic sleep deprivation (less than 6 hours nightly) accelerates insulin resistance and increases prediabetes risk by 400%.'
        },
        {
          heading: 'How Sleep Deprivation Raises Blood Sugar',
          text: 'When you don\'t sleep enough:\n\n• Cortisol (stress hormone) stays elevated, signaling your liver to release glucose\n• Insulin sensitivity drops by up to 30%\n• Hunger hormones (ghrelin) spike, increasing cravings\n• Your body can\'t clear glucose efficiently\n• Next morning fasting glucose is elevated\n\nThis creates a vicious cycle: poor sleep → elevated glucose → poor sleep quality.'
        },
        {
          heading: 'The Sweet Spot: 7-9 Hours Nightly',
          text: 'Most people with prediabetes need 7-9 hours of sleep. Less than 6 hours significantly impairs glucose control. More than 10 hours may indicate poor sleep quality. The goal isn\'t just sleep duration—it\'s sleep quality. You need deep, restorative sleep.'
        },
        {
          heading: 'Sleep Optimization Protocol (7-Day Start)',
          text: 'Day 1-2: Set consistent bedtime (same time every night). Day 3-4: Create 30-min wind-down ritual (dim lights, no screens). Day 5-6: Optimize environment (65-68°F, dark, quiet). Day 7: Add supplements (magnesium glycinate 300mg, melatonin 1-3mg). Track how you feel—most people notice better energy by day 5.'
        },
        {
          heading: 'Sleep Environment Checklist',
          text: 'Temperature: 65-68°F is optimal (cold promotes deep sleep). Darkness: Use blackout curtains (light suppresses melatonin). Quiet: White noise machine if needed. Bedding: Invest in quality pillows and sheets (you spend 1/3 of life sleeping). No screens 1 hour before bed (blue light suppresses melatonin).'
        },
        {
          heading: 'Supplements for Sleep Quality',
          text: 'Magnesium glycinate 300-400mg (supports sleep architecture, improves insulin sensitivity). Melatonin 0.5-3mg (regulates sleep-wake cycle). L-theanine 200mg (promotes relaxation). Ashwagandha 300-600mg (reduces cortisol, improves sleep). Start with magnesium + melatonin, add others if needed.'
        },
        {
          heading: 'What Ruins Sleep (Avoid These)',
          text: 'Caffeine after 2pm (half-life is 5-6 hours). Alcohol within 3 hours of bed (disrupts REM sleep). Large meals within 2-3 hours (digestive stress). Screens 1 hour before bed (blue light delays melatonin). Irregular sleep schedule (confuses your circadian rhythm). Stress and rumination (practice meditation instead).'
        },
        {
          heading: 'Real Results',
          text: 'Users who optimize sleep report:\n\n• Fasting glucose drops 5-10 mg/dL within 1 week\n• More stable energy throughout the day\n• Better food choices (less sugar cravings)\n• Improved workout performance\n• Better mood and mental clarity\n• A1C improvements within 6-8 weeks\n\nSleep is one of your most powerful health tools. Prioritize it like your life depends on it—because it does.'
        },
      ],
      resources: [
        'Download sleep optimization guide',
        'Get 30-day sleep protocol',
        'Buy quality sleep supplements',
        'Join sleep improvement community'
      ]
    },
  };

  const article = articles[topic as string] || articles['prediabetes-warning-signs'];

  return (
    <>
      <SEO
        title={`${article.title} | Thrive Health Blog`}
        description={article.description}
        keywords={article.keywords}
        image={article.image}
        url={article.url}
      />

      <div className="min-h-screen bg-gray-50">
        <article className="py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-4">
              {article.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center text-sm text-gray-600 mb-12 space-x-6">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" /> Thrive Health Team
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" /> {article.readTime}
              </span>
            </div>

            {/* ARTICLE CONTENT */}
            <Card className="mb-8 bg-white p-8">
              <div className="prose prose-lg max-w-none space-y-8">
                {article.content.map((section: any, index: number) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* RESOURCES SECTION */}
            <Card variant="gradient" className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                Next Steps & Resources
              </h3>
              <ul className="space-y-3 mb-8">
                {article.resources.map((resource: string, index: number) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-emerald-600 mr-3 font-bold">→</span>
                    {resource}
                  </li>
                ))}
              </ul>
              <div className="border-t border-emerald-200 pt-6">
                <Button variant="primary" href="/prediabetes-support" className="w-full sm:w-auto">
                  Start the 5-Step Plan
                </Button>
              </div>
            </Card>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogArticlePage;