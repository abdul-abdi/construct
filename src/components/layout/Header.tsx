'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';

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
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

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
          href="#" 
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* Architectural Logo */}
          <div className="relative w-9 h-9 border border-primary/90 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10"></div>
            <div className="w-5 h-5 bg-primary/90 flex items-center justify-center text-primary-foreground font-bold text-sm">C</div>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/90"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/90"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-playfair font-semibold tracking-wide text-sm hidden sm:inline-block">CONSTRUCT</span>
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
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href.slice(1));
                }}
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
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />
        
          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-sm tracking-wider group relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ boxShadow: '0 0 15px rgba(28, 100, 242, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('contact');
            }}
          >
            <span className="relative z-10">GET A QUOTE</span>
            <motion.span
              className="absolute inset-0 bg-primary/80"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-foreground"
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

      {/* Mobile Menu */}
      <AnimatePresence mode="sync">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 border-b border-primary/20 backdrop-blur-sm"
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href.slice(1));
                  }}
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
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('contact');
                }}
              >
                GET A QUOTE
              </motion.a>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="flex justify-center mb-4">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 