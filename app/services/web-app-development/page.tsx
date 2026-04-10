import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
	title: 'Web App Development Services',
	description:
		'Custom web application development with scalable architecture, modern UI, and secure integrations.',
}

const capabilities = [
	{ icon: 'fa-layer-group', title: 'Custom Web Applications', description: 'Build tailored web apps aligned with your exact workflows and business goals.' },
	{ icon: 'fa-database', title: 'Backend & API Development', description: 'Design robust APIs and services for reliable, scalable application performance.' },
	{ icon: 'fa-mobile-screen-button', title: 'Responsive Frontends', description: 'Deliver fast, mobile-friendly interfaces that users love to work with daily.' },
	{ icon: 'fa-shield-halved', title: 'Security & Maintenance', description: 'Protect your app with best-practice security, monitoring, and regular updates.' },
]

export default function WebAppDevelopmentPage() {
	return (
		<main style={{ paddingTop: '70px' }}>
			<section className="page-hero">
				<div className="container">
					<span className="section-label">Services</span>
					<h1>Web App Development</h1>
					<p>
						We create high-performance web applications that help your team move faster
						and your customers get better digital experiences.
					</p>
					<Link href="/#contact" className="btn btn-primary">Start Your Project</Link>
				</div>
			</section>

			<section style={{ padding: 'var(--section-padding)', background: 'var(--bg-light)' }}>
				<div className="container">
					<FadeInView>
						<div className="section-header">
							<span className="section-label">Capabilities</span>
							<h2 className="section-title">How We Build</h2>
						</div>
					</FadeInView>

					<div className="services-grid">
						{capabilities.map((item, index) => (
							<FadeInView key={item.title} delay={index * 0.1}>
								<div className="service-card">
									<div className="service-icon icon-blue">
										<i className={`fa-solid ${item.icon}`} />
									</div>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</FadeInView>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
