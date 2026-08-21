// src/components/SEO.tsx
// Enhanced: Now includes medical schema markup for YMYL content
import React from 'react';
import { useAuthorityPack } from "../../hooks/useAuthorityPack";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  schema?: object;
  twitterHandle?: string;
  // NEW: Medical/Authority props
  pillarId?: string;
  articleType?: 'educational' | 'product-review' | 'comparison' | 'how-to';
  lastUpdated?: string;
  medicallyReviewed?: boolean;
}

// FAQ Schema Types
interface FAQItem {
  question: string;
  answer: string;
  searchIntent?: string;
  difficulty?: 'beginner' | 'high' | 'critical';
}

/**
 * Generate FAQ Schema Markup for structured data
 */
export const getFAQSchema = (faqs: FAQItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

/**
 * SEO Component for managing meta tags across all pages
 * 
 * ✅ ENHANCED: Now includes medical schema markup for YMYL content
 * ✅ Integrates authority packs for E-E-A-T signals
 * 
 * Usage:
 * <SEO
 *   title="Berberine vs Metformin | Thrive"
 *   description="Science-backed comparison..."
 *   keywords="berberine, metformin, blood sugar"
 *   image="/images/berberine-og.png"
 *   url="/blog/berberine-vs-metformin"
 *   pillarId="insulin-resistance"
 *   articleType="comparison"
 *   medicallyReviewed={true}
 * />
 */
export function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'Thrive Health',
  schema,
  twitterHandle = '@ThriveHealth',
  // NEW parameters
  pillarId,
  articleType = 'educational',
  lastUpdated,
  medicallyReviewed = true
}: SEOProps) {

  // Get authority pack data if pillarId provided
  const authorityPack = pillarId ? useAuthorityPack(pillarId) : null;

  // Base site configuration
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thrive-health.com';
  const defaultOgImage = '/images/og-default.png';

  // Build full URLs
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}${defaultOgImage}`;

  // Validate meta description length
  if (description.length > 160) {
    console.warn(`⚠️ SEO: Meta description is ${description.length} chars. Keep it under 160 chars.`);
  }

  // Validate title length
  if (title.length > 60) {
    console.warn(`⚠️ SEO: Title is ${title.length} chars. Keep it under 60 chars.`);
  }

  // Generate Medical Schema Markup
  const generateMedicalSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: title,
      description: description,
      url: fullUrl,
      image: imageUrl,
      author: {
        "@type": "Organization",
        name: author,
        url: siteUrl
      },
      publisher: {
        "@type": "Organization",
        name: "Thrive Health",
        url: siteUrl
      }
    };

    // Add review info if medically reviewed
    if (medicallyReviewed) {
      Object.assign(baseSchema, {
        lastReviewed: lastUpdated || new Date().toISOString().split('T')[0],
        reviewedBy: {
          "@type": "Organization",
          name: "Thrive Health Editorial Team"
        }
      });
    }

    // Add authority pack data if available
    if (authorityPack) {
      // Add semantic entities/vocabulary
      Object.assign(baseSchema, {
        mentions: authorityPack.entities.map((entity) => ({
          "@type": "MedicalEntity",
          name: entity
        })),
        // Add clinical references
        references: authorityPack.citations.map((citation) => ({
          "@type": "ScholarlyArticle",
          headline: citation.title,
          url: citation.url,
          description: citation.title,
          datePublished: new Date().toISOString().split('T')[0]
        }))
      });
    }

    return baseSchema;
  };

  React.useEffect(() => {
    // Set page title
    document.title = title;

    // Set description meta tag
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', description);

    // Set keywords meta tag (if provided)
    if (keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', keywords);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: fullUrl },
      { property: 'og:site_name', content: 'Thrive Health' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:creator', content: twitterHandle },
      { name: 'twitter:site', content: twitterHandle }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Set author meta tag
    let authorMeta = document.querySelector('meta[name="author"]');
    if (!authorMeta) {
      authorMeta = document.createElement('meta');
      authorMeta.setAttribute('name', 'author');
      document.head.appendChild(authorMeta);
    }
    authorMeta.setAttribute('content', author);

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Set Medical Schema Markup
    const finalSchema = schema || generateMedicalSchema();
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(finalSchema);

  }, [title, description, keywords, imageUrl, fullUrl, type, author, twitterHandle, pillarId, authorityPack, schema]);

  return <></>;
}

export default SEO;