import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useActiveSection } from './hooks/useActiveSection';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'certificate', 'contact'];

function PortfolioContent() {
  const [isLoading, setIsLoading] = useState(true);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificate />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
