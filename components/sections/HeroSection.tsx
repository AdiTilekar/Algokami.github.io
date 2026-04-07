import dynamic from 'next/dynamic'
import Link from 'next/link'
import TypewriterText from '@/components/animations/TypewriterText'
import CountUp from '@/components/animations/CountUp'
import FadeInView from '@/components/animations/FadeInView'

const ParticlesBackground = dynamic(
  () => import('@/components/animations/ParticlesBackground'),
  { ssr: false }
)

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <ParticlesBackground />

      <div className="hero-content container">
        <FadeInView direction="left" className="hero-left">
          <span className="badge hero-badge">✦ Mobile-first digital partner</span>
          <h1 className="hero-title">Premium websites that turn mobile traffic into enquiries</h1>
          <p className="hero-subtitle">
            Expert Solutions for{' '}
            <TypewriterText
              words={['Healthcare', 'Finance', 'E-Commerce', 'Education', 'Real Estate']}
            />
          </p>
          <p className="hero-description">
            We build fast, one-screen hero experiences, sharper service cards, and conversion paths
            that feel premium on every phone.
          </p>
          <div className="hero-buttons">
            <Link href="/get-quote" className="btn btn-primary hero-cta">
              Get Free Quote <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link href="/#services" className="btn btn-outline-light hero-cta">
              Our Services
            </Link>
          </div>

          <div className="hero-proof-row" aria-label="Business highlights">
            <div className="hero-proof-item">
              <CountUp target={5} suffix="+" className="hero-proof-value" />
              <span className="hero-proof-label">Major projects</span>
            </div>
            <div className="hero-proof-item">
              <CountUp target={98} suffix="%" className="hero-proof-value" />
              <span className="hero-proof-label">Client satisfaction</span>
            </div>
            <div className="hero-proof-item">
              <CountUp target={2} suffix="+" className="hero-proof-value" />
              <span className="hero-proof-label">Years experience</span>
            </div>
          </div>
        </FadeInView>

        <FadeInView direction="right" delay={0.2} className="hero-right">
          <div className="hero-visual" aria-label="Mobile-first website preview">
            <div className="hero-visual-glow hero-visual-glow-one" />
            <div className="hero-visual-glow hero-visual-glow-two" />

            <div className="hero-visual-chip-row">
              <span className="hero-visual-chip">Mobile-first</span>
              <span className="hero-visual-chip hero-visual-chip-alt">Premium UI</span>
            </div>

            <div className="hero-visual-card hero-visual-main">
              <span className="hero-visual-label">Featured build</span>
              <h3>Clear, high-trust layouts that feel polished before the first scroll.</h3>
              <p>
                Built for fast decisions, stronger enquiries, and a premium first impression on
                small screens.
              </p>

              <div className="hero-visual-metrics">
                <div>
                  <strong>5+</strong>
                  <span>Live projects</span>
                </div>
                <div>
                  <strong>2s</strong>
                  <span>Quick scan</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Mobile focus</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-stack">
              <div className="hero-visual-card hero-visual-mini">
                <i className="fa-solid fa-suitcase-medical" aria-hidden="true" />
                <div>
                  <strong>Healthcare</strong>
                  <span>Trust-led booking journeys</span>
                </div>
              </div>
              <div className="hero-visual-card hero-visual-mini">
                <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
                <div>
                  <strong>E-Commerce</strong>
                  <span>Sharper product discovery</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
