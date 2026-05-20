'use client'

export default function WhyJoinUs({whyJoinUs}){
  const headline = whyJoinUs?.headline || '';
  const summary = whyJoinUs?.summary || '';
  const points = whyJoinUs?.points || [];
  const closing = whyJoinUs?.closing || '';

  return (
    <section id="why-join-us" className="container py-10">
      <div className="section-container bg-linear-to-br from-white via-cyan-50 to-white p-5 md:p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-cyan-100 text-navy text-xs font-bold mb-3">WHY JOIN US</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">Why Join Us?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-4">
          <div className="rounded-2xl border border-cyan-100 bg-white p-4 md:p-5 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">{headline}</h3>
            <p className="text-base md:text-lg text-text leading-relaxed">{summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-100 px-3 py-1.5 text-xs font-semibold text-navy">For capable students</span>
              <span className="rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-semibold text-navy">Built for real contribution</span>
              <span className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-navy">Grow with a serious team</span>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-100 bg-linear-to-br from-cyan-50 to-white p-4 md:p-5 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-navy mb-2">What this team gives you</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              A focused place to learn, contribute, and grow with people who care about research, quality, and results.
            </p>
            <div className="space-y-2.5">
              {points.map((point, index) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-white p-3 border border-cyan-100 hover:shadow-md transition">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-indigo text-[10px] font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm md:text-base text-text leading-relaxed font-medium">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-cyan-100 bg-white/80 p-3.5">
              <p className="text-sm text-muted leading-relaxed">{closing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}