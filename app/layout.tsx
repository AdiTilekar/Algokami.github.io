import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '@/app/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://algokami.tech'
const siteName = 'Algokami Tech Solutions'
const faviconUrl = '/Favicon%20algokami.png?v=20260417'
const founders = ['Harsh Bhakare', 'Aditya Tilekar', 'Sanket Ganje']

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  alternateName: ['Algokami', 'Algo Kami'],
  url: siteUrl,
  logo: `${siteUrl}/Favicon%20algokami.png`,
  foundingMember: founders.map((name) => ({
    '@type': 'Person',
    name,
  })),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    template: `%s | ${siteName}`,
    default: `${siteName} (Algokami) — We Build Growth Engines`,
  },
  description:
    'Algokami (Algo Kami) is a custom web development and digital solutions company founded by Harsh Bhakare, Aditya Tilekar, and Sanket Ganje.',
  keywords: [
    'algokami',
    'algo kami',
    'algokami tech solutions',
    'harsh bhakare',
    'aditya tilekar',
    'sanket ganje',
    'web development',
    'web design',
    'app development',
    'UI/UX design',
    'e-commerce',
    'digital agency',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: '/',
    title: `${siteName} — We Build Growth Engines`,
    description: 'Custom web development, apps, and digital solutions that drive real results.',
    images: [{ url: `${siteUrl}/og.jpg`, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Custom web development, apps, and digital solutions that drive real results.',
  },
  icons: {
    icon: [
      {
        url: faviconUrl,
        type: 'image/png',
      },
    ],
    shortcut: [faviconUrl],
    apple: [faviconUrl],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body className="bg-bg text-text-primary antialiased" data-loading="true">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
