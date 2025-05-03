'use client'

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BlueprintElement from '../ui/blueprint-element';

// Define project type
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  completionYear: number;
  location?: string;
  size?: string;
  architect?: string;
  features?: string[];
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Skyline Towers",
    category: "Residential",
    description: "A luxury residential complex featuring two towers connected by a sky bridge, with state-of-the-art amenities and sustainable design features that maximize natural light and energy efficiency.",
    imagePath: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
    completionYear: 2023,
    location: "Seattle, WA",
    size: "54,000 sq ft",
    architect: "Jennifer Lewis",
    features: [
      "LEED Platinum Certification",
      "Rooftop Gardens",
      "Smart Home Technology",
      "Floor-to-ceiling Windows"
    ]
  },
  {
    id: 2,
    title: "Harmony Business Park",
    category: "Commercial",
    description: "A modern office complex designed to foster collaboration and innovation in a green environment, featuring open workspaces and sustainable landscaping throughout the campus.",
    imagePath: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop",
    completionYear: 2022,
    location: "Austin, TX",
    size: "120,000 sq ft",
    architect: "Michael Chen",
    features: [
      "Flexible Co-working Spaces",
      "Rainwater Collection System",
      "Solar Panel Integration",
      "Wellness Center"
    ]
  },
  {
    id: 3,
    title: "Urban Oasis Condominiums",
    category: "Residential",
    description: "A mixed-use development with luxury condominiums, retail spaces, and integrated green areas designed to create a harmonious balance between urban living and natural elements.",
    imagePath: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1035&auto=format&fit=crop",
    completionYear: 2021,
    location: "Chicago, IL",
    size: "85,000 sq ft",
    architect: "Sarah Johnson",
    features: [
      "Green Roof System",
      "Private Terraces",
      "Energy-efficient Design",
      "Community Gardens"
    ]
  },
  {
    id: 4,
    title: "Nexus Shopping Center",
    category: "Commercial",
    description: "A revolutionary shopping experience with cutting-edge architecture and immersive retail spaces, designed to enhance customer engagement and create memorable shopping journeys.",
    imagePath: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1074&auto=format&fit=crop",
    completionYear: 2023,
    location: "Miami, FL",
    size: "110,000 sq ft",
    architect: "David Rodriguez",
    features: [
      "Interactive Digital Displays",
      "Natural Ventilation System",
      "Skylight Atriums",
      "Acoustic Design"
    ]
  },
  {
    id: 5,
    title: "Serenity Gardens",
    category: "Residential",
    description: "An eco-friendly housing development with extensive green spaces and community amenities, designed to promote sustainable living and community connection in harmony with nature.",
    imagePath: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop",
    completionYear: 2022,
    location: "Portland, OR",
    size: "42,000 sq ft",
    architect: "Jennifer Lewis",
    features: [
      "Passive House Standards",
      "Community Pavilion",
      "Native Landscaping",
      "Geothermal Heating"
    ]
  },
  {
    id: 6,
    title: "Innovation Hub",
    category: "Institutional",
    description: "A tech-focused research facility featuring smart building technology and flexible work spaces, designed to encourage cross-disciplinary collaboration and innovation.",
    imagePath: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1073&auto=format&fit=crop",
    completionYear: 2021,
    location: "Boston, MA",
    size: "78,000 sq ft",
    architect: "Michael Chen",
    features: [
      "Adaptive Reuse of Historic Building",
      "Interactive Learning Spaces",
      "Advanced Acoustics",
      "Sustainable Materials"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Improve scroll animations for better section transitions
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, 50]);
  
  // Add a staggered animation for the project cards
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section 
      id="projects"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Architectural grid background */}
      <div className="absolute inset-0 grid-background opacity-5"></div>
      
      {/* Gradient transition */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      {/* Blueprint decorative elements */}
      <BlueprintElement 
        type="elevation" 
        position="top-left" 
        size="md" 
        opacity={0.1}
        rotate={12}
      />
      
      <BlueprintElement 
        type="compass" 
        position="bottom-right" 
        size="lg" 
        opacity={0.15}
        rotate={-8}
        delay={0.3}
      />
      
      <BlueprintElement 
        type="details" 
        position="center" 
        size="sm" 
        opacity={0.08}
        rotate={-5}
        delay={0.6}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex justify-center mb-4">
              <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/30 backdrop-blur-sm">
                OUR PORTFOLIO
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-shadow-sm">
              Architectural Projects
            </h2>
            
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Discover our architectural masterpieces that blend innovative design, sustainable practices, and structural excellence.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          layout
        >
          <AnimatePresence mode="wait">
            {projects.map(project => (
              <motion.div
                key={project.id}
                layoutId={`project-card-${project.id}`}
                variants={itemAnimation}
                className="rounded-xl overflow-hidden shadow-lg bg-background/80 backdrop-blur-sm border border-border/20 cursor-pointer group"
                onClick={() => handleProjectClick(project)}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative">
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <Image
                      src={project.imagePath}
                      alt={project.title}
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      fill
                      unoptimized
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-primary/90 text-primary-foreground hover:bg-primary/100">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-xl font-semibold font-playfair">{project.title}</h3>
                    <Badge variant="outline" className="text-xs font-normal">
                      {project.completionYear}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{project.location}</span>
                    <motion.span 
                      className="text-primary inline-flex items-center text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-4xl">
            {selectedProject && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.imagePath}
                    alt={selectedProject.title}
                    className="object-cover"
                    fill
                    unoptimized
                  />
                </div>
                <div>
                  <DialogHeader>
                    <div className="flex items-center justify-between mb-2">
                      <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                      <Badge>
                        {selectedProject.category}
                      </Badge>
                    </div>
                    <DialogDescription className="text-base text-foreground/90">
                      {selectedProject.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <line x1="3" x2="21" y1="9" y2="9"/>
                        <line x1="9" x2="9" y1="21" y2="9"/>
                      </svg>
                      <span className="text-foreground/70 text-sm">Location: <span className="text-foreground">{selectedProject.location}</span></span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.29 7 12 12 20.71 7"/>
                        <line x1="12" x2="12" y1="22" y2="12"/>
                      </svg>
                      <span className="text-foreground/70 text-sm">Size: <span className="text-foreground">{selectedProject.size}</span></span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span className="text-foreground/70 text-sm">Completion: <span className="text-foreground">{selectedProject.completionYear}</span></span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <span className="text-foreground/70 text-sm">Architect: <span className="text-foreground">{selectedProject.architect}</span></span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedProject.features?.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <polyline points="9 11 12 14 22 4"/>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                          </svg>
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default Projects; 