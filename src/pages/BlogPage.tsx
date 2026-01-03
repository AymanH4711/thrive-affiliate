import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Heart, Clock, ArrowRight, Zap, Apple, Activity, BarChart3, Moon, Pill } from 'lucide-react';
import { SEO } from '../components/SEO';

const BlogPage = () => {
  const featured = {
    title: '5 Warning Signs of Prediabetes (And What to Do About It)',
    excerpt: 'Learn to recognize early symptoms before prediabetes becomes Type 2 Diabetes. Evidence-based warning signs and actionable steps.',
    category: 'Prediabetes Support',
    readTime: '8 min read',
    path: '/blog/prediabetes-warning-signs',
    icon: Heart
  };

  const healthTopics = [
    {
      title: 'Prediabetes Support',
      description: 'Understand prediabetes, recognize warning signs, and learn how to reverse it naturally',
      articleCount: '3 articles',
      icon: Heart,
      path: '/blog/prediabetes',
      color: 'emerald'
    },
    {
      title: 'Diet & Blood Sugar Control',
      description: 'Foods that stabilize glucose, meal plans, and nutrition strategies proven to work',
      articleCount: '3 articles',
      icon: Apple,
      path: '/blog/diet',
      color: 'emerald'
    },
    {
      title: 'Exercise & Movement',
      description: 'Workouts, walking protocols, and physical activity to improve insulin sensitivity',
      articleCount: '2 articles',
      icon: Activity,
      path: '/blog/exercise',
      color: 'blue'
    },
    {
      title: 'Glucose Monitoring',
      description: 'Tracking tools, technology comparison, and how to measure your progress',
      articleCount: '2 articles',
      icon: BarChart3,
      path: '/blog/monitoring',
      color: 'purple'
    },
    {
      title: 'Supplements & Natural Health',
      description: 'Evidence-based supplement recommendations and natural strategies for blood sugar control',
      articleCount: '2 articles',
      icon: Pill,
      path: '/blog/supplements',
      color: 'rose'
    },
    {
      title: 'Sleep & Stress Management',
      description: 'Sleep optimization, stress reduction, and cortisol control for better glucose levels',
      articleCount: '2 articles',
      icon: Moon,
      path: '/blog/sleep-stress',
      color: 'indigo'
    },
  ];

  const recentArticles = [
    {
      title: '5 Warning Signs of Prediabetes (And What to Do About It)',
      excerpt: 'Learn to recognize early symptoms before prediabetes becomes Type 2 Diabetes. Evidence-based warning signs and actionable steps.',
      category: 'Prediabetes Support',
      readTime: '8 min',
      path: '/blog/prediabetes-warning-signs',
      icon: Heart,
      color: 'emerald'
    },
    {
      title: 'The Best Foods for Blood Sugar Control: Complete Guide',
      excerpt: 'A comprehensive list of foods that stabilize glucose, meal planning strategies, and foods to avoid.',
      category: 'Diet & Blood Sugar',
      readTime: '10 min',
      path: '/blog/best-foods-blood-sugar',
      icon: Apple,
      color: 'emerald'
    },
    {
      title: 'Post-Meal Walks: The Most Powerful Blood Sugar Tool',
      excerpt: 'Why 10 minutes after eating is the perfect time to walk. Science-backed timing and protocol for maximum glucose reduction.',
      category: 'Exercise & Movement',
      readTime: '7 min',
      path: '/blog/post-meal-walks',
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'CGM vs Blood Glucose Meter: Which Should You Use in 2025?',
      excerpt: 'Detailed comparison of continuous glucose monitors and traditional blood glucose meters. Pros, cons, and costs.',
      category: 'Glucose Monitoring',
      readTime: '9 min',
      path: '/blog/cgm-vs-bgm',
      icon: BarChart3,
      color: 'purple'
    },
    {
      title: 'Berberine: The Natural Alternative to Metformin (Evidence-Based)',
      excerpt: 'How berberine works, dosing recommendations, and why research shows it\'s as effective as some diabetes medications.',
      category: 'Supplements',
      readTime: '8 min',
      path: '/blog/berberine-metformin',
      icon: Pill,
      color: 'rose'
    },
    {
      title: 'How Sleep Affects Your Blood Sugar: The Science Behind Glucose Control',
      excerpt: 'Why poor sleep raises blood glucose, how much sleep you need, and a 7-day sleep optimization protocol.',
      category: 'Sleep & Stress',
      readTime: '8 min',
      path: '/blog/sleep-blood-sugar',
      icon: Moon,
      color: 'indigo'
    },
  ];

  // Color mapping for consistent theme
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    rose: 'bg-rose-100 text-rose-700 border-rose-200',
    indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  };

  const iconColorMap: Record<string, string> = {
    emerald: 'text-emerald-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    rose: 'text-rose-600',
    indigo: 'text-indigo-600',
  };

  return (
    <>
      <SEO
        title="Blood Sugar Blog | Health Tips & Science"
        description="Thrive Health blog: Latest research on prediabetes, blood sugar management, nutrition tips, exercise guides, and proven strategies from our health experts."
        keywords="blood sugar blog, prediabetes blog, health tips, diabetes prevention, wellness articles"
        image="/images/blog-og.png"
        url="/blog"
      />

      <div className="min-h-screen">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-teal-600 to-emerald-700 py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prediabetes & Blood Sugar Insights</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-teal-100">
              Evidence-based guides to reverse prediabetes naturally and take control of your health
            </p>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Article</h2>
            <Card className="md:flex gap-6 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
              <div className="md:w-1/3 h-64 bg-emerald-100 rounded-lg mb-4 md:mb-0 flex items-center justify-center">
                <Heart className="w-20 h-20 text-emerald-600" />
              </div>
              <div className="md:w-2/3">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-3">
                  {featured.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{featured.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {featured.readTime}
                  </span>
                  <Button variant="primary" href={featured.path}>Read Article</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* BROWSE BY CATEGORY */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse by Topic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthTopics.map((topic, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-lg transition border-l-4 border-l-emerald-500">
                  <div className={iconColorMap[topic.color as keyof typeof iconColorMap]}>
                    <topic.icon className="w-12 h-12 mb-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{topic.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-500">{topic.articleCount}</span>
                    <Button variant="ghost" href={topic.path}>
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* RECENT ARTICLES */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition border-t-4 border-t-emerald-500">
                  <div className={`h-48 rounded-lg mb-4 flex items-center justify-center ${
                    article.color === 'emerald' ? 'bg-emerald-100' :
                    article.color === 'blue' ? 'bg-blue-100' :
                    article.color === 'purple' ? 'bg-purple-100' :
                    article.color === 'rose' ? 'bg-rose-100' :
                    'bg-indigo-100'
                  }`}>
                    <article.icon className={`w-12 h-12 ${
                      article.color === 'emerald' ? 'text-emerald-600' :
                      article.color === 'blue' ? 'text-blue-600' :
                      article.color === 'purple' ? 'text-purple-600' :
                      article.color === 'rose' ? 'text-rose-600' :
                      'text-indigo-600'
                    }`} />
                  </div>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                    article.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    article.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    article.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                    article.color === 'rose' ? 'bg-rose-100 text-rose-700' :
                    'bg-indigo-100 text-indigo-700'
                  }`}>
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {article.readTime}
                    </span>
                    <Button variant="ghost" href={article.path}>Read More</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Reverse Your Prediabetes?</h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Don't just read about it. Follow our complete 5-step reversal plan with nutrition, exercise, monitoring, supplements, and stress management.
            </p>
            <Button variant="primary" href="/prediabetes-support" className="bg-white text-emerald-700 hover:bg-emerald-50">
              Start the 5-Step Plan
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;