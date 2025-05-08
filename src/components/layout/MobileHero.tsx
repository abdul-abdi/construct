'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use the same hero content as the desktop version
const heroContent = [
  { headline: "SILVERPACK GROUP: A Leader in Construction.", subheading: "Consistently demonstrating excellence in construction, urban development, and property management since 2019. Delivering high-quality, innovative solutions." },
  { headline: "Committed to Precision and Sustainability.", subheading: "Our steadfast commitment to precision and sustainability has earned us a reputation for unparalleled expertise and dedication to every project." },
  { headline: "Reliability and Excellence in Every Build.", subheading: "SPG's focus on client satisfaction, innovation, and sustainability ensures we remain at the forefront of the construction industry in Kenya and beyond." },
  { headline: "Your Trusted Construction Partner.", subheading: "Silverpack Group: Building the future with high-quality, innovative solutions in construction and urban development since 2019." }
];

// Stats for the company achievements
const companyStats = [
  { value: "80+", label: "Projects Completed" },
  { value: "Since 2019", label: "Established" }
];

// Featured projects for the highlights section
const featuredHighlights = [
  { title: "Residential Construction", description: "Building quality homes" },
  { title: "Commercial Construction", description: "Developing business spaces" },
  { title: "Interior Design", description: "Functional & aesthetic spaces" }
];

// Construction quotes
const constructionQuotes = [
  { quote: "We shape our buildings; thereafter, they shape us.", author: "Winston Churchill" },
  { quote: "The best buildings come from the perfect blend of art and engineering.", author: "Frank Lloyd Wright" },
  { quote: "Good buildings come from good people, and all problems are solved by good design.", author: "Stephen Gardiner" },
  { quote: "A building has integrity just like a person, and just as seldom.", author: "Ayn Rand" },
  { quote: "The art of construction is rooted in the science of building.", author: "Jean Nouvel" },
];

const MobileHero = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const contentInterval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 7000); // Change text every 7 seconds
    
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % constructionQuotes.length);
    }, 8000);

    return () => {
      clearInterval(contentInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[105vh] flex flex-col justify-between overflow-hidden pt-0 pb-2">
      {/* Mobile-friendly background with reduced details */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="w-full h-full opacity-20 building-blueprint"></div>
        
        {/* Simple grid overlay for architectural feel - updated to match blueprint style */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--blueprint-line-color),0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--blueprint-line-color),0.07)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Content Container - simplified for mobile */}
      <div className="container mx-auto px-4 z-20 relative flex-grow flex flex-col justify-center pt-8">
        <div className="max-w-sm mx-auto text-center mt-16 mb-12 animate-fade-in-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm text-primary tracking-[0.2em] bg-background/80 backdrop-blur-sm">
              EXCELLENCE IN CONSTRUCTION
            </span>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            <div className="relative min-h-[80px] mb-3 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={contentIndex + '-h1'}
                  className="w-full text-2xl leading-tight sm:text-3xl font-bold text-foreground"
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
                  className="w-full text-sm leading-relaxed text-muted-foreground/80"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
                >
                  {heroContent[contentIndex].subheading}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col gap-3 mt-8">
              <a href="#process" className="w-full">
                <motion.button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 text-sm tracking-wider w-full"
                  whileHover={{ 
                    boxShadow: '0 0 15px rgba(28, 100, 242, 0.4)',
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
        
        {/* Company Stats */}
        <motion.div 
          className="mt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
            {companyStats.map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                className="flex flex-col items-center p-3 bg-background/20 border border-primary/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <span className="text-xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-foreground/70">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Construction Quote */}
        <motion.div 
          className="mb-14 mx-auto max-w-xs bg-background/20 backdrop-blur-sm border border-primary/10 p-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-xs italic text-foreground/80 mb-1">&ldquo;{constructionQuotes[quoteIndex].quote}&rdquo;</p>
          <p className="text-right text-[10px] text-primary/80">— {constructionQuotes[quoteIndex].author}</p>
        </motion.div>
        
        {/* Featured Project Highlights */}
        <motion.div 
          className="mt-4 mb-12 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xs uppercase tracking-wider text-foreground/60 mb-3 text-center">FEATURED EXPERTISE</h3>
          <div className="grid grid-cols-3 gap-3">
            {featuredHighlights.map((item, index) => (
              <motion.div
                key={`highlight-${index}`}
                className="flex flex-col items-center p-2 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    {index === 0 ? (
                      // House icon for residential
                      <>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </>
                    ) : index === 1 ? (
                      // Building icon for commercial
                      <>
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12" y2="18"></line>
                        <line x1="8" y1="6" x2="16" y2="6"></line>
                        <line x1="8" y1="10" x2="16" y2="10"></line>
                        <line x1="8" y1="14" x2="16" y2="14"></line>
                      </>
                    ) : (
                      // Map icon for urban planning
                      <>
                        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                        <line x1="8" y1="2" x2="8" y2="18"></line>
                        <line x1="16" y1="6" x2="16" y2="22"></line>
                      </>
                    )}
                  </svg>
                </div>
                <span className="text-xs font-medium">{item.title}</span>
                <span className="text-[10px] text-foreground/60">{item.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground/80 transition-colors cursor-pointer z-30"
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