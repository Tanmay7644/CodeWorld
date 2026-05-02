// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from "../assets/logo-2.png"
// const Navbar = () => {
//   const navigate=useNavigate();
//   return (
//     <>
//       <header className='navbar-header'>
//         <nav className='navbar-nav'>
//           <img src={logo} className="logo" alt="" onClick={()=>{navigate("/")}}></img>
//           <ul className="navbar-ul">
//             <li className="navbar-li">About</li>
//             <li className="navbar-li">Contact</li>
//           </ul>
//         </nav>
//         <div className="navbar-button">
//           <button className="navbar-btn" onClick={()=>navigate('/register')}>Register</button>
//           <span className="text-white">or</span>
//           <button className="navbar-btn" onClick={()=>navigate('/login')}>Login</button>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo-2.png"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className='lp-navbar'>
      <div className='lp-nav-inner'>
        <button className='lp-nav-logo' onClick={() => navigate("/")}>
          <img src={logo} className="lp-logo-img" alt="Code World" />
          <span className='lp-logo-text'>Code <span className='lp-logo-acc'>World</span></span>
        </button>

        <ul className="lp-nav-links">
          <li className="lp-nav-link">About</li>
          <li className="lp-nav-link">Contact</li>
        </ul>

        <div className="lp-nav-actions">
          <button className="lp-nav-btn lp-nav-btn--ghost" onClick={() => navigate('/register')}>Register</button>
          <span className="lp-nav-sep">or</span>
          <button className="lp-nav-btn lp-nav-btn--solid" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;