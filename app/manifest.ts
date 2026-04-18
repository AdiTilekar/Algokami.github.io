import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Algokami Tech Solutions',
    short_name: 'AlgoKami',
    description:
      'Personalized and budget-friendly website development for startups, local businesses, and growing brands.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1228',
    theme_color: '#0B1228',
    icons: [
      {
        src: '/Favicon%20algokami.png?v=20260417',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/Favicon%20algokami.png?v=20260417',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
