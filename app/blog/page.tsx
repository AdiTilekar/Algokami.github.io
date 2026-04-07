import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights, tips, and strategies on web development and business growth.',
}

const blogPosts = [
  {
    slug: 'seo-tips-2025',
    title: '10 SEO Tips That Will Skyrocket Your Rankings in 2025',
    excerpt: 'Discover the most effective SEO strategies to boost your website visibility and drive organic traffic.',
    category: 'SEO',
    date: '2025-03-15',
    icon: 'fa-magnifying-glass',
    author: 'Algokami Infotech',
  },
  {
    slug: 'web-design-trends',
    title: 'Top Web Design Trends Dominating 2025',
    excerpt: 'Stay ahead of the curve with these cutting-edge design trends that are reshaping the digital landscape.',
    category: 'Design',
    date: '2025-02-28',
    icon: 'fa-palette',
    author: 'Algokami Infotech',
  },
  {
    slug: 'digital-marketing-guide',
    title: 'The Complete Guide to Digital Marketing for Small Businesses',
    excerpt: 'A comprehensive guide covering all aspects of digital marketing to help small businesses grow online.',
    category: 'Marketing',
    date: '2025-02-10',
    icon: 'fa-bullhorn',
    author: 'Algokami Infotech',
  },
]

export default function BlogPage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Blog</span>
          <h1>Latest Insights & Updates</h1>
          <p>
            Expert knowledge on web development and business growth.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <FadeInView key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-icon">
                    <i className={`fa-solid ${post.icon}`} />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span><i className="fa-regular fa-calendar" /> {formatDate(post.date)}</span>
                    </div>
                    <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '10px', lineHeight: 1.4 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '16px' }}>
                      {post.excerpt}
                    </p>
                    <span className="blog-read-more">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </Link>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
