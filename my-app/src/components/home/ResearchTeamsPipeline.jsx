'use client'

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiUsers, FiEdit3, FiCpu, FiCompass, FiCheckCircle, FiLayers, FiArrowRight } from 'react-icons/fi';

const TEAM_METADATA = [
  {
    id: 'idea',
    teamIndex: 0,
    tag: 'PHASE 01 // DISCOVERY & HYPOTHESIS',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    icon: FiCompass,
    image: '/images/neural_mesh_hero.jpg',
    description:
      'The intellectual engine that scans current scientific literature to uncover impactful research gaps, formulates novel research questions, and engineers structured proposals.',
    deliverables: [
      'Research Gap Identification & Problem Formulation',
      'Literature Survey & Theoretical Frameworks',
      'Methodology & Algorithmic Blueprinting',
      'Formal Proposal & Study Feasibility'
    ]
  },
  {
    id: 'execution',
    teamIndex: 1,
    tag: 'PHASE 02 // TECHNICAL VALIDATION',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    icon: FiCpu,
    image: '/images/experiment_lab.jpg',
    description:
      'The computational powerhouse that implements algorithms, conducts extensive experiments, trains machine learning models, and extracts rigorous empirical performance metrics.',
    deliverables: [
      'Model Implementation & Algorithmic Pipelines',
      'High-Performance Experimentation & GPU Workloads',
      'Statistical Data Analytics & Performance Metrics',
      'Empirical Validation & Benchmark Comparison'
    ]
  },
  {
    id: 'writing',
    teamIndex: 2,
    tag: 'PHASE 03 // DISSEMINATION & SYNTHESIS',
    badgeColor: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
    icon: FiEdit3,
    image: '/images/literature_review.jpg',
    description:
      'The editorial laboratory that translates technical breakthroughs into camera-ready manuscripts formatted strictly to IEEE, Springer Nature, and conference standards.',
    deliverables: [
      'Academic Writing & Literature Synthesis',
      'IEEE / Springer LaTeX & Word Formatting',
      'BibTeX & Citation Integrity Verification',
      'Reviewer Response & Camera-Ready Finalization'
    ]
  }
];

export default function ResearchTeamsPipeline({ teams = [] }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pipeline-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="teams"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 relative bg-[#050B14] overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <FiUsers />
            <span>02 // Research Architecture</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Three Specialized Labs.{' '}
            <span className="text-gradient-cyan">One Scientific Pipeline.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Rather than working in isolation, IRG researchers collaborate within three synchronized teams that take a concept from theoretical hypothesis through empirical execution to peer-reviewed publication.
          </p>
        </div>

        {/* Workflow Pipeline Breadcrumb */}
        <div className="mb-12 p-4 rounded-xl glass-panel border border-white/10 hidden md:flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-amber-300 font-semibold">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">01</span>
            <span>Idea & Proposal Development</span>
          </div>
          <span className="text-slate-600">┈┈┈┈►</span>
          <div className="flex items-center gap-2 text-cyan-300 font-semibold">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">02</span>
            <span>Execution & Experimentation</span>
          </div>
          <span className="text-slate-600">┈┈┈┈►</span>
          <div className="flex items-center gap-2 text-violet-300 font-semibold">
            <span className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-[10px]">03</span>
            <span>Writing, Formatting & Peer Review</span>
          </div>
        </div>

        {/* 3 Specialized Lab Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TEAM_METADATA.map((meta, idx) => {
            // Find corresponding team from data
            const matchingTeam = teams.find(
              (t) =>
                (meta.id === 'idea' && t.name.toLowerCase().includes('idea')) ||
                (meta.id === 'execution' && t.name.toLowerCase().includes('execution')) ||
                (meta.id === 'writing' && t.name.toLowerCase().includes('writing'))
            ) || teams[idx] || {};

            const Icon = meta.icon;

            return (
              <div
                key={meta.id}
                className="pipeline-card rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={meta.image}
                    alt={matchingTeam?.name || 'Research Team'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-[#0A1324]/40 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md ${meta.badgeColor}`}>
                      {meta.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 flex items-center justify-center text-white">
                    <Icon className="text-lg text-cyan-400" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {matchingTeam?.name || `Research Team 0${idx + 1}`}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {meta.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        Core Competencies
                      </div>
                      {meta.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                          <FiCheckCircle className="text-cyan-400 text-sm shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Composition Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-cyan-400">LEAD:</span>
                      <span className="text-slate-200 font-semibold">1 Team Lead</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-cyan-400">MEMBERS:</span>
                      <span className="text-slate-200 font-semibold">4–5 Researchers</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
