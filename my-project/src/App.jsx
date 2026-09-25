import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navebar from './components/Navebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      {/* Persistent Navigation Bar Component */}
      <Navebar />

      {/* Dynamic Page Content Routed by URL */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Persistent Footer Component */}
      <Footer />
    </div>
  )
}

export default App
