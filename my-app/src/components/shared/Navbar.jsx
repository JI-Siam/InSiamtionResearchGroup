'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-card border-b border-line shadow-sm" style={{backdropFilter: 'blur(10px)'}}>
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
            <Image src="/logo.png" width={28} height={28} alt="IRG" />
          </div>
          <span className="text-navy font-bold text-lg hidden sm:block">IRG</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#about" className="text-navy text-sm font-semibold relative group">
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#teams" className="text-navy text-sm font-semibold relative group">
            <span className="relative z-10">Teams</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#mission" className="text-navy text-sm font-semibold relative group">
            <span className="relative z-10">Mission</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#philosophy" className="text-navy text-sm font-semibold relative group">
            <span className="relative z-10">Philosophy</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#values" className="text-navy text-sm font-semibold relative group">
            <span className="relative z-10">Values</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#membership" className="text-navy text-sm font-semibold relative group">
            <span className="relative z-10">Membership</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#mentorship" className="text-navy text-sm font-semibold relative group">
            <span className="relative z-10">Mentorship</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={()=>setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-navy hover:bg-blue-50 rounded-lg transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gradient-to-b from-blue-50 to-white border-t border-line p-4 space-y-2">
          <Link href="#about" className="block px-4 py-3 text-navy font-semibold bg-white border-l-2 border-primary rounded-lg hover:shadow-md transition text-sm">About</Link>
          <Link href="#teams" className="block px-4 py-3 text-navy font-semibold bg-white border-l-2 border-primary rounded-lg hover:shadow-md transition text-sm">Teams</Link>
          <Link href="#mission" className="block px-4 py-3 text-navy font-semibold bg-white border-l-2 border-primary rounded-lg hover:shadow-md transition text-sm">Mission</Link>
          <Link href="#philosophy" className="block px-4 py-3 text-navy font-semibold bg-white border-l-2 border-primary rounded-lg hover:shadow-md transition text-sm">Philosophy</Link>
          <Link href="#values" className="block px-4 py-3 text-navy font-semibold bg-white border-l-2 border-primary rounded-lg hover:shadow-md transition text-sm">Values</Link>
          <Link href="#membership" className="block px-4 py-3 text-navy font-semibold bg-white border-l-2 border-primary rounded-lg hover:shadow-md transition text-sm">Membership</Link>
          <Link href="#mentorship" className="block px-4 py-3 text-navy font-semibold bg-white border-l-2 border-primary rounded-lg hover:shadow-md transition text-sm">Mentorship</Link>
        </div>
      )}
    </nav>
  );
}
