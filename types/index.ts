export interface Service {
  id: number
  title: string
  icon: string
  iconTheme: 'blue' | 'orange'
  description: string
  link: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  review: string
  rating: number
}

export interface Industry {
  id: number
  name: string
  icon: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  coverImage: string
  author: string
  featured?: boolean
}

export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string; icon?: string }[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  service?: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}
