import FadeInView from '@/components/animations/FadeInView'
import { featuredWork } from '@/data/featuredWork'

export default function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="featured-work-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Featured Client Projects</h2>
            <p className="section-subtitle">
              Live websites we have delivered for real businesses.
            </p>
          </div>
        </FadeInView>

        <div className="featured-work-grid">
          {featuredWork.map((item, index) => (
            <FadeInView key={item.id} delay={index * 0.1}>
              <article className="featured-work-card">
                <span className="featured-work-sector">{item.sector}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-work-link"
                >
                  View Project <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
