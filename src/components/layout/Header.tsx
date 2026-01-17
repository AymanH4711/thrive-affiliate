import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Determine if Blood Sugar Support dropdown should be open
  const isBloodSugarActive = location.pathname.includes('/prediabetes') || 
                             location.pathname.includes('/insulin-resistance') ||
                             location.pathname.includes('/blood-sugar') ||
                             location.pathname.includes('/glucose-monitoring') ||
                             location.pathname.includes('/weight-wellness') ||
                             location.pathname.includes('/seniors');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600">
          <span className="text-2xl">🌿</span>
          ThriveHealth
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-emerald-600 transition">
            Home
          </Link>

          {/* Blood Sugar Support Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown('blood-sugar')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={`flex items-center gap-1 ${isBloodSugarActive ? 'text-emerald-600' : 'text-gray-700'} hover:text-emerald-600 transition`}>
              Blood Sugar Support
              <ChevronDown size={18} />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <Link to="/prediabetes-support" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                Prediabetes Support
              </Link>
              <Link to="/insulin-resistance-management" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                Insulin Resistance
              </Link>
              <Link to="/natural-blood-sugar" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                Natural Blood Sugar
              </Link>
              <Link to="/glucose-monitoring-tools" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                Glucose Monitoring
              </Link>
              <Link to="/weight-wellness" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                Weight & Wellness
              </Link>
              <Link to="/seniors-glucose-monitoring" onClick={handleNavClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                Seniors' Guide
              </Link>
            </div>
          </div>

          <Link to="/blog" className="text-gray-700 hover:text-emerald-600 transition">
            Blog
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition">
            Contact
          </Link>
          <Link to="/supplements" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
            🛍️ Shop Supplements
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-700 hover:text-emerald-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link to="/" onClick={handleNavClick} className="block text-gray-700 hover:text-emerald-600">
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button 
              onClick={() => setOpenDropdown(openDropdown === 'blood-sugar' ? null : 'blood-sugar')}
              className="w-full text-left text-gray-700 hover:text-emerald-600 flex items-center gap-1"
            >
              Blood Sugar Support
              <ChevronDown size={18} className={openDropdown === 'blood-sugar' ? 'rotate-180' : ''} />
            </button>
            {openDropdown === 'blood-sugar' && (
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/prediabetes-support" onClick={handleNavClick} className="block text-gray-600 hover:text-emerald-600">
                  Prediabetes Support
                </Link>
                <Link to="/insulin-resistance-management" onClick={handleNavClick} className="block text-gray-600 hover:text-emerald-600">
                  Insulin Resistance
                </Link>
                <Link to="/natural-blood-sugar" onClick={handleNavClick} className="block text-gray-600 hover:text-emerald-600">
                  Natural Blood Sugar
                </Link>
                <Link to="/glucose-monitoring-tools" onClick={handleNavClick} className="block text-gray-600 hover:text-emerald-600">
                  Glucose Monitoring
                </Link>
                <Link to="/weight-wellness" onClick={handleNavClick} className="block text-gray-600 hover:text-emerald-600">
                  Weight & Wellness
                </Link>
                <Link to="/seniors-glucose-monitoring" onClick={handleNavClick} className="block text-gray-600 hover:text-emerald-600">
                  Seniors' Guide
                </Link>
              </div>
            )}
          </div>

          <Link to="/blog" onClick={handleNavClick} className="block text-gray-700 hover:text-emerald-600">
            Blog
          </Link>
          <Link to="/about" onClick={handleNavClick} className="block text-gray-700 hover:text-emerald-600">
            About
          </Link>
          <Link to="/contact" onClick={handleNavClick} className="block text-gray-700 hover:text-emerald-600">
            Contact
          </Link>
          <Link to="/supplements" onClick={handleNavClick} className="block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 text-center">
            🛍️ Shop Supplements
          </Link>
        </div>
      )}
    </header>
  );
};