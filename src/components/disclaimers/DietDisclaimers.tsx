// FILE PATH: src/components/disclaimers/DietDisclaimers.tsx

import React from 'react';
import { AlertCircle, ShieldAlert, Utensils } from 'lucide-react';

/**
 * DIET/NUTRITION DISCLAIMER COMPONENTS
 * Reusable across all diet and nutrition-related pages.
 * Mirrors the pattern established in SupplementDisclaimers.tsx.
 *
 * Usage:
 * import {
 *   DietMedicalDisclaimer,
 *   DietMedicalDisclaimerCompact,
 *   DietAffiliateDisclaimerHub,
 *   DietAffiliateDisclaimerProductCompact,
 *   DietNotAReplacement
 * } from '@/components/disclaimers/DietDisclaimers';
 */

// ============================================================================
// COMPONENT 1: FULL MEDICAL DISCLAIMER (For Hub Pages)
// ============================================================================

export function DietMedicalDisclaimer() {
  return (
    <section className="bg-red-50 border-t-4 border-b-4 border-red-600 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <ShieldAlert className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 text-lg mb-2">⚠️ IMPORTANT MEDICAL DISCLAIMER</h3>
            <p className="text-red-800 mb-3">
              The dietary information on this page has not been evaluated by the FDA, MHRA, TGA, or
              Health Canada. <strong>This is NOT medical advice.</strong> Carbohydrate targets, calorie
              needs, and dietary changes should be planned with a qualified clinician or registered
              dietitian — especially if you take blood sugar medications, as dietary changes can affect
              dosing needs.
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

export function DietMedicalDisclaimerCompact() {
  return (
    <section className="bg-red-50 border-t border-b border-red-200 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">
            <strong>Medical Disclaimer:</strong> For educational purposes only. Not evaluated by the FDA, MHRA, TGA, or Health Canada.
            Work with a clinician or registered dietitian before making major dietary changes, especially if you take blood sugar
            medications. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 2: AFFILIATE DISCLOSURE - HUB PAGE (Bottom of page) - FULL
// ============================================================================

export function DietAffiliateDisclaimerHub() {
  return (
    <section className="bg-blue-50 border-t border-blue-200 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">💰 AFFILIATE DISCLOSURE</h3>
            <p className="text-blue-800">
              We may earn a commission from purchases made through links on this page (e.g. meal-planning
              tools, cookbooks, or kitchen products). This helps us continue providing free, evidence-based
              content. <strong> Your purchase price remains the same.</strong>
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

export function DietAffiliateDisclaimerProductCompact() {
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

export function DietNotAReplacement() {
  return (
    <section className="bg-blue-50 border-l-4 border-blue-600 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <Utensils className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              🍽️ Dietary Changes Support Medical Treatment, They Don't Replace It
            </h3>
            <p className="text-blue-800 mb-2">
              Nutrition strategies discussed here are meant to work alongside — not instead of — any
              medication or treatment plan prescribed by your doctor.
            </p>
            <p className="text-blue-800 font-semibold">
              Never stop or reduce a prescribed medication because of a dietary change without your
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

export function DietComprehensiveDisclaimer() {
  return (
    <section className="space-y-0">
      <DietMedicalDisclaimerCompact />
      <DietNotAReplacement />
    </section>
  );
}

// ============================================================================
// EXPORT SUMMARY & USAGE GUIDE
// ============================================================================

/**
 * USAGE GUIDE:
 *
 * FOR HUB PAGE (/nutrition):
 * - At TOP: <DietMedicalDisclaimer />
 * - At BOTTOM: <DietAffiliateDisclaimerHub />
 *
 * FOR ARTICLE PAGES (individual diet/nutrition articles):
 * - At TOP: <DietMedicalDisclaimerCompact />
 * - In MIDDLE (if medication-affecting): <DietNotAReplacement /> (optional but recommended)
 * - At BOTTOM: <DietAffiliateDisclaimerProductCompact /> (only if the page has affiliate links)
 */
