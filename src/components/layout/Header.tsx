import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Activity, 
  Heart, 
  Apple, 
  Scale, 
  Smartphone, 
  Users,
  Home,
  ShoppingBag
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Logo URL from public folder - NO IMPORT NEEDED
  const logoUrl = '/images/thrive-health-logo.png';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigation = [
    { 
      name: 'Blood Sugar Support', 
      isDropdown: true,
      items: [
        { name: 'Prediabetes Support', href: '/prediabetes-support', icon: Heart, desc: 'The complete reversal hub' },
        { name: 'Insulin Resistance', href: '/insulin-resistance-management', icon: Activity, desc: 'Root cause management' },
        { name: 'Natural Blood Sugar', href: '/natural-blood-sugar', icon: Apple, desc: 'Nutrition strategies' },
        { name: 'Glucose Monitoring', href: '/glucose-monitoring-tools', icon: Smartphone, desc: 'CGM & BGM guides' },
        { name: 'Weight & Wellness', href: '/weight-wellness', icon: Scale, desc: 'Metabolic weight loss' },
        { name: 'Seniors Health', href: '/seniors-glucose-monitoring', icon: Users, desc: 'Guides for age 65+' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* LOGO - IMAGE BASED */}
          <Link to="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity">
            <img 
              src={logoUrl} 
              alt="Thrive Health - Metabolic Health" 
              className="h-10 w-auto"
              title="Thrive Health"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`flex items-center gap-1 font-medium transition hover:text-emerald-600 ${
                isActive('/') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>

            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.isDropdown ? (
                  <div 
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="py-2"
                  >
                    <button 
                      className={`flex items-center gap-1 font-medium transition hover:text-emerald-600 ${
                        location.pathname.startsWith('/') ? 'text-emerald-600' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    {/* DROPDOWN MENU */}
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-4 transition-all duration-200 origin-top ${
                        activeDropdown === item.name 
                          ? 'opacity-100 scale-100 translate-y-0 visible' 
                          : 'opacity-0 scale-95 -translate-y-2 invisible'
                      }`}
                    >
                      <div className="space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition group/item"
                          >
                            <div className="mt-1 bg-emerald-100 text-emerald-600 p-1.5 rounded-md group-hover/item:bg-emerald-600 group-hover/item:text-white transition">
                              {subItem.icon && <subItem.icon className="w-4 h-4" />}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover/item:text-emerald-700">
                                {subItem.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {subItem.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className={`font-medium transition hover:text-emerald-600 ${
                      isActive(item.href!) ? 'text-emerald-600' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* SIMPLE LINK FOR SHOP SUPPLEMENTS */}
            <Link 
              to="/supplements"
              className="text-gray-700 hover:text-emerald-600 transition font-medium flex items-center gap-1"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop Supplements
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl h-screen overflow-y-auto pb-20">
            <div className="p-4 space-y-4">
              <Link
                to="/"
                className={`flex items-center gap-2 p-2 rounded-lg font-medium ${
                  isActive('/') ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                Home
              </Link>

              {navigation.map((item) => (
                <div key={item.name}>
                  {item.isDropdown ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-bold text-gray-900 px-2 py-1">
                        {item.name}
                      </div>
                      <div className="grid gap-2 pl-2 border-l-2 border-gray-100 ml-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                          >
                            {subItem.icon && <subItem.icon className="w-5 h-5" />}
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      className={`flex items-center gap-2 p-2 rounded-lg font-medium ${
                        isActive(item.href!) ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* SIMPLE LINK FOR SHOP SUPPLEMENTS - MOBILE */}
              <Link
                to="/supplements"
                className={`flex items-center gap-2 p-2 rounded-lg font-medium ${
                  isActive('/supplements') ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Supplements
              </Link>
              <hr className="border-gray-100 my-4" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}