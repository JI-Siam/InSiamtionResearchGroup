'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiLock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import SpotlightCard from '@/components/ui/SpotlightCard';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

export default function ValuesAndPhilosophy({ philosophy = [], values = [], expectations = [], confidentiality = [] }) {
  const coreValues = values.length > 0 ? values : [
    "Collaboration", "Integrity", "Innovation", "Discipline",
    "Growth", "Accountability", "Mentorship", "Excellence"
  ];

  return (
    <section id="values" className="bg-obsidian bg-grid-dark text-white py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
              [ 05 / CULTURE &amp; ETHICS ]
            </div>
            <AnimatedHeading
              text="Values, Discipline & Rigor"
              as="h2"
              className="font-display-tight font-bold text-4xl sm:text-5xl lg:text-6xl text-white"
              highlightWords={["Discipline", "Rigor"]}
              highlightClass="text-cobaltGlow"
            />
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-cobalt hover:text-white transition-colors group"
          >
            <span>Read Full Constitution</span>
            <FiArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* 8 Core Values Responsive Strip with Spring Hover Lift */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ 
                y: -5, 
                scale: 1.04, 
                borderColor: 'rgba(37, 99, 235, 0.8)',
                boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.25)'
              }}
              className="p-4 rounded-2xl glass-badge border border-white/10 text-center transition-colors group cursor-default"
            >
              <div className="font-mono text-[10px] text-zinc-500 group-hover:text-cobaltGlow mb-1 font-semibold transition-colors duration-200">
                0{idx + 1}
              </div>
              <div className="font-display font-semibold text-xs sm:text-sm text-white group-hover:text-zinc-100 transition-colors">
                {val}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streamlined 2-Column Bento: Cadence + Confidentiality with Spotlight Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Column 1: Cadence & Weekly Rigor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(37, 99, 235, 0.16)"
              spotlightSize={400}
              className="rounded-3xl bg-obsidianSurface border border-obsidianBorder p-8 sm:p-10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-2 text-cobalt font-mono text-xs uppercase tracking-wider font-semibold mb-4">
                  <FiClock size={15} />
                  <span>MEMBERSHIP CADENCE</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                  6–10 Hours Weekly Dedicated Research
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  Research requires consistency over bursts. Fellows commit to uninterrupted weekly hours for paper reading, experimental runs, and code reviews in weekly syncs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-200">
                  <motion.div 
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                    <span>Weekly Discord Sprints</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                    <span>Peer Code Review</span>
                  </motion.div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/10 font-mono text-xs text-zinc-500">
                DISCIPLINE • CONTINUOUS SKILL ADVANCEMENT • AIUB
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Column 2: Confidentiality & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(37, 99, 235, 0.16)"
              spotlightSize={380}
              className="rounded-3xl bg-obsidianSurface border border-obsidianBorder p-8 sm:p-10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-2 text-cobalt font-mono text-xs uppercase tracking-wider font-semibold mb-4">
                  <FiLock size={15} />
                  <span>CONFIDENTIALITY &amp; ETHICS</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                  Protecting Pre-Print IP
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                  Unpublished ideas, draft manuscripts, and experimental data remain strictly protected within the collective until formal camera-ready release.
                </p>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-cobalt/10 border border-cobalt/25 flex items-start gap-3"
              >
                <FiCheckCircle className="text-cobalt shrink-0 mt-0.5" size={16} />
                <span className="font-mono text-xs text-zinc-300">
                  Strict non-disclosure on pending conference submissions &amp; datasets.
                </span>
              </motion.div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
