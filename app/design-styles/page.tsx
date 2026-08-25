import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInView from '@/components/animations/FadeInView'
import PageHero from '@/components/layout/PageHero'
import DesignStylesShowcase from '@/components/sections/DesignStylesShowcase'
import { designStyles } from '@/data/designStyles'

export const metadata: Metadata = {
  title: 'Top 10 Website Design Styles',
  description:
    'Explore 10 curated website design styles we architect and build at Algokami—including Glassmorphism, Bento Grid, Neumorphism, Cyber Dark/Neon, and Neo-Brutalism with live pure-CSS visual demos.',
  alternates: {
    canonical: '/design-styles',
  },
  openGraph: {
    type: 'website',
    url: '/design-styles',
    title: 'Top 10 Website Design Styles | Algokami Tech Solutions',
    description:
      'Explore 10 modern website design styles with live pure-CSS interactive demos crafted by Algokami Tech Solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Website Design Styles | Algokami Tech Solutions',
    description:
      'Explore 10 modern website design styles with live pure-CSS interactive demos crafted by Algokami Tech Solutions.',
  },
}

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Top 10 Website Design Styles — Algokami Tech Solutions',
  description:
    'Explore 10 curated website design styles with live pure-CSS demos, tailored for high conversion and brand distinction.',
  url: 'https://algokami.tech/design-styles',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: designStyles.map((style, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: style.name,
      description: style.description,
    })),
  },
}

export default function DesignStylesPage() {
  return (
    <main className="page-shell">
      <PageHero
        label="Design Showcase"
        title="Top 10 Website Design Styles"
        subtitle="Explore 10 distinctive visual aesthetics we architect and build. Every style below features a live, pure-CSS interactive preview so you can experience how your next web platform could look and feel."
        badges={[
          { icon: 'fa-wand-magic-sparkles', text: '10 Handcrafted Visual Demos' },
          { icon: 'fa-code', text: '100% Pure CSS' },
          { icon: 'fa-mobile-screen', text: 'Responsive & Production Ready' },
        ]}
      />

      <section className="design-styles-section">
        <div className="container">
          <FadeInView>
            <div className="section-header">
              <span className="section-label">Aesthetic Exploration</span>
              <h2 className="section-title">Visual Identities We Engineer</h2>
              <p className="section-subtitle">
                Each visual style has a distinct psychology, purpose, and audience fit. Interact with our live pure-CSS demos below or compare any two styles side-by-side.
              </p>
            </div>
          </FadeInView>

          <DesignStylesShowcase />
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <FadeInView>
            <h2>Found a Style That Fits Your Vision?</h2>
            <p>
              Whether you need a sleek Bento Grid SaaS, a glowing Cyber Dark portal, or a punchy Neo-Brutalist brand site, we build it with speed, precision, and high conversion.
            </p>
            <div className="cta-buttons">
              <Link href="/get-quote" className="btn btn-primary">
                Get Custom Proposal <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/contact" className="btn btn-outline-light">
                Discuss Your Project
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
    </main>
  )
}
