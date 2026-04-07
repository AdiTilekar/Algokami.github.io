import FadeInView from '@/components/animations/FadeInView'

const technologies = [
  { name: 'React', icon: 'fa-react' },
  { name: 'Next.js', icon: 'fa-n' },
  { name: 'Node.js', icon: 'fa-node-js' },
  { name: 'WordPress', icon: 'fa-wordpress' },
  { name: 'Shopify', icon: 'fa-shopify' },
  { name: 'AWS', icon: 'fa-aws' },
]

export default function LogosSection() {
  return (
    <section id="logos" className="logos-section">
      <div className="container">
        <FadeInView>
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-label">Technologies</span>
            <h2 className="section-title">Tools We Work With</h2>
          </div>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="tech-grid">
            {technologies.map((tech) => (
              <div key={tech.name} className="tech-item">
                <i className={`fa-brands ${tech.icon}`} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
