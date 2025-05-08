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

    const { name, email, phone, projectType, message } = formData;
    const recipientEmail = 'Silverpackgroupltd@gmail.com';
    const subject = `New Project Inquiry from ${name || 'Website Contact Form'}`;
    const emailBody = `Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}
Message:
${message}
    `;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody.trim())}`;
    window.location.href = mailtoLink;

    // Set success state and reset after a delay
    // Consider if form data should be cleared or preserved after mailto redirect
    setTimeout(() => {
      setFormState('success');
      // Reset form state after showing success message
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 500); // Short delay to allow mailto link to potentially open
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
              Let&apos;s Build Your Vision
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Ready to transform your construction vision into reality? Connect with our expert team to begin your next project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="bg-background/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-primary/5 rounded-full"></div>
                
                <h3 className="text-xl font-semibold mb-6 text-shadow-sm">Silverpack Group</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Headquarters</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        Zarafa suites, 1st floor<br />
                        Kilimani, Nairobi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Factory</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        Street 24<br />
                        Landmawe, Nairobi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Garage</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        Gadano garage 2, Road A<br />
                        Industrial Area, Nairobi
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
                      <h4 className="font-medium">Phone</h4>
                      <div className="text-foreground/70 text-sm mt-1 space-y-1">
                        <p><a href="https://wa.me/254745052001" target="_blank" rel="noopener noreferrer" className="hover:text-primary">+254 745 052 001</a> (WhatsApp)</p>
                        <p><a href="tel:+254707017782" className="hover:text-primary">+254 707 017 782</a></p>
                        <p><a href="tel:+254712126452" className="hover:text-primary">+254 712 126 452</a></p>
                        <p><a href="tel:+254741260206" className="hover:text-primary">+254 741 260 206</a></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        <a href="mailto:Silverpackgroupltd@gmail.com" className="hover:text-primary">
                          Silverpackgroupltd@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 relative z-10">
                  <h4 className="text-sm font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://www.facebook.com/profile.php?id=61556957348741" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://www.instagram.com/silverpack_group/" 
                      target="_blank"
                      rel="noopener noreferrer"
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
                      href="https://wa.me/254745052001" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 16.44c-1.44 0-2.85-.31-4.12-.91L5 18.65l1.17-2.9c-.76-1.36-1.17-2.92-1.17-4.52 0-4.36 3.54-7.91 7.91-7.91s7.91 3.54 7.91 7.91-3.54 7.91-7.91 7.91zm0-12.62c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75-2.13-4.75-4.75-4.75zm3.24 6.29c-.12.43-.73.79-1.05.82-.29.03-.68.06-1.98-.45-1.71-.69-2.83-2.46-2.93-2.61-.1-.15-.87-1.17-.87-2.22s.54-1.56.74-1.77c.2-.21.43-.26.58-.26s.24-.03.35-.03.28-.06.43.28c.15.34.51 1.24.56 1.34s.07.18 0 .28c-.07.1-.15.18-.3.31-.15.12-.29.23-.4.34-.12.1-.2.18-.09.34.12.15.54.73 1.18 1.29.81.73 1.49 1.01 1.7 1.09.21.07.34.06.46-.04.15-.12.62-.73.79-.97.17-.24.33-.18.55-.1.2.09.97.84 1.12 1 .15.15.26.23.29.37z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://www.youtube.com/@Silverpackgroup" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* YouTube Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.58 7.19A2.49 2.49 0 0 0 19.82 5.4C18.24 5 12 5 12 5s-6.24 0-7.82.4A2.49 2.49 0 0 0 2.42 7.19C2 8.76 2 12 2 12s0 3.24.42 4.81a2.49 2.49 0 0 0 1.76 1.79c1.58.4 7.82.4 7.82.4s6.24 0 7.82-.4a2.49 2.49 0 0 0 1.76-1.79c.42-1.57.42-4.81.42-4.81s0-3.24-.42-4.81z"></path>
                        <polygon points="10 15.54 15 12 10 8.46"></polygon>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://www.tiktok.com/@Silverpack_group" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* TikTok Icon (Inline SVG) */}
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
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
                        Construction Project
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
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="interior">Interior Design</option>
                        <option value="renovation">Renovations & Retrofits</option>
                        <option value="mep">MEP Services</option>
                        <option value="materials">Construction Materials</option>
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
                      placeholder="Describe your construction project and requirements"
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
                        {formState === 'idle' && 'Request Consultation'}
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
                        Thank you for contacting Silverpack Group! We&apos;ll review your project details and get back to you shortly.
                      </motion.p>
                    )}
                  </div>
                </form>
              </div>
              
              {/* Document Downloads */}
              <div className="mt-8 bg-background/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Company Documents</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Download detailed information about our company, services, and projects:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="/documents/silverpack-profile.pdf" 
                    download
                    className="flex items-center p-4 bg-primary/10 hover:bg-primary/15 border border-primary/20 rounded-lg transition-colors group"
                  >
                    <div className="mr-3 bg-primary/20 p-2 rounded-md text-primary group-hover:bg-primary/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Silverpack Profile</h4>
                      <p className="text-xs text-foreground/70">Detailed information about Silverpack Group</p>
                    </div>
                  </a>
                  
                  <a 
                    href="/documents/silverpack-group.pdf" 
                    download
                    className="flex items-center p-4 bg-primary/10 hover:bg-primary/15 border border-primary/20 rounded-lg transition-colors group"
                  >
                    <div className="mr-3 bg-primary/20 p-2 rounded-md text-primary group-hover:bg-primary/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Silverpack Group</h4>
                      <p className="text-xs text-foreground/70">Services and capabilities overview</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 