'use client'

import { FiCheck, FiX, FiHeart, FiTrendingUp, FiTarget, FiZap, FiArrowRight } from 'react-icons/fi';

export default function WhyJoinUsComparison({ whyJoinUs }) {
  const headline = whyJoinUs?.headline || 'Join a team built for capable students who want to make a real impact.';
  const summary = whyJoinUs?.summary || 'We are a dedicated, growing research team focused on high-quality work, strong collaboration, and meaningful contribution. If you are skilled, motivated, and looking for a team that values dedication and action, this is where you belong.';
  const points = whyJoinUs?.points || [
    'Work with like-minded people who take research seriously',
    'Contribute to a team that values dedication, discipline, and consistency',
    'Get real support, feedback, and space to grow your strengths',
    'Be part of a team where capable students can actually shine through contribution'
  ];
  const closing = whyJoinUs?.closing || 'Many talented students never get to shine because they lack the right team support. We are building that team: one that contributes deeply, works with purpose, and grows together.';

  return (
    <section id="why-join-us" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[#050B14] overflow-hidden border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <FiHeart />
            <span>05 // Value Proposition</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Why Capable Students{' '}
            <span className="text-gradient-cyan">Flourish at IRG</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Side-by-Side Comparison: Traditional Solitary vs IRG Team Model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Dilemma */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-rose-500/20 bg-gradient-to-br from-rose-950/20 to-slate-900/60 relative">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold mb-4">
              <FiX className="text-base" />
              <span>The Solo Student Dilemma</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Talented, Yet Lacking Ecosystem Support
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <FiX className="text-rose-400 shrink-0 mt-1" />
                <span>Navigating complex research methodologies with zero seasoned guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <FiX className="text-rose-400 shrink-0 mt-1" />
                <span>Working in isolation without peer review, code critiques, or accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <FiX className="text-rose-400 shrink-0 mt-1" />
                <span>Getting rejected or blocked by formatting rules, citation standards, and review cycles</span>
              </li>
              <li className="flex items-start gap-3">
                <FiX className="text-rose-400 shrink-0 mt-1" />
                <span>Uncertain pathway to peer-reviewed IEEE or Springer conference proceedings</span>
              </li>
            </ul>
          </div>

          {/* IRG Ecosystem Advantage */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-slate-900/70 to-blue-950/30 relative">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold mb-4">
              <FiCheck className="text-base" />
              <span>The InSiamtion Framework</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Structured Teamwork, Mentorship & Velocity
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <FiCheck className="text-cyan-400 shrink-0 mt-1" />
                <span>Synchronized 3-lab pipeline: Idea formulation, technical execution, and publication formatting</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheck className="text-cyan-400 shrink-0 mt-1" />
                <span>Senior student researchers who have navigated peer-review, actively mentoring newcomers</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheck className="text-cyan-400 shrink-0 mt-1" />
                <span>Weekly Discord syncs, Overleaf/LaTeX templates, rigorous experimental benchmark protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheck className="text-cyan-400 shrink-0 mt-1" />
                <span>Ethical, merit-based authorship credit honoring technical and intellectual contributions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pillars of Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl glass-panel glass-panel-hover border border-white/5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-relaxed">
                  {pt}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-400">
                Core Benefit
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/20 bg-gradient-to-r from-slate-900/80 via-cyan-950/20 to-slate-900/80 text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic">
            &ldquo;{closing}&rdquo;
          </p>
          <div className="mt-4 text-xs font-mono uppercase tracking-widest text-cyan-400">
            — InSiamtion Research Group Founding Manifesto
          </div>
        </div>
      </div>
    </section>
  );
}
