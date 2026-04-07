import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Grocery & Retail Web Development',
  description: 'Online grocery stores and retail e-commerce platforms. Multi-vendor marketplaces with delivery management.',
}

const features = [
  { icon: 'fa-basket-shopping', title: 'Product Catalog', desc: 'Organized product listings with categories, filters, and search.' },
  { icon: 'fa-clock', title: 'Slot-Based Delivery', desc: 'Delivery time slot selection for customer convenience.' },
  { icon: 'fa-boxes-stacked', title: 'Inventory Management', desc: 'Real-time stock tracking and low-stock alerts.' },
  { icon: 'fa-percent', title: 'Offers & Coupons', desc: 'Promotional campaigns, discount codes, and loyalty rewards.' },
  { icon: 'fa-truck-fast', title: 'Delivery Tracking', desc: 'Real-time order tracking from store to doorstep.' },
  { icon: 'fa-store', title: 'Multi-Vendor Support', desc: 'Marketplace functionality with multiple seller storefronts.' },
]

export default function GroceryPage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Grocery & Retail Solutions</h1>
          <p>Feature-rich online stores for grocery delivery and retail businesses.</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Grocery Platform Features</h2>
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
            <h2>Ready to Launch Your Online Store?</h2>
            <p>Let&apos;s build an e-commerce platform that grows your business.</p>
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
