'use client'

export default function About({about}){
  return (
    <section id="about" className="container py-12 my-10 " >
      <div className="section-container bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-blue-100 text-navy text-xs font-bold rounded-full mb-4">WHO WE ARE</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">About IRG</h2>
        </div>
   
        <p className="text-lg text-text leading-relaxed">{about?.summary}</p>
        <p className="my-3 ">Many talented students never get to shine because they lack the right team support. We are building that team: one that contributes deeply, works with purpose, and grows together.</p>
        {about?.goals && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {about.goals.map((g,i)=>(
              <div key={i} className="flex gap-3 p-4 rounded-lg bg-white border border-blue-100 hover:shadow-md transition">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-indigo flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">✓</div>
                <p className="text-text">{g}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
