// src/data/semanticEntities.ts
// These are the required vocabulary/terms for each silo
export const semanticEntities = {
  "prediabetes": {
    required: [
      "glucose tolerance",
      "A1C levels",
      "fasting glucose",
      "beta cell",
      "lifestyle intervention"
    ],
    recommended: [
      "metabolic syndrome",
      "weight loss",
      "physical activity",
      "Mediterranean diet"
    ]
  },
  "insulin-resistance": {
    required: [
      "AMPK",
      "insulin sensitivity",
      "HOMA-IR",
      "mitochondrial health",
      "adipose tissue"
    ],
    recommended: [
      "leptin resistance",
      "metabolic endotoxemia",
      "ectopic fat"
    ]
  },
  "natural-blood-sugar": {
    required: [
      "postprandial glucose",
      "glycemic index",
      "polyphenols",
      "blood sugar control",
      "natural supplement"
    ],
    recommended: [
      "bioavailability",
      "absorption rate",
      "dosage",
      "safety profile"
    ]
  },
  "glucose-monitoring": {
    required: [
      "continuous glucose monitor",
      "time in range",
      "CGM",
      "glucose variability",
      "interstitial fluid"
    ],
    recommended: [
      "wearable technology",
      "real-time data",
      "trend analysis"
    ]
  },
  "weight-wellness": {
    required: [
      "weight loss",
      "metabolic health",
      "visceral fat",
      "body composition",
      "caloric deficit"
    ],
    recommended: [
      "metabolism",
      "leptin",
      "metabolic flexibility"
    ]
  },
  "seniors": {
    required: [
      "aging",
      "seniors",
      "hypoglycemia",
      "medication interaction",
      "sarcopenia"
    ],
    recommended: [
      "cognitive health",
      "fall prevention",
      "polypharmacy"
    ]
  }
};