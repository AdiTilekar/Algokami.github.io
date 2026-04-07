import type { NavLink } from '@/types'

export const navLinks: NavLink[] = [
  {
    label: 'Web Development',
    href: '/#services',
    children: [
      { label: 'Healthcare',           href: '/services/healthcare',           icon: 'fa-hospital' },
      { label: 'Finance & Banking',    href: '/services/finance',              icon: 'fa-landmark' },
      { label: 'E-Commerce',           href: '/services/ecommerce',            icon: 'fa-cart-shopping' },
      { label: 'Real Estate',          href: '/services/real-estate',          icon: 'fa-building' },
      { label: 'Education',            href: '/services/education',            icon: 'fa-graduation-cap' },
      { label: 'Hotel & Restaurant',   href: '/services/hospitality',          icon: 'fa-utensils' },
      { label: 'Tours & Travels',      href: '/services/travel',               icon: 'fa-plane' },
      { label: 'Architecture',         href: '/services/architecture',         icon: 'fa-drafting-compass' },
      { label: 'On-Demand Services',   href: '/services/on-demand',            icon: 'fa-bolt' },
      { label: 'Grocery & Retail',     href: '/services/grocery',              icon: 'fa-store' },
      { label: 'NGO & Non-Profit',     href: '/services/ngo',                  icon: 'fa-hand-holding-heart' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Contact',  href: '/#contact' },
]
