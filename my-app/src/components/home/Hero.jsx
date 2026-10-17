'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScientificConstellation from '@/components/canvas/ScientificConstellation';
import CounterStat from '@/components/common/CounterStat';
import { FiArrowRight, FiBookOpen, FiCpu, FiLayers, FiShield } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';

export default function Hero({ org, about, announcement }) {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
        .fromTo(textRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo(visualRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.2 }, '-=0.7')
        .fromTo(statsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden border-b border-white/5 bg-[#050B14]"
    >
      {/* 3D Scientific Background */}
      <ScientificConstellation />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 scientific-grid pointer-events-none opacity-40" />

      <div className="container relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Cohort Status Pill */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 backdrop-blur-md mb-6 shadow-lg shadow-cyan-950/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-200 tracking-wide">
                Active Cohort: 10 Researchers in Session • AIUB
              </span>
            </div>

            {/* Title */}
            <div ref={headingRef}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.08] mb-4">
                Growing Researchers.{' '}
                <span className="text-gradient-cyan block sm:inline">Creating Impact.</span>
              </h1>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-cyan-400" />
                {org?.fullName || 'InSiamtion Research Group'} — {org?.shortForm || 'IRG'}
              </p>
            </div>

            {/* Description */}
            <p
              ref={textRef}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              {about?.summary ||
                'A student-led research and mentorship organization founded by students of American International University-Bangladesh (AIUB) bridging the gap between student potential and peer-reviewed scientific publications.'}
            </p>

            {/* Interactive CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a href="#teams" className="btn-primary-scientific group w-full sm:w-auto justify-center">
                <span>Explore Research Teams</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a href="#publications" className="btn-outline-scientific w-full sm:w-auto justify-center">
                <FiBookOpen className="text-cyan-400" />
                <span>Publication Venues</span>
              </a>

              <a
                href="https://discord.gg/5UQXTqJy7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#5865F2]/40 transition w-full sm:w-auto"
              >
                <FaDiscord className="text-[#5865F2] text-base" />
                <span>Discord Training Lab</span>
              </a>
            </div>

            {/* Scientific Trust Tokens */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <FiCpu className="text-cyan-400 text-sm" />
                <span>AI, ML & Computing Rigor</span>
              </div>
              <div className="flex items-center gap-2">
                <FiLayers className="text-indigo-400 text-sm" />
                <span>Peer-to-Peer Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <FiShield className="text-emerald-400 text-sm" />
                <span>Ethical Authorship Standard</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-cyan-500/30 via-white/10 to-indigo-500/30 shadow-2xl shadow-cyan-950/40">
                <div className="relative rounded-[14px] overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[4/3] group">
                  <Image
                    src="/images/neural_mesh_hero.jpg"
                    alt="Scientific neural computational mesh visualization"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/30 to-transparent" />

                  {/* Scientific Overlay Details */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                    IRG LAB // NETWORK NODE 01
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span className="font-semibold text-white">Neural Cluster Modeling</span>
                      <span className="text-cyan-400 font-mono text-[11px]">ACTIVE EXPERIMENT</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      Experimental design across IEEE, Springer Nature, and leading computing conference tracks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Lab Emblem Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 p-3 sm:p-4 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center overflow-hidden p-1">
                  <Image
                    src="/logo.png"
                    alt="IRG Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">InSiamtion Research</div>
                  <div className="text-[10px] sm:text-xs text-cyan-300">AIUB Student-Led Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verifiable Key Metrics Strip */}
        <div ref={statsRef} className="mt-16 sm:mt-24 pt-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <CounterStat
              end={40}
              suffix="+"
              label="Candidates Evaluated"
              subtext="Competitive application pool"
            />
            <CounterStat
              end={10}
              label="Selected Researchers"
              subtext="Selected for current cycle"
            />
            <CounterStat
              end={3}
              label="Specialized Labs"
              subtext="Idea, Execution & Writing"
            />
            <CounterStat
              end={7}
              suffix="+"
              label="Target Venues"
              subtext="IEEE, Springer, ICCIT, ICECTE"
            />
            <div className="col-span-2 sm:col-span-1">
              <CounterStat
                end={10}
                prefix="6–"
                suffix="h"
                label="Weekly Commitment"
                subtext="Rigorous research dedication"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors group"
            aria-label="Scroll to About Section"
          >
            <span className="text-[10px] uppercase tracking-widest font-mono">Explore Research</span>
            <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors">
              <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
