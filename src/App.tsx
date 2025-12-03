// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Main Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";

// Prediabetes Pillar Pages
import PrediabetesSupportHub from "./pages/prediabetes/PrediabetesSupportHub";
import PrediabetesSignsPage from "./pages/prediabetes/PrediabetesSignsPage";
import ReversePrediabetesPage from "./pages/prediabetes/ReversePrediabetesPage";

// Insulin Resistance Pillar
import InsulinResistanceManagement from "./pages/insulin-resistance/InsulinResistanceManagement";

// Blood Sugar Pillar
import NaturalBloodSugar from "./pages/blood-sugar/NaturalBloodSugar";

// Weight & Wellness Pillar
import WeightWellness from "./pages/weight-wellness/WeightWellness";

// Glucose Monitoring Pillar
import GlucoseMonitoringTools from "./pages/glucose-monitoring/GlucoseMonitoringTools";

// Seniors Pillar
import SeniorsGlucoseMonitoring from "./pages/seniors/SeniorsGlucoseMonitoring";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />

          {/* Prediabetes Pillar Pages */}
          <Route path="/prediabetes-support" element={<PrediabetesSupportHub />} />
          <Route path="/prediabetes-signs" element={<PrediabetesSignsPage />} />
          <Route path="/reverse-prediabetes" element={<ReversePrediabetesPage />} />

          {/* Insulin Resistance Pillar */}
          <Route path="/insulin-resistance-management" element={<InsulinResistanceManagement />} />

          {/* Blood Sugar Pillar */}
          <Route path="/natural-blood-sugar" element={<NaturalBloodSugar />} />

          {/* Weight & Wellness Pillar */}
          <Route path="/weight-wellness" element={<WeightWellness />} />

          {/* Glucose Monitoring Pillar */}
          <Route path="/glucose-monitoring-tools" element={<GlucoseMonitoringTools />} />

          {/* Seniors Pillar */}
          <Route path="/seniors-glucose-monitoring" element={<SeniorsGlucoseMonitoring />} />

          {/* Catch-all: Redirect unknown routes to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;