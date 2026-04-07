import FadeInView from '@/components/animations/FadeInView'
import { testimonials } from '@/data/testimonials'

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <FadeInView>
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
        </FadeInView>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <FadeInView key={t.id} delay={i * 0.1}>
              <div className="testimonial-card">
                <div className="quote-mark">&ldquo;</div>
                <p className="review-text">{t.review}</p>
                <div className="reviewer-row">
                  <div className="reviewer-avatar-initials">
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <strong className="reviewer-name">{t.name}</strong>
                    <span className="reviewer-role">{t.role}</span>
                  </div>
                </div>
                <div className="stars">{'★'.repeat(t.rating)}</div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
