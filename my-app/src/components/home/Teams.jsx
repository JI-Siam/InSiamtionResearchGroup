'use client'

export default function Teams({teams}){
  return (
    <section id="teams" className="container py-12">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-blue-100 text-navy text-xs font-bold rounded-full mb-4">ORGANIZATION</span>
        <h2 className="text-3xl md:text-4xl font-black text-navy">Teams</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams?.map((t, idx)=> (
          <div key={idx} className="section-container bg-gradient-to-br from-white to-blue-50 border-blue-100">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-indigo flex items-center justify-center text-white font-bold mb-4">
              {idx + 1}
            </div>
            <h3 className="font-black text-navy text-lg mb-3">{t.name}</h3>
            <p className="text-sm text-muted mb-4 leading-relaxed">{t.focus?.slice(0,3).join(' • ')}{t.focus?.length>3? ' • ...':''}</p>
            <div className="pt-4 border-t border-blue-100 text-xs text-muted">
              <span className="font-semibold text-navy">Lead:</span> {t.composition?.teamLeaders || 1} <span className="mx-2">•</span> <span className="font-semibold text-navy">Members:</span> {t.composition?.members}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
