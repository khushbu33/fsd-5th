import React from 'react'
import './nav.css'

function Nav() {
  return (
    <nav>
        <h1>Profile</h1>
        <Card />
        <ul type="none">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>    
        </ul>

    </nav>
    
  )
}

export default Nav