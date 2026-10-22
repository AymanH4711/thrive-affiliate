// Static content for the insulin sensitivity FAQ article.
// Keeping this data outside the component prevents FAQ/schema effects from
// re-running on every render and makes the evidence trail easier to audit.

export const DATE_PUBLISHED = '2026-04-08';
export const DATE_MODIFIED = '2026-10-20';

export interface CitationProps {
  authors: string;
  year: number;
  title: string;
  journal: string;
  url: string;
  pmid?: string;
  doi?: string;
}

export const citations: CitationProps[] = [
  {
    authors: 'American Diabetes Association Standards of Care Committee',
    year: 2026,
    title: '2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026',
    journal: 'Diabetes Care',
    doi: '10.2337/dc26-S002',
    url: 'https://doi.org/10.2337/dc26-S002',
  },
  {
    authors: 'Crandall JP, Dabelea D, Knowler WC, et al. (DPP Research Group)',
    year: 2025,
    title: 'The Diabetes Prevention Program and Its Outcomes Study: NIDDK’s Journey Into the Prevention of Type 2 Diabetes and Its Public Health Impact',
    journal: 'Diabetes Care',
    doi: '10.2337/dc25-0014',
    url: 'https://doi.org/10.2337/dc25-0014',
  },
  {
    authors: 'Wang Y, Chai X, Wang Y, et al.',
    year: 2025,
    title: 'Effectiveness of Different Intervention Modes in Lifestyle Intervention for the Prevention of Type 2 Diabetes and the Reversion to Normoglycemia in Adults With Prediabetes: Systematic Review and Meta-Analysis of Randomized Controlled Trials',
    journal: 'Journal of Medical Internet Research',
    pmid: '39879607',
    doi: '10.2196/63975',
    url: 'https://doi.org/10.2196/63975',
  },
  {
    authors: 'Zhang H, Guo Y, Hua G, et al.',
    year: 2024,
    title: 'Exercise training modalities in prediabetes: a systematic review and network meta-analysis',
    journal: 'Frontiers in Endocrinology',
    pmid: '38440785',
    doi: '10.3389/fendo.2024.1308959',
    url: 'https://doi.org/10.3389/fendo.2024.1308959',
  },
  {
    authors: 'Mansour A, Sajjadi-Jazi SM, Gerami H, et al.',
    year: 2025,
    title: 'The efficacy and safety of berberine in combination with cinnamon supplementation in patients with type 2 diabetes: a randomized clinical trial',
    journal: 'European Journal of Nutrition',
    pmid: '39998703',
    doi: '10.1007/s00394-025-03618-9',
    url: 'https://doi.org/10.1007/s00394-025-03618-9',
  },
  {
    authors: 'Pinheiro M, Costa H, Mariana M, Cairrao E.',
    year: 2025,
    title: 'Sleep Deprivation and Its Impact on Insulin Resistance',
    journal: 'Endocrines',
    doi: '10.3390/endocrines6040049',
    url: 'https://doi.org/10.3390/endocrines6040049',
  },
  {
    authors: 'Derosa G, D’Angelo A, Angelini F, et al.',
    year: 2024,
    title: 'Nutraceuticals and Supplements in Management of Prediabetes and Diabetes',
    journal: 'Nutrients',
    pmid: '39796448',
    doi: '10.3390/nu17010014',
    url: 'https://doi.org/10.3390/nu17010014',
  },
  {
    authors: 'Knowler WC, Barrett-Connor E, Fowler SE, et al. (DPP Research Group)',
    year: 2002,
    title: 'Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin',
    journal: 'New England Journal of Medicine',
    pmid: '12214307',
    doi: '10.1056/NEJMoa012512',
    url: 'https://doi.org/10.1056/NEJMoa012512',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  searchIntent?: string;
  difficulty?: 'beginner' | 'high' | 'critical';
}

export const basicsAndTestingFAQs: FaqItem[] = [
  {
    question: 'What is insulin sensitivity in simple terms?',
    answer:
      'Insulin sensitivity describes how readily muscle, liver, and fat cells respond to insulin. A useful analogy is a volume knob rather than an on/off switch: in sensitive cells, a small insulin signal is enough to move glucose out of the blood; in resistant cells, the pancreas has to turn the volume up. That compensation can work for years, but it can eventually strain beta cells. Insulin resistance is not an automatic sentence—it can improve with sustained changes—and the process often begins before fasting glucose reaches the prediabetes range. That is why trends over time matter more than a single reading.',
  },
  {
    question: 'What is HOMA-IR and what is a healthy score?',
    answer:
      'HOMA-IR estimates insulin resistance from fasting glucose and insulin using the formula (glucose in mg/dL × insulin in mIU/L) ÷ 405. There is no universal cutoff. Many research studies use about 2.0 as a reference point, but assays, labs, and populations differ, so the result should be interpreted with the lab range and clinical context. HOMA-IR is a screening and research aid, not a diagnosis. Most routine panels omit fasting insulin, so ask your clinician whether adding it is appropriate. A single number is less useful than a trend over time.',
  },
  {
    question: 'How do I know if I have poor insulin sensitivity?',
    answer:
      'Laboratory clues include fasting glucose in the prediabetes range (100–125 mg/dL), HbA1c of 5.7–6.4%, or a HOMA-IR that is elevated for your lab. Physical clues can include acanthosis nigricans (dark, velvety skin folds), skin tags, and central weight gain, but none of these is specific. Fatigue, cravings, and brain fog have many possible causes. A fasting glucose reading in the upper-normal range (95–99 mg/dL) is still normal; some clinicians use it as a reason to check fasting insulin, not as a diagnosis. High triglycerides and blood pressure are associated with metabolic syndrome, not proof of insulin resistance. The practical next step is a conversation with a clinician about the full picture.',
  },
  {
    question: 'What causes insulin resistance?',
    answer:
      'Genetics, excess visceral fat, low muscle mass, inactivity, poor sleep, stress, and diets heavy in refined carbohydrates can all contribute. The mechanisms overlap: adipose tissue releases inflammatory signals, inactive muscle expresses less GLUT4, and cortisol can work against insulin. No single food or supplement causes insulin resistance, and no single fix reverses it. Small, sustained changes in movement, sleep, food quality, and weight—when needed—are more useful than chasing one culprit. Some medical conditions and medications also affect glucose metabolism, which is why persistent abnormalities deserve clinical evaluation.',
  },
];

export const improvingNaturallyFAQs: FaqItem[] = [
  {
    question: 'Can insulin sensitivity be improved naturally—without medication?',
    answer:
      'Often, yes—but “naturally” does not mean quickly or permanently. The original Diabetes Prevention Program found that intensive lifestyle change reduced progression to type 2 diabetes by about 58% over roughly three years, and long-term follow-up shows that the benefit can persist. [2][8] The most useful levers are regular movement, a dietary pattern you can sustain, sleep, stress management, and modest weight loss if excess weight is present. Supplements are optional and should be discussed with a clinician. Medication may still be appropriate, especially when glucose is substantially elevated; lifestyle and medication are not mutually exclusive.',
  },
  {
    question: 'What type of exercise is most effective for insulin sensitivity?',
    answer:
      'There is no single “best” exercise. A 2024 network meta-analysis found that combined aerobic and resistance training had a favorable overall profile for glycemia in prediabetes, and higher-intensity work can be effective for some people. [4] The practical prescription is the one you can repeat: build toward about 150 minutes per week of moderate aerobic activity and two or three resistance sessions per week. A short walk after meals is a low-cost way to add movement and may blunt post-meal glucose, though the size of the effect varies. Start where you are and progress gradually.',
  },
  {
    question: 'How does poor sleep affect insulin sensitivity?',
    answer:
      'Short sleep and irregular sleep timing are associated with higher HOMA-IR and greater prediabetes risk. [6] A single night of restricted sleep can reduce insulin sensitivity in healthy adults, and chronic short sleep can increase appetite and cortisol. The fix is not a gadget; it is a consistent schedule, a dark and cool room, and limiting late caffeine and alcohol. If snoring, witnessed pauses in breathing, or daytime sleepiness suggest sleep apnea, ask for an evaluation—untreated apnea is a significant metabolic stressor.',
  },
  {
    question: 'What foods improve insulin sensitivity the fastest?',
    answer:
      'No food fixes insulin resistance overnight. The most useful pattern is one that reduces large glucose swings: non-starchy vegetables, legumes, whole grains, nuts, olive oil, fish, and other minimally processed foods. Protein and fiber at meals can slow digestion, and sugary drinks are the easiest source of rapid glucose to reduce. Cinnamon has modest, inconsistent evidence [7]; vinegar has small, short-term trials. Neither is a substitute for the overall pattern. The goal is a sustainable way of eating, not a list of “magic” foods.',
  },
  {
    question: 'How long does it take to improve insulin sensitivity?',
    answer:
      'Some effects are immediate—a walk can lower post-meal glucose within minutes—but changes in fasting glucose, HOMA-IR, or HbA1c take longer. A reasonable expectation is weeks to months, not days. HbA1c reflects roughly three months of glucose exposure, so a three-month retest is more informative than a daily reading. Individual results vary with baseline, medication, sleep, and how consistently changes are maintained. Track trends with your clinician rather than expecting a fixed timeline.',
  },
];

export const supplementsFAQs: FaqItem[] = [
  {
    question: 'What is the best supplement for insulin sensitivity in 2026?',
    answer:
      'There is no single “best” supplement, and none replaces the fundamentals. Berberine has the most consistent clinical evidence among the options reviewed, but studies vary in formulation, dose, and population; a 2025 randomized trial in type 2 diabetes also reported improvements with berberine plus cinnamon. [5][7] Cinnamon and chromium have modest and less consistent evidence. Banaba is promising but based on smaller trials. If you and your clinician decide to try one, choose a third-party-tested product, use the dose studied, and monitor glucose; avoid stacking multiple glucose-lowering products.',
  },
  {
    question: 'Are multi-ingredient “all-in-one” insulin sensitivity supplements worth it?',
    answer:
      'Sometimes, but label literacy matters more than the number of ingredients. A combination can target complementary pathways, yet many products include token amounts of several ingredients to make the label look impressive. Check the actual milligrams against the doses used in trials, look for third-party testing, and be skeptical of proprietary blends that hide individual doses. More ingredients also means more chances for interaction or gastrointestinal upset. A single well-studied ingredient is often easier to evaluate than a crowded formula.',
  },
  {
    question: 'Is it safe to take insulin sensitivity supplements with Metformin or other diabetes medications?',
    answer:
      'Only with your prescriber’s knowledge. Berberine, cinnamon, and chromium can lower glucose, and combining them with metformin, sulfonylureas, insulin, or GLP-1 receptor agonists may increase the risk of hypoglycemia or require dose adjustment. Berberine also has a broad interaction profile and should not be used during pregnancy or breastfeeding without medical advice. Keep a current medication list, tell your clinician about every supplement, and ask whether more frequent glucose monitoring is needed. Do not stop or change prescribed medication on your own.',
  },
];

export const trackingFAQs: FaqItem[] = [
  {
    question: 'Can insulin resistance be reversed permanently?',
    answer:
      'Insulin resistance can improve substantially, but “permanent” is the wrong frame. Genetics and age cannot be changed, and the metabolic environment that produced resistance can return if habits change. The Diabetes Prevention Program and its long-term follow-up show that sustained lifestyle change can delay or prevent progression to type 2 diabetes. [2][8] Think of it as remission that needs maintenance, not a one-time cure. Regular follow-up, periodic labs, and a plan for setbacks matter more than a perfect streak.',
  },
  {
    question: 'How do I track whether my insulin sensitivity is improving at home?',
    answer:
      'Use the least invasive measure that gives you useful feedback. Waist circumference, energy after meals, and consistency with movement are practical. A home glucometer can help some people see post-meal patterns, but daily fasting checks are not necessary for everyone and can feed anxiety; ask your clinician how often to test. The more meaningful clinical markers are fasting glucose, fasting insulin (if HOMA-IR is being tracked), and HbA1c at intervals. Bring a simple log to appointments and focus on trends, not single readings.',
  },
];

export const allFaqs = [
  ...basicsAndTestingFAQs,
  ...improvingNaturallyFAQs,
  ...supplementsFAQs,
  ...trackingFAQs,
];

export const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Insulin Sensitivity FAQ 2026: 14 Evidence-Informed Answers',
  description:
    'Insulin sensitivity, HOMA-IR, and blood sugar: 14 practical, evidence-informed answers, including what the research does and does not support.',
  url: 'https://thrivehealth360.org/blog/insulin-sensitivity-faq-2026',
  image: 'https://thrivehealth360.org/images/blog/insulin-sensitivity-faq-hero.webp',
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  author: {
    '@type': 'Organization',
    name: 'ThriveHealth360 Editorial Team',
    url: 'https://thrivehealth360.org',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ThriveHealth360',
    url: 'https://thrivehealth360.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://thrivehealth360.org/images/brand/logo.svg',
    },
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Insulin resistance',
  },
  citation: citations.map((citation) => citation.url),
  mainEntity: allFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export interface ComparisonItem {
  name: string;
  mechanism: string;
  evidenceLabel: string;
  evidenceNote: string;
  typicalImprovement: string;
  notes: string;
}

export const comparisonData: ComparisonItem[] = [
  {
    name: 'Berberine (standardized extract)',
    mechanism: 'Activates AMPK and may improve insulin signalling; also affects liver glucose production.',
    evidenceLabel: 'Strongest of the four',
    evidenceNote:
      'Clinical trials and reviews suggest modest improvements, but formulations and populations vary; gastrointestinal effects and drug interactions are common. [5][7]',
    typicalImprovement: 'Modest average reductions in fasting glucose, HbA1c, and HOMA-IR in some trials',
    notes: 'Use only with clinician oversight; not for pregnancy or breastfeeding; interacts with multiple drugs.',
  },
  {
    name: 'Ceylon cinnamon',
    mechanism: 'May influence GLUT4 and carbohydrate digestion; the mechanisms are not fully established.',
    evidenceLabel: 'Moderate but mixed',
    evidenceNote:
      'Trials in type 2 diabetes show small average effects; evidence in prediabetes is thinner. [7]',
    typicalImprovement: 'Small, inconsistent changes in fasting glucose and HbA1c',
    notes: 'Use Ceylon, not Cassia; avoid mega-doses; check for interactions.',
  },
  {
    name: 'Chromium picolinate',
    mechanism: 'A trace mineral involved in normal macronutrient metabolism; may support insulin signalling.',
    evidenceLabel: 'Mixed',
    evidenceNote:
      'Trials are inconsistent; some show small HbA1c changes, others show none. [7]',
    typicalImprovement: 'Small or no average effect',
    notes: 'Choose a third-party-tested product; avoid high-dose self-experimentation.',
  },
  {
    name: 'Banaba leaf (corosolic acid)',
    mechanism: 'May support glucose uptake through GLUT4-related pathways.',
    evidenceLabel: 'Preliminary',
    evidenceNote:
      'Smaller, fewer human trials; promising but not established as a primary strategy.',
    typicalImprovement: 'Uncertain; the effect size is not well established',
    notes: 'Treat as experimental; do not replace proven care.',
  },
];

export interface WarningSign {
  sign: string;
  why: string;
}

export const warningSigns: WarningSign[] = [
  {
    sign: 'Fasting glucose in the upper-normal range (95–99 mg/dL)',
    why: 'Still within the standard normal range, but some clinicians use it as a prompt to check fasting insulin and trends. It is not diagnostic.',
  },
  {
    sign: 'Waist circumference above population-specific cutoffs',
    why: 'Central fat is associated with insulin resistance. Common US metabolic-syndrome cutoffs are >40 in for men and >35 in for women; Asian populations use lower thresholds.',
  },
  {
    sign: 'Dark, velvety skin folds (acanthosis nigricans) or skin tags',
    why: 'Associated with high insulin levels; these can have other causes and should be evaluated by a clinician.',
  },
  {
    sign: 'Fatigue, brain fog, or sleepiness after meals',
    why: 'Nonspecific symptoms with many causes; worth discussing if they are persistent or worsening.',
  },
  {
    sign: 'Strong cravings or difficulty feeling full',
    why: 'Can accompany glucose swings and sleep debt, but these are not specific to insulin resistance.',
  },
  {
    sign: 'High triglycerides (≥150 mg/dL) or low HDL',
    why: 'These are metabolic-syndrome markers associated with insulin resistance, not proof of it.',
  },
  {
    sign: 'Blood pressure ≥130/85 mmHg',
    why: 'A metabolic-syndrome criterion; high blood pressure often coexists with insulin resistance.',
  },
];

export type ColorKey =
  | 'emerald'
  | 'blue'
  | 'amber'
  | 'indigo'
  | 'purple'
  | 'orange'
  | 'green'
  | 'rose';

export interface IngredientItem {
  name: string;
  phase: string;
  role: string;
  evidence: string;
  color: ColorKey;
}

export const insulinSensitivityIngredients: IngredientItem[] = [
  {
    name: 'Berberine',
    phase: 'Best-studied of the four',
    role: 'Activates AMPK and may improve insulin signalling; also reduces liver glucose output and upregulates GLUT4 in some models.',
    evidence:
      'Clinical trials and reviews suggest modest improvements in fasting glucose, HbA1c, and HOMA-IR, but formulations and populations vary. Gastrointestinal effects and drug interactions are common. [5][7]',
    color: 'emerald',
  },
  {
    name: 'Ceylon cinnamon',
    phase: 'Modest, mixed evidence',
    role: 'May influence GLUT4 and slow carbohydrate digestion, but the mechanisms are not fully established.',
    evidence:
      'Trials in type 2 diabetes report small average changes; evidence in prediabetes is thinner. Use Ceylon rather than Cassia. [7]',
    color: 'orange',
  },
  {
    name: 'Chromium picolinate',
    phase: 'Mixed evidence',
    role: 'A trace mineral involved in normal macronutrient metabolism; may support insulin signalling.',
    evidence:
      'Trials are inconsistent; some show small HbA1c changes, others show none. Choose a third-party-tested product. [7]',
    color: 'blue',
  },
  {
    name: 'Banaba leaf (corosolic acid)',
    phase: 'Preliminary',
    role: 'May support glucose uptake through GLUT4-related pathways.',
    evidence:
      'Smaller and fewer human trials than the ingredients above; promising but not established.',
    color: 'purple',
  },
  {
    name: 'Green tea extract (EGCG)',
    phase: 'Metabolic support',
    role: 'Catechins may modestly support insulin-stimulated glucose uptake and metabolic rate.',
    evidence:
      'Mixed evidence across trials; effects on glucose control are generally modest.',
    color: 'green',
  },
  {
    name: 'Apple cider vinegar',
    phase: 'Post-meal support',
    role: 'Acetic acid may slow gastric emptying and blunt post-meal glucose spikes when taken with a meal.',
    evidence:
      'Several small trials report reduced post-meal glucose; the effect appears modest and short-acting. It is not a treatment for insulin resistance.',
    color: 'amber',
  },
  {
    name: 'Korean ginseng',
    phase: 'General metabolic support',
    role: 'Traditionally used to support energy and satiety; mechanisms are not well established.',
    evidence:
      'Evidence is mixed and mostly from smaller trials; not established as a primary glucose-control ingredient.',
    color: 'rose',
  },
  {
    name: 'Resveratrol',
    phase: 'Antioxidant support',
    role: 'An antioxidant studied for effects on insulin signalling and inflammatory markers.',
    evidence:
      'Human trial evidence for glucose-specific outcomes is limited and inconsistent; most robust findings are preclinical.',
    color: 'indigo',
  },
];

export interface MeasurementItem {
  color: ColorKey;
  emoji: string;
  title: string;
  body: string;
  tip: string;
}

export const measurementItems: MeasurementItem[] = [
  {
    color: 'blue',
    emoji: '🩸',
    title: '1. HOMA-IR score (a research and screening aid)',
    body: 'HOMA-IR = (fasting glucose in mg/dL × fasting insulin in mIU/L) ÷ 405. There is no universal cutoff; many studies use about 2.0 as a reference, while labs and populations differ. Ask your clinician whether adding fasting insulin is appropriate, and interpret the result with the lab range and clinical context.',
    tip: 'Useful for tracking a trend over time, not for making a diagnosis from one number.',
  },
  {
    color: 'purple',
    emoji: '📊',
    title: '2. HbA1c — a three-month glucose average',
    body: 'Below 5.7% is considered normal, 5.7–6.4% is the prediabetes range, and 6.5% or higher is in the diabetes range for most adults. HbA1c is a lagging indicator: it can stay normal while insulin resistance is already developing, which is why it is only one part of the picture.',
    tip: 'Best for confirming a pattern and monitoring progress at roughly three-month intervals.',
  },
  {
    color: 'indigo',
    emoji: '📱',
    title: '3. Home glucose monitoring — selective use',
    body: 'A fasting glucose reading of 70–99 mg/dL is generally considered normal. Values of 95–99 are still normal; some clinicians use them as a reason to check fasting insulin, not as a diagnosis. Test at the frequency your clinician recommends; daily fasting checks are not necessary for everyone and can increase anxiety.',
    tip: 'Most useful for spotting post-meal patterns and confirming a clinician-guided plan.',
  },
];

export interface ActionPhase {
  label: string;
  color: ColorKey;
  steps: string[];
}

export const actionPlan: ActionPhase[] = [
  {
    label: 'Weeks 1–2: Get a baseline and remove the biggest glucose load',
    color: 'emerald',
    steps: [
      'Ask your clinician which baseline tests are appropriate: fasting glucose, HbA1c, and—if indicated—fasting insulin for HOMA-IR.',
      'Replace sugary drinks with water, unsweetened tea, or sparkling water for two weeks; notice energy and cravings.',
      'Walk for 10 minutes after one meal you already eat; build the habit before adding more.',
      'Set a consistent bedtime and protect 7–8 hours of sleep.',
      'If you take glucose-lowering medication, ask your clinician before making major diet or fasting changes.',
    ],
  },
  {
    label: 'Weeks 3–4: Build a repeatable rhythm',
    color: 'blue',
    steps: [
      'Add a short walk after a second meal; aim for 10–15 minutes, not perfection.',
      'Add two 20-minute resistance sessions weekly—bodyweight, bands, or weights.',
      'Use a simple plate pattern: half non-starchy vegetables, a quarter protein, a quarter whole grains or starchy food.',
      'Track waist circumference, energy, and consistency weekly; use a glucometer only if your clinician recommends it.',
      'Practice a five-minute wind-down before bed instead of chasing a perfect sleep score.',
    ],
  },
  {
    label: 'Weeks 5–8: Review, adjust, and retest',
    color: 'purple',
    steps: [
      'Build toward 150 minutes per week of moderate activity, spread across the week.',
      'Add a third resistance session only if recovery and schedule allow.',
      'Discuss time-restricted eating with your clinician before trying it—especially if you use insulin or sulfonylureas, are pregnant, or have a history of disordered eating.',
      'At 8–12 weeks, review fasting glucose and HbA1c with your clinician; repeat fasting insulin only if it is being used to track HOMA-IR.',
      'Keep the changes you can sustain; drop the ones that are making you miserable.',
    ],
  },
];

export const colorClasses: Record<
  ColorKey,
  {
    bg50: string;
    border300: string;
    border500: string;
    border600: string;
    bg200: string;
    bg600: string;
    text600: string;
    text700: string;
    text800: string;
    text900: string;
  }
> = {
  emerald: {
    bg50: 'bg-emerald-50',
    border300: 'border-emerald-300',
    border500: 'border-emerald-500',
    border600: 'border-emerald-600',
    bg200: 'bg-emerald-200',
    bg600: 'bg-emerald-600',
    text600: 'text-emerald-600',
    text700: 'text-emerald-700',
    text800: 'text-emerald-800',
    text900: 'text-emerald-900',
  },
  blue: {
    bg50: 'bg-blue-50',
    border300: 'border-blue-300',
    border500: 'border-blue-500',
    border600: 'border-blue-600',
    bg200: 'bg-blue-200',
    bg600: 'bg-blue-600',
    text600: 'text-blue-600',
    text700: 'text-blue-700',
    text800: 'text-blue-800',
    text900: 'text-blue-900',
  },
  amber: {
    bg50: 'bg-amber-50',
    border300: 'border-amber-300',
    border500: 'border-amber-500',
    border600: 'border-amber-600',
    bg200: 'bg-amber-200',
    bg600: 'bg-amber-600',
    text600: 'text-amber-600',
    text700: 'text-amber-700',
    text800: 'text-amber-800',
    text900: 'text-amber-900',
  },
  indigo: {
    bg50: 'bg-indigo-50',
    border300: 'border-indigo-300',
    border500: 'border-indigo-500',
    border600: 'border-indigo-600',
    bg200: 'bg-indigo-200',
    bg600: 'bg-indigo-600',
    text600: 'text-indigo-600',
    text700: 'text-indigo-700',
    text800: 'text-indigo-800',
    text900: 'text-indigo-900',
  },
  purple: {
    bg50: 'bg-purple-50',
    border300: 'border-purple-300',
    border500: 'border-purple-500',
    border600: 'border-purple-600',
    bg200: 'bg-purple-200',
    bg600: 'bg-purple-600',
    text600: 'text-purple-600',
    text700: 'text-purple-700',
    text800: 'text-purple-800',
    text900: 'text-purple-900',
  },
  orange: {
    bg50: 'bg-orange-50',
    border300: 'border-orange-300',
    border500: 'border-orange-500',
    border600: 'border-orange-600',
    bg200: 'bg-orange-200',
    bg600: 'bg-orange-600',
    text600: 'text-orange-600',
    text700: 'text-orange-700',
    text800: 'text-orange-800',
    text900: 'text-orange-900',
  },
  green: {
    bg50: 'bg-green-50',
    border300: 'border-green-300',
    border500: 'border-green-500',
    border600: 'border-green-600',
    bg200: 'bg-green-200',
    bg600: 'bg-green-600',
    text600: 'text-green-600',
    text700: 'text-green-700',
    text800: 'text-green-800',
    text900: 'text-green-900',
  },
  rose: {
    bg50: 'bg-rose-50',
    border300: 'border-rose-300',
    border500: 'border-rose-500',
    border600: 'border-rose-600',
    bg200: 'bg-rose-200',
    bg600: 'bg-rose-600',
    text600: 'text-rose-600',
    text700: 'text-rose-700',
    text800: 'text-rose-800',
    text900: 'text-rose-900',
  },
};

export const getColorClasses = (color: string) =>
  colorClasses[color as ColorKey] ?? colorClasses.emerald;
