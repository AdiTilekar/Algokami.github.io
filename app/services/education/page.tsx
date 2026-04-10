import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
  title: 'Education Web Development',
  description: 'Learning management systems, school websites, and e-learning platforms. Custom education technology solutions.',
}

const features = [
  { icon: 'fa-chalkboard-user', title: 'Learning Management System', desc: 'Complete LMS with course management, assignments, and progress tracking.' },
  { icon: 'fa-video', title: 'Live Classes Integration', desc: 'Built-in video conferencing and live class scheduling features.' },
  { icon: 'fa-clipboard-check', title: 'Online Examinations', desc: 'Secure online testing with automated grading and analytics.' },
  { icon: 'fa-users', title: 'Student & Parent Portals', desc: 'Dedicated portals for students, parents, and teachers.' },
  { icon: 'fa-calendar', title: 'Attendance & Scheduling', desc: 'Digital attendance tracking and class scheduling systems.' },
  { icon: 'fa-credit-card', title: 'Fee Payment System', desc: 'Online fee payment with receipts and payment history.' },
]

export default function EducationPage() {
  return (
    <main className="service-detail-main">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Web Development</span>
          <h1>Education Solutions</h1>
          <p>Modern e-learning platforms and school management systems for educational institutions.</p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Education Web Development Features</h2>
            </div>
          </FadeInView>

          <div className="service-detail-grid">
            {features.map((feature, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="service-card">
                  <div className={`service-icon ${idx % 2 === 0 ? 'icon-blue' : 'icon-orange'}`}>
                    <i className={`fa-solid ${feature.icon}`} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner-section">
        <div className="container">
          <FadeInView>
            <h2>Ready to Transform Your Educational Institution?</h2>
            <p>Let&apos;s build a digital learning platform that engages students.</p>
            <div className="cta-buttons">
              <Link href="/get-quote" className="btn btn-primary">
                Get a Quote <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/#contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  )
}
