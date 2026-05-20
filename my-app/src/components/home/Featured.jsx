'use client'

export default function Featured({featuredResearch}){
  const summary = featuredResearch?.summary || '';
  const highlights = featuredResearch?.highlights || [];
  const venues = featuredResearch?.venues || [];

  return (
    <section id="featured" className="container py-12">
      <div className="section-container bg-linear-to-br from-white via-indigo-50 to-white">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-navy text-xs font-bold rounded-full mb-4">FEATURED IMPACT</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Featured Conferences</h2>
        </div>

        <p className="text-lg text-text leading-relaxed max-w-4xl">{summary}</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-navy mb-4">Conference Highlights</h3>
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-xl bg-linear-to-r from-indigo-50 to-white p-4">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-linear-to-r from-primary to-indigo" />
                  <p className="text-text leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-navy mb-4">Venues</h3>
            <div className="flex flex-wrap gap-3">
              {venues.map((venue) => (
                <span key={venue} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                  {venue}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-white/80 p-4 border border-blue-100">
              <p className="text-sm text-muted">
                Our current focus is conference publication, with journal papers as the next milestone for the teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}