'use client'

import { useState } from 'react';
import { FiBookOpen, FiAward, FiExternalLink, FiCheckCircle, FiShield, FiFileText, FiLayers, FiCompass } from 'react-icons/fi';

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
  const highlights = featuredResearch?.highlights || [];
  const venues = featuredResearch?.venues || [];

  return (
    <section id="publications" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[#050B14] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <FiBookOpen />
            <span>03 // Academic Contributions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Peer-Reviewed Venues &{' '}
            <span className="text-gradient-cyan">Publication Rigor</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {summary ||
              'IRG members actively target reputable conference publications across IEEE, Springer Nature, Atlantis Press, and premier Bangladeshi conferences including ICCIT, ICECTE, QPAIN, and IDAA, steadily building toward upcoming journal milestones.'}
          </p>
        </div>

        {/* Venues Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VENUE_DETAILS.map((v) => (
            <div
              key={v.name}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {v.name}
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {v.badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-300 mb-2">
                  {v.category}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {v.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1.5 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="font-mono text-cyan-400 font-semibold">INDEX:</span>
                  <span className="text-slate-300">{v.index}</span>
                </div>
                <div className="flex items-start gap-1.5 text-slate-400">
                  <span className="font-mono text-cyan-400 font-semibold">FOCUS:</span>
                  <span className="text-slate-300 line-clamp-1">{v.focus}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Roadmap Milestone Card */}
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-indigo-950/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-2xl text-white">
                  Journal Milestone
                </span>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ROADMAP
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Our active phase targets prestigious peer-reviewed conference publications. As research iterations mature, our teams advance their findings toward high-impact Q1/Q2 journal submissions.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-cyan-300 flex items-center justify-between">
              <span>Next Horizon</span>
              <span>Scopus & Web of Science</span>
            </div>
          </div>
        </div>

        {/* Authorship & Publication Ethics Policy Box */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 bg-slate-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                <FiShield />
                <span>Ethical Authorship Standards</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                Merit-Based, Transparent Academic Authorship
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs font-semibold text-white mb-1 flex items-center gap-2">
                      <FiCheckCircle className="text-cyan-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
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
