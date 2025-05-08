'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlueprintElement from '../ui/blueprint-element';
import Image from 'next/image';

// Client logos data with fallback images
const clients = [
  { name: 'Obsha Homes', logo: '/clients/obsha-homes.png', fallback: '🏢' },
  { name: 'MH', logo: '/clients/hh.png', fallback: '🏗️' },
  { name: 'Prime Brick', logo: '/clients/prime-brick.png', fallback: '🧱' },
  { name: 'Arizona Complex', logo: '/clients/arizona.png', fallback: '🏘️' },
  { name: 'Cavestone', logo: '/clients/cavestone.png', fallback: '🏛️' },
  { name: 'Super Homes', logo: '/clients/super-homes.png', fallback: '🏠' },
  { name: 'AMA Property', logo: '/clients/AMA-property.png', fallback: '🏢' },
  { name: 'Furat Apartments', logo: '/clients/furat-apartments.png', fallback: '🏬' },
  { name: 'Dimco Apartments', logo: '/clients/dimco-apartments.png', fallback: '🏙️' },
  { name: 'Sakina Plaza', logo: '/clients/sakina-plaza.png', fallback: '🏣' },
  { name: 'Ikhlas Apartments', logo: '/clients/ikhlas-apartments.png', fallback: '🏡' },
  { name: 'Juja B Annex', logo: '/clients/juja-b-annex.png', fallback: '🏘️' }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    text: "Silverpack Group delivered our project on time and beyond our expectations. Their attention to detail, professional approach, and quality of work make them our go-to construction partner for all our development projects.",
    author: "Ahmed Hassan",
    role: "Director, Prime Development Ltd",
    initial: "A"
  },
  {
    id: 2,
    text: "Working with Silverpack Group has been a game-changer for our commercial property. Their team's expertise and professionalism ensured our project was completed to the highest standards and within budget.",
    author: "Sarah Kamau",
    role: "CEO, Horizon Investments",
    initial: "S"
  },
  {
    id: 3,
    text: "The dedication and craftsmanship from Silverpack Group is unmatched. They transformed our architectural vision into reality with precision and excellence. Highly recommended for any construction project.",
    author: "James Mwangi",
    role: "Architect, Urban Design Associates",
    initial: "J"
  }
];

// Double the clients for a seamless loop
const infiniteClients = [...clients, ...clients];

const ClientsCarousel = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHoveringTestimonial, setIsHoveringTestimonial] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isHoveringTestimonial) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHoveringTestimonial]);

  return (
    <section id="clients" className="py-28 lg:py-40 overflow-hidden relative bg-background/60">
      {/* Blueprint Background */}
      <div className="absolute inset-0 building-blueprint opacity-10"></div>
      
      {/* Blueprint decorative elements */}
      <BlueprintElement 
        type="details" 
        position="top-right" 
        size="md" 
        opacity={0.08}
        rotate={-3}
      />
      
      <BlueprintElement 
        type="compass" 
        position="center" 
        size="lg" 
        opacity={0.06}
        rotate={-8}
        delay={0.3}
      />
      
      <div className="container mx-auto px-4 mb-14 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/70 backdrop-blur-sm">
              TRUSTED BY INDUSTRY LEADERS
            </div>
          </div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Valued Clients
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mt-4 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We&apos;ve successfully delivered exceptional construction projects for these respected clients across Kenya. Our commitment to quality and client satisfaction has made us a trusted partner in the construction industry.
          </motion.p>
        </div>
      </div>

      {/* First carousel - Left to Right */}
      <div className="relative w-full overflow-hidden mb-12">
        <motion.div
          ref={scrollRef1}
          className="flex space-x-10 md:space-x-16"
          animate={{
            x: [0, "-100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {infiniteClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center rounded-xl p-5 shadow-lg border border-primary/10 w-44 h-36 md:w-56 md:h-40 backdrop-blur-sm transition-all duration-300 group"
              initial={{ background: "rgba(var(--background), 0.8)" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(var(--primary-rgb), 0.15), 0 10px 10px -6px rgba(var(--primary-rgb), 0.1)",
                borderColor: "rgba(var(--primary-rgb), 0.3)",
                background: "rgba(var(--background), 0.95)"
              }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-full h-20 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <Image 
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    unoptimized
                    className="object-contain dark:invert-[0.15] dark:brightness-[1.15] dark:contrast-125 dark:hue-rotate-[5deg]"
                    style={{
                      filter: "drop-shadow(0px 3px 6px rgba(0,0,0,0.1))"
                    }}
                    onError={(e) => {
                      // Handle image load error by showing fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.textContent = client.fallback;
                        fallback.className = 'text-5xl flex items-center justify-center h-full';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="text-sm text-center font-medium text-foreground/90 transition-colors group-hover:text-primary">{client.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second carousel - Right to Left (slower) */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={scrollRef2}
          className="flex space-x-10 md:space-x-16"
          animate={{
            x: ["-100%", 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear"
            }
          }}
        >
          {[...infiniteClients].reverse().map((client, index) => (
            <motion.div
              key={`${client.name}-rev-${index}`}
              className="flex-shrink-0 flex items-center justify-center rounded-xl p-5 shadow-lg border border-primary/10 w-44 h-36 md:w-56 md:h-40 backdrop-blur-sm transition-all duration-300 group"
              initial={{ background: "rgba(var(--background), 0.8)" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(var(--primary-rgb), 0.15), 0 10px 10px -6px rgba(var(--primary-rgb), 0.1)",
                borderColor: "rgba(var(--primary-rgb), 0.3)",
                background: "rgba(var(--background), 0.95)"
              }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-full h-20 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <Image 
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    unoptimized
                    className="object-contain dark:invert-[0.15] dark:brightness-[1.15] dark:contrast-125 dark:hue-rotate-[5deg]"
                    style={{
                      filter: "drop-shadow(0px 3px 6px rgba(0,0,0,0.1))"
                    }}
                    onError={(e) => {
                      // Handle image load error by showing fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.textContent = client.fallback;
                        fallback.className = 'text-5xl flex items-center justify-center h-full';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="text-sm text-center font-medium text-foreground/90 transition-colors group-hover:text-primary">{client.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonial section with auto-rotation */}
      <div className="container mx-auto px-4 mt-24">
        <div className="h-[340px] md:h-[300px] relative">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === currentTestimonial && (
                <motion.div 
                  key={testimonial.id}
                  className="absolute inset-0 text-center max-w-3xl mx-auto rounded-2xl border border-primary/5 shadow-xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: "rgba(var(--background), 0.85)"
                  }}
                  onHoverStart={() => setIsHoveringTestimonial(true)}
                  onHoverEnd={() => setIsHoveringTestimonial(false)}
                >
                  <div className="flex flex-col h-full justify-between p-8 md:p-10">
                    <div className="flex justify-center">
                      <svg 
                        className="text-primary w-16 h-16 mb-4" 
                        viewBox="0 0 48 48" 
                        fill="currentColor"
                      >
                        <path d="M14,17H0v14l14,14V17z M42,17H28v14l14,14V17z"/>
                      </svg>
                    </div>
                    
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light italic max-w-2xl mx-auto">
                      {testimonial.text}
                    </p>
                    
                    <div className="flex items-center justify-center mt-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-medium mr-4">
                        {testimonial.initial}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-lg">{testimonial.author}</p>
                        <p className="text-sm text-foreground/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-4 absolute -bottom-10 left-0 right-0 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-primary w-8" 
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel; 