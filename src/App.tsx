// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// ── Main Pages ────────────────────────────────────────────────────────────────
import HomePage               from "./pages/HomePage";
import AboutPage              from "./pages/AboutPage";
import BlogPage               from "./pages/BlogPage";
import BlogArticlePage        from "./pages/BlogArticlePage";
import ResourcesPage          from "./pages/ResourcesPage";

// ── Utility / Legal Pages ─────────────────────────────────────────────────────
import ContactPage            from "./pages/utility/ContactPage";
import TermsOfService         from "./pages/utility/TermsOfService";
import MedicalDisclaimerPage  from "./pages/MedicalDisclaimerPage";
import AffiliateDisclosurePage from "./pages/AffiliateDisclosurePage";
import PrivacyPage            from "./pages/utility/PrivacyPolicy";

// ── Blog: Prediabetes Support ──────────────────────────────────────────────
import PrediabetesVsType2Diabetes from "./pages/blog/Prediabetes-Support/PrediabetesVsType2Diabetes";
import InsulinSensitivityFAQ2026  from "./pages/blog/Prediabetes-Support/InsulinSensitivityFAQ2026";
import ReversePrediabetes2026     from "./pages/blog/Prediabetes-Support/ReversePrediabetes2026";

// ── Blog: Diet & Blood Sugar Control ─────────────────────────────────────────
import IntermittentFastingBloodSugar from "./pages/blog/Diet&BloodSugar-Control/IntermittentFastingBloodSugar";
import BestFoodsBloodSugar           from "./pages/blog/Diet&BloodSugar-Control/BestFoodsBloodSugar";
import LowCarbDietForDiabetesBloodSugarControlEvidenceBasArticle from "./pages/blog/Diet&BloodSugar-Control/low-carb-diet-for-diabetes-blood-sugar-c-article";

// ── Blog: Exercise & Movement ─────────────────────────────────────────────
import PostMealWalks from "./pages/blog/Exercise&Movement/PostMealWalks";

// ── Blog: Glucose Monitoring ──────────────────────────────────────────────
import CGMvsBloodGlucoseMeter from "./pages/blog/Glucose-Monitoring/CGMvsBloodGlucoseMeter";

// ── Blog: Supplements & Natural Health ────────────────────────────────────
import BerberineVsMetformin    from "./pages/blog/Supplements&Natural-Health/BerberineVsMetformin";
import BestDiabetesSupplements from "./pages/blog/Supplements&Natural-Health/BestDiabetesSupplements";
import GlucoBlissReview        from "./pages/blog/Supplements&Natural-Health/GlucoBlissReview";
import CeylonCinnamonDiabetes  from "./pages/blog/Supplements&Natural-Health/CeylonCinnamonDiabetes";
import MetabosanaDiabetesSupplementNaturalIngredientsScieArticle from "./pages/blog/Supplements&Natural-Health/metabosana-diabetes-supplement-natural-i-article";
import GlucoTrustDiabetesScienceBackedBenefitArticle from "./pages/blog/Supplements&Natural-Health/glucotrust-diabetes-science-backed-benef-article";
import GlucoCareNaturalDiabetesSupplementScienceBackedBenArticle from "./pages/blog/Supplements&Natural-Health/gluco-care-natural-diabetes-supplement-s-article";

// ═══ NEW IMPORT: CelluFend Review ═══
import CellufendDiabetesSupplementReviewScienceBackedBeneArticle from "./pages/blog/Supplements&Natural-Health/cellufend-for-type-2-diabetes-support-sc-article";
// ═══════════════════════════════════

// ═══ NEW IMPORT: Diabetes Blood Sugar Management ═══
import DiabetesBloodSugarManagementScienceBackedBenefitsHArticle from "./pages/blog/Supplements&Natural-Health/diabetes-blood-sugar-management-science--article";
// ═══════════════════════════════════
// ═══════════════════════════════════

// ── Blog: Sleep & Stress Management ───────────────────────────────────────
// (commented out; missing file)
// import SleepBloodSugar from "./pages/blog/Sleep&Stress-Management/SleepBloodSugar";

// ── Blog: Featured Article ────────────────────────────────────────────────
import FiveWarningSignsPrediabetes from "./pages/blog/Featured-Article/5WarningSignsPrediabetes";

// ── Book ──────────────────────────────────────────────────────────────────────
import BloodSugarResetBook from "./books/BloodSugarResetBook";

// ── Prediabetes Pillar Pages ──────────────────────────────────────────────────
import PrediabetesSupportHub    from "./pages/prediabetes/PrediabetesSupportHub";
import PrediabetesSignsPage     from "./pages/prediabetes/PrediabetesSignsPage";
import ReversePrediabetesPage   from "./pages/reversal-plan/ReversePrediabetesPage";
import PrediabetesDietPage      from "./pages/reversal-plan/PrediabetesDietPage";
import PrediabetesExercisePage  from "./pages/reversal-plan/PrediabetesExercisePage";
import PrediabetesMonitoringPage from "./pages/reversal-plan/PrediabetesMonitoringPage";
import PrediabetesSleepStressPage from "./pages/educational/PrediabetesSleepStressPage";

// ── Educational Pillars ───────────────────────────────────────────────────────
import InsulinResistanceManagement from "./pages/educational/InsulinResistanceManagement";
import NaturalBloodSugar           from "./pages/educational/NaturalBloodSugar";
import GlucoseMonitoringTools      from "./pages/educational/GlucoseMonitoringTools";

// ── Other Pillars ─────────────────────────────────────────────────────────────
import WeightWellness          from "./pages/weight-wellness/WeightWellness";
import SeniorsGlucoseMonitoring from "./pages/seniors/SeniorsGlucoseMonitoring";

// ── Supplements / Shop ────────────────────────────────────────────────────────
import SupplementsPage          from "./pages/SupplementsPage";
import SupplementsHub           from "./pages/products/SupplementsHub";
import BloodSugarSupportCategory from "./pages/products/BloodSugarSupportCategory";
import InsulinSensitivityCategory from "./pages/products/InsulinSensitivityCategory";
import GeneralWellnessCategory  from "./pages/supplements/GeneralWellnessCategory";
import MetabolicWeightCategory  from "./pages/supplements/MetabolicWeightCategory";

// ── Tools ─────────────────────────────────────────────────────────────────────
import BloodSugarQuiz      from "./pages/tools/BloodSugarQuiz";
import SupplementComparison from "./pages/tools/SupplementComparison";

// ─────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <Header />

        <main className="flex-grow">
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
            <Route path="/blog/best-diabetes-supplements"     element={<BestDiabetesSupplements />} />
            <Route path="/blog/glucobliss-review-diabetes"   element={<GlucoBlissReview />} />
            <Route path="/blog/ceylon-cinnamon-diabetes" element={<CeylonCinnamonDiabetes />} />
            <Route path="/blog/metabosana-review" element={<MetabosanaDiabetesSupplementNaturalIngredientsScieArticle />} />

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

            {/* ═══ CelluFend Review ═══ */}
            <Route
              path="/blog/cellufend-for-type-2-diabetes-support-science-backed-benefit"
              element={<CellufendDiabetesSupplementReviewScienceBackedBeneArticle />}
            />
            {/* Short alias */}
            <Route
              path="/blog/cellufend-review"
              element={<Navigate to="/blog/cellufend-for-type-2-diabetes-support-science-backed-benefit" replace />}
            />
            {/* ═══════════════════════════════════ */}

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
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;