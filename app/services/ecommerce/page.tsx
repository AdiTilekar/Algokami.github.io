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
    <main className="service-detail-main">
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
      <section className="service-detail-section service-detail-section-alt">
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
      <section className="service-detail-section">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">Features</span>
              <h2 className="section-title">Built for Success</h2>
            </div>
          </FadeInView>

          <div className="service-detail-feature-grid">
            {[
              { icon: 'fa-bolt', label: 'Fast Performance' },
              { icon: 'fa-mobile', label: 'Mobile Optimized' },
              { icon: 'fa-lock', label: 'Secure Checkout' },
              { icon: 'fa-magnifying-glass', label: 'SEO Friendly' },
            ].map((feature, i) => (
              <FadeInView key={feature.label} delay={i * 0.1}>
                <div className="service-detail-feature-item">
                  <div className="service-detail-feature-icon">
                    <i className={`fa-solid ${feature.icon}`} />
                  </div>
                  <strong>{feature.label}</strong>
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
