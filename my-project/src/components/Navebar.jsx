import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-logo" onClick={closeMobileMenu} id="nav-brand-logo">
          <div className="logo-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <span>Dev<span className="gradient-text">Pulse</span></span>
        </Link>

        {/* Desktop & Mobile Navigation Links */}
        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
                id="nav-link-home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
                id="nav-link-about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/skills" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
                id="nav-link-skills"
              >
                Skills
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Call to action button */}
        <div className="nav-actions">
          <Link to="/skills" className="btn-primary" id="nav-cta-btn">
            Explore Stack
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          id="nav-mobile-toggle"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default Navebar