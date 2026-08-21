import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { BlogArticleMeta } from '@/data/types';

const CGMvsBloodGlucoseMeter: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12 pb-8 border-b-2 border-gray-200">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
            Technology
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            CGM vs Blood Glucose Meter: Which Should You Use?
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>Thrive Health Team</span>
            <span>•</span>
            <span>Coming Soon</span>
          </div>
        </header>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">🔄 Article Coming Soon</h2>
          <p className="text-blue-800 mb-6">
            We're currently working on a comprehensive comparison between Continuous Glucose Monitors (CGMs) 
            and traditional blood glucose meters. This article will cover:
          </p>
          <ul className="text-left text-blue-800 space-y-2 max-w-2xl mx-auto mb-6">
            <li>✓ How CGMs work vs traditional meters</li>
            <li>✓ Accuracy and reliability comparison</li>
            <li>✓ Cost analysis and insurance coverage</li>
            <li>✓ Ease of use and convenience</li>
            <li>✓ Popular CGM brands and options</li>
            <li>✓ Which option is best for you</li>
          </ul>
          <p className="text-blue-700">
            Check back soon for complete information!
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
};

export default CGMvsBloodGlucoseMeter;

export const blogMeta: BlogArticleMeta = {
  title: "CGM vs Blood Glucose Meter: Which Should You Use?",
  excerpt: "A comprehensive comparison between Continuous Glucose Monitors and traditional blood glucose meters — accuracy, cost, and which is right for you. Coming soon.",
  readTime: "Coming soon",
  image: "/images/placeholder-purple.png",
  path: "/blog/cgm-vs-blood-glucose-meter",
  category: "monitoring",
  isPublished: false,
};