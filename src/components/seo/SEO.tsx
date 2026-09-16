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
  // NEW: Medical/Authority props
  pillarId?: string;
  articleType?: 'educational' | 'product-review' | 'comparison' | 'how-to';
  lastUpdated?: string;
  /** Only set true when a real, named reviewer exists — see reviewedByName.
      Defaults to false: no page claims medical review unless one actually happened. */
  medicallyReviewed?: boolean;
  /** Required to actually emit a reviewedBy claim — the real name of the person
      or organization that reviewed the content. There is no fallback value;
      if this is missing, no reviewedBy field is emitted even if
      medicallyReviewed is true, because a claim with no named reviewer behind
      it is the fabricated-credential problem this is meant to prevent. */
  reviewedByName?: string;
  /** A DISTINCT, weaker claim from medicallyReviewed: editorial fact-checking
      against sources (PubMed, CrossRef, etc.), not clinical review by a
      medical professional. Set true only alongside factCheckedBy and
      factCheckedDate — same no-fallback rule as medicallyReviewed applies. */
  factChecked?: boolean;
  /** Real name of the person/team who fact-checked the content, e.g.
      "ThriveHealth360 Team". No default — an unnamed fact-checker isn't
      emitted. */
  factCheckedBy?: string;
  /** Real date the fact-check happened. No fallback to today's date. */
  factCheckedDate?: string;
  /** Names of reference databases/sources actually used, e.g.
      ["PubMed", "CrossRef"]. Purely descriptive — not a schema.org-standard
      property, emitted as additionalProperty so it costs nothing if a
      consumer ignores it. */
  sourcesVerified?: string[];
  /** Overrides the schema.org @type of the generated JSON-LD. Defaults to
      'MedicalWebPage' to match every existing call site. Non-article pages
      (About, Contact, Home) should pass 'AboutPage' / 'WebPage' / etc. —
      claiming MedicalWebPage on a page with no medical content is itself a
      small accuracy problem, separate from the reviewedBy issue. */
  schemaType?: string;
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
 *   // Only set when a real clinician actually reviewed this page:
 *   medicallyReviewed={true}
 *   reviewedByName="Jane Doe, RD"
 *   // Independent, weaker claim — editorial fact-checking against sources,
 *   // not clinical review. Use this instead when there's no clinician:
 *   factChecked={true}
 *   factCheckedBy="ThriveHealth360 Team"
 *   factCheckedDate="2026-09-13"
 *   sourcesVerified={["PubMed", "CrossRef"]}
 * />
 */
export function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'ThriveHealth360',
  schema,
  // NEW parameters
  pillarId,
  articleType = 'educational',
  lastUpdated,
  medicallyReviewed = false,
  reviewedByName,
  factChecked = false,
  factCheckedBy,
  factCheckedDate,
  sourcesVerified,
  schemaType = 'MedicalWebPage'
}: SEOProps) {

  // Always call the hook (Rules of Hooks) — useAuthorityPack must handle an
  // undefined pillarId internally rather than this component deciding
  // whether to call it at all.
  const authorityPack = useAuthorityPack(pillarId);

  // Base site configuration
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thrivehealth360.org';
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
      "@type": schemaType,
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
        name: "ThriveHealth360",
        url: siteUrl
      }
    };

    // Add review info ONLY when both a real reviewer name and a real review
    // date were explicitly passed in. No fallback organization name and no
    // fallback to today's date — an unnamed or dated-by-default "review" is
    // exactly the fabricated-credential signal Google's quality systems (and
    // human YMYL raters) are checking for.
    if (medicallyReviewed && reviewedByName && lastUpdated) {
      Object.assign(baseSchema, {
        lastReviewed: lastUpdated,
        reviewedBy: {
          "@type": "Organization",
          name: reviewedByName
        }
      });
    } else if (medicallyReviewed) {
      console.warn(
        '⚠️ SEO: medicallyReviewed is true but reviewedByName and/or lastUpdated ' +
        'is missing — skipping the reviewedBy/lastReviewed schema fields rather ' +
        'than emitting a fabricated reviewer or date.'
      );
    }

    // Separate, weaker claim: editorial fact-checking against reference
    // sources, not clinical review. Only emitted when a real fact-checker
    // name and real date are both provided — same reasoning as above.
    // Uses `editor` + `dateModified`, standard CreativeWork properties that
    // don't carry a "reviewed by a medical professional" implication the way
    // reviewedBy/lastReviewed do on a MedicalWebPage.
    if (factChecked && factCheckedBy && factCheckedDate) {
      Object.assign(baseSchema, {
        editor: {
          "@type": "Organization",
          name: factCheckedBy
        },
        dateModified: factCheckedDate
      });

      if (sourcesVerified && sourcesVerified.length > 0) {
        const existingProps = (baseSchema as any).additionalProperty || [];
        Object.assign(baseSchema, {
          additionalProperty: [
            ...existingProps,
            {
              "@type": "PropertyValue",
              name: "factCheckSources",
              value: sourcesVerified.join(', ')
            }
          ]
        });
      }
    } else if (factChecked) {
      console.warn(
        '⚠️ SEO: factChecked is true but factCheckedBy and/or factCheckedDate ' +
        'is missing — skipping the fact-check schema fields rather than ' +
        'emitting an unnamed or undated claim.'
      );
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
      { property: 'og:site_name', content: 'ThriveHealth360' },
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
      { name: 'twitter:image', content: imageUrl }
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

  }, [title, description, keywords, imageUrl, fullUrl, type, author, pillarId, authorityPack, schema, medicallyReviewed, reviewedByName, lastUpdated, factChecked, factCheckedBy, factCheckedDate, sourcesVerified, schemaType]);

  return <></>;
}

export default SEO;