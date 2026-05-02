// import Navbar from './Navbar'
// import Hero from './Hero'
// import Footer from './Footer'
// import LandingPage from './LandingPage'
// const Home = () => {
//   return (
//     <>
//         <div className='home'>
//             <div className="background"></div>
//             <Navbar/>
//             <main className='home-main'>
//               <Hero/>
//               <LandingPage/>
//             </main>
//             <Footer/>
//         </div>
//     </>
//   )
// }

// export default Home

import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import LandingPage from './LandingPage'

const Home = () => {
  return (
    <div className='lp-root'>
      {/* Ambient orbs */}
      <div className="lp-orb lp-orb--1" />
      <div className="lp-orb lp-orb--2" />
      <div className="lp-orb lp-orb--3" />
      <div className="lp-noise" />

      <Navbar />

      <main className='lp-main'>
        <Hero />
        <LandingPage />
      </main>

      <Footer />
    </div>
  )
}

export default Home