// src/data/faqs.ts
// FAQ data for various pages

export interface FAQItem {
  question: string;
  answer: string;
  searchIntent?: string;
  difficulty?: 'beginner' | 'high' | 'critical';
}

// Berberine vs Metformin FAQs
export const berberineFAQs: FAQItem[] = [
  {
    question: "How does berberine compare to metformin for blood sugar control?",
    answer: "Berberine and metformin both help lower blood sugar, but work through different mechanisms. Berberine activates AMPK (similar to exercise) while metformin reduces glucose production in the liver. Studies show berberine can be as effective as metformin for HbA1c reduction, with fewer gastrointestinal side effects.",
    searchIntent: "comparison",
    difficulty: "high"
  },
  {
    question: "What is the recommended dosage of berberine?",
    answer: "The typical therapeutic dose of berberine is 500mg taken 2-3 times daily (1,000-1,500mg total daily). For blood sugar control, 500mg three times daily before meals is most effective. Always start with a lower dose and consult your healthcare provider.",
    searchIntent: "dosage",
    difficulty: "critical"
  },
  {
    question: "Are there any side effects of berberine?",
    answer: "Common side effects include gastrointestinal discomfort (diarrhea, constipation, flatulence) in 10-15% of users. These are usually mild and decrease with continued use. Berberine may interact with certain medications, so consult your doctor before starting.",
    searchIntent: "side effects",
    difficulty: "high"
  },
  {
    question: "Can berberine replace metformin completely?",
    answer: "Berberine can be an effective alternative or complement to metformin, but this should only be decided with your healthcare provider. Some people use berberine as a natural option, while others combine both. Individual response varies based on genetics and health status.",
    searchIntent: "replacement",
    difficulty: "critical"
  },
  {
    question: "How long does it take for berberine to work?",
    answer: "Berberine typically shows effects within 1-2 weeks, with maximum benefits seen after 8-12 weeks of consistent use. Blood sugar improvements are usually noticeable within the first month, but full metabolic benefits may take longer.",
    searchIntent: "timeline",
    difficulty: "beginner"
  },
  {
    question: "Is berberine safe for long-term use?",
    answer: "Berberine appears safe for long-term use when taken at recommended doses. Traditional Chinese medicine has used berberine-containing herbs for thousands of years. Modern studies show good safety profiles, but regular monitoring and medical supervision are recommended.",
    searchIntent: "safety",
    difficulty: "high"
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ADD THIS TO: src/data/faqs.ts
// Append alongside your existing berberineFAQs export
// ─────────────────────────────────────────────────────────────────────────────

export const bestSupplementsFAQs = [
  {
    question: 'Can I take berberine and Metformin at the same time?',
    answer:
      "You should not combine berberine with Metformin without your doctor's approval. Both lower blood sugar through overlapping pathways — taking them together can cause blood sugar to drop too low (hypoglycemia). If you're already on Metformin, talk to your doctor before adding any berberine supplement, including GlucoBliss.",
  },
  {
    question: 'How long does it take for blood sugar supplements to work?',
    answer:
      "Most clinical trials report measurable changes in fasting glucose (mg/dL) within 4–8 weeks of consistent use. Berberine tends to show results faster (sometimes 2–4 weeks), while cinnamon's effects on HbA1c — your 3-month blood sugar average — take longer to appear. Don't judge a supplement by week one.",
  },
  {
    question: 'What is the difference between Ceylon cinnamon and Cassia cinnamon?',
    answer:
      "Ceylon cinnamon (Cinnamomum zeylanicum) is 'true' cinnamon and is safe for daily use. Cassia cinnamon — the common supermarket variety — contains coumarin, a compound that can damage your liver at high supplemental doses. Always check the label: it should say Cinnamomum zeylanicum, not Cinnamomum cassia or Cinnamomum aromaticum.",
  },
  {
    question: 'Are blood sugar supplements safe for seniors over 65?',
    answer:
      "Generally yes, but with important caveats. Seniors are more likely to be on multiple medications, making drug-supplement interactions a real concern. Berberine in particular can interact with blood thinners, statins, and diabetes medications. Always review any new supplement with your doctor or pharmacist before starting — especially if you're over 65.",
  },
  {
    question: 'What does GMP-certified mean, and why does it matter?',
    answer:
      "GMP stands for Good Manufacturing Practice — a set of quality standards enforced by the FDA for supplement manufacturers. A GMP-certified facility means the product was made under strict controls for ingredient purity, potency, and contamination. Without GMP certification, a supplement's label may not accurately reflect what's inside the bottle. Always prioritize GMP-certified products.",
  },
  {
    question: 'Can supplements reverse prediabetes completely?',
    answer:
      "Supplements alone cannot reverse prediabetes. However, combined with dietary changes, regular physical activity, and better sleep, natural supplements like berberine have been shown in clinical trials to meaningfully lower fasting glucose and HbA1c — bringing some people back into the normal range. Think of supplements as one tool in a larger toolkit.",
  },
  {
    question: 'How do I know if a supplement is actually working?',
    answer:
      "The best way is to track your fasting blood glucose (mg/dL) at home with a glucometer — ideally first thing in the morning before eating. Take a baseline reading for 1–2 weeks before starting a supplement, then compare after 4 weeks and again at 8 weeks. A meaningful drop of 10–20 mg/dL in fasting glucose is a positive sign.",
  },
  {
    question: 'Why is GlucoBliss ranked #1 over standalone berberine?',
    answer:
      "GlucoBliss earns its top ranking because it addresses blood sugar through three separate pathways simultaneously: berberine activates AMPK and improves fasting glucose; Ceylon cinnamon reduces post-meal (postprandial) spikes; and chromium picolinate improves insulin receptor sensitivity. Standalone berberine only targets one pathway. GlucoBliss is also GMP-certified and lab-verified — ensuring what's on the label is actually in the bottle.",
  },
];
// You can add more FAQ collections for other pages here
// export const otherPageFAQs: FAQItem[] = [...]