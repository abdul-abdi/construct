'use client'

import React from 'react';
import { motion } from 'framer-motion';
import BlueprintElement from '../ui/blueprint-element';
import Image from 'next/image';

// Define interface for footer links
interface FooterLink {
  label: string;
  href: string;
  action?: () => void;
  download?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  // Handle smooth scrolling to sections
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks: FooterColumn[] = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { label: 'About Us', href: '#about', action: () => handleScrollTo('about') },
        { label: 'Our Services', href: '#services', action: () => handleScrollTo('services') },
        { label: 'Our Expertise', href: '#process', action: () => handleScrollTo('process') },
        { label: 'Our Clients', href: '#clients', action: () => handleScrollTo('clients') },
        { label: 'Contact', href: '#contact', action: () => handleScrollTo('contact') },
      ],
    },
    {
      title: 'Expertise',
      links: [
        { label: 'Residential Construction', href: '#process', action: () => handleScrollTo('process') },
        { label: 'Commercial Construction', href: '#process', action: () => handleScrollTo('process') },
        { label: 'Interior Design', href: '#process', action: () => handleScrollTo('process') },
        { label: 'MEP & Material Supply', href: '#process', action: () => handleScrollTo('process') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Silverpackgroupltd@gmail.com', href: 'mailto:Silverpackgroupltd@gmail.com' },
        { label: '+254745052001 / +254707017782', href: 'tel:+254745052001' },
        { label: 'Kilimani, Nairobi', href: '#contact', action: () => handleScrollTo('contact') },
        { label: 'Industrial Area, Nairobi', href: '#contact', action: () => handleScrollTo('contact') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Silverpack Profile PDF', href: '/documents/silverpack-profile.pdf', download: true },
        { label: 'Silverpack Group PDF', href: '/documents/silverpack-group.pdf', download: true },
        { label: 'Our Company', href: '/services' },
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t border-primary/10 relative overflow-hidden">
      {/* Blueprint elements */}
      <BlueprintElement 
        type="details" 
        position="bottom-right" 
        size="sm" 
        opacity={0.07}
        rotate={-5}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Logo Image */}
                <Image src="/silverpack.png" alt="Silverpack Group Logo" height={48} width={100} /> 
                {/* <div className="relative w-10 h-10 border border-primary/90 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10"></div>
                  <div className="w-6 h-6 bg-primary/90 flex items-center justify-center text-primary-foreground font-bold text-sm">S</div>
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary/90"></div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary/90"></div>
                </div> */}
                <span className="font-bold text-xl">Silverpack Group</span>
              </motion.div>
              <p className="text-foreground/70 mb-4 max-w-md">
                Building excellence through quality construction, innovative solutions, and reliable project delivery for residential and commercial properties.
              </p>
              <div className="flex space-x-4">
                {/* Social links with updated account names */}
                {[
                  { name: 'facebook', label: 'Silverpack group', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, href: "https://www.facebook.com/profile.php?id=61556957348741" },
                  { name: 'twitter', label: 'Silverpack_group', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>, href: "https://twitter.com/Silverpack_group" },
                  { name: 'instagram', label: 'Silverpack_group', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>, href: "https://www.instagram.com/silverpack_group/" }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/80 p-2 rounded-full border border-primary/20 text-primary/80 hover:text-primary/100 hover:border-primary/50 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4 text-shadow-sm">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-foreground/70 hover:text-primary transition-colors relative group"
                      onClick={(e) => {
                        if (link.action) {
                          e.preventDefault();
                          link.action();
                        }
                      }}
                      download={link.download || undefined}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/60 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="pt-8 mt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} SILVERPACK GROUP LTD. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/70">
            {/* Remove links that lead nowhere */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 