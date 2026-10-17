'use client'

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCheck, FiTarget, FiCompass } from 'react-icons/fi';

export default function AboutSection({ about, purpose, vision }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    // Refresh trigger measurements
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const goals = about?.goals || [
    "Unite bright, dedicated, and growth-oriented students",
    "Mentor aspiring researchers and develop academic leaders",
    "Create a culture of innovation, collaboration, and excellence within the AIUB community",
    "Publish high-quality journal and conference papers"
  ];

  const aims = purpose?.aims || [
    "Build strong research teams",
    "Mentor future researchers",
    "Encourage interdisciplinary collaboration",
    "Help students gain publication experience",
    "Develop real-world research and communication skills",
    "Create opportunities for academic and professional growth"
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[#050B14] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Editorial Eyebrow */}
        <div className="about-reveal max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <FiCompass />
            <span>01 // Academic Identity</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Bridging the Gap Between Student Potential and{' '}
            <span className="text-gradient-cyan">Global Publication</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {about?.summary ||
              "InSiamtion Research Group (IRG) is a student-led research organization founded by students of American International University-Bangladesh that builds a collaborative ecosystem for passionate and capable researchers."}
          </p>
        </div>

        {/* Narrative & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Context & Vision */}
          <div className="lg:col-span-6 space-y-6 about-reveal">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                The Context & Problem
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {purpose?.context ||
                  "Many students have strong technical skills, innovative ideas, research interest, and academic potential but often lack a reliable research team, proper mentorship, collaborative opportunities, research workflow experience, and guidance for publication."}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-slate-900/60 relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-2 flex items-center gap-2">
                <FiTarget className="text-cyan-400" />
                <span>Our Vision</span>
              </div>
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                &ldquo;{vision ||
                  "To create one of the most impactful student-led research communities within AIUB that empowers talented students through mentorship, teamwork, and high-quality research contributions."}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Lab Image and Visual Evidence */}
          <div className="lg:col-span-6 about-reveal">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-white/15 via-cyan-500/20 to-indigo-500/20 shadow-2xl overflow-hidden group">
              <div className="relative rounded-[14px] overflow-hidden aspect-[16/11] bg-slate-950">
                <Image
                  src="/images/experiment_lab.jpg"
                  alt="Student researchers collaborating in computational laboratory"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    AIUB STUDENT RESEARCH PLATFORM
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Hands-on Experimentation & Algorithmic Discovery
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Structured workflows designed to turn student ideas into camera-ready conference papers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Goals Grid */}
        <div className="about-reveal mt-8">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-6 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-cyan-400" />
            <span>Core Pillars & Strategic Objectives</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl glass-panel glass-panel-hover border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-cyan-400 mb-3 flex items-center justify-between">
                    <span>PILLAR 0{idx + 1}</span>
                    <FiCheck className="text-emerald-400 text-sm" />
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base font-medium leading-snug group-hover:text-white transition-colors">
                    {goal}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Objective Validated</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Key Aims Strip */}
        <div className="about-reveal mt-10 p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 bg-slate-900/40">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-4">
            Operational Aims
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aims.map((aim, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-300 flex items-center justify-center text-xs font-mono shrink-0">
                  {i + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-medium">{aim}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
