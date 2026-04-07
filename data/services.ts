import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 1,
    title: 'Custom Web Development',
    icon: 'fa-code',
    iconTheme: 'blue',
    description: 'We build modern, scalable, and high-performance websites tailored to your business needs using cutting-edge technologies.',
    link: '/services/healthcare',
  },
  {
    id: 2,
    title: 'Web Application Development',
    icon: 'fa-laptop-code',
    iconTheme: 'orange',
    description: 'Full-stack web applications with robust backends, intuitive interfaces, and seamless user experiences.',
    link: '/services/finance',
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    icon: 'fa-cart-shopping',
    iconTheme: 'blue',
    description: 'Feature-rich online stores with secure payments, inventory management, and conversion-optimized designs.',
    link: '/services/ecommerce',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    icon: 'fa-palette',
    iconTheme: 'orange',
    description: 'Beautiful, intuitive designs that enhance user engagement and create memorable digital experiences.',
    link: '/#contact',
  },
]
