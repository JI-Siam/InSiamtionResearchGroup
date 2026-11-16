'use client'

import { motion } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';
import SpotlightCard from '@/components/ui/SpotlightCard';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

export default function WhyJoinUsComparison({ whyJoinUs }) {
  return (
    <section id="why-join" className="bg-offwhite bg-grid-light text-obsidian py-24 sm:py-32 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
            <span>[ 03 / VALUE PROPOSITION ]</span>
          </div>
          <AnimatedHeading
            text="Why Capable Students Flourish at IRG"
            as="h2"
            className="font-display-tight font-bold text-4xl sm:text-5xl lg:text-6xl text-obsidian leading-[1.05]"
            highlightWords={["Flourish", "IRG"]}
            highlightClass="text-cobalt"
          />
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Many talented students have strong technical skills, innovative ideas, and research interest, but never get to publish because they lack structured team support. We are building that ecosystem: one that contributes deeply, works with discipline, and grows together.
          </p>
        </motion.div>

        {/* Side-by-Side Comparison: Solo Student Dilemma vs IRG Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Solo Student Dilemma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-white p-8 sm:p-10 border border-rose-200/90 hover:border-rose-400/80 shadow-sm hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-mono text-xs uppercase tracking-wider font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>THE SOLO STUDENT DILEMMA</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-obsidian mb-4">
                Talented, Yet Lacking Ecosystem Support
              </h3>

              <ul className="space-y-4 text-sm text-zinc-600 mb-6">
                {[
                  'Navigating complex research methodologies with zero seasoned guidance',
                  'Working in isolation without peer review, code critiques, or accountability',
                  'Delayed or rejected by strict formatting, citation standards, and review cycles',
                  'Missing structured pipelines to bridge undergraduate work into international MSc/PhD placements'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <FiX size={13} />
                    </div>
                    <span className="leading-relaxed group-hover/item:text-obsidian transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-zinc-100 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
              RESULT: UNREALIZED POTENTIAL • MISSED CONFERENCES
            </div>
          </motion.div>

          {/* IRG Ecosystem Model with Cursor Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(37, 99, 235, 0.22)"
              spotlightSize={420}
              className="rounded-3xl bg-obsidian text-white p-8 sm:p-10 border border-obsidian shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <motion.div 
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-cobalt/30 blur-3xl pointer-events-none" 
              />

              <div>
                <div className="flex items-center gap-2 text-cobalt font-mono text-xs uppercase tracking-wider font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-cobalt pulse-dot" />
                  <span>THE INSIAMTION COLLECTIVE MODEL</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Structured Labs, Senior Mentorship &amp; Rigor
                </h3>

                <ul className="space-y-4 text-sm text-zinc-300 mb-6">
                  {[
                    'Structured 3-team workflow taking ideas from proposal to camera-ready LaTeX',
                    'Weekly Discord sprints, reading groups, and direct guidance from senior researchers',
                    'Target peer-reviewed venues across IEEE, Springer Nature, and ACM Digital Library',
                    'Direct pathways to build verified portfolios for international MSc & PhD applications'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                      <div className="w-5 h-5 rounded-full bg-cobalt/20 text-cobalt flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-cobalt group-hover/item:text-white transition-all">
                        <FiCheck size={13} />
                      </div>
                      <span className="leading-relaxed group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 font-mono text-[11px] text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                <span>RESULT: PEER-REVIEWED PAPERS • RESEARCH PORTFOLIO</span>
                <span className="text-cobalt font-bold">&rarr;</span>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
