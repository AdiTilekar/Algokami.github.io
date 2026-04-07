import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

const steps = [
  { number: 1, title: 'Requirement Analysis',   description: 'Understanding client needs, project goals, and target audience through comprehensive discussions and research.' },
  { number: 2, title: 'Planning & Design',       description: 'Creating innovative designs and defining a strategic roadmap ensuring user-friendly and responsive design principles.' },
  { number: 3, title: 'Development & Testing',   description: 'Building with the latest technologies, followed by rigorous testing for functionality and utilizing analytics to enhance performance.' },
  { number: 4, title: 'Launch & Support',        description: 'Deploying the final product, monitoring performance, and providing ongoing support for continuous improvement.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <div className="container process-inner">
        <FadeInView direction="left">
          <div className="process-left">
            <span className="section-label">Process</span>
            <h2 className="section-title">See How Our Services Work for You</h2>
            <p className="section-subtitle">
              A clear, structured approach from understanding your needs to launching your
              solution and beyond.
            </p>
            <Link href="/about" className="btn btn-outline" style={{ marginTop: '32px' }}>
              See How it Works <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </FadeInView>

        <FadeInView direction="right" delay={0.2}>
          <div className="process-right">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`process-step ${i === steps.length - 1 ? 'last' : ''}`}
              >
                <div className="step-badge">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
