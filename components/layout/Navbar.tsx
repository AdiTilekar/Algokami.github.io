'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/data/navLinks'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [dropdownOpen, setDropdown] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdown(false)
    document.body.style.overflow = ''
  }, [pathname])

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (!navRef.current) return

      if (!navRef.current.contains(target)) {
        setDropdown(false)
        return
      }

      const dropdownTrigger = (target as Element).closest('.has-dropdown')
      if (!dropdownTrigger) setDropdown(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo text-logo">
          <Image
            src="/images/logos/Algo%20Kami%20logo.webp"
            alt="AlgoKami logo"
            width={42}
            height={42}
            className="brand-logo-image"
            priority
          />
          <span className="brand-lockup">
            <span className="brand-name">
              <span className="brand-algo">Algo</span>
              <span className="brand-kami">Kami</span>
            </span>
            <span className="brand-subtitle">Tech Solutions</span>
          </span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`nav-item ${link.children ? 'has-dropdown' : ''}`}
              onMouseEnter={() => link.children && setDropdown(true)}
              onMouseLeave={() => link.children && setDropdown(false)}
            >
              {link.children ? (
                <>
                  <button
                    className={`nav-link dropdown-toggle ${dropdownOpen ? 'open' : ''}`}
                    onClick={() => setDropdown(prev => !prev)}
                    aria-expanded={dropdownOpen}
                  >
                    {link.label} <i className="fa-solid fa-chevron-down fa-xs" />
                  </button>
                  <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                    {link.children.map(child => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={() => setDropdown(false)}>
                          {child.icon && <i className={`fa-solid ${child.icon}`} />}
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/yourusername'}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mini-cta"
          >
            <i className="fa-regular fa-calendar-check" /> <span className="nav-mini-cta-text">Book Call</span>
          </a>
          <Link href="/get-quote" className="btn btn-primary navbar-cta">
            <i className="fa-solid fa-rocket" /> Start Project
          </Link>
        </div>
      </div>
    </nav>
  )
}
