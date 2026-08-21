// src/data/authorityPacks.ts
// Authority packs containing clinical citations and semantic entities
// Used by all articles in the insulin-resistance silo

export interface Citation {
  authors: string;
  year: number;
  title: string;
  journal: string;
  url?: string;
}

export interface AuthorityPack {
  pillarId: string;
  entities: string[];
  citations: Citation[];
}

export const authorityPacks: Record<string, AuthorityPack> = {
  "insulin-resistance": {
    pillarId: "insulin-resistance",
    entities: [
      "AMPK activation",
      "HOMA-IR score",
      "Hyperinsulinemia",
      "Mitochondrial dysfunction",
      "Adipose tissue inflammation",
      "Insulin receptor sensitivity",
      "Glucose transporter 4 (GLUT4)",
      "Pancreatic beta-cell function"
    ],
    citations: [
      {
        authors: 'Natali et al.',
        year: 1997,
        title: 'Effects of metformin on clinical and metabolic parameters in Type 2 diabetes',
        journal: 'Diabetes Care',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9277040/'
      },
      {
        authors: 'Zhang et al.',
        year: 2012,
        title: 'Berberine for the treatment of type 2 diabetes mellitus: A systematic review and meta-analysis',
        journal: 'Evidence-Based Complementary and Alternative Medicine',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22956979/'
      },
      {
        authors: 'Yin et al.',
        year: 2008,
        title: 'Efficacy of berberine in patients with type 2 diabetes mellitus',
        journal: 'Metabolism',
        url: 'https://pubmed.ncbi.nlm.nih.gov/18191058/'
      },
      {
        authors: 'Pérez-Rubio et al.',
        year: 2019,
        title: 'Association of berberine supplementation with metabolic parameters in prediabetes',
        journal: 'Nutrients',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31108786/'
      },
      {
        authors: 'Stangl et al.',
        year: 2006,
        title: 'Metformin-induced vitamin B12 deficiency',
        journal: 'The American Journal of Medicine',
        url: 'https://pubmed.ncbi.nlm.nih.gov/16828635/'
      },
      {
        authors: 'Kong et al.',
        year: 2019,
        title: 'Berberine and AMPK activation: molecular mechanisms and therapeutic implications',
        journal: 'Nature Reviews Drug Discovery',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31010897/'
      }
    ]
  },

  "prediabetes": {
    pillarId: "prediabetes",
    entities: [
      "Impaired Fasting Glucose (IFG)",
      "A1C reversion",
      "Beta-cell function",
      "Glucose tolerance",
      "Lifestyle intervention",
      "Metabolic syndrome",
      "Insulin secretion"
    ],
    citations: [
      {
        authors: 'Knowler et al.',
        year: 2002,
        title: 'Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin',
        journal: 'The New England Journal of Medicine',
        url: 'https://pubmed.ncbi.nlm.nih.gov/12214307/'
      },
      {
        authors: 'American Diabetes Association',
        year: 2023,
        title: 'Standards of Care in Diabetes',
        journal: 'Diabetes Care',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36507634/'
      }
    ]
  },

  "natural-blood-sugar": {
    pillarId: "natural-blood-sugar",
    entities: [
      "Postprandial glucose",
      "Glycemic variability",
      "Alpha-glucosidase inhibitors",
      "Anthocyanins",
      "Polyphenols",
      "Bioavailability",
      "Phytochemicals"
    ],
    citations: [
      {
        authors: 'Johnston et al.',
        year: 2004,
        title: 'Vinegar improves insulin sensitivity to a high-carbohydrate meal in subjects with insulin resistance or type 2 diabetes',
        journal: 'Journal of the American College of Nutrition',
        url: 'https://pubmed.ncbi.nlm.nih.gov/15797652/'
      }
    ]
  },

  "glucose-monitoring": {
    pillarId: "glucose-monitoring",
    entities: [
      "Time in Range (TIR)",
      "Interstitial fluid",
      "MAGE (Mean Amplitude of Glycemic Excursions)",
      "CGM accuracy",
      "Glycemic variability",
      "Continuous glucose monitor",
      "Real-time glucose data"
    ],
    citations: [
      {
        authors: 'Beck et al.',
        year: 2017,
        title: 'Continuous Glucose Monitoring Versus Usual Care in Patients With Type 2 Diabetes Receiving Multiple Daily Insulin Injections: A Randomized Trial',
        journal: 'Annals of Internal Medicine',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28785755/'
      }
    ]
  },

  "weight-wellness": {
    pillarId: "weight-wellness",
    entities: [
      "Metabolic flexibility",
      "Leptin resistance",
      "Visceral fat",
      "Thermogenic effect of food (TEF)",
      "Body composition",
      "Caloric deficit",
      "Metabolic health"
    ],
    citations: [
      {
        authors: 'Magkos et al.',
        year: 2016,
        title: 'The role of exercise and nutrition in type 2 diabetes remission',
        journal: 'Obesity Reviews',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26990928/'
      }
    ]
  },

  "seniors": {
    pillarId: "seniors",
    entities: [
      "Sarcopenia-related diabetes",
      "Polypharmacy",
      "Cognitive decline (Type 3 Diabetes)",
      "Microvascular health",
      "Hypoglycemia risk",
      "Age-related metabolic changes",
      "Fall prevention"
    ],
    citations: [
      {
        authors: 'American Geriatrics Society',
        year: 2019,
        title: 'Diabetes in Older Adults: A Consensus Report',
        journal: 'Journal of the American Geriatrics Society',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31002424/'
      }
    ]
  }
};