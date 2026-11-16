'use client'

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Modals from '@/components/home/Modals';
import { FiCompass, FiCpu, FiEdit3, FiShield, FiLock, FiClock, FiUsers, FiAward } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';

export default function AboutPage() {
  const openApply = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
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
                ORGANIZATIONAL CHARTER // CONSTITUTION
              </span>
            </div>
            <h1 className="font-display-tight font-bold text-4xl sm:text-6xl lg:text-7xl text-white mb-4">
              Academic Identity &amp; Culture
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              InSiamtion Research Group (IRG) is an independent student-led research and mentorship organization founded by students of American International University-Bangladesh (AIUB), mentored by Jafir Islam Siam.
            </p>
          </div>

          {/* Mission & Vision Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            <div className="rounded-3xl bg-obsidianSurface border border-obsidianBorder p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
                  OUR CORE PURPOSE
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                  Bridging the Undergraduate Research Gap
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Many undergraduates have strong technical skills, innovative ideas, and academic interest, but lack a reliable research team, hands-on mentorship, and publication guidance.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  IRG provides the infrastructure, structured workflow, and collaborative peer community required to transform raw technical potential into peer-reviewed publications.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 font-mono text-xs text-zinc-500">
                DISCIPLINE &bull; METHODOLOGY &bull; PEER REVIEW
              </div>
            </div>

            <div className="rounded-3xl bg-obsidianSurface border border-obsidianBorder p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
                  LONG-TERM VISION
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                  Creating a Lasting Research Legacy
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  To establish one of the most impactful student-led research ecosystems within AIUB and Bangladesh, empowering students to represent our academic community on global stages.
                </p>
                <div className="space-y-2 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                    <span>Publish high-quality journal and conference papers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                    <span>Develop future researchers and academic leaders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                    <span>Build international MSc/PhD professor bridges</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 font-mono text-xs text-zinc-500">
                GROWING RESEARCHERS. CREATING IMPACT.
              </div>
            </div>
          </div>

          {/* Mentorship Framework & Senior Guidance */}
          <div className="rounded-3xl bg-obsidianSurface border border-white/10 p-8 sm:p-12 mb-16">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
              <FiAward size={16} />
              <span>MENTORSHIP ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Senior-to-Junior Research Mentorship
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mb-8">
              IRG is mentorship-driven. Senior members and team leaders guide junior researchers through the complete paper lifecycle, conduct weekly learning sprints, and review code implementations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Hands-On Guidance',
                  desc: 'Senior researchers assist in paper reading, mathematical notation, and structuring clear problem formulations.'
                },
                {
                  title: 'Discord Learning Hub',
                  desc: 'Weekly syncs, literature reviews, and code debugging sessions happen collaboratively on our dedicated server.'
                },
                {
                  title: 'Ethical Peer Review',
                  desc: 'Constructive internal review rounds prepare manuscripts before submission to IEEE and Springer venues.'
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="font-mono text-xs text-cobalt font-semibold mb-2">PILLAR 0{i + 1}</div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 8 Core Values Detailed Grid */}
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold mb-3">
              OUR 8 FOUNDATIONAL VALUES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-8">
              Guiding Principles of IRG Fellows
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Collaboration', desc: 'Research is stronger when minds combine. We share insights openly within teams.' },
                { name: 'Integrity', desc: 'Unwavering commitment to truth in data, authentic citations, and zero falsification.' },
                { name: 'Innovation', desc: 'Pursuing novel hypotheses and tackling unaddressed research gaps with ambition.' },
                { name: 'Discipline', desc: 'Consistency over bursts. Dedicating 6–10 structured hours every week.' },
                { name: 'Growth', desc: 'Skill advancement matters as much as publication. Learning is continuous.' },
                { name: 'Accountability', desc: 'Honoring sprint deadlines, transparent communication, and team reliability.' },
                { name: 'Mentorship', desc: 'Every experienced member actively uplifts and trains junior researchers.' },
                { name: 'Excellence', desc: 'Crafting publication-grade figures, clean code, and pristine LaTeX manuscripts.' }
              ].map((val, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-obsidianSurface border border-obsidianBorder hover:border-cobalt/40 transition-colors">
                  <div className="font-mono text-xs text-cobalt font-semibold mb-2">0{idx + 1}</div>
                  <h3 className="font-display font-bold text-lg text-white mb-1.5">{val.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Expectations & Confidentiality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="rounded-3xl bg-obsidianSurface border border-white/10 p-8 sm:p-10">
              <div className="flex items-center gap-2 text-cobalt font-mono text-xs uppercase tracking-wider font-semibold mb-4">
                <FiClock size={15} />
                <span>MEMBERSHIP EXPECTATIONS</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Fellowship Responsibilities
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-1.5 shrink-0" />
                  <span>Dedicate 6–10 hours weekly to active research activities and sprint tasks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-1.5 shrink-0" />
                  <span>Participate actively in weekly Discord research meetings and syncs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-1.5 shrink-0" />
                  <span>Maintain professionalism, communicate blockers transparently, and support peers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-1.5 shrink-0" />
                  <span>Continuously improve technical skills across Python, PyTorch, and LaTeX</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-obsidianSurface border border-white/10 p-8 sm:p-10">
              <div className="flex items-center gap-2 text-cobalt font-mono text-xs uppercase tracking-wider font-semibold mb-4">
                <FiLock size={15} />
                <span>CONFIDENTIALITY &amp; IP POLICY</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Protection of Unpublished Research
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                All pre-publication materials—including novel research ideas, draft manuscripts, experimental logs, and architectural discussions—remain strictly confidential until camera-ready release.
              </p>
              <div className="p-4 rounded-xl bg-cobalt/10 border border-cobalt/20 text-xs text-zinc-200">
                Zero unauthorized external disclosure of ongoing research is permitted. Academic misconduct or plagiarism leads to immediate termination.
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-cobalt/25 via-obsidianSurface to-obsidianSurface border border-cobalt/40 p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-cobalt mb-1.5 font-semibold">
                [ JOIN THE INSIAMTION COLLECTIVE ]
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Interested in Joining Upcoming Cycles?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
                We welcome dedicated AIUB undergraduates who want to build real projects, publish conference research, and grow under focused mentorship.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://discord.gg/5UQXTqJy7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full glass-badge hover:bg-white/[0.08] text-zinc-200 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <FaDiscord className="text-cobalt text-base" />
                <span>Join Discord</span>
              </a>
              <button
                onClick={openApply}
                className="px-7 py-3.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-white text-xs font-semibold transition-all shadow-lg shadow-cobalt/30 whitespace-nowrap cursor-pointer active:scale-95"
              >
                Apply for Next Cycle &rarr;
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <Modals />
    </div>
  );
}
