// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Main Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ContactPage from "./pages/ContactPage";

// Prediabetes Pillar Pages
import PrediabetesSupportHub from "./pages/prediabetes/PrediabetesSupportHub";
import PrediabetesSignsPage from "./pages/prediabetes/PrediabetesSignsPage";
import ReversePrediabetesPage from "./pages/prediabetes/ReversePrediabetesPage";
import PrediabetesDietPage from "./pages/prediabetes/PrediabetesDietPage";
import PrediabetesExercisePage from "./pages/prediabetes/PrediabetesExercisePage";
import PrediabetesSleepStressPage from "./pages/prediabetes/PrediabetesSleepStressPage";

// Other Pillars
import InsulinResistanceManagement from "./pages/insulin-resistance/InsulinResistanceManagement";
import NaturalBloodSugar from "./pages/blood-sugar/NaturalBloodSugar";
import WeightWellness from "./pages/weight-wellness/WeightWellness";
import GlucoseMonitoringTools from "./pages/glucose-monitoring/GlucoseMonitoringTools";
import SeniorsGlucoseMonitoring from "./pages/seniors/SeniorsGlucoseMonitoring";

// Supplements (Shop)
import SupplementsPage from "./pages/SupplementsPage";
// ✅ UPDATED IMPORTS: Using the new Category components
import BloodSugarSupportCategory from "./pages/supplements/BloodSugarSupportCategory";
import MetabolicWeightCategory from "./pages/supplements/MetabolicWeightCategory";
import InsulinSensitivityCategory from "./pages/supplements/InsulinSensitivityCategory";
import GeneralWellnessCategory from "./pages/supplements/GeneralWellnessCategory";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:articleId" element={<BlogArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Prediabetes Pillars */}
            <Route path="/prediabetes-support" element={<PrediabetesSupportHub />} />
            <Route path="/prediabetes-signs" element={<PrediabetesSignsPage />} />
            <Route path="/reverse-prediabetes" element={<ReversePrediabetesPage />} />
            <Route path="/prediabetes-diet" element={<PrediabetesDietPage />} />
            <Route path="/prediabetes-exercise" element={<PrediabetesExercisePage />} />
            <Route path="/prediabetes-sleep-stress" element={<PrediabetesSleepStressPage />} />

            {/* Other Pillars */}
            <Route path="/insulin-resistance-management" element={<InsulinResistanceManagement />} />
            <Route path="/natural-blood-sugar" element={<NaturalBloodSugar />} />
            <Route path="/weight-wellness" element={<WeightWellness />} />
            <Route path="/glucose-monitoring-tools" element={<GlucoseMonitoringTools />} />
            <Route path="/seniors-glucose-monitoring" element={<SeniorsGlucoseMonitoring />} />

            {/* Supplements / Shop Routes */}
            <Route path="/supplements" element={<SupplementsPage />} />
            
            {/* ✅ UPDATED ROUTES: Using the new Category components */}
            <Route path="/supplements/blood-sugar-support" element={<BloodSugarSupportCategory />} />
            <Route path="/supplements/metabolic-weight" element={<MetabolicWeightCategory />} />
            <Route path="/supplements/insulin-sensitivity" element={<InsulinSensitivityCategory />} />
            <Route path="/supplements/general-wellness" element={<GeneralWellnessCategory />} />

            {/* Catch-all: Redirect unknown routes to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;