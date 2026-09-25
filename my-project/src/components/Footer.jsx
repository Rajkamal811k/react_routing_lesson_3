import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="app-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <div className="logo-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <span>Dev<span className="gradient-text">Pulse</span></span>
            </Link>
            <p>
              A high-performance modern 3-page React web application demonstrating seamless multi-page client routing, modular architecture, and modern UX design.
            </p>
            <div className="footer-status">
              <span className="status-dot"></span>
              <span>React Router v7 • Lesson 3</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/about">About Application</Link></li>
              <li><Link to="/skills">Skills & Stack</Link></li>
            </ul>
          </div>

          {/* Tech Ecosystem */}
          <div className="footer-col">
            <h4>Technology</h4>
            <ul>
              <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React 19</a></li>
              <li><a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite 8</a></li>
              <li><a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">Vanilla CSS</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter / X</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noreferrer">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {currentYear} DevPulse. Built for React Routing Practice.</p>
          <p>Clean Code • Scalable Components • Responsive UI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer