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
  {
    id: 2,
    title: 'Shree Ganesh Kulfi E-Commerce Website',
    sector: 'E-Commerce',
    url: 'https://aditilekar.github.io/ShreeGaneshKulfi.github.io/',
    summary: 'A product-focused online ordering site for a kulfi brand built to showcase flavors, boost partner trust, and drive sales.',
  },
  {
    id: 3,
    title: 'Sales Management Web Application',
    sector: 'E-Commerce Operations',
    url: 'https://aditilekar.github.io/Sales-web-application/',
    summary: 'A sales operations dashboard for order tracking, customer handling, and day-to-day management for the same e-commerce client.',
  },
]
