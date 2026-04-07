import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Algokami Tech Solutions. We are here to help you grow your business online.',
}

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Get In Touch</h1>
          <p>
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond
            as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      {/* Map placeholder */}
      <section style={{ height: '400px', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <i className="fa-solid fa-map-location-dot" style={{ fontSize: '48px', marginBottom: '16px', color: 'var(--color-accent)' }} />
          <p>Google Maps embed would go here</p>
        </div>
      </section>
    </main>
  )
}
