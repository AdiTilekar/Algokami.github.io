import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Finance & Banking Web Development',
  description: 'Secure financial websites and banking applications. Custom solutions for fintech, banks, and financial institutions.',
}

const features = [
  { icon: 'fa-lock', title: 'Bank-Grade Security', desc: 'SSL encryption, secure authentication, and compliance with financial regulations.' },
  { icon: 'fa-chart-line', title: 'Financial Dashboards', desc: 'Interactive dashboards for tracking investments, transactions, and analytics.' },
  { icon: 'fa-credit-card', title: 'Payment Integration', desc: 'Seamless integration with payment gateways and banking APIs.' },
  { icon: 'fa-calculator', title: 'Loan & EMI Calculators', desc: 'Interactive tools to help customers calculate loans and payments.' },
  { icon: 'fa-file-invoice-dollar', title: 'Document Management', desc: 'Secure document upload and verification systems.' },
  { icon: 'fa-mobile-screen', title: 'Mobile Banking Ready', desc: 'Responsive designs optimized for mobile banking experiences.' },
]

export default function FinancePage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Finance & Banking Solutions</h1>
          <p>Secure, compliant, and feature-rich websites for financial institutions and fintech companies.</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Finance Web Development Features</h2>
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
            <h2>Ready to Build Your Financial Platform?</h2>
            <p>Let&apos;s create a secure digital solution for your financial services.</p>
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
