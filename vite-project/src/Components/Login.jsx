import { useNavigate } from 'react-router-dom'
import React ,{useState}from 'react'
import './Login.css'
import axios from 'axios';
import logo from "../assets/logo-login.png"
const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();
  
  const handleLogin= async (e)=>{
    e.preventDefault();

    try{
      // we have sent the data to backend from here and collecting the response from backend
      const res=await axios.post('http://localhost:3000/login',{email,password});
      // structure of response => res ={status:"", role: "" }
      if(res.data.status==="Success"){
        localStorage.setItem("token",res.data.token);

        if(res.data.role==="student") navigate('/StudentHome');
        else if(res.data.role==="teacher") navigate('/TeacherHome');
      }
      else{
        alert(res.data.status);
      }
    }
    catch(err){
      alert("Login Failed");
    }
  }
  
  const handleRegister=()=>{
    navigate('/register');
  }
  return (
    <div className="box">
    <div className='container'>
      <div className='form-box login'>
        <form action="" onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="email" placeholder='Email' required onChange={(e)=>{setEmail(e.target.value)}}/>
                < i className='bxr  bx-user'  ></i> 
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required  onChange={(e)=>{setPassword(e.target.value)}}/>
                < i className='bxr  bx-lock'  ></i> 
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type='submit' className='btn'>Login</button>
        </form>
      </div>

      <div className="toggle-box">
        
        <div className="toggle-panel toggle-left">
            <img src={logo} className="logo-login" alt="" ></img>
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn"  onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
