import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'

export const metadata: Metadata = {
	title: 'Digital Marketing Services',
	description:
		'Performance-focused digital marketing services including SEO, paid ads, social media, and conversion optimization.',
}

const offerings = [
	{ icon: 'fa-magnifying-glass', title: 'SEO Optimization', description: 'Improve rankings and organic traffic with technical and on-page SEO strategies.' },
	{ icon: 'fa-bullhorn', title: 'Paid Advertising', description: 'Launch ROI-driven Google and social campaigns with continuous optimization.' },
	{ icon: 'fa-hashtag', title: 'Social Media Marketing', description: 'Build brand visibility and engagement across high-impact social platforms.' },
	{ icon: 'fa-chart-line', title: 'Conversion Optimization', description: 'Turn more visitors into leads with landing page and funnel improvements.' },
]

export default function DigitalMarketingPage() {
	return (
		<main style={{ paddingTop: '70px' }}>
			<section className="page-hero">
				<div className="container">
					<span className="section-label">Services</span>
					<h1>Digital Marketing</h1>
					<p>
						Grow your brand with measurable campaigns designed to generate quality traffic,
						leads, and long-term business results.
					</p>
					<Link href="/#contact" className="btn btn-primary">Get Marketing Plan</Link>
				</div>
			</section>

			<section style={{ padding: 'var(--section-padding)', background: 'var(--bg-light)' }}>
				<div className="container">
					<FadeInView>
						<div className="section-header">
							<span className="section-label">Solutions</span>
							<h2 className="section-title">What We Deliver</h2>
						</div>
					</FadeInView>

					<div className="services-grid">
						{offerings.map((item, index) => (
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
