'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use the same hero content as the desktop version
const heroContent = [
  { headline: "Designing Landmarks, Building Futures.", subheading: "From vision to reality — expert construction, iconic architecture, and premium real estate solutions across Africa." },
  { headline: "Your Partner in World-Class Development.", subheading: "We bring decades of experience in construction, architecture, and real estate to every project — ensuring quality, innovation, and integrity." },
  { headline: "Creating Spaces That Define Excellence.", subheading: "Luxury living, bold architecture, and precision construction — tailored to elevate modern lifestyles and urban development." },
  { headline: "Building Communities, Not Just Structures.", subheading: "We're redefining skylines while grounding every project in sustainability, culture, and purpose." },
  { headline: "Smart Investments. Timeless Architecture.", subheading: "Whether you're buying, building, or designing — we offer holistic solutions for profitable and visionary development." }
];

const MobileHero = () => {
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 7000); // Change text every 7 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden pt-2 pb-8">
      {/* Mobile-friendly background with reduced details */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="w-full h-full opacity-20 building-blueprint"></div>
        
        {/* Simple grid overlay for architectural feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--blueprint-line-color),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--blueprint-line-color),0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Content Container - simplified for mobile */}
      <div className="container mx-auto px-4 z-20 relative flex-grow flex flex-col justify-center">
        <div className="max-w-sm mx-auto text-center mt-12 mb-8 animate-fade-in-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-block py-1 px-3 border-t border-b border-primary/50 text-xs text-primary tracking-[0.2em] bg-background/80 backdrop-blur-sm">
              PRECISION IN ARCHITECTURE
            </span>
          </motion.div>

          <motion.div
            className="font-playfair text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            <div className="relative min-h-[80px] mb-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={contentIndex + '-h1'}
                  className="w-full text-2xl leading-tight sm:text-3xl font-normal text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {heroContent[contentIndex].headline}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <div className="relative min-h-[60px] mb-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={contentIndex + '-p'}
                  className="w-full text-sm leading-relaxed text-muted-foreground"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
                >
                  {heroContent[contentIndex].subheading}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col gap-3 mt-6">
              <a href="#projects" className="w-full">
                <motion.button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 text-sm tracking-wider w-full rounded-sm"
                  whileHover={{ boxShadow: '0 0 15px rgba(28, 100, 242, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  EXPLORE OUR PROJECTS
                </motion.button>
              </a>
              <a href="#process" className="w-full">
                <motion.button
                  className="border-2 border-primary text-primary font-medium px-5 py-[10px] text-sm tracking-wider hover:bg-primary/20 hover:text-primary-foreground dark:hover:bg-primary/40 dark:hover:text-primary-foreground transition-colors duration-300 w-full rounded-sm"
                  whileHover={{ 
                    boxShadow: '0 0 10px rgba(var(--blueprint-line-color), 0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('process');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  OUR ARCHITECTURE PROCESS
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile-friendly blueprint decoration */}
      <div className="relative w-full h-24 overflow-hidden mt-auto">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-20"></div>
        <svg className="absolute bottom-0 w-full" height="60" viewBox="0 0 400 60">
          <line x1="0" y1="45" x2="400" y2="45" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="50" y1="40" x2="50" y2="50" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="100" y1="40" x2="100" y2="50" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="150" y1="40" x2="150" y2="50" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="200" y1="40" x2="200" y2="50" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="250" y1="40" x2="250" y2="50" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="300" y1="40" x2="300" y2="50" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="350" y1="40" x2="350" y2="50" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <text x="5" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">0</text>
          <text x="45" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">5m</text>
          <text x="95" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">10m</text>
          <text x="145" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">15m</text>
          <text x="195" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">20m</text>
          <text x="245" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">25m</text>
          <text x="295" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">30m</text>
          <text x="345" y="55" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="8">35m</text>
        </svg>
      </div>

      {/* Scroll Down Indicator - Simplified for mobile */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground/80 transition-colors cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => {
          const servicesSection = document.querySelector('#services');
          if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          initial={{ y: 0 }}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-1 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MobileHero; 