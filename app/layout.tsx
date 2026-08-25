import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import '@/app/globals.css'
import '@/styles/sections.css'
import '@/styles/design-styles.css'
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
const brandName = 'Algokami'
const companyName = 'Algokami Tech Solutions'
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION
const defaultDescription =
  'Budget-friendly website development company specializing in personalized website development, business websites, and custom web solutions that convert.'
const ogImage = '/images/og-preview.jpg'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyName,
  alternateName: brandName,
  url: siteUrl,
  logo: `${siteUrl}/images/logos/Algo%20Kami%20logo.webp`,
  brand: {
    '@type': 'Brand',
    name: brandName,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'algokami.tech@gmail.com',
    telephone: '+91-8857066841',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['en'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: brandName,
  alternateName: companyName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/blog?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brandName,
  referrer: 'origin-when-cross-origin',
  title: {
    template: `%s | ${brandName}`,
    default: `${brandName} — Personalized Website Development Company`,
  },
  description: defaultDescription,
  keywords: [
    'web development company',
    'personalized website development',
    'custom website development',
    'budget website development',
    'affordable web developers',
    'business website development',
    'ecommerce website development',
    'Pune website developers',
  ],
  authors: [{ name: companyName }],
  creator: companyName,
  publisher: companyName,
  category: 'technology',
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
    siteName: brandName,
    locale: 'en_IN',
    url: '/',
    title: `${brandName} — Personalized Website Development Company`,
    description: defaultDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: brandName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: brandName,
    description: defaultDescription,
    images: [ogImage],
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/images/favicon%20final.png?v=20260418',
    shortcut: '/images/favicon%20final.png?v=20260418',
    apple: '/images/favicon%20final.png?v=20260418',
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
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}
