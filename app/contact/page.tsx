import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Algokami Tech Solutions. We are here to help you grow your business online.',
}

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero
        label="Contact"
        title="Get In Touch"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        badges={[
          { icon: 'fa-clock', text: 'Reply within 24 hours' },
          { icon: 'fa-headset', text: '24/7 Support mindset' },
          { icon: 'fa-shield-check', text: 'Trusted by 500+ clients' },
        ]}
      />

      <ContactSection />
    </main>
  )
}
