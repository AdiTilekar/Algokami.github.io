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
  title: 'Algokami Tech Solutions — Affordable Website Pricing & Packages',
  description:
    'Get transparent website pricing and packages built for fast launch and real business growth. Choose Starter, Growth, or Enterprise and start your project today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Algokami Tech Solutions — Affordable Website Pricing & Packages',
    description:
      'Get transparent website pricing and packages built for fast launch and real business growth. Choose Starter, Growth, or Enterprise and start your project today.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algokami Tech Solutions — Affordable Website Pricing & Packages',
    description:
      'Get transparent website pricing and packages built for fast launch and real business growth. Choose Starter, Growth, or Enterprise and start your project today.',
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
