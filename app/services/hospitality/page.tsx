import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Hotel & Restaurant Web Development',
  description: 'Hospitality websites with online booking, table reservations, and menu management. Solutions for hotels and restaurants.',
}

const features = [
  { icon: 'fa-bed', title: 'Room Booking System', desc: 'Real-time availability and instant booking for hotel rooms.' },
  { icon: 'fa-utensils', title: 'Table Reservations', desc: 'Online table booking with capacity management for restaurants.' },
  { icon: 'fa-book-open', title: 'Digital Menu', desc: 'Interactive menus with photos, descriptions, and dietary filters.' },
  { icon: 'fa-images', title: 'Gallery & Virtual Tours', desc: 'Showcase your property with stunning image galleries and 360° tours.' },
  { icon: 'fa-star', title: 'Reviews Integration', desc: 'Display guest reviews from Google, TripAdvisor, and more.' },
  { icon: 'fa-truck', title: 'Online Ordering', desc: 'Food delivery and takeaway ordering system integration.' },
]

export default function HospitalityPage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Hotel & Restaurant Solutions</h1>
          <p>Elegant websites with booking systems that increase reservations and enhance guest experiences.</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Hospitality Web Development Features</h2>
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
            <h2>Ready to Boost Your Hospitality Business?</h2>
            <p>Let&apos;s create a website that fills your rooms and tables.</p>
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
