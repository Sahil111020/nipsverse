import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Mint from './components/Mint';
import Featured1 from './components/Featured1';
import Featured2 from './components/Featured2';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <div className="flex flex-col content-center">
      <Navbar />
      <HeroSection />
      <Mint/>
      <Featured1/>
      <Featured2/>
      <Roadmap/>
      <Team/>
      <FaqSection/>
    </div>
  )
}

export default App
