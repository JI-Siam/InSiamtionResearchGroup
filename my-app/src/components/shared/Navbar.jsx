'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const NAV_LINKS = [
  { href: '/#mission', label: 'Mission' },
  { href: '/#teams', label: '3 Labs' },
  { href: '/#why-join', label: 'Why Join' },
  { href: '/venues', label: 'Venues', external: true },
  { href: '/about', label: 'About & Ethics', external: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 24);
    });
  }, [scrollY]);

  const openApply = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  return (
    <>
      {/* Top Hairline Kinetic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cobalt via-cobaltGlow to-sky-400 origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        style={{ scaleX }}
      />

      <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-obsidian/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50' 
                : 'glass-badge'
            }`}
          >
            {/* Real Brand Logo Image + Wordmark */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <motion.div 
                whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.3 }}
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-white/[0.04] p-1 border border-white/10 shadow-md flex items-center justify-center shrink-0"
              >
                <Image
                  src="/logo.png"
                  alt="InSiamtion Research Group Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white leading-none group-hover:text-cobaltGlow transition-colors">
                  INSIAMTION
                </span>
                <span className="font-mono text-[8.5px] sm:text-[10px] uppercase tracking-widest text-zinc-400 mt-0.5 truncate max-w-[120px] sm:max-w-none">
                  Research Group • AIUB
                </span>
              </div>
            </Link>

            {/* Center Pill-Enclosed Navigation Links with Smooth Moving Indicator */}
            <div 
              onMouseLeave={() => setHoveredIdx(null)}
              className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/[0.07] rounded-full p-1 relative"
            >
              {NAV_LINKS.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="relative px-4 py-1.5 rounded-full text-[13px] font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 z-10"
                >
                  <span>{item.label}</span>
                  {item.external && (
                    <FiArrowUpRight size={13} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  )}

                  {hoveredIdx === idx && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right High-Contrast CTA Pill with Interactive Spring Physics */}
            <div className="flex items-center gap-2 shrink-0">
              <motion.button
                onClick={openApply}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-white text-xs sm:text-sm font-semibold tracking-tight transition-colors shadow-lg shadow-cobalt/25 cursor-pointer whitespace-nowrap"
              >
                <span className="hidden sm:inline">Cohort Status / </span>Apply
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </motion.button>
            </div>
          </motion.nav>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="lg:hidden mt-2 p-4 rounded-3xl bg-obsidian/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-2 text-sm"
              >
                <Link
                  href="/#mission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-zinc-200 hover:bg-white/10 transition-colors"
                >
                  Mission &amp; Purpose
                </Link>
                <Link
                  href="/#teams"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-zinc-200 hover:bg-white/10 transition-colors"
                >
                  The 3 Specialized Labs
                </Link>
                <Link
                  href="/#why-join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-zinc-200 hover:bg-white/10 transition-colors"
                >
                  Why Capable Students Flourish
                </Link>
                <Link
                  href="/venues"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-zinc-200 hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>Publication Venues &amp; Indexing</span>
                  <FiArrowUpRight size={14} className="text-cobalt" />
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-zinc-200 hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>About &amp; Research Ethics</span>
                  <FiArrowUpRight size={14} className="text-cobalt" />
                </Link>
                <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openApply();
                    }}
                    className="w-full py-2.5 rounded-full bg-cobalt text-white font-semibold text-xs text-center cursor-pointer shadow-md shadow-cobalt/30"
                  >
                    Cohort Status / Apply
                  </motion.button>
                  <a
                    href="https://discord.gg/5UQXTqJy7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-white/10 text-zinc-200 font-semibold text-xs text-center hover:bg-white/15 transition-colors"
                  >
                    Join Discord Community
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
