// src/utils/relatedArticles.ts
import { KeywordData } from '../data/types';

export const findRelatedArticles = (
  currentKeyword: string,
  allKeywords: KeywordData[],
  maxResults: number = 3
): KeywordData[] => {
  const current = allKeywords.find((k) => k.keyword === currentKeyword);
  if (!current) return [];

  // Find articles in the SAME pillar
  return allKeywords
    .filter(
      (k) => k.pillar === current.pillar && k.keyword !== currentKeyword
    )
    .sort((a, b) => b.volume - a.volume) // Higher search volume first
    .slice(0, maxResults);
};

export const generateRelatedArticlesSection = (
  currentKeyword: string,
  allKeywords: KeywordData[]
) => {
  const related = findRelatedArticles(currentKeyword, allKeywords);
  
  return {
    title: "Related Articles in This Series",
    articles: related.map((article) => ({
      title: article.keyword,
      url: `/blog/${article.keyword.replace(/\s+/g, "-").toLowerCase()}`,
      category: article.pillar
    }))
  };
};