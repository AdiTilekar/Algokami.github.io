import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/app/globals.css'
import '@/styles/sections.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://algokami.tech'),
  title: {
    template: '%s | Algokami Infotech Solutions',
    default: 'Algokami Infotech Solutions — Expert Web Development Company',
  },
  description: 'Professional Web Development, App Development, E-Commerce solutions and Digital Marketing services. We build modern, scalable websites and applications for businesses.',
  keywords: ['web development', 'app development', 'website design', 'ecommerce', 'custom software', 'React', 'Next.js', 'Pune'],
  authors: [{ name: 'Algokami Infotech Solutions Pvt. Ltd.' }],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Algokami Infotech Solutions — Expert Web Development Company',
    description: 'Professional Web Development and App Development services.',
    images: [{ url: '/images/og-preview.jpg', width: 1200, height: 630, alt: 'Algokami Infotech Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algokami Infotech Solutions',
    description: 'Expert Web Development Services',
    images: ['/images/og-preview.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
