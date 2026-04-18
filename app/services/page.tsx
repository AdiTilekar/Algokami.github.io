import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore custom web development, web applications, e-commerce, UI/UX design, SEO, and maintenance services from Algokami Tech Solutions.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Services</span>
          <h1>Digital Services Built to Rank and Convert</h1>
          <p>
            Browse the core services we offer for businesses that need faster delivery,
            clearer user journeys, and stronger search visibility.
          </p>
        </div>
      </section>

      <section className="service-detail-section service-detail-section-alt">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Core Service Areas</h2>
              <p className="section-subtitle">
                Each service page goes deeper into the strategy, deliverables, and outcomes you can expect.
              </p>
            </div>
          </FadeInView>

          <div className="services-grid">
            {services.map((service, index) => (
              <FadeInView key={service.id} delay={index * 0.1}>
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
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}