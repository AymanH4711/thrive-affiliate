// src/data/affiliateLinks.ts

/**
 * Centralized affiliate links management
 * Organize all affiliate links by product category and platform
 * Makes it easy to update links across the entire site
 */

export interface AffiliateLink {
  name: string;
  url: string;
  platform: 'digistore24' | 'iherb' | 'amazon' | 'other';
  description?: string;
  commission?: string;
}

export interface AffiliateCategory {
  [key: string]: AffiliateLink[];
}

/**
 * All affiliate links organized by product category
 * Update URLs here and they'll be consistent across your site
 */
export const affiliateLinks: AffiliateCategory = {
  // Berberine supplements
  berberine: [
    {
      name: 'Berberine (Digistore24)',
      url: 'https://digistore24.com/product/berberine?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'Premium berberine supplement',
      commission: 'Variable'
    },
    {
      name: 'Berberine (iHerb)',
      url: 'https://iherb.com/?rcode=YOUR_CODE',
      platform: 'iherb',
      description: 'Alternative berberine source',
      commission: '5-10%'
    }
  ],

  // Magnesium products
  magnesium: [
    {
      name: 'Magnesium Bisglycinate (Digistore24)',
      url: 'https://digistore24.com/product/magnesium?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'High-absorption magnesium',
      commission: 'Variable'
    },
    {
      name: 'Magnesium (iHerb)',
      url: 'https://iherb.com/?rcode=YOUR_CODE',
      platform: 'iherb',
      description: 'Alternative magnesium source',
      commission: '5-10%'
    }
  ],

  // Omega-3 supplements
  omega3: [
    {
      name: 'Omega-3 Fish Oil (Digistore24)',
      url: 'https://digistore24.com/product/omega3?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'High-potency omega-3',
      commission: 'Variable'
    },
    {
      name: 'Nordic Naturals Omega-3 (iHerb)',
      url: 'https://iherb.com/?rcode=YOUR_CODE',
      platform: 'iherb',
      description: 'Premium omega-3 source',
      commission: '5-10%'
    }
  ],

  // Vitamin D supplements
  vitaminD: [
    {
      name: 'Vitamin D3 (Digistore24)',
      url: 'https://digistore24.com/product/vitd3?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'High-potency vitamin D3',
      commission: 'Variable'
    },
    {
      name: 'Vitamin D3 (iHerb)',
      url: 'https://iherb.com/?rcode=YOUR_CODE',
      platform: 'iherb',
      description: 'Alternative vitamin D source',
      commission: '5-10%'
    }
  ],

  // Probiotics & Akkermansia
  probiotics: [
    {
      name: 'Akkermansia Probiotic (Digistore24)',
      url: 'https://digistore24.com/product/akkermansia?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'Akkermansia muciniphila probiotic',
      commission: 'Variable'
    },
    {
      name: 'Seed Probiotic (Digistore24)',
      url: 'https://digistore24.com/product/seed?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'Comprehensive probiotic blend',
      commission: 'Variable'
    }
  ],

  // Testing services
  testing: [
    {
      name: 'EverlyWell (Digistore24)',
      url: 'https://digistore24.com/product/everlywell?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'At-home blood testing',
      commission: 'Variable'
    },
    {
      name: 'WellnessFx (Digistore24)',
      url: 'https://digistore24.com/product/wellnessfx?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'Comprehensive health testing',
      commission: 'Variable'
    },
    {
      name: 'InsideTracker (Digistore24)',
      url: 'https://digistore24.com/product/insidetracker?aff=YOUR_ID',
      platform: 'digistore24',
      description: 'Biomarker optimization',
      commission: 'Variable'
    }
  ]
};

/**
 * Helper function to get link by category
 * Usage: getAffiliateLink('berberine', 0) → gets first berberine link
 */
export function getAffiliateLink(category: string, index: number = 0): AffiliateLink | null {
  const links = affiliateLinks[category];
  if (!links || !links[index]) {
    console.warn(`Affiliate link not found: ${category}[${index}]`);
    return null;
  }
  return links[index];
}

/**
 * Helper function to get all links in a category
 * Usage: getAffiliateCategory('berberine') → gets all berberine links
 */
export function getAffiliateCategory(category: string): AffiliateLink[] {
  const links = affiliateLinks[category];
  if (!links) {
    console.warn(`Affiliate category not found: ${category}`);
    return [];
  }
  return links;
}

/**
 * Helper function to track affiliate click
 * Usage: trackAffiliateClick('berberine', 'digistore24')
 */
export function trackAffiliateClick(category: string, platform: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      product_category: category,
      affiliate_platform: platform,
      timestamp: new Date().toISOString()
    });
  }
}

/**
 * Example usage in a component:
 * 
 * import { getAffiliateLink, trackAffiliateClick } from '@/data/affiliateLinks';
 * 
 * const BerberineLink = () => {
 *   const link = getAffiliateLink('berberine', 0);
 *   
 *   return (
 *     <a 
 *       href={link?.url} 
 *       target="_blank" 
 *       rel="noopener noreferrer"
 *       onClick={() => trackAffiliateClick('berberine', 'digistore24')}
 *     >
 *       {link?.name}
 *     </a>
 *   );
 * };
 */