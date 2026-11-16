'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';

export default function Footer({ org, longTermGoals = [] }) {
  const openApply = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-offwhite text-obsidian pt-14 sm:pt-16 pb-10 sm:pb-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 sm:pb-12 border-b border-zinc-200">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2 sm:mb-3 font-semibold">
              FOUNDED BY AIUB STUDENTS
            </div>
            <div className="font-display-tight font-bold uppercase text-3xl sm:text-5xl lg:text-6xl text-obsidian tracking-tight">
              INSIAMTION<br />RESEARCH GROUP
            </div>
            <p className="font-mono text-xs text-zinc-500 mt-2 max-w-sm">
              GROWING RESEARCHERS. CREATING IMPACT. • DHAKA, BANGLADESH
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-6 sm:gap-12 text-sm w-full md:w-auto">
            <div className="space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Navigation</div>
              <ul className="space-y-1.5 font-medium text-xs sm:text-sm">
                <li>
                  <Link href="/#mission" className="hover:text-cobalt transition-colors inline-block hover:translate-x-1 duration-200">
                    Mission &amp; Purpose
                  </Link>
                </li>
                <li>
                  <Link href="/#teams" className="hover:text-cobalt transition-colors inline-block hover:translate-x-1 duration-200">
                    The 3 Specialized Labs
                  </Link>
                </li>
                <li>
                  <Link href="/#why-join" className="hover:text-cobalt transition-colors inline-block hover:translate-x-1 duration-200">
                    Why Capable Students Flourish
                  </Link>
                </li>
                <li>
                  <Link href="/venues" className="hover:text-cobalt transition-colors inline-flex items-center gap-1 hover:translate-x-1 duration-200 group">
                    <span>Venues Directory</span>
                    <FiArrowUpRight size={13} className="text-zinc-400 group-hover:text-cobalt transition-colors" />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cobalt transition-colors inline-flex items-center gap-1 hover:translate-x-1 duration-200 group">
                    <span>Charter &amp; Ethics</span>
                    <FiArrowUpRight size={13} className="text-zinc-400 group-hover:text-cobalt transition-colors" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Community &amp; Cohort</div>
              <ul className="space-y-1.5 font-medium text-xs sm:text-sm">
                <li>
                  <button onClick={openApply} className="hover:text-cobalt transition-colors cursor-pointer text-left hover:translate-x-1 duration-200">
                    Cohort Status / Apply
                  </button>
                </li>
                <li>
                  <a
                    href="https://discord.gg/5UQXTqJy7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cobalt transition-colors inline-flex items-center gap-1 hover:translate-x-1 duration-200"
                  >
                    <span>Discord Community</span>
                    <FiArrowUpRight size={13} className="text-zinc-400" />
                  </a>
                </li>
                <li>
                  <button onClick={openApply} className="hover:text-cobalt transition-colors cursor-pointer text-left hover:translate-x-1 duration-200">
                    Professor Outreach
                  </button>
                </li>
              </ul>
            </div>

            {/* Back to Top Interactive Button */}
            <div className="col-span-2 sm:col-span-1 sm:self-end flex sm:justify-end">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-300 hover:border-cobalt/60 bg-white shadow-sm hover:shadow-md hover:text-cobalt transition-all cursor-pointer font-mono text-xs"
              >
                <span>Back to top</span>
                <FiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 font-mono text-[11px] sm:text-xs text-zinc-500">
          <div>&copy; {new Date().getFullYear()} InSiamtion Research Group (IRG) • AIUB. All rights reserved.</div>
          <div className="tracking-wider">EMPIRICAL RIGOR • OPEN SCIENCE • GLOBAL GRADUATE PATHWAYS</div>
        </div>
      </div>
    </footer>
  );
}
