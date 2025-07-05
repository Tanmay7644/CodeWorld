import React from 'react'
import StudentNavbar from './StudentNavbar'
import Footer from './Footer'
import Line from "../assets/line-seperator.png"
import { useNavigate } from 'react-router-dom'
const StudentHome = () => {
  const navigate = useNavigate();
  const handleNotes = () => {
    navigate('/accessNotes');
  }
  const handleLectures = () => {
    navigate('/accessLectures');
  }
  return (
    <div className='student-home'>
      <div className='student-home-background'></div>
      <StudentNavbar/>
      {/* <hr className='student-line'/> */}
      <div className='student-hero'>
        <h1>Build  Learn  Code  Repeat</h1>
        <h3>Code World empowers students and educators to learn, collaborate, and build in real-time. From notes and lectures to writing and testing code—everything you need in one platform.</h3>
      </div>
      <div className='line-seperator'>
          <img src={Line} alt="" />
      </div>
      <div className='student-container'>
        <div className='container-1'>
            <h1>Access Notes</h1>
            <button onClick={handleNotes}>Access Notes</button>
        </div>
        <div className='container-2' >
            <img src="" alt="" />
            <button ></button>
        </div>
        <div className='container-3'>
            <h1>Access Lectures</h1>
            <button onClick={handleLectures}>Access Lectures</button>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default StudentHome
