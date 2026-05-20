'use client'

export default function Values({values}){
  return (
    <section id="values" className="container py-12">
      <div className="section-container bg-gradient-to-br from-white to-orange-50">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-orange-100 text-navy text-xs font-bold rounded-full mb-4">FOUNDATION</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy">Core Values</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values?.map((v, i)=>(
            <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-white to-orange-50 border border-orange-100 hover:shadow-md transition text-center">
              <p className="font-semibold text-navy">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
