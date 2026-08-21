// src/components/FAQSection.tsx

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from "@/components/seo/SEO";

// Helper to safely construct structured JSON-LD data for search engines
const getFAQSchema = (faqs: Array<{ question: string; answer: string } | { q: string; a: string }>) => {
  if (!faqs || !Array.isArray(faqs)) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => {
      const question = 'question' in item ? item.question : item.q;
      const answer = 'answer' in item ? item.answer : item.a;
      return {
        "@type": "Question",
        "name": question || "",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer || "",
        },
      };
    }),
  };
};

interface FAQItem {
  question: string;
  answer: string;
  searchIntent?: string;
  difficulty?: 'beginner' | 'high' | 'critical';
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  enableSchema?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs, 
  title = "Frequently Asked Questions",
  enableSchema = false
}) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  // Add FAQ Schema Markup if enabled
  useEffect(() => {
    if (enableSchema) {
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify(getFAQSchema(faqs));
      document.head.appendChild(faqSchema);
      
      return () => {
        document.head.removeChild(faqSchema);
      };
    }
  }, [faqs, enableSchema]);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden hover:border-blue-400 transition-colors"
          >
            {/* Question (Clickable Header) */}
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {faq.question}
                </h3>
                <div className="flex gap-2 text-xs">
                  {faq.difficulty === 'critical' && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">
                      ⚠️ Critical
                    </span>
                  )}
                  {faq.difficulty === 'high' && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      Important
                    </span>
                  )}
                  {faq.searchIntent && (
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      {faq.searchIntent}
                    </span>
                  )}
                </div>
              </div>

              {/* Expand/Collapse Icon */}
              <div className="flex-shrink-0 mt-1">
                {expanded === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </button>

            {/* Answer (Expandable) */}
            {expanded === index && (
              <div className="bg-blue-50 border-t border-gray-200 p-6">
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-100 border border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-700">
          <strong>Didn't find your answer?</strong> Contact our team at support@thrivehealth.com or check our complete resources library for more information.
        </p>
      </div>
    </section>
  );
};