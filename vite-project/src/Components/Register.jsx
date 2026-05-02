// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './Login.css'
// import axios from 'axios'
// import logo from "../assets/logo-login.png"
// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const result = await axios.post('http://localhost:3000/register', { name, email, password });
      
//       if (result.data.status === "Registered") {
//         alert("Registration Successful");
//         navigate('/login');
//       }
//     } 
//     catch (err) {
//       if (err.response && err.response.status === 400) {
//         alert(err.response.data.errors[0].msg);
//       } else {
//         alert("Registration failed. Please try again.");
//       }
//     }
//   }

//   function handleLogin() {
//     navigate('/login');
//   }

//   return (
//     <div className="box">
//       <div className='container'>
//         <div className='form-box register'>
//           <form action="" onSubmit={handleSubmit}>
//             <h1>Register</h1>
//             <div className="input-box">
//               <input type="text" placeholder='Username' required onChange={(e) => { setName(e.target.value) }} />
//               <i className='bxr bx-user'></i>
//             </div>
//             <div className="input-box">
//               <input type="email" placeholder='Email' required onChange={(e) => { setEmail(e.target.value) }} />
//               <i className='bxr bx-envelope'></i>
//             </div>
//             <div className="input-box">
//               <input type="password" placeholder='Password' required onChange={(e) => { setPassword(e.target.value) }} />
//               <i className='bxr bx-lock'></i>
//             </div>
//             <button type='submit' className='btn'>Register</button>
//           </form>
//         </div>
//         <div className="toggle-box">
//           <div className="toggle-panel toggle-right">
//             <img src={logo} className="logo-login" alt="" ></img>
//             <h1>Welcome Back!</h1>
//             <p>Already Have an Account</p>
//             <button className="btn login-btn" onClick={handleLogin}>Login</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import logo from "../assets/logo-login.png"

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await axios.post('http://localhost:3000/register', { name, email, password })
      if (result.data.status === "Registered") {
        alert("Registration Successful")
        navigate('/login')
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.errors[0].msg)
      } else {
        alert("Registration failed. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="lg-shell">
      <div className="lg-orb lg-orb--1" />
      <div className="lg-orb lg-orb--2" />
      <div className="lg-orb lg-orb--3" />
      <div className="lg-noise" />

      <div className="lg-card">

        {/* ── Left panel ── */}
        <div className="lg-left">
          <div className="lg-left-orb" />
          <div className="lg-grid-lines" />

          <div className="lg-brand">
            <span className="lg-brand-bracket">&lt;</span>
            Code<span className="lg-brand-acc">World</span>
            <span className="lg-brand-bracket">/&gt;</span>
          </div>

          <div className="lg-left-content">
            <img src={logo} className="lg-logo" alt="CodeWorld" />
            <h2 className="lg-welcome">Welcome Back!</h2>
            <p className="lg-welcome-sub">Already have an account?</p>
            <button className="lg-register-btn" onClick={() => navigate('/login')}>
              Login
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" className="lg-btn-arrow">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="lg-right">
          <div className="lg-form-header">
            <p className="lg-eyebrow">
              <span className="lg-eyebrow-dot" />
              Create Account
            </p>
            <h1 className="lg-title">Register</h1>
          </div>

          <form className="lg-form" onSubmit={handleSubmit}>

            <div className="lg-field">
              <label className="lg-label">Username</label>
              <div className="lg-input-wrap">
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="lg-input"
                  onChange={e => setName(e.target.value)}
                />
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" className="lg-input-icon">
                  <circle cx="8" cy="5" r="3"/>
                  <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5"/>
                </svg>
              </div>
            </div>

            <div className="lg-field">
              <label className="lg-label">Email</label>
              <div className="lg-input-wrap">
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="lg-input"
                  onChange={e => setEmail(e.target.value)}
                />
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round" className="lg-input-icon">
                  <rect x="2" y="4" width="12" height="9" rx="1.5"/>
                  <path d="M2 4l6 5 6-5"/>
                </svg>
              </div>
            </div>

            <div className="lg-field">
              <label className="lg-label">Password</label>
              <div className="lg-input-wrap">
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  className="lg-input"
                  onChange={e => setPassword(e.target.value)}
                />
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round" className="lg-input-icon">
                  <rect x="3" y="7" width="10" height="7" rx="1.5"/>
                  <path d="M5 7V5a3 3 0 016 0v2"/>
                </svg>
              </div>
            </div>

            <button type="submit" className="lg-login-btn" disabled={loading}>
              {loading ? (
                <span className="lg-spinner" />
              ) : (
                <>
                  Create Account
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" className="lg-btn-arrow">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </>
              )}
            </button>

          </form>

          <p className="lg-footer-note">
            Protected by 256-bit encryption
          </p>
        </div>

      </div>
    </div>
  )
}

export default Register