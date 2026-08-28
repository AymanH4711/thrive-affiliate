// src/hooks/useAuthorityPack.ts
// Hook to access authority pack data for any pillar

import { authorityPacks } from '../data/authorityPacks';

/**
 * Get the authority pack for a specific pillar
 * @param pillarId - The pillar ID (e.g., 'insulin-resistance')
 * @returns AuthorityPack or null if not found
 */
export const useAuthorityPack = (pillarId: string): AuthorityPack | null => {
  if (!pillarId) {
    console.warn('useAuthorityPack: pillarId is required');
    return null;
  }
  
  const pack = authorityPacks[pillarId];
  
  if (!pack) {
    console.warn(`useAuthorityPack: No authority pack found for pillar: ${pillarId}`);
  }
  
  return pack || null;
};

export default useAuthorityPack;