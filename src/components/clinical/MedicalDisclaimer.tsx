import React from "react";

/**
 * MedicalDisclaimer
 * -----------------
 * Two variants, deliberately kept apart so the wrong one can't leak onto
 * the wrong page type:
 *
 *  - "educational": for articles/guides with no product on the page.
 *    Publisher-liability language only. No FDA/DSHEA phrasing — the FDA
 *    doesn't evaluate dietary advice, and this site doesn't diagnose or
 *    treat anyone, so those claims don't apply here and shouldn't appear.
 *
 *  - "product": for pages that feature a specific supplement/device with
 *    a buy CTA. Carries the FDA-not-evaluated / not-intended-to-diagnose
 *    structure/function-claim language, which is the boilerplate that
 *    actually belongs next to a product.
 *
 * Pick the variant per page type at the call site — do not add a default
 * that silently picks one, since a wrong default here is exactly the bug
 * class (supplement language leaking onto non-supplement content) this
 * component exists to prevent.
 */

interface MedicalDisclaimerProps {
  variant: "educational" | "product";
  /** Optional product name for the product variant, e.g. "GlucoBliss". Omit to say "This product." */
  productName?: string;
}

export function MedicalDisclaimer({ variant, productName }: MedicalDisclaimerProps) {
  if (variant === "product") {
    const subject = productName ? productName : "This product";
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-bold text-amber-900 mb-3">⚠️ Medical Disclaimer</h4>
        <p className="text-xs text-amber-800 leading-relaxed">
          {subject} has not been evaluated by the FDA or equivalent regulators in your country
          and is not intended to diagnose, treat, cure, or prevent any disease. Consult a
          qualified healthcare provider before use, especially if you are pregnant, nursing,
          taking medication, or have a medical condition. Individual results may vary.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
      <h4 className="font-bold text-amber-900 mb-3">⚠️ Medical Disclaimer</h4>
      <p className="text-xs text-amber-800 leading-relaxed">
        ThriveHealth360 publishes educational health content. It is not a medical provider and
        does not offer personalized medical advice. Always consult a qualified healthcare
        provider or registered dietitian before making major dietary changes, especially if you
        take medications affecting blood sugar. Individual results may vary.
      </p>
    </div>
  );
}
