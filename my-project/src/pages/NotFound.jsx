import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found" id="not-found-view">
      <div className="not-found-code">404</div>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn-primary" id="not-found-home-btn">
        Return to Home Page
      </Link>
    </div>
  )
}

export default NotFound
