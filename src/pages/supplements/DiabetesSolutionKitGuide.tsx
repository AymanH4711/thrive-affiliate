import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, BookOpen, ShieldCheck, Activity, Clock, Users } from 'lucide-react';
import { SEO } from "@/components/seo/SEO";

export default function DiabetesSolutionKitGuide() {
  // Renamed on Digistore24 from "Fix Blood Sugar" to "Diabetes Solution Kit" —
  // same product/publisher, new listing name and link.
  const affiliateLink = "https://fixbloodsugar.com/ptn/digi/1?aff=Ayman_Hathoot";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Diabetes Solution Kit",
    "description": "A 100+ page digital guide covering a 3-phase approach to blood sugar management, medically fronted by Scott Saunders, MD."
  };

  // Emerald palette, matching Blood Sugar Support's category color
  // (this product moved out of General Wellness's teal scheme).
  const colors = {
    bgGradient: 'from-emerald-900 to-emerald-800',
    text: 'text-emerald-100',
    light: 'bg-emerald-50',
    lightBorder: 'border-emerald-100',
    badge: 'bg-emerald-500/20 border-emerald-400/30',
    icon: 'text-emerald-600',
    iconBg: 'bg-emerald-100 text-emerald-600',
    checkIcon: 'text-emerald-500',
    button: 'hover:bg-emerald-600',
    linkColor: 'text-emerald-600'
  };

  const included = [
    { title: '3-Phase Plan', description: 'A structured framework explained in plain language, not a generic diet handout.' },
    { title: 'Low Blood Sugar Cookbook', description: 'Recipes built around the same principles as the main guide.' },
    { title: 'Carb-Counting Cheatsheet', description: 'A quick-reference tool for reading meals and labels day to day.' },
    { title: 'Type 2 Grocery List', description: 'A shopping reference for stocking a kitchen around the plan.' },
  ];

  const faqs = [
    {
      q: 'Does this guide replace my diabetes medication?',
      a: 'No. This is an educational guide, not a treatment. Continue any medications your doctor has prescribed, and talk to them before changing your routine based on anything in the guide.'
    },
    {
      q: 'Is this guide written by a doctor?',
      a: 'It\u2019s medically fronted by Scott Saunders, MD, and published by Barton Publishing. As with any published health material, use it alongside — not instead of — care from your own healthcare provider.'
    },
    {
      q: 'What if the guide isn\u2019t a good fit for me?',
      a: 'The publisher offers a 365-day money-back guarantee, so you have a full year to decide whether it\u2019s useful for your situation.'
    },
  ];

  return (
    <>
      <SEO
        title="Diabetes Solution Kit | 3-Phase Digital Program by Barton Publishing"
        description="A 100+ page digital guide covering a 3-phase approach to blood sugar management, medically fronted by Scott Saunders, MD. Includes cookbook, carb-counting cheatsheet, and grocery list."
        keywords="diabetes solution kit, barton publishing blood sugar, 3 phase blood sugar plan, diabetes ebook guide"
        image="/images/diabetes-solution-kit-og.png"
        url="/guides/diabetes-solution-kit"
        schema={schema}
      />
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">

        {/* HERO */}
        <section className={`bg-gradient-to-br ${colors.bgGradient} text-white pt-24 pb-16`}>
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Link to="/supplements/blood-sugar-support" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Blood Sugar Support
            </Link>

            <div className={`inline-flex items-center gap-2 ${colors.badge} px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}>
              <BookOpen className="w-4 h-4" />
              100+ Page Digital Guide
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Diabetes Solution Kit
            </h1>
            <p className={`text-xl ${colors.text} leading-relaxed mb-10`}>
              A structured, 3-phase approach to blood sugar management from Barton Publishing, medically fronted by Scott Saunders, MD.
            </p>

            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
            >
              See What's Inside
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* MEDICAL DISCLAIMER */}
        <section className="py-4 bg-amber-50 border-b-2 border-amber-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-amber-900 mb-1">⚠️ Medical Disclaimer</h3>
                  <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                    The information on this page is for <strong>educational purposes only</strong> and does not constitute medical advice. These statements have not been evaluated by the U.S. Food and Drug Administration (FDA). This is a review of publicly marketed material, not a verification or endorsement of its specific medical claims, and is not a substitute for prescribed medications, individualized medical care, or a balanced diet and lifestyle. <strong>Always consult a qualified healthcare provider before following any protocol described in this guide</strong>, especially if you have diabetes, prediabetes, or any other health condition, or take medications such as metformin, insulin, or other glucose-lowering drugs. Individual results vary and are not guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What's Included</h2>
            <p className="text-gray-600 mb-10">Four components, each built around the same 3-phase framework.</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className={`inline-flex p-2 ${colors.iconBg} rounded-lg mb-4`}>
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CREATOR + GUARANTEE */}
        <div className="bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8">
              <div className={`${colors.light} ${colors.lightBorder} border rounded-2xl p-6`}>
                <div className={`inline-flex p-2 ${colors.iconBg} rounded-lg mb-4`}>
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Created By</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Barton Publishing, medically fronted by Scott Saunders, MD.
                </p>
              </div>

              <div className={`${colors.light} ${colors.lightBorder} border rounded-2xl p-6`}>
                <div className={`inline-flex p-2 ${colors.iconBg} rounded-lg mb-4`}>
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">365-Day Guarantee</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A full year to decide whether the guide is useful for you, directly from the publisher.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHO IT'S FOR */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who This Guide Is For</h2>
            <ul className="space-y-3">
              {[
                'You want a structured framework rather than scattered advice from different sources',
                'You\u2019re managing prediabetes or type 2 diabetes alongside your existing care',
                'You prefer a self-paced digital resource you can return to over time',
                'You\u2019re looking for practical tools (recipes, a cheatsheet, a grocery list) alongside the explanation',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className={`w-5 h-5 ${colors.checkIcon} shrink-0 mt-0.5`} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Questions</h2>
              <div className="space-y-6">
                {faqs.map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6 last:border-0">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                      <Activity className={`w-4 h-4 ${colors.icon} shrink-0 mt-1`} />
                      {item.q}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed pl-6">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className={`bg-gradient-to-br ${colors.bgGradient} text-white`}>
          <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to see the full 3-phase plan?</h2>
            <p className={`${colors.text} mb-8`}>
              Backed by a 365-day money-back guarantee from the publisher.
            </p>
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
            >
              See What's Inside
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* AFFILIATE DISCLOSURE */}
        <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-blue-900 mb-1">💰 Affiliate Disclosure</h3>
                  <p className="text-xs text-blue-800 leading-relaxed font-semibold">
                    <strong>Transparency notice:</strong> This page contains an affiliate link to the guide described above. ThriveHealth360 may earn a commission if you purchase through this link, at <strong>no additional cost to you</strong>. Affiliate relationships do not influence our description or the information presented on this page. This disclosure is provided in accordance with the FTC&apos;s guidelines on endorsements and testimonials.
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
