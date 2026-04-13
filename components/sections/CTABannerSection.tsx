import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export default function CTABannerSection() {
  return (
    <section id="cta" className="cta-banner-section">
      <div className="container">
        <FadeInView>
          <h2>Ready To Choose A Plan And Launch Your Website?</h2>
          <p>
            Compare packages, lock your scope, and start building with a team focused on
            fast delivery, quality, and measurable business outcomes.
          </p>
          <div className="cta-buttons">
            <Link href="/plans" className="btn btn-primary">
              View Pricing & Packages <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link href="/get-quote" className="btn btn-white">
              Get Custom Proposal <i className="fa-solid fa-file-signature" />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
