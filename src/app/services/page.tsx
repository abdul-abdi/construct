'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlueprintElement from '@/components/ui/blueprint-element';
import Link from 'next/link';

// Service type
interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

// Policy type
interface Policy {
  id: number;
  title: string;
  content: string[];
}

// Machine type
interface Machine {
  id: number;
  name: string;
  status: string;
}

// Labour position type
interface LabourPosition {
  id: number;
  title: string;
  count: number;
}

// Our services/capabilities
const services: Service[] = [
  {
    id: 1,
    title: "Residential Construction",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    description: "We build high-quality residential properties, from single-family homes to multi-unit developments, with attention to detail and excellent craftsmanship."
  },
  {
    id: 2,
    title: "Commercial Construction",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <path d="M9 22v-4h6v4"></path>
        <path d="M8 6h.01"></path>
        <path d="M16 6h.01"></path>
        <path d="M12 6h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M8 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M12 14h.01"></path>
      </svg>
    ),
    description: "We deliver offices, retail spaces, and industrial buildings, focusing on functionality, durability, and creating spaces that enhance business operations."
  },
  {
    id: 3,
    title: "Interior Design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M9 22V12h6v10"></path>
      </svg>
    ),
    description: "Our company offers services including residential and commercial design, space planning, furniture selection, renovations, project management, and sustainable design."
  },
  {
    id: 4,
    title: "Renovations and Retrofits",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2v17Z"></path>
        <path d="M14 2v6h6"></path>
      </svg>
    ),
    description: "We transform existing structures through expert renovations and retrofits, modernizing spaces while preserving their character and improving functionality."
  },
  {
    id: 5,
    title: "Mechanical, Electrical and Plumbing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    description: "We provide comprehensive MEP services, including HVAC systems, electrical installations, and plumbing solutions that ensure efficiency, compliance, and sustainability."
  },
  {
    id: 6,
    title: "Supply of Construction Materials",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    description: "We supply high-quality construction materials for all types of projects, including cement, steel, timber, plumbing, electrical components, and more with timely delivery and competitive pricing."
  },
  {
    id: 7,
    title: "Project Management and Consultancy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    description: "Our services involve planning, coordination, risk management, quality control, cost management, contract administration, and progress monitoring to ensure successful project completion."
  }
];

// Customer segments
const customerSegments = [
  {
    id: 1,
    title: "Private Developers",
    description: "Offering tailored solutions for residential, commercial, and mixed-use developments, ensuring that private projects meet the needs of end-users while adhering to the highest construction standards."
  },
  {
    id: 2,
    title: "Home Owners and Individuals",
    description: "Providing personalized construction services for private homes, renovations, and custom design builds."
  },
  {
    id: 3,
    title: "Corporate Organizations",
    description: "Delivering large-scale operational facilities while ensuring top-quality construction and timely delivery."
  },
  {
    id: 4,
    title: "Non-Governmental Organizations (NGOs)",
    description: "Working on socially impactful projects such as schools, community centers, and healthcare facilities in remote and underserved regions."
  }
];

// Company goals
const companyGoals = [
  {
    id: 1,
    title: "Quality",
    description: "Delivering projects to the highest standards of excellence."
  },
  {
    id: 2,
    title: "Customer Focus",
    description: "Understanding and prioritizing the needs of our clients in every aspect of the business."
  },
  {
    id: 3,
    title: "Sustainability",
    description: "Emphasizing eco-friendly building practices and materials to reduce environmental impact."
  },
  {
    id: 4,
    title: "Innovation",
    description: "Continuously adopting new technologies and methods to improve efficiency and quality."
  }
];

// Company policies
const companyPolicies: Policy[] = [
  {
    id: 1,
    title: "Quality Policy",
    content: [
      "Commitment to Excellence: Providing superior construction solutions with a focus on performance, safety, and sustainability.",
      "Client Satisfaction: Meeting and exceeding client expectations through timely delivery, cost-effective solutions, and high-quality work.",
      "Continuous Improvement: Constantly evaluating and improving our processes, technologies, and skills to maintain our competitive edge.",
      "We continuously strive to ensure that all our projects meet or exceed both local and international quality standards."
    ]
  },
  {
    id: 2,
    title: "Occupational Health and Safety Policy",
    content: [
      "Risk Management: Identifying hazards and implementing preventive measures on all our construction sites.",
      "Employee Training: Providing ongoing safety training to our workforce to ensure safe working practices.",
      "Compliance: Adhering to all Kenyan health and safety regulations, as well as international standards.",
      "Workplace Safety: Creating a safety-first culture across all our projects to protect the well-being of our employees, clients, and stakeholders."
    ]
  },
  {
    id: 3,
    title: "Environmental Policy",
    content: [
      "Sustainable Practices: Promoting the use of sustainable building materials and technologies to reduce our ecological footprint.",
      "Waste Management: Implementing strategies to minimize, reuse, and recycle construction waste.",
      "Energy Efficiency: Ensuring our buildings and projects are designed and constructed with energy efficiency in mind.",
      "Compliance with Environmental Regulations: Adhering to all environmental laws and regulations governing the construction industry."
    ]
  }
];

// Labour positions
const labourPositions: LabourPosition[] = [
  { id: 1, title: "Project Engineer", count: 1 },
  { id: 2, title: "Electrical Supervisor", count: 1 },
  { id: 3, title: "Civil Engineer", count: 1 },
  { id: 4, title: "Site Supervisor", count: 1 },
  { id: 5, title: "Health and Safety Officer", count: 1 },
  { id: 6, title: "Quality Assurance", count: 1 },
  { id: 7, title: "Quantity Surveyor", count: 1 }
];

// Plant and machinery
const plantAndMachinery: Machine[] = [
  { id: 1, name: "Wheel Excavator", status: "EQUIPPED" },
  { id: 2, name: "Truck Loaders", status: "EQUIPPED" },
  { id: 3, name: "Concrete Mixer", status: "EQUIPPED" },
  { id: 4, name: "Concrete Hoist", status: "EQUIPPED" },
  { id: 5, name: "Power Trowel", status: "EQUIPPED" },
  { id: 6, name: "Ride-on Rollers", status: "EQUIPPED" },
  { id: 7, name: "Rammer", status: "EQUIPPED" }
];

const ServicesPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden bg-muted/30"
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
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block py-1 px-4 border-t border-b border-primary/50 text-sm md:text-base text-primary/90 tracking-[0.2em] bg-background/30 backdrop-blur-sm">
              OUR COMPANY
            </div>
          </div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Comprehensive Construction Services
          </motion.h1>
          <motion.p 
            className="text-foreground/80 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Excellence in construction, urban development, and property management since 2019.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-background/70 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary relative inline-flex pb-2">
              Our Mission
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary/80"></span>
            </h2>
            <p className="text-foreground/80 mb-4">
              Our mission is to consistently provide exceptional construction services that exceed client expectations through innovation, technical excellence, and unmatched professionalism. We aim to build lasting relationships with our clients by delivering projects that meet the highest standards of quality, safety, and environmental sustainability.
            </p>
            <p className="text-foreground/80 mb-4">We are committed to:</p>
            <ul className="space-y-2 text-foreground/80 mb-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Delivering projects on time and within budget.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Adopting the latest technologies to improve project delivery.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Ensuring the health, safety, and well-being of our workforce.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Upholding the values of transparency, integrity, and accountability in every project.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-background/70 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary relative inline-flex pb-2">
              Our Vision
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary/80"></span>
            </h2>
            <p className="text-foreground/80 mb-4">
              To be the leader in construction innovation and sustainability, transforming Kenya and the region into a hub of modern, high-quality infrastructure, housing, and urban development that positively impacts communities and drives economic progress.
            </p>
            <p className="text-foreground/80">
              We aim to become the most trusted construction company in Kenya, known for our dedication to quality, our commitment to client satisfaction, and our relentless pursuit of excellence in all our projects.
            </p>
          </motion.div>
        </div>

        {/* Our Capabilities/Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shadow-sm">Our Capabilities</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              We offer a comprehensive range of construction services, leveraging our expertise across various aspects of the industry to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{`0${service.id}. ${service.title}`}</h3>
                </div>
                <p className="text-foreground/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Customers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shadow-sm">Our Customers</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              We serve diverse clients across different sectors, tailoring our approach to meet the unique needs of each customer segment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerSegments.map((segment, index) => (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{segment.title}</h3>
                <p className="text-foreground/80">{segment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Goals */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shadow-sm">Our Goals</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Our strategic objectives guide our operations and drive our commitment to excellence in the construction industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyGoals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 shadow-lg relative overflow-hidden"
              >
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary/5"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-2 text-primary">{`GOAL ${String(goal.id).padStart(2, '0')}`}</div>
                  <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                  <p className="text-foreground/80">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Policies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shadow-sm">Understanding Our Company Policies</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Our policies reflect our commitment to quality, safety, and environmental responsibility in all our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companyPolicies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background/70 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b border-primary/30 text-primary">{`0${policy.id}. ${policy.title}`}</h3>
                  <ul className="space-y-3">
                    {policy.content.map((item, idx) => (
                      <li key={idx} className="flex items-start text-foreground/80">
                        <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organization & Labour */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Labour Histogram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-background/70 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary relative inline-flex pb-2">
              Labour Histogram
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary/80"></span>
            </h2>
            
            <div className="space-y-4">
              {labourPositions.map((position) => (
                <div key={position.id} className="flex justify-between items-center border-b border-primary/10 pb-3">
                  <div className="flex items-center">
                    <div className="bg-primary/10 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-primary font-bold">
                      {position.id}
                    </div>
                    <span className="font-medium">{position.title}</span>
                  </div>
                  <div className="text-primary font-bold">{position.count}</div>
                </div>
              ))}
              
              <div className="mt-8 pt-4 border-t border-primary/30">
                <div className="text-xl font-bold mb-2">Total Staff Summary</div>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Total Office Staff:</span>
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Permanent Company Staff:</span>
                    <span className="font-bold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Plant and Machinery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-background/70 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary relative inline-flex pb-2">
              Plant and Machinery
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary/80"></span>
            </h2>
            
            <div className="space-y-4">
              {plantAndMachinery.map((machine) => (
                <div key={machine.id} className="flex justify-between items-center border-b border-primary/10 pb-3">
                  <div className="flex items-center">
                    <div className="bg-primary/10 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-primary font-bold">
                      {machine.id}
                    </div>
                    <span className="font-medium">{machine.name}</span>
                  </div>
                  <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-medium">
                    {machine.status}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-primary/10 rounded-lg p-4">
              <p className="text-primary/90">
                Our equipment is regularly maintained and inspected to ensure optimal performance and safety on all our construction projects.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-background/80 backdrop-blur-sm rounded-xl p-10 border border-primary/20 shadow-xl text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Build Together</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            SPG is your trusted partner for construction projects in Kenya. We bring together expertise, technology, and a passion for excellence to deliver results that stand the test of time. Let us collaborate to bring your vision to life.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesPage; 