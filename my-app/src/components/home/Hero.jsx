'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';
import SpotlightCard from '@/components/ui/SpotlightCard';

const PIPELINE_STAGES = [
  {
    tag: "01 / IDEA DEVELOPMENT & LITERATURE GAPS",
    duration: "Weeks 01–03 • Idea & Proposal Team",
    title: "Research Gap Identification & Methodology Blueprinting",
    desc: "Brainstorming innovative research questions, conducting systematic literature surveys across IEEE Xplore, ACM Digital Library, and Springer, and formulating formal study blueprints under direct senior mentorship.",
    deliverables: [
      { label: "DELIVERABLE A", text: "Annotated Literature Matrix" },
      { label: "DELIVERABLE B", text: "Formal Problem Statement" },
      { label: "DELIVERABLE C", text: "Experimental Design Plan" }
    ]
  },
  {
    tag: "02 / TECHNICAL IMPLEMENTATION & EXPERIMENTATION",
    duration: "Weeks 04–09 • Execution / Experimental Team",
    title: "Model Implementation, GPU Workloads & Empirical Analysis",
    desc: "Building modular Python & PyTorch pipelines, running controlled ablation studies, conducting rigorous performance benchmarking, and validating statistical significance with full code reproducibility.",
    deliverables: [
      { label: "DELIVERABLE A", text: "Reproducible Git Codebase" },
      { label: "DELIVERABLE B", text: "Ablation & Benchmark Tables" },
      { label: "DELIVERABLE C", text: "Empirical Error Analysis" }
    ]
  },
  {
    tag: "03 / MANUSCRIPT DRAFTING & FORMATTING",
    duration: "Weeks 10–14 • Writing & Formatting Team",
    title: "LaTeX Paper Engineering, BibTeX & Citation Integrity",
    desc: "Translating technical breakthroughs into publication-ready manuscripts formatted strictly to IEEE, Springer Nature, and ACM standards, with publication-grade vector diagrams and strict proofreading.",
    deliverables: [
      { label: "DELIVERABLE A", text: "Camera-Ready LaTeX Manuscript" },
      { label: "DELIVERABLE B", text: "Vector Architecture Figures" },
      { label: "DELIVERABLE C", text: "BibTeX & Citation Verification" }
    ]
  },
  {
    tag: "04 / PEER-REVIEWED VENUES & GRADUATE BRIDGES",
    duration: "Ongoing • IEEE • Springer • ACM ICCA • ICCIT",
    title: "Targeted Venue Submissions & International Professor Bridges",
    desc: "Submitting peer-reviewed papers to ICCIT, ICCA (ACM), ICECTE, and Springer Nature while upholding strict contribution-based authorship ethics and connecting fellows with prospective MSc/PhD supervisors.",
    deliverables: [
      { label: "DELIVERABLE A", text: "Conference Rebuttal Cycles" },
      { label: "DELIVERABLE B", text: "Published Paper & DOI Indexing" },
      { label: "DELIVERABLE C", text: "MSc/PhD Supervisor Outreach" }
    ]
  }
];

export default function Hero({ org, about, announcement }) {
  const [activeStage, setActiveStage] = useState(0);

  const openApply = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  const currentStage = PIPELINE_STAGES[activeStage];

  return (
    <section className="relative min-h-screen bg-obsidian bg-grid-dark pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden flex flex-col justify-between">
      {/* Atmospheric Cobalt Glow with Gentle Floating Animation */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 hero-glow pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">

        {/* Top Micro-Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-badge cursor-default"
          >
            <span className="relative flex h-2 w-2 pulse-dot">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cobalt" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-200">
              Cohort Status: <strong className="text-cobalt font-semibold">Opening Soon</strong>
            </span>
          </motion.div>

          <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
            [ EST. 2026 • MENTORED BY AIUB STUDENTS ]
          </div>
        </motion.div>

        {/* Monumental Display Headline with Staggered Kinetic Typography */}
        <div className="relative mb-10 sm:mb-12">
          <h1 className="font-display-tight font-bold uppercase text-white text-[3.1rem] sm:text-[5.2rem] md:text-[6.8rem] lg:text-[8.2rem] select-none leading-[0.92]">
            <div className="overflow-hidden pb-1">
              <motion.span
                initial={{ y: "115%", opacity: 0, rotate: 1.5 }}
                animate={{ y: "0%", opacity: 1, rotate: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                RESEARCH,
              </motion.span>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.span
                initial={{ y: "115%", opacity: 0, rotate: -1.5 }}
                animate={{ y: "0%", opacity: 1, rotate: 0 }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-shimmer-cobalt"
              >
                REDEFINED.
              </motion.span>
            </div>
          </h1>
        </div>

        {/* Asymmetric Hero Showcase: Left Editorial Pitch + Center/Right Interactive Pipeline Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left Column: Real Pitch, Action Pills & Glassmorphic Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-md font-normal">
              An independent student-led research and mentorship community founded by students of <strong className="text-white font-medium">American International University-Bangladesh (AIUB)</strong>. We unite driven undergraduates into structured lab teams, mentor them through empirical inquiry and LaTeX typesetting, and publish across IEEE, Springer Nature, and ACM.
            </p>

            {/* Dual Action Pills with Spring Micro-Interactions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.a
                href="#teams"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group px-6 py-3.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-white text-sm font-semibold transition-all shadow-xl shadow-cobalt/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore 3 Research Labs</span>
                <FiArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.a>
              <motion.a
                href="https://discord.gg/5UQXTqJy7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group px-6 py-3.5 rounded-full glass-badge hover:bg-white/[0.08] text-zinc-200 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <FaDiscord className="text-cobalt text-base group-hover:rotate-6 transition-transform duration-200" />
                <span>Discord Community</span>
              </motion.a>
            </div>

            {/* Floating Glassmorphic Proof Badges with Hover Springs */}
            <div className="grid grid-cols-2 gap-3 pt-4 max-w-md">
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(37, 99, 235, 0.4)' }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-4 rounded-2xl glass-badge transition-colors"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Active Cohort</div>
                <div className="font-display font-bold text-2xl text-white">40+ &rarr; 10</div>
                <div className="text-xs text-zinc-400 mt-0.5">Selected AIUB fellows</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(37, 99, 235, 0.4)' }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-4 rounded-2xl glass-badge transition-colors"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Target Venues</div>
                <div className="font-display font-bold text-2xl text-white">IEEE &amp; Springer</div>
                <div className="text-xs text-zinc-400 mt-0.5">ACM ICCA • ICCIT</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Research Lifecycle Bento Centerpiece with Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              spotlightColor="rgba(37, 99, 235, 0.16)"
              spotlightSize={420}
              hoverLift={false}
              className="rounded-3xl glass-badge p-5 sm:p-7 border border-white/10"
            >
              {/* Top Bento Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
                    IRG End-to-End Research Pipeline
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  INTERACTIVE WORKFLOW // 3 TEAMS
                </span>
              </div>

              {/* Interactive Stage Selector Pills with Kinetic Layout Indicator */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { stage: 'STAGE 01', title: 'Idea Proposal' },
                  { stage: 'STAGE 02', title: 'Execution' },
                  { stage: 'STAGE 03', title: 'Writing & LaTeX' },
                  { stage: 'STAGE 04', title: 'Publication' },
                ].map((item, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <motion.button
                      key={item.stage}
                      onClick={() => setActiveStage(idx)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative text-left p-3 rounded-2xl border transition-colors cursor-pointer ${isActive
                        ? 'border-cobalt/60 text-white'
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeHeroStagePill"
                          className="absolute inset-0 bg-cobalt/20 rounded-2xl -z-10 shadow-[0_0_15px_rgba(37,99,235,0.25)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                        />
                      )}
                      <div
                        className={`font-mono text-[10px] font-semibold ${isActive ? 'text-cobaltGlow' : 'text-zinc-400'
                          }`}
                      >
                        {item.stage}
                      </div>
                      <div className="font-display font-semibold text-xs sm:text-sm mt-0.5">
                        {item.title}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Dynamic Stage Content Display with Smooth Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-obsidian/80 rounded-2xl p-5 sm:p-6 border border-white/[0.07] shadow-inner"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-cobalt bg-cobalt/10 px-2.5 py-1 rounded-md font-semibold border border-cobalt/20">
                      {currentStage.tag}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {currentStage.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                    {currentStage.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {currentStage.desc}
                  </p>

                  {/* Deliverable Micro-Cards with Subtle Hover Elevation */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
                    {currentStage.deliverables.map((d, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.05] transition-colors"
                      >
                        <div className="font-mono text-[10px] text-zinc-500 font-semibold">{d.label}</div>
                        <div className="text-xs font-medium text-zinc-200 mt-0.5">{d.text}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
