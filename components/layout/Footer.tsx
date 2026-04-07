import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col footer-brand">
            <Link href="/" className="text-logo footer-logo">
              <span className="logo-icon">A</span>
              <span className="logo-text">Algokami</span>
            </Link>
            <p>Empowering businesses with modern web solutions for unprecedented growth and success in the digital world.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="/services/healthcare">→ Healthcare</Link></li>
              <li><Link href="/services/finance">→ Finance</Link></li>
              <li><Link href="/services/ecommerce">→ E-Commerce</Link></li>
              <li><Link href="/services/education">→ Education</Link></li>
              <li><Link href="/services/real-estate">→ Real Estate</Link></li>
              <li><Link href="/services/hospitality">→ Hospitality</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">→ About Us</Link></li>
              <li><Link href="/blog">→ Blog</Link></li>
              <li><Link href="/contact">→ Contact</Link></li>
              <li><Link href="/get-quote">→ Get Quote</Link></li>
              <li><Link href="/terms-conditions">→ Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy">→ Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-items">
              <a href="mailto:contact@algokami.com" className="footer-contact-item">
                <i className="fa-solid fa-envelope" />
                <span>contact@algokami.com</span>
              </a>
              <a href="tel:7666809690" className="footer-contact-item">
                <i className="fa-solid fa-phone" />
                <span>7666809690</span>
              </a>
              <a href="tel:8857066841" className="footer-contact-item">
                <i className="fa-solid fa-phone" />
                <span>8857066841</span>
              </a>
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot" />
                <span>Your Street, City,<br />State, India — 411045</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {year} <strong>Algokami Infotech Solutions Pvt. Ltd.</strong> All rights reserved.</p>
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
