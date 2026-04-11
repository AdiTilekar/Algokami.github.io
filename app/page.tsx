import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
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
  title: 'Algokami Tech Solutions — Personalized Website Development Experts',
  description:
    'Get personalized website development from budget-friendly web developers. We build fast, modern, conversion-focused websites tailored to your business goals.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Algokami Tech Solutions — Personalized Website Development Experts',
    description:
      'Get personalized website development from budget-friendly web developers. We build fast, modern, conversion-focused websites tailored to your business goals.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algokami Tech Solutions — Personalized Website Development Experts',
    description:
      'Get personalized website development from budget-friendly web developers. We build fast, modern, conversion-focused websites tailored to your business goals.',
  },
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
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
