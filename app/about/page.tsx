import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Algokami Infotech Solutions - our mission, values, and team dedicated to web development excellence.',
}

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '70px' }}>
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
      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <FadeInView>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Empowering Brands Through Digital Excellence</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                At Algokami Infotech Solutions, we believe every business deserves a powerful digital presence.
                Our mission is to transform ideas into impactful digital experiences that drive growth,
                engagement, and success.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '60px' }}>
              <div style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ fontSize: '48px', color: 'var(--color-accent)', marginBottom: '16px' }}>500+</div>
                <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '8px' }}>Happy Clients</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Trusted by businesses worldwide</p>
              </div>
              <div style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ fontSize: '48px', color: 'var(--color-accent)', marginBottom: '16px' }}>5+</div>
                <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '8px' }}>Years Experience</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Industry expertise you can rely on</p>
              </div>
              <div style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ fontSize: '48px', color: 'var(--color-accent)', marginBottom: '16px' }}>50+</div>
                <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '8px' }}>Team Members</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Skilled professionals at your service</p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg-light)' }}>
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">Our Values</span>
              <h2 className="section-title">What Drives Us</h2>
            </div>
          </FadeInView>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
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
    </main>
  )
}
