import { Clock, AlertCircle, ShieldCheck, ArrowLeft, CheckCircle2, FileText, Leaf, BookOpen } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { CONTACT_CONFIG } from '../config/contact';
import { SEO } from "@/components/seo/SEO";

const TOPIC_TAGS = [
  { icon: Leaf, label: 'Supplement Article Enquiries' },
  { icon: FileText, label: 'Content Corrections' },
  { icon: BookOpen, label: 'Editorial Inquiries' },
  { icon: CheckCircle2, label: 'General Questions' },
];

const RESPONSE_STEPS = [
  { step: '01', title: 'Submit your message', desc: 'Fill out the form with as much detail as you can.' },
  { step: '02', title: 'Confirmation sent', desc: 'You\'ll receive an auto-confirmation to your inbox.' },
  { step: '03', title: 'We respond', desc: 'Our editorial team aims to reply within 2 business days (Mon–Fri, 9AM–5PM GMT). Messages sent Friday or before a public holiday will be answered the next working day.' },
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Initialize EmailJS safely
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    try {
      await emailjs.sendForm(serviceId!, templateId!, formRef.current!);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(`Failed to send message. Please try again later, or email us directly at support@thrivehealth360.com.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact ThriveHealth360 | Editorial & Content Enquiries"
        description="Have questions about our prediabetes content? Contact our editorial team. We typically respond within 2 business days. For medical concerns, always consult a qualified healthcare provider."
        keywords="contact thrive health, diabetes support, prediabetes help, health guide contact"
        image="/images/contact-og.png"
        url="/contact"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Navigation Link */}
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="py-12 md:py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">How Can We Help?</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is dedicated to providing evidence-based information to help you take control of your blood sugar.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-24">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Column 1: Contact Info & Safety */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              {/* ⚠️ Medical Safety Alert */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8 shadow-sm">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1 text-sm">Medical Safety Notice</h4>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      ThriveHealth360 provides general educational content only. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Our team are not licensed medical professionals. Content has not been evaluated by the FDA, MHRA, TGA, or Health Canada and is not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare provider before making any health decisions.
                    </p>
                    <p className="text-xs text-amber-900 font-bold mt-2">
                      🚨 For medical emergencies: call <strong>999</strong> (UK) · <strong>911</strong> (US/CA) · <strong>000</strong> (AU) · or your local emergency number immediately.
                    </p>
                    <Link to="/medical-disclaimer" className="underline font-bold text-amber-900 hover:text-amber-700 text-xs mt-2 inline-block">Full Medical Disclaimer →</Link>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start gap-4 mb-10">
                <Clock className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Support Hours</h3>
                  <p className="text-sm text-gray-600">Mon – Fri: 9:00 AM – 5:00 PM GMT</p>
                  <p className="text-sm text-gray-500 text-xs mt-1">(approx. 4 AM–12 PM EST · 7 PM–3 AM AEST)</p>
                  <p className="text-sm text-gray-400 italic mt-1">Closed weekends & public holidays. We aim to reply within 2 business days.</p>
                </div>
              </div>

              {/* What We Can Help With */}
              <div className="mb-10">
                <h3 className="font-bold text-gray-900 mb-3">What We Can Help With</h3>
                <div className="grid grid-cols-2 gap-3">
                  {TOPIC_TAGS.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm text-sm text-gray-700 font-medium"
                    >
                      <Icon className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-10">
                <h3 className="font-bold text-gray-900 mb-4">How It Works</h3>
                <ol className="space-y-4">
                  {RESPONSE_STEPS.map(({ step, title, desc }) => (
                    <li key={step} className="flex gap-4">
                      <span className="text-2xl font-black text-emerald-100 leading-none select-none">{step}</span>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQ Redirect */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                <h3 className="font-bold text-emerald-900 mb-2">Looking for Quick Answers?</h3>
                <p className="text-sm text-emerald-800 mb-3 leading-relaxed">
                  Our blog covers common questions about blood sugar management, natural supplements, and lifestyle strategies for metabolic health.
                </p>
                <p className="text-xs text-emerald-700 mb-4 leading-relaxed">
                  Note: For questions about prescription medications such as Metformin, please consult your doctor or pharmacist — we provide educational context only and cannot offer medication advice.
                </p>
                <Link to="/blog" className="text-emerald-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Visit the Blog <span>→</span>
                </Link>
              </div>
            </div>

            {/* Column 2: The Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
              <p className="text-sm text-gray-500 mb-6">Use the form below — our editorial team aims to respond within 2 business days (Mon–Fri).</p>
              
              {submitted && (
                <div className="bg-emerald-100 text-emerald-800 p-4 rounded-lg mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-medium">Message received. We'll get back to you shortly!</span>
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6 text-sm border border-red-100">
                  ❌ {error}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-50 focus:border-emerald-600 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-50 focus:border-emerald-600 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-50 focus:border-emerald-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-50 focus:border-emerald-600 transition resize-none"
                    placeholder="How can we assist you today?"
                  />
                </div>

                {/* GDPR / Privacy consent notice — required for UK/EU/AU/CA readers */}
                <p className="text-xs text-gray-500 leading-relaxed border border-gray-100 bg-gray-50 rounded-xl px-4 py-3">
                  By submitting this form, you agree that your name, email address, and message will be processed by ThriveHealth360 and our email delivery provider (<strong>EmailJS</strong>) solely for the purpose of responding to your enquiry. We do not sell or share your data with third parties for marketing. Data is retained only as long as necessary to resolve your enquiry. For full details, see our{' '}
                  <Link to="/privacy-policy" className="underline text-emerald-700 font-semibold hover:text-emerald-600">Privacy Policy</Link>.
                  {' '}UK/EU residents have the right to access, correct, or request deletion of their data under GDPR.
                </p>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-emerald-700 disabled:bg-gray-300 transition-all shadow-lg shadow-emerald-200 active:scale-95"
                >
                  {isLoading ? 'Sending Inquiry...' : 'Send Message'}
                </button>
              </form>

              {/* Trust Signals */}
              <div className="mt-6 flex flex-col items-center gap-2 text-gray-400 text-xs text-center">
                <div className="flex items-center gap-2 uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" />
                  Messages delivered via EmailJS (third-party processor)
                </div>
                <p className="text-gray-400">We do not sell or share your personal information.{' '}
                  <Link to="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}