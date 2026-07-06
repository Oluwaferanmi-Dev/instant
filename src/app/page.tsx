"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* BEGIN: Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#" className="flex items-center gap-2">
                <Image src="/logo.png" alt="Instant Logo" width={150} height={40} className="h-8 w-auto" priority />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">Home</Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">How it Works</Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">For Providers</Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About Us</Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-colors shadow-sm">
                Join Waitlist
              </Link>
              <Link href="#" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-primary bg-white hover:bg-gray-50 transition-colors shadow-sm">
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
              <Link href="#" className="text-base font-medium text-gray-900 hover:text-primary">Home</Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">How it Works</Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">For Providers</Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">About Us</Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <Link href="#" className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-blue-700 shadow-sm">
                Join Waitlist
              </Link>
              <Link href="#" className="w-full inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-lg text-primary bg-white hover:bg-gray-50 shadow-sm">
                Provider Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* END: Header */}

      {/* BEGIN: Main Content */}
      <main>
        {/* BEGIN: Hero Section */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              {/* Hero Text */}
              <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                  Coming Soon
                </div>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight mb-6">
                  Compare local service providers <span className="text-primary">in minutes.</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto lg:mx-0 mb-8">
                  Instant helps you find and compare trusted local service providers, view reviews, and book with confidence.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <Link href="#" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-sm transition-all">
                    Join the Waitlist
                  </Link>
                  <Link href="#" className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-xl text-primary bg-transparent hover:bg-primary-light md:py-4 md:text-lg md:px-10 transition-all">
                    I&apos;m a Provider
                  </Link>
                </div>
                {/* Social Proof */}
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    {/* Replaced absolute URLs with Next Image from public directory or keep as img since it's external */}
                    <img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnD2fmnKky96F5ytJyaMK94cGOizIsBWBKIN7gtWaDBXAIogfAJ1Y2H4ogNiq4zEG7oWab_e936BIDIC4Px_et1fI93bDpokJPVVCjyFwi4yiTtIgsIIIgolUgmDCdx2osGdBI6U4o1kVZizdvf3967Tg3ccHdiCXHSsv63MPVEXqLrJvCZlMiEbJuLEDFMosTMeMYwRlJ_yCUtmRHABQDq_GAwd-kWZPcaF76ti6I2IjmzqnWJGO0VRfxOpN-VdnFEdJ6hQwSJgo"/>
                    <img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlBYHOC2CRIP7VGIE68gOJ3TvlV2LDGiYUYRQjZYzWJynYuNnvo9CJV0_-R3Nwtiy_cHiwxNne9knZOAM2UeOwGRaMnMBz-NGRO1TUnHW_sR470ap1MiNEiXPKrTcX9c3IasQBxf6OYKBom9H6Kkhl9Bn3w0qvOZFptMOOObh8Ttge56AvKxcC4LF2uRQFe8ADQpP_UGvyOdtEXvgOrqgSgqW8dmTcNV5Sjm8YmS2a0VVTEvlREvJjxJWx9_YINOdg52m9_yTp2nc"/>
                    <img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTTojjHiT21kyteATZkUrDvxCEM9hm6NqPAcHax84wDvAy5baYFbJV4Gzq__dbBeGzs0DzQYCpDLiR12KgUoFWc3I9E-kIXViWh0CAVCjcmN4OLK9qIRwg-ZubLTwhYVP_Nlj4t7hOUbY7ENm9S9pNwYO7dkVJ3gYCI4b2NGdg56zxd-U9ANX6fUISa7C1oueRB7NXvd0hH1LBnzHrbf-cWFfbpupchNEgGp-0-Ca_ZpHaxacWjFi7KgiEoM9TJ7B8YAYsS0MDPaw"/>
                    <img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFWRGD2E7VPupKnIKIgs9hOkN5QSPclhm2o0TqCddna7B_rwP-ZJK6mwsY1nrKYAqHc4-fbg8bbfHIus05fcXAWTcA4Jrw94fCdEMzpp133r-_8dqtd7ys5KeLjlmWo0pYbASl-03ctR4vAZ7O5lyRhzHPrQC6rQNGcZel7G6b1uISVIth1Ckw5K3xbo8sM31ml86L4U8Su8C-PCvh3aozVEBSl0Ba8BqLd2qI0xfx3POEg6zRHuls0XOUWVAcP_wlwpdZiYiCF7E"/>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Join 250+ others waiting for Instant</p>
                </div>
              </div>
              
              {/* Hero Image/Mockup */}
              <div className="lg:col-span-6 relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
                {/* Simulating a phone mockup */}
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
                  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white relative pt-8">
                    
                    {/* App Header */}
                    <div className="px-4 flex justify-between items-center mb-6">
                      <div className="flex items-center gap-1">
                        <Image src="/logo.png" alt="Instant Logo" width={80} height={20} className="h-5 w-auto" />
                      </div>
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </div>
                    
                    {/* App Search */}
                    <div className="px-4 mb-6">
                      <h3 className="font-bold text-gray-900 mb-2">Find the right provider.</h3>
                      <div className="relative">
                        <input className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="e.g. Plumber, Electrician, Cleaner..." type="text"/>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Lagos, Nigeria
                      </div>
                    </div>
                    
                    {/* App Providers List */}
                    <div className="px-4 bg-gray-50 h-full pt-4 rounded-t-3xl">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-xs">Top Rated Providers</h4>
                        <Link href="#" className="text-primary text-[10px] font-medium">See all</Link>
                      </div>
                      
                      {/* Provider Card 1 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm mb-3 flex gap-3 items-center">
                        <img alt="Provider" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtOEAberczKxx6h5oAf84yFOFR_5BAEJHUmIbncUWa76RtSv8nfdIyYpE5xY8HqWxWEyhsGEFLJoD0TKTIB36CEQYQR2wJhvTqyNnRyOQgT-dbzozDpOnfZY9KnRWyYvb49UX5NfUkh-uPbtkLmCsyjC5mZBLg-aP8fwoy37gNGNdsi82IAJzrMsOPHEsIK1Aii5TMX3kwNjG00hQ-xa-BAdQto5qDDQudgDowsrgFQUMlxdC5LjxiNALcr9yDknJoEAfDESeylVs"/>
                        <div className="flex-1">
                          <h5 className="text-xs font-bold">Excellent Plumbing</h5>
                          <p className="text-[10px] text-gray-500">Plumbing Services</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-[10px]">★★★★★</span>
                            <span className="text-[10px] text-gray-500">4.8 (128)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-gray-500 block">From N15,000</span>
                        </div>
                      </div>
                      
                      {/* Provider Card 2 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm mb-3 flex gap-3 items-center">
                        <img alt="Provider" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHAjIBG8zOyu5FwF0Akmyrd9aMISPaH5TXAI_3d3ZgBP7-yj4cN6EV9SAAfHqTp-yq962VRyRe8rzIF1BKuotKjOV0iJ-aQJsExspA2HMLrg2kwY-NPEje0JQ67gF7yHwR89YxZA6SP3zodiCJnpQ4sdNe0b1h3fUvcAggTPMoyKvdNuBJot1qgfDAe6jkDokomWI27UZWrzNqSWRnP2ZdTKZFZIHYgdLz2A1BeOSwh4sl4xt2nCNXnP6Y5pF6SwJ-qpXdOeaGinA"/>
                        <div className="flex-1">
                          <h5 className="text-xs font-bold">Bright Electricians</h5>
                          <p className="text-[10px] text-gray-500">Electrical Services</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-[10px]">★★★★★</span>
                            <span className="text-[10px] text-gray-500">4.7 (96)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-gray-500 block">From N12,000</span>
                        </div>
                      </div>
                      
                      {/* Provider Card 3 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm mb-3 flex gap-3 items-center">
                        <img alt="Provider" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6UTn1VLHmZiGYM27E_kiZzsxGmGCXrNtrtLFWU6aSnIcb9v2-MVjV2slILf4T08BIwPKEokGCaMbJm7xLLM3RDU8IFZB1vi7yIlWxYgFGNJ03upIl6c__tXM9pQ6DcIq6Upj_v-A9hlW0kVVzJGp8tPaZCUuOgMtkc9URc3FrqMMEDiIplmKWZRqMEdhuLhVolDyWj-EaBkGxfL7qiQhnkN6gwlF-GYCMJHofPyTUN7ueHIeqNyFPn78dm4gRq-voh1vHxiemTGc"/>
                        <div className="flex-1">
                          <h5 className="text-xs font-bold">Sparkle Cleaning</h5>
                          <p className="text-[10px] text-gray-500">Cleaning Services</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-[10px]">★★★★★</span>
                            <span className="text-[10px] text-gray-500">4.9 (84)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-gray-500 block">From N10,000</span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Hero Section */}

        {/* BEGIN: Categories Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl font-bold text-gray-900 mb-8">Popular service categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <span className="text-sm font-medium text-gray-700">Plumbing</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <span className="text-sm font-medium text-gray-700">Electrical</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <span className="text-sm font-medium text-gray-700">Cleaning</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <span className="text-sm font-medium text-gray-700">Air Conditioning</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <span className="text-sm font-medium text-gray-700">Painting</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <span className="text-sm font-medium text-gray-700">Carpentry</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-primary font-bold tracking-widest">...</span>
                <span className="text-sm font-medium text-gray-700">More</span>
              </Link>
            </div>
          </div>
        </section>
        {/* END: Categories Section */}

        {/* BEGIN: CTA Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Waitlist CTA */}
              <div className="bg-primary-light rounded-4xl px-8 pt-8 lg:px-12 lg:pt-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
                {/* Illustration */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-end mt-8 lg:mt-0 self-end">
                  <Image src="/waitlist-illustration.png" alt="Waitlist Illustration" width={320} height={320} priority className="object-contain object-bottom max-h-[250px] w-auto mix-blend-multiply" />
                </div>
                {/* Form */}
                <div className="relative z-10 w-full lg:w-1/2 max-w-sm lg:ml-auto pb-8 lg:pb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the waitlist</h3>
                  <p className="text-gray-600 mb-6 text-sm">Be the first to experience Instant.</p>
                  <form className="space-y-4">
                    <input className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Enter your email address" required type="email"/>
                    <button className="w-full px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm cursor-pointer" type="submit">
                      Join Waitlist
                    </button>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      We respect your privacy. No spam, ever.
                    </div>
                  </form>
                </div>
              </div>

              {/* Provider CTA */}
              <div className="bg-green-50 rounded-4xl px-8 pt-8 lg:px-12 lg:pt-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
                {/* Form */}
                <div className="relative z-10 w-full lg:w-1/2 max-w-sm pb-8 lg:pb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Are you a service provider?</h3>
                  <p className="text-gray-600 mb-6 text-sm">Join Instant and get found by more customers.</p>
                  <form className="space-y-4">
                    <input className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-green-600 focus:outline-none" placeholder="Enter your email address" required type="email"/>
                    <button className="w-full px-4 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors shadow-sm cursor-pointer" type="submit">
                      Apply as a Provider
                    </button>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                      <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      We respect your privacy. No spam, ever.
                    </div>
                  </form>
                </div>
                {/* Illustration */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end mt-8 lg:mt-0 self-end">
                  <Image src="/provider-illustration.png" alt="Provider Illustration" width={320} height={320} priority className="object-contain object-bottom max-h-[250px] w-auto mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: CTA Sections */}
      </main>
      {/* END: Main Content */}
    </>
  );
}
