'use client'

import { motion } from 'framer-motion';
import { FiCompass, FiCpu, FiEdit3 } from 'react-icons/fi';
import SpotlightCard from '@/components/ui/SpotlightCard';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

export default function AboutSection({ about, purpose, vision }) {
  return (
    <section id="mission" className="bg-offwhite bg-grid-light text-obsidian py-24 sm:py-32 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Asymmetric 2-Column Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-20 border-b border-zinc-200/90">

          {/* Left Column: Eyebrow + Monumental Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-4">
              <span>[ 01 / THE IRG MISSION &amp; PURPOSE ]</span>
            </div>
            <AnimatedHeading
              text="Turning curious undergraduates into published researchers."
              as="h2"
              className="font-display-tight font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-obsidian"
              highlightWords={["published", "researchers."]}
              highlightClass="text-cobalt"
            />
          </motion.div>

          {/* Right Column: Narrative + Interactive Researcher Avatar Stack + Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:pt-8 space-y-6"
          >
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
              InSiamtion Research Group (IRG) was founded by motivated students of <strong className="text-obsidian font-semibold">American International University-Bangladesh (AIUB)</strong> with a clear conviction: capable students possess strong technical skills and innovative ideas, but frequently lack a reliable research team, hands-on mentorship, and publication guidance.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed">
              We bridge that gap by building structured, collaborative labs—guiding fellows through empirical inquiry, Python/PyTorch implementation, and LaTeX typesetting to publish in peer-reviewed venues while actively connecting students with prospective international professors for Master&apos;s and PhD placements.
            </p>

            {/* Interactive Researcher Avatar Stack with Spring Float */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex -space-x-2.5">
                {[
                  { initials: 'JS', bg: 'bg-obsidian', text: 'text-white' },
                  { initials: 'AR', bg: 'bg-cobalt', text: 'text-white' },
                  { initials: 'TN', bg: 'bg-zinc-800', text: 'text-white' },
                  { initials: 'MK', bg: 'bg-zinc-700', text: 'text-white' },
                  { initials: '+8', bg: 'bg-zinc-200', text: 'text-obsidian' },
                ].map((avatar, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, y: -3, zIndex: 20 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`w-10 h-10 rounded-full ${avatar.bg} ${avatar.text} font-display font-bold text-xs flex items-center justify-center ring-2 ring-offwhite shadow-sm cursor-pointer relative`}
                  >
                    {avatar.initials}
                  </motion.div>
                ))}
              </div>
              <div className="text-xs text-zinc-500">
                <span className="font-semibold text-obsidian block">Selected AIUB Undergraduate Fellows</span>
                10 active researchers working across Idea, Execution &amp; Writing Labs
              </div>
            </div>

            {/* 3 Crisp Editorial Metrics with Interactive Hover Springs */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-2 -m-2 rounded-xl transition-colors hover:bg-zinc-100/70"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-obsidian">40+ → 10</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Selected Cohort</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-2 -m-2 rounded-xl transition-colors hover:bg-zinc-100/70"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-cobalt">3 Labs</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Specialized Teams</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-2 -m-2 rounded-xl transition-colors hover:bg-zinc-100/70"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-obsidian">8+ Venues</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1">IEEE &amp; Springer Targets</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
             THE 3 SPECIALIZED RESEARCH TEAMS
        ========================================================== */}
        <div id="teams" className="pt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-2">
                [ 02 / CORE LAB ARCHITECTURE ]
              </div>
              <AnimatedHeading
                text="The 3 Specialized Research Teams"
                as="h3"
                className="font-display-tight font-bold text-3xl sm:text-4xl text-obsidian"
                highlightWords={["3", "Specialized"]}
                highlightClass="text-cobalt"
              />
            </div>
            <p className="font-mono text-xs text-zinc-500 max-w-xs">
              STRUCTURED WEEKLY SPRINTS • CODE REPRODUCIBILITY • DIRECT SENIOR MENTORSHIP
            </p>
          </motion.div>

          {/* 3 Bento Cards with Hairline Borders, Dynamic Spotlight & Spring Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* Team 01: Idea Development and Proposal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(37, 99, 235, 0.08)"
                spotlightSize={350}
                className="group rounded-3xl bg-white p-8 border border-zinc-200/90 hover:border-cobalt/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cobalt/5 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-obsidian group-hover:bg-cobalt group-hover:text-white transition-colors duration-200">
                      TEAM 01
                    </span>
                    <FiCompass className="w-5 h-5 text-zinc-400 group-hover:text-cobalt group-hover:rotate-45 transition-all duration-300" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-obsidian mb-3 group-hover:text-cobalt transition-colors duration-200">
                    Idea Development &amp; Proposal Lab
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    The intellectual foundation of IRG. Responsible for brainstorming innovative concepts, systematic literature gap identification, formal research proposals, and study methodology design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 group-hover:bg-cobalt/10 group-hover:text-cobalt transition-colors">
                      Literature Gap Matrix
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 group-hover:bg-cobalt/10 group-hover:text-cobalt transition-colors">
                      Study Blueprints
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                  <span>1 LEADER • 4–5 MEMBERS</span>
                  <span className="text-cobalt font-semibold group-hover:translate-x-2 transition-transform duration-200">
                    &rarr;
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Team 02: Execution/Experimental (Inverted Obsidian Center Card with Breathing Atmospheric Glow) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(37, 99, 235, 0.22)"
                spotlightSize={400}
                className="group rounded-3xl bg-obsidian text-white p-8 border border-obsidian transition-all duration-300 shadow-2xl flex flex-col justify-between h-full relative"
              >
                {/* Breathing Ambient Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.45, 0.25],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-cobalt/30 blur-2xl pointer-events-none"
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-cobalt text-white shadow-md shadow-cobalt/30">
                      TEAM 02
                    </span>
                    <FiCpu className="w-5 h-5 text-cobalt group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-cobaltGlow transition-colors duration-200">
                    Execution &amp; Experimental Lab
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    The computational powerhouse of IRG. Implements state-of-the-art models, designs validation benchmarks, and executes empirical data analysis with clean, reproducible PyTorch codebases.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/10 text-zinc-200 group-hover:bg-cobalt/25 group-hover:text-white transition-colors">
                      PyTorch Pipelines
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/10 text-zinc-200 group-hover:bg-cobalt/25 group-hover:text-white transition-colors">
                      Empirical Benchmarks
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span>1 LEADER • 4–5 MEMBERS</span>
                  <span className="text-cobalt font-semibold text-sm group-hover:translate-x-2 transition-transform duration-200">
                    &rarr;
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Team 03: Writing and Formatting */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(37, 99, 235, 0.08)"
                spotlightSize={350}
                className="group rounded-3xl bg-white p-8 border border-zinc-200/90 hover:border-cobalt/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cobalt/5 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-obsidian group-hover:bg-cobalt group-hover:text-white transition-colors duration-200">
                      TEAM 03
                    </span>
                    <FiEdit3 className="w-5 h-5 text-zinc-400 group-hover:text-cobalt group-hover:-rotate-12 transition-all duration-300" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-obsidian mb-3 group-hover:text-cobalt transition-colors duration-200">
                    Writing &amp; Formatting Lab
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    Translating experimental breakthroughs into camera-ready manuscripts formatted strictly to IEEE, Springer Nature, and ACM standards with rigorous citation integrity.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 group-hover:bg-cobalt/10 group-hover:text-cobalt transition-colors">
                      LaTeX Formatting
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 group-hover:bg-cobalt/10 group-hover:text-cobalt transition-colors">
                      Citation Integrity
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                  <span>1 LEADER • 4–5 MEMBERS</span>
                  <span className="text-cobalt font-semibold group-hover:translate-x-2 transition-transform duration-200">
                    &rarr;
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
