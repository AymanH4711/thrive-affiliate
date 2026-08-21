import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SEO } from '../components/seo/SEO';
import { useAffiliateCTA } from '../hooks/useAffiliateCTA';
import { useAuthorityPack } from '../hooks/useAuthorityPack';
import { useProducts } from '../hooks/useProducts';
import { formatDate } from '../lib/utils';
import { articleSiloMap } from "../data/articleSiloMap";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Zap, 
  CheckCircle, 
  ExternalLink,
  Star,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

// Article content data - could be moved to separate data files
const articles: Record<string, any> = {
  // Canonical article now lives at /blog/5-warning-signs-of-prediabetes
  // This entry preserves backward-compat for any old links to the previous slug
  'prediabetes-warning-signs': {
    _redirect: '/blog/5-warning-signs-of-prediabetes'
  },
  'best-foods-blood-sugar': {
    title: 'The Best Foods for Blood Sugar Control: Complete Guide',
    description: 'Complete prediabetes diet guide. Learn which foods stabilize blood sugar, meal timing strategies, and a 7-day meal plan to reverse prediabetes naturally.',
    category: 'Diet & Blood Sugar',
    readTime: '10 min read',
    image: '/images/prediabetes-diet-og.png',
    hasAffiliateLinks: false,
    lastReviewed: 'April 2026',
    url: '/blog/best-foods-blood-sugar',
    keywords: 'prediabetes diet, blood sugar diet, foods for blood sugar, what to eat with prediabetes, diabetes diet',
    author: 'Thrive Health Editorial Team',
    evidenceLevel: 'high',
    content: [
      {
        heading: 'Why Food Choices Matter Most',
        text: 'Diet is one of the most powerful levers in blood sugar management. The foods you eat directly determine your glucose levels and how your body produces insulin. Even small dietary changes can lead to meaningful improvements in your A1C within weeks.',
        icon: 'leaf'
      },
      {
        heading: 'The Plate Rule: Your Foundation',
        text: 'Fill half your plate with non-starchy vegetables (broccoli, spinach, peppers). Fill one quarter with lean protein (chicken, fish, eggs, beans). Fill one quarter with whole grains or legumes (brown rice, quinoa, lentils). This simple ratio stabilizes blood sugar naturally.'
      },
      {
        heading: 'Best Vegetables (Unlimited)',
        text: 'Eat as many non-starchy vegetables as you want. They have minimal impact on blood sugar while providing fiber, nutrients, and satiety. Best choices: leafy greens (spinach, kale), cruciferous vegetables (broccoli, cauliflower), and colorful peppers (red, yellow, orange).',
        icon: 'check'
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
        text: 'These spike blood sugar rapidly and should be eliminated:\n\n• Refined carbs: white bread, white rice, pastries\n• Sugary drinks: soda, juice, energy drinks\n• Sweets: candy, cookies, cakes, ice cream\n• Processed foods: fast food, chips, frozen meals\n• Added sugars: desserts, sweetened cereals, chocolate bars\n\nThese foods cause blood sugar spikes, trigger excess insulin production, and accelerate prediabetes progression.',
        icon: 'alert'
      },
      {
        heading: 'Meal Timing Tips',
        text: 'When you eat matters as much as what you eat:\n\n• Eat protein and vegetables first (slows carb absorption)\n• Save starches for last\n• Walk for 10 minutes after meals (reduces glucose spike by 20-30%)\n• Don\'t skip meals (irregular eating raises baseline glucose)\n• Eat within 30 minutes of waking (activates metabolism)'
      }
    ],
    resources: [
      { text: 'Download the printable food list', action: 'download' },
      { text: 'Get sample meal plans', action: 'cta' },
      { text: 'Find 10 easy recipes', action: 'link' },
      { text: 'Use a food tracking app', action: 'link' }
    ],
    stats: [
      { label: 'People improved A1C with diet changes', value: '67%' },
      { label: 'Reduction in glucose spikes', value: '30%' },
      { label: 'Average weekly weight loss', value: '1-2 lbs' }
    ]
  },
  'post-meal-walks': {
    title: 'Post-Meal Walks: The Most Powerful Blood Sugar Tool',
    description: 'Why 10 minutes after eating is the perfect time to walk. Science-backed timing and protocol for maximum glucose reduction.',
    category: 'Exercise & Movement',
    readTime: '7 min read',
    image: '/images/prediabetes-exercise-og.png',
    hasAffiliateLinks: false,
    lastReviewed: 'April 2026',
    url: '/blog/post-meal-walks',
    keywords: 'prediabetes exercise, best exercises for blood sugar, strength training, walking for blood sugar control',
    author: 'Thrive Health Editorial Team',
    evidenceLevel: 'high',
    content: [
      {
        heading: 'Why Post-Meal Walks Work',
        text: 'A 10-minute walk after eating is one of the most powerful tools for controlling blood sugar. When muscles contract, they pull glucose from your bloodstream WITHOUT requiring insulin. This simple action can reduce glucose spikes by 20-30% with zero side effects.'
      },
      {
        heading: 'The Science: Muscle Glucose Uptake',
        text: 'During exercise, your muscles increase glucose uptake by up to 50%. This happens through GLUT4 translocation—the same mechanism that insulin uses. So walking = natural insulin mimicry. The best part? This effect lasts for hours after the walk ends.'
      },
      {
        heading: 'The Perfect Timing: Within 15 Minutes of Eating',
        text: 'Research shows the best time to walk is within 15 minutes of finishing a meal. This catches the glucose spike right as it\'s climbing. A 10-minute walk can reduce the peak glucose spike by 20-30%. A 30-minute walk reduces it even more.'
      },
      {
        heading: 'The 3-Walk Protocol',
        text: 'For maximum benefit, take 3 walks per day:\n\nWalk #1: After breakfast (catches morning carbs)\nWalk #2: After lunch (prevents afternoon energy crash)\nWalk #3: After dinner (improves overnight glucose)\n\nDoing this daily can improve your A1C by 0.5-1% within 8 weeks.'
      },
      {
        heading: 'Walking Pace & Intensity',
        text: 'You don\'t need to run or even walk fast. A moderate pace (3-4 mph) is perfect. The key is muscle contraction, not heart rate. Even a gentle stroll works. Aim for:\n\n• Pace: 3-4 mph (leisurely to moderate)\n• Duration: 10 minutes minimum (20-30 minutes is ideal)\n• Intensity: Conversational (can talk but slightly breathless)'
      },
      {
        heading: 'Reported Outcomes',
        text: 'Research and reader-reported experiences suggest the following general patterns for those who adopt a consistent post-meal walking protocol. These are not guaranteed outcomes — individual results vary based on diet, baseline glucose, and overall health:\n\n• Fasting glucose may drop 10-15 mg/dL within 2 weeks\n• A1C improvements of 0.5-1% may occur within 8 weeks\n• More stable energy throughout the day\n• Better sleep quality\n• Possible reduction in medication needs (always work with your doctor before changing medications)\n• Weight loss varies by individual\n\nThis is one of the most accessible and well-researched lifestyle interventions for blood sugar management. Always consult your healthcare provider before making significant changes to your health routine.',
        icon: 'info'
      }
    ],
    resources: [
      { text: 'Download the 3-walk daily protocol', action: 'download' },
      { text: 'Get a walking tracker app', action: 'link' },
      { text: 'Find local walking routes', action: 'link' },
      { text: 'Join a walking community', action: 'link' }
    ],
    stats: [
      { label: 'Glucose spike reduction', value: '20-30%' },
      { label: 'Potential A1C improvement', value: '0.5-1%' },
      { label: 'Muscle glucose uptake increase', value: '50%' }
    ]
  },
  'cgm-vs-bgm': {
    title: 'CGM vs Blood Glucose Meter: Which Should You Use in 2025?',
    description: 'Complete guide to glucose monitoring devices. Compare CGM systems (Dexcom, Freestyle Libre) vs traditional meters. Reviews, buying guide, and app recommendations.',
    category: 'Glucose Monitoring',
    readTime: '9 min read',
    image: '/images/glucose-monitors-og.png',
    hasAffiliateLinks: true,
    lastReviewed: 'April 2026',
    url: '/blog/cgm-vs-bgm',
    keywords: 'CGM glucose monitor, Dexcom, Freestyle Libre, glucose meter, continuous glucose monitor',
    author: 'Thrive Health Editorial Team',
    evidenceLevel: 'high',
    content: [
      {
        heading: 'The Glucose Monitoring Revolution',
        text: 'For decades, people with prediabetes had one option: a finger-prick glucose meter. Today, you have Continuous Glucose Monitors (CGMs) that track your glucose 24/7 without fingersticks. This data is transformative. You can see exactly how YOUR body responds to different foods, stress, exercise, and sleep.'
      },
      {
        heading: 'Traditional Glucose Meters: The Basics',
        text: 'How they work: Prick your finger, apply blood to a test strip, get a reading in 5 seconds. Cost: $15-50 for the meter, $0.50-1.50 per strip. Pros: Cheap, immediate, no subscription. Cons: Only gives snapshot readings (not 24/7), requires fingersticks, users often forget to test.'
      },
      {
        heading: 'Continuous Glucose Monitors (CGMs): Game Changer',
        text: 'How they work: Wear a small sensor on your arm. It measures glucose in interstitial fluid every 5 minutes (24/7). Syncs to your phone via Bluetooth. Cost: $250-400/month or $50-100 per sensor. Pros: 24/7 data, see glucose trends, no fingersticks after initial calibration, integrates with apps.'
      },
      {
        heading: 'CGM vs BGM Comparison',
        text: 'Frequency: BGM (once/day) vs CGM (288/day). Data type: BGM (snapshot) vs CGM (continuous trend). Cost: BGM ($50/year) vs CGM ($3,000-5,000/year). Subscription: BGM (none) vs CGM (yes). Smartphone: BGM (optional) vs CGM (required). Insurance: BGM (often covered) vs CGM (rarely covered for prediabetes).'
      },
      {
        heading: 'Top CGM Systems in 2025',
        text: 'Dexcom G7: Most popular, 14-day wear, 5-minute readings, excellent app. Cost: $300/month. Freestyle Libre 2: Abbott, 14-day wear, cheaper than Dexcom, good accuracy. Cost: $70/sensor. Eversense E3: Implanted (lasts 180 days), very accurate, most discreet. Cost: High but best for long-term.',
        icon: 'star'
      },
      {
        heading: 'Should You Use a CGM?',
        text: 'YES if: You want to optimize your diet and see real-time data. You\'re serious about reversing prediabetes. You like data-driven decisions. You want to experiment with food/exercise/sleep safely. NO if: You only need periodic snapshot readings. Cost is prohibitive. You don\'t have a smartphone. You prefer simplicity over data.'
      },
      {
        heading: 'Getting Started: Which Should You Choose?',
        text: 'For prediabetes: Start with a traditional glucose meter ($20-40). Test fasting glucose 3x/week. Once you understand your baseline, upgrade to CGM for 1-3 months to see patterns. Then decide: continue CGM or switch back to meter testing. This hybrid approach is cost-effective.'
      }
    ],
    resources: [
      { text: 'Buy a glucose meter on Amazon', action: 'affiliate', affiliateId: 'glucose-meter' },
      { text: 'Compare CGM pricing', action: 'affiliate', affiliateId: 'cgm-comparison' },
      { text: 'Download glucose tracking apps', action: 'link' },
      { text: 'Learn to interpret glucose graphs', action: 'link' }
    ],
    stats: [
      { label: 'Readings per day (CGM)', value: '288' },
      { label: 'Potential A1C reduction', value: '0.4-0.8%' },
      { label: 'Average monthly cost (BGM)', value: '$25-50' }
    ]
  },
  'berberine-metformin': {
    title: 'Berberine for Blood Sugar: Evidence-Based Review (2026)',
    description: 'How berberine works, dosing research, and what clinical studies show about its effects on blood sugar. Not a replacement for medical treatment — always consult your doctor.',
    category: 'Supplements & Natural Health',
    readTime: '8 min read',
    hasAffiliateLinks: true,
    lastReviewed: 'April 2026',
    image: '/images/blog/berberine-vs-metformin-comparison.webp',
    url: '/blog/berberine-metformin',
    keywords: 'berberine, blood sugar supplement, berberine research, natural blood sugar support',
    author: 'Thrive Health Editorial Team',
    evidenceLevel: 'high',
    content: [
      {
        heading: 'What is Berberine?',
        text: 'Berberine is a naturally occurring alkaloid found in plants like goldenseal, barberry, and Oregon grape. For thousands of years, it\'s been used in traditional Chinese and Ayurvedic medicine. Recent research shows it works similarly to metformin for blood sugar control.'
      },
      {
        heading: 'Berberine vs Metformin: Head-to-Head',
        text: 'Berberine effects: Lowers fasting glucose 15-20 mg/dL, improves A1C by 0.5-1%, reduces insulin resistance. Metformin effects: Lowers fasting glucose 20-30 mg/dL, improves A1C by 0.5-2%, reduces insulin resistance. Cost: Berberine $15-30/month, Metformin $5-15/month. Side effects: Berberine (minimal), Metformin (digestive issues common).'
      },
      {
        heading: 'The Research Behind Berberine',
        text: 'A landmark 2008 study published in Metabolism compared berberine to metformin in people with Type 2 diabetes. Both compounds produced similar reductions in fasting glucose and A1C (approximately 1% improvement), and berberine was associated with fewer gastrointestinal side effects. The authors noted that berberine demonstrated meaningful glucose-lowering activity as a single agent. Note: This was one study — more research is needed, and berberine is not a clinically validated replacement for prescribed diabetes medications.',
        icon: 'research'
      },
      {
        heading: 'How Berberine Works',
        text: 'Mechanism #1: Activates AMPK (metabolic master switch). Mechanism #2: Reduces liver glucose production. Mechanism #3: Improves insulin sensitivity. Mechanism #4: Alters gut bacteria (increases butyrate-producing bacteria). Mechanism #5: Reduces inflammation. It\'s a multi-target approach, which is why it\'s so effective.'
      },
      {
        heading: 'Recommended Dosage',
        text: 'Clinical dose: 500mg berberine 2-3x daily with meals (total: 1,000-1,500mg/day). Duration: Consistent use for 12+ weeks to see full benefits. Best taken with: Meals (improves absorption, reduces GI upset). Timing: Space doses 6-8 hours apart. Example: 500mg at breakfast, lunch, and dinner.'
      },
      {
        heading: 'Side Effects & Safety',
        text: 'Most people tolerate berberine well. Possible side effects (rare): GI upset (constipation, diarrhea, cramping), dizziness, headache. Mitigation: Start low (250mg), increase gradually, take with meals. Contraindications: If on diabetes medications, work with your doctor (berberine can potentiate glucose-lowering effect).'
      },
      {
        heading: 'Who May Consider Berberine?',
        text: 'Berberine may be worth discussing with your healthcare provider if: You are looking for evidence-based lifestyle supplements to support blood sugar alongside diet and exercise. You are interested in the research on natural compounds and metabolic health.\n\nBerberine is NOT appropriate as a replacement for prescribed diabetes medications without physician oversight. Do not stop or reduce metformin, insulin, or other medications to take berberine. Discuss with your doctor before adding it to any existing medication regimen.\n\nAvoid berberine if: You are pregnant or breastfeeding. You are on blood-thinning medications. You have severe diabetes requiring pharmaceutical management. You have not discussed it with your healthcare provider.',
        icon: 'warning'
      }
    ],
    resources: [
      { text: 'Buy quality berberine (500mg capsules)', action: 'affiliate', affiliateId: 'berberine' },
      { text: 'Download berberine tracking sheet', action: 'download' },
      { text: 'Learn about berberine + metformin combo', action: 'link' },
      { text: 'Find research papers on berberine', action: 'link' }
    ],
    stats: [
      { label: 'Fasting glucose reduction', value: '15-20 mg/dL' },
      { label: 'A1C improvement potential', value: '0.5-1%' },
      { label: 'Monthly cost', value: '$15-30' }
    ]
  },
  'sleep-blood-sugar': {
    title: 'Sleep & Blood Sugar: The 7-9 Hour Science',
    description: 'How poor sleep raises fasting glucose and what to do about it. Sleep optimization protocol for glucose control.',
    category: 'Sleep & Stress',
    readTime: '8 min read',
    image: '/images/sleep-stress-og.png',
    hasAffiliateLinks: true,
    lastReviewed: 'April 2026',
    url: '/blog/sleep-blood-sugar',
    keywords: 'prediabetes sleep, stress management blood sugar, sleep and diabetes, cortisol and insulin resistance',
    author: 'Thrive Health Editorial Team',
    evidenceLevel: 'high',
    content: [
      {
        heading: 'The Sleep-Glucose Connection',
        text: 'Poor sleep is one of the most overlooked factors in prediabetes. Research suggests that even a single night of poor sleep can meaningfully raise fasting glucose. Chronic sleep deprivation (consistently less than 6 hours nightly) is associated with accelerated insulin resistance and a significantly elevated risk of developing type 2 diabetes, according to multiple longitudinal studies.'
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
        text: 'Magnesium glycinate 300-400mg (supports sleep architecture, improves insulin sensitivity). Melatonin 0.5-3mg (regulates sleep-wake cycle). L-theanine 200mg (promotes relaxation). Ashwagandha 300-600mg (reduces cortisol, improves sleep). Start with magnesium + melatonin, add others if needed.',
        icon: 'supplement'
      },
      {
        heading: 'What Ruins Sleep (Avoid These)',
        text: 'Caffeine after 2pm (half-life is 5-6 hours). Alcohol within 3 hours of bed (disrupts REM sleep). Large meals within 2-3 hours (digestive stress). Screens 1 hour before bed (blue light delays melatonin). Irregular sleep schedule (confuses your circadian rhythm). Stress and rumination (practice meditation instead).'
      },
      {
        heading: 'Real Results',
        text: 'Users who optimize sleep report:\n\n• Fasting glucose drops 5-10 mg/dL within 1 week\n• More stable energy throughout the day\n• Better food choices (less sugar cravings)\n• Improved workout performance\n• Better mood and mental clarity\n• A1C improvements within 6-8 weeks\n\nSleep is one of your most powerful health tools. Prioritize it like your life depends on it—because it does.'
      }
    ],
    resources: [
      { text: 'Download sleep optimization guide', action: 'download' },
      { text: 'Get 30-day sleep protocol', action: 'download' },
      { text: 'Buy quality sleep supplements', action: 'affiliate', affiliateId: 'sleep-supplements' },
      { text: 'Join sleep improvement community', action: 'link' }
    ],
    stats: [
      { label: 'Fasting glucose improvement', value: '5-10 mg/dL' },
      { label: 'Optimal sleep duration', value: '7-9 hours' },
      { label: 'Insulin sensitivity restoration', value: 'Up to 30%' }
    ]
  },
  'ceylon-cinnamon-diabetes': {
    title: 'Why Use Ceylon Cinnamon for Diabetes? Complete 2026 Clinical Guide',
    description: 'Clinical evidence, optimal dosage (1,500mg), and where to buy certified brands for blood sugar management.',
    category: 'Supplements & Natural Health',
    readTime: '12 min read',
    image: '/images/blog/ceylon-cinnamon-diabetes.webp',
    hasAffiliateLinks: true,
    lastReviewed: 'April 2026',
    url: '/blog/ceylon-cinnamon-diabetes',
    keywords: 'ceylon cinnamon, diabetes, prediabetes, blood sugar, natural supplement, insulin sensitivity, coumarin',
    author: 'Thrive Health Editorial Team',
    evidenceLevel: 'high',
    content: [
      {
        heading: 'Understanding the "Insulin Mimic"',
        text: 'For seniors navigating the journey of Natural Blood Sugar management, Ceylon cinnamon is more than a spice; it is a metabolic ally. If you are working through diabetes reversal protocols, understanding the "how" is vital.\n\nThink of your cells like a house with a locked door. Insulin is the key that unlocks that door to let blood sugar (glucose) inside to be used for energy. In prediabetes, the lock gets "rusty" (insulin resistance). Ceylon cinnamon acts like a drop of oil on that lock, making the door swing open more easily.\n\nIn clinical terms, this involves GLUT4 translocation and improved insulin sensitivity. By assisting this process, you can maintain steadier postprandial glucose (the sugar levels in your blood after eating) and avoid the "crashing" feeling that follows high-carb meals.'
      },
      {
        heading: 'Why Ceylon Works Better Than Cassia',
        text: 'The key difference isn\'t just marketing—it\'s chemistry:\n\n• Ceylon Cinnamon (Cinnamomum verum): 0.01-0.03% coumarin\n• Cassia Cinnamon (common grocery store variety): 1-5% coumarin\n\nCoumarin is a compound that can stress the liver at high doses. If you\'re taking cinnamon daily, Ceylon\'s lower coumarin content means you can safely use therapeutic doses without worry.'
      },
      {
        heading: 'Clinical Evidence (2024–2026)',
        text: 'Research shows significant benefits:\n\n• Significant reduction in fasting blood glucose (avg -12 mg/dL)\n• Ceylon contains 250x less coumarin than Cassia, making it safe for long-term liver health\n• Improved HOMA-IR scores in adults aged 60+ over a 12-week period\n\nConsistency is key; daily intake outperformed occasional use.',
        icon: 'research'
      },
      {
        heading: 'Dosages Used in Clinical Research',
        text: 'The following ranges reflect dosages used in published clinical studies — they are not personal medical recommendations. Always consult your doctor before starting any supplement, especially if you have diabetes or take medications.\n\nResearch-studied ranges:\n• General metabolic support: 500–1,000mg daily\n• Prediabetes studies: 1,000–1,500mg daily over 12 weeks\n• Type 2 diabetes studies: 1,500–2,000mg daily (as an adjunct to, not replacement for, medical treatment)\n\nIf you take diabetes medications (metformin, sulfonylureas, insulin), consult your doctor before adding any cinnamon supplement — blood sugar-lowering effects may compound.'
      },
      {
        heading: 'Where to Buy Ceylon Cinnamon',
        text: 'When choosing a supplement, purity markers are just as important as ingredients. Look for:\n\n• Cinnatone Elite: Lab-Verified Organic, high essential oils, fast absorption\n• Organic India: USDA Organic & GMP, sustainably sourced, heavy metal tested\n• Primal Remedies: NSF Certified & GMP, zero fillers, high bioavailability\n• Nature\'s Basket: Budget option but use with caution\n\nAlways verify the "Ceylon" label to avoid liver strain from cheaper Cassia varieties.',
        icon: 'star'
      },
      {
        heading: 'Safety & Side Effects',
        text: 'Ceylon cinnamon is generally considered well-tolerated when used at studied doses. Its very low coumarin content (vs Cassia) makes it a safer long-term option for daily use in most healthy adults — but "generally safe" does not mean risk-free for everyone.\n\nPotential side effects (rare):\n• Mouth/Lip Irritation — if using powder; capsules avoid this\n• Allergic Reaction — uncommon but possible; stop if rash/itching occurs\n• Digestive Upset — if starting dose is too high; reduce and build up gradually\n• Drug Interactions — may enhance the effect of diabetes medications; inform your doctor\n\nWho should avoid without medical guidance: Pregnant or breastfeeding women, people with cinnamon allergies, those on anticoagulants or diabetes medications.',
        icon: 'warning'
      },
      {
        heading: 'Your Next Steps',
        text: 'If your goal is reversing prediabetes or improving Type 2 diabetes control, Ceylon cinnamon is a scientifically-backed tool.\n\n1. Switch from grocery store "Cinnamon" (usually Cassia) to Certified Ceylon on iHerb\n2. Start with 1,000mg daily and track your fasting glucose\n3. Increase to 1,500mg after week 2 if well tolerated\n4. Combine with the 7-Day Blood Sugar Reset meal plan\n5. Consult your doctor if on diabetes medications before starting\n\nExpect to see 5-12 mg/dL improvement in fasting glucose within 4 weeks. Best results at 8-12 weeks.'
      }
    ],
    resources: [
      { text: 'Compare Ceylon Cinnamon brands on iHerb', action: 'affiliate', affiliateId: 'ceylon-cinnamon' },
      { text: 'Download the 7-Day Blood Sugar Reset Guide', action: 'download' },
      { text: 'Track your glucose progress with a meter', action: 'affiliate', affiliateId: 'glucose-meter' },
      { text: 'Consult your doctor about supplement interactions', action: 'link' }
    ],
    stats: [
      { label: 'Average fasting glucose reduction', value: '12 mg/dL' },
      { label: 'Coumarin difference (vs Cassia)', value: '250x less' },
      { label: 'Optimal daily dosage', value: '1,500mg' }
    ]
  }
};

// Helper function to get icon component
const getSectionIcon = (iconName?: string) => {
  switch (iconName) {
    case 'leaf':
      return <TrendingUp className="w-5 h-5 text-emerald-600" />;
    case 'check':
      return <CheckCircle className="w-5 h-5 text-emerald-600" />;
    case 'star':
      return <Star className="w-5 h-5 text-amber-500" />;
    case 'alert':
      return <Award className="w-5 h-5 text-red-500" />;
    case 'info':
      return <Heart className="w-5 h-5 text-blue-500" />;
    case 'research':
      return <TrendingUp className="w-5 h-5 text-purple-600" />;
    case 'warning':
      return <Award className="w-5 h-5 text-amber-500" />;
    case 'supplement':
      return <TrendingUp className="w-5 h-5 text-teal-600" />;
    default:
      return null;
  }
};

const BlogArticlePage = () => {
  const { articleId } = useParams();
  const location = useLocation();
  const { ctaConfig } = useAffiliateCTA(location.pathname);
  const { authorityPack } = useAuthorityPack('default');
  const { products } = useProducts('supplements');

  const article = articles[articleId as string];

  // 🛡 Defensive check prevents the crash when the slug is invalid
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Redirect legacy slugs to their canonical URL
  if (article._redirect) {
    return <Navigate to={article._redirect} replace />;
  }

  return (
    <>
      <SEO
        title={`${article.title} | ThriveHealth360 Blog`}
        description={article.description}
        keywords={article.keywords}
        image={article.image}
        url={article.url}
      />

      <div className="min-h-screen bg-gray-50">

        {/* PER-ARTICLE AFFILIATE DISCLOSURE — FTC 16 CFR §255 */}
        {article.hasAffiliateLinks && (
          <div className="bg-blue-50 border-b border-blue-200">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl py-3">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Affiliate Disclosure:</strong> This article contains affiliate links — we have a material connection with some sellers linked below. If you purchase through our links, we earn a commission at no extra cost to you. This financial relationship may influence which products we feature and how they are presented.{' '}
                <Link to="/affiliate-disclosure" className="underline font-semibold">Full policy (16 CFR §255) →</Link>
              </p>
            </div>
          </div>
        )}

        <article className="py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            {/* Back Navigation */}
            <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to Blog
            </Link>

            {/* Article Meta */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-4">
                {article.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-x-6 gap-y-2">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" aria-hidden="true" /> {article.author}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" aria-hidden="true" /> {article.readTime}
                </span>
                {article.lastReviewed && (
                  <span className="text-gray-500">Last reviewed: {article.lastReviewed}</span>
                )}
              </div>

              {/* Evidence Strength Badge */}
              {article.evidenceLevel && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full">
                  <TrendingUp className="w-4 h-4 text-purple-600" aria-hidden="true" />
                  <span className="text-xs font-medium text-purple-700">
                    Evidence-Based: {article.evidenceLevel === 'high' ? 'High Quality Research' : 'Emerging Research'}
                  </span>
                </div>
              )}
            </div>

            {/* Reviewer / credentials note */}
            <p className="text-xs text-gray-400 mb-10 leading-relaxed">
              Content produced by the Thrive Health research team. Our writers and editors are not licensed medical professionals. This article has not been reviewed by a physician. It is for informational purposes only — see the disclaimer below.
            </p>

            {/* ARTICLE CONTENT */}
            <Card className="mb-8 bg-white p-8">
              <div className="prose prose-lg max-w-none space-y-8">
                {article.content.map((section: any, index: number) => (
                  <div key={index} className="relative">
                    {/* Optional section icon */}
                    {section.icon && (
                      <div className="absolute -left-12 top-1 hidden md:block">
                        {getSectionIcon(section.icon)}
                      </div>
                    )}
                    <h2 className={`text-2xl font-bold text-gray-900 mb-4 ${section.icon ? 'md:pl-8' : ''}`}>
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* KEY STATS SECTION */}
            {article.stats && (
              <Card variant="gradient" className="mb-8 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" aria-hidden="true" />
                  Key Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {article.stats.map((stat: any, index: number) => (
                    <div key={index} className="text-center p-4 bg-white/50 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* RESOURCES SECTION */}
            <Card variant="gradient" className="mb-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                Next Steps & Resources
              </h3>
              <ul className="space-y-3 mb-8">
                {article.resources.map((resource: any, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-600 mr-3 font-bold">→</span>
                    {resource.action === 'affiliate' ? (
                      <a 
                        href={`/buy/${resource.affiliateId}`} 
                        className="text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
                      >
                        {resource.text}
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    ) : resource.action === 'download' ? (
                      <a 
                        href={`/downloads/${resource.text.toLowerCase().replace(/\s+/g, '-')}.pdf`}
                        className="text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
                      >
                        {resource.text}
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-gray-700">{resource.text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="border-t border-emerald-200 pt-6">
                <Button variant="primary" href="/prediabetes-support" className="w-full sm:w-auto">
                  Start the 5-Step Plan
                </Button>
              </div>
            </Card>

            {/* AUTHORITY PACK SECTION */}
            {authorityPack && (
              <Card className="mb-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" aria-hidden="true" />
                  Why Trust Our Recommendations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {authorityPack.items?.map((item: any, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-sm text-gray-300">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* RELATED ARTICLES */}
            <Card className="mb-8 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articleSilomap
                  .filter((item: any) => item.category === article.category && item.url !== article.url)
                  .slice(0, 2)
                  .map((relatedItem: any, index: number) => (
                    <Link 
                      key={index}
                      to={relatedItem.url}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <ArrowLeft className="w-5 h-5 text-emerald-600 rotate-180" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{relatedItem.title}</div>
                        <div className="text-xs text-gray-500">{relatedItem.readTime}</div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>

            {/* PER-ARTICLE MEDICAL DISCLAIMER */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Medical Disclaimer:</strong> The content in this article is for general educational and informational purposes only. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Any supplements, foods, or lifestyle interventions discussed have not been evaluated by the FDA, MHRA, TGA, or Health Canada and are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary and are not guaranteed. Always consult a qualified healthcare provider before making changes to your diet, exercise routine, medications, or supplement regimen — especially if you have a diagnosed condition or take prescription medications.{' '}
                <Link to="/medical-disclaimer" className="underline font-semibold text-amber-900 hover:text-amber-700">Full Medical Disclaimer →</Link>
              </p>
            </div>

          </div>
        </article>

        {/* STICKY AFFILIATE CTA (if applicable) */}
        {article.hasAffiliateLinks && ctaConfig && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
            <div className="container mx-auto max-w-4xl flex items-center justify-between">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{ctaConfig.headline}</p>
                <p className="text-sm text-gray-600">{ctaConfig.subheadline}</p>
              </div>
              <Button variant={ctaConfig.variant || 'primary'} href={ctaConfig.ctaUrl}>
                {ctaConfig.ctaText}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogArticlePage;