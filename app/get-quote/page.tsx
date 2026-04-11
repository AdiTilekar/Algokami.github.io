'use client'
import { useState } from 'react'
import type { Metadata } from 'next'
import FadeInView from '@/components/animations/FadeInView'

interface QuoteFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

const initialForm: QuoteFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

export default function GetQuotePage() {
  const [form, setForm] = useState<QuoteFormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', {
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
    <main className="page-shell">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Get Quote</span>
          <h1>Request a Free Quote</h1>
          <p>
            Tell us about your project and we&apos;ll provide a detailed quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="page-section-muted">
        <div className="container page-form-container">
          <FadeInView>
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} noValidate>
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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={form.phone} onChange={handleChange}
                      placeholder="8857066841"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text" id="company" name="company"
                      value={form.company} onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="personalized-website-development">Personalized Website Development</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="branding">Branding & PR</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget" name="budget"
                      value={form.budget} onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                      <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                      <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                      <option value="above-5l">Above ₹5,00,000</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..." required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary quote-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Submitting…'
                  ) : (
                    <><span>Submit Request</span><i className="fa-solid fa-paper-plane" /></>
                  )}
                </button>

                {status === 'success' && (
                  <p className="form-message success">
                    ✓ Thank you! We&apos;ll send your quote within 24 hours.
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
    </main>
  )
}
