import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'
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
              <TiltCard maxTilt={7}>
                <div className="testimonial-card">
                  <div className="testimonial-card-top">
                    <div className="reviewer-row">
                      <div className="reviewer-avatar-initials">
                        {getInitials(t.name)}
                      </div>
                      <div>
                        <strong className="reviewer-name">{t.name}</strong>
                        <span className="reviewer-role">{t.role}</span>
                      </div>
                    </div>
                    <div className="testimonial-rating" aria-label={`${t.rating} out of 5 stars`}>
                      <span className="stars">{'★'.repeat(t.rating)}</span>
                      <span className="rating-score">{t.rating}.0</span>
                    </div>
                  </div>
                  <div className="quote-mark">&ldquo;</div>
                  <p className="review-text">{t.review}</p>
                </div>
              </TiltCard>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
