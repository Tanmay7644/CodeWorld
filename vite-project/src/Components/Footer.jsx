
import React from 'react'

const Footer = () => {
  return (
    <footer className="cw-footer">
      <div className="cw-footer-inner">

        <span className="cw-footer-brand">
          Code<span className="cw-footer-brand-acc">World</span>
        </span>

        <ul className="cw-footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li className="cw-footer-sep" aria-hidden="true">·</li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li className="cw-footer-sep" aria-hidden="true">·</li>
          <li><a href="#">Help</a></li>
        </ul>

        <span className="cw-footer-copy">© {new Date().getFullYear()} CodeWorld</span>

      </div>
    </footer>
  )
}

export default Footer