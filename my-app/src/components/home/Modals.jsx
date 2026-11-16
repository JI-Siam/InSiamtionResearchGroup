'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiArrowRight, FiExternalLink, FiInfo } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa6';
import { VENUES_DATA } from './ResearchTeamsPipeline';

export default function Modals() {
  const [applyOpen, setApplyOpen] = useState(false);
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('Execution/Experimental Team');

  const [venueOpen, setVenueOpen] = useState(false);
  const [venueIndex, setVenueIndex] = useState(0);

  // Form input state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    departmentSemester: '',
    statement: ''
  });

  useEffect(() => {
    const handleOpenApply = (e) => {
      if (e?.detail?.team) {
        setSelectedTeam(e.detail.team);
      }
      setApplySubmitted(false);
      setApplyOpen(true);
    };

    const handleOpenVenue = (e) => {
      const idx = typeof e?.detail === 'number' ? e.detail : 0;
      setVenueIndex(idx);
      setVenueOpen(true);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setApplyOpen(false);
        setVenueOpen(false);
      }
    };

    window.addEventListener('open-apply-modal', handleOpenApply);
    window.addEventListener('open-abstract-modal', handleOpenVenue);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-apply-modal', handleOpenApply);
      window.removeEventListener('open-abstract-modal', handleOpenVenue);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySubmitted(true);
  };

  const closeApply = () => {
    setApplyOpen(false);
    setTimeout(() => setApplySubmitted(false), 300);
  };

  const closeVenue = () => {
    setVenueOpen(false);
  };

  const currentVenue = VENUES_DATA[venueIndex] || VENUES_DATA[0];

  const handleJoinFromVenue = () => {
    closeVenue();
    setSelectedTeam('Execution/Experimental Team');
    setApplySubmitted(false);
    setTimeout(() => {
      setApplyOpen(true);
    }, 150);
  };

  return (
    <>
      {/* =========================================================
           MODAL 1: APPLY TO IRG RESEARCH FELLOWSHIP / NEXT CYCLE
      ========================================================== */}
      <AnimatePresence>
        {applyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeApply();
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
              className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-obsidianSurface border border-white/15 p-5 sm:p-8 text-white shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeApply}
                aria-label="Close modal"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>

              {!applySubmitted ? (
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-cobalt mb-2 font-semibold">
                    [ IRG RESEARCH FELLOWSHIP &bull; AIUB ]
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                    Join InSiamtion Research Group
                  </h3>
                  
                  {/* Real Status Banner */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 flex items-start gap-3">
                    <FiInfo className="text-cobalt mt-0.5 shrink-0" size={18} />
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <strong className="text-white">Active Cycle:</strong> 10 researchers are currently active across our 3 teams. Applications submitted now will be considered for future cycles, or join our Discord for public reading groups.
                    </p>
                  </div>

                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3.5 rounded-xl bg-obsidian border border-white/10 text-sm sm:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-cobalt transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                          Academic Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="student-id@student.aiub.edu"
                          className="w-full px-4 py-3.5 rounded-xl bg-obsidian border border-white/10 text-sm sm:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-cobalt transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                          Department &amp; Semester
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.departmentSemester}
                          onChange={(e) => setFormData({ ...formData, departmentSemester: e.target.value })}
                          placeholder="e.g., 3rd Year BSc CSE"
                          className="w-full px-4 py-3.5 rounded-xl bg-obsidian border border-white/10 text-sm sm:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-cobalt transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                        Preferred Research Lab Team
                      </label>
                      <select
                        value={selectedTeam}
                        onChange={(e) => setSelectedTeam(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-obsidian border border-white/10 text-sm sm:text-base text-white focus:outline-none focus:border-cobalt transition-colors"
                      >
                        <option value="Execution/Experimental Team">
                          Execution &amp; Experimental Team (PyTorch / Data Analysis / Validation)
                        </option>
                        <option value="Idea Development and Proposal Team">
                          Idea Development &amp; Proposal Team (Literature Gap / Problem Formulation)
                        </option>
                        <option value="Writing and Formatting Team">
                          Writing &amp; Formatting Team (LaTeX Typesetting / Paper Synthesis)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                        Research Interest &amp; Technical Skills
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.statement}
                        onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                        placeholder="Briefly state your technical background (Python, PyTorch, LaTeX, etc.) and commitment (6–10h weekly)..."
                        className="w-full px-4 py-3.5 rounded-xl bg-obsidian border border-white/10 text-sm sm:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-cobalt transition-colors"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-white text-sm font-semibold transition-all shadow-lg shadow-cobalt/25 cursor-pointer active:scale-[0.99]"
                      >
                        Submit Application
                      </button>
                      <a
                        href="https://discord.gg/5UQXTqJy7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3.5 rounded-full glass-badge hover:bg-white/[0.08] text-zinc-200 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <FaDiscord className="text-cobalt" />
                        <span>Discord Server</span>
                      </a>
                    </div>
                  </form>
                </div>
              ) : (
                /* Instant Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cobalt/20 border border-cobalt/40 text-cobalt flex items-center justify-center mx-auto text-2xl font-bold">
                    <FiCheck size={28} />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold">
                    APPLICATION LOGGED &bull; IRG COHORT
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Welcome to the InSiamtion Pipeline
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.fullName || 'Researcher'}. Your details have been recorded for the upcoming cycle. Join our Discord community in the meantime to access public reading sessions and research updates.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href="https://discord.gg/5UQXTqJy7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                    >
                      <FaDiscord />
                      <span>Join Discord Community</span>
                    </a>
                    <button
                      onClick={closeApply}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      Return to Website
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
           MODAL 2: VENUE & PROCEEDINGS INSPECTOR
      ========================================================== */}
      <AnimatePresence>
        {venueOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeVenue();
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
              className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl bg-obsidianSurface border border-white/15 p-5 sm:p-8 text-white shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeVenue}
                aria-label="Close modal"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>

              <div className="font-mono text-xs uppercase tracking-widest text-cobalt mb-2 font-semibold">
                {currentVenue.code}
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2 leading-snug">
                {currentVenue.name}
              </h3>
              
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-5">
                <span>INDEXING:</span>
                <span className="text-cobalt font-semibold">{currentVenue.index}</span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-obsidian border border-white/10 mb-4 space-y-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-semibold">
                    VENUE DESCRIPTION &amp; RIGOR
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {currentVenue.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-semibold">
                    TECHNICAL FOCUS &amp; SCOPE
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {currentVenue.focus}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                <span className="font-mono text-[11px] text-zinc-400">
                  STATUS: <strong className="text-white font-medium">{currentVenue.status}</strong>
                </span>
                <button
                  onClick={handleJoinFromVenue}
                  className="px-5 py-2.5 rounded-full bg-cobalt hover:bg-cobaltGlow text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer active:scale-95"
                >
                  <span>Join Lab Targeting This Venue</span>
                  <FiArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
