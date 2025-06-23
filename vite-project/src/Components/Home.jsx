import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import LandingPage from './LandingPage'
const Home = () => {
  return (
    <>
        <div className='home'>
            <div className="background"></div>
            <Navbar/>
            <main className='home-main'>
              <Hero/>
              <LandingPage/>
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default Home
