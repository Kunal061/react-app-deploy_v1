import React from 'react'
import './Navbar.css'

export default function Navbar(){
  return (
    <nav className="site-nav">
      <div className="nav-container">
        <div className="brand">Kunal Rohilla</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
