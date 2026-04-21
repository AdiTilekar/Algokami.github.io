import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'
import PageHero from '@/components/layout/PageHero'
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
    slug: 'personalized-website-development-guide',
    title: 'Personalized Website Development: A Budget-Friendly Guide for Businesses',
    excerpt: 'Learn how personalized website development helps businesses launch faster, convert better, and stay within budget.',
    category: 'Web Development',
    date: '2025-02-10',
    icon: 'fa-code',
    author: 'Algokami Infotech',
  },
]

export default function BlogPage() {
  return (
    <main className="page-shell">
      <PageHero
        label="Blog"
        title="Latest Insights & Updates"
        subtitle="Expert knowledge on web development, design, and business growth from the Algokami team."
        badges={[
          { icon: 'fa-pen-nib', text: 'SEO & Design insights' },
          { icon: 'fa-code', text: 'Web Development tips' },
          { icon: 'fa-chart-line', text: 'Business growth guides' },
        ]}
      />

      <section className="service-detail-section service-detail-section-alt">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <FadeInView key={post.slug} delay={i * 0.1}>
                <TiltCard maxTilt={7}>
                  <Link href={`/blog/${post.slug}`} className="blog-card">
                    <div className="blog-card-icon">
                      <i className={`fa-solid ${post.icon}`} />
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span><i className="fa-regular fa-calendar" /> {formatDate(post.date)}</span>
                      </div>
                      <h2 className="blog-card-title">{post.title}</h2>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <span className="blog-read-more">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
