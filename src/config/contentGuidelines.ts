// src/config/contentGuidelines.ts

/**
 * THRIVE - Single Source of Truth for Content Claims
 * All pages must use these guidelines to ensure consistency
 * DO NOT make up new messaging - use these standardized texts
 */

// =====================================================
// TIMELINES
// =====================================================
export const TIMELINES = {
  // Steps completion
  completionWeeks: "4–6 weeks",
  completionWeeksDetailed: "4 to 6 weeks",
  
  // Results appearance
  resultsWeeks: "6–8 weeks",
  resultsWeeksDetailed: "6 to 8 weeks",
  
  // Full reversal
  fullReversal: "6–12 months",
  fullReversalDetailed: "6 to 12 months",
  
  // Complete messages for card/hero sections
  cardMessage: "Most people feel improvements within 2–4 weeks. Measurable blood sugar changes typically appear within 6–8 weeks.",
  
  mainMessage: "Complete all 5 steps within 4–6 weeks. Measurable blood sugar improvements typically appear within 6–8 weeks.",
  
  fullJourneyMessage: "2–4 weeks: Feel improvements | 6–8 weeks: See measurable results | 6–12 months: Full reversal",
};

// =====================================================
// MEDICAL DISCLAIMERS
// =====================================================
export const DISCLAIMERS = {
  medical: "This content is for educational purposes only and does not replace professional medical advice. Always consult your doctor before starting a new health regimen or taking supplements.",
  
  shortMedical: "Educational content only. Always consult your doctor.",
  
  affiliate: "Affiliate Disclosure: Thrive may earn commissions from affiliate links. This does not affect the price you pay.",
  
  affiliation: "We earn commissions from affiliate products at no extra cost to you.",
};

// =====================================================
// KEY MESSAGES & VALUE PROPOSITIONS
// =====================================================
export const KEY_MESSAGES = {
  mainValue: "Reverse prediabetes naturally with a science-backed 5-step plan.",
  
  supplementValue: "Force multipliers, not replacements—accelerate your reversal with evidence-based supplements.",
  
  noCureLanguage: "Designed to support your journey, not to cure or treat any condition.",
  
  doctorAdvice: "Doctor-informed and evidence-based.",
};

// =====================================================
// DPP STUDY REFERENCE
// =====================================================
export const DPP_STUDY = {
  name: "Diabetes Prevention Program Study",
  effectiveness: "80% of people reverse prediabetes within 6–12 months",
  effectiveness_vs_metformin: "Twice as effective as Metformin for preventing Type 2 Diabetes",
  citation: "https://www.diabetes.org/resources/prevention-programs/diabetes-prevention-program",
};

// =====================================================
// SUPPLEMENT POSITIONING
// =====================================================
export const SUPPLEMENT_CLAIMS = {
  role: "Supplements are force multipliers, not replacements for diet, exercise, and monitoring.",
  
  acceleration: "Accelerate your reversal by 10–20% when combined with Steps 1–3.",
  
  when_to_take: "Introduce supplements after mastering diet, exercise, and basic monitoring.",
  
  compliance: "These claims are based on clinical evidence and DPP-aligned protocols.",
};

// =====================================================
// SUPPORT & TRUST
// =====================================================
export const SUPPORT = {
  email: "thrivehealth360@gmail.com",
  supportHours: "Monday–Friday, 9 AM–5 PM EST",
  responseTime: "24-hour response commitment",
  contactPurpose: "Questions about our content, products, or your health journey",
};

// =====================================================
// USAGE EXAMPLES
// =====================================================
/**
 * Example 1: Using in a component
 * 
 * import { TIMELINES, DISCLAIMERS } from "../config/contentGuidelines";
 * 
 * <p>{TIMELINES.mainMessage}</p>
 * <p className="text-sm text-gray-600">{DISCLAIMERS.medical}</p>
 * 
 * Example 2: Using in a card
 * 
 * <p>{TIMELINES.cardMessage}</p>
 * 
 * Example 3: Using multiple values
 * 
 * Results appear within {TIMELINES.resultsWeeks}
 */