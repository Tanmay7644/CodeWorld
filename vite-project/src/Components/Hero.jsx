import React from 'react'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate();
  return (
    <div className='hero-text'>
      <p>Empower Your Learning</p>
      <p>Access Lectures, Notes and Live Classes</p>
      <button onClick={()=>{navigate('/code-editor')}}>Start</button>
    </div>
  )
}

export default Hero
