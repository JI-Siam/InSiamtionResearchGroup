'use client'

export default function Mission({mission}){
  return (
    <section id="mission" className="container py-12">
      <div className="section-container bg-gradient-to-br from-white via-indigo-50 to-white">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-navy text-xs font-bold rounded-full mb-4">OUR PURPOSE</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Mission</h2>
        </div>
        <div className="space-y-3">
          {mission?.map((m,i)=>(
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-indigo-50 border border-indigo-100 hover:shadow-md transition">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
              <p className="text-text">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
