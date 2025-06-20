import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo-2.png"
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
      <header className='navbar-header'>
        <nav className='navbar-nav'>
          <img src={logo} className="logo" alt="" onClick={()=>{navigate("/")}}></img>
          <ul className="navbar-ul">
            <li className="navbar-li">About</li>
            <li className="navbar-li">Contact</li>
          </ul>
        </nav>
        <div className="navbar-button">
          <button className="navbar-btn" onClick={()=>navigate('/register')}>Register</button>
          <span className="text-white">or</span>
          <button className="navbar-btn" onClick={()=>navigate('/login')}>Login</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;