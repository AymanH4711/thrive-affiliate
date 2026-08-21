// src/utils/siloLinker.ts

import { articleSiloMap, ArticleMetadata } from '@/data/articleSiloMap';
import { authorityPacks } from '@/data/authorityPacks';

/**
 * Internal link suggestion for SEO
 */
export interface SiloLink {
  fromArticleId: string;         // Source article
  toArticleId: string;           // Target article
  toTitle: string;
  toSlug: string;
  reason: string;                // Why this link makes sense
  relevanceScore: number;        // 0-1 (higher = more relevant)
  linkText: string;              // Suggested anchor text
  placement: 'intro' | 'body' | 'conclusion' | 'related-reading';
}

/**
 * Main class for generating silo-based internal links
 */
export class SiloLinker {
  private articleMap: ArticleMetadata[];
  private authorityPacks: typeof authorityPacks;

  constructor() {
    this.articleMap = articleSiloMap;
    this.authorityPacks = authorityPacks;
  }

  /**
   * Get all recommended links for a specific article
   */
  getLinksForArticle(articleId: string): SiloLink[] {
    const sourceArticle = this.articleMap.find((a) => a.id === articleId);

    if (!sourceArticle) {
      console.warn(`Article ${articleId} not found in articleSiloMap`);
      return [];
    }

    // Find candidate articles
    const candidates = this.articleMap.filter(
      (article) => article.id !== articleId
    );

    // Score and rank candidates
    const links = candidates
      .map((candidate) => this.calculateRelevance(sourceArticle, candidate))
      .filter((link) => link.relevanceScore > 0.3) // Only include relevant links
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 5); // Limit to 5 links per article (prevent link spam)

    return links;
  }

  /**
   * Calculate relevance between two articles
   */
  private calculateRelevance(
    source: ArticleMetadata,
    target: ArticleMetadata
  ): SiloLink {
    let relevanceScore = 0;
    let reason = '';
    let placement: SiloLink['placement'] = 'body';

    // 1. Same primary silo (highest relevance)
    if (source.primarySilo === target.primarySilo) {
      relevanceScore += 0.5;
      reason = `Both target "${source.primarySilo}" pillar`;
      placement = 'body'; // Add mid-article
    }

    // 2. Secondary silo match
    if (
      source.secondarySilos.includes(target.primarySilo) ||
      target.secondarySilos.includes(source.primarySilo)
    ) {
      relevanceScore += 0.3;
      reason = `Related topics in topical authority cluster`;
      placement = 'conclusion'; // Add at end
    }

    // 3. Keyword overlap
    const keywordOverlap = source.keywords.filter((k) =>
      target.keywords.some((tk) => this.calculateKeywordSimilarity(k, tk) > 0.6)
    ).length;

    if (keywordOverlap > 0) {
      relevanceScore += keywordOverlap * 0.15;
      reason = `${keywordOverlap} keyword overlap`;
    }

    // 4. Difficulty progression (beginners link to more advanced)
    const difficultyMap = { beginner: 1, intermediate: 2, advanced: 3 };
    const sourceDiff = difficultyMap[source.difficulty];
    const targetDiff = difficultyMap[target.difficulty];

    if (sourceDiff < targetDiff) {
      relevanceScore += 0.2;
      reason = `Natural progression from ${source.difficulty} to ${target.difficulty}`;
      placement = 'conclusion';
    }

    // 5. Temporal relevance (newer articles link to older foundational content)
    const sourceDate = new Date(source.publishedDate).getTime();
    const targetDate = new Date(target.publishedDate).getTime();

    if (sourceDate > targetDate) {
      relevanceScore += 0.1;
      reason = `${source.title} (new) references ${target.title} (foundational)`;
    }

    // Generate suggested anchor text
    const linkText = this.generateAnchorText(source, target);

    return {
      fromArticleId: source.id,
      toArticleId: target.id,
      toTitle: target.title,
      toSlug: target.slug,
      reason,
      relevanceScore: Math.min(relevanceScore, 1),
      linkText,
      placement,
    };
  }

  /**
   * Calculate similarity between two keywords (simple string similarity)
   */
  private calculateKeywordSimilarity(keyword1: string, keyword2: string): number {
    const words1 = keyword1.toLowerCase().split(' ');
    const words2 = keyword2.toLowerCase().split(' ');

    const intersection = words1.filter((w) => words2.includes(w)).length;
    const union = new Set([...words1, ...words2]).size;

    return intersection / union;
  }

  /**
   * Generate natural-sounding anchor text
   */
  private generateAnchorText(source: ArticleMetadata, target: ArticleMetadata): string {
    const targetKey = target.title.split(':')[0].trim(); // Get first part of title

    // Create context-aware anchor text
    const anchors = [
      `this guide on ${targetKey.toLowerCase()}`,
      `learn more about ${targetKey.toLowerCase()}`,
      `our article on ${targetKey.toLowerCase()}`,
      `explore ${targetKey.toLowerCase()}`,
    ];

    return anchors[Math.floor(Math.random() * anchors.length)];
  }

  /**
   * Get all related articles for a specific silo (for "Related Reading" sections)
   */
  getArticlesBySilo(siloId: string): ArticleMetadata[] {
    return this.articleMap.filter(
      (article) =>
        article.primarySilo === siloId || article.secondarySilos.includes(siloId)
    );
  }

  /**
   * Get the silo structure with article counts
   */
  getSiloStructure(): Record<string, { articles: ArticleMetadata[]; count: number }> {
    const silos = new Map<string, ArticleMetadata[]>();

    this.articleMap.forEach((article) => {
      if (!silos.has(article.primarySilo)) {
        silos.set(article.primarySilo, []);
      }
      silos.get(article.primarySilo)!.push(article);
    });

    const structure: Record<string, { articles: ArticleMetadata[]; count: number }> = {};
    silos.forEach((articles, siloId) => {
      structure[siloId] = {
        articles,
        count: articles.length,
      };
    });

    return structure;
  }

  /**
   * Generate a full internal linking report for all articles
   */
  generateLinkingReport(): Record<string, SiloLink[]> {
    const report: Record<string, SiloLink[]> = {};

    this.articleMap.forEach((article) => {
      report[article.id] = this.getLinksForArticle(article.id);
    });

    return report;
  }

  /**
   * Validate that all articles have adequate linking
   */
  validateSiloStructure(): { isValid: boolean; warnings: string[] } {
    const warnings: string[] = [];

    this.articleMap.forEach((article) => {
      const links = this.getLinksForArticle(article.id);

      // Warning: Orphaned articles (no silo connections)
      if (links.length === 0) {
        warnings.push(
          `⚠️ "${article.title}" has no relevant silo connections. Review its classification.`
        );
      }

      // Warning: Articles with low relevance links
      const lowRelevanceLinks = links.filter((l) => l.relevanceScore < 0.4);
      if (lowRelevanceLinks.length > 2) {
        warnings.push(
          `⚠️ "${article.title}" has ${lowRelevanceLinks.length} weak links (score < 0.4). Consider restructuring.`
        );
      }
    });

    return {
      isValid: warnings.length === 0,
      warnings,
    };
  }
}

// Export singleton instance
export const siloLinker = new SiloLinker();

// Export for use in components
export const useSiloLinks = (articleId: string) => {
  return siloLinker.getLinksForArticle(articleId);
};

export const useSiloArticles = (siloId: string) => {
  return siloLinker.getArticlesBySilo(siloId);
};