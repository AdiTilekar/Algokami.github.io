import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'On-Demand Services Web Development',
  description: 'On-demand service platforms and apps. Build your own Uber-like or TaskRabbit-style marketplace.',
}

const features = [
  { icon: 'fa-bolt', title: 'Real-Time Booking', desc: 'Instant service booking with live availability and scheduling.' },
  { icon: 'fa-location-crosshairs', title: 'GPS Tracking', desc: 'Real-time location tracking for service providers.' },
  { icon: 'fa-user-gear', title: 'Provider Dashboard', desc: 'Complete dashboard for service providers to manage jobs.' },
  { icon: 'fa-star-half-stroke', title: 'Ratings & Reviews', desc: 'Two-way rating system for quality assurance.' },
  { icon: 'fa-wallet', title: 'In-App Payments', desc: 'Secure payment processing with multiple payment options.' },
  { icon: 'fa-bell', title: 'Push Notifications', desc: 'Real-time updates for bookings, arrivals, and completions.' },
]

export default function OnDemandPage() {
  return (
    <main className="service-detail-main">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>On-Demand Service Platforms</h1>
          <p>Build powerful on-demand marketplaces connecting customers with service providers.</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">On-Demand Platform Features</h2>
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
            <h2>Ready to Build Your On-Demand Platform?</h2>
            <p>Let&apos;s create a marketplace that connects customers with providers.</p>
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
