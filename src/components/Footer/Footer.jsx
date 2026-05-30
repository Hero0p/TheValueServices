import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Brand & Copyright */}
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand">
            <span className="material-symbols-outlined filled footer__brand-icon">account_balance</span>
            Value Services
          </Link>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Value Services Financial &amp; Insurance. All rights reserved. Registered Investment Advisor.
          </p>
          <div className="footer__socials">
            <a href="mailto:info@valueservices.us" className="footer__social-link" aria-label="Email us">
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a href="tel:+14697088009" className="footer__social-link" aria-label="Call us">
              <span className="material-symbols-outlined">call</span>
            </a>
            <Link to="/contact" className="footer__social-link" aria-label="Our locations">
              <span className="material-symbols-outlined">location_on</span>
            </Link>
          </div>
        </div>

        {/* Link Columns */}
        <div className="footer__links-wrapper">
          <div className="footer__links-col">
            <h4 className="footer__links-title">Legal</h4>
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Service</a>
          </div>
          <div className="footer__links-col">
            <h4 className="footer__links-title">Compliance</h4>
            <a href="#" className="footer__link">SEC Disclosures</a>
            <a href="#" className="footer__link">License Information</a>
          </div>
          <div className="footer__links-col">
            <h4 className="footer__links-title">Quick Links</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
            <a href="/calc.html" className="footer__link">Tax Calculator</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
