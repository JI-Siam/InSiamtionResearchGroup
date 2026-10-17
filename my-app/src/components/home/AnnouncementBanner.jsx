'use client'

import { FaDiscord } from 'react-icons/fa6';
import { FiAlertCircle, FiCheckCircle, FiExternalLink, FiTerminal } from 'react-icons/fi';

export default function AnnouncementBanner({ announcement }) {
  if (!announcement || (!announcement.summary && !announcement.details)) return null;

  const urlMatch = announcement.details && announcement.details.match(/https?:\/\/[^\s]+/);
  const discordUrl = urlMatch ? urlMatch[0] : 'https://discord.gg/5UQXTqJy7';

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 container">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-emerald-500/30 shadow-2xl">
        <div className="rounded-[15px] bg-slate-900/90 backdrop-blur-xl p-5 sm:p-6 lg:p-7 border border-white/5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Status Indicator */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-400">
                <FiTerminal className="text-xl sm:text-2xl" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Cohort Active
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    CURRENT DISCORD CYCLE
                  </span>
                </div>

                <h2 className="font-display font-bold text-base sm:text-lg text-white mb-1">
                  {announcement.summary}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {announcement.details}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-[#5865F2]/25 hover:shadow-[#5865F2]/40 hover:scale-[1.02]"
              >
                <FaDiscord className="text-base" />
                <span>Join Discord Sessions</span>
                <FiExternalLink className="text-xs opacity-75" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
