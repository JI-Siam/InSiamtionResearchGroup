'use client'

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Modals from '@/components/home/Modals';
import { VENUES_DATA } from '@/components/home/ResearchTeamsPipeline';
import { FiBookOpen, FiShield, FiExternalLink, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';

export default function VenuesPage() {
  const openApply = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  const openVenueModal = (idx) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-abstract-modal', { detail: idx }));
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-offwhite flex flex-col selection:bg-cobalt selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-4">
              <span className="w-2 h-2 rounded-full bg-cobalt pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
                IRG ACADEMIC DIRECTORY // VENUES
              </span>
            </div>
            <h1 className="font-display-tight font-bold text-4xl sm:text-6xl lg:text-7xl text-white mb-4">
              Publication Venues &amp; Proceedings
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              InSiamtion Research Group submits exclusively to reputable peer-reviewed conferences, symposiums, and publishers. Explore our active target venues, indexing scopes, and authorship ethics.
            </p>
          </div>

          {/* Complete 8 Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {VENUES_DATA.map((venue, idx) => (
              <article
                key={venue.id}
                className="rounded-3xl bg-obsidianSurface border border-obsidianBorder hover:border-cobalt/60 p-7 sm:p-8 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-cobalt/15 text-cobalt border border-cobalt/30 font-semibold">
                      {venue.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">{venue.code}</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-white group-hover:text-cobaltGlow transition-colors mb-2">
                    {venue.name}
                  </h2>

                  <div className="font-mono text-xs text-cobalt mb-3 flex items-center gap-1.5">
                    <span>INDEXING:</span>
                    <span className="text-zinc-300">{venue.index}</span>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {venue.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-obsidian/70 border border-white/5 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                      TECHNICAL FOCUS &amp; SCOPE
                    </div>
                    <div className="text-xs text-zinc-300">
                      {venue.focus}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="font-mono text-xs text-zinc-400">
                    STATUS: <span className="text-white font-semibold">{venue.status}</span>
                  </div>
                  <button
                    onClick={() => openVenueModal(idx)}
                    className="text-xs font-semibold text-white hover:text-cobalt flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Scope Details</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Ethical Authorship Policy Deep-Dive */}
          <div className="rounded-3xl bg-obsidianSurface border border-white/10 p-8 sm:p-12 mb-16">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
              <FiShield size={16} />
              <span>ACADEMIC INTEGRITY &amp; AUTHORSHIP POLICY</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ethical Standards &amp; Plagiarism Zero-Tolerance
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mb-8">
              At IRG, authors must earn their name on the paper through substantial technical, writing, or experimental contribution. We uphold fairness, transparency, and strict adherence to IEEE, Springer, and ACM ethical guidelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'Contribution Quality',
                  desc: 'Authorship order reflects substantive intellectual contribution, model design, and experimental workload.'
                },
                {
                  title: 'Zero Gift Authorship',
                  desc: 'No individual is granted honorary authorship without active participation and tangible deliverables.'
                },
                {
                  title: 'Plagiarism Screening',
                  desc: 'All manuscripts undergo automated cross-checking and citation auditing prior to formal submission.'
                },
                {
                  title: 'Reproducible Code',
                  desc: 'Code repositories and benchmark seeds must be preserved for peer-review verification and public release.'
                }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="font-mono text-xs font-semibold text-cobalt mb-2">PRINCIPLE 0{i + 1}</div>
                  <h3 className="font-display font-bold text-base text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Callout */}
          <div className="rounded-3xl bg-gradient-to-r from-cobalt/25 via-obsidianSurface to-obsidianSurface border border-cobalt/40 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-cobalt mb-1.5 font-semibold">
                [ READY TO SUBMIT HIGH-IMPACT RESEARCH? ]
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Join an IRG Lab Team Targeting These Venues
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
                Collaborate with dedicated fellows and senior mentors to take your research from gap formulation to conference publication.
              </p>
            </div>
            <button
              onClick={openApply}
              className="px-7 py-3.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-white text-sm font-semibold transition-all shadow-lg shadow-cobalt/30 whitespace-nowrap cursor-pointer active:scale-95"
            >
              Apply for Next Cycle &rarr;
            </button>
          </div>

        </div>
      </main>

      <Footer />
      <Modals />
    </div>
  );
}
