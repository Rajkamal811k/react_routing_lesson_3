import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about-page" id="about-view">
      {/* Header */}
      <div className="page-header">
        <div className="hero-badge">
          <span>📖</span> Project Overview
        </div>
        <h1>
          About Our <span className="gradient-text">Application</span>
        </h1>
        <p>
          Learn more about the vision, architecture, and concepts behind this multi-page React application.
        </p>
      </div>

      {/* Main Grid */}
      <div className="about-content-grid">
        {/* Left Column: Story & Principles */}
        <div className="about-card">
          <h2>Purpose of the Project</h2>
          <p>
            This application was created as part of the React Routing curriculum (Lesson 3) to demonstrate how modern single-page applications handle multi-page navigation without triggering page refreshes.
          </p>
          <p>
            By encapsulating pages into isolated route components (<code>Home</code>, <code>About</code>, <code>Skills</code>) and wrapping them in persistent layout components (<code>Navebar</code> and <code>Footer</code>), we achieve maximum code reusability, testability, and a native application-like feel.
          </p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
            Engineering Principles
          </h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>⚡ High Performance</h4>
              <p>Minimal bundle size, zero heavy runtime overhead, instant page transitions.</p>
            </div>
            <div className="value-item">
              <h4>🎯 Semantic Layout</h4>
              <p>Accessible HTML5 navigation, headers, footers, and responsive containers.</p>
            </div>
            <div className="value-item">
              <h4>🛡️ Robust Routing</h4>
              <p>Active route tracking, parameterized links, and 404 fallback routing.</p>
            </div>
            <div className="value-item">
              <h4>💎 Clean Styling</h4>
              <p>Scoped CSS custom properties, responsive breakpoints, and glassmorphic touches.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="timeline-card">
          <h3>
            <span>🛣️</span> Curriculum Path
          </h3>
          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="step-marker"></div>
              <div className="step-date">Lesson 01</div>
              <h4>React Fundamentals</h4>
              <p>JSX syntax, component state with hooks, and unidirectional data flow.</p>
            </div>

            <div className="timeline-step">
              <div className="step-marker"></div>
              <div className="step-date">Lesson 02</div>
              <h4>Components & Props</h4>
              <p>Creating modular layouts, passing props, and building composable UI elements.</p>
            </div>

            <div className="timeline-step">
              <div className="step-marker"></div>
              <div className="step-date">Lesson 03 • Current</div>
              <h4>React Routing & Navigation</h4>
              <p>Implementing client-side routing, NavLinks, persistent layout, and multi-page architecture.</p>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/skills" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Check My Skills
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About