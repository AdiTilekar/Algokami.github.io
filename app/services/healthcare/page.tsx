import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Healthcare Web Development',
  description: 'Custom healthcare websites and medical web applications. HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.',
}

const features = [
  { icon: 'fa-calendar-check', title: 'Online Appointment Booking', desc: 'Easy scheduling system for patients to book appointments online.' },
  { icon: 'fa-user-doctor', title: 'Doctor Profiles & Directories', desc: 'Showcase your medical staff with detailed profiles and specializations.' },
  { icon: 'fa-file-medical', title: 'Patient Portals', desc: 'Secure portals for patients to access records and communicate with providers.' },
  { icon: 'fa-shield-halved', title: 'HIPAA Compliant', desc: 'Built with security and compliance at the core to protect patient data.' },
  { icon: 'fa-mobile-screen', title: 'Mobile Responsive', desc: 'Accessible on all devices for patients on the go.' },
  { icon: 'fa-bell', title: 'Notifications & Reminders', desc: 'Automated appointment reminders and health notifications.' },
]

export default function HealthcarePage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Healthcare Solutions</h1>
          <p>Modern, secure, and user-friendly websites for healthcare providers, hospitals, and medical practices.</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Healthcare Web Development Features</h2>
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
            <h2>Ready to Build Your Healthcare Website?</h2>
            <p>Let&apos;s create a digital presence that serves your patients better.</p>
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
