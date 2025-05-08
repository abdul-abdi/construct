'use client'

import React from 'react';
import { motion } from 'framer-motion';
import BlueprintElement from '../ui/blueprint-element';

const processSteps = [
  {
    id: 1,
    title: "Residential Construction",
    description: "Crafting high-quality homes with attention to detail, from luxurious family residences to multi-unit developments, delivering spaces that blend functionality with comfort.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Commercial Construction",
    description: "Building optimized commercial spaces designed for business success, including office buildings, retail spaces, and industrial facilities with quality, efficiency, and innovation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
        <path d="M10 6h4"/>
        <path d="M10 10h4"/>
        <path d="M10 14h4"/>
        <path d="M10 18h4"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Interior Design",
    description: "Creating beautiful and functional interior spaces that reflect your unique style and needs, with attention to aesthetics, ergonomics, and innovative design solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M9 22V12h6v10"></path>
        <path d="M13 5v5h3"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Renovations and Retrofits",
    description: "Transforming existing spaces through expert renovations and retrofitting services, enhancing functionality, aesthetics, and value of residential and commercial properties.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Mechanical, Electrical, and Plumbing",
    description: "Providing integrated MEP solutions that ensure optimal functionality, efficiency, and sustainability in both residential and commercial projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h10"></path>
        <path d="M8 12h10"></path>
        <path d="M8 18h10"></path>
        <path d="M3 6h.01"></path>
        <path d="M3 12h.01"></path>
        <path d="M3 18h.01"></path>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Supply of Construction Materials",
    description: "Sourcing and supplying high-quality construction materials to meet project specifications, ensuring durability, compliance with standards, and timely delivery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14"></path>
        <path d="M5 12h14"></path>
        <path d="M12 16h7"></path>
        <path d="M9.1 16a5 5 0 1 0 0 .01"></path>
      </svg>
    ),
  },
  {
    id: 7,
    title: "Project Management and Consultancy",
    description: "Providing expert project management and consultancy services to ensure successful project delivery, from planning to execution, with focus on quality, timeliness, and budget management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <path d="m9 14 2 2 4-4"/>
      </svg>
    ),
  }
];

const ConstructionProcess = () => {
  return (
    <section
      id="process"
      className="py-20 lg:py-32 relative overflow-hidden bg-background/60"
    >
      {/* Blueprint Background */}
      <div className="absolute inset-0 building-blueprint opacity-10"></div>
      
      {/* Blueprint decorative elements */}
      <BlueprintElement 
        type="floor" 
        position="top-right" 
        size="md" 
        opacity={0.1}
        rotate={-5}
      />
      
      <BlueprintElement 
        type="elevation" 
        position="bottom-left" 
        size="lg" 
        opacity={0.08}
        rotate={8}
        delay={0.4}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/70 backdrop-blur-sm">
              CONSTRUCTION EXPERTISE
            </div>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Areas of Expertise
          </motion.h2>
          
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From residential and commercial construction to specialized services, we offer comprehensive solutions to meet all your construction and development needs.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Central connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/30 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-16 md:space-y-0 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 relative`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Step number for mobile */}
                <div className="flex items-center justify-center md:hidden mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {step.id < 10 ? `0${step.id}` : step.id}
                  </div>
                </div>
                
                {/* Left/Right content container */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div 
                    className={`bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg p-8 relative overflow-hidden 
                    ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} max-w-lg`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-primary/5 rounded-full"></div>
                    
                    <div className="flex items-center mb-4 gap-4">
                      <div className={`bg-primary/10 p-3 rounded-full text-primary ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        {step.icon}
                      </div>
                      <h3 className={`text-xl font-bold ${index % 2 === 0 ? 'md:order-1' : ''}`}>{step.title}</h3>
                    </div>
                    
                    <p className="text-foreground/80 relative z-10">{step.description}</p>
                  </div>
                </div>
                
                {/* Central circle connector */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/30 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-primary">{step.id < 10 ? `0${step.id}` : step.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Project?</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Our team of construction experts is ready to guide your project through each phase, ensuring exceptional results delivered on time and within budget.
          </p>
          <motion.a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Quote
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionProcess; 