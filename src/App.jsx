import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AIAssistant from './components/AIchat/AIAssistant';
import Certificates from './components/Certificates/Certificates';
import DeveloperTerminal from './components/DeveloperTerminal/DeveloperTerminal';
// import CurrentlyBuilding from './components/CurrentlyBuilding/CurrentlyBuilding';

// import TechMarquee from './components/TechMarquee/TechMarquee';

function App() {
  

  return (
   <>
    <Navbar />
    <Hero />
    {/* <TechMarquee /> */}
    <About />
    <Skills />
    <DeveloperTerminal />
    <Projects />
    <Experience />
    {/* <CurrentlyBuilding /> */}
    <Certificates/>
    <Contact />
    <Footer />
    <AIAssistant />

   </>
  )
}

export default App
