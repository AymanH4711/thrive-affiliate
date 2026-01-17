import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface DownloadModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedResources, setSelectedResources] = useState<string[]>([]);

  const resources = [
    { id: 'blood-sugar-basics', label: 'Blood Sugar Basics Guide' },
    { id: 'meal-plan', label: '7-Day Low Glycemic Meal Plan' },
    { id: 'supplements', label: 'Top 5 Science-Backed Supplements' }
  ];

  const handleCheckboxChange = (id: string) => {
    setSelectedResources(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // FIX: e.preventDefault() stops the automatic redirect to the homepage 
    e.preventDefault();
    
    if (selectedResources.length === 0) {
      alert("Please select at least one resource.");
      return;
    }

    setIsLoading(true);

    try {
      // Use your actual EmailJS credentials here
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'template_download', 
        {
          email: email,
          downloaded_resources: selectedResources.join(', '),
        },
        'YOUR_PUBLIC_KEY'
      );

      alert("Success! Check your inbox for the guides.");
      setEmail('');
      setSelectedResources([]);
      setIsOpen(false); // Closes the modal on success
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      // FIX: Ensures loading stops even if the request fails 
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full relative shadow-2xl">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Free Guides</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="mb-3 font-semibold text-gray-700">Select your resources:</p>
            {resources.map(res => (
              <label key={res.id} className="flex items-center mb-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-5 h-5 mr-3 border-gray-300 rounded text-emerald-600 focus:ring-emerald-500"
                  checked={selectedResources.includes(res.id)}
                  onChange={() => handleCheckboxChange(res.id)}
                />
                <span className="text-gray-700 group-hover:text-emerald-700 transition">{res.label}</span>
              </label>
            ))}
          </div>

          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full p-3 border border-gray-200 rounded-xl mb-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded-xl text-white font-bold transition shadow-lg ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
            }`}
          >
            {isLoading ? 'Sending...' : 'Access My Guides'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadModal;