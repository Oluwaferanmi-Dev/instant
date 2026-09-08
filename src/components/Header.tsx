"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Do not render the main marketing header inside app portals or auth pages
  const isAppPortal = pathname.startsWith('/customer') || 
                      pathname.startsWith('/provider') || 
                      pathname.startsWith('/admin') ||
                      pathname === '/login' || 
                      pathname === '/signup' || 
                      pathname === '/forgot-password';

  if (isAppPortal) {
    return null;
  }

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Instant Logo" width={160} height={40} className="h-10 w-auto object-contain" priority />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-[#002B95] transition-colors">Home</Link>
            <Link href="/customer" className="text-sm font-semibold text-gray-700 hover:text-[#002B95] transition-colors">Customer Portal</Link>
            <Link href="/provider" className="text-sm font-semibold text-gray-700 hover:text-[#004117] transition-colors">Provider Portal</Link>
            <Link href="/admin" className="text-sm font-semibold text-gray-700 hover:text-[#0D1B3E] transition-colors">Admin Portal</Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">How it Works</Link>
            <Link href="/#about-us" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About Us</Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login" className="px-4 py-2 text-sm font-semibold text-[#002B95] hover:text-[#001B63] transition-colors">
              Sign In
            </Link>
            <Link href="/customer" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-xl text-white bg-[#002B95] hover:bg-[#001B63] transition-colors shadow-sm">
              Explore Customer App
            </Link>
            <Link href="/provider" className="inline-flex items-center justify-center px-4 py-2 border border-[#E2E6F0] text-sm font-semibold rounded-xl text-[#004117] bg-[#ECFDF5] hover:bg-[#D1FAE5] transition-colors shadow-sm">
              Provider Hub
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-900 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full left-0 z-50">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-base font-semibold text-gray-900 hover:text-[#002B95]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/customer" className="text-base font-semibold text-[#002B95]" onClick={() => setIsMobileMenuOpen(false)}>Customer Portal</Link>
            <Link href="/provider" className="text-base font-semibold text-[#004117]" onClick={() => setIsMobileMenuOpen(false)}>Provider Portal</Link>
            <Link href="/admin" className="text-base font-semibold text-[#0D1B3E]" onClick={() => setIsMobileMenuOpen(false)}>Admin Portal</Link>
            <Link href="/#how-it-works" className="text-base font-medium text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>How it Works</Link>
            <Link href="/#about-us" className="text-base font-medium text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </nav>
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-[#E2E6F0] text-base font-semibold rounded-xl text-[#002B95] bg-white">
              Sign In
            </Link>
            <Link href="/customer" onClick={() => setIsMobileMenuOpen(false)} className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-base font-semibold rounded-xl text-white bg-[#002B95]">
              Explore Customer App
            </Link>
            <Link href="/provider" onClick={() => setIsMobileMenuOpen(false)} className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-[#E2E6F0] text-base font-semibold rounded-xl text-[#004117] bg-[#ECFDF5]">
              Provider Hub
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

