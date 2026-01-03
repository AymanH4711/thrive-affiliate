import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Pill, Heart, Zap, ShieldCheck, Activity } from 'lucide-react';
import { SupplementsMedicalDisclaimerCompactSales, SupplementsAffiliateDisclaimerProductCompact } from '@/components/disclaimers/SupplementDisclaimers';
import { SEO } from '@/components/SEO';

export default function InsulinSensitivityCategory() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Insulin Sensitivity Supplements",
    "description": "Supplements to improve insulin sensitivity and metabolic health"
  };

  const categoryNav = [
    { id: 'blood-sugar-support', name: 'Blood Sugar Support', icon: Heart, color: 'emerald', href: '/supplements/blood-sugar-support' },
    { id: 'metabolic-weight', name: 'Metabolic & Weight', icon: Zap, color: 'blue', href: '/supplements/metabolic-weight' },
    { id: 'insulin-sensitivity', name: 'Insulin Sensitivity', icon: Activity, color: 'purple', href: '/supplements/insulin-sensitivity' },
    { id: 'general-wellness', name: 'General Wellness', icon: ShieldCheck, color: 'teal', href: '/supplements/general-wellness' }
  ];

  const categoryData = {
    id: 'insulin-sensitivity',
    name: 'Insulin Sensitivity Supplements',
    shortName: 'Insulin Sensitivity',
    description: 'Specialized nutrients designed to improve cellular insulin response and metabolic efficiency.',
    colorClass: 'purple',
    icon: Activity,
    pillarLink: '/insulin-resistance-management',
    products: [
      {
        id: "ala",
        name: "Alpha-Lipoic Acid (ALA)",
        tagline: "Universal Antioxidant & Metabolic Support",
        description: "A powerful antioxidant that improves mitochondrial function and supports glucose metabolism in cells.",
        benefits: ["Improves insulin sensitivity by 10-20%", "Powerful antioxidant protection", "Supports nerve and metabolic health"],
        recommendedBrand: "Doctor's Best ALA",
        affiliateLink: "https://amzn.to/placeholder_ala",
        rating: 4.7,
        icon: Pill
      }
    ]
  };

  const colorStyles = {
    purple: {
      bg: 'bg-purple-900',
      bgGradient: 'from-purple-900 to-purple-800',
      text: 'text-purple-100',
      light: 'bg-purple-50',
      lightBorder: 'border-purple-100',
      badge: 'bg-purple-500/20 border-purple-400/30',
      icon: 'text-purple-600',
      iconBg: 'bg-purple-100 text-purple-600',
      headerGrad: 'from-purple-50 to-white',
      tab: 'bg-purple-100 text-purple-700 ring-2 ring-purple-500',
      hoverBg: 'hover:bg-purple-50',
      checkIcon: 'text-purple-500',
      button: 'hover:bg-purple-600',
      linkColor: 'text-purple-600'
    }
  };

  const colors = colorStyles[categoryData.colorClass as keyof typeof colorStyles];

  return (
    <>
      <SEO
        title="Insulin Sensitivity Supplements | Alpha-Lipoic Acid"
        description="Improve insulin sensitivity with Alpha-Lipoic Acid (ALA). Research-backed supplement for blood sugar control, neuropathy, and metabolic health. Reviews & guide."
        keywords="insulin sensitivity supplement, alpha lipoic acid, ALA supplement, insulin resistance treatment"
        image="/images/insulin-sensitivity-og.png"
        url="/supplements/insulin-sensitivity"
        schema={schema}
      />

      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
        {/* HERO SECTION */}
        <section className={`bg-gradient-to-br ${colors.bgGradient} text-white pt-24 pb-16`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Link to="/supplements" className={`inline-flex items-center text-purple-200 hover:text-white mb-6 transition`}>
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Shop Hub
            </Link>
            
            <div className={`inline-flex items-center gap-2 ${colors.badge} px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}>
              <Activity className="w-4 h-4" />
              Category: {categoryData.shortName}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {categoryData.name}
            </h1>
            <p className={`text-xl ${colors.text} max-w-2xl mx-auto leading-relaxed`}>
              {categoryData.description}
            </p>
          </div>
        </section>

        {/* MEDICAL DISCLAIMER */}
        <SupplementsMedicalDisclaimerCompactSales />

        {/* CATEGORY NAVIGATION */}
        <div className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-100 overflow-x-auto">
          <div className="container mx-auto px-4">
            <div className="flex space-x-2 py-3 min-w-max md:justify-center">
              {categoryNav.map((cat) => {
                const isActive = cat.id === categoryData.id;
                return (
                  <Link 
                    key={cat.id}
                    to={cat.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition whitespace-nowrap ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700 ring-2 ring-purple-500 ring-offset-1'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {categoryData.products.map((product) => (
              <div 
                key={product.id} 
                id={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className={`bg-gradient-to-r ${colors.headerGrad} p-6 border-b border-gray-100`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 ${colors.iconBg} rounded-lg shadow-sm border ${colors.lightBorder}`}>
                      <product.icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-xs font-bold text-yellow-700 border border-yellow-100">
                      ★ {product.rating}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className={`text-sm font-medium ${colors.linkColor}`}>{product.tagline}</p>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-1">
                      <Activity className="w-3 h-3" /> Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 ${colors.checkIcon} shrink-0 mt-0.5`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Recommended Brand:</div>
                    <div className="font-semibold text-gray-900 mb-4 flex items-center gap-1">
                      <ShieldCheck className={`w-4 h-4 ${colors.icon}`} />
                      {product.recommendedBrand}
                    </div>
                    <a 
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-gray-200 ${colors.button}`}
                    >
                      Check Price
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATIONAL LINK */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Want to learn more about {categoryData.shortName}?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to={categoryData.pillarLink}
                className={`${colors.light} p-6 rounded-xl ${colors.lightBorder} border hover:shadow-lg transition group text-left flex-1`}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">Read the Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Deep dive into the science behind {categoryData.shortName.toLowerCase()}.</p>
                <span className={`inline-flex items-center gap-1 ${colors.linkColor} font-medium group-hover:gap-2 transition-all`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link 
                to="/supplements"
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition group flex-1 text-left"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">All Categories</h3>
                <p className="text-sm text-gray-600 mb-4">Browse other supplement categories</p>
                <span className="inline-flex items-center gap-1 text-gray-600 font-medium group-hover:gap-2 transition-all">
                  Back to Hub <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* AFFILIATE DISCLAIMER - UPDATED */}
        <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-blue-900 mb-1">💰 Affiliate Disclosure</h3>
                  <p className="text-xs text-blue-800 leading-relaxed font-semibold">
                    Thrive Health may earn commissions from affiliate partnerships and supplement links. This does not affect product pricing. We only recommend products we believe in based on research and quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}