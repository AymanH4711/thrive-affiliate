import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, BookOpen, ClipboardList, Heart, Zap, ShieldCheck, Activity } from 'lucide-react';
import { SEO } from "@/components/seo/SEO";

export default function GeneralWellnessCategory() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "General Wellness Resources for Blood Sugar",
    "description": "Educational resources supporting overall metabolic wellness"
  };

  const categoryNav = [
    { id: 'blood-sugar-support', name: 'Blood Sugar Support', icon: Heart, color: 'emerald', href: '/supplements/blood-sugar-support' },
    { id: 'metabolic-weight', name: 'Metabolic & Weight', icon: Zap, color: 'blue', href: '/supplements/metabolic-weight' },
    { id: 'insulin-sensitivity', name: 'Insulin Sensitivity', icon: Activity, color: 'purple', href: '/supplements/insulin-sensitivity' },
    { id: 'general-wellness', name: 'General Wellness', icon: ShieldCheck, color: 'teal', href: '/supplements/general-wellness' }
  ];

  // NOTE: "products" here is a broader category than the other three pages —
  // it can hold supplements, guides, or programs. This first entry is a
  // digital guide, not a supplement, so it has no dose/ingredient data —
  // that's expected, not a placeholder that needs filling in.
  const categoryData = {
    id: 'general-wellness',
    name: 'General Wellness Resources',
    shortName: 'General Wellness',
    description: 'Educational guides and resources for readers who want a structured, self-directed starting point for managing blood sugar alongside their care team.',
    colorClass: 'teal',
    icon: ShieldCheck,
    pillarLink: '/natural-blood-sugar',
    products: [
      {
        id: "fix-blood-sugar",
        name: "Fix Blood Sugar",
        type: "guide" as const,
        tagline: "100+ Page Digital Guide by Barton Publishing",
        description: "A digital guide bundle covering a 3-phase approach to blood sugar management, medically fronted by Scott Saunders, MD. Includes the Low Blood Sugar Cookbook, a Carb-Counting Cheatsheet, and a Type 2 Grocery List.",
        benefits: [
          "3-phase plan framework, explained in plain language",
          "Includes a cookbook, carb-counting cheatsheet, and grocery list",
          "365-day money-back guarantee from the publisher"
        ],
        creator: "Barton Publishing / Scott Saunders, MD",
        affiliateLink: "https://www.digistore24.com/redir/386253/Ayman_Hathoot/",
        icon: BookOpen
      },
      {
        id: "diabetes-self-tracking-pos",
        name: "Diabetes Self-Tracking Personal Operating System",
        type: "spreadsheet" as const,
        tagline: "Digital Spreadsheet for Personal Tracking & Awareness — $8",
        description: "A downloadable Excel/Google Sheets system for logging diabetes-related lifestyle data in one place, with automatic weekly and monthly summary dashboards. This is a self-tracking tool for personal awareness only — it does not provide medical advice, diagnosis, or treatment.",
        benefits: [
          "Daily tracking sheets plus automatic weekly/monthly summaries",
          "Works in Microsoft Excel or Google Sheets — no app or subscription",
          "60-day money-back guarantee, one-time $8 payment"
        ],
        creator: "Independent creator (Digistore24 marketplace)",
        affiliateLink: "https://www.checkout-ds24.com/redir/665557/Ayman_Hathoot/",
        icon: ClipboardList
      }
    ]
  };

  const colorStyles = {
    teal: {
      bgGradient: 'from-teal-900 to-teal-800',
      text: 'text-teal-100',
      light: 'bg-teal-50',
      lightBorder: 'border-teal-100',
      badge: 'bg-teal-500/20 border-teal-400/30',
      icon: 'text-teal-600',
      iconBg: 'bg-teal-100 text-teal-600',
      headerGrad: 'from-teal-50 to-white',
      checkIcon: 'text-teal-500',
      button: 'hover:bg-teal-600',
      linkColor: 'text-teal-600'
    }
  };

  const colors = colorStyles[categoryData.colorClass as keyof typeof colorStyles];

  return (
    <>
      <SEO
        title="General Wellness Resources | Blood Sugar Guides & Support"
        description="Educational guides and resources for readers looking for a structured, self-directed starting point for blood sugar management alongside professional care."
        keywords="blood sugar guide, diabetes ebook, general wellness resources, blood sugar management guide"
        image="/images/general-wellness-og.png"
        url="/supplements/general-wellness"
        schema={schema}
      />
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">

        {/* HERO SECTION */}
        <section className={`bg-gradient-to-br ${colors.bgGradient} text-white pt-24 pb-16`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Link to="/supplements" className="inline-flex items-center text-teal-200 hover:text-white mb-6 transition">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Shop Hub
            </Link>

            <div className={`inline-flex items-center gap-2 ${colors.badge} px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}>
              <ShieldCheck className="w-4 h-4" />
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
        <section className="py-4 bg-amber-50 border-b-2 border-amber-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-amber-900 mb-1">⚠️ Medical Disclaimer</h3>
                  <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                    The information on this page is for <strong>educational purposes only</strong> and does not constitute medical advice. These statements have not been evaluated by the U.S. Food and Drug Administration (FDA). This is a review of publicly marketed material, not a verification or endorsement of its specific medical claims, and is not a substitute for prescribed medications, individualized medical care, or a balanced diet and lifestyle. <strong>Always consult a qualified healthcare provider before following any protocol described in a guide or resource listed here</strong>, especially if you have diabetes, prediabetes, or any other health condition, or take medications such as metformin, insulin, or other glucose-lowering drugs. Individual results vary and are not guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                        ? 'bg-teal-100 text-teal-700 ring-2 ring-teal-500 ring-offset-1'
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
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
                    {/* No star rating shown — we don't have a genuine third-party
                        rating for either product, and fabricating one isn't worth
                        the small visual polish it would add. */}
                    <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-xs font-bold text-gray-600 border border-gray-200">
                      {product.type === 'spreadsheet' ? 'Digital Spreadsheet' : 'Digital Guide'}
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
                      <Activity className="w-3 h-3" /> What's Included
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
                    <div className="text-xs text-gray-500 mb-1">{product.type === 'spreadsheet' ? 'Sold via:' : 'Created By:'}</div>
                    <div className="font-semibold text-gray-900 mb-4 flex items-center gap-1">
                      <ShieldCheck className={`w-4 h-4 ${colors.icon}`} />
                      {product.creator}
                    </div>
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-gray-200 ${colors.button}`}
                    >
                      {product.type === 'spreadsheet' ? 'Get It Now' : "See What's Inside"}
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

        {/* AFFILIATE DISCLOSURE */}
        <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-blue-900 mb-1">💰 Affiliate Disclosure</h3>
                  <p className="text-xs text-blue-800 leading-relaxed font-semibold">
                    <strong>Transparency notice:</strong> This page contains affiliate links, including the resource listed above. ThriveHealth360 may earn a commission if you purchase through these links, at <strong>no additional cost to you</strong>. Affiliate relationships do not influence our descriptions or the information presented on this page. This disclosure is provided in accordance with the FTC&apos;s guidelines on endorsements and testimonials.
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