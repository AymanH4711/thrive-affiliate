// src/pages/utility/TermsOfService.tsx
// Routed at /terms-of-service in App.tsx

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LAST_UPDATED  = 'May 2026';
const SITE_NAME     = 'ThriveHealth360';
const SITE_URL      = 'https://www.thrivehealth360.com';
const CONTACT_EMAIL = 'legal@thrivehealth360.com';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Terms of Service | ${SITE_NAME}`;
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="bg-emerald-50 border-b border-emerald-100 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="prose prose-gray max-w-none">

          {/* Acceptance */}
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using {SITE_NAME} (<a href={SITE_URL} className="text-emerald-600 hover:underline">{SITE_URL}</a>),
              you agree to be bound by these Terms of Service and our{' '}
              <Link to="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</Link>.
              If you do not agree, please do not use this website.
            </p>
            <p>
              We reserve the right to update these terms at any time. Continued use of the site after changes
              constitutes acceptance of the revised terms.
            </p>
          </Section>

          {/* Use of Site */}
          <Section title="2. Use of This Website">
            <p>You may use {SITE_NAME} for personal, non-commercial purposes only. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Copy, reproduce, or redistribute our content without written permission.</li>
              <li>Use automated tools (scrapers, bots) to extract content from the site.</li>
              <li>Attempt to gain unauthorised access to any part of the site or its infrastructure.</li>
              <li>Post or transmit any unlawful, harmful, or misleading content through any interactive features.</li>
              <li>Use the site in any way that violates applicable local, national, or international law.</li>
            </ul>
          </Section>

          {/* Health Disclaimer */}
          <Section title="3. Health Information Disclaimer">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-amber-900">
              <strong>Important:</strong> The content on {SITE_NAME} is for informational and educational
              purposes only. It is not medical advice, diagnosis, or treatment. Always consult a qualified
              healthcare provider before making changes to your diet, exercise routine, supplements, or medication.
            </div>
            <p>
              {SITE_NAME} is not a medical practice and does not establish a patient-provider relationship.
              We do not claim that any information on this site will prevent, treat, cure, or reverse any
              medical condition, including prediabetes or type 2 diabetes. Specific health outcomes vary
              between individuals.
            </p>
            <p>
              Our full{' '}
              <Link to="/medical-disclaimer" className="text-emerald-600 hover:underline">Medical Disclaimer</Link>{' '}
              applies to all content on this site.
            </p>
          </Section>

          {/* Affiliate Relationships */}
          <Section title="4. Affiliate Relationships and Advertising">
            <p>
              {SITE_NAME} participates in affiliate marketing programmes. Some links on this site are
              affiliate links — if you click one and make a purchase, we may earn a commission at no
              additional cost to you.
            </p>
            <p>
              Affiliate relationships do not influence our editorial content or product recommendations.
              We only promote products we believe may genuinely benefit our readers. Read our full{' '}
              <Link to="/affiliate-disclosure" className="text-emerald-600 hover:underline">Affiliate Disclosure</Link>{' '}
              for details.
            </p>
            <p>
              Product prices, availability, and descriptions are provided for informational purposes and
              may change. We are not responsible for inaccuracies on third-party merchant sites.
            </p>
          </Section>

          {/* Intellectual Property */}
          <Section title="5. Intellectual Property">
            <p>
              All content on {SITE_NAME} — including text, images, logos, graphics, and code — is the
              property of {SITE_NAME} or its content suppliers and is protected by applicable copyright
              and trademark law.
            </p>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Share links to our articles on social media or in personal communications.</li>
              <li>Quote brief excerpts (under 50 words) with clear attribution and a link back to the original.</li>
            </ul>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Republish, sell, or license our content without prior written permission.</li>
              <li>Use our brand name, logo, or trademarks without permission.</li>
              <li>Create derivative works based on our content for commercial purposes.</li>
            </ul>
            <p>
              To request permission, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </Section>

          {/* Third Party Links */}
          <Section title="6. Third-Party Links">
            <p>
              Our site contains links to third-party websites, including affiliate partners, research
              sources (PubMed, NIH, ADA), and product retailers. These links are provided for your
              convenience and do not constitute an endorsement of those sites.
            </p>
            <p>
              We have no control over the content, privacy practices, or availability of third-party sites
              and accept no responsibility for them. Your use of third-party sites is governed by their own
              terms and privacy policies.
            </p>
          </Section>

          {/* User Submissions */}
          <Section title="7. User Submissions">
            <p>
              If you submit content through our contact form, comments, or other interactive features, you
              grant {SITE_NAME} a non-exclusive, royalty-free licence to use, reproduce, and publish that
              content. You represent that you own the content or have the right to submit it.
            </p>
            <p>
              We reserve the right to remove any submission that violates these terms or is otherwise
              objectionable, at our sole discretion.
            </p>
          </Section>

          {/* Disclaimer of Warranties */}
          <Section title="8. Disclaimer of Warranties">
            <p>
              {SITE_NAME} is provided on an "as is" and "as available" basis without warranties of any kind,
              either express or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the site will be uninterrupted, error-free, or free of viruses or
              other harmful components. We make no warranty regarding the accuracy, completeness, or
              timeliness of any content.
            </p>
          </Section>

          {/* Limitation of Liability */}
          <Section title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, {SITE_NAME} and its owners, authors, and affiliates
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              arising from your use of — or inability to use — this website or its content.
            </p>
            <p>
              This includes, without limitation, damages for personal injury, health outcomes, financial
              loss, or data loss, even if we have been advised of the possibility of such damages.
            </p>
          </Section>

          {/* Indemnification */}
          <Section title="10. Indemnification">
            <p>
              You agree to indemnify and hold harmless {SITE_NAME}, its owners, authors, and agents from
              any claims, losses, or damages arising out of your use of the site, your violation of these
              terms, or your infringement of any third-party rights.
            </p>
          </Section>

          {/* Governing Law */}
          <Section title="11. Governing Law">
            <p>
              These terms are governed by and construed in accordance with applicable law. Any disputes
              shall be resolved in the jurisdiction where {SITE_NAME} is registered and operated.
            </p>
          </Section>

          {/* Contact */}
          <Section title="12. Contact Us">
            <p>Questions about these terms? Reach us at:</p>
            <div className="bg-emerald-50 rounded-lg p-5 mt-3 text-sm text-gray-700">
              <p className="font-semibold text-gray-900 mb-1">{SITE_NAME}</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 hover:underline">{CONTACT_EMAIL}</a></p>
              <p>Or use our <Link to="/contact" className="text-emerald-600 hover:underline">contact form</Link>.</p>
            </div>
          </Section>

        </div>

        {/* Legal note */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-500">
          <strong>Note:</strong> These terms are provided as a starting template. Before publishing, have
          them reviewed by a qualified legal professional to ensure they are appropriate for your business
          model and jurisdiction.
        </div>

        {/* Related links */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link to="/privacy"              className="text-emerald-600 hover:underline">Privacy Policy</Link>
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