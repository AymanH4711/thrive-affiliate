import { useState } from 'react';
import { X, Download, Mail, FileText } from 'lucide-react';
import { submitLeadMagnet, triggerDownload } from '@/api/leadMagnet';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  /** Display name shown in the PDF info card and used in the email's
      "downloaded_resources" field. Defaults preserve the original
      7-Day Blood Sugar Reset Guide behavior for existing call sites. */
  resourceName?: string;
  resourceDescription?: string;
  /** Filename under /downloads/ — must match an actual file in public/downloads/. */
  resourceFilename?: string;
  /** Used as the Brevo "SOURCE" attribute — helps distinguish which
      lead magnet drove a given signup in your contact list. */
  subscribeSource?: string;
}

export const DownloadModal = ({
  isOpen,
  onClose,
  title = "Get Your Free Guide",
  description = "Get a practical, printable guide you can use today.",
  resourceName = '7-Day Blood Sugar Reset Guide',
  resourceDescription = 'Your complete 7-day action plan with daily protocols and supplement recommendations (20 pages)',
  resourceFilename = '7-day-blood-sugar-reset.pdf',
  subscribeSource = 'download-modal',
}: DownloadModalProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [deliveryWarning, setDeliveryWarning] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setDeliveryWarning('');

    try {
      // The guide is free: start the download immediately and never make it wait
      // for EmailJS or Brevo. Those services are best-effort lead capture.
      triggerDownload(resourceFilename);

      const { subscribed, emailed } = await submitLeadMagnet({
        email,
        name,
        resourceName,
        source: subscribeSource,
      });

      setEmailSent(emailed);

      if (!subscribed && !emailed) {
        setDeliveryWarning(
          'Your download has started, but we could not save your details or send the email. Please try again later.'
        );
      }

      setSubmitted(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setEmail('');
        setName('');
        setSubmitted(false);
        setEmailSent(false);
        setDeliveryWarning('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting lead magnet:', error);
      setDeliveryWarning(
        'Your download has started, but we could not save your details. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="download-modal-heading">
      <div className="bg-white rounded-lg max-w-md w-full shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 flex items-center justify-between sticky top-0">
          <h2 id="download-modal-heading" className="text-xl font-bold">{title}</h2>
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
              <p className="text-gray-600 mb-6">{description}</p>

              {deliveryWarning && (
                <div className="mb-4 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  {deliveryWarning}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* PDF Info */}
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <FileText size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{resourceName}</p>
                      <p className="text-sm text-gray-600 mt-1">{resourceDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

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
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download size={18} />
                  {isLoading ? 'Preparing...' : 'Download Guide'}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  We'll send you the guides + occasional health tips. You can unsubscribe anytime.
                </p>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Downloads Started!
              </h3>
              <p className="text-gray-600">
                Check your downloads folder.{' '}
                {emailSent
                  ? "We've also sent the guide to your email."
                  : 'Email delivery is temporarily unavailable.'}
              </p>
              {deliveryWarning && (
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-4">
                  {deliveryWarning}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};