'use client'

import { useState, useEffect } from 'react';
import Hero from '@/components/layout/Hero';
import MobileHero from '@/components/layout/MobileHero';
import ArchitectureProcess from '@/components/layout/ArchitectureProcess';
import Services from '@/components/layout/Services';
import Projects from '@/components/layout/Projects';
import About from '@/components/layout/About';
import Contact from '@/components/layout/Contact';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check screen size on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard md breakpoint in Tailwind
    };
    
    // Set initial state
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      {isMobile ? <MobileHero /> : <Hero />}
      <ArchitectureProcess />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
