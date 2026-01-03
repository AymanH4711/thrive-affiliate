// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

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
}

/**
 * SEO Component for managing meta tags across all pages
 * 
 * Usage:
 * <SEO 
 *   title="Page Title | Thrive Health"
 *   description="Meta description (150-160 chars)"
 *   keywords="keyword1, keyword2, keyword3"
 *   image="/images/page-og.png"
 *   url="/page-path"
 *   schema={schemaObject}
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
  twitterHandle = '@ThriveHealth'
}: SEOProps) {
  
  // Base site configuration
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thrive-health.com';
  const defaultOgImage = '/images/og-default.png';
  
  // Build full URLs
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}${defaultOgImage}`;
  
  // Validate meta description length (should be 150-160 chars)
  if (description.length > 160) {
    console.warn(`⚠️ SEO: Meta description is ${description.length} chars. Keep it under 160 chars for best results.`);
  }
  
  // Validate title length (should be 50-60 chars)
  if (title.length > 60) {
    console.warn(`⚠️ SEO: Title is ${title.length} chars. Keep it under 60 chars for best results.`);
  }
  
  return (
    <Helmet>
      {/* ===== BASIC META TAGS ===== */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {keywords && (
        <meta name="keywords" content={keywords} />
      )}
      
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#059669" />
      <meta name="robots" content="index, follow" />
      
      {/* ===== CANONICAL URL ===== */}
      <link rel="canonical" href={fullUrl} />
      
      {/* ===== OPEN GRAPH (Facebook, LinkedIn, etc) ===== */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Thrive Health" />
      <meta property="og:locale" content="en_US" />
      
      {/* ===== TWITTER CARD ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      
      {/* ===== FACEBOOK APP ID (optional) ===== */}
      {/* <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" /> */}
      
      {/* ===== ADDITIONAL META TAGS ===== */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* ===== SCHEMA.ORG STRUCTURED DATA ===== */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* ===== DEFAULT SCHEMA (Organization) ===== */}
      {!schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Thrive Health",
            "description": "Natural prediabetes reversal program with science-backed guidance on diet, exercise, supplements, and lifestyle changes",
            "url": siteUrl,
            "logo": `${siteUrl}/logo.png`,
            "sameAs": [
              "https://facebook.com/thrivehealth",
              "https://instagram.com/thrivehealth",
              "https://twitter.com/ThriveHealth"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "Customer Support"
            }
          })}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;