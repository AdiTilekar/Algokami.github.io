import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Algokami Tech Solutions. We are here to help you grow your business online.',
}

export default function ContactPage() {
  return (
    <main className="page-shell">
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
      <section className="contact-map-placeholder">
        <div className="contact-map-message">
          <i className="fa-solid fa-map-location-dot contact-map-icon" />
          <p>Google Maps embed would go here</p>
        </div>
      </section>
    </main>
  )
}
