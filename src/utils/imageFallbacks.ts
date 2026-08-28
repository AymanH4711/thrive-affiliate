// src/utils/imageFallbacks.ts
//
// Utility for the per-article image set (hero / benefits / precautions)
// stored at public/images/blog/<slug>/<kind>.webp, plus safe fallback
// behavior when a specific article image is missing or fails to load.
//
// NOTE: this file was found empty in the repo and has been written from
// scratch based on the project's image folder convention. Review against
// how ArticleLayout.tsx and generated article .tsx files actually expect
// to consume it, and adjust names/paths to match.

export type ArticleImageKind = "hero" | "benefits" | "precautions";

// Generic, always-present fallback images. Add real files at these paths
// (e.g. public/images/blog/_fallback/hero.webp) so a broken per-article
// image never results in an empty broken-image icon on mobile.
const FALLBACK_BASE = "/images/blog/_fallback";

const FALLBACK_IMAGES: Record<ArticleImageKind, string> = {
  hero: `${FALLBACK_BASE}/hero.webp`,
  benefits: `${FALLBACK_BASE}/benefits.webp`,
  precautions: `${FALLBACK_BASE}/precautions.webp`,
};

// Fixed dimensions per image kind. Kept in sync with the resize caps in
// final-test.js's saveArticleImagesForBlog (IMAGE_SLOT_MAX_DIMENSIONS) —
// if you change one, change the other, or the width/height attributes here
// will reserve the wrong amount of layout space for newly generated
// articles and reintroduce the CLS problem this file exists to prevent.
const IMAGE_DIMENSIONS: Record<ArticleImageKind, { width: number; height: number }> = {
  hero: { width: 1200, height: 675 },
  benefits: { width: 1000, height: 667 },
  precautions: { width: 1000, height: 667 },
};

/**
 * Builds the expected image path for a given article slug and image kind.
 * Does not verify the file exists — pair with handleImageError below for
 * runtime fallback if the file is missing or fails to load.
 */
export function getArticleImagePath(slug: string, kind: ArticleImageKind): string {
  return `/images/blog/${slug}/${kind}.webp`;
}

/**
 * The generic fallback image path for a given image kind, used when the
 * per-article image doesn't exist or fails to load.
 */
export function getFallbackImagePath(kind: ArticleImageKind): string {
  return FALLBACK_IMAGES[kind];
}

/**
 * Fixed width/height for a given image kind, for use as explicit <img>
 * attributes (or CSS aspect-ratio) so the browser reserves layout space
 * before the image downloads — avoids CLS penalties, which matter most
 * on mobile/slower connections.
 */
export function getImageDimensions(kind: ArticleImageKind): { width: number; height: number } {
  return IMAGE_DIMENSIONS[kind];
}

/**
 * onError handler for <img> tags: swaps to the generic fallback image for
 * that kind, and removes itself after firing once so a missing fallback
 * file can't trigger an infinite error loop.
 *
 * Usage:
 *   <img
 *     src={getArticleImagePath(slug, "hero")}
 *     onError={(e) => handleImageError(e, "hero")}
 *     {...getImageDimensions("hero")}
 *   />
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  kind: ArticleImageKind
): void {
  const img = event.currentTarget;
  img.onerror = null; // prevent infinite loop if the fallback is also missing
  img.src = getFallbackImagePath(kind);
}

/**
 * Convenience bundle: everything needed to render a single article image
 * with fallback and CLS-safe sizing in one spread.
 *
 *   <img {...getArticleImageProps(slug, "hero")} alt={...} />
 */
export function getArticleImageProps(slug: string, kind: ArticleImageKind) {
  return {
    src: getArticleImagePath(slug, kind),
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => handleImageError(e, kind),
    ...getImageDimensions(kind),
    loading: "lazy" as const,
  };
}