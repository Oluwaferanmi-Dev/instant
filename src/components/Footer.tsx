"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on app portals & auth pages
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
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Instant Logo" width={120} height={32} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              A platform designed to make finding, comparing, and booking trusted local service providers
              simple, transparent, and stress-free.
            </p>
          </div>

          {/* Platform Portals */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Platform Portals</h3>
            <ul className="space-y-3">
              <li><Link href="/customer" className="text-sm font-semibold text-[#002B95] hover:underline">Customer Portal</Link></li>
              <li><Link href="/provider" className="text-sm font-semibold text-[#004117] hover:underline">Provider Portal</Link></li>
              <li><Link href="/admin" className="text-sm font-semibold text-[#0D1B3E] hover:underline">Admin Console</Link></li>
              <li><Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-[#002B95]">Sign In / Account</Link></li>
              <li><Link href="/signup" className="text-sm font-semibold text-gray-700 hover:text-[#002B95]">Create Account</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/#how-it-works" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">How it Works</Link></li>
              <li><Link href="/#about-us" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">About Us</Link></li>
              <li><Link href="/#customer-waitlist" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">Join Customer Waitlist</Link></li>
              <li><Link href="/#provider-waitlist" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">Provider Application</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Legal & Contact</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">Terms of Service</Link></li>
              <li><Link href="/terms#faq" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">FAQ</Link></li>
              <li>
                <a href="mailto:Partus.organization@gmail.com" className="text-sm text-gray-500 hover:text-[#002B95] transition-colors">
                  Partus.organization@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-400">
            © 2026 Instant. Developed by the Partus team. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Privacy Policy</Link>
            <span className="text-gray-300">·</span>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

