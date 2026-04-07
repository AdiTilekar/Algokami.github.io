'use client'
import { useState } from 'react'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import { formatDate } from '@/lib/utils'

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

const categories = ['All', 'SEO', 'Design', 'Marketing', 'Development']

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeTab)

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">Blog</span>
            <h2 className="section-title">Latest Insights & Updates</h2>
            <p className="section-subtitle">
              Stay updated with the latest trends, tips, and strategies in web development.
            </p>
          </div>

          <div className="blog-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-tab ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInView>

        <div className="blog-grid">
          {filtered.map((post, i) => (
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
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
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
  )
}
