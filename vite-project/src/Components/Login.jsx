// import { useNavigate } from 'react-router-dom'
// import {useState}from 'react'
// import './Login.css'
// import axios from 'axios';
// import logo from "../assets/logo-login.png"
// const Login = () => {
//   const [email,setEmail]=useState();
//   const [password,setPassword]=useState();
//   const navigate=useNavigate();
  
//   const handleLogin= async (e)=>{
//     e.preventDefault();

//     try{
//       // we have sent the data to backend from here and collecting the response from backend
//       const res=await axios.post('http://localhost:3000/login',{email,password});
//       // structure of response => res ={status:"", role: "" }
//       if(res.data.status==="Success"){
//         localStorage.setItem("token",res.data.token);

//         if(res.data.role==="student") navigate('/StudentHome');
//         else if(res.data.role==="teacher") navigate('/TeacherHome');
//       }
//       else{
//         alert(res.data.status);
//       }
//     }
//     catch(err){
//       alert("Login Failed");
//     }
//   }
  
//   const handleRegister=()=>{
//     navigate('/register');
//   }
//   return (
//     <div className="box">
//     <div className='container'>
//       <div className='form-box login'>
//         <form action="" onSubmit={handleLogin}>
//             <h1>Login</h1>
//             <div className="input-box">
//                 <input type="email" placeholder='Email' required onChange={(e)=>{setEmail(e.target.value)}}/>
//                 < i className='bxr  bx-user'  ></i> 
//             </div>
//             <div className="input-box">
//                 <input type="password" placeholder='Password' required  onChange={(e)=>{setPassword(e.target.value)}}/>
//                 < i className='bxr  bx-lock'  ></i> 
//             </div>
//             <div className="forgot-link">
//               <a href="#">Forgot Password?</a>
//             </div>
//             <button type='submit' className='btn'>Login</button>
//         </form>
//       </div>

//       <div className="toggle-box">
        
//         <div className="toggle-panel toggle-left">
//             <img src={logo} className="logo-login" alt="" ></img>
//             <h1>Hello, Welcome!</h1>
//             <p>Don't have an account?</p>
//             <button className="btn register-btn"  onClick={handleRegister}>Register</button>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Login


import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'
import axios from 'axios'
import logo from "../assets/logo-login.png"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:3000/login', { email, password })
      if (res.data.status === "Success") {
        localStorage.setItem("token", res.data.token)
        if (res.data.role === "student") navigate('/StudentHome')
        else if (res.data.role === "teacher") navigate('/TeacherHome')
      } else {
        alert(res.data.status)
      }
    } catch {
      alert("Login Failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="lg-shell">
      {/* Ambient orbs on the background */}
      <div className="lg-orb lg-orb--1" />
      <div className="lg-orb lg-orb--2" />
      <div className="lg-orb lg-orb--3" />
      <div className="lg-noise" />

      <div className="lg-card">

        {/* ── Left panel ── */}
        <div className="lg-left">
          <div className="lg-left-orb" />

          <div className="lg-brand">
            <span className="lg-brand-bracket">&lt;</span>
            Code<span className="lg-brand-acc">World</span>
            <span className="lg-brand-bracket">/&gt;</span>
          </div>

          <div className="lg-left-content">
            <img src={logo} className="lg-logo" alt="CodeWorld" />
            <h2 className="lg-welcome">Hello, Welcome!</h2>
            <p className="lg-welcome-sub">Don't have an account yet?</p>
            <button className="lg-register-btn" onClick={() => navigate('/register')}>
              Register
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" className="lg-btn-arrow">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </button>
          </div>

          {/* Decorative grid lines */}
          <div className="lg-grid-lines" aria-hidden="true" />
        </div>

        {/* ── Right panel ── */}
        <div className="lg-right">
          <div className="lg-form-header">
            <p className="lg-eyebrow">
              <span className="lg-eyebrow-dot" />
              Secure Login
            </p>
            <h1 className="lg-title">Sign In</h1>
          </div>

          <form className="lg-form" onSubmit={handleLogin}>

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
                  strokeLinecap="round" className="lg-input-icon">
                  <circle cx="8" cy="5" r="3"/>
                  <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5"/>
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

            <div className="lg-forgot">
              <a href="#" className="lg-forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="lg-login-btn" disabled={loading}>
              {loading ? (
                <span className="lg-spinner" />
              ) : (
                <>
                  Login
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

export default Login