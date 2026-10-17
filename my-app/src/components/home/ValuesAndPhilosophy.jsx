'use client'

import { 
  FiShield, 
  FiUsers, 
  FiCheckCircle, 
  FiClock, 
  FiLock, 
  FiTrendingUp, 
  FiAward, 
  FiCompass, 
  FiCpu, 
  FiTarget,
  FiZap
} from 'react-icons/fi';

const VALUE_ICONS = {
  Collaboration: FiUsers,
  Integrity: FiShield,
  Innovation: FiZap,
  Discipline: FiTarget,
  Growth: FiTrendingUp,
  Accountability: FiCheckCircle,
  Mentorship: FiAward,
  Excellence: FiCompass,
};

export default function ValuesAndPhilosophy({ philosophy = [], values = [], expectations = [], confidentiality = [] }) {
  return (
    <section id="values" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[#050B14] overflow-hidden border-t border-white/5">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <FiShield />
            <span>06 // Ethics, Values & Governance</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Built on Rigor, Integrity &{' '}
            <span className="text-gradient-cyan">Collaborative Honor</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Excellence in research is not merely about algorithmic benchmarks; it requires unwavering academic honesty, disciplined teamwork, and deep respect for intellectual contributions.
          </p>
        </div>

        {/* 8 Core Values Grid */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-6 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-cyan-400" />
            <span>Eight Core Values</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {values.map((val) => {
              const Icon = VALUE_ICONS[val] || FiAward;
              return (
                <div
                  key={val}
                  className="p-5 rounded-xl glass-panel glass-panel-hover border border-white/5 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl mb-3 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <Icon />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                    {val}
                  </h3>
                  <span className="mt-1 text-[10px] font-mono text-slate-400 tracking-wider">
                    IRG STANDARD
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy & Membership Expectations (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Philosophy Column */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 bg-slate-900/50">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <FiCompass />
              <span>Organizational Philosophy</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-6">
              How We Think & Operate
            </h3>

            <div className="space-y-4">
              {philosophy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-6 h-6 rounded-md bg-cyan-500/15 text-cyan-300 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Expectations Column */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 bg-slate-900/50 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                <FiClock />
                <span>Membership Expectations</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Commitment to Research Excellence
              </h3>

              <div className="space-y-4">
                {expectations.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-6 h-6 rounded-md bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {exp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center justify-between">
              <span className="font-mono font-semibold">WEEKLY DEDICATION</span>
              <span className="font-bold">6 – 10 Hours Minimum</span>
            </div>
          </div>
        </div>

        {/* Confidentiality & Intellectual Property Protocol */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-slate-900/60 to-slate-900/80">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xl">
                <FiLock />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  Confidentiality & Intellectual Property Protocol
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1">
                  Protection of Pre-Publication Scientific Assets
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  All research ideas, algorithmic draft models, experimental datasets, and manuscript drafts remain strictly confidential within IRG. No unpublished work may be shared externally without explicit lab authorization.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300">
                Zero Plagiarism
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300">
                Protected Datasets
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300">
                Authorized Submissions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
