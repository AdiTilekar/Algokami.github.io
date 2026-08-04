import type { Metadata } from 'next'
import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'
import PageHero from '@/components/layout/PageHero'
import SectorPackagesSection from '@/components/sections/SectorPackagesSection'

export const metadata: Metadata = {
  title: 'Engagement Models | Discovery, SOW, And Milestone Delivery',
  description:
    'Understand how Algokami scopes projects through discovery, drafts SOWs, and delivers through milestone-based execution.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How are estimates prepared?',
      acceptedAnswer: { '@type': 'Answer', text: 'Estimates are created after a discovery call where goals, integrations, constraints, and risks are documented in a draft scope.' },
    },
    {
      '@type': 'Question',
      name: 'Do you scope fixed engagements?',
      acceptedAnswer: { '@type': 'Answer', text: 'For smaller and clearly defined scopes, we may offer fixed engagements. For complex systems, commercials are finalized after discovery and SOW alignment.' },
    },
    {
      '@type': 'Question',
      name: 'How does payment work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Billing follows agreed milestones in the SOW. Payments are released per phase after review and acceptance criteria.' },
    },
  ],
}

const trustPoints = [
  { icon: 'fa-magnifying-glass-chart', title: 'Scope-First Estimation', desc: 'Commercials are based on documented assumptions, dependencies, and delivery risk.' },
  { icon: 'fa-file-signature', title: 'SOW + Change Control', desc: 'Feature boundaries and acceptance criteria are defined before implementation starts.' },
  { icon: 'fa-list-check', title: 'Milestone Billing', desc: 'Payments align with measurable phase outcomes instead of one upfront commitment.' },
  { icon: 'fa-gauge-high', title: 'Evidence-Based Optimization', desc: 'Performance and SEO work is tied to baseline audits, implementation tasks, and verification.' },
]

const faqs = [
  { q: 'How are estimates prepared?', a: 'We run a discovery call, identify requirements and constraints, then send a structured estimate and draft SOW.' },
  { q: 'Can I start small and expand later?', a: 'Yes. We can phase delivery so you launch core functionality first, then add lower-priority capabilities later.' },
  { q: 'How does payment work?', a: 'Payment is milestone-based and linked to phase outputs defined in the signed SOW.' },
  { q: 'How are performance and SEO tasks handled?', a: 'We define optimization work from baseline audits and map each task to measurable outcomes before implementation.' },
]

export default function PlansPage() {
  return (
    <main className="page-shell">
      <PageHero
        label="Engagement Models"
        title="Discovery First. SOW Next. Delivery In Milestones."
        subtitle="Use this page to understand our commercial model. Final effort is confirmed only after scope validation."
        notice={<><i className="fa-solid fa-circle-info" /> Complex integrations and platform features require discovery before final commercials.</>}
      />

      <SectorPackagesSection sector="Your Business" />

      {/* Trust section */}
      <section className="service-detail-section service-detail-section-alt">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">Why Businesses Trust Us</span>
              <h2 className="section-title">How Commercials And Delivery Stay Accountable</h2>
              <p className="section-subtitle">
                Scope clarity, milestone checkpoints, and transparent communication from kickoff to handover.
              </p>
            </div>
          </FadeInView>

          <div className="service-detail-feature-grid">
            {trustPoints.map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.1}>
                <div className="service-detail-feature-item">
                  <div className="service-detail-feature-icon">
                    <i className={`fa-solid ${item.icon}`} />
                  </div>
                  <strong>{item.title}</strong>
                  <p className="service-detail-feature-copy">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>

          <div className="plans-proof-strip">
            <span><i className="fa-solid fa-check" /> Discovery summary with assumptions and risk notes</span>
            <span><i className="fa-solid fa-check" /> SOW with acceptance criteria and milestones</span>
            <span><i className="fa-solid fa-check" /> Optimization tasks mapped to measurable KPIs</span>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="service-detail-section">
        <div className="container page-content-narrow">
          <FadeInView>
            <div className="section-header section-header-compact">
              <span className="section-label">Quick FAQs</span>
              <h2 className="section-title">Common Questions Before Scoping Starts</h2>
            </div>
          </FadeInView>

          <div className="value-grid">
            {faqs.map((faq, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <TiltCard maxTilt={5}>
                  <article className="value-card">
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </article>
                </TiltCard>
              </FadeInView>
            ))}
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
