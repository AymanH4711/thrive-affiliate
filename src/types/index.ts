// src/types/index.ts
//
// NOTE: this file was wiped by the recent system update along with several
// others. Only the two type definitions explicitly requested below have been
// reconstructed. If this file previously exported other shared types (props
// interfaces, API response shapes, etc.), those are NOT recovered here — if
// other files import from '@/types' or similar and TypeScript complains
// about missing exports after the rebuild, that's why. Add them back as they
// surface rather than guessing at what else lived here.

// ── ArticleType ──────────────────────────────────────────────────────────
// One entry per typed blog sub-folder under src/pages/blog/, per the v2.0
// project structure. String values match the actual folder names on disk so
// routing/category logic (BlogArticlePage.tsx, BlogPage.tsx category cards)
// can use the enum value directly as a path segment without a separate
// lookup table.
export enum ArticleType {
  Comparison = "comparison",
  Educational = "educational",
  Lifestyle = "lifestyle",
  Nutrition = "nutrition",
  SymptomsGuides = "symptoms-guides",
  ProductReviews = "product-reviews", // [NEW] — added for single-product affiliate reviews (e.g. MetaboSana)
}

// ── EvidenceStrength ─────────────────────────────────────────────────────
// Deliberately a string-literal union, not a formal TS enum — the generated
// article files (via the pSEO tool's .tsx export) already pass this as a
// plain lowercase string, e.g.:
//   <AdvisorModeBox evidence="moderate" ... />
// A numeric/named enum would require EvidenceStrength.Moderate at every call
// site and break every already-exported article. This type just gives that
// existing string prop compile-time safety without changing how it's used.
export type EvidenceStrength = "strong" | "moderate" | "weak";