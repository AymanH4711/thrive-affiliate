// FILE PATH: src/components/disclaimers/SupplementDisclaimers.tsx

import React from 'react';
import { AlertCircle, ShieldAlert, Zap } from 'lucide-react';

/**
 * SUPPLEMENT DISCLAIMER COMPONENTS
 * Reusable across all supplement-related pages
 *
 * Usage:
 * import {
 *   SupplementsMedicalDisclaimer,
 *   SupplementsMedicalDisclaimerCompact,
 *   SupplementsAffiliateDisclaimerHub,
 *   SupplementsAffiliateDisclaimerProduct,
 *   SupplementsForceMultiplier
 * } from '@/components/disclaimers/SupplementDisclaimers';
 */

// ============================================================================
// COMPONENT 1: FULL MEDICAL DISCLAIMER (For Hub Pages)
// ============================================================================
// COLOR UPDATE: changed red -> amber. Confirmed live against a real published
// article (Intermittent Fasting & Blood Sugar) that renders its Medical
// Disclaimer in amber/yellow, not red — direct evidence overriding the
// earlier "red is the established convention" read, which was based only on
// the four disclaimer *source files* agreeing with each other, not on what's
// actually live. Applied to both the full and compact variants below.

export function SupplementsMedicalDisclaimer() {
  return (
    <section className="bg-amber-50 border-t-4 border-b-4 border-amber-500 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <ShieldAlert className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-900 text-lg mb-2">⚠️ IMPORTANT MEDICAL DISCLAIMER</h3>
            <p className="text-amber-800 mb-3">
              The supplements discussed on this page have not been evaluated by the FDA, MHRA, TGA,
              or Health Canada. <strong>This is NOT medical advice.</strong> Always consult your
              healthcare provider before starting any supplement, especially if you have existing
              conditions or take medications.
            </p>
            <p className="text-amber-800 font-semibold">
              Supplements are not intended to diagnose, treat, cure, or prevent any disease.
              Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 1B: COMPACT MEDICAL DISCLAIMER (For Product Category Pages)
// ============================================================================

export function SupplementsMedicalDisclaimerCompact() {
  return (
    <section className="bg-amber-50 border-t border-b border-amber-300 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Medical Disclaimer:</strong> For educational purposes only. Not evaluated by the FDA, MHRA, TGA, or Health Canada.
            Consult your healthcare provider before starting any supplement, especially if you have conditions or take medications.
            Supplements do not diagnose, treat, cure, or prevent disease. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 1C: COMPACT MEDICAL DISCLAIMER - SALES VERSION (For Product Category Pages)
// ============================================================================

export function SupplementsMedicalDisclaimerCompactSales() {
  return (
    <section className="bg-amber-50 border-t border-b border-amber-300 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Medical Disclaimer:</strong> For educational purposes only. Not evaluated by the FDA, MHRA, TGA, or Health Canada.
            Always consult your healthcare provider before use, especially with existing conditions or medications.
            Not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 2: AFFILIATE DISCLOSURE - HUB PAGE (Bottom of page) - FULL
// ============================================================================
// Unchanged — blue, not part of this color update.

export function SupplementsAffiliateDisclaimerHub() {
  return (
    <section className="bg-blue-50 border-t border-blue-200 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">💰 AFFILIATE DISCLOSURE</h3>
            <p className="text-blue-800">
              We may earn a commission from purchases made through links on this page.
              This helps us continue providing free, evidence-based content. We only recommend
              products we've thoroughly researched and believe may benefit our readers.
              <strong> Your purchase price remains the same.</strong>
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
// Unchanged — blue, not part of this color update.

export function SupplementsAffiliateDisclaimerProductCompact() {
  return (
    <section className="bg-blue-50 border-t border-blue-200 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            <strong>Affiliate Disclosure:</strong> We select products based on ingredient quality and third-party testing.
            Thrive may earn a small commission if you purchase through these links, <strong>at no extra cost to you.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 4: FORCE MULTIPLIER CLARIFICATION (Prominent section)
// ============================================================================

export function SupplementsForceMultiplier() {
  return (
    <section className="bg-blue-50 border-l-4 border-blue-600 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              ⚡ Supplements Are Force Multipliers, Not Replacements
            </h3>
            <p className="text-blue-800 mb-2">
              Without significant diet and exercise changes, supplements have minimal effect on health outcomes.
            </p>
            <p className="text-blue-800 font-semibold">
              The 80/20 Rule: Diet & Exercise = 80% of results | Supplements = 20% of results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 5: COMPREHENSIVE DISCLAIMER (All-in-one for product pages)
// ============================================================================

export function SupplementsComprehensiveDisclaimer() {
  return (
    <section className="space-y-0">
      <SupplementsMedicalDisclaimerCompact />
      <SupplementsForceMultiplier />
    </section>
  );
}

// ============================================================================
// EXPORT SUMMARY & USAGE GUIDE
// ============================================================================

/**
 * USAGE GUIDE:
 *
 * FOR HUB PAGE (/supplements):
 * - At TOP: <SupplementsMedicalDisclaimer />
 * - At BOTTOM: <SupplementsAffiliateDisclaimerHub />
 *
 * FOR PRODUCT CATEGORY PAGES (individual supplement pages) - RECOMMENDED:
 * - At TOP: <SupplementsMedicalDisclaimerCompactSales />
 * - At BOTTOM: <SupplementsAffiliateDisclaimerProductCompact />
 *
 * FOR PRODUCT CATEGORY PAGES (individual supplement pages) - ALTERNATIVE:
 * - At TOP: <SupplementsMedicalDisclaimerCompact /> (educational version)
 * - At BOTTOM: <SupplementsAffiliateDisclaimerProductCompact />
 *
 * FOR HEALTH INTERVENTION PAGES (Diet, Exercise, Sleep, etc.):
 * - At TOP: <SupplementsMedicalDisclaimer />
 * - In MIDDLE: <SupplementsForceMultiplier /> (optional but recommended)
 * - At BOTTOM: Customize as needed
 */