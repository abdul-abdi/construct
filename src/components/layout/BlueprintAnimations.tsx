'use client'

import React, { useEffect, useState } from 'react'
import BlueprintElement from '../ui/blueprint-element'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

// Define child components to correctly use hooks
const HorizontalLine = ({ i, scrollYProgress }: { i: number; scrollYProgress: MotionValue<number> }) => {
  const x = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -50 : 50, i % 2 === 0 ? 50 : -50]);
  return (
    <motion.div
      key={`h-line-${i}`}
      className="absolute w-full h-[1px] bg-primary/20"
      style={{ 
        top: `${i * 20}%`,
        x: x
      }}
    />
  );
};

const VerticalLine = ({ i, scrollYProgress }: { i: number; scrollYProgress: MotionValue<number> }) => {
  const y = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -50 : 50, i % 2 === 0 ? 50 : -50]);
  return (
    <motion.div
      key={`v-line-${i}`}
      className="absolute h-full w-[1px] bg-primary/20"
      style={{ 
        left: `${i * 20}%`,
        y: y
      }}
    />
  );
};

const MeasurementMark = ({ value, scrollYProgress }: { value: number; scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, 
    [value/100 - 0.1, value/100, value/100 + 0.1], 
    [0.3, 0.8, 0.3]
  );
  return (
    <motion.div 
      key={`measure-${value}`} 
      className="absolute flex items-center"
      style={{ 
        bottom: `${value}%`,
        opacity: opacity
      }}
    >
      <div className="w-2 h-px bg-primary/80"></div>
      <span className="text-[10px] text-primary/80 ml-1 font-mono">{value}</span>
    </motion.div>
  );
};

const BlueprintAnimations = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Animation values
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.05, 0.15, 0.15, 0.05])
  
  // Track scroll for triggering animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      {/* Background grid that follows the entire page */}
      <div className="fixed inset-0 building-blueprint opacity-5 pointer-events-none z-0"></div>
      
      {/* Fixed blueprint elements that move with scroll */}
      <motion.div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity: blueprintOpacity }}>
        <BlueprintElement 
          type="compass" 
          position="top-right" 
          size="md" 
          opacity={0.3}
          rotate={-5}
          delay={0.5}
        />
        
        <BlueprintElement 
          type="stamp" 
          position="bottom-left" 
          size="lg" 
          opacity={0.25}
          rotate={15}
          delay={0.8}
        />
        
        <motion.div 
          className="absolute right-12 top-1/4 w-[2px] h-[40vh] bg-primary/10"
          style={{ 
            scaleY: useTransform(scrollYProgress, [0, 1], [0.3, 2]),
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.3, 0.3, 0]) 
          }}
        />
        
        <motion.div 
          className="absolute left-12 bottom-1/4 w-[2px] h-[40vh] bg-primary/10"
          style={{ 
            scaleY: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]),
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.3, 0.3, 0]) 
          }}
        />
      </motion.div>
      
      {/* Blueprint grid lines that travel across sections */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.2, 0.2, 0]) }}
      >
        {/* Horizontal measurement lines */}
        {[1, 2, 3, 4, 5].map((i) => (
          <HorizontalLine key={`h-${i}`} i={i} scrollYProgress={scrollYProgress} />
        ))}
        
        {/* Vertical measurement lines */}
        {[1, 2, 3, 4, 5].map((i) => (
          <VerticalLine key={`v-${i}`} i={i} scrollYProgress={scrollYProgress} />
        ))}
      </motion.div>
      
      {/* Dynamic blueprint elements that appear while scrolling */}
      {hasScrolled && (
        <>
          <motion.div
            className="fixed left-0 top-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <BlueprintElement 
              type="building" 
              position="top-left" 
              size="lg" 
              opacity={0.1}
              rotate={5}
              delay={0.2}
            />
            
            <BlueprintElement 
              type="floor" 
              position="bottom-right" 
              size="xl" 
              opacity={0.08}
              rotate={-8}
              delay={0.6}
            />
            
            <BlueprintElement 
              type="elevation" 
              position="center" 
              size="lg" 
              opacity={0.12}
              rotate={0}
              delay={1}
            />
            
            <BlueprintElement 
              type="details" 
              position="top-right" 
              size="sm" 
              opacity={0.12}
              rotate={-12}
              delay={1.2}
            />
          </motion.div>
        </>
      )}
      
      {/* Blueprint hover measurement lines */}
      <div className="fixed left-6 top-0 h-full pointer-events-none z-10 hidden md:block">
        <div className="relative h-full border-l border-primary/30">
          {[0, 20, 40, 60, 80, 100].map(value => (
            <MeasurementMark key={`measure-${value}`} value={value} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BlueprintAnimations 