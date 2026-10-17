'use client'

import { FiAward, FiBookOpen, FiCheck, FiCpu, FiMessageSquare, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';

export default function MentorshipCulture({ mentorship }) {
  const summary =
    mentorship?.summary ||
    'IRG is mentorship-driven: senior members and team leaders guide junior researchers, share resources, conduct learning sessions, and support newcomers.';
  const expectations = mentorship?.expectationsForSeniors || [
    'Guide junior researchers',
    'Share resources and knowledge',
    'Conduct learning sessions',
    'Support newcomers in understanding the research process',
    'Encourage collaborative learning'
  ];

  return (
    <section id="mentorship" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[#050B14] overflow-hidden border-t border-white/5">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Philosophy & Summary */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <FiAward />
              <span>04 // Research Pedagogy</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Cultivating the Next Generation of{' '}
              <span className="text-gradient-violet">Scientific Minds</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {summary}
            </p>

            <div className="p-6 rounded-2xl glass-panel border border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 to-slate-900/60 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <FaDiscord className="text-2xl text-[#5865F2]" />
                <h3 className="font-display font-bold text-base text-white">
                  Live Discord Laboratory & Syncs
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Research syncs, paper reading clubs, LaTeX workshops, and debugging sessions are conducted continuously on our dedicated Discord research hub.
              </p>
              <a
                href="https://discord.gg/5UQXTqJy7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Visit Discord Hub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right: Senior Expectations & Mentorship Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-indigo-400" />
              <span>Mentorship Blueprint for Senior Researchers</span>
            </div>

            {expectations.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl glass-panel glass-panel-hover border border-white/5 flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {exp}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Active guidance through one-on-one code reviews, methodology critiques, and academic literature analysis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
