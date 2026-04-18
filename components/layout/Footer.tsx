'use client'

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/#contact' },
  ]
  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ]

  return (
    <footer className="w-full bg-bg border-t border-border">
      {/* Main footer content */}
      <div className="container py-16">
        <div className="flex justify-between items-start mb-16">
          {/* Left - Brand */}
          <div>
            <h3 className="text-xl font-display font-black text-text-primary">
              Algokami
            </h3>
          </div>

          {/* Center - Links */}
          <div className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-text-secondary hover:text-accent transition-colors tracking-widest uppercase font-semibold"
                >
                  {link.label}
                </a>
              ))}
          </div>

          {/* Right - Social */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-xs text-text-secondary hover:text-accent transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-border mb-8" />

        {/* Bottom row */}
        <div className="flex justify-between items-center text-xs text-text-muted">
          <p>© 2025 Algokami Tech Solutions. All rights reserved.</p>
          <a href="/privacy-policy" className="hover:text-text-secondary transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

