// src/utils/internalLinkGenerator.ts
import { KeywordData } from '../data/types';

interface InternalLinkPlacement {
  location: "introduction" | "middle" | "conclusion";
  targetArticleKeyword: string;
  anchorText: string;
  url: string;
}

export const generateInternalLinkPlacements = (
  sourceKeyword: string,
  pillarId: string,
  allKeywords: KeywordData[]
): InternalLinkPlacement[] => {
  const related = allKeywords.filter(
    (k) => k.pillar === pillarId && k.keyword !== sourceKeyword
  );

  if (related.length === 0) return [];

  const placements: InternalLinkPlacement[] = [];

  // Always link to pillar in introduction
  placements.push({
    location: "introduction",
    targetArticleKeyword: `${pillarId} pillar`,
    anchorText: `Learn about ${pillarId.replace("-", " ")}`,
    url: `/pillars/${pillarId}`
  });

  // Link to 1-2 related articles
  related.slice(0, 2).forEach((article, index) => {
    placements.push({
      location: index === 0 ? "middle" : "conclusion",
      targetArticleKeyword: article.keyword,
      anchorText: article.keyword,
      url: `/blog/${article.keyword.replace(/\s+/g, "-").toLowerCase()}`
    });
  });

  return placements;
};