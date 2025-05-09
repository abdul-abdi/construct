'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface BlueprintElementProps {
  type?: 'building' | 'floor' | 'elevation' | 'details' | 'compass' | 'stamp'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  opacity?: number
  rotate?: number
  scale?: number
  scrollTarget?: React.RefObject<HTMLElement>
  delay?: number
}

const BlueprintElement: React.FC<BlueprintElementProps> = ({
  type = 'building',
  position = 'top-right',
  size = 'md',
  opacity = 0.15,
  rotate = 0,
  scale = 1,
  scrollTarget,
  delay = 0,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-40 h-40',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
  }

  // Position classes
  const positionClasses = {
    'top-left': 'left-[5%] top-[5%]',
    'top-right': 'right-[5%] top-[5%]',
    'bottom-left': 'left-[5%] bottom-[5%]',
    'bottom-right': 'right-[5%] bottom-[5%]',
    'center': 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  }

  // Scroll-based transforms
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"]
  })

  const floatY = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [0, type === 'compass' ? -20 : 20, 0]
  )
  
  const rotateZ = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [rotate, rotate + (type === 'stamp' ? 15 : -15), rotate]
  )
  
  const opacityAnim = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, opacity, opacity, 0]
  )

  // Blueprint SVG based on type
  const renderBlueprint = () => {
    switch (type) {
      case 'building':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary">
            <rect x="20" y="20" width="60" height="60" strokeWidth="0.5" />
            <rect x="35" y="20" width="30" height="20" strokeWidth="0.5" strokeDasharray="2,1" />
            <rect x="30" y="70" width="40" height="10" strokeWidth="0.5" />
            <line x1="20" y1="40" x2="80" y2="40" strokeWidth="0.3" />
            <line x1="20" y1="60" x2="80" y2="60" strokeWidth="0.3" />
            <line x1="35" y1="20" x2="35" y2="80" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="65" y1="20" x2="65" y2="80" strokeWidth="0.3" strokeDasharray="2,1" />
            <path d="M20,20 L50,5 L80,20" strokeWidth="0.5" strokeDasharray="3,1" />
            <text x="22" y="18" fill="rgba(28, 100, 242, 0.8)" fontSize="3">ELEVATION</text>
          </svg>
        )
      
      case 'floor':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary">
            <rect x="10" y="10" width="80" height="80" strokeWidth="0.5" />
            <line x1="10" y1="30" x2="90" y2="30" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="10" y1="70" x2="90" y2="70" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="30" y1="10" x2="30" y2="90" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="70" y1="10" x2="70" y2="90" strokeWidth="0.3" strokeDasharray="2,1" />
            <rect x="30" y="30" width="40" height="40" strokeWidth="0.3" strokeDasharray="1,1" />
            <circle cx="50" cy="50" r="10" strokeWidth="0.3" />
            <text x="12" y="8" fill="rgba(28, 100, 242, 0.8)" fontSize="3">FLOOR PLAN</text>
          </svg>
        )
      
      case 'elevation':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary">
            <rect x="20" y="30" width="60" height="50" strokeWidth="0.5" />
            <path d="M20,30 L50,10 L80,30" strokeWidth="0.5" />
            <line x1="20" y1="45" x2="80" y2="45" strokeWidth="0.3" strokeDasharray="3,1" />
            <line x1="20" y1="60" x2="80" y2="60" strokeWidth="0.3" strokeDasharray="3,1" />
            <rect x="30" y="50" width="10" height="15" strokeWidth="0.3" />
            <rect x="45" y="50" width="10" height="15" strokeWidth="0.3" />
            <rect x="60" y="50" width="10" height="15" strokeWidth="0.3" />
            <rect x="45" y="65" width="10" height="15" strokeWidth="0.3" />
            <text x="25" y="28" className="fill-primary/80" fontSize="3">FRONT ELEVATION</text>
            <line x1="15" y1="80" x2="85" y2="80" strokeWidth="0.3" />
            <line x1="15" y1="79" x2="15" y2="81" strokeWidth="0.3" />
            <line x1="85" y1="79" x2="85" y2="81" strokeWidth="0.3" />
            <text x="45" y="84" className="fill-primary/80" fontSize="2">20m</text>
          </svg>
        )
      
      case 'details':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary">
            <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="20" y1="50" x2="80" y2="50" strokeWidth="0.3" />
            <line x1="50" y1="20" x2="50" y2="80" strokeWidth="0.3" />
            <path d="M35,35 L65,65" strokeWidth="0.2" />
            <path d="M35,65 L65,35" strokeWidth="0.2" />
            <rect x="40" y="40" width="20" height="20" strokeWidth="0.3" strokeDasharray="1,1" />
            <text x="42" y="33" fill="rgba(28, 100, 242, 0.8)" fontSize="3">DETAIL</text>
            <text x="42" y="38" fill="rgba(28, 100, 242, 0.8)" fontSize="2">SCALE 1:50</text>
          </svg>
        )
      
      case 'compass':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary">
            <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" strokeWidth="0.3" strokeDasharray="2,1" />
            <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.3" />
            <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.3" />
            <path d="M50,20 L55,45 L50,40 L45,45 Z" strokeWidth="0.5" fill="rgba(28, 100, 242, 0.2)" />
            <path d="M50,80 L53,55 L50,60 L47,55 Z" strokeWidth="0.3" />
            <text x="47" y="18" fill="rgba(28, 100, 242, 0.8)" fontSize="5">N</text>
            <text x="47" y="87" fill="rgba(28, 100, 242, 0.8)" fontSize="5">S</text>
            <text x="84" y="52" fill="rgba(28, 100, 242, 0.8)" fontSize="5">E</text>
            <text x="12" y="52" fill="rgba(28, 100, 242, 0.8)" fontSize="5">W</text>
          </svg>
        )
      
      case 'stamp':
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary">
            <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="4,2" />
            <circle cx="50" cy="50" r="35" strokeWidth="0.3" />
            <text x="32" y="45" fill="rgba(28, 100, 242, 0.8)" fontSize="8" fontWeight="bold">
              APPROVED
            </text>
            <text x="30" y="55" fill="rgba(28, 100, 242, 0.8)" fontSize="6">
              SILVERPACK GROUP
            </text>
            <text x="36" y="65" fill="rgba(28, 100, 242, 0.8)" fontSize="4">
              REF: ARB-2023
            </text>
          </svg>
        )
      
      default:
        return (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary">
            <rect x="20" y="20" width="60" height="60" strokeWidth="0.5" />
            <line x1="20" y1="50" x2="80" y2="50" strokeWidth="0.3" />
            <line x1="50" y1="20" x2="50" y2="80" strokeWidth="0.3" />
          </svg>
        )
    }
  }

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${positionClasses[position]} pointer-events-none z-10`}
      initial={{ 
        opacity: 0, 
        scale: 0.8, 
        rotate: rotate - 10, 
        y: type === 'compass' ? -20 : 20 
      }}
      animate={{ 
        opacity: opacity,
        scale: scale,
        rotate: rotate,
        y: 0
      }}
      transition={{ 
        duration: 1.5, 
        delay: delay,
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
      style={{
        y: floatY,
        rotate: rotateZ,
        opacity: scrollTarget ? opacityAnim : undefined
      }}
    >
      {renderBlueprint()}
    </motion.div>
  )
}

export default BlueprintElement 