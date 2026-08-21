// src/data/types.ts

export interface ArticleMetadata {
  id: string;
  title: string;
  slug: string;
  primarySilo: string;
  secondarySilos: string[];
  keywords: string[];
  publishedDate: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface SiloLink {
  fromArticleId: string;
  toArticleId: string;
  toTitle: string;
  toSlug: string;
  reason: string;
  relevanceScore: number;
  linkText: string;
  placement: 'intro' | 'body' | 'conclusion' | 'related-reading';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface KeywordData {
  keyword: string;
  pillar: string;
  volume: number;
}

export interface ProductData {
  name: string;
  pillar: string;
  category?: string;
  price?: number;
  url?: string;
}

// ============================================================================
// BLOG LISTING SYSTEM (added when BlogPage.tsx moved from a hardcoded
// article list to dynamically discovering articles via import.meta.glob)
// ============================================================================

// The 6 real, user-facing categories shown on /blog. NOT the same as the
// src/pages/blog/<folder>/ directory names (comparison, educational,
// lifestyle, nutrition, symptoms-guides, product-reviews) — those are just
// file organization on disk and have no effect on the live site. This is
// the taxonomy that actually matters for display.
export type BlogCategoryKey =
  | 'prediabetes'
  | 'diet'
  | 'exercise'
  | 'monitoring'
  | 'supplements'
  | 'sleep';

// Every blog article .tsx file under src/pages/blog/ must export this as
// `export const blogMeta: BlogArticleMeta = {...}` for BlogPage.tsx's
// import.meta.glob scan to pick it up and display it. Without this export,
// the article's route still works if it's registered in App.tsx, but it
// will NOT appear anywhere on /blog.
export interface BlogArticleMeta {
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  /** Route path, e.g. '/blog/best-foods-blood-sugar' — must match the route
      registered for this article in App.tsx. */
  path: string;
  category: BlogCategoryKey;
  /** At most one article across the whole site should set this true — it
      controls the "Featured Article" hero block at the top of /blog. If
      more than one sets it, BlogPage.tsx uses whichever import.meta.glob
      happens to enumerate first, which is not a meaningful/stable order —
      keep this to a single article. */
  featured?: boolean;
  /** Defaults to true when omitted. Set false for a real placeholder page
      that exists and has a route, but isn't a finished article yet (shows
      the "Coming Soon" lock overlay instead of "Read More" on /blog). */
  isPublished?: boolean;
}