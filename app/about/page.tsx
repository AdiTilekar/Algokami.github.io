import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Algokami Tech Solutions and our founders Harsh Bhakare, Aditya Tilekar, and Sanket Ganje.',
  keywords: [
    'algokami',
    'algo kami',
    'harsh bhakare',
    'aditya tilekar',
    'sanket ganje',
    'algokami founders',
  ],
  alternates: {
    canonical: '/about',
  },
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
    worksFor: {
      '@type': 'Organization',
      name: 'Algokami Tech Solutions',
    },
  })),
}

export default function AboutPage() {
  return (
    <main className="page-shell">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1>Who We Are</h1>
          <p>
            We&apos;re a passionate team of digital experts dedicated to helping businesses
            thrive in the modern digital landscape.
          </p>
        </div>
      </section>

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
              <p className="section-subtitle page-subtitle-center">
                Founders: {founders.join(', ')}.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="stats-grid page-section-gap">
              <div className="stats-card">
                <div className="stats-value">500+</div>
                <strong>Happy Clients</strong>
                <p>Trusted by businesses worldwide</p>
              </div>
              <div className="stats-card">
                <div className="stats-value">5+</div>
                <strong>Years Experience</strong>
                <p>Industry expertise you can rely on</p>
              </div>
              <div className="stats-card">
                <div className="stats-value">50+</div>
                <strong>Team Members</strong>
                <p>Skilled professionals at your service</p>
              </div>
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
            <FadeInView delay={0.1}>
              <div className="service-card">
                <div className="service-icon icon-blue">
                  <i className="fa-solid fa-lightbulb" />
                </div>
                <h3>Innovation</h3>
                <p>We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="service-card">
                <div className="service-icon icon-orange">
                  <i className="fa-solid fa-handshake" />
                </div>
                <h3>Integrity</h3>
                <p>We build lasting relationships through transparency, honesty, and ethical practices.</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="service-card">
                <div className="service-icon icon-blue">
                  <i className="fa-solid fa-bullseye" />
                </div>
                <h3>Excellence</h3>
                <p>We strive for excellence in every project, exceeding expectations with quality work.</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.4}>
              <div className="service-card">
                <div className="service-icon icon-orange">
                  <i className="fa-solid fa-users" />
                </div>
                <h3>Collaboration</h3>
                <p>We work closely with our clients as partners to achieve shared goals and success.</p>
              </div>
            </FadeInView>
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
