// src/pages/utility/PrivacyPolicy.tsx
// NOTE: App.tsx routes /privacy to src/pages/PrivacyPage.tsx
// Copy this content into PrivacyPage.tsx and delete the empty duplicate,
// OR update App.tsx to import from this file instead.

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'May 2026';
const SITE_NAME    = 'ThriveHealth360';
const SITE_URL     = 'https://www.thrivehealth360.com';
const CONTACT_EMAIL = 'privacy@thrivehealth360.com';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Privacy Policy | ${SITE_NAME}`;
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="bg-emerald-50 border-b border-emerald-100 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="prose prose-gray max-w-none">

          {/* Introduction */}
          <Section title="1. Introduction">
            <p>
              {SITE_NAME} (<a href={SITE_URL} className="text-emerald-600 hover:underline">{SITE_URL}</a>) is
              committed to protecting your privacy. This policy explains what information we collect, how we use it,
              and the choices you have. By using our website, you agree to the practices described here.
            </p>
            <p>
              Plain English summary: we collect basic analytics and optional email signups. We use affiliate links
              that may set tracking cookies. We do not sell your personal data.
            </p>
          </Section>

          {/* Information We Collect */}
          <Section title="2. Information We Collect">
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Information you give us</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Email address</strong> — if you subscribe to our newsletter or download a free resource.</li>
              <li><strong>Name</strong> — optionally provided when you contact us via our contact form.</li>
              <li><strong>Message content</strong> — text you submit through our contact form.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Usage data</strong> — pages visited, time on page, referring URL, browser type, and device type.</li>
              <li><strong>IP address</strong> — used to determine approximate geographic location (country/region level only).</li>
              <li><strong>Cookies</strong> — see Section 4 for full details.</li>
            </ul>
          </Section>

          {/* How We Use Your Information */}
          <Section title="3. How We Use Your Information">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To send newsletters and health content updates you have opted into.</li>
              <li>To respond to contact form submissions.</li>
              <li>To analyse site performance and improve content quality.</li>
              <li>To track affiliate link conversions (see Section 5).</li>
              <li>To comply with legal obligations.</li>
            </ul>
            <p>
              We do <strong>not</strong> use your data for automated decision-making or profiling, and we do
              not sell it to third parties.
            </p>
          </Section>

          {/* Cookies */}
          <Section title="4. Cookies and Tracking">
            <p>We use the following types of cookies:</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-emerald-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Purpose</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Can be disabled?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200 text-gray-700">Essential</td>
                    <td className="p-3 border border-gray-200 text-gray-700">Required for the site to function (e.g. form security tokens)</td>
                    <td className="p-3 border border-gray-200 text-gray-700">No</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">Analytics</td>
                    <td className="p-3 border border-gray-200 text-gray-700">Understand how pages are used (Google Analytics / similar)</td>
                    <td className="p-3 border border-gray-200 text-gray-700">Yes — via browser settings</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 text-gray-700">Affiliate tracking</td>
                    <td className="p-3 border border-gray-200 text-gray-700">Track clicks on affiliate links to attribute commissions</td>
                    <td className="p-3 border border-gray-200 text-gray-700">Yes — via browser settings</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              You can manage or delete cookies at any time through your browser settings. Disabling cookies may
              affect some site functionality but will not prevent you from reading our content.
            </p>
          </Section>

          {/* Affiliate Links */}
          <Section title="5. Affiliate Links and Third-Party Services">
            <p>
              Some links on {SITE_NAME} are affiliate links. If you click one and make a purchase, we may earn a
              commission at no additional cost to you. Affiliate partners may set tracking cookies when you click
              their links. We only recommend products we believe are genuinely useful — see our{' '}
              <Link to="/affiliate-disclosure" className="text-emerald-600 hover:underline">full Affiliate Disclosure</Link>.
            </p>
            <p>Third-party services we may use include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Google Analytics</strong> — anonymised usage analytics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Google Privacy Policy</a>.</li>
              <li><strong>Email service provider</strong> (e.g. Mailchimp / ConvertKit) — for newsletter delivery.</li>
              <li><strong>Netlify</strong> — website hosting and form handling.</li>
            </ul>
            <p>
              Each third party has its own privacy policy. We encourage you to review them.
            </p>
          </Section>

          {/* Data Sharing */}
          <Section title="6. How We Share Your Data">
            <p>We share personal data only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Service providers</strong> — companies that help us operate the site (hosting, email delivery, analytics), bound by data processing agreements.</li>
              <li><strong>Legal requirements</strong> — if required by law or to protect the rights and safety of our users.</li>
              <li><strong>Business transfer</strong> — if {SITE_NAME} is acquired or merged, data may transfer to the new owner under the same privacy protections.</li>
            </ul>
            <p>We <strong>never sell</strong> your personal data to advertisers or data brokers.</p>
          </Section>

          {/* Data Retention */}
          <Section title="7. Data Retention">
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Email subscribers</strong> — retained until you unsubscribe. Each email contains a one-click unsubscribe link.</li>
              <li><strong>Contact form submissions</strong> — retained for up to 12 months, then deleted.</li>
              <li><strong>Analytics data</strong> — retained per the analytics provider's default retention period (typically 14–26 months).</li>
            </ul>
          </Section>

          {/* Your Rights */}
          <Section title="8. Your Rights">
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
              <li><strong>Correction</strong> — ask us to correct inaccurate data.</li>
              <li><strong>Deletion</strong> — ask us to delete your data ("right to be forgotten").</li>
              <li><strong>Opt-out</strong> — unsubscribe from marketing emails at any time.</li>
              <li><strong>Portability</strong> — request your data in a machine-readable format.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 hover:underline">{CONTACT_EMAIL}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          {/* Children */}
          <Section title="9. Children's Privacy">
            <p>
              {SITE_NAME} is not directed at children under 13. We do not knowingly collect personal information
              from children. If you believe a child has provided us with personal data, please contact us and we
              will delete it promptly.
            </p>
          </Section>

          {/* Security */}
          <Section title="10. Security">
            <p>
              We implement reasonable technical and organisational measures to protect your data — including HTTPS
              encryption, access controls, and secure hosting via Netlify. No method of transmission over the
              internet is 100% secure; we cannot guarantee absolute security.
            </p>
          </Section>

          {/* Changes */}
          <Section title="11. Changes to This Policy">
            <p>
              We may update this policy periodically. When we do, we will update the "Last updated" date at the
              top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.
              For significant changes, we will notify email subscribers directly.
            </p>
          </Section>

          {/* Contact */}
          <Section title="12. Contact Us">
            <p>Questions about this privacy policy? Reach us at:</p>
            <div className="bg-emerald-50 rounded-lg p-5 mt-3 text-sm text-gray-700">
              <p className="font-semibold text-gray-900 mb-1">{SITE_NAME}</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 hover:underline">{CONTACT_EMAIL}</a></p>
              <p>Or use our <Link to="/contact" className="text-emerald-600 hover:underline">contact form</Link>.</p>
            </div>
          </Section>

        </div>

        {/* Legal note */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-500">
          <strong>Note:</strong> This privacy policy is provided as a starting template. Before publishing,
          have it reviewed by a qualified legal professional to ensure compliance with applicable laws in your
          jurisdiction (GDPR, CCPA, etc.).
        </div>

        {/* Related links */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link to="/terms-of-service"     className="text-emerald-600 hover:underline">Terms of Service</Link>
          <Link to="/affiliate-disclosure" className="text-emerald-600 hover:underline">Affiliate Disclosure</Link>
          <Link to="/medical-disclaimer"   className="text-emerald-600 hover:underline">Medical Disclaimer</Link>
          <Link to="/contact"              className="text-emerald-600 hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

/* ── Helper component ─────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}