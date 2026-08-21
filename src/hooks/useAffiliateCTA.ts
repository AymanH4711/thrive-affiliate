import { useState, useEffect } from 'react';

interface CTAConfig {
  text: string;
  url: string;
  badge?: string;
  description?: string;
}

export const useAffiliateCTA = (productId?: string): CTAConfig => {
  // Fallback defaults for ThriveHealth 360 affiliate placements
  const defaultCTA: CTAConfig = {
    text: "Check Best Price on Amazon",
    url: "https://amazon.com",
    badge: "Top Pick",
    description: "Backed by clinical data and highly rated by users."
  };

  const [cta, setCta] = useState<CTAConfig>(defaultCTA);

  useEffect(() => {
    if (!productId) return;

    // Optional: Add custom routing or ClickBank ID mapping logic here based on productId
    // Example placeholder:
    if (productId === 'berberine') {
      setCta({
        text: "Get Premium Berberine on ClickBank",
        url: "https://clickbank.com",
        badge: "Editor's Choice",
        description: "Pure, high-potency formula optimized for insulin sensitivity."
      });
    }
  }, [productId]);

  return cta;
};

// Exporting both ways completely bypasses syntax mismatch crashes!
export default useAffiliateCTA;