import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'NGO & Non-Profit Web Development',
  description: 'Websites for NGOs, charities, and non-profit organizations. Donation systems, volunteer management, and impact showcasing.',
}

const features = [
  { icon: 'fa-hand-holding-dollar', title: 'Online Donations', desc: 'Secure donation forms with one-time and recurring giving options.' },
  { icon: 'fa-hands-helping', title: 'Volunteer Management', desc: 'Volunteer registration, scheduling, and hour tracking.' },
  { icon: 'fa-bullhorn', title: 'Campaign Pages', desc: 'Dedicated pages for fundraising campaigns with progress tracking.' },
  { icon: 'fa-chart-bar', title: 'Impact Reports', desc: 'Showcase your achievements with visual impact statistics.' },
  { icon: 'fa-calendar-days', title: 'Event Management', desc: 'Promote events with registration and ticketing features.' },
  { icon: 'fa-newspaper', title: 'News & Updates', desc: 'Blog and news section to share stories and updates.' },
]

export default function NgoPage() {
  return (
    <main className="service-detail-main">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>NGO & Non-Profit Solutions</h1>
          <p>Compelling websites that inspire action and drive donations for your cause.</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Non-Profit Web Development Features</h2>
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
            <h2>Ready to Amplify Your Impact?</h2>
            <p>Let&apos;s create a website that advances your mission.</p>
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
