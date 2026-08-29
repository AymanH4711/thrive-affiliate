// src/App.tsx
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// ── Lightweight placeholder for articles temporarily pulled from the site ──
// Used instead of a 404/redirect so anyone landing on an old link (bookmark,
// search result, external backlink) sees a clear status message rather than
// a dead end or a jarring silent redirect to the homepage.
const ComingSoon = ({ title }: { title?: string }) => (
  <div className="max-w-2xl mx-auto px-6 py-24 text-center">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">
      {title ?? "This Article Is Coming Soon"}
    </h1>
    <p className="text-gray-600 mb-8">
      We're currently updating this article to make sure every product and
      recommendation meets our evidence and sourcing standards. Please check
      back soon.
    </p>
    <a
      href="/blog"
      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
    >
      ← Back to Blog
    </a>
  </div>
);

// ── Main Pages ────────────────────────────────────────────────────────────────
// HomePage AND all individual blog articles stay eager (static imports), not
// lazy. Reasoning: lazy-loading only pays off for pages a visitor reaches by
// navigating WITHIN the app first (so the small loading flash happens after
// they've already seen a full page render). Blog articles are the opposite —
// nearly every real visit is a direct landing from Google/social/a shared
// link, straight into an empty Suspense fallback. That produces a large,
// completely avoidable layout shift (placeholder → full article) on exactly
// the pages that matter most for this site. Confirmed via PageSpeed Insights:
// CLS was 0.655 on /blog/5-warning-signs-of-prediabetes even with all image
// dimensions fixed — the shift was structural, not image-related.
//
// Utility/tool/pillar pages below stay lazy since those genuinely are
// reached via in-app navigation, where the tradeoff favors bundle size.
import HomePage from "./pages/HomePage";

import PrediabetesVsType2Diabetes from "./pages/blog/Prediabetes-Support/PrediabetesVsType2Diabetes";
import InsulinSensitivityFAQ2026 from "./pages/blog/Prediabetes-Support/InsulinSensitivityFAQ2026";
import ReversePrediabetes2026 from "./pages/blog/Prediabetes-Support/ReversePrediabetes2026";
import IntermittentFastingBloodSugar from "./pages/blog/Diet&BloodSugar-Control/IntermittentFastingBloodSugar";
import BestFoodsBloodSugar from "./pages/blog/Diet&BloodSugar-Control/BestFoodsBloodSugar";
import LowCarbDietForDiabetesBloodSugarControlEvidenceBasArticle from "./pages/blog/Diet&BloodSugar-Control/low-carb-diet-for-diabetes-blood-sugar-c-article";
import PostMealWalks from "./pages/blog/Exercise&Movement/PostMealWalks";
import CGMvsBloodGlucoseMeter from "./pages/blog/Glucose-Monitoring/CGMvsBloodGlucoseMeter";
import BerberineVsMetformin from "./pages/blog/Supplements&Natural-Health/BerberineVsMetformin";
import GlucoTrustDiabetesScienceBackedBenefitArticle from "./pages/blog/Supplements&Natural-Health/glucotrust-diabetes-science-backed-benef-article";
import GlucoCareNaturalDiabetesSupplementScienceBackedBenArticle from "./pages/blog/Supplements&Natural-Health/gluco-care-natural-diabetes-supplement-s-article";
import DiabetesBloodSugarManagementScienceBackedBenefitsHArticle from "./pages/blog/Supplements&Natural-Health/diabetes-blood-sugar-management-science--article";
import FiveWarningSignsPrediabetes from "./pages/blog/Featured-Article/5WarningSignsPrediabetes";
// BlogArticlePage is the fallback for any article not given its own route
// above (/blog/:articleId) — also a direct-landing page, so also eager.
import BlogArticlePage from "./pages/BlogArticlePage";

const AboutPage        = lazy(() => import("./pages/AboutPage"));
const BlogPage          = lazy(() => import("./pages/BlogPage"));
const ResourcesPage     = lazy(() => import("./pages/ResourcesPage"));

// ── Utility / Legal Pages ─────────────────────────────────────────────────────
const ContactPage             = lazy(() => import("./pages/utility/ContactPage"));
const TermsOfService          = lazy(() => import("./pages/utility/TermsOfService"));
const MedicalDisclaimerPage   = lazy(() => import("./pages/MedicalDisclaimerPage"));
const AffiliateDisclosurePage = lazy(() => import("./pages/AffiliateDisclosurePage"));
const PrivacyPage             = lazy(() => import("./pages/utility/PrivacyPolicy"));

// ── Blog: Sleep & Stress Management ───────────────────────────────────────
// (commented out; missing file)
// const SleepBloodSugar = lazy(() => import("./pages/blog/Sleep&Stress-Management/SleepBloodSugar"));

// ── Book ──────────────────────────────────────────────────────────────────────
const BloodSugarResetBook = lazy(() => import("./books/BloodSugarResetBook"));

// ── Prediabetes Pillar Pages ──────────────────────────────────────────────────
const PrediabetesSupportHub     = lazy(() => import("./pages/prediabetes/PrediabetesSupportHub"));
const PrediabetesSignsPage      = lazy(() => import("./pages/prediabetes/PrediabetesSignsPage"));
const ReversePrediabetesPage    = lazy(() => import("./pages/reversal-plan/ReversePrediabetesPage"));
const PrediabetesDietPage       = lazy(() => import("./pages/reversal-plan/PrediabetesDietPage"));
const PrediabetesExercisePage   = lazy(() => import("./pages/reversal-plan/PrediabetesExercisePage"));
const PrediabetesMonitoringPage = lazy(() => import("./pages/reversal-plan/PrediabetesMonitoringPage"));
const PrediabetesSleepStressPage = lazy(() => import("./pages/educational/PrediabetesSleepStressPage"));

// ── Educational Pillars ───────────────────────────────────────────────────────
const InsulinResistanceManagement = lazy(() => import("./pages/educational/InsulinResistanceManagement"));
const NaturalBloodSugar           = lazy(() => import("./pages/educational/NaturalBloodSugar"));
const GlucoseMonitoringTools      = lazy(() => import("./pages/educational/GlucoseMonitoringTools"));

// ── Other Pillars ─────────────────────────────────────────────────────────────
const WeightWellness           = lazy(() => import("./pages/weight-wellness/WeightWellness"));
const SeniorsGlucoseMonitoring = lazy(() => import("./pages/seniors/SeniorsGlucoseMonitoring"));

// ── Supplements / Shop ────────────────────────────────────────────────────────
const SupplementsPage           = lazy(() => import("./pages/SupplementsPage"));
const SupplementsHub            = lazy(() => import("./pages/products/SupplementsHub"));
const BloodSugarSupportCategory = lazy(() => import("./pages/products/BloodSugarSupportCategory"));
const InsulinSensitivityCategory = lazy(() => import("./pages/products/InsulinSensitivityCategory"));
const GeneralWellnessCategory   = lazy(() => import("./pages/supplements/GeneralWellnessCategory"));
const MetabolicWeightCategory   = lazy(() => import("./pages/supplements/MetabolicWeightCategory"));

// ── Tools ─────────────────────────────────────────────────────────────────────
const BloodSugarQuiz       = lazy(() => import("./pages/tools/BloodSugarQuiz"));
const SupplementComparison = lazy(() => import("./pages/tools/SupplementComparison"));

// ─────────────────────────────────────────────────────────────────────────────

// Minimal, dependency-free loading state shown while a lazy route chunk
// downloads. Kept intentionally plain — swap in a branded spinner/skeleton
// if you have one, but avoid anything heavy here since it blocks paint.
function RouteFallback() {
  return (
    <div className="flex justify-center items-center py-24" aria-busy="true" aria-live="polite">
      <span className="text-gray-400 text-sm">Loading…</span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <Header />

        <main className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
            <Routes>

              {/* ── Main ──────────────────────────────────────────────────── */}
              <Route path="/"          element={<HomePage />} />
              <Route path="/about"     element={<AboutPage />} />
              <Route path="/blog"      element={<BlogPage />} />
              <Route path="/resources" element={<ResourcesPage />} />

              {/* ── Blog: Prediabetes Support ──────────────────────────────── */}
              <Route path="/blog/prediabetes-vs-type2-diabetes" element={<PrediabetesVsType2Diabetes />} />
              <Route path="/blog/insulin-sensitivity-faq-2026" element={<InsulinSensitivityFAQ2026 />} />
              <Route path="/blog/reverse-prediabetes-2026"     element={<ReversePrediabetes2026 />} />

              {/* ── Blog: Diet & Blood Sugar Control ───────────────────────── */}
              <Route path="/blog/intermittent-fasting-blood-sugar" element={<IntermittentFastingBloodSugar />} />
              <Route path="/blog/best-foods-blood-sugar"  element={<BestFoodsBloodSugar />} />
              <Route path="/blog/low-carb-diet-for-diabetes-blood-sugar-control-evidence-base" element={<LowCarbDietForDiabetesBloodSugarControlEvidenceBasArticle />} />

              {/* ── Blog: Exercise & Movement ───────────────────────────────── */}
              <Route path="/blog/post-meal-walks"                  element={<PostMealWalks />} />

              {/* ── Blog: Glucose Monitoring ─────────────────────────────────── */}
              <Route path="/blog/cgm-vs-bgm"                   element={<CGMvsBloodGlucoseMeter />} />

              {/* ── Blog: Supplements & Natural Health ──────────────────────── */}
              <Route path="/blog/berberine-vs-metformin" element={<BerberineVsMetformin />} />
              <Route path="/blog/berberine-metformin" element={<Navigate to="/blog/berberine-vs-metformin" replace />} />
              <Route path="/blog/ceylon-cinnamon-diabetes" element={<ComingSoon title="Ceylon Cinnamon for Diabetes — Coming Soon" />} />

              {/* GlucoTrust article */}
              <Route
                path="/blog/glucotrust-diabetes-science-backed-benefits-how-to-use"
                element={<GlucoTrustDiabetesScienceBackedBenefitArticle />}
              />
              <Route
                path="/blog/glucotrust-diabetes-science-backed-benefits"
                element={<Navigate to="/blog/glucotrust-diabetes-science-backed-benefits-how-to-use" replace />}
              />

              {/* Gluco Care article */}
              <Route
                path="/blog/gluco-care-natural-diabetes-supplement-science-backed-benefi"
                element={<GlucoCareNaturalDiabetesSupplementScienceBackedBenArticle />}
              />
              <Route
                path="/blog/gluco-care-natural-diabetes-supplement-science-backed-benefits-how-to-use"
                element={<Navigate to="/blog/gluco-care-natural-diabetes-supplement-science-backed-benefi" replace />}
              />
              <Route
                path="/blog/gluco-care-review"
                element={<Navigate to="/blog/gluco-care-natural-diabetes-supplement-science-backed-benefi" replace />}
              />

              {/* ═══ Diabetes Blood Sugar Management ═══ */}
              <Route
                path="/blog/diabetes-blood-sugar-management-science-backed-benefits-how-"
                element={<DiabetesBloodSugarManagementScienceBackedBenefitsHArticle />}
              />
              {/* ═══════════════════════════════════ */}

              {/* ── Blog: Sleep & Stress Management ─────────────────────────── */}
              {/* <Route path="/blog/sleep-blood-sugar" element={<SleepBloodSugar />} /> */}

              {/* ── Blog: Featured Article ─────────────────────────────────── */}
              <Route path="/blog/5-warning-signs-of-prediabetes" element={<FiveWarningSignsPrediabetes />} />
              <Route path="/blog/prediabetes-warning-signs"
                     element={<Navigate to="/blog/5-warning-signs-of-prediabetes" replace />} />

              {/* ── Blog fallback ───────────────────────────────────────────── */}
              <Route path="/blog/:articleId" element={<BlogArticlePage />} />

              {/* ── Book ──────────────────────────────────────────────────── */}
              <Route path="/blood-sugar-reset-book" element={<BloodSugarResetBook />} />

              {/* ── Prediabetes Pillars ───────────────────────────────────── */}
              <Route path="/prediabetes-support"   element={<PrediabetesSupportHub />} />
              <Route path="/prediabetes-signs"     element={<PrediabetesSignsPage />} />
              <Route path="/reverse-prediabetes"   element={<ReversePrediabetesPage />} />
              <Route path="/prediabetes-diet"      element={<PrediabetesDietPage />} />
              <Route path="/prediabetes-exercise"  element={<PrediabetesExercisePage />} />
              <Route path="/prediabetes-sleep-stress" element={<PrediabetesSleepStressPage />} />
              <Route path="/prediabetes-monitoring"   element={<PrediabetesMonitoringPage />} />

              {/* ── Educational Pillars ───────────────────────────────────── */}
              <Route path="/insulin-resistance-management" element={<InsulinResistanceManagement />} />
              <Route path="/natural-blood-sugar"           element={<NaturalBloodSugar />} />
              <Route path="/glucose-monitoring-tools"      element={<GlucoseMonitoringTools />} />

              {/* ── Other Pillars ─────────────────────────────────────────── */}
              <Route path="/weight-wellness"           element={<WeightWellness />} />
              <Route path="/seniors-glucose-monitoring" element={<SeniorsGlucoseMonitoring />} />

              {/* ── Supplements / Shop ────────────────────────────────────── */}
              <Route path="/supplements"                    element={<SupplementsPage />} />
              <Route path="/supplements/hub"                element={<SupplementsHub />} />
              <Route path="/supplements/blood-sugar-support" element={<BloodSugarSupportCategory />} />
              <Route path="/supplements/insulin-sensitivity"  element={<InsulinSensitivityCategory />} />
              <Route path="/supplements/general-wellness"    element={<GeneralWellnessCategory />} />
              <Route path="/supplements/metabolic-weight"    element={<MetabolicWeightCategory />} />

              {/* ── Tools ─────────────────────────────────────────────────── */}
              <Route path="/tools/blood-sugar-quiz"        element={<BloodSugarQuiz />} />
              <Route path="/tools/supplement-comparison"   element={<SupplementComparison />} />

              {/* ── Utility / Legal ───────────────────────────────────────── */}
              <Route path="/contact"              element={<ContactPage />} />
              <Route path="/terms-of-service"     element={<TermsOfService />} />
              <Route path="/medical-disclaimer"   element={<MedicalDisclaimerPage />} />
              <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
              <Route path="/privacy"              element={<PrivacyPage />} />

              {/* ── 404 catch-all ─────────────────────────────────────────── */}
              <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;