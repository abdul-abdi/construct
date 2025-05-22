'use client'

import { useState, useEffect } from 'react';
import Hero from '@/components/layout/Hero';
import MobileHero from '@/components/layout/MobileHero';
import ConstructionProcess from '@/components/layout/ConstructionProcess';
import Services from '@/components/layout/Services';
import ClientsCarousel from '@/components/layout/ClientsCarousel';
import About from '@/components/layout/About';
import Contact from '@/components/layout/Contact';
import ConstructionPhasesGallery from '@/components/layout/ConstructionPhasesGallery';
import Script from 'next/script';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check screen size on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard md breakpoint in Tailwind
    };
    
    // Set initial state
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Silver Pack Group',
            'image': 'https://www.silverpackgroup.com/silverpack.png',
            'url': 'https://www.silverpackgroup.com',
            'telephone': '+254-XXX-XXX-XXX',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '123 Construction Ave',
              'addressLocality': 'Nairobi',
              'addressRegion': 'Nairobi',
              'postalCode': '00100',
              'addressCountry': 'Kenya'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '-1.292066',
              'longitude': '36.821945'
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              'opens': '09:00',
              'closes': '17:00'
            },
            'sameAs': [
              'https://www.facebook.com/silverpackgroup',
              'https://www.instagram.com/silverpackgroup',
              'https://www.linkedin.com/company/silverpack-group'
            ],
            'priceRange': '$$-$$$',
            'description': 'Silver Pack Group delivers exceptional construction, urban development, and property management services across Kenya with a focus on quality and innovation.',
            'areaServed': 'Kenya',
            'serviceArea': {
              '@type': 'GeoCircle',
              'geoMidpoint': {
                '@type': 'GeoCoordinates',
                'latitude': '-1.292066',
                'longitude': '36.821945'
              },
              'geoRadius': '100'
            }
          })
        }}
      />
      
      <main className="flex min-h-screen flex-col">
        {isMobile ? <MobileHero /> : <Hero />}
        <ConstructionProcess />
        <Services />
        <ConstructionPhasesGallery />
        <ClientsCarousel />
        <About />
        <Contact />
      </main>
    </>
  );
}
