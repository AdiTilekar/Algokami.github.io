import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export default function CTABannerSection() {
  return (
    <section id="cta" className="cta-banner-section">
      <div className="container">
        <FadeInView>
          <h2>Ready to Grow Your Business Online?</h2>
          <p>
            Join 500+ satisfied clients who have transformed their digital presence with our
            expert services. Let&apos;s build something great together.
          </p>
          <div className="cta-buttons">
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourusername'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-phone" /> Book a Free Call
            </a>
            <Link href="/get-quote" className="btn btn-white">
              Get Free Quote <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
