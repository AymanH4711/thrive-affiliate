// src/components/layout/CategoryLayout.tsx
import { ReactNode } from 'react';

interface CategoryLayoutProps {
  title: string;
  subtitle: ReactNode;
  heroImage: string;
  children: ReactNode;
}

export default function CategoryLayout({ title, subtitle, heroImage, children }: CategoryLayoutProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Two Column Layout */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              <div className="text-lg md:text-xl text-gray-700">
                {subtitle}
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt={typeof title === 'string' ? title : 'Category hero'} 
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=400&fit=crop';
                  }}
                />
                {/* Optional: Gradient overlay for better text visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
    </main>
  );
}