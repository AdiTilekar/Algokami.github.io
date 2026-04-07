export interface FeaturedWorkItem {
  id: number
  title: string
  sector: string
  url: string
  summary: string
}

export const featuredWork: FeaturedWorkItem[] = [
  {
    id: 1,
    title: 'Dr. Smita Kapure Skin Clinic Website',
    sector: 'Healthcare',
    url: 'https://kapures.com',
    summary: 'Professional clinic website focused on trust, treatment clarity, and mobile-first patient enquiries.',
  },
]
