'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#process', label: 'Expertise' },
    { href: '#services', label: 'Services' },
    { href: '/services', label: 'Company', isPage: true },
    { href: '#clients', label: 'Clients' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleScrollTo = (id: string) => {
    console.log(`Attempting to scroll to #${id}`);
    
    // Try different selector approaches to find the element
    let targetElement = null;
    
    // Try direct ID first
    const idElement = document.getElementById(id);
    if (idElement) {
      targetElement = idElement;
      console.log(`Found element with id "${id}"`);
    }
    
    // If not found by ID, try section with matching ID or data attribute
    if (!targetElement) {
      const sectionByAttr = document.querySelector(`section[id="${id}"]`) || 
                          document.querySelector(`section[data-section="${id}"]`);
      if (sectionByAttr) {
        targetElement = sectionByAttr;
        console.log(`Found section with attribute for "${id}"`);
      }
    }
    
    // Last resort: try to find any element with a class or attribute containing the ID
    if (!targetElement) {
      const sections = document.querySelectorAll('section');
      console.log(`Looking through ${sections.length} sections for "${id}"`);
      
      for (const section of sections) {
        // Debug output to see what we're checking
        const sectionId = section.id;
        const sectionClasses = section.className;
        console.log(`Checking section: id=${sectionId}, classes=${sectionClasses}`);
        
        if (
          (sectionId && sectionId.toLowerCase() === id.toLowerCase()) ||
          (sectionClasses && sectionClasses.toLowerCase().includes(id.toLowerCase()))
        ) {
          targetElement = section;
          console.log(`Found section with matching class/id for "${id}"`);
          break;
        }
      }
    }
    
    if (targetElement) {
      console.log(`Scrolling to element for #${id}`);
      setIsMobileMenuOpen(false);
      
      // Use a small delay to ensure the mobile menu has time to close
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      console.warn(`Could not find element for "${id}" - available sections:`, 
        Array.from(document.querySelectorAll('section'))
          .map(s => `${s.id || 'no-id'} (${s.className.split(' ')[0] || 'no-class'})`)
          .join(', ')
      );
    }
  };

  // Function to handle both page navigation and anchor navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string, label: string, isPage?: boolean }) => {
    console.log(`Navigation clicked: ${link.href} (${link.isPage ? 'page' : 'anchor'})`);
    
    if (link.isPage) {
      // For page navigation, just close the menu and let default behavior proceed
      setIsMobileMenuOpen(false);
      return;
    }
    
    // For anchor navigation within the page
    e.preventDefault();
    const id = link.href.startsWith('#') ? link.href.slice(1) : link.href;
    handleScrollTo(id);
  };

  // Add useEffect to close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const menuButton = document.querySelector('.menu-button');
      
      if (
        isMobileMenuOpen && 
        mobileMenu && 
        menuButton && 
        !mobileMenu.contains(target) && 
        !menuButton.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-primary/20 bg-background/95 supports-[backdrop-filter]:bg-background/80 shadow-sm' 
          : 'bg-background/5'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.a 
          href="/" 
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Image */}
          <Image src="/silverpack.png" alt="Silverpack Group Logo" width={200} height={75} className="h-10 w-auto" />
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-playfair font-semibold tracking-wide text-sm hidden sm:inline-block"
            >
              SILVERPACK GROUP
            </motion.span>
          </div>
        </motion.a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-8 text-sm">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground text-foreground/70 relative tracking-wide group py-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={(e) => handleNavigation(e, link)}
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Right side with CTA and Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* CTA Button - Desktop only */}
          <motion.a
            href="#contact"
            className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-sm tracking-wider group relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ boxShadow: '0 0 15px rgba(28, 100, 242, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => handleNavigation(e, { href: "#contact", label: "Contact" })}
          >
            <span className="relative z-10">GET A QUOTE</span>
            <motion.span
              className="absolute inset-0 bg-primary/80"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Theme Toggle - Always visible */}
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-foreground menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="flex flex-col justify-center items-center w-6 h-6"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 },
                }}
                className="w-6 h-px bg-primary mb-1.5 block"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-px bg-primary mb-1.5 block"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 },
                }}
                className="w-6 h-px bg-primary block"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="sync">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 border-b border-primary/20 backdrop-blur-sm mobile-menu-container"
          >
            <nav className="container pt-6 pb-0 flex flex-col space-y-5 px-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 pt-2 pb-1 hover:text-foreground transition-colors border-b border-primary/10 font-playfair"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={(e) => handleNavigation(e, link)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm tracking-wider mt-1 mb-2 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => handleNavigation(e, { href: "#contact", label: "Contact" })}
              >
                GET A QUOTE
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 