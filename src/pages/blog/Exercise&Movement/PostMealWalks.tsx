import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { BlogArticleMeta } from '@/data/types';

const PostMealWalks: React.FC = () => {
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
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full mb-4">
            Exercise
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Power of Post-Meal Walks for Blood Sugar
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>Thrive Health Team</span>
            <span>•</span>
            <span>Coming Soon</span>
          </div>
        </header>

        <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-teal-900 mb-4">🔄 Article Coming Soon</h2>
          <p className="text-teal-800 mb-6">
            We're currently working on a detailed guide about how post-meal walks can help regulate blood sugar levels. 
            This article will include:
          </p>
          <ul className="text-left text-teal-800 space-y-2 max-w-2xl mx-auto mb-6">
            <li>✓ Why post-meal walks are so effective</li>
            <li>✓ The science behind the benefits</li>
            <li>✓ How long and how fast to walk</li>
            <li>✓ Best timing for maximum results</li>
            <li>✓ How to make it a habit</li>
            <li>✓ Expected results and timelines</li>
          </ul>
          <p className="text-teal-700">
            Check back soon for the complete guide!
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

export default PostMealWalks;

export const blogMeta: BlogArticleMeta = {
  title: "The Power of Post-Meal Walks for Blood Sugar",
  excerpt: "How post-meal walks help regulate blood sugar levels — the science, optimal timing, and how to make it a habit. Coming soon.",
  readTime: "Coming soon",
  image: "/images/placeholder-blue.png",
  path: "/blog/post-meal-walks",
  category: "exercise",
  isPublished: false,
};