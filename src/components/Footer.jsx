import React from 'react'
import './Footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">© {new Date().getFullYear()} Kunal Rohilla</div>
    </footer>
  )
}
