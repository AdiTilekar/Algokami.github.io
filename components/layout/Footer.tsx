import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col footer-brand">
            <Link href="/" className="text-logo footer-logo">
              <Image
                src="/images/logos/Algo%20Kami%20logo.webp"
                alt="Algokami logo"
                width={46}
                height={46}
                className="brand-logo-image"
              />
              <span className="brand-lockup">
                <span className="brand-name">
                  <span className="brand-algo">Algo</span>
                  <span className="brand-kami">kami</span>
                </span>
                <span className="brand-subtitle">Tech Solutions</span>
              </span>
            </Link>
            <p>Algokami builds discovery-led websites and web apps for growing businesses.</p>
            <div className="footer-brand-pills">
              <span>Web Platforms</span>
              <span>Business Apps</span>
              <span>Growth SEO</span>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/algokami.tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="mailto:algokami.tech@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
              <a href="tel:8857066841" aria-label="Phone"><i className="fa-solid fa-phone" /></a>
            </div>
            <div className="footer-contact-items" style={{ marginTop: '1rem' }}>
              <div className="footer-contact-item">
                <i className="fa-solid fa-building" />
                <span>Operating name: Algokami Tech Solutions</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-id-card" />
                <span>Registration and billing identity shared in proposal and invoice</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="/services/healthcare">Healthcare</Link></li>
              <li><Link href="/services/finance">Finance</Link></li>
              <li><Link href="/services/ecommerce">E-Commerce</Link></li>
              <li><Link href="/services/education">Education</Link></li>
              <li><Link href="/services/real-estate">Real Estate</Link></li>
              <li><Link href="/services/hospitality">Hospitality</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/get-quote">Get Quote</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get In Touch</h4>
            <div className="footer-contact-items">
              <a href="mailto:algokami.tech@gmail.com" className="footer-contact-item">
                <i className="fa-solid fa-envelope" />
                <span>algokami.tech@gmail.com</span>
              </a>
              <a href="tel:8857066841" className="footer-contact-item">
                <i className="fa-solid fa-phone" />
                <span>8857066841</span>
              </a>
            </div>
            <Link href="/get-quote" className="footer-cta-link">
              Request Proposal <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {year} <strong>Algokami Tech Solutions</strong> All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
