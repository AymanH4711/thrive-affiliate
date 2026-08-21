// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';          // FIX 1: real router Link (was mock — caused full page reloads)
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '../Logo';                        // FIX 2: real Logo component (was mock with wrong image path)

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* ── Brand Column ────────────────────────────────────────────── */}
          <div className="lg:col-span-2 text-left">
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-12" />
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed text-sm font-sans">
              Empowering individuals to master their metabolic health through
              science-backed protocols, natural strategies, and clinical research.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-emerald-600 transition border border-gray-100">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter / X" className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-emerald-600 transition border border-gray-100">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-emerald-600 transition border border-gray-100">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Prediabetes Guides ───────────────────────────────────────── */}
          {/* FIX 3: replaced broken /guides/* routes with real pillar routes */}
          <div className="text-left">
            <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider font-display">
              Prediabetes Guides
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 font-sans">
              <li><Link to="/reverse-prediabetes"    className="hover:text-emerald-600 transition">Reverse Prediabetes</Link></li>
              <li><Link to="/prediabetes-diet"       className="hover:text-emerald-600 transition">Diet & Nutrition Plan</Link></li>
              <li><Link to="/prediabetes-exercise"   className="hover:text-emerald-600 transition">Exercise Guide</Link></li>
              <li><Link to="/prediabetes-sleep-stress" className="hover:text-emerald-600 transition">Sleep & Stress</Link></li>
            </ul>
          </div>

          {/* ── Research ─────────────────────────────────────────────────── */}
          <div className="text-left">
            <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider font-display">
              Research
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 font-sans">
              <li><Link to="/blog/berberine-vs-metformin"            className="hover:text-emerald-600 transition">Berberine Guide</Link></li>
              <li><Link to="/supplements/metabolic-weight"           className="hover:text-emerald-600 transition">Weight Optimization</Link></li>
              <li><Link to="/supplements/insulin-sensitivity"        className="hover:text-emerald-600 transition">Insulin Sensitivity</Link></li>
              <li><Link to="/supplements/general-wellness"           className="hover:text-emerald-600 transition">Longevity Science</Link></li>
            </ul>
          </div>

          {/* ── Company ──────────────────────────────────────────────────── */}
          {/* FIX 4: added Terms of Service + Affiliate Disclosure (FTC requirement) */}
          {/* FIX 5: removed duplicate Privacy Policy (was in both this column and bottom bar) */}
          <div className="text-left">
            <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider font-display">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 font-sans">
              <li><Link to="/about"                className="hover:text-emerald-600 transition">About Us</Link></li>
              <li><Link to="/contact"              className="hover:text-emerald-600 transition">Contact Support</Link></li>
              <li><Link to="/resources"            className="hover:text-emerald-600 transition">Resources</Link></li>
              <li><Link to="/medical-disclaimer"   className="hover:text-emerald-600 transition">Medical Disclaimer</Link></li>
              <li><Link to="/affiliate-disclosure" className="hover:text-emerald-600 transition">Affiliate Disclosure</Link></li>
            </ul>
          </div>

        </div>

        {/* ── Footer Bottom ─────────────────────────────────────────────── */}
        {/* FIX 6: copyright → ThriveHealth360 (was "Thrive Health") */}
        {/* FIX 7: bottom bar now carries all four legal links, no duplicates */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-sans">
          <p>&copy; {currentYear} ThriveHealth360. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/privacy"              className="hover:text-emerald-600 transition">Privacy Policy</Link>
            <Link to="/terms-of-service"     className="hover:text-emerald-600 transition">Terms of Service</Link>
            <Link to="/affiliate-disclosure" className="hover:text-emerald-600 transition">Affiliate Disclosure</Link>
            <Link to="/medical-disclaimer"   className="hover:text-emerald-600 transition">Medical Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}