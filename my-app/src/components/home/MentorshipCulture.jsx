'use client'

import { FiAward } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';
import SpotlightCard from '@/components/ui/SpotlightCard';

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
    <section id="mentorship" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[var(--bg-deep)] overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-200">
      {/* Ambient Lighting */}
      <div 
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[160px] pointer-events-none opacity-40"
        style={{ background: 'var(--accent-violet-subtle)' }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Philosophy & Summary */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-violet-subtle)] border border-[var(--border-violet)] text-[var(--accent-violet)] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <FiAward aria-hidden="true" />
              <span>04 // Research Pedagogy</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight leading-tight mb-6">
              Cultivating the Next Generation of{' '}
              <span className="text-gradient-violet">Scientific Minds</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              {summary}
            </p>

            <SpotlightCard
              spotlightColor="rgba(124, 58, 237, 0.2)"
              className="p-6 border border-[var(--border-violet)] bg-gradient-to-br from-[var(--accent-violet-subtle)] to-[var(--bg-card)] mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaDiscord className="text-2xl text-[var(--brand-discord)]" aria-hidden="true" />
                <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                  Live Discord Laboratory & Syncs
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Research syncs, paper reading clubs, LaTeX workshops, and debugging sessions are conducted continuously on our dedicated Discord research hub.
              </p>
              <a
                href="https://discord.gg/5UQXTqJy7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-violet)] hover:underline transition-colors focus-ring rounded-md"
              >
                <span>Visit Discord Hub</span>
                <span aria-hidden="true">→</span>
              </a>
            </SpotlightCard>
          </div>

          {/* Right: Senior Expectations & Mentorship Pillars with Skiper UI Spotlights */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[var(--accent-violet)]" />
              <span>Mentorship Blueprint for Senior Researchers</span>
            </div>

            {expectations.map((exp, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(124, 58, 237, 0.15)"
                className="p-5 border border-[var(--border-subtle)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-violet-subtle)] border border-[var(--border-violet)] text-[var(--accent-violet)] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-violet)] transition-colors">
                      {exp}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                      Active guidance through one-on-one code reviews, methodology critiques, and academic literature analysis.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
