import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimations from '../components/ScrollAnimations'
import SmoothScroll from '../components/SmoothScroll'

export default function Home() {
  return (
    <div className="bg-white">
      <ScrollAnimations />
      <SmoothScroll />
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            <div>
              <Link href="/">
                <Image
                  src="/JANUS-Logo-transparentBG.png"
                  alt="JANUS"
                  width={120}
                  height={40}
                  className="h-6 lg:h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/insights" className="text-gray-700 hover:text-black transition-colors font-medium">
                Insights
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors font-medium">
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="bg-black text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-300 rounded-sm whitespace-nowrap"
              >
                See How We'd Fix Your Messaging
              </Link>
            </nav>
            
            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center space-x-4">
              <Link href="/insights" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                Insights
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="bg-black text-white px-3 py-2 text-xs font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-300 rounded-sm whitespace-nowrap"
              >
                <span className="hidden sm:inline">Fix My Messaging</span>
                <span className="sm:hidden">CTA</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Optimized for above-the-fold */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background video placeholder - will be dark creative video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Grid overlay for texture */}
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Background geometric elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-janus-blue/20 rotate-45"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-janus-blue/10 rotate-45"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white/5 -rotate-12"></div>
          
          {/* Floating dots */}
          <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-janus-blue/30 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-janus-blue/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white pt-20 pb-16">
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 letter-tighter leading-tight">
              Most SaaS teams have great products
              <br />
              and <span className="text-janus-blue italic">garbage messaging</span>.
              <br />
              <span className="block mt-2">We fix that.</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-base lg:text-lg font-light mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              JANUS installs a full-funnel creative engine into your company — landing page motion videos, 
              feature explainer systems, and brand strategy designed to boost conversions, adoption, and sales.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm font-medium mb-8 opacity-80">
              Start seeing ROI in weeks — not months.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 hover-rise janus-shadow-xl rounded-sm"
            >
              See How We'd Fix Your Messaging
            </Link>
            <p className="text-xs text-white/70 mt-3">
              Free 15-minute strategy call
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 hidden lg:block">
          <div className="w-px h-8 bg-white/30 mb-2 mx-auto"></div>
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </div>
      </section>

      {/* Trust Section - Clean with real brand focus */}
      <section className="py-16 lg:py-24 bg-white section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-gray-500 font-medium mb-6">
              Trusted by Founders, Used by Funded Startups
            </p>
            <blockquote className="scroll-animate fade-up delay-200 text-xl lg:text-2xl font-display italic text-black max-w-4xl mx-auto leading-relaxed">
              "Backed by the results we've delivered across B2B SaaS, fintech, and compliance tech."
            </blockquote>
          </div>
          
          {/* Logo placeholder area with better styling */}
          <div className="scroll-animate scale-in delay-400 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
            <div className="h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center hover:border-gray-200 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1"></div>
                <span className="text-xs text-gray-400 font-medium">TechFlow</span>
              </div>
            </div>
            <div className="h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center hover:border-gray-200 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1"></div>
                <span className="text-xs text-gray-400 font-medium">DataVault</span>
              </div>
            </div>
            <div className="h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center hover:border-gray-200 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1"></div>
                <span className="text-xs text-gray-400 font-medium">CloudSync</span>
              </div>
            </div>
            <div className="h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center hover:border-gray-200 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1"></div>
                <span className="text-xs text-gray-400 font-medium">SecureBase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why JANUS Exists - Large format with sophisticated typography */}
      <section className="py-24 lg:py-32 bg-gray-50 section-spacing relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 border border-gray-200 rotate-12 opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-janus-blue/5 rotate-45"></div>
          <div className="absolute top-1/2 left-10 w-1 h-20 bg-janus-blue/20"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-janus-blue/40 rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="m 60 0 l 0 60 l -60 0 l 0 -60 z" fill="none" stroke="#000" strokeWidth="1"/></pattern></defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-left">
              <p className="text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
                Why JANUS Exists
              </p>
              <h2 className="font-display text-5xl lg:text-7xl font-bold text-black mb-8 leading-tight letter-tighter">
                You're not paying for content.
                <br />
                <span className="italic text-janus-blue">You're paying for clarity, momentum, and growth.</span>
              </h2>
            </div>
            
            <div className="scroll-animate slide-right delay-200 space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Every day, your startup leaks leads, churns users, or confuses visitors — because your message isn't clear, 
                and your product looks like a spreadsheet.
              </p>
              <p className="text-xl text-black font-semibold leading-relaxed">
                JANUS solves this by turning your brand into a growth engine — without adding headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The JANUS Clarity Engine - Rich visual presentation */}
      <section className="py-24 lg:py-32 bg-white section-spacing relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          {/* Floating geometric elements */}
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-janus-blue/20 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-200 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-janus-blue/5 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-gray-300/50 rotate-45"></div>
          {/* Subtle gradient overlays */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-janus-blue/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-gray-100 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Our Core Offer
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight letter-tighter">
              The JANUS 
              <br />
              <span className="italic text-janus-blue">Clarity Engine™</span>
            </h2>
            <p className="scroll-animate fade-up delay-400 text-xl text-gray-600 max-w-3xl mx-auto">
              A plug-and-play 3-part system that transforms your software from "unclear" to "unmissable."
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Component 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video bg-gradient-to-br from-janus-blue to-blue-700 rounded-lg image-overlay flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-80">60-Second SaaS Clarity Video</p>
                  </div>
                </div>
              </div>
              
              <div className="scroll-animate slide-right delay-200 order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-janus-blue text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    1
                  </div>
                  <div className="w-24 h-px bg-gray-200"></div>
                </div>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  SaaS Clarity Video
                </h3>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  A high-converting motion video that explains what you do in 60 seconds — and drives more demos, trials, and sales.
                </p>
                <div className="border-l-4 border-janus-blue pl-6">
                  <p className="text-lg text-gray-600 italic">
                    Placed on your landing page, tested for results.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Component 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate slide-left">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    2
                  </div>
                  <div className="w-24 h-px bg-gray-200"></div>
                </div>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  Feature Adoption System
                </h3>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Three crisp motion videos that explain your most powerful features — driving retention, upsell, and activation.
                </p>
                <div className="border-l-4 border-black pl-6">
                  <p className="text-lg text-gray-600 italic">
                    Designed to reduce churn and increase lifetime value.
                  </p>
                </div>
              </div>
              
              <div className="scroll-animate slide-right delay-200">
                <div className="aspect-video bg-gradient-to-br from-black to-gray-800 rounded-lg image-overlay flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded"></div>
                      <div className="w-8 h-8 bg-white/20 rounded"></div>
                      <div className="w-8 h-8 bg-white/20 rounded"></div>
                    </div>
                    <p className="text-sm opacity-80">Feature Video Suite</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Component 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg image-overlay flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="flex space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                    </div>
                    <p className="text-sm">Paid + Organic Ad Kit</p>
                  </div>
                </div>
              </div>
              
              <div className="scroll-animate slide-right delay-200 order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    3
                  </div>
                  <div className="w-24 h-px bg-gray-200"></div>
                </div>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  Paid + Organic Ad Kit
                </h3>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Three optimized short-form videos for use in ads, social, and outbound — based on proven SaaS creative principles.
                </p>
                <div className="border-l-4 border-gray-600 pl-6">
                  <p className="text-lg text-gray-600 italic">
                    We give you the content that moves leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison - Bold visual treatment */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white section-spacing relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Diagonal pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(37, 99, 235, 0.1) 50%, transparent 55%)'
          }}></div>
          {/* Strategic geometric shapes */}
          <div className="absolute top-24 left-8 w-32 h-1 bg-janus-blue/30"></div>
          <div className="absolute top-32 right-12 w-28 h-28 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-40 left-24 w-6 h-6 bg-janus-blue/40 rotate-45"></div>
          <div className="absolute bottom-24 right-32 w-14 h-14 border-2 border-white/20"></div>
          {/* Subtle dot pattern */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-janus-blue/50 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-gray-400 font-medium mb-8">
              Why This Beats Hiring
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display display-text text-4xl lg:text-6xl font-bold mb-6 leading-tight letter-tighter">
              Save thousands and skip <br/>the HR tax
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Hiring In-House */}
            <div className="scroll-animate scale-in delay-300 bg-white rounded-xl p-8 lg:p-10 janus-shadow">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900">Hiring In-House</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Cost</span>
                  <span className="text-red-600 font-bold">$3,800/mo + payroll costs</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Timeline</span>
                  <span className="text-red-600 font-bold">Weeks of onboarding</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Skills</span>
                  <span className="text-red-600 font-bold">Narrow skillset</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Management</span>
                  <span className="text-red-600 font-bold">Needs management</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">ROI</span>
                  <span className="text-red-600 font-bold">Unclear ROI</span>
                </div>
              </div>
            </div>
            
            {/* JANUS */}
            <div className="scroll-animate scale-in delay-500 bg-janus-blue rounded-xl p-8 lg:p-10 janus-shadow-xl hover-rise relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 text-xs font-bold tracking-wide rounded-full">RECOMMENDED</span>
              </div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">JANUS Clarity Engine™</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-100 font-medium">Cost</span>
                  <span className="text-white font-bold">Starts at $2,500/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-100 font-medium">Timeline</span>
                  <span className="text-white font-bold">Ready in &lt;3 weeks</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-100 font-medium">Skills</span>
                  <span className="text-white font-bold">Strategy + execution</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-100 font-medium">Management</span>
                  <span className="text-white font-bold">We run the process</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-blue-100 font-medium">ROI</span>
                  <span className="text-white font-bold">Clear outcomes, fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For - Professional cards */}
      <section className="py-24 lg:py-32 bg-white section-spacing relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Intersecting lines */}
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-janus-blue/20 to-transparent"></div>
          {/* Corner accent elements */}
          <div className="absolute top-16 right-16 w-8 h-8 border-l-2 border-t-2 border-janus-blue/30"></div>
          <div className="absolute bottom-16 left-16 w-8 h-8 border-r-2 border-b-2 border-gray-300"></div>
          {/* Scattered minimal elements */}
          <div className="absolute top-1/4 left-10 w-3 h-3 bg-janus-blue/20 rotate-45"></div>
          <div className="absolute top-3/4 right-10 w-3 h-3 border border-gray-300 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-100 rounded-full opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Who It's For
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display display-text text-4xl lg:text-6xl font-bold text-black mb-8 leading-tight letter-tighter">
              JANUS works best with
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="scroll-animate scale-in delay-300 bg-white border-2 border-gray-100 p-8 lg:p-10 rounded-xl hover-rise janus-shadow group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-janus-blue rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight">
                    B2B SaaS founders post-product-market fit
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                You've validated your product and have paying customers, but growth has plateaued because your messaging isn't converting at scale.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="scroll-animate scale-in delay-400 bg-white border-2 border-gray-100 p-8 lg:p-10 rounded-xl hover-rise janus-shadow group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight">
                    Startups that just raised pre-seed or seed
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                You have fresh capital and need to show rapid growth to investors. Clear messaging is critical for efficient customer acquisition.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="scroll-animate scale-in delay-500 bg-white border-2 border-gray-100 p-8 lg:p-10 rounded-xl hover-rise janus-shadow group">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight">
                    Tech companies with great products but flat messaging
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your engineering team built something amazing, but prospects don't understand the value. You need to translate complexity into clarity.
              </p>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="scroll-animate fade-up delay-300 bg-janus-blue rounded-xl p-8 lg:p-10 max-w-4xl mx-auto janus-shadow-xl">
              <p className="text-xl lg:text-2xl font-bold text-white mb-4">
                If your product is ready — but your growth is stalled — we'll fix that.
              </p>
              <p className="text-blue-100 text-lg">
                Book a call to see if the JANUS Clarity Engine™ is right for your startup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Process visualization */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Process flow visual elements */}
          <div className="absolute top-32 left-1/4 w-px h-24 bg-gradient-to-b from-janus-blue/30 to-transparent"></div>
          <div className="absolute top-32 right-1/4 w-px h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
          {/* Connecting lines between steps */}
          <div className="absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
          {/* Strategic accent shapes */}
          <div className="absolute top-20 left-20 w-16 h-16 border border-janus-blue/20 transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-gray-200/30 rounded-full"></div>
          <div className="absolute top-40 right-40 w-4 h-4 bg-janus-blue/40 transform rotate-45"></div>
          <div className="absolute bottom-40 left-40 w-6 h-6 border-2 border-gray-400/40"></div>
          {/* Subtle texture overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(156, 163, 175, 0.03) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              How We Launch in 21 Days
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight letter-tighter">
              Our Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="scroll-animate scale-in delay-300 text-center group">
              <div className="w-24 h-24 bg-janus-blue rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-black mb-4">Week 1</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diagnose your positioning + funnel leaks
              </p>
            </div>
            
            <div className="scroll-animate scale-in delay-400 text-center group">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-black mb-4">Week 2</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Deliver high-converting video assets
              </p>
            </div>
            
            <div className="scroll-animate scale-in delay-500 text-center group">
              <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-black mb-4">Week 3</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Deploy across site, ads, onboarding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Large format with imagery */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Quote mark inspired elements */}
          <div className="absolute top-24 left-16 w-12 h-12 border-l-4 border-t-4 border-janus-blue/20"></div>
          <div className="absolute top-32 right-20 w-12 h-12 border-r-4 border-b-4 border-gray-300/50"></div>
          <div className="absolute bottom-32 left-20 w-8 h-8 border-l-4 border-b-4 border-janus-blue/30"></div>
          <div className="absolute bottom-24 right-16 w-8 h-8 border-r-4 border-t-4 border-gray-400/40"></div>
          {/* Testimonial card shadow elements */}
          <div className="absolute top-1/3 left-8 w-32 h-2 bg-gradient-to-r from-janus-blue/10 to-transparent blur-sm"></div>
          <div className="absolute bottom-1/3 right-8 w-28 h-2 bg-gradient-to-l from-gray-200/60 to-transparent blur-sm"></div>
          {/* Minimal decorative dots */}
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-janus-blue/50 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-gray-400/60 rounded-full"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-janus-blue/40 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Founder Testimonials
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight letter-tighter">
              What They Say
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Handshake Image */}
            <div className="scroll-animate scale-in delay-200 lg:col-span-1 flex justify-center">
              <div className="relative">
                {/* White background container for the handshake SVG */}
                <div className="bg-white rounded-2xl p-8">
                  <Image
                    src="/handshake.svg"
                    alt="Partnership and trust"
                    width={200}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-janus-blue/20 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="lg:col-span-2 grid gap-12">
              <div className="scroll-animate slide-left delay-300 bg-gray-50 p-12 rounded-lg janus-shadow hover-rise">
                <blockquote className="text-2xl font-display italic text-black mb-8 leading-relaxed">
                  "JANUS helped us go from a vague pitch to a 60-second story that converts — it's already lifting demo requests."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-janus-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Alex S., CEO</p>
                    <p className="text-gray-600">Trustly</p>
                  </div>
                </div>
              </div>
              
              <div className="scroll-animate slide-right delay-400 bg-gray-50 p-12 rounded-lg janus-shadow hover-rise">
                <blockquote className="text-2xl font-display italic text-black mb-8 leading-relaxed">
                  "Every startup should install the JANUS system before they start spending money on ads."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">GA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Growth Advisor</p>
                    <p className="text-gray-600">VC-backed Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Clean, sophisticated */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Currency and value inspired elements */}
          <div className="absolute top-20 left-12 w-6 h-6 border-2 border-janus-blue/30 rounded-full"></div>
          <div className="absolute top-28 right-16 w-4 h-4 bg-gray-300/50 transform rotate-45"></div>
          <div className="absolute bottom-28 left-20 w-8 h-8 border border-janus-blue/20 transform rotate-45"></div>
          <div className="absolute bottom-20 right-12 w-5 h-5 bg-gray-400/40 rounded-full"></div>
          {/* Pricing tier dividers */}
          <div className="absolute top-1/3 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-janus-blue/20 to-transparent"></div>
          {/* Value representation shapes */}
          <div className="absolute top-1/2 left-8 w-2 h-2 bg-janus-blue/30 rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-2 h-2 bg-gray-400/50 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 border border-janus-blue/25 transform rotate-45"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 border border-gray-300/60 transform rotate-45"></div>
          {/* Subtle radial gradient */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-janus-blue/5 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Pricing & Packages
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight letter-tighter">
              Investment Options
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="scroll-animate scale-in delay-300 bg-white p-12 rounded-lg janus-shadow hover-rise">
              <h3 className="font-display text-3xl font-bold text-black mb-4">Starter</h3>
              <p className="text-gray-600 mb-8">Landing page clarity</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-black">$2,500</span>
                <span className="text-gray-500 ml-2">one-time</span>
              </div>
              <Link
                href="#contact"
                className="block w-full text-center bg-gray-100 text-black py-4 font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
            
            <div className="scroll-animate scale-in delay-400 bg-janus-blue p-12 rounded-lg janus-shadow-xl hover-rise relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-2 text-sm font-bold tracking-wide">MOST POPULAR</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Core Engine</h3>
              <p className="text-blue-100 mb-8">Full JANUS Clarity Engine™</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$5,000</span>
                <span className="text-blue-200 ml-2">/month</span>
              </div>
              <Link
                href="#contact"
                className="block w-full text-center bg-white text-janus-blue py-4 font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Book Strategy Call
              </Link>
            </div>
            
            <div className="scroll-animate scale-in delay-500 bg-white p-12 rounded-lg janus-shadow hover-rise">
              <h3 className="font-display text-3xl font-bold text-black mb-4">Embedded Creative</h3>
              <p className="text-gray-600 mb-8">Retainer for scaling brands</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-black">$7,500+</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <Link
                href="#contact"
                className="block w-full text-center bg-gray-100 text-black py-4 font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="scroll-animate fade-up delay-300 text-center mt-12 space-y-4">
            <p className="text-lg text-gray-700 font-medium">
              Hiring a junior content person costs ~$4,000/mo + tax. JANUS installs a full creative system — no management required.
            </p>
            <p className="text-base text-gray-600">
              Ask about performance-based pricing for funded startups.
            </p>
          </div>
        </div>
      </section>

      {/* Confusion Cost Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="scroll-animate fade-up font-display text-4xl lg:text-6xl font-bold mb-12 leading-tight">
            How much is <span className="text-janus-blue italic">confusion</span> costing you?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="scroll-animate scale-in delay-200 group">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Low conversion rates on your landing page?
              </p>
            </div>
            
            <div className="scroll-animate scale-in delay-300 group">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Users dropping off before they activate?
              </p>
            </div>
            
            <div className="scroll-animate scale-in delay-400 group">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Sales calls starting with "Wait, what do you do again?"
              </p>
            </div>
          </div>
          
          <div className="scroll-animate fade-up delay-500 border-t border-gray-700 pt-8">
            <p className="text-2xl font-display italic text-janus-blue mb-4">
              Clarity is the growth lever you're ignoring.
            </p>
            <p className="text-xl text-gray-300">
              Let's fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold, personal */}
      <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Sophisticated dark theme elements */}
          <div className="absolute top-20 left-16 w-24 h-24 border border-white/10 transform rotate-12"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-janus-blue/30 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-8 h-8 bg-white/5 transform rotate-45"></div>
          <div className="absolute bottom-20 right-16 w-12 h-12 border-2 border-white/15 transform rotate-45"></div>
          {/* CTA focused design elements */}
          <div className="absolute top-1/3 left-8 w-2 h-16 bg-gradient-to-b from-janus-blue/40 to-transparent"></div>
          <div className="absolute top-1/3 right-8 w-2 h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
          {/* Radial spotlight effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-janus-blue/10 via-janus-blue/5 to-transparent"></div>
          {/* Corner accents */}
          <div className="absolute top-16 left-16 w-6 h-6 border-l-2 border-t-2 border-janus-blue/40"></div>
          <div className="absolute bottom-16 right-16 w-6 h-6 border-r-2 border-b-2 border-white/30"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <h2 className="scroll-animate fade-up font-display text-6xl lg:text-8xl font-bold mb-8 leading-tight letter-tighter">
            Ready to Transform Your Brand?
          </h2>
          <p className="scroll-animate fade-up delay-200 text-2xl mb-4 opacity-90">Let's talk.</p>
          <p className="scroll-animate fade-up delay-300 text-xl mb-16 opacity-80 max-w-3xl mx-auto">
            Schedule a 15-minute discovery call and see if the JANUS Clarity Engine™ is a fit for your startup.
          </p>
          
          <div className="scroll-animate scale-in delay-400 bg-gray-900 p-12 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Image
                  src="/Ali.png"
                  alt="Ali Mirza - Founder"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="ml-6 text-left">
                <p className="text-xl font-bold">Ali Mirza</p>
                <p className="text-gray-400">Founder, JANUS</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Link
                href="mailto:hello@janus.agency"
                className="block w-full bg-janus-blue text-white py-4 text-lg font-bold hover:bg-blue-700 transition-colors duration-300"
              >
                See How We'd Fix Your Messaging
              </Link>
              <Link
                href="#"
                className="block w-full border border-gray-600 text-white py-4 text-lg font-medium hover:border-gray-500 transition-colors duration-300"
              >
                Download Sample Work
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              No sales pitch — just a conversation about your marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/">
                <Image
                  src="/JANUS-Logo-transparentBG.png"
                  alt="JANUS"
                  width={120}
                  height={40}
                  className="h-8 w-auto mb-6"
                />
              </Link>
              <p className="text-lg text-gray-600 font-medium mb-4">
                Built for founders who refuse to settle.
              </p>
              <p className="text-gray-500">
                Premium creative agency for SaaS companies.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-4">Pages</h4>
              <div className="space-y-2 text-gray-600">
                <Link href="/" className="block hover:text-black transition-colors">Home</Link>
                <Link href="/insights" className="block hover:text-black transition-colors">Insights</Link>
                <Link href="/portfolio" className="block hover:text-black transition-colors">Portfolio</Link>
                <Link href="#contact" className="block hover:text-black transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-4">Legal</h4>
              <div className="space-y-2 text-gray-600">
                <Link href="/privacy" className="block hover:text-black transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-black transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2025 JANUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}