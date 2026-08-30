import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { AffiliateDisclosure } from '../components/conversion/AffiliateDisclosure';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
  Heart,
  Clock,
  Apple,
  Activity,
  BarChart3,
  Moon,
  Pill,
  Lock,
  Zap,
  ArrowRight
} from 'lucide-react';
import type { BlogArticleMeta, BlogCategoryKey } from '../data/types';

interface Article {
  title: string;
  excerpt: string;
  readTime: string;
  path: string;
  image: string;
  thumbnail?: string;
  isPublished: boolean;
}

interface CategoryConfig {
  title: string;
  description: string;
  icon: React.ElementType;
  color: 'emerald' | 'blue' | 'purple' | 'rose' | 'indigo';
}

// ============================================================================
// CATEGORY CONFIG — the only hand-maintained editorial data left. Icon,
// color, and description can't be inferred from an article file, and there
// are only 6 of these total, so keeping this small and static is the right
// call — unlike the old healthTopics array, which also hand-maintained
// every individual ARTICLE (title/excerpt/image/path), which is the part
// that's now dynamic below.
// ============================================================================
const CATEGORY_CONFIG: Record<BlogCategoryKey, CategoryConfig> = {
  prediabetes: {
    title: 'Prediabetes Support',
    description:
      'Understand prediabetes, recognize warning signs, and learn how to reverse it naturally',
    icon: Heart,
    color: 'emerald',
  },
  diet: {
    title: 'Diet & Blood Sugar Control',
    description:
      'Foods that stabilize glucose, meal plans, and nutrition strategies proven to work',
    icon: Apple,
    color: 'emerald',
  },
  exercise: {
    title: 'Exercise & Movement',
    description:
      'Workouts, walking protocols, and physical activity to improve insulin sensitivity',
    icon: Activity,
    color: 'blue',
  },
  monitoring: {
    title: 'Glucose Monitoring',
    description:
      'Tracking tools, technology comparison, and how to measure your progress',
    icon: BarChart3,
    color: 'purple',
  },
  supplements: {
    title: 'Supplements & Natural Health',
    description:
      'Evidence-based supplement recommendations and natural strategies for blood sugar control',
    icon: Pill,
    color: 'rose',
  },
  sleep: {
    title: 'Sleep & Stress Management',
    description:
      'Why sleep quality and stress reduction are critical for blood sugar control',
    icon: Moon,
    color: 'indigo',
  },
};

// "Coming Soon" placeholder cards have no real backing article file
// (path: '#'), so import.meta.glob below can never discover them — they
// stay a small hand-maintained list, same content as before, just cleanly
// separated from real articles instead of mixed into the same array.
const COMING_SOON: Record<BlogCategoryKey, Article[]> = {
  prediabetes: [
    { title: 'Coming Soon: Managing Prediabetes at Work', excerpt: 'Strategies for maintaining healthy habits in a busy work environment.', readTime: 'Coming soon', path: '#', image: '/images/placeholder-emerald.png', isPublished: false },
    { title: 'Coming Soon: Family Support & Accountability', excerpt: 'How to involve your loved ones in your reversal journey.', readTime: 'Coming soon', path: '#', image: '/images/placeholder-emerald.png', isPublished: false },
  ],
  diet: [
    { title: 'Coming Soon: Meal Prep for Blood Sugar Success', excerpt: 'Easy meal prep strategies to stay consistent with your diet plan.', readTime: 'Coming soon', path: '#', image: '/images/placeholder-emerald.png', isPublished: false },
    { title: 'Coming Soon: Restaurant Dining & Social Eating', excerpt: 'How to make healthy choices when eating out.', readTime: 'Coming soon', path: '#', image: '/images/placeholder-emerald.png', isPublished: false },
  ],
  exercise: [
    // PostMealWalks.tsx is a real placeholder file discovered dynamically
    // now (isPublished: false in its own blogMeta) — no invented stand-in
    // needed here. Add more real entries by giving new files blogMeta with
    // isPublished: false, not by adding fake objects to this array.
  ],
  monitoring: [
    // Same — CGMvsBloodGlucoseMeter.tsx is now a real discovered
    // placeholder (isPublished: false), not an invented stand-in.
  ],
  supplements: [
    { title: 'Coming Soon: Supplement Stacking for Maximum Results', excerpt: 'How to combine supplements safely for enhanced glucose control.', readTime: 'Coming soon', path: '#', image: '/images/placeholder-rose.png', isPublished: false },
  ],
  sleep: [
    // Same — SleepBloodSugar.tsx is now a real discovered placeholder
    // (isPublished: false), not an invented stand-in. The original two
    // invented entries here are removed; add real files with isPublished:
    // false instead of hand-writing more placeholder objects.
  ],
};

// ============================================================================
// DYNAMIC ARTICLE DISCOVERY — this replaces the old hardcoded per-article
// entries. Eagerly imports every .tsx file under src/pages/blog/ (any
// subfolder — the folder name itself is NOT used for classification
// anymore, only each file's own exported `blogMeta.category` is). A file
// that doesn't export `blogMeta` is silently skipped from this listing —
// it still works as a route if registered in App.tsx, it just won't show
// up anywhere on /blog until blogMeta is added to it.
// ============================================================================
const articleModules = import.meta.glob<{ blogMeta?: BlogArticleMeta }>(
  './blog/**/*.tsx',
  { eager: true }
);

const discoveredArticles: BlogArticleMeta[] = Object.values(articleModules)
  .map((mod) => mod.blogMeta)
  .filter((meta): meta is BlogArticleMeta => Boolean(meta));

// At most one article should set `featured: true`. If none do (e.g. no
// article has been migrated to export blogMeta yet), the Featured Article
// section below is skipped entirely rather than crashing on undefined data.
const featuredMeta: BlogArticleMeta | undefined =
  discoveredArticles.find((a) => a.featured) ?? discoveredArticles[0];

const healthTopics = (Object.keys(CATEGORY_CONFIG) as BlogCategoryKey[]).map((key) => {
  const config = CATEGORY_CONFIG[key];
  const realArticles: Article[] = discoveredArticles
    // FIXED (2026-07): the featured article already gets its own hero
    // section above — without this exclusion it ALSO shows as a normal
    // card in its own category's grid below, appearing twice on the page.
    // Compare by path (not object reference) since these are freshly
    // mapped objects, not the same instance as featuredMeta.
    .filter((a) => a.category === key && a.path !== featuredMeta?.path)
    .map((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      readTime: a.readTime,
      path: a.path,
      image: a.image,
      thumbnail: a.thumbnail,
      isPublished: a.isPublished ?? true,
    }));
  return {
    key,
    title: config.title,
    description: config.description,
    icon: config.icon,
    color: config.color,
    articles: [...realArticles, ...(COMING_SOON[key] || [])],
  };
});

const bgColorMap: Record<CategoryConfig['color'], string> = {
  emerald: 'bg-emerald-100',
  blue: 'bg-blue-100',
  purple: 'bg-purple-100',
  rose: 'bg-rose-100',
  indigo: 'bg-indigo-100',
};

const badgeColorMap: Record<CategoryConfig['color'], string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  rose: 'bg-rose-100 text-rose-700',
  indigo: 'bg-indigo-100 text-indigo-700',
};

const borderColorMap: Record<CategoryConfig['color'], string> = {
  emerald: 'border-t-emerald-500',
  blue: 'border-t-blue-500',
  purple: 'border-t-purple-500',
  rose: 'border-t-rose-500',
  indigo: 'border-t-indigo-500',
};

const iconColorMap: Record<CategoryConfig['color'], string> = {
  emerald: 'text-emerald-600',
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  rose: 'text-rose-600',
  indigo: 'text-indigo-600',
};

const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackViewBox: string = '0 0 800 480'
): void => {
  e.currentTarget.src =
    `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22${encodeURIComponent(fallbackViewBox)}%22%3E%3Crect fill=%22%23d1fae5%22 width=%22800%22 height=%22480%22/%3E%3C/svg%3E`;
};

const BlogPage = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Blood Sugar & Prediabetes Blog | ThriveHealth360"
        description="ThriveHealth360 blog: Evidence-based guides on prediabetes, blood sugar management, nutrition, exercise, and lifestyle strategies. For informational purposes only — not medical advice."
        keywords="blood sugar blog, prediabetes blog, health tips, diabetes prevention, wellness articles"
        image="/images/blog-og.png"
        url="/blog"
      />

      <div className="min-h-screen">
        {/* ─── HERO SECTION ─── */}
        <section className="bg-gradient-to-br from-teal-600 to-emerald-700 py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Prediabetes & Blood Sugar Insights
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-teal-100">
              Evidence-based guides to reverse prediabetes naturally and take
              control of your health
            </p>
          </div>
        </section>

        {/* ─── MEDICAL DISCLAIMER ─── */}
        <div className="bg-amber-50 border-b-2 border-amber-200 py-4">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <span
                className="text-amber-600 flex-shrink-0 text-base mt-0.5"
                aria-hidden="true"
              >
                &#9888;
              </span>
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Medical Disclaimer:</strong> All articles on
                ThriveHealth360 are for general educational and informational
                purposes only and are{' '}
                <strong>
                  not a substitute for professional medical advice, diagnosis, or
                  treatment
                </strong>
                . Supplements and interventions discussed have not been evaluated
                by the FDA, MHRA, TGA, or Health Canada and are not intended to
                diagnose, treat, cure, or prevent any disease. Individual results
                vary and are not guaranteed. Health regulations differ by country
                — content may not apply in your jurisdiction. Always consult a
                qualified healthcare provider before changing your diet,
                medications, or supplement regimen.{' '}
                <Link
                  to="/medical-disclaimer"
                  className="underline font-semibold hover:text-amber-900"
                >
                  Full Medical Disclaimer &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ─── AFFILIATE DISCLOSURE ─── */}
        <AffiliateDisclosure
          context="supplement-reviews"
          className="border-b border-blue-200"
        />

        {/* ─── FEATURED ARTICLE ─── */}
        {featuredMeta && (
          <section className="py-16">
            <div className="container mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Featured Article
              </h2>
              <Card className="md:flex gap-6 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
                <div className="md:w-1/3 h-64 bg-emerald-100 rounded-lg mb-4 md:mb-0 overflow-hidden flex-shrink-0">
                  <img
                    src={featuredMeta.thumbnail ?? featuredMeta.image}
                    alt={featuredMeta.title}
                    className="w-full h-full object-cover"
                    width={600}
                    height={480}
                    onError={(e) => handleImageError(e, '0 0 600 480')}
                  />
                </div>
                <div className="md:w-2/3">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-3">
                    {/* FIXED (2026-08): was CATEGORY_CONFIG[featuredMeta.category].title
                        with no guard. blogMeta.category comes from whatever any
                        discovered .tsx file's own source happens to contain at
                        runtime — TypeScript's BlogCategoryKey typing doesn't
                        actually validate that at runtime, it just trusts the
                        cast. We already found one real instance of this exact
                        mismatch (glucotrust's blogMeta.category was "sleep"
                        instead of "supplements") — if any OTHER discovered
                        article has a typo'd or stale category value and ends
                        up selected as featuredMeta, this indexing crashed the
                        ENTIRE /blog page, not just that one article. */}
                    {CATEGORY_CONFIG[featuredMeta.category]?.title || featuredMeta.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {featuredMeta.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {featuredMeta.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock
                        className="w-4 h-4 mr-1"
                        aria-hidden="true"
                      />{' '}
                      {featuredMeta.readTime}
                    </span>
                    <Button variant="primary" href={featuredMeta.path}>
                      Read Article
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* ─── BROWSE BY CATEGORY ─── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            {healthTopics.map((category) => (
              <div key={category.key} className="mb-20">
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon
                      className={`w-8 h-8 ${iconColorMap[category.color]}`}
                      aria-hidden="true"
                    />
                    <h2 className="text-3xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 ml-11">
                    {category.description}
                  </p>
                </div>

                {/* Category Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.articles.map((article, articleIndex) => (
                    <Card
                      key={articleIndex}
                      className={`hover:shadow-lg transition overflow-hidden flex flex-col ${borderColorMap[category.color]} ${
                        !article.isPublished
                          ? 'opacity-75 relative'
                          : 'border-t-4'
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 ${bgColorMap[category.color]} relative`}
                      >
                        <img
                          src={article.thumbnail ?? article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                          width={400}
                          height={192}
                          loading="lazy"
                          onError={(e) => handleImageError(e)}
                        />
                        {!article.isPublished && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-white text-center">
                              <Lock
                                className="w-8 h-8 mx-auto mb-2"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-semibold">
                                Coming Soon
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 w-fit ${badgeColorMap[category.color]}`}
                      >
                        {category.title}
                      </span>

                      <h3
                        className={`text-lg font-semibold text-gray-900 mb-2 ${
                          article.isPublished
                            ? 'hover:text-emerald-600 transition-colors'
                            : ''
                        }`}
                      >
                        {article.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock
                            className="w-4 h-4 mr-1"
                            aria-hidden="true"
                          />{' '}
                          {article.readTime}
                        </span>
                        <Button
                          variant="ghost"
                          href={article.path}
                          disabled={!article.isPublished}
                          className={
                            !article.isPublished
                              ? 'opacity-50 cursor-not-allowed'
                              : ''
                          }
                        >
                          {article.isPublished ? 'Read More' : 'Coming Soon'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA SECTION ─── */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Reverse Your Prediabetes?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t just read about it. Follow our complete 5-step reversal
              plan with nutrition, exercise, monitoring, supplements, and stress
              management.
            </p>
            <Button
              variant="primary"
              href="/prediabetes-support"
              className="bg-white text-emerald-700 hover:bg-emerald-50"
            >
              Start the 5-Step Plan
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;