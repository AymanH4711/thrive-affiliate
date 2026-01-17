import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import DownloadModal from '../components/DownloadModal'; // FIX: Removed braces for default import
import { 
  ArrowRight, 
  Heart, 
  BookOpen, 
  Activity, 
  BarChart3, 
  Moon, 
  Scale, 
  CheckCircle2, 
  Map,
  ShieldCheck,
  Users,
  AlertCircle,
  Download
} from 'lucide-react';

export default function HomePage() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Thrive Health",
    "description": "Natural prediabetes reversal program with science-backed guidance on diet, exercise, supplements, and lifestyle changes",
    "url": "https://thrive-health.com",
    "logo": "https://thrive-health.com/logo.png"
  };

  return (
    <>
      <SEO
        title="Reverse Prediabetes Naturally | Thrive Health"
        description="Discover the proven 5-step plan to reverse prediabetes without medication."
        keywords="reverse prediabetes, blood sugar control"
        url="/"
        type="website"
        schema={schema}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="order-2 md:order-1 md:col-span-2 space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Reverse Your Prediabetes <br />
                <span className="text-emerald-600">In 5 Simple Steps</span>
              </h1>
              <p className="text-lg text-gray-700">A science-backed, natural path to lower A1C.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Link to="/prediabetes-signs" className="inline-flex items-center justify-center px-8 py-4 text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition font-bold">
                  Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-3">
              <img src="/images/hero-lifestyle.jpg" alt="Healthy lifestyle" className="rounded-2xl shadow-2xl object-cover w-full h-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ⚠️ MEDICAL DISCLAIMER */}
      <section className="py-4 bg-amber-50 border-b-2 border-amber-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <p className="text-xs text-amber-800 font-semibold leading-relaxed">
              These statements have not been evaluated by the FDA. Consult with a healthcare provider before starting supplements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 5 PILLARS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-5 gap-6">
          <Link to="/supplements" className="group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600">
              <Scale className="w-6 h-6 text-amber-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-gray-900">Supplements</h3>
          </Link>
          {/* ... other pillars ... */}
        </div>
      </section>

      {/* 🎁 FREE RESOURCE CTA - FIXED MODAL CALL */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Resources</h2>
          <p className="text-lg text-gray-600 mb-8">Download our guides to get started reversing your prediabetes today.</p>
          
          <button 
            type="button"
            onClick={() => setIsDownloadOpen(true)}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-bold text-lg shadow-lg"
          >
            <Download size={20} />
            Download Your Free Guides
          </button>
        </div>
        
        {/* FIX: Changed onClose to setIsOpen to match the component's props */}
        <DownloadModal isOpen={isDownloadOpen} setIsOpen={setIsDownloadOpen} />
      </section>

      {/* 💰 AFFILIATE DISCLOSURE */}
      <section className="py-4 bg-blue-50 border-t-2 border-blue-200">
        <div className="container mx-auto px-4 max-w-4xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
          <p className="text-xs text-blue-800 font-semibold">
            Thrive Health may earn commissions from affiliate partnerships.
          </p>
        </div>
      </section>
    </>
  );
}