import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Architecture & Interior Design Web Development',
  description: 'Portfolio websites for architects and interior designers. Showcase your projects with stunning galleries and 3D renders.',
}

const features = [
  { icon: 'fa-compass-drafting', title: 'Project Portfolio', desc: 'Showcase your architectural projects with high-quality galleries.' },
  { icon: 'fa-cubes', title: '3D Render Galleries', desc: 'Display 3D visualizations and before/after transformations.' },
  { icon: 'fa-ruler-combined', title: 'Service Showcase', desc: 'Highlight your design services from concept to completion.' },
  { icon: 'fa-award', title: 'Awards & Recognition', desc: 'Display your achievements, certifications, and press mentions.' },
  { icon: 'fa-comments', title: 'Client Testimonials', desc: 'Feature reviews and success stories from satisfied clients.' },
  { icon: 'fa-envelope-open-text', title: 'Inquiry Forms', desc: 'Custom contact forms for project inquiries and consultations.' },
]

export default function ArchitecturePage() {
  return (
    <main className="service-detail-main">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Architecture & Interior Design</h1>
          <p>Stunning portfolio websites that showcase your design excellence.</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Architecture Web Development Features</h2>
            </div>
          </FadeInView>

          <div className="service-detail-grid">
            {features.map((feature, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="service-card">
                  <div className={`service-icon ${idx % 2 === 0 ? 'icon-blue' : 'icon-orange'}`}>
                    <i className={`fa-solid ${feature.icon}`} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner-section">
        <div className="container">
          <FadeInView>
            <h2>Ready to Showcase Your Design Work?</h2>
            <p>Let&apos;s create a portfolio that wins you more projects.</p>
            <div className="cta-buttons">
              <Link href="/get-quote" className="btn btn-primary">
                Get a Quote <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/#contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  )
}
