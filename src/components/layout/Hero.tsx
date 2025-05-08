'use client'

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const heroContent = [
  { headline: "SILVERPACK GROUP: A Leader in Construction.", subheading: "Consistently demonstrating excellence in construction, urban development, and property management since 2019. Delivering high-quality, innovative solutions." },
  { headline: "Committed to Precision and Sustainability.", subheading: "Our steadfast commitment to precision and sustainability has earned us a reputation for unparalleled expertise and dedication to every project." },
  { headline: "Reliability and Excellence in Every Build.", subheading: "SPG's focus on client satisfaction, innovation, and sustainability ensures we remain at the forefront of the construction industry in Kenya and beyond." },
  { headline: "Your Trusted Construction Partner.", subheading: "Silverpack Group: Building the future with high-quality, innovative solutions in construction and urban development since 2019." }
];

const Hero = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const mainOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const mainScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  const mainY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  // For blueprint grid animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  // Window dimensions state
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Only add event listeners on the client
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 7000); // Change text every 7 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      ref={targetRef}
      className="relative min-h-[100vh] flex items-start justify-center overflow-hidden pt-0 md:pt-6"
      style={{ opacity: mainOpacity, scale: mainScale, y: mainY }}
    >
      {/* Blueprint Background */}
      <div className="absolute inset-0 bg-background z-0 building-blueprint opacity-30"></div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-30 relative flex flex-col items-center">
        {/* Central Blueprint - The Centerpiece */}
        <motion.div 
          className="absolute z-10 w-[130%] max-w-[1300px] aspect-[1.5] pointer-events-none hidden md:block"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.4], [0, 100]),
            top: "20px",
            left: "50%", 
            x: "-50%",
            transform: "translate(-50%, 0) scale(0.85)"
          }}
        >
          {/* Main architectural blueprint */}
          <div className="relative w-full h-full">
            {/* Blueprint background */}
            <div className="absolute inset-0 border-4 border-primary/40 bg-primary/5 rounded-sm overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-[1px]"></div>
              
              {/* Blueprint grid */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(var(--blueprint-line-color), 0.3)" strokeWidth="0.5" />
                  </pattern>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect width="50" height="50" fill="url(#smallGrid)" />
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(var(--blueprint-line-color), 0.5)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              
              {/* Blueprint detailed elements */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1500 1000">
                {/* Building exterior outline */}
                <g stroke="rgba(var(--blueprint-line-color), 0.9)" strokeWidth="2" fill="none">
                  {/* Main building */}
                  <rect x="300" y="300" width="900" height="500" />
                  
                  {/* Building wings */}
                  <rect x="300" y="300" width="300" height="200" />
                  <rect x="900" y="300" width="300" height="200" />
                  
                  {/* Entrance */}
                  <rect x="650" y="700" width="200" height="100" />
                  <path d="M650,700 Q750,650 850,700" strokeWidth="2" />
                  
                  {/* Windows */}
                  <g strokeWidth="1.5">
                    <rect x="350" y="350" width="60" height="100" />
                    <rect x="450" y="350" width="60" height="100" />
                    <rect x="550" y="350" width="60" height="100" />
                    <rect x="650" y="350" width="60" height="100" />
                    <rect x="750" y="350" width="60" height="100" />
                    <rect x="850" y="350" width="60" height="100" />
                    <rect x="950" y="350" width="60" height="100" />
                    <rect x="1050" y="350" width="60" height="100" />
                    
                    <rect x="350" y="550" width="60" height="100" />
                    <rect x="450" y="550" width="60" height="100" />
                    <rect x="550" y="550" width="60" height="100" />
                    <rect x="850" y="550" width="60" height="100" />
                    <rect x="950" y="550" width="60" height="100" />
                    <rect x="1050" y="550" width="60" height="100" />
                  </g>
                  
                  {/* Roof details */}
                  <path d="M250,300 L750,150 L1250,300" strokeWidth="1.5" strokeDasharray="5,5" />
                  <path d="M500,300 L750,220 L1000,300" strokeWidth="1.5" />
                  
                  {/* Floor plans */}
                  <line x1="300" y1="450" x2="1200" y2="450" strokeDasharray="10,5" />
                  <line x1="300" y1="600" x2="1200" y2="600" strokeDasharray="10,5" />
                  
                  {/* Structural columns */}
                  <circle cx="400" cy="350" r="10" />
                  <circle cx="400" cy="550" r="10" />
                  <circle cx="400" cy="750" r="10" />
                  <circle cx="700" cy="350" r="10" />
                  <circle cx="700" cy="550" r="10" />
                  <circle cx="700" cy="750" r="10" />
                  <circle cx="1000" cy="350" r="10" />
                  <circle cx="1000" cy="550" r="10" />
                  <circle cx="1000" cy="750" r="10" />
                  
                  {/* Landscaping elements */}
                  <path d="M200,800 C250,820 270,780 300,800" strokeWidth="1" />
                  <path d="M1200,800 C1250,820 1270,780 1300,800" strokeWidth="1" />
                  <circle cx="250" cy="800" r="30" strokeDasharray="2,2" />
                  <circle cx="1250" cy="800" r="30" strokeDasharray="2,2" />
                </g>
                
                {/* Measurement lines and labels */}
                <g stroke="rgba(var(--blueprint-line-color), 0.7)" strokeWidth="1">
                  <line x1="300" y1="250" x2="1200" y2="250" />
                  <line x1="300" y1="240" x2="300" y2="260" />
                  <line x1="1200" y1="240" x2="1200" y2="260" />
                  
                  <line x1="250" y1="300" x2="250" y2="800" />
                  <line x1="240" y1="300" x2="260" y2="300" />
                  <line x1="240" y1="800" x2="260" y2="800" />
                </g>
                
                {/* Measurement text */}
                <g fill="rgba(var(--blueprint-line-color), 0.9)" fontFamily="monospace" fontSize="12">
                  <text x="700" y="240">45.0 M</text>
                  <text x="220" y="550">25.0 M</text>
                  
                  <text x="330" y="330" fontSize="10">WING A</text>
                  <text x="1000" y="330" fontSize="10">WING B</text>
                  <text x="700" y="650" fontSize="10">MAIN ENTRANCE</text>
                </g>
                
                {/* Blueprint title and information */}
                <g fontFamily="Arial" fontSize="18" fill="rgba(var(--blueprint-line-color), 1)">
                  <text x="150" y="150" fontWeight="bold">SILVERPACK GROUP - HEADQUARTERS ELEVATION</text>
                  <text x="150" y="180" fontSize="12" fill="rgba(var(--blueprint-line-color), 0.8)">SCALE: 1:200 | PROJECT #ARB-2023-142</text>
                </g>
                
                {/* Compass */}
                <g transform="translate(1300, 200)">
                  <circle cx="0" cy="0" r="40" fill="none" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
                  <line x1="0" y1="-35" x2="0" y2="35" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="1.5" />
                  <line x1="-35" y1="0" x2="35" y2="0" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="1.5" />
                  <text x="-5" y="-45" fill="rgba(var(--blueprint-line-color), 1)" fontSize="14">N</text>
                  <text x="45" y="5" fill="rgba(var(--blueprint-line-color), 1)" fontSize="14">E</text>
                  <text x="-5" y="55" fill="rgba(var(--blueprint-line-color), 1)" fontSize="14">S</text>
                  <text x="-55" y="5" fill="rgba(var(--blueprint-line-color), 1)" fontSize="14">W</text>
                </g>
                
                {/* Approval stamp */}
                <g transform="translate(250, 900)">
                  <circle cx="0" cy="0" r="60" fill="none" stroke="rgba(var(--blueprint-line-color), 0.5)" strokeWidth="1" strokeDasharray="5,3" />
                  <text x="-40" y="0" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="12" fontWeight="bold">APPROVED</text>
                  <text x="-50" y="20" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="10">DATE: 15.10.2023</text>
                </g>
                
                {/* Revision history */}
                <g transform="translate(1200, 900)">
                  <rect x="-100" y="-50" width="200" height="80" fill="none" stroke="rgba(var(--blueprint-line-color), 0.4)" strokeWidth="1" />
                  <text x="-90" y="-30" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="10">REV 2.1 - 10.12.2023</text>
                  <text x="-90" y="-10" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="10">REV 2.0 - 22.11.2023</text>
                  <text x="-90" y="10" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="10">REV 1.0 - 05.09.2023</text>
                  <text x="-90" y="30" fill="rgba(var(--blueprint-line-color), 0.8)" fontSize="10">INITIAL - 15.08.2023</text>
                </g>
              </svg>
            </div>
            
            {/* Dynamic measuring lines */}
            <motion.div 
              className="absolute left-0 top-0 h-full border-l-2 border-primary/50 z-20 hidden md:block"
              style={{ left: useTransform(smoothMouseX, [0, windowSize.width || 1], ["5%", "10%"]) }}
            >
              {[0, 20, 40, 60, 80, 100].map(value => (
                <div key={`measure-${value}`} className="absolute flex items-center" style={{ bottom: `${value}%` }}>
                  <div className="w-3 h-px bg-primary/80"></div>
                  <span className="text-[10px] text-primary/80 ml-1 font-mono">{value}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 left-0 w-full border-b-2 border-primary/50 z-20 hidden md:block"
              style={{ bottom: useTransform(smoothMouseY, [0, windowSize.height || 1], ["5%", "10%"]) }}
            >
              {[0, 20, 40, 60, 80, 100].map(value => (
                <div key={`hmeasure-${value}`} className="absolute flex flex-col items-center" style={{ left: `${value}%` }}>
                  <div className="h-3 w-px bg-primary/80"></div>
                  <span className="text-[10px] text-primary/80 mt-1 font-mono">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto text-center z-20 relative mt-12 md:mt-20 mb-32 md:mb-48 animate-fade-in-up md:animate-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary tracking-[0.2em] mb-1 md:mb-4 bg-background/80 backdrop-blur-sm">
              EXCELLENCE IN CONSTRUCTION
            </span>
          </motion.div>

          <motion.div
            className="font-playfair text-center py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            <div className="relative min-h-32 md:min-h-40 lg:min-h-52 mb-2 md:mb-3 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={contentIndex + '-h1'}
                  className="w-full text-3xl leading-tight tracking-normal sm:text-4xl sm:tracking-tight md:text-5xl lg:text-7xl font-normal text-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {heroContent[contentIndex].headline}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <div className="relative min-h-24 md:min-h-28 mb-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={contentIndex + '-p'}
                  className="w-full text-base leading-relaxed sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
                >
                  {heroContent[contentIndex].subheading}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-stretch gap-4 mt-6">
              <a href="#process" className="w-full sm:w-auto">
                <motion.button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-sm tracking-wider w-full sm:w-auto"
                  whileHover={{ 
                    boxShadow: '0 0 15px rgba(28, 100, 242, 0.4)',
                    scale: 1.02 
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('process');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  OUR CONSTRUCTION EXPERTISE
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blueprint ruler markings */}
      <div className="absolute bottom-10 right-10 z-30 flex flex-col items-end">
        <div className="text-primary/80 text-xs font-mono mb-1">SCALE</div>
        <div className="flex items-center">
          <div className="w-10 h-0.5 bg-primary/60"></div>
          <div className="w-0.5 h-2 bg-primary/60"></div>
          <div className="w-10 h-0.5 bg-primary/60"></div>
          <div className="w-0.5 h-2 bg-primary/60"></div>
          <div className="w-10 h-0.5 bg-primary/60"></div>
          <div className="text-primary/80 text-xs font-mono ml-1">0</div>
          <div className="text-primary/80 text-xs font-mono ml-10">5m</div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground/80 transition-colors cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => {
          const servicesSection = document.querySelector('#services');
          if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs tracking-widest mb-2">Scroll Down</span>
        <motion.div 
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          initial={{ y: 0 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-1 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
      
      {/* Section transition indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-40"></div>
    </motion.section>
  );
};

export default Hero; 