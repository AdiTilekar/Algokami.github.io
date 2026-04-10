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
    slug: 'digital-marketing-guide',
    title: 'The Complete Guide to Digital Marketing for Small Businesses',
    excerpt: 'A comprehensive guide covering all aspects of digital marketing to help small businesses grow online.',
    category: 'Marketing',
    date: '2025-02-10',
    coverImage: '/images/blog/blog-3.webp',
    author: 'Algokami Infotech',
    content: `
      <h2>Introduction</h2>
      <p>Digital marketing is essential for small businesses looking to grow in today's competitive landscape. This comprehensive guide will help you understand and implement effective digital marketing strategies.</p>
      
      <h2>1. Building Your Online Presence</h2>
      <p>Start with a professional website that clearly communicates your value proposition. Ensure it's mobile-friendly, fast, and easy to navigate. Your website is your digital storefront.</p>
      
      <h2>2. Social Media Marketing</h2>
      <p>Choose the right social platforms for your audience. Focus on building genuine connections rather than just broadcasting messages. Consistency and authenticity are key.</p>
      
      <h2>3. Email Marketing</h2>
      <p>Build an email list and nurture relationships with regular, valuable content. Email remains one of the highest ROI marketing channels available.</p>
      
      <h2>4. Content Marketing</h2>
      <p>Create valuable content that addresses your audience's needs and questions. Blog posts, videos, and guides establish your expertise and attract organic traffic.</p>
      
      <h2>5. Measuring Success</h2>
      <p>Track key metrics like website traffic, conversion rates, and customer acquisition costs. Use data to refine your strategies and improve results over time.</p>
      
      <h2>Conclusion</h2>
      <p>Digital marketing success comes from consistent effort and continuous improvement. Start with the basics, measure your results, and adapt your strategies based on what works.</p>
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

  return (
    <main style={{ paddingTop: '70px' }}>
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 5%' }}>
        <Link href="/blog" className="service-link" style={{ marginBottom: '24px', display: 'inline-flex' }}>
          <i className="fa-solid fa-arrow-left" /> Back to Blog
        </Link>
        <span className="blog-category" style={{ position: 'static', marginBottom: '16px', display: 'inline-block' }}>
          {post.category}
        </span>
        <h1 className="section-title">{post.title}</h1>
        <div className="blog-card-meta" style={{ margin: '16px 0 32px' }}>
          <span><i className="fa-regular fa-calendar" /> {formatDate(post.date)}</span>
          <span><i className="fa-regular fa-user" /> {post.author}</span>
        </div>
        <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '40px' }}>
          <Image src={post.coverImage} alt={post.title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}

