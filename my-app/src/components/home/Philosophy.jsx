'use client'

export default function Philosophy({philosophy}){
  return (
    <section id="philosophy" className="container py-12">
      <div className="section-container bg-gradient-to-br from-white via-cyan-50 to-white">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-cyan-100 text-navy text-xs font-bold rounded-full mb-4">BELIEFS</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Our Philosophy</h2>
        </div>
        <div className="space-y-3">
          {philosophy?.map((p,i)=>(
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-white border border-cyan-100 hover:shadow-md transition">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0 mt-2"></div>
              <p className="text-text">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
