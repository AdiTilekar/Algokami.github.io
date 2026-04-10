import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Tours & Travel Web Development',
  description: 'Travel agency websites and tour booking platforms. Custom solutions for travel companies and tour operators.',
}

const features = [
  { icon: 'fa-route', title: 'Tour Package Booking', desc: 'Showcase tour packages with itineraries, pricing, and online booking.' },
  { icon: 'fa-plane-departure', title: 'Flight & Hotel Search', desc: 'Integration with GDS systems for flight and hotel bookings.' },
  { icon: 'fa-map', title: 'Interactive Itineraries', desc: 'Day-by-day trip plans with maps and activity details.' },
  { icon: 'fa-camera', title: 'Destination Guides', desc: 'Rich content pages showcasing destinations with photos and tips.' },
  { icon: 'fa-users', title: 'Group Booking', desc: 'Special features for group tours and corporate travel.' },
  { icon: 'fa-headset', title: 'Customer Support', desc: 'Live chat and inquiry forms for travel assistance.' },
]

export default function TravelPage() {
  return (
    <main className="service-detail-main">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Tours & Travel Solutions</h1>
          <p>Inspiring travel websites that turn wanderlust into bookings.</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Travel Web Development Features</h2>
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
            <h2>Ready to Grow Your Travel Business?</h2>
            <p>Let&apos;s build a travel platform that inspires adventures.</p>
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
