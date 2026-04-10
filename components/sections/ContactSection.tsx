'use client'
import { useState } from 'react'
import FadeInView from '@/components/animations/FadeInView'
import type { ContactFormData } from '@/types'

const initialForm: ContactFormData = { name: '', email: '', phone: '', message: '' }

export default function ContactSection() {
  const [form, setForm]     = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <FadeInView direction="left" className="contact-info">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Don&apos;t Hesitate to Contact Us</h2>
          <p className="section-subtitle">
            Fill out the form and a representative will contact you within a few hours.
            For urgent matters, call us directly.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon"><i className="fa-solid fa-phone" /></div>
              <div>
                <strong>Phone</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:8857066841">8857066841</a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fa-solid fa-envelope" /></div>
              <div>
                <strong>Email</strong>
                <span>algokamitech@gmail.com</span>
              </div>
            </div>
          </div>
        </FadeInView>

        <FadeInView direction="right" delay={0.2}>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text" id="name" name="name"
                    value={form.name} onChange={handleChange}
                    placeholder="John Doe" required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email" id="email" name="email"
                    value={form.email} onChange={handleChange}
                    placeholder="john@example.com" required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel" id="phone" name="phone"
                  value={form.phone} onChange={handleChange}
                  placeholder="8857066841"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message" rows={4}
                  value={form.message} onChange={handleChange}
                  placeholder="Tell us about your project..." required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  'Sending…'
                ) : (
                  <><span>Send Message</span><i className="fa-solid fa-paper-plane" /></>
                )}
              </button>

              {status === 'success' && (
                <p className="form-message success">
                  ✓ Thank you! We will contact you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="form-message error">
                  ✗ Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
