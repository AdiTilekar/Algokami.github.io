import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import SectorPackagesSection from '@/components/sections/SectorPackagesSection'
import ServicesSection from '@/components/sections/ServicesSection'
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection'
import ProcessSection from '@/components/sections/ProcessSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import LogosSection from '@/components/sections/LogosSection'
import ContactSection from '@/components/sections/ContactSection'
import BlogSection from '@/components/sections/BlogSection'
import CTABannerSection from '@/components/sections/CTABannerSection'

export const metadata: Metadata = {
  title: 'Algokami — Discovery-Led Web Engineering',
  description:
    'Discovery-led web engineering with milestone delivery, scoped SOWs, and measurable implementation outcomes for growing teams.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Algokami — Discovery-Led Web Engineering',
    description:
      'Discovery-led web engineering with milestone delivery, scoped SOWs, and measurable implementation outcomes for growing teams.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algokami — Discovery-Led Web Engineering',
    description:
      'Discovery-led web engineering with milestone delivery, scoped SOWs, and measurable implementation outcomes for growing teams.',
  },
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SectorPackagesSection sector="Growing Businesses" />
      <ServicesSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <LogosSection />
      <ContactSection />
      <BlogSection />
      <CTABannerSection />
    </main>
  )
}
