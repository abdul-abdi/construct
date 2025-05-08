'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlueprintElement from '../ui/blueprint-element';
import Image from 'next/image';

// Team member type
interface TeamMember {
  id: number;
  name: string;
  role: string;
  count?: number;
  icon: React.ReactNode;
}

// Company stat type
interface CompanyStat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

// Construction team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abdishakur Shariff",
    role: "Office Administrator",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
        <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
        <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M12 12h4"></path>
        <path d="M12 16h4"></path>
        <path d="M8 12h.01"></path>
        <path d="M8 16h.01"></path>
      </svg>
    )
  },
  {
    id: 3,
    name: "Abdullahi Somane",
    role: "Procurement Officer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <path d="M6 11h4"></path>
        <path d="M6 15h4"></path>
        <path d="M14 15h4"></path>
        <path d="M14 11h4"></path>
      </svg>
    )
  },
  {
    id: 4,
    name: "Amir Githinji",
    role: "Accountant",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
        <path d="M8 7h8"></path>
        <path d="M8 11h8"></path>
        <path d="M8 15h4"></path>
      </svg>
    )
  },
  {
    id: 2,
    name: "Engineering Staff",
    role: "Skilled Technicians",
    count: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2v17Z"></path>
        <path d="M12 10v7"></path>
        <path d="m9 13 3-3 3 3"></path>
        <path d="M14 2v6h6"></path>
        <path d="M22 19H2"></path>
      </svg>
    )
  }
];

// Company stats data
const companyStats: CompanyStat[] = [
  {
    id: 1,
    value: "80+",
    label: "Projects Completed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2z"></path>
        <path d="M14 2v6h6"></path>
      </svg>
    )
  },
  {
    id: 2,
    value: "Since 2019",
    label: "Years of Excellence",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    id: 3,
    value: "Client Focused",
    label: "Our Approach",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
         <circle cx="9" cy="7" r="4"></circle>
         <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 4,
    value: "Quality & Innovation",
    label: "Our Commitment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21L8 17l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12l-4-4-4 4Z"></path>
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
      <div className="absolute inset-0 building-blueprint opacity-10"></div>
      
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
              WHO WE ARE
            </div>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Silverpack Group
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Excellence in construction, urban development, and property management since 2019.
          </motion.p>
        </div>

        {/* Company story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 border-2 border-primary/30 bg-primary/5 rounded-xl overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-[1px]"></div>
                
                {/* Blueprint grid */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                    <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(var(--blueprint-line-color), 0.3)" strokeWidth="0.5" />
                    </pattern>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect width="40" height="40" fill="url(#smallGrid)" />
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(var(--blueprint-line-color), 0.5)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Construction building element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/silverpack.png"
                  alt="Silverpack Group Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="w-3/4 h-auto"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-shadow-sm relative inline-flex">
              Our Story & Commitment
              <motion.span 
                className="absolute -bottom-1 left-0 h-[1px] bg-primary/80"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h3>
            <p className="text-foreground/80 mb-6">
              Silverpack Group has consistently demonstrated excellence in the fields of construction, urban development, and property management since 2019, establishing itself as a leader in delivering high-quality, innovative solutions. With a steadfast commitment to precision and sustainability, the company has earned a reputation for its unparalleled expertise and dedication to every project.
            </p>
            <p className="text-foreground/80 mb-6">
              SPG has earned a reputation for reliability and excellence. Our commitment to client satisfaction, coupled with our focus on innovation and sustainability, ensures that we remain at the forefront of the construction industry in Kenya and beyond.
            </p>
            <div className="flex space-x-4">
              <motion.div 
                className="bg-primary/10 px-4 py-2 rounded-md text-primary flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Trusted Quality
              </motion.div>
              <motion.div 
                className="bg-primary/10 px-4 py-2 rounded-md text-primary flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Reliable Service
              </motion.div>
            </div>
          </motion.div>
        </div>

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
              Our Construction Team
              <motion.span 
                className="absolute -bottom-1 left-0 h-[1px] bg-primary/80"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Meet the experienced professionals who make our construction projects successful — a skilled team dedicated to delivering exceptional quality and service.
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
                className="bg-background/70 backdrop-blur-sm border border-primary/10 rounded-xl p-8 shadow-lg group flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-primary/80 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                  {member.icon}
                </div>
                
                <h4 className="text-xl font-bold mb-2 text-shadow-sm relative z-10">{member.name}</h4>
                <p className="text-primary/80 mb-3 relative z-10">{member.role}</p>
                
                {member.count && (
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-primary text-sm relative z-10">
                    Total Staff: {member.count}
                  </div>
                )}
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 