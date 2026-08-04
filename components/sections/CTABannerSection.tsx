import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export default function CTABannerSection() {
  return (
    <section id="cta" className="cta-banner-section">
      <div className="container">
        <FadeInView>
          <h2>Need A Scope You Can Approve Internally With Confidence?</h2>
          <p>
            Start with discovery, align technical assumptions, and receive a documented
            SOW before development begins.
          </p>
          <div className="cta-buttons">
            <Link href="/get-quote" className="btn btn-primary">
              Book Discovery Call <i className="fa-solid fa-calendar-check" />
            </Link>
            <Link href="/plans" className="btn btn-white">
              Review Engagement Tracks <i className="fa-solid fa-layer-group" />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
