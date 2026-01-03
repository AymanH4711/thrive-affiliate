import { Mail, Clock } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_CONFIG } from '../config/contact';
import { SEO } from '../components/SEO';

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

  // ✅ Initialize EmailJS safely on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS Public Key is missing! Check your .env file');
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
    setSubmitted(false);

    // ✅ Validate environment variables before sending
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const missing = [];
      if (!serviceId) missing.push('Service ID');
      if (!templateId) missing.push('Template ID');
      if (!publicKey) missing.push('Public Key');
      setError(`Missing config: ${missing.join(', ')}. Check .env file.`);
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!);
      
      // Success
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err: any) {
      // Enhanced error handling
      console.error('Full EmailJS error:', err);
      let errorMsg = 'Failed to send message. Please try again.';
      if (err.status === 400) {
        errorMsg = 'Invalid Template ID. Check your .env file and EmailJS dashboard.';
      } else if (err.text?.includes('template')) {
        errorMsg = 'Template ID mismatch. Verify the ID in EmailJS Settings.';
      }
      errorMsg += ` Or email us directly: ${CONTACT_CONFIG.email}`;
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Thrive Health | Get In Touch"
        description="Have questions about reversing prediabetes? Contact our support team. Available Mon-Fri 9AM-5PM EST. We'll respond within 24 hours to your inquiry."
        keywords="contact thrive health, customer support, health coaching contact, get in touch"
        image="/images/contact-og.png"
        url="/contact"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-emerald-100">We're here to help with any questions about your blood sugar journey</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              {/* Email */}
              <div className="flex items-start space-x-4 mb-8">
                <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-emerald-600 hover:text-emerald-700 transition">
                    {CONTACT_CONFIG.email}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">We typically respond within 24 hours</p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start space-x-4 mb-8">
                <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support Hours</h3>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  <p className="text-gray-600 text-sm">Saturday & Sunday: Closed</p>
                </div>
              </div>

              {/* FAQ CTA */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-8">
                <h3 className="font-semibold text-gray-900 mb-2">Quick Answers?</h3>
                <p className="text-gray-600 text-sm mb-4">Check our FAQ section for common questions about blood sugar management and our supplements.</p>
                <a href="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold transition">
                  Visit Blog →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg mb-6">
                  ✅ Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  ❌ {error}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition resize-none"
                    placeholder="Tell us what you're thinking..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message || isLoading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p className="text-gray-600 text-sm text-center mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}