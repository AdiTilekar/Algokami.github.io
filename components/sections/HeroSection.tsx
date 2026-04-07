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
          <span className="badge">✦ Web Development Experts</span>
          <h1 className="hero-title">Build Your Digital Future</h1>
          <p className="hero-subtitle">
            Expert Solutions for{' '}
            <TypewriterText
              words={['Healthcare', 'Finance', 'E-Commerce', 'Education', 'Real Estate']}
            />
          </p>
          <p className="hero-description">
            We build modern, scalable, and high-performance websites tailored to your industry.
            Transform your business with Algokami Infotech Solutions.
          </p>
          <div className="hero-buttons">
            <Link href="/get-quote" className="btn btn-primary hero-cta">
              Get Free Quote <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link href="/#services" className="btn btn-outline-light hero-cta">
              Our Services
            </Link>
          </div>

          <div className="hero-stats-card">
            <div className="stats-info">
              <CountUp target={5} suffix="+" className="stats-number" />
              <span className="stats-label">Major Projects Delivered</span>
            </div>
            <div className="stats-info">
              <CountUp target={98} suffix="%" className="stats-number" />
              <span className="stats-label">Client Satisfaction</span>
            </div>
            <div className="stats-info">
              <CountUp target={2} suffix="+" className="stats-number" />
              <span className="stats-label">Years of Experience</span>
            </div>
          </div>
        </FadeInView>

        <FadeInView direction="right" delay={0.2} className="hero-right">
          <div className="hero-features">
            <div className="hero-feature-card">
              <i className="fa-solid fa-code" />
              <h3>Custom Development</h3>
              <p>Tailored solutions built from scratch</p>
            </div>
            <div className="hero-feature-card">
              <i className="fa-solid fa-mobile-screen" />
              <h3>Responsive Design</h3>
              <p>Perfect on all devices</p>
            </div>
            <div className="hero-feature-card">
              <i className="fa-solid fa-bolt" />
              <h3>Fast Performance</h3>
              <p>Optimized for speed & SEO</p>
            </div>
            <div className="hero-feature-card">
              <i className="fa-solid fa-shield-halved" />
              <h3>Secure & Scalable</h3>
              <p>Built for growth</p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
