import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

interface SectorPackagesSectionProps {
  sector: string
}

const plans = [
  {
    name: 'Starter',
    price: 'INR 25,000+',
    timeline: '2-3 weeks',
    summary: 'Best for new businesses launching quickly with core pages and lead capture.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic on-page SEO',
      'Contact form integration',
      '1 month support',
    ],
  },
  {
    name: 'Growth',
    price: 'INR 60,000+',
    timeline: '4-6 weeks',
    summary: 'Best for scaling brands that need stronger conversions and automation.',
    features: [
      'Up to 15 pages',
      'Custom UI sections',
      'Performance optimization',
      'CRM or API integrations',
      '3 months support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'INR 1,20,000+',
    timeline: '8-12 weeks',
    summary: 'Best for advanced platforms with workflows, dashboards, and security layers.',
    features: [
      'Custom web app architecture',
      'Advanced integrations',
      'Role-based access and security',
      'Analytics dashboard',
      '6 months support',
    ],
  },
]

export default function SectorPackagesSection({ sector }: SectorPackagesSectionProps) {
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
                {plan.featured && <span className="service-package-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <p className="service-package-price">{plan.price}</p>
                <p className="service-package-timeline">Delivery: {plan.timeline}</p>
                <p className="service-package-summary">{plan.summary}</p>

                <ul className="service-package-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/get-quote" className="btn btn-primary service-package-cta">
                  Choose {plan.name} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
