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
    title: "Architectural Design",
    description: "We transform concepts into stunning architectural masterpieces that balance aesthetics, functionality, and sustainability with meticulous attention to detail.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ruler">
        <path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"/>
        <path d="m7.5 10.5 2 2"/>
        <path d="m10.5 7.5 2 2"/>
        <path d="m13.5 4.5 2 2"/>
        <path d="m16.5 1.5 2 2"/>
      </svg>
    ),
    features: [
      "Conceptual Design Development",
      "3D Visualization & Modeling",
      "Sustainable Architecture",
      "Detailed Construction Drawings"
    ],
    color: "primary"
  },
  {
    id: 2,
    title: "Structural Engineering",
    description: "Our engineering team ensures that every structure we design is not only aesthetically pleasing but also structurally sound and built to last for generations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01"/>
        <path d="M16 6h.01"/>
        <path d="M12 6h.01"/>
        <path d="M12 10h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 10h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 10h.01"/>
        <path d="M8 14h.01"/>
      </svg>
    ),
    features: [
      "Structural Analysis",
      "Load Calculations",
      "Seismic Design",
      "Foundation Systems"
    ],
    color: "accent"
  },
  {
    id: 3,
    title: "Construction Management",
    description: "Expert oversight of construction projects from start to finish, ensuring quality standards, timeline adherence, and budget compliance throughout the building process.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2v17Z"/>
        <path d="M12 10V2"/>
        <path d="m16 7-4 3-4-3"/>
        <path d="M8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        <path d="M16 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        <path d="M8 15h8"/>
      </svg>
    ),
    features: [
      "Project Scheduling",
      "Cost Management",
      "Quality Control",
      "Site Supervision"
    ],
    color: "foreground"
  },
  {
    id: 4,
    title: "Urban Planning",
    description: "We design comprehensive urban environments that promote sustainability, community interaction, and aesthetic harmony with the surrounding landscape.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark">
        <line x1="3" x2="21" y1="22" y2="22"/>
        <line x1="6" x2="6" y1="18" y2="22"/>
        <line x1="10" x2="10" y1="18" y2="22"/>
        <line x1="14" x2="14" y1="18" y2="22"/>
        <line x1="18" x2="18" y1="18" y2="22"/>
        <polygon points="12 2 20 7 4 7"/>
        <rect width="16" height="5" x="4" y="12" rx="2"/>
        <line x1="12" x2="12" y1="7" y2="12"/>
      </svg>
    ),
    features: [
      "Master Planning",
      "Urban Design",
      "Public Space Development",
      "Sustainable Infrastructure"
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
              OUR EXPERTISE
            </div>
          </div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Architectural Services
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From initial architectural concept to final construction, our comprehensive services bring your vision to life with precision and innovative design.
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
                      {service.id === 1 ? "Design" : service.id === 2 ? "Engineering" : "Development"}
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
          <h3 className="text-2xl font-bold mb-4 text-shadow-sm">Need a Custom Architectural Solution?</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Our team of architects and engineers can create customized solutions to meet your unique project requirements and design vision.
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
            Request Architectural Consultation
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