'use client'

import Link from 'next/link';
import { FiShield, FiArrowRight } from 'react-icons/fi';

export const VENUES_DATA = [
  {
    id: 'ieee',
    code: 'PUB-01 // GLOBAL PUBLISHER',
    name: 'IEEE & IEEE Xplore',
    badge: 'CORE PUBLISHER',
    category: 'publishers',
    index: 'Scopus, IEEE Xplore, EI Compendex',
    focus: 'Artificial Intelligence, Signal Processing, Computer Systems & Robotics',
    description: 'The world’s largest technical professional organization for technology. IRG fellows target IEEE conferences and journals with empirical benchmarking.',
    status: 'ACTIVE TARGET'
  },
  {
    id: 'springer',
    code: 'PUB-02 // SCIENTIFIC PUBLISHER',
    name: 'Springer Nature',
    badge: 'PEER-REVIEWED SERIES',
    category: 'publishers',
    index: 'Scopus, SpringerLink, LNNS, CCIS',
    focus: 'Intelligent Systems, Machine Learning, Data Analytics & Networks',
    description: 'Global scientific publisher delivering peer-reviewed book series, conference proceedings, and journals including LNNS and CCIS.',
    status: 'ACTIVE TARGET'
  },
  {
    id: 'acm',
    code: 'PUB-03 // ACM DIGITAL LIBRARY',
    name: 'ICCA (ACM Digital Library)',
    badge: 'ACM PROCEEDINGS',
    category: 'publishers',
    index: 'ACM Digital Library, Scopus Indexed',
    focus: 'Applied AI, Intelligent Systems, Smart Computing & Data Engineering',
    description: 'Premier international computing conference with proceedings published in the ACM Digital Library and indexed in Scopus.',
    status: 'ACTIVE SUBMISSION'
  },
  {
    id: 'iccit',
    code: 'CONF-01 // BANGLADESH FLAGSHIP',
    name: 'ICCIT',
    badge: 'IEEE XPLORE INDEXED',
    category: 'conferences',
    index: 'IEEE Xplore, Scopus Indexed',
    focus: 'Computer Science, Artificial Intelligence, Cybersecurity & IoT',
    description: 'The premier and longest-running international computing conference organized in Bangladesh, upholding global review rigor.',
    status: 'ACTIVE SUBMISSION'
  },
  {
    id: 'icecte',
    code: 'CONF-02 // RUET CO-SPONSORED',
    name: 'ICECTE (RUET)',
    badge: 'IEEE TECHNICAL CO-SPONSOR',
    category: 'conferences',
    index: 'IEEE Xplore, Scopus Indexed',
    focus: 'Applied Machine Learning, Computer Engineering & Telecommunications',
    description: 'Reputable international research conference hosted by Rajshahi University of Engineering & Technology (RUET).',
    status: 'ACTIVE TARGET'
  },
  {
    id: 'qpain',
    code: 'SYMP-01 // AI & PATTERN ANALYSIS',
    name: 'QPAIN',
    badge: 'SPECIALIZED FORUM',
    category: 'symposia',
    index: 'International Proceedings Series',
    focus: 'Pattern Recognition, Neural Networks, Deep Learning & Intelligent Systems',
    description: 'Specialized scientific forum addressing frontier advances in pattern analysis and intelligent computing.',
    status: 'RESEARCH PHASE'
  },
  {
    id: 'idaa',
    code: 'SYMP-02 // DATA SCIENCE',
    name: 'IDAA',
    badge: 'SCOPUS / SPRINGER',
    category: 'symposia',
    index: 'Scopus, Springer Series',
    focus: 'Data Mining, Predictive Analytics & Computational Intelligence',
    description: 'International symposium addressing applied machine learning, big data architectures, and informatics.',
    status: 'RESEARCH PHASE'
  },
  {
    id: 'atlantis',
    code: 'PUB-04 // SPRINGER NATURE',
    name: 'Atlantis Press',
    badge: 'OPEN ACCESS SERIES',
    category: 'publishers',
    index: 'Advances in Computer Science Research',
    focus: 'Computational Algorithms, Information Systems, Software Architecture',
    description: 'Part of Springer Nature, publishing high-quality open-access proceedings and academic monographs in computer science.',
    status: 'ACTIVE TARGET'
  }
];

export default function ResearchTeamsPipeline({ teams = [] }) {
  const openVenueModal = (idx) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-abstract-modal', { detail: idx }));
    }
  };

  const openApply = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  // Top 4 flagship venues for the landing page showcase
  const flagshipVenues = VENUES_DATA.slice(0, 4);

  return (
    <section id="venues" className="bg-obsidian bg-grid-dark text-white py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + Link to full directory */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
              [ 04 / PUBLICATION TARGETS ]
            </div>
            <h2 className="font-display-tight font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
              Target Venues &amp; Proceedings
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Fellows target peer-reviewed IEEE, Springer Nature, and ACM conferences with reproducible codebases.
            </p>
          </div>

          <Link
            href="/venues"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-cobalt hover:text-white transition-colors cursor-pointer group"
          >
            <span>View All 8 Venues &amp; Indexing</span>
            <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Flagship Venues Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {flagshipVenues.map((venue, idx) => (
            <article
              key={venue.id}
              className="rounded-3xl bg-obsidianSurface border border-obsidianBorder hover:border-cobalt/60 p-7 sm:p-8 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-cobalt/15 text-cobalt border border-cobalt/30 font-semibold">
                    {venue.badge}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{venue.code}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white group-hover:text-cobaltGlow transition-colors mb-2 leading-snug">
                  {venue.name}
                </h3>

                <div className="font-mono text-xs text-cobalt mb-3 flex items-center gap-2">
                  <span className="font-semibold">INDEX:</span>
                  <span className="text-zinc-300">{venue.index}</span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {venue.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="font-mono text-[11px] text-zinc-400">
                  STATUS: <span className="text-white font-semibold">{venue.status}</span>
                </div>
                <button
                  onClick={() => openVenueModal(idx)}
                  className="text-xs font-semibold text-white hover:text-cobalt flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inspect Scope</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Streamlined Authorship & Callout Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-cobalt/20 via-obsidianSurface to-obsidianSurface border border-cobalt/30 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cobalt font-semibold">
              <FiShield size={16} />
              <span>STRICT MERIT-BASED AUTHORSHIP POLICY</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Zero Gift Authorship. Real Scientific Contribution.
            </h3>
            <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
              Authorship is awarded strictly based on research contribution, technical implementation, and writing synthesis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/venues"
              className="px-6 py-3.5 rounded-full glass-badge hover:bg-white/[0.08] text-zinc-200 text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              Full Directory
            </Link>
            <button
              onClick={openApply}
              className="px-6 py-3.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-cobalt/25 whitespace-nowrap cursor-pointer active:scale-95 text-center"
            >
              Apply to Cohort &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
