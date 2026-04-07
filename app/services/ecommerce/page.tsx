import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'E-Commerce Development Services',
  description: 'Custom e-commerce solutions to help you sell online. We build Shopify, WooCommerce, and custom e-commerce platforms.',
}

const services = [
  { icon: 'fa-store', title: 'Shopify Development', description: 'Custom Shopify stores with optimized themes and seamless checkout experiences.' },
  { icon: 'fa-cart-shopping', title: 'WooCommerce Development', description: 'Powerful WooCommerce solutions integrated with WordPress for flexibility.' },
  { icon: 'fa-code', title: 'Custom E-Commerce', description: 'Fully custom e-commerce platforms tailored to your unique business needs.' },
  { icon: 'fa-credit-card', title: 'Payment Integration', description: 'Secure payment gateway integration with multiple payment options.' },
  { icon: 'fa-truck-fast', title: 'Shipping Integration', description: 'Automated shipping solutions with real-time tracking and logistics.' },
  { icon: 'fa-chart-bar', title: 'Analytics & Reporting', description: 'Comprehensive analytics to track sales, customers, and business growth.' },
]

export default function EcommercePage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Services</span>
          <h1>E-Commerce Development</h1>
          <p>
            Build a powerful online store that converts visitors into customers
            with our expert e-commerce development services.
          </p>
          <Link href="/#contact" className="btn btn-primary">Launch Your Store</Link>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg-light)' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">E-Commerce Solutions</span>
              <h2 className="section-title">What We Offer</h2>
            </div>
          </FadeInView>

          <div className="services-grid">
            {services.map((service, i) => (
              <FadeInView key={service.title} delay={i * 0.1}>
                <div className="service-card">
                  <div className="service-icon icon-blue">
                    <i className={`fa-solid ${service.icon}`} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">Features</span>
              <h2 className="section-title">Built for Success</h2>
            </div>
          </FadeInView>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: 'fa-bolt', label: 'Fast Performance' },
              { icon: 'fa-mobile', label: 'Mobile Optimized' },
              { icon: 'fa-lock', label: 'Secure Checkout' },
              { icon: 'fa-magnifying-glass', label: 'SEO Friendly' },
            ].map((feature, i) => (
              <FadeInView key={feature.label} delay={i * 0.1}>
                <div style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ 
                    width: '64px', height: '64px', 
                    background: 'var(--bg-light)', 
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: '24px',
                    color: 'var(--color-accent)'
                  }}>
                    <i className={`fa-solid ${feature.icon}`} />
                  </div>
                  <strong style={{ color: 'var(--color-primary)' }}>{feature.label}</strong>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-section">
        <div className="container">
          <FadeInView>
            <h2>Ready to Sell Online?</h2>
            <p>Let&apos;s build an e-commerce store that grows your business.</p>
            <div className="cta-buttons">
              <Link href="/#contact" className="btn btn-primary">
                Get Free Quote <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  )
}
