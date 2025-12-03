import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Heart, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const featured = {
    title: 'Complete Guide to GLP-1 Weight Loss Support',
    excerpt: 'Essential nutrition strategies, exercise protocols, and lifestyle modifications to maximize results with GLP-1 therapy',
    category: 'Weight Management',
    readTime: '12 min read',
    path: '/blog/weight-management'
  };

  const healthTopics = [
    {
      title: 'Weight Management & GLP-1 Support',
      description: 'Nutrition, resistance training, and supplement strategies for sustainable weight loss',
      articleCount: '8 articles',
      icon: Heart,
      path: '/blog/weight-management'
    },
    {
      title: 'Sleep & Mental Wellness',
      description: 'Evidence-based approaches to improving sleep quality and mental health',
      articleCount: '10 articles',
      icon: Heart,
      path: '/blog/sleep-mental-health'
    },
    {
      title: 'Longevity & Healthy Aging',
      description: 'Science-backed strategies for cognitive health, mobility, and vitality',
      articleCount: '12 articles',
      icon: Heart,
      path: '/blog/healthy-aging'
    },
    {
      title: 'Gut-Brain Health',
      description: 'Probiotics, fermented foods, and the microbiome-mental health connection',
      articleCount: '7 articles',
      icon: Heart,
      path: '/blog/gut-health'
    },
  ];

  const recentArticles = [
    {
      title: 'Best Probiotics for Mood and Digestive Health',
      excerpt: 'Understanding the gut-brain axis and choosing the right probiotic strains',
      category: 'Gut Health',
      readTime: '8 min',
      path: '/blog/gut-health'
    },
    {
      title: 'Resistance Training for GLP-1 Users: Preserve Muscle Mass',
      excerpt: 'Essential strength training protocols to maintain lean muscle during weight loss',
      category: 'Weight Management',
      readTime: '10 min',
      path: '/blog/weight-management'
    },
    {
      title: 'Omega-3 and CoQ10: The Longevity Stack',
      excerpt: 'How these two supplements work together for heart health and aging',
      category: 'Healthy Aging',
      readTime: '7 min',
      path: '/blog/healthy-aging'
    },
    {
      title: 'Sleep Hygiene: The 30-Day Reset Protocol',
      excerpt: 'Step-by-step program to optimize your sleep environment and routine',
      category: 'Sleep & Mental Health',
      readTime: '9 min',
      path: '/blog/sleep-mental-health'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Wellness Insights</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Evidence-based guides for better living
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Article</h2>
          <Card variant="gradient" className="md:flex gap-6">
            <div className="md:w-1/3 h-64 bg-primary-200 rounded-lg mb-4 md:mb-0 flex items-center justify-center">
              <Heart className="w-20 h-20 text-primary-500" />
            </div>
            <div className="md:w-2/3">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse by Health Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthTopics.map((topic, index) => (
              <Card key={index} className="group cursor-pointer">
                <topic.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{topic.articleCount}</span>
                  <Button variant="ghost" href={topic.path}>
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.map((article, index) => (
              <Card key={index}>
                <div className="h-48 bg-card-gradient rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-primary-500" />
                </div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
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
    </div>
  );
};

export default BlogPage;
