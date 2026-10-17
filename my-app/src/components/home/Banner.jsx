import Image from 'next/image';

export default function Banner({title, subtitle}){
  return (
    <header className="container py-8 md:py-12">
      <div className="rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 md:p-12 border border-blue-100 my-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <div className="flex-1 min-w-0">
              <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-xs font-bold text-navy">
                Research Excellence
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-3">{title}</h1>
              <p className="text-base md:text-lg text-muted max-w-2xl mb-6">{subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#mission" className="btn-primary">Get Involved</a>
                <a href="#membership" className="btn-outline">Learn More</a>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-center flex-shrink-0">
              <div className="relative w-56 h-56 bg-gradient-to-br from-primary/10 to-indigo/10 rounded-2xl flex items-center justify-center">
                <Image src="/logo.png" alt="IRG logo" width={192} height={192} className="w-48 h-48 object-contain filter drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
