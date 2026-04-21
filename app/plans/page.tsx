import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'
import PageHero from '@/components/layout/PageHero'
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
      acceptedAnswer: { '@type': 'Answer', text: 'Starter is ideal for launch-ready business websites, Growth for scaling teams, and Enterprise for advanced integrations and workflows.' },
    },
    {
      '@type': 'Question',
      name: 'Can I upgrade later?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can start with one package and upgrade features as your business grows.' },
    },
    {
      '@type': 'Question',
      name: 'How does payment work?',
      acceptedAnswer: { '@type': 'Answer', text: 'We follow milestone-based payments so you pay as project phases are completed.' },
    },
  ],
}

const trustPoints = [
  { icon: 'fa-file-invoice-dollar', title: 'Transparent Pricing', desc: 'Clear package pricing and documented inclusions before work begins.' },
  { icon: 'fa-list-check', title: 'Milestone Delivery', desc: 'Defined phases, regular updates, and predictable progress checkpoints.' },
  { icon: 'fa-shield-heart', title: 'Post-Launch Support', desc: 'Support period included so your team launches with confidence.' },
  { icon: 'fa-gauge-high', title: 'Performance Focus', desc: 'Built for speed, mobile usability, and conversion-ready user journeys.' },
]

const faqs = [
  { q: 'How do I choose the right package?', a: 'Starter is best for launch-ready business websites, Growth fits scaling teams, and Enterprise suits advanced workflows and integrations.' },
  { q: 'Can I upgrade later?', a: 'Yes. You can begin with a lower package and upgrade features as your business grows.' },
  { q: 'How does payment work?', a: 'Payment is milestone-based. You pay as agreed project phases are completed.' },
  { q: 'Do you provide support after launch?', a: 'Yes. Every package includes a defined support period for stability and confidence post-launch.' },
]

export default function PlansPage() {
  return (
    <main className="page-shell">
      <PageHero
        label="Pricing Plans"
        title="Pricing & Packages That Help You Launch Faster"
        subtitle="Pick your package in minutes. Every plan includes strategy, design, development, quality checks, and guided support after launch."
        notice={<><i className="fa-solid fa-fire" /> April Booking Offer: Limited onboarding slots available this month.</>}
      />

      <SectorPackagesSection sector="Your Business" />

      {/* Trust section */}
      <section className="service-detail-section service-detail-section-alt">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">Why Businesses Trust Us</span>
              <h2 className="section-title">Everything You Need To Buy With Confidence</h2>
              <p className="section-subtitle">
                No hidden surprises. Just clear scope, practical timelines, and full visibility from kickoff to launch.
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
            <span><i className="fa-solid fa-check" /> 120+ releases delivered</span>
            <span><i className="fa-solid fa-check" /> 96% client retention</span>
            <span><i className="fa-solid fa-check" /> 24/7 support mindset</span>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="service-detail-section">
        <div className="container page-content-narrow">
          <FadeInView>
            <div className="section-header section-header-compact">
              <span className="section-label">Quick FAQs</span>
              <h2 className="section-title">Common Questions Before Choosing A Plan</h2>
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
