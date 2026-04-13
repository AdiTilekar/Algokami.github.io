import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const blogPosts = [
  {
    slug: 'seo-tips-2025',
    title: '10 SEO Tips That Will Skyrocket Your Rankings in 2025',
    excerpt: 'Discover the most effective SEO strategies to boost your website visibility and drive organic traffic.',
    category: 'SEO',
    date: '2025-03-15',
    coverImage: '/images/blog/blog-1.webp',
    author: 'Algokami Infotech',
    content: `
      <h2>Introduction</h2>
      <p>Search engine optimization continues to evolve rapidly. As we move into 2025, staying ahead of the curve is more important than ever. Here are the top strategies that will help you dominate search rankings this year.</p>
      
      <h2>1. Focus on Core Web Vitals</h2>
      <p>Google's Core Web Vitals remain a critical ranking factor. These metrics measure loading performance, interactivity, and visual stability. Ensure your website loads in under 2.5 seconds, responds to user input within 100 milliseconds, and maintains visual stability as content loads.</p>
      
      <h2>2. Optimize for AI Search</h2>
      <p>With AI-powered search becoming mainstream, optimizing for conversational queries is essential. Focus on natural language content that answers questions directly. Structure your content to be easily parsed by AI systems.</p>
      
      <h2>3. Create High-Quality, Original Content</h2>
      <p>Quality content remains king. Focus on creating original, valuable content that demonstrates expertise, authoritativeness, and trustworthiness (E-A-T). Avoid thin content and prioritize depth over quantity.</p>
      
      <h2>4. Mobile-First Indexing</h2>
      <p>Ensure your website is fully optimized for mobile devices. Google primarily uses the mobile version of your site for indexing and ranking. Test your site's mobile experience regularly.</p>
      
      <h2>5. Voice Search Optimization</h2>
      <p>Voice search continues to grow. Optimize for conversational keywords and questions. Use structured data to help search engines understand your content better.</p>
      
      <h2>Conclusion</h2>
      <p>SEO is an ongoing process that requires constant adaptation. By implementing these strategies, you'll be well-positioned to achieve higher rankings and drive more organic traffic to your website in 2025.</p>
    `,
  },
  {
    slug: 'web-design-trends',
    title: 'Top Web Design Trends Dominating 2025',
    excerpt: 'Stay ahead of the curve with these cutting-edge design trends that are reshaping the digital landscape.',
    category: 'Design',
    date: '2025-02-28',
    coverImage: '/images/blog/blog-2.webp',
    author: 'Algokami Infotech',
    content: `
      <h2>Introduction</h2>
      <p>Web design is constantly evolving, and 2025 brings exciting new trends that are transforming how we create digital experiences. Let's explore the most impactful design trends shaping the web this year.</p>
      
      <h2>1. Dark Mode Design</h2>
      <p>Dark mode has become a standard feature, not just a trend. Users appreciate the reduced eye strain and battery savings. Design your websites with dark mode in mind from the start.</p>
      
      <h2>2. Micro-Interactions</h2>
      <p>Small, subtle animations that respond to user actions create a more engaging experience. These micro-interactions provide feedback and guide users through your interface naturally.</p>
      
      <h2>3. 3D Elements and Immersive Design</h2>
      <p>With improved browser capabilities, 3D elements are becoming more common. They add depth and visual interest while creating memorable user experiences.</p>
      
      <h2>4. Minimalist and Clean Layouts</h2>
      <p>Less is more. Clean, minimalist designs with ample white space help users focus on what matters. Remove clutter and prioritize essential elements.</p>
      
      <h2>Conclusion</h2>
      <p>Staying current with design trends helps create modern, engaging websites that resonate with users. Apply these trends thoughtfully to enhance user experience.</p>
    `,
  },
  {
    slug: 'personalized-website-development-guide',
    title: 'Personalized Website Development: A Budget-Friendly Guide for Businesses',
    excerpt: 'Learn how personalized website development helps businesses launch faster, convert better, and stay within budget.',
    category: 'Web Development',
    date: '2025-02-10',
    coverImage: '/images/blog/blog-3.webp',
    author: 'Algokami Infotech',
    content: `
      <h2>Introduction</h2>
      <p>Personalized website development helps small and growing businesses stand out online without overspending. A tailored website can improve trust, generate better leads, and support long-term growth.</p>
      
      <h2>1. Start With Business-Specific Planning</h2>
      <p>Before design begins, define your audience, goals, and conversion actions. A personalized site should reflect your services, pricing model, and customer journey, not a generic template.</p>
      
      <h2>2. Build a Conversion-Focused Structure</h2>
      <p>Use clear section flow, strong calls to action, and trust elements like testimonials and project highlights. Visitors should quickly understand why they should choose your business.</p>
      
      <h2>3. Keep Performance and Mobile First</h2>
      <p>Your website must load quickly, work perfectly on mobile, and provide a smooth experience across devices. Better performance improves both user satisfaction and search visibility.</p>
      
      <h2>4. Personalize Content for Your Ideal Clients</h2>
      <p>Write copy that addresses real client pain points and outcomes. Personalized messaging increases engagement and helps convert visitors into qualified inquiries.</p>
      
      <h2>5. Choose Budget-Friendly Scalability</h2>
      <p>Pick technology that allows phased growth. Start with essential pages and features, then expand as your business scales to keep your development budget under control.</p>
      
      <h2>Conclusion</h2>
      <p>A personalized website is one of the best investments for business growth when built with the right strategy. The right web development partner helps you stay budget-friendly while delivering premium quality and results.</p>
    `,
  },
]

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}

  const canonicalPath = `/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'article',
      url: canonicalPath,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    image: [post.coverImage],
  }

  return (
    <main className="page-shell">
      <article className="blog-post-shell">
        <Link href="/blog" className="service-link blog-back-link">
          <i className="fa-solid fa-arrow-left" /> Back to Blog
        </Link>
        <span className="blog-category blog-category-static">
          {post.category}
        </span>
        <h1 className="section-title">{post.title}</h1>
        <div className="blog-card-meta blog-post-meta">
          <span><i className="fa-regular fa-calendar" /> {formatDate(post.date)}</span>
          <span><i className="fa-regular fa-user" /> {post.author}</span>
        </div>
        <div className="blog-post-image-wrap">
          <Image src={post.coverImage} alt={post.title} fill className="blog-post-image" />
        </div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="blog-inline-cta">
          <h3>Need A Website Like This For Your Business?</h3>
          <p>Compare our website packages and choose the plan that matches your budget and timeline.</p>
          <div className="cta-buttons blog-inline-cta-buttons">
            <Link href="/plans" className="btn btn-primary">View Pricing & Packages</Link>
            <Link href="/get-quote" className="btn btn-outline">Get Custom Proposal</Link>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </article>
    </main>
  )
}

