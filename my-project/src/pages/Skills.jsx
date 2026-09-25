import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SKILLS_DATA = [
  {
    name: 'React 19',
    category: 'frontend',
    level: 90,
    icon: '⚛️',
    description: 'Component lifecycle, hooks (useState, useEffect), custom hooks, and modern React 19 architecture.'
  },
  {
    name: 'React Router DOM',
    category: 'routing',
    level: 95,
    icon: '🧭',
    description: 'Declarative client-side routing, NavLinks, active link states, route parameters, and error pages.'
  },
  {
    name: 'JavaScript / ES6+',
    category: 'frontend',
    level: 88,
    icon: '⚡',
    description: 'Async/await, closures, array methods, destructuring, modules, and modern JavaScript standards.'
  },
  {
    name: 'HTML5 & Semantic Markup',
    category: 'frontend',
    level: 95,
    icon: '🌐',
    description: 'Accessible semantic structures, SEO meta tags, navigation headers, footers, and ARIA attributes.'
  },
  {
    name: 'CSS3 & Modern Styling',
    category: 'frontend',
    level: 92,
    icon: '🎨',
    description: 'Flexbox, CSS Grid, custom properties (variables), glassmorphism, responsive media queries, and animations.'
  },
  {
    name: 'Vite & Bundling',
    category: 'tools',
    level: 85,
    icon: '⚡',
    description: 'Lightning-fast Hot Module Replacement (HMR), optimized production builds, and ESM packaging.'
  },
  {
    name: 'Git & Version Control',
    category: 'tools',
    level: 82,
    icon: '🌿',
    description: 'Branch management, staging, commits, remote repository syncing, and collaborative workflows.'
  },
  {
    name: 'State Management',
    category: 'routing',
    level: 86,
    icon: '📦',
    description: 'Component state, lifted state, context API, and synchronized URL state management.'
  }
]

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredSkills = activeFilter === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter((skill) => skill.category === activeFilter)

  return (
    <div className="skills-page" id="skills-view">
      {/* Header */}
      <div className="page-header">
        <div className="hero-badge">
          <span>🛠️</span> Technical Stack
        </div>
        <h1>
          Core Skills & <span className="gradient-text">Proficiencies</span>
        </h1>
        <p>
          Discover the technology stack and competencies demonstrated throughout this React development lesson.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-bar">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
          id="filter-all"
        >
          All Technologies ({SKILLS_DATA.length})
        </button>
        <button
          className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('frontend')}
          id="filter-frontend"
        >
          Frontend Core
        </button>
        <button
          className={`filter-btn ${activeFilter === 'routing' ? 'active' : ''}`}
          onClick={() => setActiveFilter('routing')}
          id="filter-routing"
        >
          Routing & State
        </button>
        <button
          className={`filter-btn ${activeFilter === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveFilter('tools')}
          id="filter-tools"
        >
          Tools & Build
        </button>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-header">
              <div className="skill-title-group">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <span className="skill-badge">{skill.category}</span>
            </div>
            
            <p className="skill-desc">{skill.description}</p>

            <div className="skill-progress-wrap">
              <div className="progress-info">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Ready to see the start again?
        </p>
        <Link to="/" className="btn-secondary" id="skills-back-home">
          ← Return to Home Page
        </Link>
      </div>
    </div>
  )
}

export default Skills