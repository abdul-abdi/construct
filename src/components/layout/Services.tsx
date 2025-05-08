'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlueprintElement from '../ui/blueprint-element';

// Define the service data
const services = [
  {
    id: 1,
    title: "Residential & Commercial Construction",
    description: "Building quality homes and developing robust commercial spaces, from planning to execution.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
        <path d="M10 6h4"/>
        <path d="M10 10h4"/>
        <path d="M10 14h4"/>
        <path d="M10 18h4"/>
      </svg>
    ),
    features: [
      "Residential Construction",
      "Commercial Construction",
      "Project Planning",
      "Site Management"
    ],
    color: "primary"
  },
  {
    id: 2,
    title: "Interior Design & Renovations",
    description: "Transforming spaces with functional and aesthetic interior design, including renovations and retrofits.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    features: [
      "Space Planning & Layout",
      "Furniture & Decor Selection",
      "Renovations & Retrofitting",
      "Custom Design Builds"
    ],
    color: "accent"
  },
  {
    id: 3,
    title: "MEP & Material Supply",
    description: "Providing mechanical, electrical, plumbing solutions, and high-quality construction material supply.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-2">
        <path d="M20 7h-9"/>
        <path d="M14 17H5"/>
        <circle cx="17" cy="17" r="3"/>
        <circle cx="7" cy="7" r="3"/>
      </svg>
    ),
    features: [
      "Mechanical Systems (HVAC)",
      "Electrical Installations",
      "Plumbing & Piping",
      "Construction Material Supply"
    ],
    color: "foreground"
  },
  {
    id: 4,
    title: "Project Management & Consultancy",
    description: "Expert project management and consultancy from inception to completion, ensuring quality and adherence to timelines.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <path d="m9 14 2 2 4-4"/>
      </svg>
    ),
    features: [
      "Project Planning & Coordination",
      "Risk Management Strategies",
      "Quality Control Assurance",
      "Expert Consultancy"
    ],
    color: "primary"
  }
];

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Improve animation configurations for better integration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      } 
    },
  };

  return (
    <section 
      id="services"
      className="py-20 lg:py-32 relative overflow-hidden bg-muted/50"
    >
      {/* Blueprint Background */}
      <div className="absolute inset-0 building-blueprint opacity-5"></div>
      
      {/* Connect with Hero section with a gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      {/* Blueprint decorative elements */}
      <BlueprintElement 
        type="building" 
        position="top-right" 
        size="lg" 
        opacity={0.1}
        rotate={-5}
      />
      
      <BlueprintElement 
        type="floor" 
        position="bottom-left" 
        size="xl" 
        opacity={0.08}
        rotate={5}
        delay={0.2}
      />

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/30 backdrop-blur-sm">
              OUR CAPABILITIES
            </div>
          </div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer a comprehensive range of construction and development services, tailored to meet the diverse needs of our clients with precision and excellence.
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Card className="bg-background/70 backdrop-blur-sm border-primary/10 h-full group hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      {service.icon}
                    </div>
                    <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 text-primary/90 border-primary/20">
                      {service.id === 1 ? "Construction" : service.id === 2 ? "Design" : service.id === 3 ? "Technical" : "Management"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70 min-h-[60px]">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
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
                          className="mr-2 text-primary h-5 w-5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <motion.div 
                    className="inline-flex items-center text-primary font-medium cursor-pointer relative group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <motion.span 
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    />
                  </motion.div>
                </CardFooter>
                <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional service info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-shadow-sm">Need a Custom Construction Solution?</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Our team of construction experts can create customized solutions to meet your unique project requirements and building vision.
          </p>
          <motion.button 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Construction Consultation
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 