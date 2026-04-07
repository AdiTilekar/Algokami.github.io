'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('banner-dismissed')) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('banner-dismissed', 'true')
    }
  }

  if (!visible) return null

  return (
    <div className="floating-banner visible" role="banner">
      <p>🚀 Boost your brand&apos;s online visibility — Fill Contact Form for Business Growth</p>
      <Link href="/#contact" className="banner-cta-btn" onClick={dismiss}>
        Contact Now
      </Link>
      <button onClick={dismiss} className="banner-close" aria-label="Dismiss banner">✕</button>
    </div>
  )
}
