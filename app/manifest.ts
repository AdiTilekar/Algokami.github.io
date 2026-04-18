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
        src: '/images/favicon%20final.png?v=20260418',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicon%20final.png?v=20260418',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
