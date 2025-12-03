import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center mb-4 hover:opacity-80 transition">
              <span className="text-2xl font-bold text-emerald-400">Thrive</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted source for blood sugar support and metabolic wellness guidance.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/prediabetes-support" className="hover:text-emerald-400 transition">Blood Sugar Support</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Metabolic Health</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Herbal Remedies</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Monitoring Tools</Link></li>
            </ul>
          </div>

          {/* Popular Topics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Popular Topics</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition">Prediabetes Management</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Insulin Resistance</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Natural Blood Sugar</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Weight & Wellness</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Contact</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thrive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}