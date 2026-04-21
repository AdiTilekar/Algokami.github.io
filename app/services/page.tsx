import type { Metadata } from 'next'
import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'
import PageHero from '@/components/layout/PageHero'
import Link from 'next/link'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Algokami Tech Solutions services for web development, e-commerce, web apps, SEO, and digital growth.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <PageHero
        label="Services"
        title="Built-to-Scale Digital Services"
        subtitle="Full-cycle web and app development for businesses that want faster delivery, better conversion, and dependable long-term growth."
        badges={[
          { icon: 'fa-code', text: 'Web & App Development' },
          { icon: 'fa-chart-line', text: 'Growth-focused' },
          { icon: 'fa-gauge-high', text: 'Performance-first' },
        ]}
      />

      <section className="service-detail-section service-detail-section-alt">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Core Service Areas</h2>
              <p className="section-subtitle">
                Click any service to explore how we tailor it for your industry and goals.
              </p>
            </div>
          </FadeInView>

          <div className="services-grid">
            {services.map((service, index) => (
              <FadeInView key={service.id} delay={index * 0.1}>
                <TiltCard maxTilt={8}>
                  <article className="service-card">
                    <Link href={service.link} className="service-card-link" aria-label={`Learn more about ${service.title}`}>
                      <div className="service-card-top">
                        <div className={`service-icon icon-${service.iconTheme === 'orange' ? 'orange' : 'blue'}`}>
                          <i className={`fa-solid ${service.icon}`} aria-hidden="true" />
                        </div>
                        <div className="service-card-copy">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                      </div>
                      <span className="service-link-btn">
                        Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                      </span>
                    </Link>
                  </article>
                </TiltCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-section">
        <div className="container">
          <FadeInView>
            <h2>Not Sure Which Service You Need?</h2>
            <p>Book a free 20-minute consultation and we'll map out the right approach for your business.</p>
            <div className="cta-buttons">
              <Link href="/get-quote" className="btn btn-primary">
                Get Free Proposal <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/contact" className="btn btn-outline-light">
                Contact Us
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  )
}