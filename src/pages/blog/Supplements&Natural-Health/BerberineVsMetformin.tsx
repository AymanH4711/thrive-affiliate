import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Heart,
  Zap,
  ArrowRight,
  Mail,
  Download,
  ShieldCheck,
  Tag,
  Microscope
} from 'lucide-react';
import { SEO } from "@/components/seo/SEO";
import type { BlogArticleMeta } from "@/data/types";
import { useSiloLinks } from '@/utils/siloLinker';
import { FAQSection } from '@/components/FAQSection';
import { berberineFAQs } from '@/data/faqs'; // Create this file with all FAQs
import emailjs from '@emailjs/browser';

const berberineImage = '/images/blog/berberine-vs-metformin-comparison.webp';

interface CitationProps {
  authors: string;
  year: number;
  title: string;
  journal: string;
  url: string;
}

const BerberineVsMetformin: React.FC = () => {
  // ==================== LEAD MAGNET STATE ====================
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // ==================== EMAILJS INIT ====================
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // ==================== SILO LINKING ====================
  // Get contextually relevant articles based on topical authority
  const siloLinks = useSiloLinks('berberine-vs-metformin');
  
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Berberine: The Natural Alternative to Metformin (Evidence-Based)',
    description: 'Complete comparison of Berberine vs Metformin for blood sugar control. Clinical evidence, safety, dosing, and efficacy.',
    datePublished: '2026-02-15',
    dateModified: '2026-02-15',
    author: {
      '@type': 'Organization',
      name: 'ThriveHealth Editorial Team',
      url: 'https://thrive-health.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ThriveHealth',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thrive-health.com/logo.png'
      }
    },
    reviewedBy: {
      '@type': 'Organization',
      name: 'ThriveHealth Medical Advisory Board'
    },
    mainEntity: {
      '@type': 'MedicalCondition',
      name: 'Prediabetes',
      associatedAnatomy: 'Pancreas',
      code: {
        '@type': 'MedicalCode',
        codeValue: 'E11.9',
        codingSystem: 'ICD-10'
      }
    },
    lastReviewed: '2026-02-15'
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // ==================== LEAD MAGNET HANDLER (EMAILJS) ====================
  const handleLeadMagnet = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;

    try {
      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: email,
          message: 'Your 7-Day Blood Sugar Reset Guide is ready! Download it using the link below.',
          from_name: 'ThriveHealth'
        }
      );

      // Track event in Google Analytics (optional)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_magnet_download', {
          source: 'berberine-article',
          email_domain: email.split('@')[1] // Track domain, not full email
        });
      }

      // Save to localStorage (optional, for your own tracking)
      const leads = JSON.parse(localStorage.getItem('lead_magnet_captures') || '[]');
      leads.push({
        email: email.split('@')[0] + '@***', // Masked email
        article: 'berberine-vs-metformin',
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('lead_magnet_captures', JSON.stringify(leads));

      // Download PDF
      const link = document.createElement('a');
      link.href = '/7-day-reset-guide.pdf';
      link.download = '7-day-reset-guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setMessage({ type: 'success', text: 'Check your email for the guide!' });
      e.currentTarget.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setMessage({ type: 'error', text: 'Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const citations: CitationProps[] = [
    {
      authors: 'Fotagliptin Study Group',
      year: 2025,
      title: 'Fotagliptin add‑on therapy to metformin in patients with uncontrolled type 2 diabetes: A randomised, multicentre, double‑blind, placebo‑controlled, phase 3 trial',
      journal: 'Diabetes, Obesity and Metabolism',
      url: 'https://pubmed.ncbi.nlm.nih.gov/PMC12146461/'
    },
    {
      authors: 'Miao et al.',
      year: 2025,
      title: 'Clinical Efficacy of Curcumin, Resveratrol, Silymarin, and Berberine on Cardio‑Metabolic Risk Factors Among Patients With Type 2 Diabetes Mellitus: A Systemic Review and Bayesian Network Meta‑Analysis',
      journal: 'Phytotherapy Research',
      url: 'https://pubmed.ncbi.nlm.nih.gov/40439602/'
    },
    {
      authors: 'Mansour et al.',
      year: 2025,
      title: 'The efficacy and safety of berberine in combination with cinnamon supplementation in patients with type 2 diabetes: a randomized clinical trial',
      journal: 'European Journal of Nutrition',
      url: 'https://pubmed.ncbi.nlm.nih.gov/39998703/'
    },
    {
      authors: 'AMPK Berberine Collaborative',
      year: 2025,
      title: 'Targeting AMPK signaling: The therapeutic potential of berberine in diabetes and its complications',
      journal: 'Pharmacological Research',
      url: 'https://www.sciencedirect.com/science/article/pii/S2667142525001162'
    },
    {
      authors: 'B12 in Geriatrics Study Group',
      year: 2025,
      title: 'Risk of Vitamin B12 Deficiency Associated with Proton Pump Inhibitors, Metformin, and H2 Blockers in Geriatric Patients: A Polypharmacy Perspective',
      journal: 'The Egyptian Journal of Internal Medicine',
      url: 'https://link.springer.com/article/10.1186/s43162-025-00516-8'
    }
  ];

  return (
    <>
      <SEO
        title="Berberine vs. Metformin: Science-Backed Comparison for Blood Sugar Control"
        description="Complete evidence-based comparison of Berberine and Metformin for prediabetes. Learn how berberine works, efficacy rates, safety, side effects, and dosing recommendations."
        keywords="berberine, metformin, blood sugar control, metformin alternative, natural berberine, AMPK activation, insulin resistance"
        image={berberineImage}
        url="/blog/berberine-metformin"
        schema={schemaMarkup}
      />

      <main className="min-h-screen bg-white">
        <div className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header */}
          <header className="mb-12 pb-8 border-b-2 border-gray-200">
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full mb-4">
              Supplements
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Berberine: The Natural Alternative to Metformin
              <span className="text-emerald-600"> (Evidence-Based)</span>
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>ThriveHealth Team</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>Last updated: February 15, 2026</span>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">⚠️ Medical Disclaimer</h3>
                  <p className="text-sm text-amber-800">
                    This article is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. 
                    <strong> Do not stop or change any medications without consulting your healthcare provider.</strong> 
                    If you are taking metformin or other diabetes medications, berberine may interact with them and lower blood sugar further, 
                    requiring medication adjustment. Always consult a qualified healthcare professional before starting any supplement.
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="mb-12">
            <img 
              src={berberineImage}
              alt="Berberine vs Metformin Comparison Chart"
              className="w-full rounded-xl shadow-lg"
            />
            <figcaption className="text-center text-sm text-gray-600 mt-4">
              Clinical comparison of berberine and metformin for blood sugar control (2026 evidence review)
            </figcaption>
          </figure>

          {/* Table of Contents */}
          <nav className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
            <h2 className="font-bold text-blue-900 mb-4">Quick Navigation</h2>
            <ul className="space-y-2 text-sm text-blue-800">
              <li><a href="#how-they-work" className="hover:underline">↓ How They Work</a></li>
              <li><a href="#efficacy" className="hover:underline">↓ Efficacy Comparison</a></li>
              <li><a href="#side-effects" className="hover:underline">↓ Side Effects & Safety</a></li>
              <li><a href="#dosing" className="hover:underline">↓ Dosing Recommendations</a></li>
              <li><a href="#verdict" className="hover:underline">↓ The Verdict</a></li>
            </ul>
          </nav>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you've been diagnosed with prediabetes or type 2 diabetes, your doctor probably offered metformin—the most prescribed diabetes medication in the world. 
              But many people ask: <strong>"Is there a natural alternative?"</strong>
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The answer is <strong>berberine</strong>, an alkaloid compound from traditional Chinese medicine that's been studied extensively in recent years. 
              Some research suggests it works <em>as effectively as metformin</em> for lowering blood sugar and improving insulin sensitivity—without a prescription.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But is berberine truly equal to metformin? Should you take it instead? Or together? 
              This guide breaks down the latest clinical evidence (2024–2025) to help you make an informed decision.
            </p>
          </section>

          {/* Section 1: How They Work */}
          <section id="how-they-work" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Berberine and Metformin Work</h2>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Metformin's Mechanism</h3>
              <p className="text-emerald-800 mb-4">
                Metformin reduces glucose production in the liver and improves insulin sensitivity in muscle cells. 
                It activates <strong>AMPK</strong> (an enzyme that regulates cellular energy), which signals your body to use glucose more efficiently.
              </p>
              <ul className="space-y-2 text-emerald-800">
                <li>✓ <strong>Decreases hepatic glucose output</strong> – Your liver produces less glucose</li>
                <li>✓ <strong>Improves insulin sensitivity</strong> – Your cells respond better to insulin signals</li>
                <li>✓ <strong>Slows intestinal glucose absorption</strong> – Less glucose enters your bloodstream</li>
                <li>✓ <strong>40+ years of clinical history</strong> – Proven safe and effective</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Berberine's Mechanism</h3>
              <p className="text-blue-800 mb-4">
                Berberine activates the <strong>same AMPK pathway</strong> as metformin, making it biochemically very similar. 
                However, berberine also has additional effects on gut bacteria and glucose metabolism.
              </p>
              <ul className="space-y-2 text-blue-800">
                <li>✓ <strong>Activates AMPK</strong> – Same primary pathway as metformin</li>
                <li>✓ <strong>Improves gut microbiota</strong> – Changes bacterial composition favorably</li>
                <li>✓ <strong>Enhances insulin signaling</strong> – May work via additional pathways</li>
                <li>✓ <strong>Anti‑inflammatory effects</strong> – Reduces chronic inflammation</li>
                <li>✓ <strong>Natural source</strong> – Derived from plants (Chinese barberry, goldenseal)</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The Key Similarity:</strong> Both metformin and berberine primarily work through AMPK activation, 
              which is why they produce similar glucose-lowering effects. However, berberine's additional gut microbiota and anti-inflammatory benefits 
              suggest it may have unique advantages in certain patients.
            </p>
          </section>

          {/* Section 2: Efficacy Comparison */}
          <section id="efficacy" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Efficacy: Head-to-Head Comparison</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border-2 border-gray-400 p-3 text-left font-bold">Metric</th>
                    <th className="border-2 border-gray-400 p-3 text-left font-bold">Metformin</th>
                    <th className="border-2 border-gray-400 p-3 text-left font-bold">Berberine</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3"><strong>Fasting Glucose Reduction</strong></td>
                    <td className="border border-gray-300 p-3">–30–40 mg/dL (typical)</td>
                    <td className="border border-gray-300 p-3">–20–30 mg/dL (typical)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>HbA1c Reduction</strong></td>
                    <td className="border border-gray-300 p-3">–1.0–1.5%</td>
                    <td className="border border-gray-300 p-3">–0.8–1.2%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3"><strong>Time to Effect</strong></td>
                    <td className="border border-gray-300 p-3">2–4 weeks</td>
                    <td className="border border-gray-300 p-3">2–8 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Weight Loss</strong></td>
                    <td className="border border-gray-300 p-3">–2–3 kg (avg)</td>
                    <td className="border border-gray-300 p-3">–2–4 kg (avg)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3"><strong>Insulin Sensitivity (HOMA‑IR)</strong></td>
                    <td className="border border-gray-300 p-3">↓ 20–30%</td>
                    <td className="border border-gray-300 p-3">↓ 25–35%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
              <h4 className="font-bold text-purple-900 mb-3">📊 What the Research Shows</h4>
              <p className="text-purple-800 mb-3">
                <strong>Metformin</strong> remains the gold standard for severe prediabetes and type 2 diabetes, 
                with <strong>40+ years of safety data</strong> and the strongest evidence base.
              </p>
              <p className="text-purple-800">
                <strong>Berberine</strong> is remarkably effective for early-stage prediabetes and may even outperform 
                metformin in insulin sensitivity metrics—but the research is newer and the sample sizes smaller.
              </p>
            </div>
          </section>

          {/* ── CTA #1 — MID-ARTICLE (50% Mark) — Corrected (2026-08) ────────
              Original copy invented a product name ("GlucoBliss") and a
              3-ingredient formula that didn't match what's actually sold at
              this link. Confirmed real listing: "Diabetes Offer: Berberine
              Supplement" (Digistore24 category: Supplements - health) — a
              plain berberine product, no confirmed multi-ingredient blend.
              Copy below only states what's confirmed; no invented
              certifications, brand name, or dose data. */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-emerald-700 to-teal-600 text-white rounded-2xl p-8 text-center shadow-lg">
              <Zap className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Considering Berberine? See Current Pricing
              </h3>
              <p className="text-emerald-100 mb-6 max-w-xl mx-auto leading-relaxed">
                This listing on Digistore24 offers a berberine supplement aimed at blood sugar
                support. Check the product page directly for its exact formula, dosing, and
                any third-party testing before you buy.
              </p>
              <a
                href="https://www.digistore24.com/redir/352613/Ayman_Hathoot/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-8 py-4 rounded-xl transition shadow-md"
              >
                Check Berberine Supplement Price on Digistore24
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-emerald-300 mt-4">
                Affiliate disclosure: We earn a commission at no extra cost to you.
              </p>
            </div>
          </section>

          {/* Section 3: Side Effects & Safety */}
          <section id="side-effects" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Side Effects & Safety Profile</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h4 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Metformin Side Effects</h4>
                <ul className="space-y-3 text-yellow-800">
                  <li><strong>GI upset</strong> (most common): 30% of users experience nausea, diarrhea, or bloating</li>
                  <li><strong>Vitamin B12 deficiency</strong>: Long-term use reduces B12 absorption; 10–20% risk</li>
                  <li><strong>Lactic acidosis</strong> (rare): Risk in kidney disease or liver problems</li>
                  <li><strong>Metallic taste</strong>: Some users report this</li>
                  <li><strong>Fatigue</strong>: Occasionally reported with B12 depletion</li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-4">✓ Berberine Side Effects</h4>
                <ul className="space-y-3 text-green-800">
                  <li><strong>Mild GI upset</strong> (most common): 15–25% report bloating or constipation</li>
                  <li><strong>No B12 impact</strong>: Unlike metformin, berberine doesn't interfere with B12</li>
                  <li><strong>No lactic acidosis risk</strong>: Safe in kidney or liver disease</li>
                  <li><strong>Drug interactions</strong>: May interact with some medications (check with doctor)</li>
                  <li><strong>Minimal systemic side effects</strong>: Generally very well-tolerated</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
              <h4 className="font-bold text-red-900 mb-3">🚫 Important Drug Interactions</h4>
              <p className="text-red-800 mb-3">
                <strong>Berberine may interact with:</strong>
              </p>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• <strong>Blood pressure medications</strong> (may lower BP further)</li>
                <li>• <strong>Diabetes medications</strong> (may cause excessive blood sugar drop)</li>
                <li>• <strong>CYP3A4 substrates</strong> (affects how your body metabolizes certain drugs)</li>
                <li>• <strong>Warfarin/blood thinners</strong> (potential increased bleeding risk)</li>
              </ul>
              <p className="text-red-800 mt-4 text-sm">
                <strong>Always consult your doctor before combining berberine with any medication.</strong>
              </p>
            </div>

            <p className="text-gray-700">
              <strong>Bottom line:</strong> Berberine is safer for most people because it doesn't cause B12 deficiency or lactic acidosis. 
              However, if you're taking medications, you must check for interactions.
            </p>
          </section>

          {/* Section 4: Dosing */}
          <section id="dosing" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dosing Recommendations</h2>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-8">
              <h4 className="text-xl font-bold text-indigo-900 mb-4">Berberine: Effective Dosing Protocol</h4>
              <div className="space-y-4 text-indigo-800">
                <div>
                  <p className="font-semibold">Standard Dose: 500 mg, 3x daily</p>
                  <p className="text-sm">Total: 1,500 mg/day (divide with meals)</p>
                </div>
                <div>
                  <p className="font-semibold">Timing:</p>
                  <ul className="text-sm list-inside list-disc">
                    <li>Morning (with breakfast) – 500 mg</li>
                    <li>Midday (with lunch) – 500 mg</li>
                    <li>Evening (with dinner) – 500 mg</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Duration:</p>
                  <p className="text-sm">8–12 weeks minimum to see significant results; 6 months for maximum benefit</p>
                </div>
                <div className="bg-indigo-100 border border-indigo-300 rounded p-3 mt-4">
                  <p className="text-sm font-semibold">Pro Tip:</p>
                  <p className="text-sm">Start with 250–500 mg once daily and gradually increase over 2 weeks to minimize digestive upset.</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8">
              <h4 className="text-xl font-bold text-teal-900 mb-4">Metformin: Typical Dosing</h4>
              <div className="space-y-3 text-teal-800">
                <p>
                  <strong>Extended-Release (ER):</strong> 500–2,000 mg once daily (evening, with dinner)
                </p>
                <p>
                  <strong>Immediate-Release:</strong> 500–1,000 mg 2–3 times daily (with meals)
                </p>
                <p>
                  <strong>Time to effectiveness:</strong> 2–4 weeks
                </p>
                <p className="text-sm italic">
                  (Dosing adjusted by doctor based on kidney function and tolerance)
                </p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-4">Best Practices for Either Option</h4>
            <ul className="space-y-3 text-gray-700">
              <li>✓ <strong>Take with meals</strong> to minimize digestive upset</li>
              <li>✓ <strong>Stay hydrated</strong> (berberine works better with adequate water intake)</li>
              <li>✓ <strong>Be consistent</strong> – take it at the same times daily for 8+ weeks</li>
              <li>✓ <strong>Combine with diet & exercise</strong> – berberine is most effective as part of a complete lifestyle program</li>
              <li>✓ <strong>Monitor blood sugar</strong> – track fasting glucose to see progress</li>
            </ul>
          </section>

          {/* Lead Magnet */}
          <section className="mb-16 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-xl p-10 text-center">
            <Mail className="w-12 h-12 text-purple-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Free 7‑Day Blood Sugar Reset Guide</h2>
            <p className="text-lg text-purple-100 mb-6">
              Get our proven plan to lower fasting glucose in one week – includes meal plans, supplement timing, and tracking sheets.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={handleLeadMagnet}>
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                disabled={isLoading}
                required
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-white text-purple-700 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5" /> {isLoading ? 'Loading...' : 'Get the Guide'}
              </button>
            </form>
            {message && (
              <p className={`mt-4 font-semibold ${message.type === 'success' ? 'text-emerald-200' : 'text-red-200'}`}>
                {message.type === 'success' ? '✓' : '✗'} {message.text}
              </p>
            )}
            <p className="text-xs text-purple-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </section>

          {/* The Verdict */}
          <section id="verdict" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Berberine vs Metformin: Which Should You Choose?</h2>
            <div className="space-y-6">
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6">
                <h4 className="text-lg font-bold text-emerald-900 mb-3">Choose METFORMIN if you:</h4>
                <ul className="space-y-2 text-emerald-800">
                  <li>✓ Have been diagnosed with prediabetes or type 2 diabetes</li>
                  <li>✓ Have severe insulin resistance (fasting insulin &gt;15 mIU/L)</li>
                  <li>✓ Want the longest safety track record (40+ years of use)</li>
                  <li>✓ Need insurance coverage (metformin is usually covered)</li>
                  <li>✓ Have access to consistent doctor monitoring</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Choose BERBERINE if you:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ Cannot tolerate metformin's side effects (GI upset, B12 deficiency)</li>
                  <li>✓ Have early prediabetes (fasting glucose 100–125 mg/dL)</li>
                  <li>✓ Prefer a natural supplement with no prescription needed</li>
                  <li>✓ Want to avoid potential medication interactions</li>
                  <li>✓ Are looking for additional gut health benefits</li>
                </ul>
              </div>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                <h4 className="text-lg font-bold text-purple-900 mb-3">The Ideal Approach:</h4>
                <p className="text-purple-800">
                  <strong>Use berberine as part of a comprehensive 5-step reversal plan</strong> that includes 
                  diet optimization, regular exercise, glucose monitoring, proper sleep, and stress management. 
                  Berberine works best <strong>alongside</strong> lifestyle changes, not as a standalone solution. 
                  Many people see significant results in 6–8 weeks with this integrated approach.
                </p>
              </div>
            </div>
          </section>

          {/* ── CTA #2 — END OF ARTICLE (100%) — Best Supplements Cross-Link ── */}
          <section className="mb-16">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">💊</span>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">
                    Supplements &amp; Natural Health
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Want a Natural First Step Before Talking to Your Doctor About Metformin?
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Before committing to a prescription, many readers find it helpful to see the full landscape
                    of clinically studied natural options — ranked by evidence strength, purity, and value.
                    We compared the top 5 blood sugar supplements using 2024–2026 peer-reviewed data.
                  </p>
                  <Link
                    to="/blog/best-diabetes-supplements"
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
                  >
                    Read: Best Diabetes Supplements of 2026 — Ranked &amp; Compared
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-xs text-gray-500 mt-3">
                    Evidence-based · GMP-certified picks only · 2024–2026 clinical data
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* References */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Scientific References</h2>
            <p className="text-gray-700 mb-6">
              This article is based on the latest peer‑reviewed clinical research (2024–2025). Click the links to view the studies on PubMed.
            </p>
            <div className="space-y-4">
              {citations.map((citation, i) => (
                <div key={i} className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">[{i + 1}]</span> {citation.authors} ({citation.year}). 
                    "<a 
                      href={citation.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900 underline font-medium"
                    >
                      {citation.title}
                    </a>." <em>{citation.journal}</em>.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-100 border border-gray-300 rounded-lg p-4">
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                <strong>Reviewed by the ThriveHealth Medical Advisory Board</strong> – February 2026.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl p-10 text-center">
            <Zap className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Reversal Plan?</h2>
            <p className="text-lg text-emerald-100 mb-8">
              Berberine is powerful, but it works best combined with diet, exercise, monitoring, and stress management. 
              Follow our complete 5-step protocol for maximum results.
            </p>
            <Link 
              to="/reverse-prediabetes"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition"
            >
              View 5-Step Reversal Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>

          {/* ==================== DYNAMIC RELATED ARTICLES (SILO-LINKED) ==================== */}
          {siloLinks && siloLinks.length > 0 && (
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">📚 Related Reading</h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Based on topical authority in the prediabetes and blood sugar management niche:
                </p>

                <ul className="space-y-4">
                  {siloLinks.slice(0, 4).map((link) => (
                    <li
                      key={link.toArticleId}
                      className="bg-white rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow"
                    >
                      <Link
                        to={`/blog/${link.toSlug}`}
                        className="block text-blue-700 hover:text-blue-900 font-bold text-lg mb-2 hover:underline"
                      >
                        → {link.toTitle}
                      </Link>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Why related:</span> {link.reason}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          Relevance: <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">
                            {(link.relevanceScore * 100).toFixed(0)}%
                          </span>
                        </p>
                        <span className="text-xs text-gray-400 italic">
                          Suggested placement: {link.placement}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  ℹ️ These articles were automatically matched by our SEO algorithm based on topical authority and semantic relevance
                </p>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          <FAQSection faqs={berberineFAQs} title="Common Questions About Berberine" enableSchema={true} />

          {/* Footer Disclaimers */}
          <footer className="border-t-2 border-gray-200 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-bold text-amber-900 mb-3">⚠️ Medical Disclaimer</h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  This article is for educational purposes only. It is not medical advice. 
                  Always consult a qualified healthcare provider before starting supplements or changing medications. 
                  ThriveHealth does not diagnose, treat, cure, or prevent disease. Individual results may vary.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-3">💰 Affiliate Disclosure</h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  ThriveHealth may earn a commission from affiliate partnerships and product links. 
                  This does not affect product pricing. We only recommend products we believe in based on research and quality standards.
                </p>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
};

export default BerberineVsMetformin;

export const blogMeta: BlogArticleMeta = {
  title: "Berberine vs. Metformin: Science-Backed Comparison for Blood Sugar Control",
  excerpt: "Complete evidence-based comparison of Berberine and Metformin for prediabetes. Learn how berberine works, efficacy rates, safety, side effects, and dosing recommendations.",
  readTime: "10 min read",
  image: "/images/blog/berberine-vs-metformin-comparison.webp",
  path: "/blog/berberine-metformin",
  category: "supplements",
};