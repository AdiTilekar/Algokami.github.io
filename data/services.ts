import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 1,
    title: 'Custom Web Development',
    icon: 'fa-code',
    iconTheme: 'blue',
    description: 'Fast, responsive websites tailored to your brand and built to convert mobile visitors.',
    link: '/services/healthcare',
  },
  {
    id: 2,
    title: 'Web Application Development',
    icon: 'fa-laptop-code',
    iconTheme: 'orange',
    description: 'Modern web apps with smooth user flows, reliable performance, and clear interfaces.',
    link: '/services/finance',
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    icon: 'fa-cart-shopping',
    iconTheme: 'blue',
    description: 'Online stores designed for product discovery, trust, and faster buying decisions.',
    link: '/services/ecommerce',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    icon: 'fa-palette',
    iconTheme: 'orange',
    description: 'Clean, intuitive layouts that make key actions easier to spot and use.',
    link: '/#contact',
  },
]
