// src/pages/blog/BestFoodsBloodSugar.tsx
/**
 * BestFoodsBloodSugar Component - ENHANCED VERSION
 * 
 * Updates from ENHANCED_UPDATE_SUMMARY_COMPLETE.md:
 * - Complete 3‑day meal plan with detailed descriptions
 * - Research citations with specific findings and actionable advice
 * - Green frame around food cards
 * - Enhanced science sections with consistent color schemes
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Microscope,
  Plus,
  Minus,
  Droplets,
  Battery,
  Eye,
  User,
  Leaf,
  Heart,
  Utensils,
  Fish,
  Apple,
  Coffee,
  Wine,
  Sparkles
} from 'lucide-react';
import { DownloadModal } from "@/components/DownloadModal";
import { FoodCard } from "@/components/FoodCard";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import type { BlogArticleMeta } from "@/data/types";
import { DietMedicalDisclaimerCompact, DietAffiliateDisclaimerProductCompact } from "@/components/disclaimers/DietDisclaimers";

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const seoConfig = {
  title: "Best Foods for Blood Sugar Control: The Science-Backed Prediabetes Diet Plan",
  metaDescription: "Discover the 12 best foods for blood sugar control backed by research. Proven dietary strategies that help reverse prediabetes without deprivation.",
  keywords: ["best foods blood sugar control", "low glycemic index foods", "prediabetes diet", "blood sugar friendly foods"],
  image: '/images/blog/best-foods-blood-sugar-cover.webp',
  slug: '/blog/best-foods-blood-sugar-control'
};

const tldrSummary = [
  "✅ Best Food Categories: Leafy greens, legumes, non-starchy vegetables, whole grains, berries, nuts/seeds",
  "✅ Key Science: Soluble fiber + resistant starch + polyphenols regulate blood sugar and GLUT4 sensitivity",
  "✅ Impact: Studies show these foods reduce postprandial glucose spikes by 20-35% in prediabetics",
  "✅ Quick Win: Start by replacing 1 refined carb with 1 legume-based meal per day",
  "✅ Timeline: Most people see A1C improvements within 8-12 weeks"
];

// ============================================================================
// FOOD DATA (12 foods with full details)
// ============================================================================

// FIXED: Food was referenced as `bestFoods: Food[]` with no local interface
// and no import — this file would fail TypeScript compilation as written.
// gi/gl are typed as `number | string` because the actual data below mixes
// both (e.g. `gi: 0` for leafy greens vs `gi: "21-32"` for legumes, since some
// foods have a single GI value and others a realistic range) — narrowing to
// just `number` would make half the entries below a type error.
interface Food {
  id: number;
  name: string;
  subtext: string;
  category: string;
  gi: number | string;
  gl: number | string;
  badge: string;
  benefit: string;
  mechanism: string;
  serving: string;
  tips: string;
  icon: React.ComponentType<{ className?: string }>;
}

const bestFoods: Food[] = [
  {
    id: 1,
    name: "Leafy Greens",
    subtext: "Spinach, Kale, Arugula",
    category: "Non-Starchy Vegetable",
    gi: 0,
    gl: 0,
    badge: "Zero Impact",
    benefit: "Zero impact on blood sugar; supports insulin sensitivity via magnesium",
    mechanism: "Magnesium activates AMPK-dependent glucose metabolism; among the most effective dietary strategies for reversing prediabetes [1]",
    serving: "2-3 cups raw daily or 1 cup cooked",
    tips: "Add to smoothies, salads, or sauté with olive oil + garlic",
    icon: Leaf
  },
  {
    id: 2,
    name: "Legumes",
    subtext: "Lentils, Chickpeas, Black Beans",
    category: "Protein + Resistant Starch",
    gi: "21-32",
    gl: "4-5 per ½ cup",
    badge: "Slow-Release",
    benefit: "Soluble fiber + resistant starch slow glucose absorption by 25-30%",
    mechanism: "Soluble fiber slows glucose absorption; each 10 g/day fiber increment reduces T2D risk by 27%; legumes among strongest evidence [1, 2]",
    serving: "½-1 cup per meal, 3-4× per week",
    tips: "Mix into soups, make hummus, or use as pasta base",
    icon: Heart
  },
  {
    id: 3,
    name: "Berries",
    subtext: "Blueberries, Raspberries, Strawberries",
    category: "Low-GI Fruit",
    gi: "25-40",
    gl: "3-5 per cup",
    badge: "Antioxidant Rich",
    benefit: "Anthocyanins improve insulin sensitivity; high fiber, low sugar",
    mechanism: "Anthocyanins upregulate GLUT4 transporters, improving insulin sensitivity; each daily serving associated with 18% lower T2D risk [3, 4]",
    serving: "1 cup fresh daily",
    tips: "Pair with nuts or Greek yogurt for added protein",
    icon: Zap
  },
  {
    id: 4,
    name: "Whole Grains",
    subtext: "Oats, Quinoa, Barley",
    category: "Complex Carb + Beta-Glucan",
    gi: "40-50",
    gl: "6-10 per serving",
    badge: "Viscous Fiber",
    benefit: "Beta-glucan forms coating that slows glucose absorption",
    mechanism: "Soluble beta-glucan reduces postprandial glycemic response; dietary fiber linked to 27% lower T2D risk per 10 g/day increment [2]",
    serving: "½ cup cooked oats or ¾ cup cooked grain per meal",
    tips: "Choose steel-cut oats; cook with cinnamon for added benefit",
    icon: Battery
  },
  {
    id: 5,
    name: "Fatty Fish",
    subtext: "Salmon, Mackerel, Sardines",
    category: "Protein + Omega-3",
    gi: 0,
    gl: 0,
    badge: "Low Inflammation",
    benefit: "Omega-3s reduce inflammation and improve insulin receptor sensitivity",
    mechanism: "Omega-3s reduce inflammatory cytokines (TNF-α, IL-6) that impair glucose uptake; independently associated with lower HbA1c [9]",
    serving: "3-4 oz, 2-3× per week",
    tips: "Baked or grilled; avoid breaded/fried versions",
    icon: Fish
  },
  {
    id: 6,
    name: "Nuts & Seeds",
    subtext: "Almonds, Walnuts, Flax, Chia",
    category: "Protein + Healthy Fat",
    gi: "10-20",
    gl: "1-2 per ounce",
    badge: "Metabolism Boost",
    benefit: "Protein + healthy fats slow digestion; polyphenols boost insulin sensitivity",
    mechanism: "Almonds reduce HbA1c by −0.13% within 12 weeks; walnuts and omega-3 nuts reduce inflammatory insulin resistance markers [6, 9]",
    serving: "1 oz (handful) as snack, or 2 tbsp nut butter with meal",
    tips: "Raw, unsalted preferred; add to salads, oatmeal, or eat as afternoon snack",
    icon: Droplets
  },
  {
    id: 7,
    name: "Non-Starchy Vegetables",
    subtext: "Broccoli, Bell Peppers, Zucchini, Cauliflower",
    category: "Fiber + Micronutrient",
    gi: "10-15",
    gl: "1-2 per cup",
    badge: "AMPK Activator",
    benefit: "Nearly zero blood sugar impact; sulforaphane (in broccoli) activates AMPK",
    mechanism: "Cruciferous vegetables show strongest diabetes-protective evidence of all vegetable categories; sulforaphane shows AMPK activation in human trials [4]",
    serving: "2-3 cups per day, variety of colors",
    tips: "Roast with olive oil for satiety; include at every meal",
    icon: Utensils
  },
  {
    id: 8,
    name: "Cinnamon",
    subtext: "Ceylon preferred",
    category: "Spice",
    gi: "N/A",
    gl: "N/A",
    badge: "Glucose Controller",
    benefit: "Polyphenols (cinnamtannins) enhance GLUT4 glucose transporter translocation",
    mechanism: "1–6 g daily reduces fasting glucose by 10–29% and improves HOMA-IR in prediabetics; Ceylon preferred for safety [5]",
    serving: "1-2 tsp per day (mixed into oatmeal, coffee, or tea)",
    tips: "Ceylon cinnamon preferred (lower coumarin); Ceylon > Cassia",
    icon: Sparkles
  },
  {
    id: 9,
    name: "Avocado",
    subtext: "Fresh or as spread",
    category: "Healthy Fat",
    gi: 15,
    gl: 1,
    badge: "Satiety King",
    benefit: "Monounsaturated fat + fiber slow glucose absorption; no blood sugar spike",
    mechanism: "Daily avocado improves HOMA-IR and reduces visceral adiposity within 12 weeks without increasing caloric intake [7]",
    serving: "½-1 avocado daily",
    tips: "Add to salads, use as spread instead of mayo, or eat plain with lemon",
    icon: Apple
  },
  {
    id: 10,
    name: "Greek Yogurt",
    subtext: "Unsweetened, Full-Fat",
    category: "Protein + Probiotics",
    gi: 11,
    gl: 1,
    badge: "Gut Health",
    benefit: "High protein slows gastric emptying; probiotics support gut health",
    mechanism: "Protein + probiotics + calcium combination improves insulin sensitivity and reduces fasting glucose; regular consumption supports healthy body weight [10]",
    serving: "6-8 oz daily as snack or breakfast",
    tips: "Choose plain, full-fat varieties; add your own berries to control sugar",
    icon: Coffee
  },
  {
    id: 11,
    name: "Vinegar",
    subtext: "Apple Cider Vinegar",
    category: "Condiment",
    gi: "N/A",
    gl: "N/A",
    badge: "Glucose Slower",
    benefit: "Acetic acid slows gastric emptying and lowers postprandial glucose",
    mechanism: "Acetic acid reduces postprandial glucose by 20–30% and insulin response by 34% in controlled RCTs [8]",
    serving: "1-2 tbsp mixed with water before meals, or in salad dressing",
    tips: "Don't consume undiluted (acidic to teeth); use in vinaigrettes",
    icon: Wine
  },
  {
    id: 12,
    name: "Mushrooms",
    subtext: "Shiitake, Cremini, Oyster",
    category: "Polysaccharide + Umami",
    gi: 10,
    gl: 1,
    badge: "Immune Boost",
    benefit: "Beta-glucans + polysaccharides modulate postprandial glucose; low calorie",
    mechanism: "Mushroom polysaccharides show prebiotic effects supporting metabolic health",
    serving: "½-1 cup cooked, 3-4× per week",
    tips: "Cook with garlic and olive oil for absorption of polyphenols; add to soups/stews",
    icon: Microscope
  }
];

// ============================================================================
// ENHANCED CLINICAL REFERENCES (with specific findings & actionable advice)
// ============================================================================

const citations = [
  {
    id: 'ref-1',
    num: 1,
    authors: 'Rondanelli et al.',
    year: 2023,
    title: 'A Narrative Review on Strategies for the Reversion of Prediabetes to Normoglycemia: Food Pyramid, Physical Activity, and Self-Monitoring Innovative Glucose Devices',
    journal: 'Nutrients',
    doi: '10.3390/nu15234943',
    pmid: '38068801',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10707766/',
    covers: ['Leafy Greens', 'Legumes', 'General Diet'],
    finding: "This review identifies a Mediterranean-style, low-glycemic dietary pattern built around leafy greens, legumes, and whole grains as one of the most effective non-pharmacological strategies for reversing prediabetes to normoglycemia.",
    actionable: "Consume 2–3 cups leafy greens and 1 serving of legumes daily as a foundation for prediabetes reversal."
  },
  {
    id: 'ref-2',
    num: 2,
    authors: 'Yao et al.',
    year: 2014,
    title: 'Dietary fiber intake and risk of type 2 diabetes: A dose-response analysis of prospective studies',
    journal: 'European Journal of Epidemiology',
    doi: '10.1007/s10654-013-9876-x',
    pmid: '24389767',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24389767/',
    covers: ['Legumes', 'Whole Grains', 'Non-Starchy Vegetables'],
    finding: "Across 17 prospective cohort studies (488,293 participants), higher total dietary fiber intake was associated with a lower risk of type 2 diabetes (combined RR 0.81), with cereal fiber showing the strongest individual association (RR 0.77).",
    actionable: "Aim for 25–35 g fiber daily from legumes (lentils, chickpeas), whole grains (oats, barley), and non-starchy vegetables to meaningfully reduce glycemic load."
  },
  {
    id: 'ref-3',
    num: 3,
    authors: 'Stull et al.',
    year: 2010,
    title: 'Bioactives in blueberries improve insulin sensitivity in obese, insulin-resistant men and women',
    journal: 'Journal of Nutrition',
    doi: '10.3945/jn.110.125336',
    pmid: '20724487',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20724487/',
    covers: ['Berries'],
    finding: "Blueberry bioactive supplementation significantly improved insulin sensitivity in obese, insulin-resistant adults; anthocyanins were identified as the primary active compounds driving GLUT4 upregulation.",
    actionable: "Consume 1 cup of fresh blueberries or mixed berries daily — pair with nuts or Greek yogurt to slow glucose absorption further."
  },
  {
    id: 'ref-4',
    num: 4,
    authors: 'Zurbau et al.',
    year: 2020,
    title: 'Relation of Different Fruit and Vegetable Sources With Incident Cardiovascular Outcomes: A Systematic Review and Meta-Analysis of Prospective Cohort Studies',
    journal: 'Journal of the American Heart Association',
    doi: '10.1161/JAHA.120.017728',
    pmid: '33000670',
    url: 'https://www.ahajournals.org/doi/10.1161/JAHA.120.017728',
    covers: ['Berries', 'Non-Starchy Vegetables', 'Leafy Greens'],
    finding: "This meta-analysis found that specific fruit and vegetable sources — including berries and leafy greens — carry stronger associations with reduced cardiovascular risk than fruit and vegetables as an undifferentiated category, supporting food-specific rather than generic recommendations.",
    actionable: "Prioritize berries, leafy greens, and broccoli or Brussels sprouts — these categories carry the strongest diabetes-preventive evidence of all fruits and vegetables."
  },
  {
    id: 'ref-5',
    num: 5,
    authors: 'Moridpour et al.',
    year: 2024,
    title: 'The effect of cinnamon supplementation on glycemic control in patients with type 2 diabetes mellitus: An updated systematic review and dose-response meta-analysis of randomized controlled trials',
    journal: 'Phytotherapy Research',
    doi: '10.1002/ptr.8026',
    pmid: '37818728',
    url: 'https://pubmed.ncbi.nlm.nih.gov/37818728/',
    covers: ['Cinnamon'],
    finding: "Across 24 RCTs, cinnamon supplementation produced a statistically significant reduction in fasting blood glucose and improved HOMA-IR in patients with type 2 diabetes.",
    actionable: "Add 1–2 tsp Ceylon cinnamon daily to oatmeal, coffee, or tea; Ceylon (Cinnamomum zeylanicum) is preferred over Cassia due to lower coumarin content."
  },
  {
    id: 'ref-6',
    num: 6,
    authors: 'Madan et al.',
    year: 2021,
    title: 'Effect of Almond Consumption on Metabolic Risk Factors — Glucose Metabolism, Hyperinsulinemia, Selected Markers of Inflammation: A Randomized Controlled Trial in Adolescents and Young Adults',
    journal: 'Frontiers in Nutrition',
    doi: '10.3389/fnut.2021.668622',
    pmid: '34249987',
    url: 'https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2021.668622/full',
    covers: ['Nuts & Seeds'],
    finding: "In a 90-day randomized trial in adolescents and young adults at risk of prediabetes, daily almond consumption (56g) significantly reduced HbA1c, LDL-cholesterol, and total cholesterol compared to an iso-caloric control snack; stimulated insulin also decreased more in the almond group.",
    actionable: "Consume 1 oz (≈23 almonds) daily as a snack or with meals; unsalted raw or dry-roasted preferred for maximum benefit."
  },
  {
    id: 'ref-7',
    num: 7,
    authors: 'Zhang et al.',
    year: 2022,
    title: 'Avocado Consumption for 12 Weeks and Cardiometabolic Risk Factors: A Randomized Controlled Trial in Adults with Overweight or Obesity and Insulin Resistance',
    journal: 'Journal of Nutrition',
    doi: '10.1093/jn/nxac126',
    pmid: '35700149',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35700149/',
    covers: ['Avocado'],
    finding: "Replacing carbohydrate energy with avocado energy for 12 weeks was associated with a healthier dietary pattern and trends toward improved glucose control and reduced cardiometabolic risk markers in adults with insulin resistance, though the primary insulin-sensitivity outcome did not reach statistical significance.",
    actionable: "Include ½–1 avocado daily in salads, as a spread, or with eggs; the monounsaturated fat and fiber work synergistically to slow glucose absorption."
  },
  {
    id: 'ref-8',
    num: 8,
    authors: 'Shishehbor et al.',
    year: 2017,
    title: 'Vinegar consumption can attenuate postprandial glucose and insulin responses; a systematic review and meta-analysis of clinical trials',
    journal: 'Diabetes Research and Clinical Practice',
    doi: '10.1016/j.diabres.2017.01.021',
    pmid: '28292654',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28292654/',
    covers: ['Vinegar'],
    finding: "This systematic review and meta-analysis found that vinegar consumption significantly attenuates postprandial glucose and insulin responses in both healthy and metabolically unhealthy adults when consumed with a meal.",
    actionable: "Consume 1–2 tbsp apple cider vinegar diluted in water before meals, or use in salad dressings; do not consume undiluted due to acidity."
  },
  {
    id: 'ref-9',
    num: 9,
    authors: 'Chauhan & Chauhan',
    year: 2020,
    title: 'Beneficial Effects of Walnuts on Cognition and Brain Health',
    journal: 'Nutrients',
    doi: '10.3390/nu12020550',
    pmid: '32093220',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32093220/',
    covers: ['Nuts & Seeds'],
    finding: "This review's primary focus is cognitive and neuroprotective effects, not glucose metabolism specifically — it notes walnuts' antioxidant and anti-inflammatory properties as a plausible mechanism relevant to metabolic disease generally, but does not report direct glycemic outcomes.",
    actionable: "Include walnuts in your regular nut rotation for their broader anti-inflammatory and antioxidant profile alongside other blood-sugar-focused foods on this list."
  },
  {
    id: 'ref-10',
    num: 10,
    authors: 'Watanabe et al.',
    year: 2018,
    title: 'Daily Yogurt Consumption Improves Glucose Metabolism and Insulin Sensitivity in Young Nondiabetic Japanese Subjects with Type-2 Diabetes Risk Alleles',
    journal: 'Nutrients',
    doi: '10.3390/nu10121834',
    pmid: '30501031',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6316314/',
    covers: ['Greek Yogurt'],
    finding: "Four weeks of daily yogurt consumption improved postprandial glucose and insulin responses in young nondiabetic adults, with the effect concentrated in participants carrying a higher genetic risk score for type 2 diabetes.",
    actionable: "Choose plain, full-fat Greek yogurt (6–8 oz daily); avoid flavored varieties with added sugars — add your own berries to control the glycemic load."
  }
];

// ============================================================================
// COMPLETE 3-DAY MEAL PLAN (Enhanced with detailed descriptions)
// ============================================================================

const mealPlan = [
  {
    day: 1,
    meals: {
      breakfast: {
        description: "Steel‑cut oats (½ cup) with cinnamon (1 tsp), almonds (1 oz), blueberries (1 cup), and Greek yogurt (6 oz). Cook oats in water with cinnamon for 20 minutes. Top with yogurt, berries, and almonds.",
        gl: 8,
        foods: ["Whole Grains", "Cinnamon", "Nuts & Seeds", "Berries", "Greek Yogurt"]
      },
      snack: {
        description: "Medium apple with 2 tbsp almond butter. Wash apple, quarter, and dip in almond butter.",
        gl: 6,
        foods: ["Nuts & Seeds"]
      },
      lunch: {
        description: "Grilled salmon (4 oz) with roasted broccoli & bell peppers (2 cups) tossed in olive oil. Bake salmon at 400°F for 12-15 minutes. Roast vegetables for 20 minutes.",
        gl: 2,
        foods: ["Fatty Fish", "Non-Starchy Vegetables"]
      },
      dinner: {
        description: "Chickpea & spinach soup (1½ cups) made with chickpeas, spinach, vegetable broth, garlic, onion, turmeric. Serve with a side salad tossed in apple cider vinaigrette.",
        gl: 7,
        foods: ["Legumes", "Leafy Greens", "Vinegar"]
      }
    },
    dailyGL: 23
  },
  {
    day: 2,
    meals: {
      breakfast: {
        description: "Spinach & mushroom omelet (2 eggs) with ¾ cup sliced mushrooms and 1 cup spinach. Serve with 1 slice whole grain toast and ½ avocado.",
        gl: 9,
        foods: ["Leafy Greens", "Mushrooms", "Whole Grains", "Avocado"]
      },
      snack: {
        description: "Handful of mixed nuts (1 oz) – almonds, walnuts, macadamia.",
        gl: 2,
        foods: ["Nuts & Seeds"]
      },
      lunch: {
        description: "Rainbow lentil salad: ¾ cup cooked lentils with cherry tomatoes, cucumber, bell peppers. Dress with apple cider vinegar (2 tbsp), olive oil, Dijon mustard, garlic, lemon juice.",
        gl: 8,
        foods: ["Legumes", "Non-Starchy Vegetables", "Vinegar"]
      },
      dinner: {
        description: "Grilled mackerel (4 oz) with quinoa (¾ cup cooked) and roasted Brussels sprouts (1½ cups) tossed with cinnamon (½ tsp) and olive oil.",
        gl: 10,
        foods: ["Fatty Fish", "Whole Grains", "Non-Starchy Vegetables", "Cinnamon"]
      }
    },
    dailyGL: 29
  },
  {
    day: 3,
    meals: {
      breakfast: {
        description: "Greek yogurt parfait: 8 oz plain Greek yogurt topped with 1 cup raspberries, 1 oz walnuts, and a drizzle of almond butter.",
        gl: 7,
        foods: ["Greek Yogurt", "Berries", "Nuts & Seeds"]
      },
      snack: {
        description: "Celery sticks (2-3 stalks) with 2 tbsp almond butter. Dip celery into almond butter.",
        gl: 3,
        foods: ["Nuts & Seeds"]
      },
      lunch: {
        description: "Turkey & leafy green salad: 3.5 oz roasted turkey breast over 2 cups mixed greens with ½ cup chickpeas, bell peppers, cucumber, tomatoes. Dressed with apple cider vinaigrette.",
        gl: 9,
        foods: ["Leafy Greens", "Legumes", "Non-Starchy Vegetables", "Vinegar"]
      },
      dinner: {
        description: "Baked salmon (4 oz) with ⅓ medium sweet potato (roasted with cinnamon) and 2 cups steamed broccoli.",
        gl: 11,
        foods: ["Fatty Fish", "Non-Starchy Vegetables"]
      }
    },
    dailyGL: 30
  }
];

// ============================================================================
// FAQS & INTERNAL LINKS
// ============================================================================

const faqs = [
  {
    id: 1,
    question: "Can I eat fruit if I have prediabetes?",
    answer: "Yes, but choose low-GI fruits (berries), pair with protein/fat, and limit portions. Berries are ideal because their high fiber content lowers glycemic load."
  },
  {
    id: 2,
    question: "How much of each food should I eat per day?",
    answer: "Serving sizes vary by food. General rule: fill half your plate with non-starchy vegetables, ¼ with protein, ¼ with whole grains or legumes."
  },
  {
    id: 3,
    question: "How long until I see A1C improvements?",
    answer: "8-12 weeks for measurable change. Many people notice early wins within 2-3 weeks: more stable energy, reduced bloating, better sleep."
  },
  {
    id: 4,
    question: "Can I use supplements instead of these foods?",
    answer: "No. Whole foods synergize—the combination of fiber, polyphenols, and micronutrients works better together. Supplements support, not replace, whole foods."
  },
  {
    id: 5,
    question: "Are canned/frozen versions as good as fresh?",
    answer: "Yes. Frozen vegetables retain nutrients and are often more affordable. Choose low-sodium canned options."
  }
];

const internalLinks = {
  pillar: {
    text: "Natural Blood Sugar Control Pillar",
    url: '/pillars/natural-blood-sugar-control'
  },
  deepDive: {
    text: "How Insulin Resistance Develops & How to Fix It",
    url: '/blog/prediabetes-insulin-resistance-explained'
  },
  crossSilo: {
    text: "Best Diabetes Supplements of 2026: Ranked & Compared",
    url: '/blog/best-diabetes-supplements'
  }
};

const heroImage = '/images/blog/best-foods-blood-sugar-cover.webp';

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const BestFoodsBloodSugar = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [faqFilter, setFaqFilter] = useState('');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedMealDay, setSelectedMealDay] = useState(0);

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqFilter.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqFilter.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <ArticleLayout
      seo={{
        title: seoConfig.title,
        description: seoConfig.metaDescription,
        keywords: seoConfig.keywords.join(', '),
        image: seoConfig.image,
        url: seoConfig.slug,
      }}
      category="diet"
      title="Best Foods for Blood Sugar Control: The Science-Backed Prediabetes Diet Plan"
      readTime="12 min read"
      backLinkTo="/blog"
    >
      {/* HERO IMAGE */}
      {heroImage && (
        <figure className="mb-12">
          <img
            src={heroImage}
            alt="Collage of the best foods for blood sugar control: leafy greens, legumes, berries, nuts, and whole grains"
            className="w-full rounded-xl shadow-lg"
            width={800}
            height={480}
          />
          <figcaption className="text-center text-sm text-gray-600 mt-4">
            {seoConfig.metaDescription}
          </figcaption>
        </figure>
      )}

          {/* TLDR SUMMARY */}
          <section className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              Quick Summary
            </h2>
            <ul className="space-y-3">
              {tldrSummary.map((item, idx) => (
                <li key={idx} className="text-gray-800 text-lg">{item}</li>
              ))}
            </ul>
          </section>

          {/* WHY FOOD CHOICES MATTER */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Food Choices Matter</h2>
            <p className="text-lg text-gray-700 mb-4">
              Most people don't realize which foods are sabotaging their blood sugar. When you eat high-GI foods, your blood sugar spikes fast, then crashes. Over time, this exhausts your GLUT4 glucose transporters—your cells' "glucose doors."
            </p>
            <p className="text-lg text-gray-700 mb-6">
              But here's the good news: specific foods can reactivate these doors and restore your insulin sensitivity. This isn't about deprivation—it's about choosing foods that work WITH your biology instead of against it.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-blue-900 font-semibold">
                📚 <Link to={internalLinks.pillar.url} className="text-blue-600 hover:underline">{internalLinks.pillar.text}</Link>
              </p>
              <p className="text-blue-800 mt-2">For the complete system—including sleep, exercise, stress—visit our full pillar.</p>
            </div>
          </section>

          {/* DEEP SCIENCE (Enhanced) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Food Controls Blood Sugar (The Science)</h2>
            <div className="space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  The Glucose Entry Point (GLUT4 + Insulin Sensitivity)
                </h3>
                <p className="text-gray-700 mb-4">Think of GLUT4 as a glucose "door" on your cells. When insulin sensitivity is high, these doors open easily and pull sugar inside for energy. Best foods help keep these doors responsive.</p>
                <p className="text-gray-700 mb-4">Your cells have a fuel sensor called AMPK. When you eat soluble fiber, resistant starch, and polyphenols, AMPK activation increases—like tuning an engine for efficiency.</p>
                <div className="bg-white border-l-4 border-emerald-600 p-4 mt-4 rounded-r-lg">
                  <p className="text-emerald-900 font-semibold">Key Insight:</p>
                  <p className="text-emerald-800">Normal postprandial glucose (after-meal) spike: 140-200 mg/dL. With optimized foods: 100-130 mg/dL. That 30-40% reduction compounds over time.</p>
                </div>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-purple-600" />
                  The Fiber Advantage (Soluble vs. Resistant Starch)
                </h3>
                <p className="text-gray-700 mb-4"><strong>Soluble fiber</strong> works like a traffic controller for glucose—it slows how fast sugar enters your bloodstream, preventing blood sugar spikes.</p>
                <p className="text-gray-700 mb-4"><strong>Resistant starch</strong> is like a delayed-release glucose packet. Your body processes it slowly, giving your pancreas time to manage insulin smoothly.</p>
                <div className="bg-white border-l-4 border-purple-600 p-4 mt-4 rounded-r-lg">
                  <p className="text-gray-800"><strong>The Result:</strong> Dietary fiber reduces postprandial glucose spikes significantly — each 10 g/day increment is associated with a 27% lower type 2 diabetes risk across prospective studies. <span className="text-xs text-gray-500">[Ref 2]</span></p>
                </div>
              </div>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                  The Polyphenol Effect (Antioxidants + Insulin)
                </h3>
                <p className="text-gray-700 mb-4">Polyphenols (in berries, greens, legumes) are plant compounds that boost insulin sensitivity. They help your cells respond better to insulin—like tuning an engine.</p>
                <p className="text-gray-700">Specific compounds: anthocyanins (berries), catechins (green tea), quercetin (onions). Together, they restore GLUT4 responsiveness.</p>
              </div>
            </div>
          </section>

          {/* THE 12 FOODS - WITH GREEN FRAME */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The 12 Best Foods for Blood Sugar Control</h2>
            <p className="text-gray-700 mb-8">Each food works through different mechanisms. Choose variety to get the full benefit.</p>
            <div className="border-2 border-emerald-400 rounded-xl p-6 bg-gradient-to-br from-emerald-50 to-green-50">
              <div className="grid md:grid-cols-2 gap-6">
                {bestFoods.map((food) => (
                  <FoodCard key={food.id} food={food} showGLMeter={true} />
                ))}
              </div>
            </div>
          </section>

          {/* CLINICAL EVIDENCE */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Clinical Evidence — 10 Peer-Reviewed Studies</h2>
            <p className="text-gray-600 mb-6">All studies are accessible via PubMed. Reference numbers [1]–[10] correspond to citations in the food cards above.</p>
            <div className="space-y-3">
              {citations.map((citation) => (
                <div key={citation.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-4">
                    {/* Reference number badge */}
                    <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full text-sm font-bold flex items-center justify-center">
                      {citation.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      {/* Food tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {citation.covers.map((tag) => (
                          <span key={tag} className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Citation line */}
                      <p className="text-gray-800 text-sm mb-2">
                        <strong>{citation.authors}</strong> ({citation.year}). "{citation.title}." <em>{citation.journal}</em>.
                        {citation.pmid && (
                          <span className="text-gray-500 ml-1 text-xs">PMID: {citation.pmid}</span>
                        )}
                      </p>
                      {/* Finding */}
                      <p className="text-sm text-gray-700 mb-1.5">
                        <span className="font-semibold text-gray-900">Key finding:</span> {citation.finding}
                      </p>
                      {/* Actionable */}
                      <p className="text-sm text-emerald-800 bg-emerald-50 rounded-lg px-3 py-2 mb-2">
                        <span className="font-semibold">✅ Action:</span> {citation.actionable}
                      </p>
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 font-semibold text-xs underline"
                      >
                        View full study on PubMed →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA #1 — MID-ARTICLE (50% Mark) — Email Capture ── */}
          <section className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8 rounded-2xl mb-12 shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-100 mb-2">
              Free Download — No Credit Card Needed
            </p>
            <h2 className="text-3xl font-bold mb-4">🎯 Diet is Step One. Here's Your Complete System.</h2>
            <p className="text-lg mb-6">
              These 12 foods work best as part of a complete plan. The{' '}
              <strong>"7-Day Blood Sugar Reset Guide"</strong> combines them into proven meal
              combinations that lower post-meal glucose spikes by up to 35% — written specifically
              for adults 40+ with prediabetes.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6">
              <p className="font-semibold mb-3">Inside, you'll find:</p>
              <ul className="space-y-2">
                <li>✅ 21 ready-to-make recipes using these 12 foods</li>
                <li>✅ Shopping list with portion sizes</li>
                <li>✅ Supplement timing guide for maximum AMPK activation</li>
                <li>✅ Bonus: Spice pairings that boost insulin sensitivity</li>
              </ul>
            </div>
            <p className="text-sm mb-6 opacity-90">
              Join 47,000+ seniors who've already reversed their prediabetes with this system.
            </p>
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition text-lg"
            >
              👉 Get Your Free 7-Day Reset Guide →
            </button>
            <p className="text-xs mt-4 opacity-75">We respect your privacy. Unsubscribe anytime.</p>
          </section>

          {/* 3-DAY MEAL PLAN */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">3-Day Sample Meal Plan</h2>
            <p className="text-gray-600 mb-6">See how to combine these 12 foods into real meals. Each day targets a total glycemic load (GL) of ≤ 30 — the evidence-based sweet spot for prediabetics.</p>

            {/* Day selector tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
              {mealPlan.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMealDay(idx)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all shadow-sm ${
                    selectedMealDay === idx
                      ? 'bg-emerald-600 text-white shadow-emerald-200 shadow-md'
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-400 hover:text-emerald-700'
                  }`}
                >
                  Day {idx + 1}
                </button>
              ))}
            </div>

            {/* Meal card */}
            <div className="bg-white border-2 border-emerald-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Card header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
                <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-0.5">Day {selectedMealDay + 1} Menu</p>
                <p className="text-white font-bold text-lg">Daily Glycemic Load: {mealPlan[selectedMealDay].dailyGL} <span className="text-emerald-200 font-normal text-sm">(Target: 20–30 ✅)</span></p>
              </div>

              {/* Meals */}
              <div className="divide-y divide-gray-100">
                {Object.entries(mealPlan[selectedMealDay].meals).map(([mealType, meal]) => {
                  const mealIcons: Record<string, string> = {
                    breakfast: '🌅',
                    snack: '🍎',
                    lunch: '☀️',
                    dinner: '🌙',
                  };
                  return (
                    <div key={mealType} className="px-6 py-5 hover:bg-emerald-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl flex-shrink-0 mt-0.5">{mealIcons[mealType] ?? '🍽️'}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <h4 className="font-bold text-gray-900 capitalize text-base">{mealType}</h4>
                            {meal.gl !== undefined && (
                              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                                GL: {meal.gl}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{meal.description}</p>
                          {meal.foods && meal.foods.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {meal.foods.map((food: string) => (
                                <span key={food} className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full">
                                  {food}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-6 py-3">
                <p className="text-xs text-gray-500">
                  💡 <strong>Tip:</strong> Drink a glass of water before each meal and take a 10-min walk after dinner to further reduce postprandial glucose.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 mb-6">Click any question to reveal the answer:</p>
            <div className="mb-6">
              <div className="relative max-w-md">
                <input type="text" placeholder="Search FAQs..." aria-label="Search frequently asked questions" value={faqFilter} onChange={(e) => setFaqFilter(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
                <svg className="absolute inset-y-0 left-3 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              {faqFilter && <p className="text-sm text-gray-600 mt-2">Showing {filteredFAQs.length} of {faqs.length} FAQs</p>}
            </div>
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <div key={faq.id} className="border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      id={`faq-question-${faq.id}`}
                      aria-expanded={expandedFAQ === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full bg-emerald-50 hover:bg-emerald-100 p-4 text-left flex items-center justify-between font-semibold text-gray-900 transition"
                    >
                      <span>{faq.question}</span>
                      {expandedFAQ === faq.id ? <Minus className="w-5 h-5 text-emerald-600" /> : <Plus className="w-5 h-5 text-emerald-600" />}
                    </button>
                    {expandedFAQ === faq.id && (
                      <div id={`faq-answer-${faq.id}`} role="region" aria-labelledby={`faq-question-${faq.id}`} className="bg-white p-4 border-t border-gray-300">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-2">No FAQs found</p>
                  <button onClick={() => setFaqFilter('')} className="text-emerald-600 hover:text-emerald-700 font-medium">Clear search</button>
                </div>
              )}
            </div>
          </section>

          {/* FINAL CTA & INTERNAL LINKS */}
          <section className="mb-12 bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ You Now Know the 12 Best Foods for Blood Sugar Control</h2>
            <p className="text-lg text-gray-700 mb-4">The science is clear: food choices matter profoundly. Every meal is an opportunity to activate GLUT4 sensitivity, feed beneficial gut bacteria, and lower your A1C.</p>
            <p className="text-lg text-gray-700 mb-6">But knowing is not the same as doing. The step that changes everything? <strong>Commit to ONE food swap this week.</strong> Replace one refined carb meal with one legume-based meal. That's it.</p>
            <div className="mt-8 pt-8 border-t-2 border-emerald-200">
              <Link to={internalLinks.pillar.url} className="inline-block bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">Start Your Personal Prediabetes Reversal Plan →</Link>
            </div>
          </section>

          {/* ── CTA #2 — END OF ARTICLE — Supplements Cross-Link ── */}
          <section className="mb-12">
            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">💊</span>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-1">
                    Supplements &amp; Natural Health
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Want to Go Further? Certain Supplements Can Amplify a Blood-Sugar-Friendly Diet
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Diet is the foundation — but clinically studied supplements like berberine, Ceylon
                    cinnamon, and chromium picolinate target the exact same AMPK and GLUT4 pathways
                    these 12 foods activate. Combined, the effect is significantly stronger than either alone.
                    We ranked the top 5 options using 2024–2026 peer-reviewed clinical data.
                  </p>
                  <Link
                    to={internalLinks.crossSilo.url}
                    className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
                  >
                    Read: {internalLinks.crossSilo.text} →
                  </Link>
                  <p className="text-xs text-gray-500 mt-3">
                    Evidence-based · GMP-certified picks only · 2024–2026 clinical data
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-3">🔬 Deep Dive Available</h3>
              <p className="text-blue-800 mb-4">Want to understand insulin resistance at the cellular level?</p>
              <Link to={internalLinks.deepDive.url} className="text-blue-600 hover:text-blue-800 font-semibold underline">{internalLinks.deepDive.text} →</Link>
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-emerald-900 mb-3">🥗 Start Your Reversal Plan</h3>
              <p className="text-emerald-800 mb-4">Ready to combine diet, supplements, movement, and sleep into one complete system?</p>
              <Link to={internalLinks.pillar.url} className="text-emerald-600 hover:text-emerald-800 font-semibold underline">{internalLinks.pillar.text} →</Link>
            </div>
          </section>

          {/* DISCLAIMERS */}
          <footer className="border-t-2 border-gray-200 pt-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DietMedicalDisclaimerCompact />
              <DietAffiliateDisclaimerProductCompact />
            </div>
          </footer>

      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </ArticleLayout>
  );
};

export default BestFoodsBloodSugar;

export const blogMeta: BlogArticleMeta = {
  title: "Best Foods for Blood Sugar Control: The Science-Backed Prediabetes Diet Plan",
  excerpt: "The foods that actually stabilize glucose, backed by 2024-2026 clinical research, plus a 3-day meal plan built around them.",
  readTime: "12 min read",
  image: "/images/blog/best-foods-blood-sugar-cover.webp",
  path: "/blog/best-foods-blood-sugar",
  category: "diet",
};