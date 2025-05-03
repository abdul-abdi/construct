'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlueprintElement from '../ui/blueprint-element';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
      
      // Reset form state after showing success message
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const formVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    },
  };

  return (
    <section 
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Blueprint background and elements */}
      <div className="absolute inset-0 building-blueprint opacity-5"></div>
      
      <BlueprintElement 
        type="stamp" 
        position="top-right" 
        size="lg" 
        opacity={0.1}
        rotate={5}
      />
      
      <BlueprintElement 
        type="building" 
        position="bottom-left" 
        size="xl" 
        opacity={0.08}
        rotate={-5}
        delay={0.4}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex justify-center mb-4">
              <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/30 backdrop-blur-sm">
                CONTACT US
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-shadow-sm">
              Let&apos;s Draft Your Blueprint
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Ready to transform your architectural vision into reality? Connect with our expert architects and engineers to begin crafting your next landmark structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="bg-background/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-primary/5 rounded-full"></div>
                
                <h3 className="text-xl font-semibold mb-6 text-shadow-sm">Architectural Studio</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Design Studio</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        1234 Architect Avenue<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Project Inquiry</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Design Consultations</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        architects@constructco.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path>
                        <path d="M8 12a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Studio Hours</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        Monday - Friday: 9AM - 5PM<br />
                        Saturday: 10AM - 2PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 relative z-10">
                  <h4 className="text-sm font-medium mb-4">Connect With Our Architects</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form - use architecture/blueprint themed labels */}
            <motion.div 
              className="lg:col-span-3 relative"
              variants={formVariants}
            >
              <div className="bg-background/70 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-shadow-sm">Project Inquiry</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-1 transition-colors ${activeField === 'name' ? 'text-primary' : 'text-foreground/80'}`}
                      >
                        Client Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2 bg-background border border-primary/20 focus:border-primary/60 rounded-md focus:outline-none transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium mb-1 transition-colors ${activeField === 'email' ? 'text-primary' : 'text-foreground/80'}`}
                      >
                        Contact Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2 bg-background border border-primary/20 focus:border-primary/60 rounded-md focus:outline-none transition-colors"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label 
                        htmlFor="phone" 
                        className={`block text-sm font-medium mb-1 transition-colors ${activeField === 'phone' ? 'text-primary' : 'text-foreground/80'}`}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2 bg-background border border-primary/20 focus:border-primary/60 rounded-md focus:outline-none transition-colors"
                        placeholder="Your phone"
                      />
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="projectType" 
                        className={`block text-sm font-medium mb-1 transition-colors ${activeField === 'projectType' ? 'text-primary' : 'text-foreground/80'}`}
                      >
                        Architecture Project
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => handleFocus('projectType')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2 bg-background border border-primary/20 focus:border-primary/60 rounded-md focus:outline-none transition-colors appearance-none"
                        required
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="residential">Residential Architecture</option>
                        <option value="commercial">Commercial Development</option>
                        <option value="institutional">Institutional Design</option>
                        <option value="urban">Urban Planning</option>
                        <option value="renovation">Architectural Renovation</option>
                      </select>
                      <div className="absolute right-3 top-9 pointer-events-none text-foreground/60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium mb-1 transition-colors ${activeField === 'message' ? 'text-primary' : 'text-foreground/80'}`}
                    >
                      Project Vision
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-2 bg-background border border-primary/20 focus:border-primary/60 rounded-md focus:outline-none min-h-[120px] transition-colors"
                      placeholder="Describe your architectural project and requirements"
                      required
                    />
                  </div>
                  
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium relative overflow-hidden group w-full md:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState === 'submitting'}
                    >
                      <span className="relative z-10">
                        {formState === 'idle' && 'Schedule Design Consultation'}
                        {formState === 'submitting' && 'Sending...'}
                        {formState === 'success' && 'Message Sent!'}
                        {formState === 'error' && 'Error! Try Again'}
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-primary/80"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                    
                    {formState === 'success' && (
                      <motion.p 
                        className="text-green-500 mt-2 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Thank you for contacting our architectural studio! We&apos;ll review your project details and get back to you shortly.
                      </motion.p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 