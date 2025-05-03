'use client'

import React from 'react';
import { motion } from 'framer-motion';
import BlueprintElement from '../ui/blueprint-element';

const processSteps = [
  {
    id: 1,
    title: "Conceptual Design",
    description: "We begin by transforming your vision into conceptual designs that capture the essence of your architectural aspirations, focusing on spatial relationships and aesthetic direction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="2 12 22 12 14 22 14 2"></polygon>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Schematic Development",
    description: "Refining concepts into detailed schematics with precise measurements, structural considerations, and material selections that align with both vision and functionality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Technical Documentation",
    description: "Creating comprehensive blueprints and technical specifications that meet building codes, engineering requirements, and provide clear guidance for construction teams.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Construction Administration",
    description: "Overseeing the building process to ensure faithful execution of architectural designs, addressing field conditions, and maintaining design integrity throughout construction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="8" rx="1"></rect>
        <path d="M17 14v7"></path>
        <path d="M7 14v7"></path>
        <path d="M17 3v3"></path>
        <path d="M7 3v3"></path>
        <path d="M10 14 2.3 6.3"></path>
        <path d="m14 6 7.7 7.7"></path>
        <path d="m8 6 8 8"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Post-Occupancy Evaluation",
    description: "Assessing the completed structure in use to gather insights for future projects and ensure the building meets all functional, aesthetic, and sustainability goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h20"></path>
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
        <path d="m7 21 5-5 5 5"></path>
      </svg>
    ),
  }
];

const ArchitectureProcess = () => {
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
              ARCHITECTURAL METHODOLOGY
            </div>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Architecture Process
          </motion.h2>
          
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From conceptual design to final construction, our comprehensive architectural process ensures excellence at every stage, transforming visions into precisely engineered structures.
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
                    {step.id}
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
                    <span className="text-xl font-bold text-primary">{step.id}</span>
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
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Project Journey?</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Our team of architects and engineers is ready to guide your vision through each phase of our proven process, ensuring exceptional results.
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
            Schedule a Consultation
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

export default ArchitectureProcess; 