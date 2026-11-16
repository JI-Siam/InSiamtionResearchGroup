'use client'

import { motion } from 'framer-motion';

export default function AnimatedHeading({
  text,
  className = '',
  as: Component = 'h2',
  delay = 0,
  stagger = 0.04,
  once = true,
  highlightWords = [],
  highlightClass = 'text-cobalt',
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '115%',
      opacity: 0,
      rotate: 1.5,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-20px' }}
        className="inline-block"
      >
        {words.map((word, idx) => {
          const isHighlighted = highlightWords.some(
            (hw) => word.toLowerCase().includes(hw.toLowerCase())
          );

          return (
            <span
              key={idx}
              className="inline-block overflow-hidden mr-[0.24em] pb-[0.06em] align-top"
            >
              <motion.span
                variants={wordVariants}
                className={`inline-block ${isHighlighted ? highlightClass : ''}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
