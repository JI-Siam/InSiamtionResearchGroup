'use client'

export default function Mentorship({mentorship}){
  return (
    <section id="mentorship" className="container py-12">
      <div className="section-container bg-gradient-to-br from-white via-purple-50 to-white">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-purple-100 text-navy text-xs font-bold rounded-full mb-4">GROWTH</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Mentorship Culture</h2>
        </div>
        <p className="text-lg text-text leading-relaxed mb-8">{mentorship?.summary}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentorship?.expectationsForSeniors?.map((m,i)=>(
            <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-white to-purple-50 border border-purple-100 hover:shadow-md transition">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                <p className="text-text">{m}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
