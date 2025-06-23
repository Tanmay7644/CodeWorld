import React, { useState } from 'react'
import logo from "../assets/logo-2.png"
import user from "../assets/user.jpg"
import  { useNavigate } from 'react-router-dom'
const StudentNavbar = () => {
  const navigate=useNavigate();
  const [showMenu,setShowMenu]=useState(false);
  const handleUser=()=>{
    setShowMenu(prev=>!prev);
  }
  const handleProfile=()=>{
    alert("Go to Profile");
    setShowMenu(false);
  }
  const handleLogout=()=>{
    alert("Go to Logout");
    setShowMenu(false);
  }
  return (
    <div className='student-navbar'>
        <img src={logo} className="logo" alt="" onClick={()=>{navigate("/")}}></img>
        <img src={user} onClick={handleUser} alt="" className='user'/>
        {showMenu && (
          <div className='dropdown-menu'>
            <button onClick={handleProfile}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
    </div>
  )
}

export default StudentNavbar
