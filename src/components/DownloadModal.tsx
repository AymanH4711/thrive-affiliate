import { useState } from 'react';
import { X, Download, Mail } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const downloadOptions = [
  {
    id: 'reset',
    title: '7-Day Blood Sugar Reset',
    description: 'Complete daily action plan with meal suggestions',
    file: '/downloads/7-day-blood-sugar-reset.pdf',
    icon: '📋',
    selected: true
  },
  {
    id: 'supplements',
    title: 'Supplement Buying Guide',
    description: 'Which supplements actually work + dosages',
    file: '/downloads/supplement-buying-guide.pdf',
    icon: '💊',
    selected: false
  },
  {
    id: 'shopping',
    title: 'Blood Sugar Shopping List',
    description: 'What to buy at the grocery store',
    file: '/downloads/shopping-list.pdf',
    icon: '🛒',
    selected: false
  },
  {
    id: 'tracking',
    title: 'A1C Tracking Sheet',
    description: 'Monitor your progress over 12 weeks',
    file: '/downloads/a1c-tracking-sheet.pdf',
    icon: '📊',
    selected: false
  }
];

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [email, setEmail] = useState('');
  const [selectedPdfs, setSelectedPdfs] = useState(['reset']);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const togglePdf = (id: string) => {
    setSelectedPdfs(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (selectedPdfs.length === 0) {
      setError('Please select at least one resource');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Step 1: Add email to Mailchimp
      const mailchimpResponse = await fetch(
        'https://us20.api.mailchimp.com/3.0/lists/2ac1la0b7a/members',
        {
          method: 'POST',
          headers: {
            'Authorization': `apikey a853bf48e30da18fda9fe73d7fad61fa-us20`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              FNAME: email.split('@')[0],
              DOWNLOADS: selectedPdfs.join(', ')
            }
          })
        }
      );

      // Step 2: Download selected PDFs
      const selectedFiles = downloadOptions
        .filter(opt => selectedPdfs.includes(opt.id))
        .map(opt => opt.file);

      selectedFiles.forEach(file => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop() || 'download.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      // Step 3: Show success message
      setSubmitted(true);
      setEmail('');
      setSelectedPdfs(['reset']);

      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 3000);

    } catch (err) {
      setError('Error saving your info. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 flex items-center justify-between border-b">
          <div>
            <h2 className="text-2xl font-bold">Get Your Free Resources</h2>
            <p className="text-emerald-100 text-sm mt-1">Choose what you need to get started</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 m-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">✅</div>
              <div>
                <p className="font-bold text-emerald-900">Perfect!</p>
                <p className="text-emerald-700 text-sm">Your resources are downloading. Check your email for a welcome message!</p>
              </div>
            </div>
          </div>
        )}

        {!submitted && (
          <>
            {/* PDF Selection Grid */}
            <div className="p-6">
              <p className="text-gray-600 font-semibold mb-4">Select the resources you want:</p>
              
              <div className="space-y-3 mb-6">
                {downloadOptions.map(option => (
                  <label 
                    key={option.id}
                    className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 cursor-pointer transition"
                  >
                    <input 
                      type="checkbox"
                      checked={selectedPdfs.includes(option.id)}
                      onChange={() => togglePdf(option.id)}
                      className="w-5 h-5 text-emerald-600 rounded mt-1 cursor-pointer accent-emerald-600"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{option.icon}</span>
                        <h3 className="font-bold text-gray-900">{option.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Email Form */}
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Your Email Address
                  </label>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    We'll send you a welcome email with your downloads + weekly tips
                  </p>
                </div>

                {error && (
                  <div className="text-red-600 text-sm font-semibold">{error}</div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  {loading ? 'Preparing downloads...' : 'Download Now'}
                </button>

                <p className="text-center text-xs text-gray-500">
                  ✓ No spam • ✓ Unsubscribe anytime • ✓ Instant download
                </p>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};