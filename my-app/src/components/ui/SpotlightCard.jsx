'use client'

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightCard({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(37, 99, 235, 0.14)',
  spotlightSize = 380,
  hoverLift = true,
  interactiveGlow = true,
  onClick,
  ...props 
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: -1000, y: -1000 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={hoverLift ? { y: -4, transition: { type: 'spring', stiffness: 400, damping: 28 } } : undefined}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Tracker */}
      {interactiveGlow && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit] z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
          }}
        />
      )}

      {/* Card Contents */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
