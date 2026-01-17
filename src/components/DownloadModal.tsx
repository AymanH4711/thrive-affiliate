import { useState } from 'react';
import { X, Download, Mail, FileText } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

interface PDFOption {
  id: string;
  name: string;
  description: string;
  filename: string;
  selected: boolean;
}

export const DownloadModal = ({
  isOpen,
  onClose,
  title = "Get Your Free Blood Sugar Resources",
  description = "Join thousands reversing prediabetes. Choose what you need and download instantly."
}: DownloadModalProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedPDFs, setSelectedPDFs] = useState<PDFOption[]>([
    {
      id: '1',
      name: '7-Day Blood Sugar Reset Guide',
      description: 'Your complete 7-day action plan with daily protocols and supplement recommendations',
      filename: '7-day-blood-sugar-reset.pdf',
      selected: true
    },
    {
      id: '2',
      name: 'A1C Tracking Sheet',
      description: 'Monitor your progress over 12 weeks with this printable tracking sheet',
      filename: 'a1c-tracking-sheet.pdf',
      selected: false
    },
    {
      id: '3',
      name: 'Blood Sugar Friendly Shopping List',
      description: 'Know exactly what to buy at the grocery store - foods that support stable blood sugar',
      filename: 'shopping-list.pdf',
      selected: false
    },
    {
      id: '4',
      name: 'Supplement Buying Guide',
      description: 'Which supplements actually work, where to buy them, and how much to spend',
      filename: 'supplement-buying-guide.pdf',
      selected: false
    }
  ]);

  const togglePDF = (id: string) => {
    setSelectedPDFs(selectedPDFs.map(pdf =>
      pdf.id === id ? { ...pdf, selected: !pdf.selected } : pdf
    ));
  };

  const downloadPDFs = () => {
    selectedPDFs.forEach(pdf => {
      if (pdf.selected) {
        const link = document.createElement('a');
        link.href = `/downloads/${pdf.filename}`;
        link.download = pdf.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedPDFs.every(pdf => !pdf.selected)) {
      alert('Please select at least one guide to download');
      return;
    }

    setIsLoading(true);

    try {
      // Send to EmailJS
      const selectedGuides = selectedPDFs
        .filter(pdf => pdf.selected)
        .map(pdf => pdf.name)
        .join(', ');

      const templateParams = {
        user_email: email,
        downloaded_resources: selectedGuides
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: templateParams
        })
      });

      if (response.ok) {
        setSubmitted(true);
        
        // Download selected PDFs
        downloadPDFs();

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setEmail('');
          setSubmitted(false);
          setSelectedPDFs(selectedPDFs.map(pdf => ({
            ...pdf,
            selected: pdf.id === '1' // Reset to default selection
          })));
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
      <div className="bg-white rounded-lg max-w-md w-full shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 flex items-center justify-between sticky top-0">
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
              <p className="text-gray-600 mb-6">{description}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* PDF Selection */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-gray-900">Select Your Resources:</h3>
                  
                  {selectedPDFs.map(pdf => (
                    <label key={pdf.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={pdf.selected}
                        onChange={() => togglePDF(pdf.id)}
                        className="w-5 h-5 text-emerald-600 rounded cursor-pointer mt-1"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 flex items-center gap-2">
                          <FileText size={16} className="text-emerald-600" />
                          {pdf.name}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{pdf.description}</p>
                      </div>
                    </label>
                  ))}
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
                  disabled={isLoading || selectedPDFs.every(pdf => !pdf.selected)}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download size={18} />
                  {isLoading ? 'Preparing...' : 'Download Selected Guides'}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  We'll send you the guides + occasional health tips. You can unsubscribe anytime.
                </p>
              </form>

              {/* Skip Option */}
              <button
                onClick={() => {
                  downloadPDFs();
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
                Downloads Started!
              </h3>
              <p className="text-gray-600">
                Check your downloads folder. We've also sent the guides to your email.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};