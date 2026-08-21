// src/hooks/useProducts.ts
import { ProductData, KeywordData } from '@/data/types';

export const useProducts = (pillarId?: string) => {
  const products = require('../data/products.json');
  
  if (pillarId) {
    return products.filter((p: ProductData) => p.pillar === pillarId);
  }
  return products;
};

export const useKeywords = (pillarId?: string) => {
  const keywords = require('../data/keywords.json');
  
  if (pillarId) {
    return keywords.filter((k: KeywordData) => k.pillar === pillarId);
  }
  return keywords;
};