// FILE PATH: src/components/disclaimers/DeviceDisclaimers.tsx

import React from 'react';
import { AlertCircle, ShieldAlert, Watch } from 'lucide-react';

/**
 * DEVICE/MONITORING DISCLAIMER COMPONENTS
 * Reusable across all glucose monitor, CGM, and device-related pages.
 * Mirrors the pattern established in SupplementDisclaimers.tsx.
 *
 * Usage:
 * import {
 *   DeviceMedicalDisclaimer,
 *   DeviceMedicalDisclaimerCompact,
 *   DeviceAffiliateDisclaimerHub,
 *   DeviceAffiliateDisclaimerProductCompact,
 *   DeviceNotAReplacement
 * } from '@/components/disclaimers/DeviceDisclaimers';
 */

// ============================================================================
// COMPONENT 1: FULL MEDICAL DISCLAIMER (For Hub Pages)
// ============================================================================

export function DeviceMedicalDisclaimer() {
  return (
    <section className="bg-red-50 border-t-4 border-b-4 border-red-600 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <ShieldAlert className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 text-lg mb-2">⚠️ IMPORTANT MEDICAL DISCLAIMER</h3>
            <p className="text-red-800 mb-3">
              The device information on this page has not been evaluated by the FDA, MHRA, TGA, or
              Health Canada. <strong>This is NOT medical advice.</strong> Monitoring device selection,
              alert thresholds, calibration, and any resulting treatment decisions must be confirmed
              with your diabetes care team.
            </p>
            <p className="text-red-800 font-semibold">
              This content is not a substitute for professional medical advice, diagnosis, or treatment,
              and is not intended to diagnose, treat, cure, or prevent any disease.
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

export function DeviceMedicalDisclaimerCompact() {
  return (
    <section className="bg-red-50 border-t border-b border-red-200 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">
            <strong>Medical Disclaimer:</strong> For educational purposes only. Not evaluated by the FDA, MHRA, TGA, or Health Canada.
            Confirm device settings, alert thresholds, and treatment decisions with your diabetes care team. Not a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 2: AFFILIATE DISCLOSURE - HUB PAGE (Bottom of page) - FULL
// ============================================================================

export function DeviceAffiliateDisclaimerHub() {
  return (
    <section className="bg-blue-50 border-t border-blue-200 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">💰 AFFILIATE DISCLOSURE</h3>
            <p className="text-blue-800">
              We may earn a commission from purchases made through links on this page. This helps us
              continue providing free, evidence-based content. We only recommend devices we've
              thoroughly researched. <strong> Your purchase price remains the same.</strong>
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

export function DeviceAffiliateDisclaimerProductCompact() {
  return (
    <section className="bg-blue-50 border-t border-blue-200 py-3">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            <strong>Affiliate Disclosure:</strong> We select devices based on accuracy data and user reviews.
            Thrive may earn a small commission if you purchase through these links, <strong>at no extra cost to you.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 4: NOT A REPLACEMENT CLARIFICATION (Prominent section)
// ============================================================================

export function DeviceNotAReplacement() {
  return (
    <section className="bg-blue-50 border-l-4 border-blue-600 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex gap-4">
          <Watch className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              ⌚ Devices Support Monitoring, They Don't Replace Clinical Judgment
            </h3>
            <p className="text-blue-800 mb-2">
              CGMs, glucose meters, and similar devices are tools for tracking trends — they do not
              diagnose conditions or determine treatment on their own.
            </p>
            <p className="text-blue-800 font-semibold">
              Always confirm readings and any treatment changes with your healthcare provider,
              especially before adjusting insulin or medication doses.
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

export function DeviceComprehensiveDisclaimer() {
  return (
    <section className="space-y-0">
      <DeviceMedicalDisclaimerCompact />
      <DeviceNotAReplacement />
    </section>
  );
}

// ============================================================================
// EXPORT SUMMARY & USAGE GUIDE
// ============================================================================

/**
 * USAGE GUIDE:
 *
 * FOR HUB PAGE (/devices):
 * - At TOP: <DeviceMedicalDisclaimer />
 * - At BOTTOM: <DeviceAffiliateDisclaimerHub />
 *
 * FOR ARTICLE PAGES (individual device reviews/guides):
 * - At TOP: <DeviceMedicalDisclaimerCompact />
 * - In MIDDLE: <DeviceNotAReplacement /> (recommended — devices carry higher
 *   risk of being mistaken for diagnostic authority)
 * - At BOTTOM: <DeviceAffiliateDisclaimerProductCompact /> (only if the page has affiliate links)
 */
