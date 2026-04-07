'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navLinks } from '@/data/navLinks'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [dropdownOpen, setDropdown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo text-logo">
          <span className="logo-icon">A</span>
          <span className="logo-text">Algokami</span>
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
                    className="nav-link dropdown-toggle"
                    onClick={() => setDropdown(prev => !prev)}
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

        <Link href="/get-quote" className="btn btn-primary navbar-cta">
          <i className="fa-solid fa-phone" /> Get Quote
        </Link>
      </div>
    </nav>
  )
}
