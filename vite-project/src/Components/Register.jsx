import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import logo from "../assets/logo-login.png"
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register', { name, email, password })
      .then(result => {
        if (result.data.status === "Registered") {
          alert("Registration Successful");
          navigate('/login');
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data.errors[0].msg);
        } else {
          alert("Registration failed. Please try again.");
        }
      });
  }

  function handleLogin() {
    navigate('/login');
  }

  return (
    <div className="box">
      <div className='container'>
        <div className='form-box register'>
          <form action="" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required onChange={(e) => { setName(e.target.value) }} />
              <i className='bxr bx-user'></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required onChange={(e) => { setEmail(e.target.value) }} />
              <i className='bxr bx-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required onChange={(e) => { setPassword(e.target.value) }} />
              <i className='bxr bx-lock'></i>
            </div>
            <button type='submit' className='btn'>Register</button>
          </form>
        </div>
        <div className="toggle-box">
          <div className="toggle-panel toggle-right">
            <img src={logo} className="logo-login" alt="" ></img>
            <h1>Welcome Back!</h1>
            <p>Already Have an Account</p>
            <button className="btn login-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register