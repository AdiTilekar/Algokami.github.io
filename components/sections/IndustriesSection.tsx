import FadeInView from '@/components/animations/FadeInView'
import { industries } from '@/data/industries'

export default function IndustriesSection() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">We Have Worked Across Multiple Industries</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Delivering successful solutions across multiple industries to grow businesses
              and enhance online presence.
            </p>
          </div>
        </FadeInView>

        <div className="industries-grid">
          {industries.map((industry, i) => (
            <FadeInView key={industry.id} direction="none" delay={i * 0.05}>
              <div className="industry-item">
                <div className="industry-icon">
                  <i className={`fa-solid ${industry.icon}`} />
                </div>
                <span>{industry.name}</span>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
