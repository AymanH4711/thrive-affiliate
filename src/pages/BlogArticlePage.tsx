import { useParams, Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowLeft, Clock, User } from 'lucide-react';

const BlogArticlePage = () => {
  const { topic } = useParams();

  const articles: Record<string, any> = {
    'weight-management': {
      title: 'GLP-1 Weight Loss Support: Complete Guide',
      category: 'Weight Management',
      readTime: '12 min read',
      content: [
        {
          heading: 'Understanding GLP-1 Therapy',
          text: 'GLP-1 (Glucagon-like peptide-1) receptor agonists have revolutionized weight management. These medications work by regulating appetite, slowing gastric emptying, and improving insulin sensitivity.'
        },
        {
          heading: 'Essential Nutrition Strategies',
          text: 'Focus on protein-forward meals (25-30g per meal), nutrient-dense foods, and adequate hydration. Avoid ultra-processed foods and prioritize whole food sources. Consider protein supplements if dietary intake is insufficient.'
        },
        {
          heading: 'Resistance Training Protocol',
          text: 'Maintain lean muscle mass with 2-3 resistance training sessions per week. Focus on compound movements: squats, deadlifts, presses, and rows. Progressive overload is essential to preserve strength during weight loss.'
        },
        {
          heading: 'Recommended Supplements',
          text: 'High-quality protein powder, omega-3 fatty acids, vitamin D, magnesium, and a comprehensive multivitamin. Consider probiotics for gut health during dietary changes.'
        },
      ],
      products: [
        'High-quality protein powder',
        'Omega-3 supplements',
        'Resistance bands',
        'Food scale and tracking app'
      ]
    },
    'sleep-mental-health': {
      title: 'Sleep & Mental Wellness: 30-Day Reset',
      category: 'Sleep & Mental Health',
      readTime: '10 min read',
      content: [
        {
          heading: 'The Sleep-Mental Health Connection',
          text: 'Quality sleep is foundational for mental wellness. Poor sleep affects mood regulation, stress resilience, and cognitive function.'
        },
        {
          heading: 'Sleep Environment Optimization',
          text: 'Keep bedroom temperature between 60-67°F, eliminate light pollution with blackout curtains, reduce noise with white noise machines, and invest in quality bedding.'
        },
        {
          heading: 'Supplement Stack for Sleep',
          text: 'Magnesium glycinate (300-400mg), melatonin (0.5-3mg), L-theanine (200mg), and consider adaptogens like ashwagandha for stress management.'
        },
        {
          heading: '30-Day Protocol',
          text: 'Week 1: Establish consistent sleep/wake times. Week 2: Optimize environment. Week 3: Implement supplement stack. Week 4: Refine and maintain.'
        },
      ],
      products: [
        'Magnesium glycinate',
        'Melatonin supplements',
        'Meditation apps',
        'Blackout curtains'
      ]
    },
    'healthy-aging': {
      title: 'Longevity & Healthy Aging: The Science',
      category: 'Healthy Aging',
      readTime: '12 min read',
      content: [
        {
          heading: 'The Pillars of Healthy Aging',
          text: 'Evidence supports four key areas: cardiovascular health, cognitive function, mobility/strength, and metabolic health.'
        },
        {
          heading: 'Essential Supplements for Longevity',
          text: 'Omega-3 fatty acids (2-3g EPA/DHA daily), CoQ10 (100-200mg), vitamin D3 (2000-4000 IU), and NAD+ precursors like NMN or NR.'
        },
        {
          heading: 'Exercise for Longevity',
          text: 'Combine strength training (2-3x/week), zone 2 cardio (3-4x/week), and mobility work. This combination maintains muscle mass, cardiovascular fitness, and functional movement.'
        },
        {
          heading: 'Cognitive Health Strategies',
          text: 'Prioritize quality sleep, manage stress, maintain social connections, and consider nootropics like lion\'s mane or bacopa monnieri.'
        },
      ],
      products: [
        'Omega-3 fish oil',
        'CoQ10 supplements',
        'Resistance bands',
        'Cognitive training apps'
      ]
    },
    'gut-health': {
      title: 'Gut-Brain Health: The Microbiome Connection',
      category: 'Gut Health',
      readTime: '10 min read',
      content: [
        {
          heading: 'Understanding the Gut-Brain Axis',
          text: 'The bidirectional communication between gut and brain influences mood, cognition, and mental health through neurotransmitter production and immune signaling.'
        },
        {
          heading: 'Probiotic Strain Selection',
          text: 'Choose evidence-backed strains: Lactobacillus rhamnosus for anxiety, Bifidobacterium longum for stress, and diverse multi-strain formulas for overall gut health.'
        },
        {
          heading: 'Prebiotic and Fermented Foods',
          text: 'Include daily: sauerkraut, kimchi, kefir, yogurt, and prebiotic fiber sources like onions, garlic, and Jerusalem artichokes.'
        },
        {
          heading: 'Lifestyle Factors',
          text: 'Manage stress (cortisol affects gut permeability), prioritize sleep, avoid unnecessary antibiotics, and limit processed foods and added sugars.'
        },
      ],
      products: [
        'Multi-strain probiotics',
        'Prebiotic fiber supplements',
        'Fermented food starters',
        'Digestive enzymes'
      ]
    },
  };

  const article = articles[topic as string] || articles['weight-management'];

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-4">
            {article.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center text-sm text-gray-600 mb-8 space-x-6">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" /> Thrive Health Team
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" /> {article.readTime}
            </span>
          </div>

          <Card className="prose prose-lg max-w-none mb-8">
            {article.content.map((section: any, index: number) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </Card>

          <Card variant="gradient">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Products</h3>
            <ul className="space-y-2">
              {article.products.map((product: string, index: number) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  {product}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button variant="primary" href="/supplements">Browse Products</Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
};

export default BlogArticlePage;
