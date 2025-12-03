// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Removed isCategoriesOpen state since we are removing that menu

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <Heart className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Thrive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition">
              Home
            </Link>

            {/* Blood Sugar Support Dropdown - ALL PILLARS NOW HERE */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition">
                <Heart className="w-4 h-4" />
                <span>Blood Sugar Support</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/prediabetes-support" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Prediabetes Support
                  </Link>
                  <Link to="/insulin-resistance-management" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Insulin Resistance Management
                  </Link>
                  <Link to="/natural-blood-sugar" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Natural Blood Sugar Control
                  </Link>
                  <Link to="/weight-wellness" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Weight & Wellness
                  </Link>
                  <Link to="/seniors-glucose-monitoring" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Seniors Glucose Monitoring
                  </Link>
                  {/* ADDED: Missing Glucose Monitoring Pillar */}
                  <Link to="/glucose-monitoring-tools" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Glucose Monitoring Tools
                  </Link>
                </div>
              </div>
            </div>

            {/* Shop Supplements Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition">
                <span>Shop Supplements</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/supplements/berberine" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Berberine
                  </Link>
                  <Link to="/supplements/cinnamon" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Cinnamon Extract
                  </Link>
                  <Link to="/supplements/chromium" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                    Chromium
                  </Link>
                  <Link to="/supplements" className="block px-4 py-2 text-emerald-600 font-semibold hover:bg-emerald-50 transition">
                    View All Categories →
                  </Link>
                </div>
              </div>
            </div>

            {/* REMOVED: Redundant "Categories" Menu */}

            <Link to="/blog" className="text-gray-700 hover:text-emerald-600 transition">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-emerald-600 transition">
              Home
            </Link>
            
            {/* Mobile Blood Sugar Support */}
            <div>
              <p className="py-2 text-gray-500 text-sm font-semibold">Blood Sugar Support</p>
              <div className="pl-4 space-y-2">
                <Link to="/prediabetes-support" className="block py-2 text-gray-600 hover:text-emerald-600 transition">
                  Prediabetes Support
                </Link>
                <Link to="/insulin-resistance-management" className="block py-2 text-gray-600 hover:text-emerald-600 transition">
                  Insulin Resistance
                </Link>
                <Link to="/natural-blood-sugar" className="block py-2 text-gray-600 hover:text-emerald-600 transition">
                  Natural Blood Sugar
                </Link>
                <Link to="/weight-wellness" className="block py-2 text-gray-600 hover:text-emerald-600 transition">
                  Weight & Wellness
                </Link>
                <Link to="/seniors-glucose-monitoring" className="block py-2 text-gray-600 hover:text-emerald-600 transition">
                  Seniors Monitoring
                </Link>
                <Link to="/glucose-monitoring-tools" className="block py-2 text-gray-600 hover:text-emerald-600 transition">
                  Glucose Monitoring
                </Link>
              </div>
            </div>

            <Link to="/supplements" className="block py-2 text-gray-700 hover:text-emerald-600 transition">
              Shop Supplements
            </Link>

            <Link to="/blog" className="block py-2 text-gray-700 hover:text-emerald-600 transition">
              Blog
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-emerald-600 transition">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-emerald-600 transition">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}