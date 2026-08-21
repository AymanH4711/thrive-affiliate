import { ArrowLeft, ShieldCheck, Eye, Link2, BarChart2, Mail, RefreshCw, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from "@/components/seo/SEO";

const LAST_UPDATED = 'April 19, 2025';

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 'overview',
    icon: ShieldCheck,
    title: 'Overview',
    content: (
      <>
        <p>
          Thrive Health ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
          explains how we handle information when you visit <strong>thrivehealth.com</strong> (the "Site").
        </p>
        <p className="mt-3">
          By using this Site, you agree to the practices described in this policy. If you do not agree,
          please discontinue use of the Site.
        </p>
      </>
    ),
  },
  {
    id: 'information-collected',
    icon: Eye,
    title: 'Information We Collect',
    content: (
      <>
        <p>We collect only the minimum information necessary to operate the Site:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            { label: 'Contact Form Data', desc: 'When you submit our contact form, we receive your name, email address, subject, and message. This data is processed via EmailJS and delivered to our editorial inbox. We do not store form submissions on our servers.' },
            { label: 'Automatically Collected Data', desc: 'Like most websites, we may receive standard server log data when you visit — including your IP address, browser type, referring URL, and pages visited. This data is used solely for security and operational purposes.' },
          ].map(({ label, desc }) => (
            <li key={label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <span className="font-semibold text-gray-900 text-sm">{label}:</span>
              <span className="text-gray-600 text-sm ml-1">{desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-500 italic">
          We do <strong>not</strong> operate an email list, newsletter, or user account system. We do not collect
          payment information.
        </p>
      </>
    ),
  },
  {
    id: 'affiliate-ads',
    icon: Link2,
    title: 'Affiliate Links & Display Advertising',
    content: (
      <>
        <p>
          Thrive Health participates in affiliate marketing programs. This means some links on our Site
          are affiliate links — if you click one and make a purchase, we may earn a commission at
          <strong> no additional cost to you</strong>.
        </p>
        <p className="mt-3">
          We also display third-party advertisements on the Site. These ad networks may use cookies
          or similar tracking technologies to serve you relevant ads based on your browsing activity
          across other websites. Thrive Health does not control these cookies directly.
        </p>
        <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-sm text-emerald-800">
          <strong>Our editorial integrity:</strong> Affiliate relationships and advertising do not influence
          our content recommendations. We only reference products we believe are relevant and useful.
        </div>
      </>
    ),
  },
  {
    id: 'cookies',
    icon: BarChart2,
    title: 'Cookies & Tracking Technologies',
    content: (
      <>
        <p>
          Our Site may use cookies for the following purposes:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            'Essential site functionality (e.g., page load performance)',
            'Third-party advertising networks (e.g., Google AdSense) which use cookies to personalize ads',
            'Affiliate network tracking to attribute referral commissions correctly',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          You can control or disable cookies through your browser settings. Note that disabling cookies
          may affect the functionality of some parts of the Site.
        </p>
      </>
    ),
  },
  {
    id: 'data-use',
    icon: Mail,
    title: 'How We Use Your Information',
    content: (
      <>
        <p>Information we collect is used only to:</p>
        <ul className="mt-3 space-y-2">
          {[
            'Respond to messages submitted through our contact form',
            'Maintain the security and operation of the Site',
            'Comply with legal obligations if required',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          We do <strong>not</strong> sell, rent, or trade your personal information to any third party.
          We do not use your data for profiling, automated decision-making, or marketing campaigns.
        </p>
      </>
    ),
  },
  {
    id: 'third-parties',
    icon: Globe,
    title: 'Third-Party Services',
    content: (
      <>
        <p>We use the following third-party services that may process data on our behalf:</p>
        <ul className="mt-3 space-y-2">
          {[
            { name: 'EmailJS', purpose: 'Processes and delivers contact form submissions. Subject to EmailJS\'s own privacy policy.' },
            { name: 'Ad Networks (e.g., Google AdSense)', purpose: 'Serve display advertisements. May use cookies to personalize ads. Subject to Google\'s Privacy Policy.' },
            { name: 'Affiliate Networks', purpose: 'Track referral links to calculate commissions. Data handling governed by each network\'s policy.' },
          ].map(({ name, purpose }) => (
            <li key={name} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm">
              <span className="font-semibold text-gray-900">{name}:</span>{' '}
              <span className="text-gray-600">{purpose}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'your-rights',
    icon: RefreshCw,
    title: 'Your Rights',
    content: (
      <>
        <p>
          Depending on your location, you may have rights regarding your personal data under applicable
          laws (such as GDPR for EU residents or CCPA for California residents). These may include:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            'The right to access data we hold about you',
            'The right to request deletion of your data',
            'The right to opt out of certain data processing',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          To exercise any of these rights, please reach out via our{' '}
          <Link to="/contact" className="text-emerald-600 font-medium hover:underline">Contact page</Link>.
          We will respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Thrive Health"
        description="Learn how Thrive Health collects, uses, and protects your information. We are committed to transparency and your privacy."
        keywords="thrive health privacy policy, data policy, affiliate disclosure"
        url="/privacy"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Back Nav */}
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Hero */}
        <div className="py-12 md:py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <ShieldCheck className="w-3.5 h-3.5" /> Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-24 max-w-3xl">

          {/* Intro notice */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-10 text-sm text-gray-600 leading-relaxed">
            This policy applies to the Thrive Health website. We have written it in plain language so
            you can understand exactly what data we handle and why. If you have questions, please use our{' '}
            <Link to="/contact" className="text-emerald-600 font-medium hover:underline">Contact page</Link>.
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map(({ id, icon: Icon, title, content }) => (
              <div
                key={id}
                id={id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-50">
                  <div className="bg-emerald-50 p-2 rounded-lg">
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-base">{title}</h2>
                </div>
                <div className="px-6 py-5 text-gray-600 text-sm leading-relaxed">
                  {content}
                </div>
              </div>
            ))}
          </div>

          {/* Changes notice */}
          <div className="mt-10 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 text-sm text-amber-800">
            <strong>Policy Updates:</strong> We may update this Privacy Policy from time to time. The "Last updated"
            date at the top of this page will reflect any changes. Continued use of the Site after updates
            constitutes acceptance of the revised policy.
          </div>

          {/* Contact CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-3">Have a question about this policy?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-100 text-sm"
            >
              Contact Our Team →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
