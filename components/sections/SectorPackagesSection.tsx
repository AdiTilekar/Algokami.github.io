import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'

interface SectorPackagesSectionProps {
  sector: string
}

const engagementTracks = [
  {
    name: 'Discovery Sprint',
    timeline: '3-5 business days',
    summary:
      'A focused scoping engagement to validate requirements, reduce risk, and produce a clear build-ready SOW.',
    features: [
      'Stakeholder discovery workshop',
      'Journey mapping for priority user flows',
      'Technical constraints and risk register',
      'Architecture and delivery recommendation',
      'Draft Statement of Work (SOW)',
      'Go or no-go checkpoint before development',
    ],
  },
  {
    name: 'Build Sprint',
    timeline: '2-6 weeks',
    summary:
      'Delivery-focused implementation for validated scope, with sprint reviews, QA gates, and measurable release goals.',
    features: [
      'Custom UI and component engineering',
      'CMS or third-party integration where required',
      'Baseline Lighthouse audit plus optimization plan',
      'Schema and technical SEO implementation for agreed pages',
      'Sprint demos with acceptance criteria sign-off',
      'Post-launch stabilization support window',
    ],
    featured: true,
  },
  {
    name: 'Platform Program',
    timeline: '6+ weeks',
    summary:
      'For larger product scopes that need phased delivery, integration governance, and long-term product support.',
    features: [
      'Custom web app architecture',
      'Security, roles, and permissions modeling',
      'API and payment integration strategy',
      'Observability, reporting, and release controls',
      'Phased rollout plan with milestone contracts',
      'Change-request and dependency management',
      'Dedicated account and engineering syncs',
    ],
  },
]

export default function SectorPackagesSection({ sector }: SectorPackagesSectionProps) {
  return (
    <section className="service-packages-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">Engagement Models</span>
            <h2 className="section-title">How We Scope And Build For {sector}</h2>
            <p className="section-subtitle">
              We start with discovery, then propose a right-sized delivery model.
              Final commercials are confirmed only after scope validation and SOW sign-off.
            </p>
          </div>
        </FadeInView>

        <div className="service-packages-grid">
          {engagementTracks.map((plan, index) => (
            <FadeInView key={plan.name} delay={index * 0.1}>
              {/* Featured card gets a static float animation; others get tilt */}
              <TiltCard maxTilt={plan.featured ? 4 : 9} floatOnly={false}>
                <article className={`service-package-card ${plan.featured ? 'featured' : ''}`}>
                  {plan.featured && <span className="service-package-badge">Recommended for active builds</span>}
                  <h3>{plan.name}</h3>
                  <p className="service-package-timeline">Typical timeline: {plan.timeline}</p>
                  <p className="service-package-summary">{plan.summary}</p>
                  <ul className="service-package-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i className="fa-solid fa-check" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="service-package-contact-note">
                    Includes a scope call and documented assumptions before any build commitment.
                  </p>

                  <Link href="/get-quote" className="btn btn-primary service-package-cta">
                    Schedule Scope Call <i className="fa-solid fa-calendar-check" aria-hidden="true" />
                  </Link>
                </article>
              </TiltCard>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
