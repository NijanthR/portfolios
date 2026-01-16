import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialSidebars from './components/SocialSidebars';
import SectionReveal from './components/SectionReveal';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialSidebars />
      <div className="content">
        <Hero />
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <Skills />
        </SectionReveal>
        <SectionReveal>
          <Projects />
        </SectionReveal>
        <SectionReveal>
          <Contact />
        </SectionReveal>
      </div>
    </div>
  );
}

export default App;
