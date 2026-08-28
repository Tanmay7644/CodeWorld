
import React, { useState, useRef, useEffect } from 'react'
import logo from "../assets/logo-2.png"
import user from "../assets/user.jpg"
import { useNavigate } from 'react-router-dom'

const StudentNavbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  const handleUser = () => setShowMenu(prev => !prev)

  const handleProfile = () => { navigate('/profile'); setShowMenu(false) }
  const handleLogout = () => { localStorage.removeItem("token"); navigate('/'); setShowMenu(false) }

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setShowMenu(false)
    }
    // document.addEventListener('mousedown', handler)
    // return () => document.removeEventListener('mousedown', handler)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <nav className="sn-bar">
      {/* Glass pill */}
      <div className="sn-inner">

        {/* Left — logo */}
        <button className="sn-logo-btn" onClick={() => navigate("/")}>
          <img src={logo} className="sn-logo-img" alt="Code World" />
          {/* <span className="sn-logo-text">Code <span className="sn-logo-accent">World</span></span> */}
        </button>



        {/* Right — user avatar */}
        <div className="sn-user-wrap" ref={menuRef}>
          <button
            className={`sn-avatar-btn ${showMenu ? 'sn-avatar-btn--active' : ''}`}
            onClick={handleUser}
            aria-label="User menu"
          >
            <img src={user} className="sn-avatar" alt="User" />
            <span className="sn-avatar-ring" />
          </button>

          {showMenu && (
            <div className="sn-dropdown" role="menu">
              <div className="sn-dropdown-header">
                <img src={user} className="sn-dd-avatar" alt="" />
                <div>
                  <p className="sn-dd-name">My Account</p>
                </div>
              </div>
              <div className="sn-dropdown-divider" />
              <button
                className="sn-dd-item"
                // style={{cursor:"pointer"}}
                onClick={(e) => {
                  e.stopPropagation();
                  handleProfile();
                }}
                role="menuitem"
              >
                <svg viewBox="0 0 16 16" fill="none" className="sn-dd-icon">
                  <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Profile
              </button>
              <button
                className="sn-dd-item"
                // style={{cursor:"pointer"}}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLogout();
                }}
                role="menuitem"
              >
                <svg viewBox="0 0 16 16" fill="none" className="sn-dd-icon">
                  <path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3M10 11l3-3-3-3M13 8H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default StudentNavbar