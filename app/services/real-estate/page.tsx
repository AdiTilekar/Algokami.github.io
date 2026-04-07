import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Real Estate Web Development',
  description: 'Property listing websites and real estate platforms. IDX integration, virtual tours, and lead generation solutions.',
}

const features = [
  { icon: 'fa-house', title: 'Property Listings', desc: 'Beautiful property showcase with advanced search and filtering options.' },
  { icon: 'fa-map-location-dot', title: 'Interactive Maps', desc: 'Location-based property search with neighborhood insights.' },
  { icon: 'fa-vr-cardboard', title: 'Virtual Tours', desc: '360° virtual tours and video walkthroughs for properties.' },
  { icon: 'fa-calculator', title: 'Mortgage Calculators', desc: 'Help buyers estimate monthly payments and affordability.' },
  { icon: 'fa-user-tie', title: 'Agent Profiles', desc: 'Showcase your team with detailed agent profiles and contact forms.' },
  { icon: 'fa-chart-pie', title: 'CRM Integration', desc: 'Seamless integration with real estate CRM systems for lead management.' },
]

export default function RealEstatePage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Real Estate Solutions</h1>
          <p>Stunning property websites that showcase listings and convert visitors into leads.</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Real Estate Web Development Features</h2>
            </div>
          </FadeInView>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
            <h2>Ready to Build Your Real Estate Website?</h2>
            <p>Let&apos;s create a property platform that drives leads and sales.</p>
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
