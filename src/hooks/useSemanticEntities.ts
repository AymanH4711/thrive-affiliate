// src/hooks/useSemanticEntities.ts
// Hook to access semantic entities (required vocabulary) for a pillar

import { authorityPacks } from '../data/authorityPacks';

/**
 * Get semantic entities (required vocabulary) for a pillar
 * Use these terms in your article headers and throughout content
 * @param pillarId - The pillar ID
 * @returns Array of required semantic entities
 */
export const useSemanticEntities = (pillarId: string): string[] => {
  const pack = authorityPacks[pillarId];
  return pack?.entities || [];
};

/**
 * Verify that your article mentions all required entities
 * Helpful for editorial checklist
 * @param pillarId - The pillar ID
 * @param articleText - The full article text
 * @returns Object with covered and missing entities
 */
export const verifyEntityCoverage = (
  pillarId: string,
  articleText: string
): { covered: string[]; missing: string[] } => {
  const entities = useSemanticEntities(pillarId);
  
  const covered = entities.filter((entity) =>
    articleText.toLowerCase().includes(entity.toLowerCase())
  );
  
  const missing = entities.filter(
    (entity) => !articleText.toLowerCase().includes(entity.toLowerCase())
  );

  return { covered, missing };
};

/**
 * Get all entities and their coverage status
 * Useful for a content audit dashboard
 */
export const getEntityCoverageReport = (
  pillarId: string,
  articleText: string
) => {
  const { covered, missing } = verifyEntityCoverage(pillarId, articleText);
  const entities = useSemanticEntities(pillarId);
  
  return {
    total: entities.length,
    covered: covered.length,
    missing: missing.length,
    coveragePercentage: (covered.length / entities.length) * 100,
    entities: entities.map((entity) => ({
      name: entity,
      isCovered: covered.includes(entity)
    }))
  };
};

export default useSemanticEntities;