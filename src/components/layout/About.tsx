'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import BlueprintElement from '../ui/blueprint-element';

// Team member type
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

// Company stats type
interface CompanyStat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jennifer Lewis",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
    bio: "Jennifer brings over 20 years of experience in architectural design and construction management. Her innovative designs have won multiple industry awards."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Structural Engineering Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop",
    bio: "With expertise in large-scale structural projects, Michael ensures our designs meet the highest engineering standards while pushing creative boundaries."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Sustainable Design Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop",
    bio: "Sarah's passion for sustainable architecture creates environmentally responsible buildings that reduce carbon footprints while maintaining aesthetic excellence."
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
    bio: "David's meticulous attention to blueprint details and client-focused approach ensures every architectural project is executed with precision."
  }
];

// Company stats data
const companyStats: CompanyStat[] = [
  {
    id: 1,
    value: "150+",
    label: "Structures Designed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2z"></path>
        <path d="M14 2v6h6"></path>
      </svg>
    )
  },
  {
    id: 2,
    value: "25+",
    label: "Years Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    id: 3,
    value: "30+",
    label: "Architectural Awards",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15c6.627 0 12-1.343 12-3v2c0 1.657-5.373 3-12 3-6.627 0-12-1.343-12-3v-2c0 1.657 5.373 3 12 3Z"></path>
        <path d="M12 18c6.627 0 12-1.343 12-3v2c0 1.657-5.373 3-12 3-6.627 0-12-1.343-12-3v-2c0 1.657 5.373 3 12 3Z"></path>
        <path d="M12 21c6.627 0 12-1.343 12-3v2c0 1.657-5.373 3-12 3-6.627 0-12-1.343-12-3v-2c0 1.657 5.373 3 12 3Z"></path>
        <path d="M12 3c6.627 0 12 1.343 12 3s-5.373 3-12 3-12-1.343-12-3 5.373-3 12-3Z"></path>
        <path d="M12 3v18"></path>
      </svg>
    )
  },
  {
    id: 4,
    value: "98%",
    label: "Client Satisfaction",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    )
  }
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      id="about"
      className="py-20 lg:py-32 relative overflow-hidden bg-muted/30"
      ref={sectionRef}
    >
      {/* Blueprint background elements */}
      <div className="absolute inset-0 building-blueprint opacity-5"></div>
      
      {/* Blueprint decorative elements */}
      <BlueprintElement 
        type="details" 
        position="top-left" 
        size="lg" 
        opacity={0.1}
        rotate={8}
      />
      
      <BlueprintElement 
        type="elevation" 
        position="bottom-right" 
        size="xl" 
        opacity={0.08}
        rotate={-5}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/30 backdrop-blur-sm">
              OUR ARCHITECTURAL LEGACY
            </div>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Architects Behind ConstructCo
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We&apos;ve combined visionary architectural design with precision engineering to create structures that stand as monuments to both form and function.
          </motion.p>
        </div>

        {/* Company story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 border-4 border-primary/20 z-10 pointer-events-none"></div>
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1170&auto=format&fit=crop"
              alt="ConstructCo Architectural Project"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-shadow-sm relative inline-flex">
              Our Architectural Philosophy
              <motion.span 
                className="absolute -bottom-1 left-0 h-[1px] bg-primary/80"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h3>
            <p className="text-foreground/80 mb-6">
              ConstructCo began with a singular vision: to create architectural masterpieces that transform skylines and redefine spaces. What started as a small studio has evolved into a leading architectural firm recognized for innovative design, structural integrity, and sustainable building practices.
            </p>
            <p className="text-foreground/80 mb-6">
              Our approach to architecture transcends mere building design – we craft experiences through thoughtful spatial planning, cutting-edge materials, and meticulous attention to every blueprint detail. From initial concept sketches to final construction, we maintain a relentless pursuit of architectural excellence.
            </p>
            <div>
              <motion.div 
                className="inline-flex items-center text-primary font-medium cursor-pointer relative group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Explore our architectural approach
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 flex flex-col items-center text-center shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-primary/5 rounded-full"></div>
              <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary relative z-10">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold mb-2 text-shadow-sm relative z-10">{stat.value}</h4>
              <p className="text-foreground/80 relative z-10">{stat.label}</p>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Team members */}
        <div className="mb-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-shadow-sm relative inline-flex">
              Our Architectural Team
              <motion.span 
                className="absolute -bottom-1 left-0 h-[1px] bg-primary/80"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Meet the visionaries behind our architectural designs – a diverse team of architects, engineers, and designers committed to creating exceptional built environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background/70 backdrop-blur-sm border border-primary/10 rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-1 text-shadow-sm">{member.name}</h4>
                  <p className="text-primary/80 text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                  <div className="flex space-x-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 