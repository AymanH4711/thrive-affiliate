// src/data/articleSiloMap.ts

export interface ArticleMetadata {
  id: string;                    // Unique identifier
  title: string;
  slug: string;                  // URL slug (e.g., /blog/berberine-vs-metformin)
  primarySilo: string;           // Main pillar this belongs to
  secondarySilos: string[];      // Related pillars
  keywords: string[];            // Keywords this article targets
  publishedDate: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const articleSiloMap: ArticleMetadata[] = [
  // WEEK 1 - COMPLETE
  {
    id: 'berberine-vs-metformin',
    title: 'Berberine vs Metformin for Prediabetes: Which Is Better?',
    slug: 'berberine-vs-metformin',
    primarySilo: 'prediabetes',
    secondarySilos: ['natural-blood-sugar', 'insulin-resistance'],
    keywords: ['berberine metformin', 'prediabetes treatment', 'natural alternatives'],
    publishedDate: '2026-02-16',
    difficulty: 'intermediate',
  },

  // WEEK 2 - PLANNED (Example)
  {
    id: 'prediabetes-warning-signs',
    title: 'Prediabetes Warning Signs: 7 Early Symptoms You Should Know',
    slug: 'prediabetes-warning-signs',
    primarySilo: 'prediabetes',
    secondarySilos: ['natural-blood-sugar'],
    keywords: ['prediabetes symptoms', 'warning signs', 'early detection'],
    publishedDate: '2026-02-23',
    difficulty: 'beginner',
  },
  {
    id: 'best-foods-blood-sugar',
    title: 'Best Foods to Control Blood Sugar: Science-Backed List',
    slug: 'best-foods-blood-sugar',
    primarySilo: 'natural-blood-sugar',
    secondarySilos: ['prediabetes', 'weight-wellness'],
    keywords: ['blood sugar foods', 'glucose control diet', 'anti-inflammatory foods'],
    publishedDate: '2026-02-23',
    difficulty: 'beginner',
  },
  {
    id: 'cgm-vs-blood-meter',
    title: 'CGM vs Blood Glucose Meter: Which Should You Choose?',
    slug: 'cgm-vs-blood-meter',
    primarySilo: 'glucose-monitoring',
    secondarySilos: ['natural-blood-sugar', 'prediabetes'],
    keywords: ['continuous glucose monitor', 'blood glucose meter', 'CGM vs meter'],
    publishedDate: '2026-03-02',
    difficulty: 'intermediate',
  },

  // Add 17 more articles for your full 21-article scale
];