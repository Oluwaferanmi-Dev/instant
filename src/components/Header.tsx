"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Instant Logo" width={300} height={80} className="h-20 w-auto" priority />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">Home</Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">How it Works</Link>
            <Link href="#provider-waitlist" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">For Providers</Link>
            <Link href="/#about-us" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About Us</Link>
            <a href="mailto:Partus.organization@gmail.com" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-colors shadow-sm">
              Join Waitlist
            </Link>
            <Link href="/" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-primary bg-white hover:bg-gray-50 transition-colors shadow-sm">
              Provider Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
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
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full left-0 z-50">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-base font-medium text-gray-900 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/#how-it-works" className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>How it Works</Link>
            <Link href="#provider-waitlist" className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>For Providers</Link>
            <Link href="/#about-us" className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <a href="mailto:Partus.organization@gmail.com" className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
            <Link href="/" className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-700 shadow-sm">
              Join Waitlist
            </Link>
            <Link href="/" className="w-full inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-lg text-primary bg-white hover:bg-gray-50 shadow-sm">
              Provider Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
