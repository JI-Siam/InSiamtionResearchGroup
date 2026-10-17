'use client'

import { useEffect, useRef, useState } from 'react';

export default function CounterStat({ end, duration = 2000, prefix = '', suffix = '', label, subtext }) {
  const targetNumber = typeof end === 'number' ? end : parseInt(end, 10) || 0;
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // If reduced motion is requested, immediately set target
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.requestAnimationFrame(() => setCount(targetNumber));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOutProgress * targetNumber));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetNumber);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [targetNumber, duration]);

  return (
    <div ref={elementRef} className="flex flex-col items-start p-4 md:p-6 rounded-xl glass-panel glass-panel-hover border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none rounded-bl-full transition-transform duration-500 group-hover:scale-125" />
      <div className="flex items-baseline gap-1 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
        <span>{prefix}</span>
        <span className="text-gradient-cyan">{count}</span>
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm md:text-base font-semibold text-slate-200 tracking-wide">
        {label}
      </div>
      {subtext && (
        <div className="mt-1 text-xs text-slate-400 leading-relaxed">
          {subtext}
        </div>
      )}
    </div>
  );
}
