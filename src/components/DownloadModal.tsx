import { useState } from 'react';
import { X, Download, Mail } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export const DownloadModal = ({
  isOpen,
  onClose,
  title = "Get Your Free 7-Day Blood Sugar Reset Guide",
  description = "Join thousands reversing prediabetes. Enter your email to download."
}: DownloadModalProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send to EmailJS
      const templateParams = {
        user_email: email,
        downloaded_resources: '7-Day Blood Sugar Reset Guide'
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_j7wcpil',
          template_id: 'template_iz3wekv',
          user_id: 'jIg8H78CXxzH5v9ya',
          template_params: templateParams
        })
      });

      if (response.ok) {
        setSubmitted(true);
        
        // Trigger PDF download
        const link = document.createElement('a');
        link.href = '/downloads/7-day-blood-sugar-reset.pdf';
        link.download = '7-day-blood-sugar-reset.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setEmail('');
          setSubmitted(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error. Please try downloading directly.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button 
            onClick={onClose}
            className="hover:opacity-80 transition"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {!submitted ? (
            <>
              <p className="text-gray-600 mb-4">{description}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Download size={18} />
                  {isLoading ? 'Preparing...' : 'Download Guide'}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  We'll send you the guide + occasional health tips. You can unsubscribe anytime.
                </p>
              </form>

              {/* Skip Option */}
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/downloads/7-day-blood-sugar-reset.pdf';
                  link.download = '7-day-blood-sugar-reset.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  onClose();
                }}
                className="mt-4 w-full text-center text-sm text-emerald-600 hover:text-emerald-700 transition"
              >
                Skip for now → Download without email
              </button>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Download Started!
              </h3>
              <p className="text-gray-600">
                Check your downloads folder. We've also sent you the guide to your email.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};