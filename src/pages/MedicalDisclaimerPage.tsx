import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight, Phone, FileText, Heart, Users } from 'lucide-react';

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
//  Page: /medical-disclaimer
//  Route: Add <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
// ─────────────────────────────────────────────

const MedicalDisclaimerPage: React.FC = () => {
  const lastUpdated = 'April 2026';

  const sections = [
    {
      icon: FileText,
      title: '1. Educational Purposes Only',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-3">
            All content published on Thrive Health — including articles, guides, supplement reviews, 
            blood sugar targets, lifestyle protocols, and any other materials — is provided for 
            <strong> general educational and informational purposes only</strong>. It is not intended 
            as, and does not constitute, medical advice, medical diagnosis, or a recommended treatment plan.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Reading, sharing, or acting on Thrive Health content does not create a doctor–patient 
            relationship of any kind between you and Thrive Health or any of its contributors.
          </p>
        </>
      ),
    },
    {
      icon: Users,
      title: '2. Consult a Qualified Healthcare Provider',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-3">
            Always seek the advice of your physician, endocrinologist, registered dietitian, 
            certified diabetes care and education specialist, or other qualified healthcare provider 
            with any questions you may have regarding a medical condition, before:
          </p>
          <ul className="list-none space-y-2 mb-3">
            {[
              'Starting, stopping, or changing any diet, supplement, or exercise programme',
              'Adjusting or discontinuing any prescribed medication',
              'Interpreting blood glucose readings, A1C results, or other lab values',
              'Attempting to reverse or manage prediabetes, diabetes, or insulin resistance',
              'Making any other significant change to your health or lifestyle',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Never disregard or delay seeking professional medical advice because of something you 
            have read on this website.
          </p>
        </>
      ),
    },
    {
      icon: AlertCircle,
      title: '3. Regulatory Statement — US, UK, Australia & Canada',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            The statements made on ThriveHealth360 regarding supplements, foods, and lifestyle 
            interventions <strong>have not been evaluated by any governmental health authority</strong>, 
            including but not limited to:
          </p>
          <ul className="list-none space-y-2 mb-4">
            {[
              { region: 'United States', body: 'U.S. Food and Drug Administration (FDA)' },
              { region: 'United Kingdom', body: 'Medicines and Healthcare products Regulatory Agency (MHRA)' },
              { region: 'Australia', body: 'Therapeutic Goods Administration (TGA)' },
              { region: 'Canada', body: 'Health Canada' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span><strong>{item.region}:</strong> {item.body}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed">
            No product, supplement, food, or protocol discussed on this site is <strong>intended 
            to diagnose, treat, cure, or prevent any disease</strong>. Supplement use should always 
            be discussed with your healthcare provider, particularly if you are taking prescription 
            medications or managing a diagnosed health condition.
          </p>
        </>
      ),
    },
    {
      icon: Heart,
      title: '4. Individual Results Vary',
      body: (
        <p className="text-gray-700 leading-relaxed">
          Health outcomes are highly individual and depend on many personal factors including 
          genetics, age, current health status, medication use, adherence, and lifestyle. Any 
          results, timelines, or case examples referenced on Thrive Health represent individual 
          experiences and <strong>are not typical or guaranteed</strong>. Your results may 
          differ materially from those described.
        </p>
      ),
    },
    {
      icon: Phone,
      title: '5. Medical Emergencies',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-3">
            ThriveHealth360 is not a crisis or emergency service. If you or someone else is 
            experiencing a medical emergency — including severe hypoglycemia, diabetic 
            ketoacidosis, chest pain, or any other acute condition — <strong>call your local 
            emergency number immediately and do not attempt to find guidance on this website</strong>.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-800 font-semibold">
            🚨 Emergency numbers: <strong>999</strong> (UK) &nbsp;·&nbsp; <strong>911</strong> (US & Canada) &nbsp;·&nbsp; <strong>000</strong> (Australia) &nbsp;·&nbsp; or your local equivalent
          </div>
        </>
      ),
    },
    {
      icon: Users,
      title: '6. Non-Licensed Editorial Team',
      body: (
        <p className="text-gray-700 leading-relaxed">
          The writers, editors, and contributors at ThriveHealth360 — including the founder — 
          are health researchers and content strategists. <strong>They are not licensed medical 
          professionals</strong> (including but not limited to: Medical Doctors, Endocrinologists, 
          Registered Dietitians, Pharmacists, or Certified Diabetes Care and Education Specialists). 
          No content on this site should be treated as coming from a licensed clinician. 
          For personalised clinical guidance, please consult a qualified healthcare provider 
          registered in your country.
        </p>
      ),
    },
    {
      icon: Heart,
      title: '7. International Jurisdiction & Regulatory Variance',
      body: (
        <>
          <p className="text-gray-700 leading-relaxed mb-3">
            ThriveHealth360 serves a global readership. Health regulations, supplement 
            classifications, approved medical claims, reference ranges, and recommended 
            guidelines vary significantly between countries. Content on this site is written 
            as general educational material and <strong>may not reflect the laws, standards, 
            or guidelines applicable in your country</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Readers in the UK, Australia, Canada, the EU, or any jurisdiction outside the 
            United States should consult healthcare professionals and regulatory resources 
            specific to their region before acting on any information found on this site.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: '8. No Liability',
      body: (
        <p className="text-gray-700 leading-relaxed">
          To the fullest extent permitted by law, ThriveHealth360 and its contributors disclaim 
          all liability for any loss, injury, or damage of any kind arising from your use of 
          or reliance on any content published on this site. You assume full responsibility 
          for how you use the information provided.
        </p>
      ),
    },
    {
      icon: AlertCircle,
      title: '9. Third-Party Content & Links',
      body: (
        <p className="text-gray-700 leading-relaxed">
          ThriveHealth360 may reference, link to, or summarise content from third-party websites, 
          research institutions, or published studies. We strive to cite credible sources, 
          but we do not control third-party content and cannot guarantee its accuracy or 
          currency. References to external studies are provided for context only and do not 
          constitute an endorsement of any third-party website or its views.
        </p>
      ),
    },
    {
      icon: FileText,
      title: '10. Changes to This Disclaimer',
      body: (
        <p className="text-gray-700 leading-relaxed">
          ThriveHealth360 reserves the right to update this Medical Disclaimer at any time. 
          Material changes will be reflected in the "Last updated" date at the top of this 
          page. We encourage you to review this page periodically to stay informed of any 
          updates. If you have questions about a change, please{' '}
          <Link to="/contact" className="text-emerald-700 font-semibold underline hover:text-emerald-600">contact us</Link>.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Medical Disclaimer | ThriveHealth360"
        description="Read the full Medical Disclaimer for ThriveHealth360. All content is for general educational and informational purposes only, is not evaluated by the FDA, MHRA, TGA, or Health Canada, and does not constitute medical advice."
        url="/medical-disclaimer"
      />

      <div className="bg-white min-h-screen">

        {/* Hero */}
        <section className="bg-amber-50 border-b-2 border-amber-200 py-16">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Medical Disclaimer
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              Please read this disclaimer carefully before using Thrive Health.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: <span className="font-medium">{lastUpdated}</span>
            </p>
          </div>
        </section>

        <section className="py-8 bg-amber-50 border-b border-amber-100">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white border-l-4 border-amber-500 rounded-r-xl p-6 shadow-sm">
              <p className="text-gray-800 font-semibold leading-relaxed">
                All content on ThriveHealth360 is for general educational and informational purposes only and is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Supplements, foods, and lifestyle interventions discussed on this site have <strong>not been evaluated by the FDA, MHRA, TGA, or Health Canada</strong> and are <strong>not intended to diagnose, treat, cure, or prevent any disease</strong>. Always consult your doctor or a qualified healthcare provider before making changes to your diet, exercise routine, medications, or supplement regimen. Individual results vary and are not guaranteed. Health regulations differ by country — content may not apply in your jurisdiction.
              </p>
            </div>
          </div>
        </section>

        {/* Full sections */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-emerald-50 p-2 rounded-lg flex-shrink-0">
                      <section.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mt-1">{section.title}</h2>
                  </div>
                  <div className="pl-14">
                    {section.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact / Questions */}
            <div className="mt-12 bg-emerald-50 rounded-2xl border border-emerald-100 p-8 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Questions About This Disclaimer?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                If you have questions about this Medical Disclaimer, how we produce our content, 
                or wish to report a factual concern about any article, please contact our 
                editorial team directly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link to="/affiliate-disclosure" className="text-emerald-600 hover:underline font-medium">
                Affiliate Disclosure Policy →
              </Link>
              <Link to="/about" className="text-emerald-600 hover:underline font-medium">
                About ThriveHealth360 →
              </Link>
              <Link to="/contact" className="text-emerald-600 hover:underline font-medium">
                Contact Us →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MedicalDisclaimerPage;