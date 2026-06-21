import { useState, useEffect, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo1.png'
import './Navbar.css'

const NAV_ITEMS = [
  { path: '/', label: 'HOME', icon: 'home' },
  { path: '/contact', label: 'CONTACT', icon: 'mail' },
  { path: '/sessions', label: 'SESSIONS', icon: 'event' },
  { path: '/calc.html', label: 'TAX CALCULATOR', icon: 'calculate', external: true },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Brand */}
        <NavLink to="/" className="navbar__brand" aria-label="Value Services Home">
          <img src={logo} alt="Value Services Logo" className="navbar__brand-icon" />
          Value Services
        </NavLink>

        <div className="navbar__links">
          {NAV_ITEMS.map(item => (
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                className="navbar__link"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__mobile-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__mobile-overlay${isMenuOpen ? ' navbar__mobile-overlay--open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <aside
        id="mobile-menu"
        className={`navbar__mobile-menu${isMenuOpen ? ' navbar__mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-header">
          <span className="navbar__mobile-brand">Value Services</span>
          <button
            className="navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close mobile menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="navbar__mobile-nav">
          {NAV_ITEMS.map(item => (
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                className="navbar__mobile-link"
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined filled">{item.icon}</span>
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined filled">{item.icon}</span>
                {item.label}
              </NavLink>
            )
          ))}
        </nav>

      </aside>
    </nav>
  )
}
