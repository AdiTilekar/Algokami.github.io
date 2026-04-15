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
          <span className="badge hero-badge">Tailored Website Packages Built For Growth</span>
          <h1 className="hero-title">High-Converting Websites Built Fast, Within Budget</h1>
          <p className="hero-subtitle">
            Trusted execution for{' '}
            <TypewriterText
              words={['Founders', 'SMBs', 'Startups', 'Scaling Teams', 'Service Brands']}
            />
          </p>
          <p className="hero-description">
            Choose a plan, launch quickly, and start converting visitors into leads.
            Our pricing is transparent, delivery is milestone-based, and support stays with you post-launch.
          </p>
          <div className="hero-buttons">
            <Link href="/plans" className="btn btn-primary hero-cta">
              View Pricing & Packages <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link href="/get-quote" className="btn btn-outline-light hero-cta">
              Get Free Proposal
            </Link>
          </div>

          <div className="hero-trust-strip">
            <span><i className="fa-solid fa-shield-check" /> Transparent pricing</span>
            <span><i className="fa-solid fa-rocket" /> Fast delivery milestones</span>
            <span><i className="fa-solid fa-headset" /> Post-launch support included</span>
          </div>

          <div className="hero-stats-card">
            <div className="stats-info">
              <CountUp target={120} suffix="+" className="stats-number" />
              <span className="stats-label">Releases Delivered</span>
            </div>
            <div className="stats-info">
              <CountUp target={96} suffix="%" className="stats-number" />
              <span className="stats-label">Client Retention</span>
            </div>
            <div className="stats-info">
              <CountUp target={24} suffix="/7" className="stats-number" />
              <span className="stats-label">Support Mindset</span>
            </div>
          </div>
        </FadeInView>

        <FadeInView direction="right" delay={0.2} className="hero-right">
          <div className="hero-visual">
            <span className="hero-visual-glow hero-visual-glow-one" />
            <span className="hero-visual-glow hero-visual-glow-two" />

            <div className="hero-visual-chip-row">
              <span className="hero-visual-chip">Next.js</span>
              <span className="hero-visual-chip hero-visual-chip-alt">Conversion UX</span>
              <span className="hero-visual-chip">Automation</span>
            </div>

            <div className="hero-visual-card hero-visual-main">
              <span className="hero-visual-label">Delivery Engine</span>
              <h3>From discovery to launch, one focused product team.</h3>
              <p>
                We combine product strategy, modern UI design, and clean development to launch
                dependable web platforms and business apps.
              </p>

              <div className="hero-visual-metrics">
                <div>
                  <strong>2-Week</strong>
                  <span>Sprint cadence</span>
                </div>
                <div>
                  <strong>A+</strong>
                  <span>Core web vitals target</span>
                </div>
                <div>
                  <strong>1 Team</strong>
                  <span>Design + Dev + QA</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-stack">
              <div className="hero-visual-card hero-visual-mini">
                <i className="fa-solid fa-code-branch" />
                <div>
                  <strong>Production-Ready Architecture</strong>
                  <span>Built to scale with your business.</span>
                </div>
              </div>
              <div className="hero-visual-card hero-visual-mini">
                <i className="fa-solid fa-gauge-high" />
                <div>
                  <strong>Speed And SEO Optimized</strong>
                  <span>Fast experiences that rank and convert.</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
