// FILE PATH: src/components/disclaimers/LifestyleDisclaimers.tsx

import React from 'react';
import { AlertCircle, ShieldAlert, HeartPulse } from 'lucide-react';

/**
 * LIFESTYLE DISCLAIMER COMPONENTS
 * Reusable across all exercise, sleep, and stress-management pages.
 * Mirrors the pattern established in SupplementDisclaimers.tsx.
 *
 * Usage:
 * import {
 *   LifestyleMedicalDisclaimer,
 *   LifestyleMedicalDisclaimerCompact,
 *   LifestyleAffiliateDisclaimerHub,
 *   LifestyleAffiliateDisclaimerProductCompact,
 *   LifestyleNotAReplacement
 * } from '@/components/disclaimers/LifestyleDisclaimers';
 */

// ============================================================================
// COMPONENT 1: FULL MEDICAL DISCLAIMER (For Hub Pages)
// ============================================================================

export function LifestyleMedicalDisclaimer() {
  return (
    <section className="bg-red-50 border-t-4 border-b-4 border-red-600 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <ShieldAlert className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 text-lg mb-2">⚠️ IMPORTANT MEDICAL DISCLAIMER</h3>
            <p className="text-red-800 mb-3">
              The lifestyle information on this page has not been evaluated by the FDA, MHRA, TGA, or
              Health Canada. <strong>This is NOT medical advice.</strong> Start any new exercise,
              sleep, or stress-management protocol gradually and discuss it with your healthcare
              provider first — particularly if you have cardiovascular disease or are on insulin.
            </p>
            <p className="text-red-800 font-semibold">
              This content is not intended to diagnose, treat, cure, or prevent any disease.
              Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 1B: COMPACT MEDICAL DISCLAIMER (For Article Pages)
// ============================================================================

export function LifestyleMedicalDisclaimerCompact() {
  return (
    <section className="bg-red-50 border-t border-b border-red-200 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">
            <strong>Medical Disclaimer:</strong> For educational purposes only. Not evaluated by the FDA, MHRA, TGA, or Health Canada.
            Consult your healthcare provider before starting a new exercise, sleep, or stress-management programme, especially if
            you have cardiovascular disease or are on insulin. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 2: AFFILIATE DISCLOSURE - HUB PAGE (Bottom of page) - FULL
// ============================================================================

export function LifestyleAffiliateDisclaimerHub() {
  return (
    <section className="bg-blue-50 border-t border-blue-200 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">💰 AFFILIATE DISCLOSURE</h3>
            <p className="text-blue-800">
              We may earn a commission from purchases made through links on this page (e.g. fitness
              trackers, sleep aids, or stress-management tools). This helps us continue providing free,
              evidence-based content. <strong> Your purchase price remains the same.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 2B: AFFILIATE DISCLOSURE - PRODUCT PAGES - COMPACT
// ============================================================================

export function LifestyleAffiliateDisclaimerProductCompact() {
  return (
    <section className="bg-blue-50 border-t border-blue-200 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            <strong>Affiliate Disclosure:</strong> Thrive may earn a small commission if you purchase through links on this page, <strong>at no extra cost to you.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 4: NOT A REPLACEMENT CLARIFICATION (Prominent section)
// ============================================================================

export function LifestyleNotAReplacement() {
  return (
    <section className="bg-blue-50 border-l-4 border-blue-600 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <HeartPulse className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              💓 Lifestyle Changes Support Medical Treatment, They Don't Replace It
            </h3>
            <p className="text-blue-800 mb-2">
              Exercise, sleep, and stress-management strategies discussed here work alongside — not
              instead of — any medication or treatment plan prescribed by your doctor.
            </p>
            <p className="text-blue-800 font-semibold">
              Never stop or reduce a prescribed medication because of a lifestyle change without your
              provider's guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 5: COMPREHENSIVE DISCLAIMER (All-in-one for article pages)
// ============================================================================

export function LifestyleComprehensiveDisclaimer() {
  return (
    <section className="space-y-0">
      <LifestyleMedicalDisclaimerCompact />
      <LifestyleNotAReplacement />
    </section>
  );
}

// ============================================================================
// EXPORT SUMMARY & USAGE GUIDE
// ============================================================================

/**
 * USAGE GUIDE:
 *
 * FOR HUB PAGE (/lifestyle):
 * - At TOP: <LifestyleMedicalDisclaimer />
 * - At BOTTOM: <LifestyleAffiliateDisclaimerHub />
 *
 * FOR ARTICLE PAGES (individual exercise/sleep/stress articles):
 * - At TOP: <LifestyleMedicalDisclaimerCompact />
 * - In MIDDLE (if cardiovascular/insulin-relevant): <LifestyleNotAReplacement /> (optional but recommended)
 * - At BOTTOM: <LifestyleAffiliateDisclaimerProductCompact /> (only if the page has affiliate links)
 */
