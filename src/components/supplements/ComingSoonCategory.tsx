import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Heart, Zap, ShieldCheck, Activity } from 'lucide-react';
import { SEO } from "@/components/seo/SEO";

type ColorClass = 'emerald' | 'blue' | 'purple' | 'teal';

interface ComingSoonCategoryProps {
  categoryId: string;
  name: string;
  shortName: string;
  description: string;
  colorClass: ColorClass;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

const categoryNav = [
  { id: 'blood-sugar-support', name: 'Blood Sugar Support', icon: Heart, href: '/supplements/blood-sugar-support' },
  { id: 'metabolic-weight', name: 'Metabolic & Weight', icon: Zap, href: '/supplements/metabolic-weight' },
  { id: 'insulin-sensitivity', name: 'Insulin Sensitivity', icon: Activity, href: '/supplements/insulin-sensitivity' },
  { id: 'general-wellness', name: 'General Wellness', icon: ShieldCheck, href: '/supplements/general-wellness' }
];

const colorStyles: Record<ColorClass, { bgGradient: string; text: string; badge: string; light: string; lightBorder: string; linkColor: string }> = {
  emerald: { bgGradient: 'from-emerald-900 to-emerald-800', text: 'text-emerald-100', badge: 'bg-emerald-500/20 border-emerald-400/30', light: 'bg-emerald-50', lightBorder: 'border-emerald-100', linkColor: 'text-emerald-600' },
  blue:    { bgGradient: 'from-blue-900 to-blue-800',       text: 'text-blue-100',    badge: 'bg-blue-500/20 border-blue-400/30',    light: 'bg-blue-50',    lightBorder: 'border-blue-100',    linkColor: 'text-blue-600' },
  purple:  { bgGradient: 'from-purple-900 to-purple-800',   text: 'text-purple-100',  badge: 'bg-purple-500/20 border-purple-400/30', light: 'bg-purple-50',  lightBorder: 'border-purple-100',  linkColor: 'text-purple-600' },
  teal:    { bgGradient: 'from-teal-900 to-teal-800',       text: 'text-teal-100',    badge: 'bg-teal-500/20 border-teal-400/30',    light: 'bg-teal-50',    lightBorder: 'border-teal-100',    linkColor: 'text-teal-600' }
};

// Deliberately no "Product" or "CollectionPage" schema here — this page
// lists no product, so neither type describes it honestly. schemaType
// "WebPage" via SEO.tsx keeps it out of Product-snippet checks entirely.
export default function ComingSoonCategory({ categoryId, name, shortName, description, colorClass, icon: Icon, url }: ComingSoonCategoryProps) {
  const colors = colorStyles[colorClass];

  return (
    <>
      <SEO
        title={`${name} | Coming Soon`}
        description={`We're still vetting ${shortName.toLowerCase()} products against our research and quality standards. Check back soon, or browse our other supplement categories.`}
        url={url}
        schemaType="WebPage"
      />
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <section className={`bg-gradient-to-br ${colors.bgGradient} text-white pt-24 pb-16`}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Link to="/supplements" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Shop Hub
            </Link>
            <div className={`inline-flex items-center gap-2 ${colors.badge} px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}>
              <Icon className="w-4 h-4" />
              Category: {shortName}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{name}</h1>
            <p className={`text-xl ${colors.text} max-w-2xl mx-auto leading-relaxed`}>{description}</p>
          </div>
        </section>

        <div className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-100 overflow-x-auto">
          <div className="container mx-auto px-4">
            <div className="flex space-x-2 py-3 min-w-max md:justify-center">
              {categoryNav.map((cat) => {
                const isActive = cat.id === categoryId;
                return (
                  <Link
                    key={cat.id}
                    to={cat.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition whitespace-nowrap ${
                      isActive
                        ? 'bg-gray-100 text-gray-700 ring-2 ring-gray-400 ring-offset-1'
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

        <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.light} border ${colors.lightBorder} mb-6`}>
            <Clock className={`w-8 h-8 ${colors.linkColor}`} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">We're still vetting this category</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We only recommend products that pass our research and quality standards, and we don't
            currently have a {shortName.toLowerCase()} product we're ready to stand behind. Rather
            than list something we haven't fully vetted, we're leaving this page open while we look.
            Check back soon.
          </p>
          <Link
            to="/supplements"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Browse Available Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </>
  );
}
