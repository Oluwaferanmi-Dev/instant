import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Instant Logo" width={120} height={32} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              A platform designed to make finding, comparing, and booking trusted local service providers
              simple, transparent, and stress-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/#how-it-works" className="text-sm text-gray-500 hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="/#about-us" className="text-sm text-gray-500 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#customer-waitlist" className="text-sm text-gray-500 hover:text-primary transition-colors">Join the Waitlist</Link></li>
              <li><Link href="/#provider-waitlist" className="text-sm text-gray-500 hover:text-primary transition-colors">Provider Sign Up</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal & Contact</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/terms#faq" className="text-sm text-gray-500 hover:text-primary transition-colors">FAQ</Link></li>
              <li>
                <a href="mailto:Partus.organization@gmail.com" className="text-sm text-gray-500 hover:text-primary transition-colors">
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
