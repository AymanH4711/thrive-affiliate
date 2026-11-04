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
    // Slug was 'cgm-vs-blood-meter', which matches no route — the live route
    // is /blog/cgm-vs-bgm (App.tsx). The old value silently fell through the
    // /blog/:articleId fallback to /blog.
    id: 'cgm-vs-bgm',
    title: 'CGM vs Blood Glucose Meter: Which Should You Choose?',
    slug: 'cgm-vs-bgm',
    primarySilo: 'glucose-monitoring',
    secondarySilos: ['natural-blood-sugar', 'prediabetes'],
    keywords: ['continuous glucose monitor', 'blood glucose meter', 'CGM vs meter'],
    publishedDate: '2026-03-02',
    difficulty: 'intermediate',
  },
  {
    // Both this and the Ceylon entry below currently render the site's
    // ComingSoon placeholder (their files/pages have isPublished: false).
    // Included so the map is complete once they publish. No page that calls
    // useSiloLinks emits them today: the only live source is berberine, where
    // each scores 0.3 and is filtered by the > 0.3 threshold.
    id: 'post-meal-walks',
    title: 'Post-Meal Walks: The Most Powerful Blood Sugar Tool',
    slug: 'post-meal-walks',
    primarySilo: 'weight-wellness',
    secondarySilos: ['prediabetes', 'natural-blood-sugar'],
    keywords: [
      'prediabetes exercise',
      'best exercises for blood sugar',
      'strength training',
      'walking for blood sugar control',
    ],
    publishedDate: '2026-08-22',
    difficulty: 'beginner',
  },
  {
    id: 'ceylon-cinnamon-diabetes',
    title: 'Why Use Ceylon Cinnamon for Diabetes? Complete 2026 Clinical Guide',
    slug: 'ceylon-cinnamon-diabetes',
    primarySilo: 'insulin-resistance',
    secondarySilos: ['natural-blood-sugar', 'prediabetes'],
    keywords: [
      'ceylon cinnamon',
      'diabetes',
      'prediabetes',
      'blood sugar',
      'natural supplement',
      'insulin sensitivity',
      'coumarin',
    ],
    publishedDate: '2026-08-22',
    difficulty: 'intermediate',
  },

  // Add 17 more articles for your full 21-article scale
];