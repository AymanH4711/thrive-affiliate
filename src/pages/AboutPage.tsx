import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Heart, Shield, Users, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Evidence-Based',
      description: 'All recommendations backed by peer-reviewed research and clinical evidence'
    },
    {
      icon: Heart,
      title: 'Transparent',
      description: 'Clear affiliate disclosures and honest product assessments'
    },
    {
      icon: Users,
      title: 'Inclusive',
      description: 'Health solutions for every generation and life stage'
    },
    {
      icon: Award,
      title: 'Quality-First',
      description: 'Rigorous vetting process for all recommended products'
    },
  ];

  const networks = [
    {
      name: 'Amazon Associates',
      description: 'Extensive product catalog with trusted fulfillment',
      link: 'https://affiliate-program.amazon.com/'
    },
    {
      name: 'Awin',
      description: 'Global network with premium health and wellness brands',
      link: 'https://www.awin.com/us/publisher-signup'
    },
    {
      name: 'CJ Affiliate',
      description: 'Premium advertisers and high-growth health brands',
      link: 'https://www.cj.com/'
    },
    {
      name: 'ClickBank',
      description: 'Digital health products with competitive commissions',
      link: 'https://www.clickbank.com/affiliates/'
    },
    {
      name: 'Rakuten Advertising',
      description: 'Global affiliate network with established health brands',
      link: 'https://rakutenadvertising.com/affiliate/'
    },
  ];

  return (
    <>
      <SEO
        title="About Thrive Health | Our Mission"
        description="Learn about Thrive Health's mission to help thousands reverse prediabetes naturally. Meet our team, read our story, and discover why we're different."
        keywords="about thrive health, our mission, prediabetes expert, health coaching, wellness company"
        image="/images/about-og.png"
        url="/about"
      />

      <div className="min-h-screen">
        <section className="bg-hero-gradient py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Thrive</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              Empowering families to make informed health decisions
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <Card className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Thrive exists to bridge the gap between cutting-edge health research and everyday wellness decisions. 
                We curate science-backed product recommendations across supplements, fitness equipment, wellness apps, 
                and organic foods to help families of all generations live healthier lives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As the global wellness economy reaches $6.3 trillion and continues growing, we're committed to 
                providing transparent, evidence-based guidance through trusted affiliate partnerships. Every product 
                we recommend undergoes rigorous vetting for quality, safety, and efficacy.
              </p>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Our Approach</h2>
            <Card variant="gradient">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Science-Backed Recommendations</h3>
                    <p className="text-gray-700 text-sm">Every product is evaluated against peer-reviewed research and clinical evidence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparent Affiliate Partnerships</h3>
                    <p className="text-gray-700 text-sm">Clear disclosures on all affiliate relationships and commission structures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Multi-Generational Focus</h3>
                    <p className="text-gray-700 text-sm">Solutions tailored for families, seniors, fitness enthusiasts, and specific health conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Continuous Quality Monitoring</h3>
                    <p className="text-gray-700 text-sm">Regular reviews and updates based on latest research and market developments</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Affiliate Network Partnerships</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We partner with leading affiliate networks to provide access to quality health products
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {networks.map((network, index) => (
                <Card key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{network.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{network.description}</p>
                  <Button variant="ghost" href={network.link} external className="text-sm">
                    Learn More <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Affiliate Disclosure</h2>
            <Card>
              <p className="text-gray-700 leading-relaxed text-left">
                Thrive participates in various affiliate marketing programs, which means we earn commissions 
                from qualifying purchases made through our links. This comes at no additional cost to you and 
                helps us maintain our platform and provide free content. Our recommendations are based on 
                thorough research and genuine belief in product quality, not commission rates. We only 
                recommend products we would use ourselves or recommend to our families.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;