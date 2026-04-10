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
                alt="AlgoKami logo"
                width={46}
                height={46}
                className="brand-logo-image"
              />
              <span className="brand-lockup">
                <span className="brand-name">
                  <span className="brand-algo">Algo</span>
                  <span className="brand-kami">Kami</span>
                </span>
                <span className="brand-subtitle">Tech Solutions</span>
              </span>
            </Link>
            <p>Empowering businesses with modern web solutions for unprecedented growth and success in the digital world.</p>
            <div className="footer-brand-pills">
              <span>Web Platforms</span>
              <span>Business Apps</span>
              <span>Growth SEO</span>
            </div>
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
              <a href="mailto:algokamitech@gmail.com" className="footer-contact-item">
                <i className="fa-solid fa-envelope" />
                <span>algokamitech@gmail.com</span>
              </a>
              <a href="tel:7666809690" className="footer-contact-item">
                <i className="fa-solid fa-phone" />
                <span>7666809690</span>
              </a>
              <a href="tel:8857066841" className="footer-contact-item">
                <i className="fa-solid fa-phone" />
                <span>8857066841</span>
              </a>
              <a href="tel:+918208830644" className="footer-contact-item">
                <i className="fa-solid fa-phone" />
                <span>+91 820 883 0644</span>
              </a>
            </div>
            <Link href="/get-quote" className="footer-cta-link">
              Request Proposal <i className="fa-solid fa-arrow-right" />
            </Link>
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
