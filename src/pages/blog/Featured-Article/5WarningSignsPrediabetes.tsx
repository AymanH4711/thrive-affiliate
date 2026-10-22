// src/pages/blog/Featured-Article/5WarningSignsPrediabetes.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Plus,
  Minus,
  Printer,
  Droplets,
  Battery,
  Eye,
  User
} from 'lucide-react';
import { SEO } from "@/components/seo/SEO";
import type { BlogArticleMeta } from "@/data/types";
import { DownloadModal } from "@/components/DownloadModal";

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

// Research Citations with PubMed links – only those cited in the blog text
const citations = [
  {
    authors: 'Knowler, W. C., Barrett-Connor, E., Fowler, S. E., Hamman, R. F., Lachin, J. M., Walker, E. A., Nathan, D. M., & Diabetes Prevention Program Research Group',
    year: 2002,
    title: 'Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin',
    journal: 'New England Journal of Medicine',
    volume: '346',
    issue: '6',
    pages: '393–403',
    pmid: '11832527',
    doi: '10.1056/NEJMoa012512',
    url: 'https://pubmed.ncbi.nlm.nih.gov/11832527/'
  },
  {
    authors: 'American Diabetes Association',
    year: 2024,
    title: 'Standards of care in diabetes—2024',
    journal: 'Diabetes Care',
    volume: '47',
    issue: 'Suppl. 1',
    pages: 'S1–S350',
    doi: '10.2337/dc24-SINT',
    url: 'https://doi.org/10.2337/dc24-SINT'
  },
  {
    authors: 'Centers for Disease Control and Prevention',
    year: 2024,
    title: 'National Diabetes Statistics Report',
    journal: 'CDC Website',
    url: 'https://www.cdc.gov/diabetes/data/statistics-report/'
  },
  {
    authors: 'González-Saldivar, G., & Rodríguez-Gutiérrez, R.',
    year: 2017,
    title: 'Skin manifestations of insulin resistance: From a biochemical stance to a clinical diagnosis and management',
    journal: 'Dermatology and Therapy',
    volume: '7',
    issue: '1',
    pages: '1–12',
    doi: '10.1007/s13555-016-0160-3',
    url: 'https://doi.org/10.1007/s13555-016-0160-3'
  },
  {
    authors: 'Radu, A. M., Carsote, M., Dumitrascu, M. C., & Sandru, F.',
    year: 2022,
    title: 'Acanthosis nigricans: Pointer of endocrine entities',
    journal: 'Diagnostics',
    volume: '12',
    issue: '10',
    pages: '2519',
    doi: '10.3390/diagnostics12102519',
    url: 'https://doi.org/10.3390/diagnostics12102519'
  },
  {
    authors: 'Marta, O. F. D., Pratama, S. A., Al Baqi, S., Essing, F. P., Kurniawan, R., Chiu, H. Y., Hasan, F., & Romadlon, D. S.',
    year: 2025,
    title: 'Fatigue, sleep, and mental health as hidden predictors of prediabetes in undergraduate students: A cross-sectional study',
    journal: 'Science of Diabetes Self-Management and Care',
    volume: '51',
    issue: '4',
    pages: '415–424',
    doi: '10.1177/26350106251350634',
    pmid: '40652364',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40652364/'
  }
];

// Interactive FAQ Data
const faqs = [
  {
    question: "Can prediabetes be reversed?",
    answer: "Yes. Research shows that many people can meaningfully improve or reverse prediabetes with sustained lifestyle changes. The landmark Diabetes Prevention Program (DPP) found a 58% reduction in progression to Type 2 diabetes through diet and exercise — and some follow-up studies show even higher rates of blood sugar normalisation. The key is early intervention."
  },
  {
    question: "How long does it take to reverse prediabetes?",
    answer: "Many people see measurable improvement within 3-6 months of consistent lifestyle changes. The size of the change varies from person to person."
  },
  {
    question: "Do I need medication for prediabetes?",
    answer: "Not necessarily. For many people, lifestyle changes (diet, exercise, sleep, stress management) are at least as effective as medication for prediabetes. Consult your doctor for personalized advice."
  },
  {
    question: "What tests do I need for prediabetes?",
    answer: "The two standard screening tests are Fasting Glucose (100-125 mg/dL = prediabetes) and A1C (5.7%-6.4% = prediabetes). Fasting insulin is sometimes used as an insulin-resistance marker, but it is not used to diagnose prediabetes and reference ranges vary by lab."
  },
  {
    question: "Can I have prediabetes without symptoms?",
    answer: "Absolutely. Over 80% of people with prediabetes don't know they have it because symptoms can be subtle or absent. That's why testing is crucial even if you feel fine."
  },
  {
    question: "What's the difference between prediabetes and Type 2 diabetes?",
    answer: "Prediabetes means blood sugar is elevated but not yet in the diabetes range. It's reversible. Type 2 diabetes is more advanced and requires more intensive management, though still manageable."
  },
  {
    question: "Are supplements helpful for prediabetes?",
    answer: "Some supplements have been studied for blood sugar support, but evidence varies and they can interact with medications. Talk to your healthcare provider before starting any supplement; diet, exercise, and sleep remain the foundation."
  },
  {
    question: "How often should I get tested?",
    answer: "If you have prediabetes, test every 6-12 months, or more often if you're actively working on lifestyle changes and your doctor recommends closer monitoring. If you're at risk but haven't been diagnosed, annual testing is recommended, especially if over 45."
  }
];

// Image URL - Updated to use a reliable fallback
const heroImage = '/images/blog/5-warning-signs-cover.webp';

// Internal Links
const internalLinks = {
  pillar: '/prediabetes-support',
  silo: '/blog/prediabetes-vs-type2-diabetes'
};

// Canonical site URL. index.html and SEO.tsx both use the .org domain, so the
// schema below does the same instead of pointing at a different host.
const SITE_URL = 'https://thrivehealth360.org';
const PUBLISHED_DATE = '2026-03-29';
const LAST_UPDATED = '2026-10-20';

type RiskLevel = {
  level: 'Low' | 'Moderate' | 'High';
  color: string;
  bg: string;
  border: string;
};

const getRiskLevel = (count: number): RiskLevel => {
  if (count <= 1) {
    return { level: 'Low', color: 'text-green-800', bg: 'bg-green-50', border: 'border-green-700' };
  }
  if (count <= 3) {
    return { level: 'Moderate', color: 'text-yellow-800', bg: 'bg-yellow-50', border: 'border-yellow-700' };
  }
  return { level: 'High', color: 'text-red-800', bg: 'bg-red-50', border: 'border-red-700' };
};

// Static schema — kept out of the component so re-renders don't rewrite <head>.
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '5 Warning Signs of Prediabetes (And What to Do About It)',
  description: "Learn the 5 early warning signs of prediabetes you shouldn't ignore. Recognize fatigue, thirst, vision changes, slow healing & dark patches. Get tested today.",
  datePublished: PUBLISHED_DATE,
  dateModified: LAST_UPDATED,
  author: {
    '@type': 'Organization',
    name: 'ThriveHealth360',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/brand/logo.svg`
    },
    url: SITE_URL
  },
  publisher: {
    '@type': 'Organization',
    name: 'ThriveHealth360',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/brand/logo.svg`
    }
  },
  mainEntity: {
    '@type': 'MedicalCondition',
    name: 'Prediabetes',
    code: {
      '@type': 'MedicalCode',
      codeValue: 'R73.03',
      codingSystem: 'ICD-10'
    }
  },
  image: `${SITE_URL}${heroImage}`,
  url: `${SITE_URL}/blog/5-warning-signs-of-prediabetes`
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const FiveWarningSignsPrediabetes = () => {
  // FAQ Accordion State — keyed by question text so filtering can't desync it.
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  // Sign Checklist State
  const [checkedSigns, setCheckedSigns] = useState<boolean[]>([false, false, false, false, false]);

  // Download Modal State
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Risk Assessment Animation State
  const [previousRiskLevel, setPreviousRiskLevel] = useState<RiskLevel | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimer = useRef<number | null>(null);

  // Hero image fallback
  const [heroSrc, setHeroSrc] = useState(heroImage);

  // FAQ Search State
  const [faqFilter, setFaqFilter] = useState('');

  // Clear the animation timer if the page unmounts mid-transition.
  useEffect(() => {
    return () => {
      if (animationTimer.current !== null) {
        window.clearTimeout(animationTimer.current);
      }
    };
  }, []);

  // Filter FAQs based on search term
  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqFilter.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqFilter.toLowerCase())
  );

  const checkedCount = checkedSigns.filter(Boolean).length;
  const riskLevel = getRiskLevel(checkedCount);

  const toggleFAQ = (question: string) => {
    setExpandedFAQ(prev => (prev === question ? null : question));
  };

  const toggleSign = (index: number) => {
    // Capture the level before this change so the UI can show the transition.
    setPreviousRiskLevel(getRiskLevel(checkedCount));
    setCheckedSigns(prev => prev.map((checked, i) => (i === index ? !checked : checked)));
    setIsAnimating(true);

    if (animationTimer.current !== null) {
      window.clearTimeout(animationTimer.current);
    }
    animationTimer.current = window.setTimeout(() => setIsAnimating(false), 600);
  };

  const handleImageError = () => {
    setHeroSrc('/images/prediabetes-support-hero-thumb-og.webp');
  };

  return (
    <>
      <SEO
        title="5 Warning Signs of Prediabetes (And What to Do About It)"
        description="Learn the 5 early warning signs of prediabetes you shouldn't ignore. Recognize fatigue, thirst, vision changes, slow healing & dark patches. Get tested today."
        keywords="prediabetes warning signs, prediabetes symptoms, signs of prediabetes, early warning signs diabetes, prediabetes reversal"
        image={heroImage}
        url="/blog/5-warning-signs-of-prediabetes"
        pillarId="prediabetes"
        schema={schemaMarkup}
      />
      
      <main className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <nav aria-label="Article navigation" className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Back to Blog
              </Link>
              
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden md:inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200"
                title="Print this article"
              >
                <Printer className="w-4 h-4 mr-2" aria-hidden="true" />
                Print Article
              </button>
            </div>
          </div>
        </nav>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header */}
          <header className="mb-12 pb-8 border-b-2 border-gray-200">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-4">
              Prediabetes Support
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              5 Warning Signs of <span className="text-emerald-600">Prediabetes</span> (And What to Do About It)
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>ThriveHealth360 Team</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Last updated October 20, 2026</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800">
                ✅ Evidence-Based
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800">
                🔬 {citations.length} Verified References
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800">
                🏥 PubMed & CrossRef Sourced
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-purple-100 text-purple-800">
                📋 Peer-Reviewed Data
              </span>
            </div>
            
            {/* Medical Disclaimer - Top */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-amber-900 mb-2">Medical Disclaimer</p>
                  <p className="text-sm text-amber-800">
                    This article is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.
                    <strong> Do not stop or change any medications without consulting your healthcare provider.</strong>
                    If you are experiencing these symptoms, consult with a healthcare provider for proper diagnosis and personalized treatment recommendations.
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="mb-12">
            <img
              src={heroSrc}
              alt="5 warning signs of prediabetes infographic showing fatigue, thirst, vision changes, slow healing, and skin patches"
              className="w-full rounded-xl shadow-lg"
              width={1200}
              height={675}
              loading="eager"
              onError={handleImageError}
            />
            <figcaption className="text-center text-sm text-gray-600 mt-4">
              Recognizing these 5 warning signs early can help you reverse prediabetes before it progresses.
            </figcaption>
          </figure>

          {/* Opening Hook */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If you're struggling with persistent fatigue, increased thirst, or other subtle changes in how you feel,
              you might be ignoring your body's warning signals. Nearly 98 million American adults have prediabetes,
              and most don't even know it. The tricky part? Many people have NO symptoms at all.
              This is why we call it the "silent" condition.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              But your body IS sending signals. You just need to know what to listen for.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In this article, you'll learn the 5 warning signs your body may send before prediabetes becomes Type 2
              diabetes—and what those signs actually mean. More importantly, you'll learn that prediabetes can often
              be improved or reversed with the right approach.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 text-sm">
              Looking for the complete list? Our{' '}
              <Link to="/prediabetes-signs" className="text-emerald-700 font-semibold underline">
                full prediabetes signs guide
              </Link>{' '}
              covers all 10 warning signs with detailed clinical explanations.
            </div>
            {/* Pillar Link - First 2 Paragraphs */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <p className="text-emerald-800">
                <strong>The good news?</strong> We've created an{' '}
                <Link to={internalLinks.pillar} className="text-emerald-700 hover:text-emerald-800 font-semibold underline">
                  evidence-informed 5-step approach to reverse prediabetes →
                </Link>{' '}
                designed to help you bring your blood sugar back toward normal. But first, let's identify whether YOU have these warning signs.
              </p>
            </div>
          </section>

          {/* Quick Summary Box */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-12">
            <h2 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" /> QUICK SUMMARY
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">The 5 Warning Signs:</h3>
                <ul className="space-y-2 text-emerald-800">
                  <li>1. Increased thirst & frequent urination</li>
                  <li>2. Unexplained fatigue & low energy</li>
                  <li>3. Blurred vision or vision changes</li>
                  <li>4. Slow-healing cuts or infections</li>
                  <li>5. Dark patches of skin (acanthosis nigricans)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Key Lab Numbers:</h3>
                <ul className="space-y-2 text-emerald-800">
                  <li>• Fasting glucose: 100-125 mg/dL = Prediabetes</li>
                  <li>• A1C: 5.7%-6.4% = Prediabetes</li>
                  <li>• Fasting insulin: an insulin-resistance marker; ranges vary by lab</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-emerald-200">
                  <p className="text-emerald-800 text-sm">
                    <strong>CRITICAL:</strong> Nearly 98 million Americans have prediabetes—most don't know it
                  </p>
                  <p className="text-emerald-800 text-sm">
                    <strong>GOOD NEWS:</strong> Research shows many people can improve or reverse prediabetes with sustained lifestyle changes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
            <h2 className="font-bold text-blue-900 mb-4">Quick Navigation</h2>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-blue-800">
              <li><a href="#understanding" className="hover:underline">↓ Understanding Prediabetes</a></li>
              <li><a href="#sign-1" className="hover:underline">↓ Sign 1: Thirst & Urination</a></li>
              <li><a href="#sign-2" className="hover:underline">↓ Sign 2: Fatigue & Energy</a></li>
              <li><a href="#sign-3" className="hover:underline">↓ Sign 3: Vision Changes</a></li>
              <li><a href="#sign-4" className="hover:underline">↓ Sign 4: Slow Healing</a></li>
              <li><a href="#sign-5" className="hover:underline">↓ Sign 5: Dark Skin Patches</a></li>
              <li><a href="#lab-numbers" className="hover:underline">↓ Lab Numbers That Matter</a></li>
              <li><a href="#action-plan" className="hover:underline">↓ 5-Step Action Plan</a></li>
              <li><a href="#faq" className="hover:underline">↓ FAQ & Answers</a></li>
            </ul>
          </nav>

          {/* Understanding Prediabetes Section */}
          <section id="understanding" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Understanding Prediabetes: Your Body's Early Warning System
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Before we dive into the specific warning signs, let's understand what's actually happening in your body. 
              Prediabetes occurs when your blood glucose (blood sugar) levels are higher than normal but not yet high enough 
              to be classified as Type 2 diabetes. This condition develops gradually, often over several years, which is why 
              recognizing the early signals becomes so crucial for intervention.
            </p>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-indigo-900 mb-3">What is Insulin Resistance?</h3>
              <p className="text-indigo-800 mb-3">
                <strong>Insulin resistance</strong> is at the core of prediabetes. Think of it this way: your cells aren't 
                listening to insulin anymore—like turning up the volume on a speaker nobody can hear. Your pancreas produces 
                insulin to help glucose enter your cells, but when cells become resistant to insulin's signals, glucose builds 
                up in your bloodstream instead of being used for energy.
              </p>
              <p className="text-indigo-800">
                This process, called <strong>glucose metabolism</strong> (how your body processes and uses sugar—the engine 
                that keeps your cells running), is the foundation of prediabetes development.
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              According to the American Diabetes Association (2024), citing CDC data, approximately 98 million American
              adults aged 18 and older have prediabetes—that's more than 1 in 3 adults. Even more concerning? Of those with
              prediabetes, more than 80% don't know they have it. This is precisely why understanding the warning signs
              becomes your first line of defense.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-green-800 mb-2">
                <strong>The evidence is strong:</strong> early intervention dramatically improves outcomes. A landmark study
                published in the New England Journal of Medicine demonstrated that lifestyle modifications reduce the
                progression from prediabetes to Type 2 diabetes by 58%—far exceeding metformin alone (Knowler et al., 2002).
              </p>
              <p className="text-green-800 text-sm">
                The DPP followed participants for about three years. Longer-term outcomes depend on maintaining those changes.
              </p>
            </div>
          </section>

          {/* The 5 Warning Signs Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              The 5 Warning Signs Your Body Sends
            </h2>

            {/* Sign #1 */}
            <div id="sign-1" className="mb-12 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-gray-900">Sign #1: Increased Thirst & Frequent Urination</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-3">Why It Happens</h4>
                  <p className="text-blue-800 mb-3">
                    When high blood glucose forces your kidneys to work harder, a cascade of events begins. Your glucose 
                    (blood sugar) rises above normal, and your kidneys try to filter out the excess. This pulls water from 
                    your tissues, making you feel thirsty.
                  </p>
                  <p className="text-blue-800">
                    In medical terms, this is called <strong>polydipsia</strong> (excessive thirst) and <strong>polyuria</strong> (frequent urination).
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-purple-900 mb-3">What This Means for You</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li>• You're thirsty even after drinking water</li>
                    <li>• You urinate more frequently, especially at night</li>
                    <li>• You might wake up 2-3 times per night (nocturia)</li>
                    <li>• You notice your water intake has significantly increased</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-green-900 mb-3">The Research Behind This Sign</h4>
                <p className="text-green-800 mb-3">
                  Increased thirst and urination are well-documented in the broader diabetes literature: when blood glucose
                  rises high enough, the kidneys can't reabsorb it all, so excess glucose spills into the urine and pulls
                  water with it — a process called osmotic diuresis. This causes more frequent urination, which in turn
                  triggers increased thirst as the body works to stay hydrated. This mechanism is well-established for
                  diabetes; in prediabetes specifically, these symptoms are typically milder and less consistent, since
                  glucose elevations haven't yet crossed the threshold where significant amounts spill into urine.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-emerald-900 mb-3">Your Action Step</h4>
                <p className="text-emerald-800">
                  Track your water intake and bathroom frequency for one week. If you notice a clear, persistent increase
                  from your normal pattern, mention it to your doctor. Schedule a{' '}
                  <strong>fasting glucose test</strong>—the cost is typically $20-50 at most labs, and it provides your
                  critical baseline numbers. These symptoms have many possible causes, so this is a reason to get
                  checked—not a diagnosis.
                </p>
              </div>
            </div>

            {/* Sign #2 */}
            <div id="sign-2" className="mb-12 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Battery className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-gray-900">Sign #2: Unexplained Fatigue & Low Energy</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-3">Why It Happens</h4>
                  <p className="text-blue-800 mb-3">
                    <strong>Insulin resistance</strong> prevents your cells from using glucose efficiently. Imagine having 
                    a full gas tank but a broken fuel pump—your body has plenty of fuel (glucose) circulating, but it can't 
                    get inside the cells where it's needed.
                  </p>
                  <p className="text-blue-800">
                    Without adequate fuel, your muscles, brain, and organs simply can't function optimally, leaving you exhausted.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-purple-900 mb-3">What This Means for You</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li>• The infamous 2-3pm energy crash hits hard—even after coffee</li>
                    <li>• You feel exhausted despite getting adequate sleep (7-8 hours)</li>
                    <li>• Difficulty concentrating, especially in the afternoon</li>
                    <li>• Reduced motivation for exercise or activities you once enjoyed</li>
                    <li>• Brain fog that makes decision-making feel harder than usual</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-green-900 mb-3">The Research Behind This Sign</h4>
                <p className="text-green-800">
                  Fatigue is increasingly recognized as a feature of prediabetes. A 2025 cross-sectional study of young
                  adults found that fatigue, sleep problems, and mental health symptoms were associated with prediabetes
                  (Marta et al., 2025). This doesn't prove that fatigue causes prediabetes—or vice versa—but it supports
                  treating persistent exhaustion as a signal worth investigating.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-emerald-900 mb-3">Your Action Step</h4>
                <p className="text-emerald-800">
                  Track your energy levels throughout the day for one week, noting when energy crashes occur. Keep a simple 
                  journal: "Energy level 1-10 at 9am, 12pm, 3pm, 6pm." If you notice consistent patterns of afternoon crashes 
                  or persistent low energy despite adequate sleep, this is another signal to discuss with your healthcare provider.
                </p>
              </div>
            </div>

            {/* Sign #3 */}
            <div id="sign-3" className="mb-12 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-gray-900">Sign #3: Blurred Vision or Vision Changes</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-3">Why It Happens</h4>
                  <p className="text-blue-800 mb-3">
                    High blood sugar causes the lens of your eye to swell, which disrupts your ability to focus. This isn't 
                    an eye disease—it's your glucose levels affecting the clarity of your vision.
                  </p>
                  <p className="text-blue-800">
                    The lens of your eye is extremely sensitive to changes in fluid balance, and elevated glucose draws water 
                    into this structure, changing its shape and focusing ability.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-purple-900 mb-3">What This Means for You</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Subtle blurring, especially of distant objects</li>
                    <li>• Vision that fluctuates throughout the day (clearer in morning, blurrier after meals)</li>
                    <li>• Usually painless—which can make it easy to overlook</li>
                    <li>• You might need new glasses more frequently than expected</li>
                    <li>• Difficulty driving at night due to increased blur</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-green-900 mb-3">The Research Behind This Sign</h4>
                <p className="text-green-800">
                  While diabetic retinopathy typically occurs in established diabetes, temporary vision changes can also
                  occur when blood sugar rises. Elevated glucose can cause the eye's lens to swell, leading to blurry
                  vision that often improves once glucose levels return to normal.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-emerald-900 mb-3">Your Action Step</h4>
                <p className="text-emerald-800">
                  If you've noticed gradual vision changes or find yourself getting new glasses prescriptions more frequently, 
                  this warrants a conversation with your doctor about your glucose levels. Schedule a comprehensive eye exam 
                  and mention your concerns about blood sugar to both your eye doctor and primary care physician.
                </p>
              </div>
            </div>

            {/* Sign #4 */}
            <div id="sign-4" className="mb-12 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-gray-900">Sign #4: Slow-Healing Cuts, Sores, or Bruises</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-3">Why It Happens</h4>
                  <p className="text-blue-800 mb-3">
                    Elevated blood sugar over time can impair circulation and damage small blood vessels, reducing blood
                    flow to wound sites. It can also impair nerve function and slow your immune system's response.
                  </p>
                  <p className="text-blue-800">
                    Additionally, elevated glucose can interfere with <strong>collagen production</strong>—the protein essential
                    for wound healing. Think of collagen as the scaffolding your body builds to repair damaged tissue.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-purple-900 mb-3">What This Means for You</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Small cuts may take noticeably longer than usual to heal</li>
                    <li>• Increased frequency of infections</li>
                    <li>• Bruises that take much longer to fade than they used to</li>
                    <li>• Gum bleeding when flossing or brushing</li>
                    <li>• Minor skin irritations that linger</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-green-900 mb-3">The Research Behind This Sign</h4>
                <p className="text-green-800">
                  Impaired wound healing is a well-established feature of elevated blood glucose, though the strongest
                  evidence comes from diabetes rather than prediabetes specifically. The proposed mechanisms include
                  impaired white blood cell function, reduced collagen cross-linking, and compromised microcirculation
                  — all of which are plausible at the milder glucose elevations seen in prediabetes, though the degree of
                  effect at that earlier stage is less well quantified in the research than it is for diagnosed diabetes.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-red-900 mb-3">⚠️ Red Flag Warning</h4>
                <p className="text-red-800">
                  If you have a small cut or sore that hasn't begun healing within two weeks, or shows signs of infection
                  (increasing redness, swelling, warmth, or pus), get it checked. Don't dismiss a wound that isn't healing
                  as "just getting older"—bring it to a clinician's attention.
                </p>
              </div>
            </div>

            {/* Sign #5 */}
            <div id="sign-5" className="mb-12 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-gray-900">Sign #5: Dark Patches of Skin (Acanthosis Nigricans)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-3">Why It Happens</h4>
                  <p className="text-blue-800 mb-3">
                    <strong>Acanthosis nigricans</strong> is one of the most visually distinctive signs of insulin resistance. 
                    When insulin levels remain elevated, insulin-like growth factor receptors in the skin become overstimulated, 
                    causing skin cells to multiply rapidly.
                  </p>
                  <p className="text-blue-800">
                    This creates dark, velvety patches, most commonly appearing on the neck, armpits, groin, and under the breasts.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-purple-900 mb-3">What This Means for You</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Velvet-like texture to the skin (not rough or scaly)</li>
                    <li>• Dark brown to black discoloration</li>
                    <li>• Usually appears gradually over months to years</li>
                    <li>• Typically non-itchy (unlike fungal infections)</li>
                    <li>• May have a slight odor due to moisture in skin folds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-green-900 mb-3">The Research Behind This Sign</h4>
                <p className="text-green-800">
                  Research on skin manifestations of insulin resistance suggests that a large proportion of people with
                  acanthosis nigricans have underlying insulin resistance (González-Saldivar &amp; Rodríguez-Gutiérrez, 2017;
                  Radu et al., 2022). This makes it a strong visual clue to metabolic dysfunction.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-emerald-900 mb-3">Your Action Step</h4>
                <p className="text-emerald-800">
                  If you've noticed dark patches appearing on your neck, armpits, or other areas, this is a strong signal 
                  to get tested immediately. Many people mistake this condition for dirt, staining, or poor hygiene—it's 
                  neither. The patches won't wash off and won't respond to exfoliation. A simple blood test can confirm 
                  whether insulin resistance is the cause.
                </p>
              </div>
            </div>

            {/* Silo Link - Mid-Article */}
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
              <p className="text-indigo-800">
                <strong>Now that you know the signs,</strong> you might be wondering: "Could I have Type 2 diabetes instead?"{' '}
                <Link to={internalLinks.silo} className="text-indigo-600 hover:text-indigo-800 font-semibold underline">
                  Here's how prediabetes and Type 2 are different →
                </Link>
              </p>
            </div>
          </section>

          {/* Lab Numbers Section */}
          <section id="lab-numbers" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Lab Numbers That Matter
            </h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
              <p className="text-amber-800">
                <strong>Key Insight:</strong> Many people have NO symptoms but still have prediabetes. That's why testing 
                is crucial. You might feel perfectly fine and still have prediabetes. This is the "silent" part that makes 
                it dangerous. Testing is the only way to know for certain where you stand.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Three Tests to Discuss With Your Doctor:</h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-300">
                <caption className="sr-only">
                  Blood glucose and insulin test ranges, with approximate U.S. self-pay costs
                </caption>
                <thead>
                  <tr className="bg-gray-100">
                    <th scope="col" className="border border-gray-300 p-3 text-left font-bold">Test</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-bold">Normal Range</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-bold">Prediabetes Range</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-bold">Diabetes Range</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-bold">Approx. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="border border-gray-300 p-3 text-left font-normal">
                      <strong>Fasting Glucose</strong>
                      <p className="text-xs text-gray-600 mt-1">After 8-hour fast</p>
                    </th>
                    <td className="border border-gray-300 p-3">70-99 mg/dL</td>
                    <td className="border border-gray-300 p-3 text-yellow-800 font-semibold">100-125 mg/dL</td>
                    <td className="border border-gray-300 p-3 text-red-700 font-semibold">126+ mg/dL</td>
                    <td className="border border-gray-300 p-3">$10-30</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <th scope="row" className="border border-gray-300 p-3 text-left font-normal">
                      <strong>A1C (HbA1c)</strong>
                      <p className="text-xs text-gray-600 mt-1">3-month average</p>
                    </th>
                    <td className="border border-gray-300 p-3">&lt;5.7%</td>
                    <td className="border border-gray-300 p-3 text-yellow-800 font-semibold">5.7-6.4%</td>
                    <td className="border border-gray-300 p-3 text-red-700 font-semibold">6.5%+</td>
                    <td className="border border-gray-300 p-3">$10-30</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-gray-300 p-3 text-left font-normal">
                      <strong>Fasting Insulin</strong>
                      <p className="text-xs text-gray-600 mt-1">Insulin-resistance marker</p>
                    </th>
                    <td className="border border-gray-300 p-3">Lab-specific</td>
                    <td className="border border-gray-300 p-3 text-gray-600">Not used to diagnose prediabetes</td>
                    <td className="border border-gray-300 p-3 text-gray-600">Not used to diagnose diabetes</td>
                    <td className="border border-gray-300 p-3">$20-50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Diagnostic thresholds: American Diabetes Association. Standards of Care in Diabetes—2024.{' '}
              <em>Diabetes Care</em>. 2024;47(Suppl 1). Cost figures are approximate U.S. self-pay estimates and vary
              by lab and location. Fasting insulin is not part of the ADA diagnostic criteria; reference ranges vary by lab.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-800 mb-3">
                <strong>The A1C test</strong> is particularly valuable because it reflects your average blood glucose over 
                approximately three months, rather than a single moment in time. This provides a more stable picture of your 
                glucose metabolism (how your body processes and uses sugar—the engine that keeps your cells running).
              </p>
              <p className="text-blue-800">
                Some clinicians recommend all three tests because they provide different pieces of the metabolic picture.
                Fasting glucose tells you your current state, A1C shows your average over time, and fasting insulin can
                reveal how hard your pancreas is working to manage glucose. Fasting insulin is not used to diagnose
                prediabetes, and its reference range varies by lab.
              </p>
            </div>
          </section>

          {/* 🟢 CTA #1 – MID-ARTICLE (50% Mark) */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8 rounded-2xl text-center shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Ready to Take Action? Here's Your Next Step</h2>
              <p className="text-lg mb-6 opacity-90">
                If you recognize ANY of these signs—or if you have a family history of diabetes—don't wait for a diagnosis to act.
              </p>
              
              <div className="bg-emerald-900/40 backdrop-blur-sm border border-white/20 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-4">THE 7-DAY BLOOD SUGAR RESET GUIDE includes:</h3>
                <div className="grid md:grid-cols-2 gap-3 text-left">
                  <p className="flex items-center gap-2">✓ Exact meal plan (no guessing, no restriction)</p>
                  <p className="flex items-center gap-2">✓ Supplement timing protocol</p>
                  <p className="flex items-center gap-2">✓ Daily glucose tracking sheets</p>
                  <p className="flex items-center gap-2">✓ Simple 10-minute movement routine</p>
                  <p className="flex items-center gap-2">✓ Sleep & stress protocol</p>
                </div>
              </div>
              
              <p className="mb-6 opacity-90">
                This free guide covers the key steps to help you take control of your blood sugar before it progresses further.
              </p>
              
              <button
                type="button"
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition shadow-md text-lg"
              >
                Download Your Free Guide
              </button>
              
              <p className="mt-4 text-sm opacity-75">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </section>

          {/* Action Plan Section */}
          <section id="action-plan" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Your Action Plan: 5 Steps Starting Today
            </h2>

            {/* Interactive Risk Assessment */}
            <div className="bg-gray-50 border border-gray-300 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Recognize the Signs (You're doing this now!)</h3>
              <p className="text-gray-700 mb-4">Go back through the five warning signs above. Check off which ones you experience:</p>
              
              <fieldset className="mb-6">
                <legend className="sr-only">Warning signs you are experiencing</legend>
                <div className="space-y-3">
                  {[
                    'Increased thirst and frequent urination',
                    'Unexplained fatigue and energy crashes',
                    'Blurred vision or vision changes',
                    'Slow-healing cuts or infections',
                    'Dark patches of skin (acanthosis nigricans)'
                  ].map((sign, index) => (
                    <label key={sign} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkedSigns[index]}
                        onChange={() => toggleSign(index)}
                        className="w-5 h-5 accent-emerald-600 rounded focus:ring-2 focus:ring-emerald-500"
                      />
                      <span className="text-gray-700">{sign}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'scale-105' : 'scale-100'} ${riskLevel.bg} border-l-4 ${riskLevel.border} p-4 rounded-r-lg`}>
                <p aria-live="polite" className={`font-bold transition-colors duration-500 ${riskLevel.color}`}>
                  {checkedCount === 0
                    ? 'No signs checked yet.'
                    : `${checkedCount} of 5 signs checked — ${riskLevel.level} symptom burden`}
                  {isAnimating && previousRiskLevel && previousRiskLevel.level !== riskLevel.level && (
                    <span className="ml-2 text-sm opacity-75">
                      (was {previousRiskLevel.level})
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  0–1 signs = Low | 2–3 signs = Moderate | 4–5 signs = High symptom burden
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  This checklist is not a validated risk score or a diagnosis. Many people with prediabetes have no
                  symptoms at all, so only a blood test can confirm your blood sugar status. If you have a family
                  history of diabetes or are over 45, proactive testing is still recommended.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 2: Get Tested (This Week)</h3>
              <p className="text-gray-700 mb-3">Contact your doctor and schedule fasting glucose and A1C tests. Here's what to expect:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Cost: Usually covered by insurance; $30-60 out of pocket</li>
                <li>• Fasting required: No food for 8-10 hours before test</li>
                <li>• The actual blood draw takes less than 5 minutes</li>
                <li>• Results typically available within 24-48 hours</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Armed with your numbers, you'll have a clear baseline to measure your progress against.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 3: Download Your Reset Guide (Today)</h3>
              <p className="text-gray-700 mb-4">
                Get the free 7-Day Blood Sugar Reset. It's designed to help you build momentum in the first week;
                individual results vary.
              </p>
              <button
                type="button"
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
              >
                Download the Free Guide
              </button>
            </div>

            {/* Step 4 */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 4: Follow Our 5-Step Reversal Plan (Starting This Week)</h3>

              <h4 className="font-bold text-gray-900 mb-3">The 5-Step Protocol:</h4>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Optimize your diet (reduce processed carbohydrates, increase fiber intake)</li>
                <li>Add movement (even 10-minute walks after meals make a significant difference)</li>
                <li>Monitor glucose (know your numbers through regular testing)</li>
                <li>Consider supplements (discuss any supplement with your healthcare provider first)</li>
                <li>Improve sleep and stress management (both significantly impact glucose metabolism)</li>
              </ol>
              <p className="text-gray-700 mt-3">
                <strong>Timeline:</strong> Many people see measurable improvement within 3-6 months of consistent implementation.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Step 5: Retest After 3 Months (See Your Progress)</h3>
              <p className="text-gray-700 mb-3">Schedule a follow-up A1C test at the 3-month mark:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• You may see measurable improvement</li>
                <li>• The amount of change varies from person to person</li>
                <li>• A stable or improving result is a useful signal about whether your approach is working</li>
                <li>• Adjust your strategy based on results</li>
              </ul>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="mb-12">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                You Have the Power to Change This
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These 5 warning signs are your body's wake-up call. They're not a death sentence—they're an invitation to take action.
              </p>

              <div className="bg-white p-6 rounded-lg mb-6 border-l-4 border-emerald-600">
                <p className="text-gray-700 mb-4">
                  <strong>But here's the encouraging news:</strong> Prediabetes is often reversible.
                  Research suggests that people who follow a comprehensive lifestyle approach can achieve meaningful
                  improvements in blood sugar markers — though timelines vary and most clinical evidence reflects results over
                  3–6 months of sustained effort.
                </p>
                <p className="text-gray-700">
                  The key? Take action now, before prediabetes becomes Type 2 diabetes. Once Type 2 diabetes develops,
                  remission becomes more challenging, though it is still possible with intensive intervention.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-emerald-200">
                <h3 className="font-bold text-gray-900 mb-4">Don't know where to start?</h3>
                <Link
                  to={internalLinks.pillar}
                  className="inline-block bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
                >
                  Start the 5-Step Reversal Plan →
                </Link>
                <p className="text-gray-700 mt-4">
                  This is your complete roadmap—from recognizing the signs to tracking your A1C. Prediabetes doesn't
                  inevitably progress to diabetes, and taking action can improve your numbers. The earlier you start,
                  the more room you have to intervene.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section - Interactive */}
          <section id="faq" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 mb-6">Click any question to reveal the answer:</p>
            
            {/* FAQ Search */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <input
                  type="search"
                  aria-label="Search frequently asked questions"
                  aria-controls="faq-list"
                  placeholder="Search FAQs..."
                  value={faqFilter}
                  onChange={(e) => setFaqFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              {faqFilter && (
                <p aria-live="polite" className="text-sm text-gray-600 mt-2">
                  Showing {filteredFAQs.length} of {faqs.length} FAQs
                </p>
              )}
            </div>
            
            <div id="faq-list" className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, idx) => (
                  <div key={faq.question} className="border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.question)}
                      aria-expanded={expandedFAQ === faq.question}
                      aria-controls={`faq-answer-${idx}`}
                      className="w-full bg-emerald-50 hover:bg-emerald-100 p-4 text-left flex items-center justify-between font-semibold text-gray-900 transition"
                    >
                      <span>{faq.question}</span>
                      {expandedFAQ === faq.question ? (
                        <Minus className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                      ) : (
                        <Plus className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                      )}
                    </button>
                    {expandedFAQ === faq.question && (
                      <div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-label={faq.question}
                        className="bg-white p-4 border-t border-gray-300"
                      >
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-2">No FAQs found matching "{faqFilter}"</p>
                  <button
                    type="button"
                    onClick={() => setFaqFilter('')}
                    className="text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Clinical References Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">References</h2>
            <p className="text-gray-700 mb-6">
              Studies are sourced from peer-reviewed journals, PubMed, and publisher websites. Click the links to view each source directly.
            </p>
            
            <div className="space-y-4">
              {citations.map((citation, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-300 p-4 rounded-lg">
                  <p className="text-gray-800 mb-2">
                    <strong>{citation.authors}</strong> ({citation.year}). "{citation.title}." 
                    <em> {citation.journal}</em>
                    {citation.volume && <span>, {citation.volume}</span>}
                    {citation.issue && <span>({citation.issue})</span>}
                    {citation.pages && <span>, {citation.pages}</span>}.
                  </p>
                  {citation.doi && (
                    <p className="text-sm text-gray-600 mb-2">
                      DOI: <code className="bg-white px-2 py-1 rounded">{citation.doi}</code>
                    </p>
                  )}
                  {citation.pmid && (
                    <p className="text-sm text-gray-600 mb-2">
                      PMID: <code className="bg-white px-2 py-1 rounded">{citation.pmid}</code>
                    </p>
                  )}
                  <a 
                    href={citation.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-emerald-600 hover:text-emerald-800 font-semibold underline"
                  >
                    {citation.pmid ? `View on PubMed (PMID: ${citation.pmid})` : 'View Full Source'} →
                  </a>
                </div>
              ))}

            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="font-bold text-amber-900 mb-2">Medical Disclaimer</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                The information on this page is for educational purposes only and does not constitute medical advice.
                These statements have not been evaluated by the U.S. Food and Drug Administration (FDA).
                No content here is intended to diagnose, treat, cure, or prevent any disease.
                Insulin resistance is a serious metabolic condition — always consult a qualified healthcare provider
                before making significant dietary changes or beginning a new exercise protocol, especially if you are
                taking medications or have an existing health condition. Individual results may vary and reversal is
                not guaranteed.
              </p>
            </div>
          </div>
        </article>
      </main>
      
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </>
  );
};

export default FiveWarningSignsPrediabetes;

export const blogMeta: BlogArticleMeta = {
  title: "5 Warning Signs of Prediabetes (And What to Do About It)",
  excerpt: "Learn the 5 early warning signs of prediabetes you shouldn't ignore. Recognize fatigue, thirst, vision changes, slow healing & dark patches. Get tested today.",
  readTime: "8 min read",
  image: "/images/blog/5-warning-signs-cover.webp",
  path: "/blog/5-warning-signs-of-prediabetes",
  category: "prediabetes",
  featured: true,
};