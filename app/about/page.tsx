import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import TiltCard from '@/components/animations/TiltCard'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Algokami Tech Solutions and our founders Harsh Bhakare, Aditya Tilekar, and Sanket Ganje.',
  keywords: ['algokami', 'algo kami', 'harsh bhakare', 'aditya tilekar', 'sanket ganje', 'algokami founders'],
  alternates: { canonical: '/about' },
}

const founders = ['Harsh Bhakare', 'Aditya Tilekar', 'Sanket Ganje']

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Algokami Tech Solutions',
  url: 'https://algokami.tech/about',
  about: founders.map((name) => ({
    '@type': 'Person',
    name,
    jobTitle: 'Founder',
    worksFor: { '@type': 'Organization', name: 'Algokami Tech Solutions' },
  })),
}

const values = [
  { icon: 'fa-lightbulb', title: 'Innovation', desc: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.', theme: 'blue' },
  { icon: 'fa-handshake', title: 'Integrity', desc: 'We build lasting relationships through transparency, honesty, and ethical practices.', theme: 'orange' },
  { icon: 'fa-bullseye', title: 'Excellence', desc: 'We strive for excellence in every project, exceeding expectations with quality work.', theme: 'blue' },
  { icon: 'fa-users', title: 'Collaboration', desc: 'We work closely with our clients as partners to achieve shared goals and success.', theme: 'orange' },
]

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHero
        label="About Us"
        title="Who We Are"
        subtitle="We're a passionate team of digital experts dedicated to helping businesses thrive in the modern digital landscape."
        badges={[
          { icon: 'fa-star', text: '96% Client Retention' },
          { icon: 'fa-rocket', text: '120+ Releases Delivered' },
          { icon: 'fa-users', text: 'Founded by 3 Experts' },
        ]}
      />

      {/* Mission Section */}
      <section className="service-detail-section">
        <div className="container">
          <FadeInView>
            <div className="page-content-narrow page-center">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Empowering Brands Through Digital Excellence</h2>
              <p className="section-subtitle page-subtitle-center">
                At Algokami Infotech Solutions, we believe every business deserves a powerful digital presence.
                Our mission is to transform ideas into impactful digital experiences that drive growth,
                engagement, and success.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.15}>
            <div className="page-content-narrow page-center page-section-gap">
              <span className="section-label">Founders</span>
              <h2 className="section-title">Built by a founding team focused on results</h2>
              <p className="section-subtitle page-subtitle-center">
                Algokami Tech Solutions is founded by Harsh Bhakare, Aditya Tilekar, and Sanket Ganje.
                Their combined focus is brand visibility, product quality, and practical business growth.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="stats-grid page-section-gap">
              {[
                { value: '500+', label: 'Happy Clients', sub: 'Trusted by businesses worldwide' },
                { value: '5+', label: 'Years Experience', sub: 'Industry expertise you can rely on' },
                { value: '50+', label: 'Team Members', sub: 'Skilled professionals at your service' },
              ].map((stat, i) => (
                <TiltCard key={i} maxTilt={6}>
                  <div className="stats-card">
                    <div className="stats-value">{stat.value}</div>
                    <strong>{stat.label}</strong>
                    <p>{stat.sub}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Values Section */}
      <section className="service-detail-section service-detail-section-alt">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">Our Values</span>
              <h2 className="section-title">What Drives Us</h2>
            </div>
          </FadeInView>

          <div className="value-grid">
            {values.map((v, i) => (
              <FadeInView key={v.title} delay={i * 0.1}>
                <TiltCard maxTilt={7}>
                  <div className="service-card">
                    <div className={`service-icon icon-${v.theme}`}>
                      <i className={`fa-solid ${v.icon}`} />
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </TiltCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-section">
        <div className="container">
          <FadeInView>
            <h2>Ready to Work With Us?</h2>
            <p>Let&apos;s discuss how we can help your business grow in the digital world.</p>
            <div className="cta-buttons">
              <Link href="/#contact" className="btn btn-primary">
                Get In Touch <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </main>
  )
}
