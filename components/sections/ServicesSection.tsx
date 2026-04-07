import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import { services } from '@/data/services'

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2 className="section-title">Our Provided Services</h2>
            <p className="section-subtitle">
              We ensure seamless user experience, high performance, and cutting-edge technology
              to drive growth and engagement.
            </p>
          </div>
        </FadeInView>

        <div className="services-grid">
          {services.map((service, i) => (
            <FadeInView key={service.id} delay={i * 0.1}>
              <article className="service-card">
                <Link href={service.link} className="service-card-link" aria-label={`Learn more about ${service.title}`}>
                  <div className={`service-icon icon-${service.iconTheme === 'orange' ? 'orange' : 'blue'}`}>
                    <i className={`fa-solid ${service.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-link-btn">
                    Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </Link>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
