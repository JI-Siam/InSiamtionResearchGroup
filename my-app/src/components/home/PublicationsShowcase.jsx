'use client'

import { FiBookOpen, FiCheckCircle, FiShield } from 'react-icons/fi';
import SpotlightCard from '@/components/ui/SpotlightCard';

const VENUE_DETAILS = [
  {
    name: 'IEEE',
    category: 'Global Publisher / IEEE Xplore',
    badge: 'CORE PUBLISHER',
    index: 'Scopus, IEEE Xplore, EI Compendex',
    focus: 'Artificial Intelligence, Signal Processing, Computer Systems & Robotics',
    description: 'The world’s largest technical professional organization for the advancement of technology and computing.'
  },
  {
    name: 'Springer Nature',
    category: 'International Scientific Publisher',
    badge: 'PEER-REVIEWED SERIES',
    index: 'Scopus, SpringerLink, LNNS, CCIS',
    focus: 'Intelligent Systems, Machine Learning, Data Analytics & Networks',
    description: 'Global scientific publisher delivering rigorous peer-reviewed book series, conference proceedings, and journals.'
  },
  {
    name: 'ICCA (ACM)',
    category: 'International Conference on Computing Advancements',
    badge: 'ACM DIGITAL LIBRARY',
    index: 'ACM Digital Library / Scopus Indexed',
    focus: 'Applied AI, Intelligent Systems, Smart Computing & Data Engineering',
    description: 'Premier international computing conference with proceedings published in the ACM Digital Library and indexed in Scopus.'
  },
  {
    name: 'ICCIT',
    category: 'International Conference on Computer & Info Tech',
    badge: 'FLAGSHIP BANGLADESH',
    index: 'IEEE Xplore Indexed',
    focus: 'Computer Science, Artificial Intelligence, Cybersecurity & IoT',
    description: 'The premier and longest-running international computing conference organized in Bangladesh.'
  },
  {
    name: 'ICECTE',
    category: 'Electrical, Computer & Telecommunication Eng.',
    badge: 'IEEE TECHNICAL CO-SPONSORED',
    index: 'IEEE Xplore Indexed',
    focus: 'Applied Machine Learning, Computer Engineering & Telecommunications',
    description: 'Reputable international research conference hosted by Rajshahi University of Engineering & Technology (RUET).'
  },
  {
    name: 'QPAIN',
    category: 'Quantum, Pattern Analysis & Intelligent Networking',
    badge: 'AI & APPLIED COMPUTING',
    index: 'International Proceedings',
    focus: 'Pattern Recognition, Neural Networks, Deep Learning & Intelligent Systems',
    description: 'Specialized scientific forum addressing frontier advances in pattern analysis, quantum ideas, and intelligent computing.'
  },
  {
    name: 'IDAA',
    category: 'Intelligent Data Analytics and Applications',
    badge: 'DATA SCIENCE & SYSTEMS',
    index: 'Scopus / Springer Indexed',
    focus: 'Data Mining, Predictive Analytics, Computational Intelligence',
    description: 'International symposium addressing applied machine learning, big data architectures, and practical informatics.'
  },
  {
    name: 'Atlantis Press',
    category: 'Scientific Proceedings Series',
    badge: 'OPEN ACCESS VENUE',
    index: 'Advances in Computer Science Research',
    focus: 'Computational Algorithms, Information Systems, Software Architecture',
    description: 'Part of Springer Nature, publishing high-quality proceedings and academic monographs.'
  }
];

export default function PublicationsShowcase({ featuredResearch, authorshipPolicy }) {
  const summary = featuredResearch?.summary || '';

  return (
    <section id="publications" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[var(--bg-deep)] overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-200">
      {/* Background Glow */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-40"
        style={{ background: 'var(--accent-cyan-subtle)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-40"
        style={{ background: 'var(--accent-violet-subtle)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan-subtle)] border border-[var(--border-active)] text-[var(--accent-cyan)] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <FiBookOpen aria-hidden="true" />
            <span>03 // Academic Contributions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight leading-tight">
            Peer-Reviewed Venues &{' '}
            <span className="text-gradient-cyan">Publication Rigor</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {summary ||
              'IRG members actively target reputable conference publications across IEEE, Springer Nature, ACM Digital Library (ICCA), Atlantis Press, and premier conferences including ICCIT, ICECTE, QPAIN, and IDAA, steadily building toward upcoming journal milestones.'}
          </p>
        </div>

        {/* Venues Interactive Grid with Skiper UI Spotlight Cursor Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VENUE_DETAILS.map((v) => (
            <SpotlightCard
              key={v.name}
              className="p-6 border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                    {v.name}
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-cyan-subtle)] text-[var(--accent-cyan)] border border-[var(--border-active)]">
                    {v.badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[var(--text-primary)] mb-2">
                  {v.category}
                </div>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  {v.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-1.5 text-[11px]">
                <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                  <span className="font-mono text-[var(--accent-cyan)] font-semibold">INDEX:</span>
                  <span className="text-[var(--text-secondary)]">{v.index}</span>
                </div>
                <div className="flex items-start gap-1.5 text-[var(--text-muted)]">
                  <span className="font-mono text-[var(--accent-cyan)] font-semibold">FOCUS:</span>
                  <span className="text-[var(--text-secondary)] line-clamp-1">{v.focus}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}

          {/* Roadmap Milestone Card */}
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.15)"
            className="p-6 border border-[var(--border-active)] bg-gradient-to-br from-[var(--accent-cyan-subtle)] via-[var(--bg-card)] to-[var(--accent-violet-subtle)] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-2xl text-[var(--text-primary)]">
                  Journal Milestone
                </span>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-emerald-subtle)] text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/30">
                  ROADMAP
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Our active phase targets prestigious peer-reviewed conference publications. As research iterations mature, our teams advance their findings toward high-impact Q1/Q2 journal submissions.
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-cyan)] flex items-center justify-between">
              <span>Next Horizon</span>
              <span className="font-semibold">Scopus & Web of Science</span>
            </div>
          </SpotlightCard>
        </div>

        {/* Authorship & Publication Ethics Policy Box */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent-cyan)] uppercase tracking-wider mb-2">
                <FiShield aria-hidden="true" />
                <span>Ethical Authorship Standards</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-3">
                Merit-Based, Transparent Academic Authorship
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                IRG strictly adheres to international Committee on Publication Ethics (COPE) guidelines. Authorship is earned strictly through substantive intellectual and empirical contributions.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Intellectual Contribution', desc: 'Conception, algorithmic formulation, or hypothesis design.' },
                  { title: 'Technical Implementation', desc: 'Code architecture, model training, and experiment validation.' },
                  { title: 'Writing & Synthesis', desc: 'Drafting the manuscript, literature synthesis, and revision.' },
                  { title: 'Research Integrity', desc: 'Zero plagiarism, reproducibility, and verified data provenance.' }
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-active)] transition-colors">
                    <div className="text-xs font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                      <FiCheckCircle className="text-[var(--accent-cyan)] shrink-0" aria-hidden="true" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
