'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUp, FiExternalLink, FiCompass, FiShield, FiHeart } from 'react-icons/fi';
import { FaDiscord, FaGithub } from 'react-icons/fa6';

export default function Footer({ org, longTermGoals = [] }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03070E] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 text-xs">
      {/* Ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Institution Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 p-1 border border-cyan-400/30 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="IRG Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-base text-white tracking-tight">
                  InSiamtion Research Group
                </span>
                <span className="block text-[11px] text-cyan-400 font-mono">
                  IRG // Students from AIUB
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              An independent student-led research and mentorship community founded by students from American International University-Bangladesh (AIUB). Inspiring the next generation of researchers, building collaborative teams, and producing high-impact publications.
            </p>

            <div className="pt-2 text-slate-400 text-[11px] space-y-1">
              <div>📍 Initiated by Students from AIUB • Dhaka, Bangladesh</div>
              <div className="text-cyan-400/80">Inspiring the Next Generation of Researchers</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-display font-semibold text-sm tracking-wide">
              Research Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  Academic Identity & Mission
                </a>
              </li>
              <li>
                <a href="#teams" className="hover:text-cyan-300 transition-colors">
                  Three Specialized Research Labs
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-cyan-300 transition-colors">
                  IEEE & Springer Publication Venues
                </a>
              </li>
              <li>
                <a href="#mentorship" className="hover:text-cyan-300 transition-colors">
                  Senior Mentorship Framework
                </a>
              </li>
              <li>
                <a href="#why-join-us" className="hover:text-cyan-300 transition-colors">
                  Why Capable Students Join Us
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-cyan-300 transition-colors">
                  Ethics, Policies & Authorship
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Lab Community */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-white font-display font-semibold text-sm tracking-wide">
              Active Community
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Research cohort training sessions, reading groups, and weekly syncs happen actively on Discord.
            </p>

            <a
              href="https://discord.gg/5UQXTqJy7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-xs transition-all shadow-md shadow-[#5865F2]/20"
            >
              <FaDiscord className="text-base" />
              <span>Join Research Discord</span>
              <FiExternalLink className="text-[10px]" />
            </a>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400">
              <span className="text-cyan-400 font-mono font-semibold">MOTTO:</span> Growing Researchers. Creating Impact.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} InSiamtion Research Group (IRG). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">Student-Led Scientific Research</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors border border-white/5"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <FiArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
