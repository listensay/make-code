import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const navbar = memo(() => {
  return (
    <div>
      <div className="flex items-center p-4 h-16 bg-sky-950 text-white">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/next">Next</Link>
        </nav>
      </div>
    </div>
  )
})

navbar.displayName = 'NavBar'

export default navbar
