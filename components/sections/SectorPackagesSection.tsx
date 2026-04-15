import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

interface SectorPackagesSectionProps {
  sector: string
}

const plans = [
  {
    name: 'Starter',
    timeline: '7-10 days',
    summary:
      'Launch your online presence fast — professional, mobile-ready, and built to capture leads from day one.',
    features: [
      'Up to 8 pages',
      'Fully responsive design',
      'WhatsApp + contact form lead capture',
      'Basic on-page SEO setup',
      'Google Analytics integration',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Growth',
    timeline: '2-3 weeks',
    summary:
      'For brands ready to convert visitors into paying customers — with custom UI, automation, and real performance.',
    features: [
      'Up to 20 pages + blog',
      'Custom UI sections & animations',
      'CMS or third-party API integration',
      'Core Web Vitals performance tuning',
      'Advanced SEO + schema markup',
      '3 months priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    timeline: '4-6 weeks',
    summary:
      'Full-scale web platforms — custom dashboards, secure workflows, and integrations built to handle real business complexity.',
    features: [
      'Custom web app architecture',
      'Role-based access & security layers',
      'Analytics dashboard & reporting',
      'Advanced API & payment integrations',
      'Automated workflows & notifications',
      '6 months dedicated support',
    ],
  },
]

export default function SectorPackagesSection({ sector }: SectorPackagesSectionProps) {
  const callNumber = '8857066841'

  return (
    <section className="service-packages-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">Packages</span>
            <h2 className="section-title">Development Packages For {sector}</h2>
            <p className="section-subtitle">
              Pick a package based on your current growth stage. Every plan includes planning,
              design, development, QA, and post-launch support.
            </p>
          </div>
        </FadeInView>

        <div className="service-packages-grid">
          {plans.map((plan, index) => (
            <FadeInView key={plan.name} delay={index * 0.1}>
              <article className={`service-package-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="service-package-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <p className="service-package-timeline">Ready in {plan.timeline}</p>
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
                  Pricing discussed on WhatsApp after a quick scope call.
                </p>

                <Link href={`tel:${callNumber}`} className="btn btn-primary service-package-cta">
                  Call Now <i className="fa-solid fa-phone" aria-hidden="true" />
                </Link>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
