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
    // FIX 1: Prevent default form submission to stop homepage redirect [cite: 2]
    e.preventDefault();
    
    if (selectedResources.length === 0) {
      alert("Please select at least one resource.");
      return;
    }

    // FIX 2: Start loading state [cite: 19]
    setIsLoading(true);

    try {
      // FIX 3: Use EmailJS to bypass Mailchimp CORS restrictions [cite: 21, 23]
      await emailjs.send(
        'service_id', // Replace with your Service ID from EmailJS [cite: 31]
        'template_download', // Replace with your Template ID [cite: 30]
        {
          email: email,
          downloaded_resources: selectedResources.join(', '),
        },
        'public_key' // Replace with your Public Key
      );

      // FIX 4: Success - Reset everything and close modal
      alert("Success! Your guides are on their way to your inbox.");
      setEmail('');
      setSelectedResources([]);
      setIsOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      // FIX 5: ALWAYS stop loading, even if it fails [cite: 3, 19]
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Download Your Free Guides</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="mb-2 font-semibold">Select Resources:</p>
            {resources.map(res => (
              <label key={res.id} className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedResources.includes(res.id)}
                  onChange={() => handleCheckboxChange(res.id)}
                />
                {res.label}
              </label>
            ))}
          </div>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded text-white font-bold ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isLoading ? 'Sending...' : 'Download Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadModal;