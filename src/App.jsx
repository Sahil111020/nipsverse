import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Mint from './components/Mint';
import Featured1 from './components/Featured1';
import Featured2 from './components/Featured2';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FaqSection from './components/FaqSection';
import Aos from 'aos'
import Mountain from "./components/Mountain";
import 'aos/dist/aos.css'

function App() {
  useEffect(() =>{
    Aos.init({ duration: 1000});
  }, [])
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-evenly">
      <HeroSection data-aos="fade-up" />
      <Mint data-aos="fade-up"/>
      <Featured1 data-aos="fade-up"/>
      <Featured2 data-aos="fade-up"/>
      <Roadmap data-aos="fade-up"/>
      <Team data-aos="fade-left"/>
      <FaqSection data-aos="fade-up"/>
      <Mountain />
    </div>
    </>
  )
}

export default App
