'use client'

import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="w-full bg-gradient-to-r from-white to-blue-50 border-t border-line py-8 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-indigo flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" width={40} height={40} alt="IRG" />
          </div>
          <div className="text-left">
            <p className="font-bold text-navy">InSiamtion Research Group</p>
            <p className="text-xs text-muted">Growing Researchers. Creating Impact.</p>
          </div>
        </div>

        <div className="text-muted text-xs">© {new Date().getFullYear()} InSiamtion Research Group — All rights reserved.</div>
      </div>
    </footer>
  )
}

