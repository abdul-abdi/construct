'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import BlueprintElement from '../ui/blueprint-element';

// Structure data about buildings with construction phases in order
const constructionProjects = [
  {
    id: 'design',
    phase: 'Design Phase',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000',
    alt: 'Architectural design blueprints and models for development in design phase - Silver Pack Group',
    description: 'Initial architectural planning and design visualization'
  },
  {
    id: 'foundation',
    phase: 'Foundation Phase',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000',
    alt: 'Foundation work at construction site showing concrete pouring - Silver Pack Group project',
    description: 'Groundwork and foundation construction'
  },
  {
    id: 'framework',
    phase: 'Framework Phase',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000',
    alt: 'Steel framework and structural elements during construction - Silver Pack Group project',
    description: 'Structural framework and primary construction'
  },
  {
    id: 'structural',
    phase: 'Structural Phase',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000',
    alt: 'Structural phase showing concrete walls and floor plates - Silver Pack Group',
    description: 'Major structural elements and exterior construction'
  },
  {
    id: 'finishing',
    phase: 'Finishing Phase',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1000',
    alt: 'Interior finishing work in progress with drywall and painting - Silver Pack Group',
    description: 'Interior and exterior finishing work'
  },
  {
    id: 'completion',
    phase: 'Completion Phase',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000',
    alt: 'Newly completed luxury residential project ready for occupancy - Silver Pack Group',
    description: 'Final touches and client handover'
  }
];

export default function ConstructionPhasesGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  // Line connector styling
  const lineStyle = "absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -z-10";
  
  return (
    <section 
      ref={ref}
      id="construction-phases" 
      className="py-20 lg:py-32 relative overflow-hidden bg-muted/30"
      aria-labelledby="construction-phases-heading"
    >
      {/* Blueprint background */}
      <div className="absolute inset-0 building-blueprint opacity-5"></div>
      
      {/* Blueprint decorative elements */}
      <BlueprintElement 
        type="building" 
        position="top-left" 
        size="lg" 
        opacity={0.1}
        rotate={5}
      />
      
      <BlueprintElement 
        type="floor" 
        position="bottom-right" 
        size="xl" 
        opacity={0.08}
        rotate={-5}
        delay={0.2}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/30 backdrop-blur-sm">
              CONSTRUCTION JOURNEY
            </div>
          </div>
          <motion.h2 
            id="construction-phases-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            From Design to Completion
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our property development process across all construction phases.
            Each stage showcases our commitment to quality in Nairobi&apos;s premier neighborhoods.
          </motion.p>
        </div>

        {/* Horizontal scrolling phases gallery */}
        <div className="relative mt-20 mb-12">
          {/* Timeline connector line */}
          <div className={lineStyle}></div>
          
          {/* Scrollable container */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-4 min-w-max px-4">
              {constructionProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Phase marker */}
                  <div className="relative mb-8 z-10">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-72 sm:w-80 bg-background/70 backdrop-blur-sm border border-primary/10 rounded-lg overflow-hidden shadow-lg group">
                    {/* Phase label */}
                    <div className="bg-primary/10 py-2 text-center">
                      <h4 className="font-medium text-primary text-sm tracking-wide uppercase">
                        {project.phase}
                      </h4>
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-48 w-full">
                      <Image 
                        src={project.image}
                        alt={project.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 30vw"
                        priority={index < 2}
                        unoptimized={true}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <p className="text-white text-sm max-w-[80%] text-center">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-full bg-gradient-to-r from-muted/30 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none"></div>
        </div>

        {/* Legend and description */}
        <motion.div
          className="mt-8 max-w-3xl mx-auto bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-3 text-shadow-sm">Our Construction Process</h3>
          <p className="text-foreground/80 mb-4">
            Silver Pack Group follows a meticulous development process, ensuring each phase is executed with precision and attention to detail. Our projects in Kileleshwa, Kilimani, and Lavington showcase our commitment to quality and luxury.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {constructionProjects.map((project, index) => (
              <li key={`legend-${project.id}`} className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold mr-2">
                  {index + 1}
                </span>
                <span className="text-sm">{project.phase}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a 
            href="https://spg.co.ke/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Visit Silver Pack Group Estates website"
          >
            Explore Silver Pack Group Estates
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

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": constructionProjects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "RealEstateListing",
                "name": project.phase,
                "description": `${project.phase} by Silver Pack Group`,
                "image": project.image,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "KES",
                  "areaServed": {
                    "@type": "City",
                    "name": "Nairobi",
                    "containedIn": {
                      "@type": "Country",
                      "name": "Kenya"
                    }
                  }
                },
                "location": {
                  "@type": "Place",
                  "name": "Nairobi",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nairobi",
                    "addressRegion": "Nairobi",
                    "addressCountry": "Kenya"
                  }
                }
              }
            }))
          })
        }}
      />
      
      {/* Additional structured data about the organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Silver Pack Group",
            "url": "https://spg.co.ke/",
            "logo": "https://www.silverpackgroup.com/silverpack.png",
            "description": "Silver Pack Group specializes in premium real estate, offering luxurious apartments in prime locations across Nairobi, Kenya.",
            "areaServed": {
              "@type": "City",
              "name": "Nairobi"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "Kenya"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Luxury Real Estate Development"
              }
            }
          })
        }}
      />
    </section>
  );
} 