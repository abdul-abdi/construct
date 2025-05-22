'use client'

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

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
  
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 7000); // Change text every 7 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-0 md:pt-0"
      style={{ opacity: mainOpacity, scale: mainScale, y: mainY }}
    >
      {/* Construction Blueprint Background with enhanced grid */}
      <div className="absolute inset-0 bg-background z-0">
        {/* Blueprint grid with more pronounced lines */}
        <div className="absolute inset-0 building-blueprint opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(var(--blueprint-line-color), 0.4)" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <rect width="50" height="50" fill="url(#smallGrid)" />
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      {/* Decorative construction elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="rgba(var(--blueprint-line-color), 0.7)" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="35" stroke="rgba(var(--blueprint-line-color), 0.6)" strokeWidth="1" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(var(--blueprint-line-color), 0.7)" strokeWidth="0.75" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(var(--blueprint-line-color), 0.7)" strokeWidth="0.75" />
          <path d="M50,10 L55,25 L50,20 L45,25 Z" fill="rgba(var(--blueprint-line-color), 0.8)" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
      >
        <svg width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="25" x2="120" y2="25" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="1" />
          <line x1="0" y1="20" x2="0" y2="30" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="1" />
          <line x1="120" y1="20" x2="120" y2="30" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="1" />
          <text x="60" y="15" fontSize="8" fill="rgba(var(--blueprint-line-color), 0.8)" textAnchor="middle" fontFamily="monospace">SCALE 1:100</text>
        </svg>
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-30 relative flex flex-col items-center justify-between h-full py-8">
        {/* Content Container with construction-themed decorations */}
        <div className="max-w-4xl mx-auto text-center z-20 relative mt-4 md:mt-8 mb-8 md:mb-8 animate-fade-in-up md:animate-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="mb-4 flex justify-center relative"
          >
            {/* Construction tape-like header */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[140%] border-y-2 border-primary/30 -z-10"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10"></div>
            
            <span className="inline-block py-1 px-6 text-sm md:text-base text-primary tracking-[0.2em] mb-1 md:mb-2 bg-background/80 backdrop-blur-sm border-l-2 border-r-2 border-primary/40">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
                className="relative"
              >
                EXCELLENCE IN CONSTRUCTION
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut', delay: 1 }}
                />
              </motion.span>
            </span>
          </motion.div>

          <motion.div
            className="font-playfair text-center py-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            {/* Blueprint corner decorations */}
            <svg className="absolute top-0 left-0 w-12 h-12 opacity-70" viewBox="0 0 24 24" fill="none">
              <path d="M1 23V1h22" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="0.5" />
            </svg>
            <svg className="absolute top-0 right-0 w-12 h-12 opacity-70" viewBox="0 0 24 24" fill="none">
              <path d="M23 23V1H1" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="0.5" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-12 h-12 opacity-70" viewBox="0 0 24 24" fill="none">
              <path d="M1 1v22h22" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="0.5" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-12 h-12 opacity-70" viewBox="0 0 24 24" fill="none">
              <path d="M23 1v22H1" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="0.5" />
            </svg>
            
            <div className="relative min-h-24 md:min-h-32 mb-2 md:mb-3 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={contentIndex + '-h1'}
                  className="w-full text-3xl leading-tight tracking-normal sm:text-4xl sm:tracking-tight md:text-5xl lg:text-6xl font-normal text-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {heroContent[contentIndex].headline}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <div className="relative min-h-16 md:min-h-20 mb-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={contentIndex + '-p'}
                  className="w-full text-base leading-relaxed sm:text-lg text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
                >
                  {heroContent[contentIndex].subheading}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-stretch gap-4 mt-2">
              <a href="#process" className="w-full sm:w-auto relative">
                <motion.button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-sm tracking-wider w-full sm:w-auto relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: '0 0 15px rgba(var(--blueprint-line-color), 0.8)',
                    scale: 1.02 
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('process');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {/* Blueprint-style decoration on button */}
                  <span className="relative z-10">OUR CONSTRUCTION EXPERTISE</span>
                  <motion.span 
                    className="absolute inset-0 bg-primary/20 backdrop-blur-sm z-0" 
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute top-0 left-0 w-full h-full grid grid-cols-6 grid-rows-3 z-0 opacity-20 pointer-events-none">
                    {[...Array(18)].map((_, i) => (
                      <span key={i} className="border-[0.5px] border-dashed border-white/30"></span>
                    ))}
                  </span>
                </motion.button>
                
                {/* Construction measure marks */}
                <div className="hidden md:block absolute -bottom-5 left-0 right-0 h-4">
                  <div className="w-full h-px bg-primary/40"></div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="absolute top-0 w-px h-2 bg-primary/40" style={{ left: `${i * 25}%` }}></div>
                  ))}
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Blueprint Container - Styled like a code block with enhanced construction elements */}
        <motion.div
          className="w-full max-w-4xl mx-auto mb-6 relative z-10 hidden md:block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <div className="w-full rounded-lg overflow-hidden bg-primary/5 border border-primary/20 shadow-lg backdrop-blur-sm">
            {/* Blueprint Header - Like code editor header but with construction theme */}
            <div className="bg-primary/10 backdrop-blur-sm px-4 py-1 border-b border-primary/20 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-xs font-mono text-primary/80">SILVERPACK GROUP - HEADQUARTERS ELEVATION</span>
              </div>
              <span className="text-xs font-mono text-primary/60">REV: 2.1 | SCALE: 1:200</span>
            </div>
            
            {/* Blueprint Content Area with construction measurements and drawing animation */}
            <div className="relative w-full aspect-[2] overflow-hidden">
              {/* Vertical measurement indicators */}
              <div className="absolute left-2 top-0 bottom-0 w-6 flex flex-col justify-between z-10 pointer-events-none">
                <div className="text-[8px] text-primary/60 font-mono">100.0</div>
                <div className="text-[8px] text-primary/60 font-mono">75.0</div>
                <div className="text-[8px] text-primary/60 font-mono">50.0</div>
                <div className="text-[8px] text-primary/60 font-mono">25.0</div>
                <div className="text-[8px] text-primary/60 font-mono">0.0</div>
              </div>
              
              {/* Horizontal measurement indicators */}
              <div className="absolute left-8 right-8 bottom-1 h-4 flex justify-between z-10 pointer-events-none">
                <div className="text-[8px] text-primary/60 font-mono">0.0</div>
                <div className="text-[8px] text-primary/60 font-mono">25.0</div>
                <div className="text-[8px] text-primary/60 font-mono">50.0</div>
                <div className="text-[8px] text-primary/60 font-mono">75.0</div>
                <div className="text-[8px] text-primary/60 font-mono">100.0</div>
              </div>
              
              {/* Main architectural blueprint with drawing animation */}
              <div className="absolute inset-0 border border-primary/10 overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-[1px]"></div>
                
                {/* Blueprint grid */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                    <pattern id="smallGridBlueprint" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(var(--blueprint-line-color), 0.3)" strokeWidth="0.5" />
                    </pattern>
                    <pattern id="gridBlueprint" width="50" height="50" patternUnits="userSpaceOnUse">
                      <rect width="50" height="50" fill="url(#smallGridBlueprint)" />
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(var(--blueprint-line-color), 0.5)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridBlueprint)" />
                </svg>
                
                {/* Blueprint detailed elements with drawing animation */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1500 1000">
                  {/* Animated drawing elements */}
                  <motion.g 
                    stroke="rgba(var(--blueprint-line-color), 0.9)" 
                    strokeWidth="2" 
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    {/* Main building outline */}
                    <motion.rect 
                      x="300" y="300" width="900" height="500"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    
                    {/* Building wings */}
                    <motion.rect 
                      x="300" y="300" width="300" height="200"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.rect 
                      x="900" y="300" width="300" height="200"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </motion.g>
                  
                  {/* Static building details */}
                  <g stroke="rgba(var(--blueprint-line-color), 0.9)" strokeWidth="2" fill="none">
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
                  
                  {/* Blueprint information */}
                  <g fontFamily="Arial" fontSize="12" fill="rgba(var(--blueprint-line-color), 0.8)">
                    <text x="850" y="180" fontSize="10">SCALE: 1:200 | PROJECT #ARB-2023-142</text>
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
                
                {/* Construction drawing pointers */}
                <motion.div 
                  className="absolute top-[200px] left-[300px] w-4 h-4 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="w-full h-full rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-primary/80"></div>
                  </div>
                  <div className="absolute -top-6 left-4 text-[8px] font-mono text-primary/80">A1</div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[350px] right-[300px] w-4 h-4 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.5, 1] }}
                  transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="w-full h-full rounded-full border border-primary/60 bg-primary/10 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-primary/80"></div>
                  </div>
                  <div className="absolute -top-6 right-4 text-[8px] font-mono text-primary/80">B5</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Construction tool decorative elements */}
      <motion.div
        className="absolute bottom-16 left-10 w-24 h-24 opacity-40 hidden lg:block"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.4, rotate: 0 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10,50 L90,50 M50,10 L50,90 M50,50 L80,20 M50,50 L20,20" stroke="rgba(var(--blueprint-line-color), 0.8)" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" stroke="rgba(var(--blueprint-line-color), 0.5)" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>

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