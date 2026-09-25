import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

const Home = () => {
  return (
    <div className="home-page" id="home-view">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨</span> Next-Gen React Routing • Lesson 3
          </div>
          <h1 className="hero-title">
            Build Modern Web Apps with <span className="gradient-text">Seamless Routing</span>
          </h1>
          <p className="hero-subtitle">
            Welcome to the 3-page interactive React experience. Explore smooth client-side transitions between Home, About, and Skills pages powered by modular components and clean architecture.
          </p>
          <div className="hero-cta-group">
            <Link to="/about" className="btn-primary" id="home-cta-about">
              About This Project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link to="/skills" className="btn-secondary" id="home-cta-skills">
              View Skills & Tech
            </Link>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="hero-visual">
          <div className="visual-backdrop"></div>
          <div className="hero-card">
            <img src={heroImg} alt="React Architecture Illustration" className="hero-card-img" />
            <span className="code-pill">&lt;BrowserRouter /&gt;</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>
              Modular Single Page App
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
              Zero full-page reloads. Render pages dynamically with fast and fluid client-side route handling.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <div className="stats-banner">
        <div className="stat-item">
          <div className="stat-number">3+</div>
          <div className="stat-label">Connected Pages</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client-Side Routing</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">&lt; 10ms</div>
          <div className="stat-label">Route Transition Time</div>
        </div>
      </div>

      {/* Features & Architectural Highlights */}
      <section className="highlights-section">
        <div className="section-header">
          <div className="section-tag">Core Features</div>
          <h2 className="section-title">What Makes This App Special</h2>
        </div>

        <div className="highlights-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Instant Navigation</h3>
            <p>
              Navigate effortlessly between pages using React Router DOM. No browser refresh delays or jarring page flashes.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧩</div>
            <h3>Reusable Components</h3>
            <p>
              Shared Navbar and Footer components persist across routes, maintaining consistent layout and global state.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Aesthetic UI & Styling</h3>
            <p>
              Modern dark palette with glassmorphism, fluid typography, responsive layout, and glowing visual accents.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home