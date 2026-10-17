'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX, FiExternalLink, FiCompass, FiUsers, FiBookOpen, FiAward, FiHeart, FiArrowRight } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';

const NAV_LINKS = [
  { href: '#about', label: 'About', icon: FiCompass },
  { href: '#teams', label: 'Research Teams', icon: FiUsers },
  { href: '#publications', label: 'Publications & Venues', icon: FiBookOpen },
  { href: '#mentorship', label: 'Mentorship', icon: FiAward },
  { href: '#why-join-us', label: 'Why Join Us', icon: FiHeart },
  { href: '#values', label: 'Ethics & Values', icon: FiAward },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Robust scrollspy
      const sections = ['about', 'teams', 'publications', 'mentorship', 'why-join-us', 'values'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPosition) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled ? 'py-3 bg-[#050B14]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20' : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Lab Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/30 p-1 border border-cyan-400/30 shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="InSiamtion Research Group Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  IRG
                </span>
              </div>
              <span className="hidden md:inline-block text-[11px] text-slate-400 tracking-wider">
                InSiamtion Research Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 relative ${isActive
                      ? 'text-cyan-300 bg-cyan-500/15 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://discord.gg/5UQXTqJy7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 group"
            >
              <FaDiscord className="text-base text-[#5865F2] group-hover:scale-110 transition-transform" />
              <span>Discord Lab</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </a>

            <a
              href="#teams"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Explore Teams</span>
              <FiArrowRight className="text-xs" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white hover:border-cyan-500/40 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050B14]/95 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              Navigation
            </div>
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3.5 rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-white/5 border border-transparent hover:border-white/10 text-base font-medium transition"
                >
                  <Icon className="text-cyan-400 text-lg" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://discord.gg/5UQXTqJy7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/40 text-slate-100 font-semibold text-sm"
            >
              <FaDiscord className="text-lg text-[#5865F2]" />
              <span>Join Research Discord</span>
              <FiExternalLink className="text-xs opacity-70" />
            </a>
            <a
              href="#teams"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20"
            >
              <span>Explore Research Teams</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
