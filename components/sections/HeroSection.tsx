import dynamic from 'next/dynamic'
import Link from 'next/link'
import TypewriterText from '@/components/animations/TypewriterText'
import CountUp from '@/components/animations/CountUp'
import FadeInView from '@/components/animations/FadeInView'

const ParticlesBackground = dynamic(
  () => import('@/components/animations/ParticlesBackground'),
  { ssr: false }
)

const Scene3DHero = dynamic(
  () => import('@/components/animations/Scene3DHero'),
  { ssr: false }
)

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <ParticlesBackground />

      <div className="hero-content container">
        <FadeInView direction="left" className="hero-left">
          <span className="badge hero-badge">Product-Minded Web Engineering For Business Teams</span>
          <h1 className="hero-title">Scope Clearly. Build Confidently. Launch What You Can Defend.</h1>
          <p className="hero-subtitle">
            Trusted execution for{' '}
            <TypewriterText
              words={['Founders', 'SMBs', 'Startups', 'Scaling Teams', 'Service Brands']}
            />
          </p>
          <p className="hero-description">
            We begin with a discovery call, define assumptions in writing, and deliver through milestone-based sprints.
            Performance and SEO work is tied to baseline audits, agreed targets, and release evidence.
          </p>
          <div className="hero-buttons">
            <Link href="/get-quote" className="btn btn-primary hero-cta">
              Book Discovery Call <i className="fa-solid fa-calendar-check" />
            </Link>
            <Link href="/plans" className="btn btn-outline-light hero-cta">
              See Engagement Models
            </Link>
          </div>

          <div className="hero-trust-strip">
            <span><i className="fa-solid fa-magnifying-glass-chart" /> Discovery workshop before estimate</span>
            <span><i className="fa-solid fa-file-signature" /> SOW and milestone sign-off</span>
            <span><i className="fa-solid fa-chart-column" /> Audit-backed optimization tasks</span>
          </div>

          <div className="hero-stats-card">
            <div className="stats-info">
              <CountUp target={5} suffix=" days" className="stats-number" />
              <span className="stats-label">Discovery To Draft SOW</span>
            </div>
            <div className="stats-info">
              <CountUp target={7} suffix=" days" className="stats-number" />
              <span className="stats-label">Typical Sprint Review Cycle</span>
            </div>
            <div className="stats-info">
              <CountUp target={1} suffix=" day" className="stats-number" />
              <span className="stats-label">Initial Support Response SLA</span>
            </div>
          </div>
        </FadeInView>

        <FadeInView direction="right" delay={0.2} className="hero-right">
          {/* 3D orbital ring scene replaces the static card stack */}
          <Scene3DHero />
        </FadeInView>
      </div>
    </section>
  )
}
