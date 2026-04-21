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
              View Pricing &amp; Packages <i className="fa-solid fa-arrow-right" />
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
          {/* 3D orbital ring scene replaces the static card stack */}
          <Scene3DHero />
        </FadeInView>
      </div>
    </section>
  )
}
