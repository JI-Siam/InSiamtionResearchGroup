'use client'

export default function Membership({expectations}){
  return (
    <section id="membership" className="container py-12">
      <div className="section-container bg-gradient-to-br from-white via-green-50 to-white">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-green-100 text-navy text-xs font-bold rounded-full mb-4">COMMITMENT</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Membership Expectations</h2>
        </div>
        <div className="space-y-3">
          {expectations?.map((e,i)=>(
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-white border border-green-100 hover:shadow-md transition">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-indigo flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">{i+1}</div>
              <p className="text-text">{e}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
