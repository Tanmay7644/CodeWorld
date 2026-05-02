// import SplitText from "./SplitText";
// import React,{useState,useRef,useEffect} from 'react';
// import { useNavigate } from "react-router-dom";
// import {gsap} from "gsap";
// const Hero = () => {
//   const navigate = useNavigate();
//   const btnRef=useRef();
//   const [showBtn,setShowbtn]=useState(false);
//   const handleAnimationComplete = () => {
//     console.log('All letters have animated!');
//     setShowbtn(true);
//   };

//   useEffect(() => {
//     if (showBtn && btnRef.current) {
//       gsap.fromTo(btnRef.current, 
//         { opacity: 0, y: 20 },   // starting state
//         { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }  // ending state
//       );
//     }
//   }, [showBtn]);

//   return (
//     <div className='hero-text'>
//       <SplitText
//         text={<>
//           Hello, Coders!<br/><br/>
//           Welcome to the Code World. <br/><br/>
//           Where Students and Teachers <br/><br/>
//           Code, Learn, and Grow Together.
//           </>
//           }
//         className="text-3xl font-semibold text-center text-white"
//         delay={50}
//         duration={0.6}
//         ease="power3.out"
//         splitType="chars"
//         from={{ opacity: 0, y: 40 }}
//         to={{ opacity: 1, y: 0 }}
//         threshold={0.1}
//         rootMargin="-100px"
//         textAlign="center"
//         onLetterAnimationComplete={handleAnimationComplete}
//       />

//         {showBtn && (
//           <div ref={btnRef}> 
//             <button className="start-button" onClick={()=>{navigate("/login")}} >Start</button>
//           </div>
//         )}

//     </div>
//   )
// }

// export default Hero


import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import SplitText from "./SplitText";

const Hero = () => {
  const navigate = useNavigate();
  const btnRef = useRef();
  const statsRef = useRef();
  const [showBtn, setShowBtn] = useState(false);

  const handleAnimationComplete = () => {
    setShowBtn(true);
  };
  const token = localStorage.getItem("token");

  const handleGetStarted = () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }

      let payload = JSON.parse(atob(token.split('.')[1]));

      if (payload.role === "student") {
        navigate("/StudentHome");
      }
      else if (payload.role === "teacher") {
        navigate("/TeacherHome");
      }
      else {
        navigate("/login");
      }
    }
    catch (error) {
      console.log("Invalid token:", error);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (showBtn && btnRef.current) {
      gsap.fromTo(btnRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
    }
  }, [showBtn]);

  return (
    <div className='lp-hero'>
      {/* Eyebrow */}
      <div className='lp-hero-eyebrow'>
        <span className='lp-eyebrow-dot' />
        Collaborative Learning Platform
      </div>

      {/* Headline via SplitText */}
      <SplitText
        text="Hello, Coders!"
        className="lp-hero-h1"
        delay={40}
        duration={0.7}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <p className="lp-hero-sub">
        Where Students and Teachers <strong>Code, Learn, and Grow</strong> together —<br />
        from live code execution to notes and video lectures.
      </p>

      {showBtn && (
        <div ref={btnRef} className="lp-hero-actions">
          <button className="lp-start-btn" onClick={handleGetStarted}>
            Get Started
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" className="lp-start-arrow">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
          <button className="lp-ghost-btn" onClick={() => navigate("/register")}>
            Create Account
          </button>
        </div>
      )}

      {/* Stats row */}
      <div className='lp-stats' ref={statsRef}>
        {[
          { val: '3+', label: 'Languages' },
          { val: 'Live', label: 'Code Execution' },
          { val: '∞', label: 'Notes & Lectures' },
        ].map((s, i) => (
          <div key={i} className='lp-stat'>
            <span className='lp-stat-val'>{s.val}</span>
            <span className='lp-stat-label'>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;