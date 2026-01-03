import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-emerald-600 text-white p-2 rounded-lg group-hover:bg-emerald-700 transition">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                Thrive<span className="text-emerald-600">Health</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              Empowering families and individuals to take control of their metabolic health through science-backed education, natural strategies, and community support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-2 rounded-full shadow-sm text-gray-400 hover:text-emerald-600 hover:shadow transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm text-gray-400 hover:text-emerald-600 hover:shadow transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm text-gray-400 hover:text-emerald-600 hover:shadow transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Categories</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/prediabetes-support" className="hover:text-emerald-600 transition">Prediabetes Support</Link></li>
              <li><Link to="/insulin-resistance-management" className="hover:text-emerald-600 transition">Insulin Resistance</Link></li>
              <li><Link to="/natural-blood-sugar" className="hover:text-emerald-600 transition">Natural Strategies</Link></li>
              <li><Link to="/glucose-monitoring-tools" className="hover:text-emerald-600 transition">Monitoring Tools</Link></li>
              <li><Link to="/weight-wellness" className="hover:text-emerald-600 transition">Weight & Wellness</Link></li>
            </ul>
          </div>

          {/* New Shop Column - INSERTED HERE */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Shop Supplements</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/supplements" className="hover:text-emerald-600 transition">
                  All Supplements
                </Link>
              </li>
              <li>
                <Link to="/supplements/blood-sugar-support" className="hover:text-emerald-600 transition">
                  Blood Sugar Support
                </Link>
              </li>
              <li>
                <Link to="/supplements/metabolic-weight" className="hover:text-emerald-600 transition">
                  Metabolic & Weight
                </Link>
              </li>
              <li>
                <Link to="/supplements/insulin-sensitivity" className="hover:text-emerald-600 transition">
                  Insulin Sensitivity
                </Link>
              </li>
              <li>
                <Link to="/supplements/general-wellness" className="hover:text-emerald-600 transition">
                  General Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/about" className="hover:text-emerald-600 transition">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-600 transition">Health Blog</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-600 transition">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-600 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-600 transition">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* ... (Footer Bottom section) ... */}
      </div>
    </footer>
  );
}