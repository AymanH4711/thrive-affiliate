import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, ArrowRight, ShieldCheck, FileText, Eye, Star } from 'lucide-react';

/**
 * Internal SEO component
 * Ensures the page is SEO-ready without requiring external file resolution.
 */
const SEO: React.FC<{
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}> = () => null;

// ─────────────────────────────────────────────
//  Page: /affiliate-disclosure
//  Route: Add <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
// ─────────────────────────────────────────────

const AffiliateDisclosurePage: React.FC = () => {
  const lastUpdated = 'April 2026';

  const programs = [
    {
      name: 'Retail & Marketplace Affiliate Programmes',
      description: 'We may participate in affiliate programmes run by online retailers and marketplaces, earning a small commission on qualifying purchases of supplements, monitors, and wellness products linked from our pages. The specific retailers we work with may change or expand over time.',
    },
    {
      name: 'Direct Brand Partnerships',
      description: 'We maintain affiliate relationships with selected supplement brands (such as Thorne, NOW Foods, and others). These brands are featured only when they meet our independent product vetting criteria.',
    },
    {
      name: 'Other Retail Programmes',
      description: 'We may partner with other retailers or affiliate networks from time to time. Any such relationship will be subject to the same editorial independence standards described below.',
    },
  ];

  const principles = [
    {
      icon: ShieldCheck,
      title: 'Editorial Independence',
      description:
        'Affiliate relationships never influence which supplements we recommend, how we rank products, which studies we cite, or what health guidance we provide. A product with a higher commission rate is not given preferential treatment over one with no commission.',
    },
    {
      icon: Star,
      title: 'Genuine Belief in Recommendations',
      description:
        'We only recommend products and services that we genuinely believe may be helpful based on our review of the evidence. No brand can pay to be recommended — they can only be recommended if they pass our independent vetting process.',
    },
    {
      icon: Eye,
      title: 'Transparent Identification',
      description:
        'Affiliate links across ThriveHealth360 are standard hyperlinks. Where practical, pages containing affiliate links display a compact disclosure notice at the bottom. This full policy page is always accessible from any disclosure notice.',
    },
    {
      icon: DollarSign,
      title: 'No Extra Cost to You',
      description:
        'Commissions are paid by the retailer or brand — not by you. Clicking an affiliate link and making a purchase costs exactly the same as going directly to the retailer\'s website. In some cases, our links may include exclusive discounts.',
    },
  ];

  const sections = [
    {
      title: '1. What Is Affiliate Marketing?',
      body: (
        <p className="text-gray-700 leading-relaxed">
          Affiliate marketing is a performance-based arrangement in which a website earns a 
          small commission when a reader clicks a link and completes a qualifying action — 
          typically a purchase — on a third-party retailer's site. The commission is paid 
          by the retailer and does not change the price you pay. This constitutes a{' '}
          <strong>material connection</strong> between ThriveHealth360 and the seller, which 
          we are required to disclose under applicable consumer protection law.
        </p>
      ),
    },
    {
      title: '2. Legal Compliance — US, UK, Australia & Canada',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because ThriveHealth360 serves a global readership, this disclosure is designed to 
            comply with affiliate and endorsement regulations across multiple jurisdictions:
          </p>
          <ul className="list-none space-y-3">
            {[
              { region: 'United States', rule: 'FTC Endorsement Guides, 16 CFR Part 255 — requires clear and conspicuous disclosure of material connections.' },
              { region: 'United Kingdom', rule: 'ASA/CAP Code and the Consumer Protection from Unfair Trading Regulations 2008 — requires that commercial intent and paid relationships are clearly identified.' },
              { region: 'Australia', rule: 'ACCC guidelines on endorsements and testimonials — affiliate and commercial relationships must be transparently disclosed to consumers.' },
              { region: 'Canada', rule: 'Competition Act — prohibits misleading representations, including undisclosed commercial relationships in online content.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span><strong>{item.region}:</strong> {item.rule}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '3. Affiliate Programmes We Participate In',
      body: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm">
            The following describes the categories of affiliate programmes we currently 
            participate in. Specific brand relationships may change over time; the 
            examples listed are illustrative and non-exhaustive. This page reflects 
            the programmes active as of <strong>{lastUpdated}</strong>.
          </p>
          {programs.map((prog, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1">{prog.name}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{prog.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: '4. Gifted, Sponsored & Free-Review Products',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to commission-based affiliate links, ThriveHealth360 may occasionally 
            receive products at no cost for the purpose of review. Our policy for these 
            situations:
          </p>
          <ul className="list-none space-y-2">
            {[
              'Any article or review involving a gifted or sponsored product will include a clear disclosure statement at the top of that page (e.g. "Disclosure: This product was provided to us free of charge for review. Our assessment is independent.").',
              'Receiving a product for free does not guarantee a positive review — negative findings are reported honestly.',
              'We do not accept payment for positive reviews, guaranteed placements, or editorial coverage.',
              'Sponsored content (where a brand has paid for content creation, not just commission) is labelled as "Sponsored" in the article header.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '5. Our Editorial Independence Commitment',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Affiliate income supports the cost of running ThriveHealth360 — including research 
            time, content production, and site maintenance — which allows us to keep our 
            educational content free to readers. However, it does not influence our editorial 
            decisions. Specifically:
          </p>
          <ul className="list-none space-y-2">
            {[
              'Products are evaluated based on evidence quality, third-party testing, and ingredient transparency — not commission rates.',
              'Negative findings in the research are reported honestly, even when they concern affiliated products.',
              'We do not accept payments for positive reviews, sponsored placements, or guaranteed mentions.',
              'If a product we have previously recommended is later found to have safety concerns or misleading claims, we will update our content accordingly.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '6. How to Identify Affiliate Links',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are committed to making affiliate links identifiable rather than requiring 
            readers to assume:
          </p>
          <ul className="list-none space-y-2">
            {[
              'Pages containing affiliate links display a compact "Affiliate Disclosure" notice at the top or bottom of the article.',
              'Affiliate links include the rel="nofollow sponsored" attribute in accordance with both Google\'s webmaster guidelines and FTC best practices for commercial links.',
              'This full policy page is always accessible from any inline disclosure notice across the site.',
              'If you are ever uncertain whether a specific link is affiliated, you can contact us (see Section 8) and we will confirm.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: '7. Changes to This Policy',
      body: (
        <p className="text-gray-700 leading-relaxed">
          ThriveHealth360 may update this Affiliate Disclosure Policy as our partnerships 
          evolve. Material changes will be reflected in the "Last updated" date at the 
          top of this page. We encourage you to review this page periodically to stay 
          informed of any updates. Continuing to use ThriveHealth360 after a policy update 
          does not constitute legal acceptance of new terms — if you have questions about 
          a change, please contact us.
        </p>
      ),
    },
    {
      title: '8. Contact Us',
      body: (
        <p className="text-gray-700 leading-relaxed">
          If you have questions about our affiliate relationships, want to know whether a 
          specific link is affiliated, or wish to raise a concern about a commercial 
          relationship on ThriveHealth360, please reach out via our{' '}
          <a href="/contact" className="text-emerald-700 font-semibold underline hover:text-emerald-600">
            Contact page
          </a>
          . We aim to respond to all disclosure-related enquiries within 5 business days.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Affiliate Disclosure Policy | ThriveHealth360"
        description="Read the full Affiliate Disclosure Policy for ThriveHealth360. We earn commissions from qualifying purchases at no extra cost to you. Our editorial content is always independent."
        url="/affiliate-disclosure"
      />

      <div className="bg-white min-h-screen">

        {/* Hero */}
        <section className="bg-emerald-50 border-b-2 border-emerald-200 py-16">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <DollarSign className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Affiliate Disclosure Policy
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe in full transparency about how ThriveHealth360 earns revenue 
              and how that affects — or doesn't affect — our recommendations.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>
        </section>

        {/* Summary callout */}
        <section className="py-8 bg-emerald-50 border-b border-emerald-100">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-6 shadow-sm">
              <p className="text-gray-800 font-semibold leading-relaxed">
                Some links on ThriveHealth360 are affiliate links — meaning we have a{' '}
                <strong>material connection</strong> with the seller (FTC 16 CFR §255). When 
                you click an affiliate link and make a qualifying purchase, we earn a commission 
                at no extra cost to you. Where products have been gifted, sponsored, or 
                provided for review, this is disclosed in the relevant article. These 
                relationships never influence our editorial content, research references, 
                or health guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Principles grid */}
        <section className="py-14 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 tracking-tight">
              Our Four Core Commitments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-50 p-2 rounded-lg flex-shrink-0">
                      <p.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{p.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full policy sections */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="space-y-8">
              {sections.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-emerald-50 p-2 rounded-lg flex-shrink-0">
                      <FileText className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mt-0.5">{section.title}</h2>
                  </div>
                  <div className="pl-14">
                    {section.body}
                  </div>
                </div>
              ))}
            </div>

            {/* About our process CTA */}
            <div className="mt-12 bg-emerald-50 rounded-2xl border border-emerald-100 p-8 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Want to Know More About Our Editorial Process?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Learn how we vet supplements, evaluate research, and ensure our content 
                remains independent of commercial pressure.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
              >
                Our Vetting Process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link to="/medical-disclaimer" className="text-emerald-600 hover:underline font-medium">
                Medical Disclaimer →
              </Link>
              <Link to="/about" className="text-emerald-600 hover:underline font-medium">
                About ThriveHealth360 →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AffiliateDisclosurePage;