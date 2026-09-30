import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialSidebars from './components/SocialSidebars';
import SectionReveal from './components/SectionReveal';
import './App.css';

// Lazy-load heavy sections so the initial bundle stays small
const About       = lazy(() => import('./components/About'));
const Skills      = lazy(() => import('./components/Skills'));
const Projects    = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact     = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialSidebars />
      <Suspense fallback={<div className="page-loader"><div className="page-spinner"></div></div>}>
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
            <Certificates />
          </SectionReveal>
          <SectionReveal>
            <Contact />
          </SectionReveal>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
