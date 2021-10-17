import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Mint from './components/Mint';
import Featured1 from './components/Featured1';
import Featured2 from './components/Featured2';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FaqSection from './components/FaqSection';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() =>{
    AOS.init({ duration: 1500});
    AOS.refresh();
  }, [])
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-evenly text-primary1" >
      <HeroSection  />
      <Mint />
      <Featured1 />
      <Featured2 />
      <Roadmap />
      <Team />
      <FaqSection />
    </div>
    </>
  )
}

export default App
