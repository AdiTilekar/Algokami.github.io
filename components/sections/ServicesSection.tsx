import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'
import { services } from '@/data/services'

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2 className="section-title">Built-To-Scale Digital Services</h2>
            <p className="section-subtitle">
              Full-cycle web and app development for businesses that want faster delivery,
              better conversion, and dependable long-term growth.
            </p>
          </div>
        </FadeInView>

        <div className="services-grid">
          {services.map((service, i) => (
            <FadeInView key={service.id} delay={i * 0.1}>
              <TiltCard maxTilt={8}>
                <article className="service-card">
                  <Link
                    href={service.link}
                    className="service-card-link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <div className="service-card-top">
                      <div className={`service-icon icon-${service.iconTheme === 'orange' ? 'orange' : 'blue'}`}>
                        <i className={`fa-solid ${service.icon}`} aria-hidden="true" />
                      </div>
                      <div className="service-card-copy">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                    <span className="service-link-btn">
                      Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </span>
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
