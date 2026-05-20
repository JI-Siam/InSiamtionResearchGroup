'use client'

export default function Recruitment({recruitment}){
  const summary = recruitment?.summary || '';
  const teams = recruitment?.teams || [];
  const qualities = recruitment?.qualities || [];
  const ctaLabel = recruitment?.ctaLabel || 'Apply Now';
  const ctaHref = recruitment?.ctaHref || '#membership';
  const note = recruitment?.note || '';

  return (
    <section id="recruitment" className="container py-12">
      <div className="section-container bg-linear-to-br from-white via-orange-50 to-white">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-orange-100 text-navy text-xs font-bold rounded-full mb-4">WE ARE RECRUITING</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Open for All Teams</h2>
        </div>

        <p className="text-lg text-text leading-relaxed max-w-4xl">We are actively recruiting across all teams. {summary}</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-navy mb-4">Open for all teams</h3>
            <div className="space-y-3">
              {teams.map((team, index) => (
                <div key={team} className="flex items-center gap-3 rounded-xl bg-linear-to-r from-orange-50 to-white p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-primary to-indigo text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-text font-medium">{team}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-green-100 bg-linear-to-br from-green-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-navy mb-4">What we look for</h3>
            <div className="flex flex-wrap gap-3">
              {qualities.map((quality) => (
                <span key={quality} className="rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                  {quality}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white/80 p-4 border border-green-100">
              <p className="text-sm text-muted">{note}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://forms.gle/F3SpikcxLKbFWjhF8" className="btn-primary">{ctaLabel}</a>
              <a href="#teams" className="btn-outline">See Teams</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}