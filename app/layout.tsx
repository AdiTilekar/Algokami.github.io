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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://algokami.tech'
const siteName = 'Algokami Tech Solutions'
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION
const defaultDescription =
  'Professional Web Development, App Development, E-Commerce solutions and Digital Marketing services. We build modern, scalable websites and applications for businesses.'
const ogImage = '/images/og-preview.jpg'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/logos/Algo%20Kami%20logo.webp`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'algokamitech@gmail.com',
    telephone: '+91-820-883-0644',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['en'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/blog?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  title: {
    template: `%s | ${siteName}`,
    default: `${siteName} — Web & App Development Company`,
  },
  description: defaultDescription,
  keywords: [
    'web development company',
    'app development company',
    'digital marketing agency',
    'ecommerce website development',
    'next.js development company',
    'seo services',
    'Pune web development',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: googleSiteVerification,
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_IN',
    url: '/',
    title: `${siteName} — Web & App Development Company`,
    description: defaultDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: defaultDescription,
    images: [ogImage],
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/images/logos/Algo%20Kami%20favicon%201.webp',
    shortcut: '/images/logos/Algo%20Kami%20favicon%201.webp',
    apple: '/images/logos/Algo%20Kami%20favicon%201.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
