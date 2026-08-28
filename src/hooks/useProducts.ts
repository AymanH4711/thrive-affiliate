// src/hooks/useProducts.ts
import { ProductData, KeywordData } from '@/data/types';
import products from '../data/products.json';
import keywords from '../data/keywords.json';

export const useProducts = (pillarId?: string) => {
  if (pillarId) {
    return products.filter((p: ProductData) => p.pillar === pillarId);
  }
  return products;
};

export const useKeywords = (pillarId?: string) => {
  if (pillarId) {
    return keywords.filter((k: KeywordData) => k.pillar === pillarId);
  }
  return keywords;
};