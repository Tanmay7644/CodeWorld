import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Card from './Card'
import IMG1 from '../assets/IMG-1.jpg'
import IMG2 from '../assets/IMG-2.jpg'
import IMG3 from '../assets/IMG-3.webp'
import IMG4 from '../assets/IMG-4.png'
// className='bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]'
const Home = () => {
  return (
    <>
        <div className='home'>
            <div className="background"></div>
            <Navbar/>
            <main>
              <Hero/>
              <div className='all-cards'>
                <Card image={IMG1} desc={"LIVE LECTURES"}/>
                <Card image={IMG2} desc={"DOWNLOAD NOTES"}/>
                <Card image={IMG3} desc={"RECORDER LECTURES"}/>
                <Card image={IMG4} desc={"CODE EDITOR"}/>
              </div>
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default Home
