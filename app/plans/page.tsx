import type { Metadata } from 'next'
import SectorPackagesSection from '@/components/sections/SectorPackagesSection'

export const metadata: Metadata = {
  title: 'Pricing & Packages | Affordable Website Development India',
  description:
    'Compare our Starter, Growth, and Enterprise website packages with transparent pricing, clear delivery milestones, and support included.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I choose the right package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starter is ideal for launch-ready business websites, Growth for scaling teams, and Enterprise for advanced integrations and workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I upgrade later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can start with one package and upgrade features as your business grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does payment work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We follow milestone-based payments so you pay as project phases are completed.',
      },
    },
  ],
}

export default function PlansPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Pricing Plans</span>
          <h1>Pricing & Packages That Help You Launch Faster</h1>
          <p>
            Pick your package in minutes. Every plan includes strategy, design, development,
            quality checks, and guided support after launch.
          </p>
          <div className="plans-urgency-banner">
            <i className="fa-solid fa-fire" /> April Booking Offer: Limited onboarding slots available this month.
          </div>
        </div>
      </section>

      <SectorPackagesSection sector="Your Business" />

      <section className="service-detail-section service-detail-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Businesses Trust Us</span>
            <h2 className="section-title">Everything You Need To Buy With Confidence</h2>
            <p className="section-subtitle">
              No hidden surprises. Just clear scope, practical timelines, and full visibility
              from kickoff to launch.
            </p>
          </div>

          <div className="service-detail-feature-grid">
            <div className="service-detail-feature-item">
              <div className="service-detail-feature-icon"><i className="fa-solid fa-file-invoice-dollar" /></div>
              <strong>Transparent Pricing</strong>
              <p className="service-detail-feature-copy">Clear package pricing and documented inclusions before work begins.</p>
            </div>
            <div className="service-detail-feature-item">
              <div className="service-detail-feature-icon"><i className="fa-solid fa-list-check" /></div>
              <strong>Milestone Delivery</strong>
              <p className="service-detail-feature-copy">Defined phases, regular updates, and predictable progress checkpoints.</p>
            </div>
            <div className="service-detail-feature-item">
              <div className="service-detail-feature-icon"><i className="fa-solid fa-shield-heart" /></div>
              <strong>Post-Launch Support</strong>
              <p className="service-detail-feature-copy">Support period included so your team launches with confidence.</p>
            </div>
            <div className="service-detail-feature-item">
              <div className="service-detail-feature-icon"><i className="fa-solid fa-gauge-high" /></div>
              <strong>Performance Focus</strong>
              <p className="service-detail-feature-copy">Built for speed, mobile usability, and conversion-ready user journeys.</p>
            </div>
          </div>

          <div className="plans-proof-strip">
            <span><i className="fa-solid fa-check" /> 120+ releases delivered</span>
            <span><i className="fa-solid fa-check" /> 96% client retention</span>
            <span><i className="fa-solid fa-check" /> 24/7 support mindset</span>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container page-content-narrow">
          <div className="section-header section-header-compact">
            <span className="section-label">Quick FAQs</span>
            <h2 className="section-title">Common Questions Before Choosing A Plan</h2>
          </div>

          <div className="value-grid">
            <article className="value-card">
              <h3>How do I choose the right package?</h3>
              <p>Starter is best for launch-ready business websites, Growth fits scaling teams, and Enterprise suits advanced workflows and integrations.</p>
            </article>
            <article className="value-card">
              <h3>Can I upgrade later?</h3>
              <p>Yes. You can begin with a lower package and upgrade features as your business grows.</p>
            </article>
            <article className="value-card">
              <h3>How does payment work?</h3>
              <p>Payment is milestone-based. You pay as agreed project phases are completed.</p>
            </article>
            <article className="value-card">
              <h3>Do you provide support after launch?</h3>
              <p>Yes. Every package includes a defined support period for stability and confidence post-launch.</p>
            </article>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
