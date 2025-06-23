import SplitText from "./SplitText";
import React,{useState,useRef,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {gsap} from "gsap";
const Hero = () => {
  const navigate = useNavigate();
  const btnRef=useRef();
  const [showBtn,setShowbtn]=useState(false);
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    setShowbtn(true);
  };

  useEffect(() => {
    if (showBtn && btnRef.current) {
      gsap.fromTo(btnRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [showBtn]);

  return (
    <div className='hero-text'>
      <SplitText
        text={<>
          Hello, Coders!<br/><br/>
          Welcome to the Code World. <br/><br/>
          Where Students and Teachers <br/><br/>
          Code, Learn, and Grow Together.
          </>
          }
        className="text-3xl font-semibold text-center text-white"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

        {showBtn && (
          <div ref={btnRef}> 
            <button className="start-button" onClick={()=>{navigate("/code-editor")}} >Start</button>
          </div>
        )}
      
    </div>
  )
}

export default Hero
