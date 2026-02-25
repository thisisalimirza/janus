import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ScrollAnimations from '../../components/ScrollAnimations'
import ClientLogoCarousel from '../../components/ClientLogoCarousel'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getClientLogos } from '../../lib/notion'

// Lazy load components
const CalBooking = dynamic(() => import('../../components/CalBooking'), {
  loading: () => <div className="inline-block bg-gray-300 animate-pulse h-12 w-48 rounded-sm"></div>
})

export default async function WebsitesPage() {
  const clientLogos = await getClientLogos()
  return (
    <div className="bg-white">
      <ScrollAnimations />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
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
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 letter-tighter leading-tight">
              Most SaaS websites look like
              <br />
              <span className="text-janus-blue italic">glorified spreadsheets</span>.
              <br />
              <span className="block mt-2">Yours won't.</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-base lg:text-lg font-light mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              JANUS builds conversion-focused websites that turn visitors into customers. 
              Custom design, mobile-optimized, and built to grow your business — not just look pretty.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm font-medium mb-8 opacity-80">
              Launch in 2-3 weeks. No templates. No compromises.
            </p>
            <CalBooking className="inline-block bg-janus-blue text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 hover-rise janus-shadow-xl rounded-sm whitespace-nowrap">
              <span className="hidden sm:inline">Get Your Website Quote</span>
              <span className="sm:hidden">Get Quote</span>
            </CalBooking>
            <p className="text-xs text-white/70 mt-3">
              Free consultation included
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 hidden lg:block">
          <div className="w-px h-8 bg-white/30 mb-2 mx-auto"></div>
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24 bg-white section-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-gray-500 font-medium mb-6">
              Website Development That Works
            </p>
            <blockquote className="scroll-animate fade-up delay-200 text-xl lg:text-2xl font-display italic text-black max-w-4xl mx-auto leading-relaxed">
              "We don't build websites. We build customer acquisition systems that happen to look incredible."
            </blockquote>
          </div>
          
          {/* Client logos - Show credibility */}
          <div className="scroll-animate scale-in delay-400">
            <ClientLogoCarousel clientLogos={clientLogos} />
          </div>
        </div>
      </section>

      {/* The Problem - Why Most SaaS Websites Fail */}
      <section className="py-24 lg:py-32 bg-gray-50 section-spacing relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 border border-gray-200 rotate-12 opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-janus-blue/5 rotate-45"></div>
          <div className="absolute top-1/2 left-10 w-1 h-20 bg-janus-blue/20"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-janus-blue/40 rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-left">
              <p className="text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
                The Website Problem
              </p>
              <h2 className="font-display text-5xl lg:text-7xl font-bold text-black mb-8 leading-tight letter-tighter">
                Your competitors' sites all look the same.
                <br />
                <span className="italic text-janus-blue">Boring. Generic. Forgettable.</span>
              </h2>
            </div>
            
            <div className="scroll-animate slide-right delay-200 space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Most SaaS websites are built by developers who think good design is optional, 
                or agencies that prioritize pretty pictures over conversion rates.
              </p>
              <p className="text-xl text-black font-semibold leading-relaxed">
                We build websites that sell — because what's the point of traffic if it doesn't convert?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JANUS Website System */}
      <section className="py-24 lg:py-32 bg-white section-spacing relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-janus-blue/20 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-200 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-janus-blue/5 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-gray-300/50 rotate-45"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-janus-blue/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-gray-100 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Our Website System
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight letter-tighter">
              What You Get
            </h2>
            <p className="scroll-animate fade-up delay-400 text-xl text-gray-600 max-w-3xl mx-auto">
              A complete website solution designed to convert visitors into customers from day one.
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Custom Design */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video rounded-lg image-overlay overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500 p-8 flex items-center justify-center">
                  <Image
                    src="/custom-design-system.png"
                    alt="Custom Brand-Driven Design - Responsive design across desktop, tablet, and mobile devices"
                    width={400}
                    height={300}
                    className="w-full h-auto max-w-sm"
                  />
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
                  Custom Design System
                </h3>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  No templates. No themes. Every website is designed from scratch to match your brand 
                  and convert your specific audience.
                </p>
                <div className="border-l-4 border-janus-blue pl-6">
                  <p className="text-lg text-gray-600 italic">
                    Mobile-first design that looks perfect on every device.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Conversion Optimization */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate slide-left">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                    2
                  </div>
                  <div className="w-24 h-px bg-gray-200"></div>
                </div>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  Conversion Architecture
                </h3>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Strategic page structure, psychological triggers, and clear conversion paths 
                  designed to turn browsers into buyers.
                </p>
                <div className="border-l-4 border-black pl-6">
                  <p className="text-lg text-gray-600 italic">
                    Every element placed with intention. Every page built to sell.
                  </p>
                </div>
              </div>
              
              <div className="scroll-animate slide-right delay-200">
                <div className="aspect-video rounded-lg image-overlay overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center">
                  <Image
                    src="/conversion-architecture.png"
                    alt="Strategic Conversion Flow - Website page with call-to-action flowing to dollar sign conversion"
                    width={400}
                    height={300}
                    className="w-full h-auto max-w-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Performance & SEO */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video rounded-lg image-overlay overflow-hidden">
                  <Image
                    src="/lighthouse-scores.jpg"
                    alt="Perfect Lighthouse scores - 100 Performance, 90 Accessibility, 100 Best Practices, 100 SEO"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
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
                  Performance & Growth
                </h3>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Lightning-fast load times, SEO optimization, and analytics setup so you can 
                  track what works and scale what converts.
                </p>
                <div className="border-l-4 border-gray-600 pl-6">
                  <p className="text-lg text-gray-600 italic">
                    Built for speed, optimized for search, designed to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Website Pricing
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Transparent. Fair. No surprises.
            </h2>
            <p className="scroll-animate fade-up delay-300 text-gray-500 max-w-xl mx-auto">
              Most agencies charge $8,000+ for basic websites. We deliver the same quality at a price that makes sense for growing companies.
            </p>
          </div>

          {/* Two build packages */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">

            {/* Essentials */}
            <div className="scroll-animate scale-in delay-200 bg-white border border-gray-200 rounded-xl p-8 flex flex-col hover:border-janus-blue/30 hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">For founders who need to launch fast</p>
                <h3 className="font-display text-2xl font-bold text-black mb-1">Essentials</h3>
                <p className="text-gray-500 text-sm mb-6">A clean, professional site that gets you online and credible — built in two to three weeks.</p>
                <div>
                  <span className="text-4xl font-bold text-black">$2,500</span>
                  <span className="text-gray-400 text-sm ml-2">one-time</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-500 flex-1 mb-8">
                {[
                  '5 custom-designed, responsive pages',
                  'Mobile optimization',
                  'Contact form integration',
                  'Basic SEO setup',
                  'Hosting setup and SSL',
                  '1 round of revisions',
                  'Delivered in 2–3 weeks',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-janus-blue font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CalBooking className="block w-full text-center bg-gray-100 text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-sm text-sm">
                Get Started
              </CalBooking>
            </div>

            {/* Growth */}
            <div className="scroll-animate scale-in delay-300 bg-janus-blue rounded-xl p-8 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white px-5 py-1.5 text-xs font-bold tracking-widest rounded-full uppercase whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-2">For companies focused on conversion</p>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Growth</h3>
                <p className="text-blue-200 text-sm mb-6">Everything in Essentials — plus the analytics, lead capture, and optimization layer that turns traffic into pipeline.</p>
                <div>
                  <span className="text-4xl font-bold text-white">$4,000</span>
                  <span className="text-blue-200 text-sm ml-2">one-time</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-blue-100 flex-1 mb-8">
                {[
                  'Everything in Essentials',
                  'User behavior analytics',
                  'Automated lead capture',
                  'A/B testing framework',
                  'Advanced SEO optimization',
                  'Quarterly performance reports',
                  'Delivered in 3–4 weeks',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CalBooking className="block w-full text-center bg-white text-janus-blue py-4 font-bold hover:bg-gray-50 transition-colors duration-300 rounded-sm">
                Get Started
              </CalBooking>
            </div>
          </div>

          {/* Add-ons */}
          <div className="scroll-animate fade-up delay-400 bg-white border border-gray-200 rounded-xl p-8 mb-6">
            <h3 className="font-display text-lg font-bold text-black mb-6">Optional Add-Ons</h3>
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="py-4 md:py-0 md:px-6 first:pl-0 last:pr-0">
                <p className="font-semibold text-black text-sm mb-1">Additional Pages</p>
                <p className="text-janus-blue font-bold text-lg">+$200</p>
                <p className="text-gray-400 text-xs mt-0.5">per page</p>
              </div>
              <div className="py-4 md:py-0 md:px-6">
                <p className="font-semibold text-black text-sm mb-1">Copywriting</p>
                <p className="text-janus-blue font-bold text-lg">+$150</p>
                <p className="text-gray-400 text-xs mt-0.5">per page</p>
              </div>
              <div className="py-4 md:py-0 md:px-6 first:pl-0 last:pr-0">
                <p className="font-semibold text-black text-sm mb-1">Blog / CMS Setup</p>
                <p className="text-janus-blue font-bold text-lg">+$750</p>
                <p className="text-gray-400 text-xs mt-0.5">one-time</p>
              </div>
            </div>
          </div>

          {/* Care plans callout */}
          <div className="scroll-animate fade-up delay-500 bg-gray-950 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-5 mb-10">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-1">After launch</p>
              <p className="font-display text-base font-bold text-white">Need ongoing hosting, updates, and support?</p>
              <p className="text-gray-400 text-sm mt-1">
                Care plans from $30/month — we keep the lights on so you never have to think about your site again.
              </p>
            </div>
            <Link
              href="#care-plans"
              className="shrink-0 bg-white text-black px-5 py-2.5 text-sm font-bold hover:bg-gray-100 transition-colors duration-200 rounded-sm whitespace-nowrap"
            >
              See care plans
              <svg className="inline-block w-4 h-4 ml-1.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="scroll-animate fade-up delay-600 text-center">
            <p className="text-sm text-gray-400">
              50% deposit to start, remainder due on completion. All packages include performance optimization, mobile responsiveness, and Google indexing setup.
            </p>
          </div>
        </div>
      </section>

      {/* Website Care & Maintenance - Detailed Section */}
      <section id="care-plans" className="py-24 lg:py-32 bg-gray-900 text-white section-spacing relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-green-500/20 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-green-500/5 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-gray-600/50 rotate-45"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-green-500/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-gray-800 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-green-400 font-medium mb-8">
              Zero-Headache Hosting
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight letter-tighter">
              Never Think About
              <br />
              <span className="italic text-green-400">Your Website Again</span>
            </h2>
            <p className="scroll-animate fade-up delay-400 text-xl text-gray-300 max-w-3xl mx-auto">
              You have a business to run. Let us handle the technical stuff so you can focus on what matters: growing your company.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="scroll-animate slide-left">
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Complete Peace of Mind
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">No Technical Learning Required</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Forget about servers, cPanel, SSL certificates, or DNS settings. We handle all the technical complexity so you don't have to become a web developer.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">One Contact for Everything</h4>
                    <p className="text-gray-300 leading-relaxed">
                      When something breaks, you know exactly who to call. No more bouncing between hosting companies and figuring out what a "nameserver" is.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Proactive Monitoring & Maintenance</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We monitor uptime 24/7, handle security updates, create backups, and optimize performance — all automatically in the background.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-animate slide-right delay-200">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h4 className="font-display text-2xl font-bold text-white mb-6">What You Get Every Month</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Website hosting & SSL</span>
                    <span className="text-green-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">24/7 uptime monitoring</span>
                    <span className="text-green-400 font-medium">Automatic</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Security updates & backups</span>
                    <span className="text-green-400 font-medium">Weekly</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Performance optimization</span>
                    <span className="text-green-400 font-medium">Ongoing</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Analytics & growth reports</span>
                    <span className="text-green-400 font-medium">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Priority support</span>
                    <span className="text-green-400 font-medium">24hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Maintenance Plans */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="scroll-animate scale-in delay-300 bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Essential Care</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$30</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Hosting & SSL management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Uptime monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Basic security updates
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Monthly backups
                </li>
              </ul>
              <CalBooking className="w-full bg-gray-700 text-white py-3 text-center font-medium hover:bg-gray-600 transition-colors duration-300 rounded-sm">
                Choose Essential
              </CalBooking>
            </div>
            
            <div className="scroll-animate scale-in delay-400 bg-green-500 p-8 rounded-lg relative transform lg:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-green-600 px-4 py-1 text-sm font-bold tracking-wide rounded-full">MOST POPULAR</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Growth Care</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$75</span>
                <span className="text-green-100 ml-2">/month</span>
              </div>
              <ul className="text-green-50 space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Everything in Essential
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Weekly security scans
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Monthly analytics reports
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  1 content update/month
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  Priority email support
                </li>
              </ul>
              <CalBooking className="w-full bg-white text-green-600 py-3 text-center font-bold hover:bg-gray-50 transition-colors duration-300 rounded-sm">
                Choose Growth Care
              </CalBooking>
            </div>
            
            <div className="scroll-animate scale-in delay-500 bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Premium Care</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$150</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Everything in Growth Care
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  2 hours of dev time/month
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Quarterly site reviews
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Phone/video support
                </li>
              </ul>
              <CalBooking className="w-full bg-gray-700 text-white py-3 text-center font-medium hover:bg-gray-600 transition-colors duration-300 rounded-sm">
                Choose Premium
              </CalBooking>
            </div>
          </div>
        </div>
      </section>

      {/* Process - How We Work */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-1/4 w-px h-24 bg-gradient-to-b from-janus-blue/30 to-transparent"></div>
          <div className="absolute top-32 right-1/4 w-px h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
          <div className="absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
          <div className="absolute top-20 left-20 w-16 h-16 border border-janus-blue/20 transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-gray-200/30 rounded-full"></div>
          <div className="absolute top-40 right-40 w-4 h-4 bg-janus-blue/40 transform rotate-45"></div>
          <div className="absolute bottom-40 left-40 w-6 h-6 border-2 border-gray-400/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Our Process
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight letter-tighter">
              How We Build
            </h2>
            <p className="scroll-animate fade-up delay-300 text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 3-week process that takes you from concept to conversion-ready website.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="scroll-animate scale-in delay-300 text-center group">
              <div className="w-24 h-24 bg-janus-blue rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-black mb-4">Discovery & Strategy</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Deep dive into your business, audience, and goals. Competitive analysis and conversion strategy.
              </p>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <strong>Week 1:</strong> Discovery call, wireframes, content strategy
              </div>
            </div>
            
            <div className="scroll-animate scale-in delay-400 text-center group">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-black mb-4">Design & Development</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Custom design creation and development. Mobile optimization and performance testing.
              </p>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <strong>Week 2:</strong> Design, development, integrations
              </div>
            </div>
            
            <div className="scroll-animate scale-in delay-500 text-center group">
              <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-black mb-4">Launch & Optimize</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Final revisions, testing, launch, and analytics setup. Training and handoff.
              </p>
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <strong>Week 3:</strong> Revisions, launch, training
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Stack Features - Detailed Benefits */}
      <section className="py-24 lg:py-32 bg-gray-50 section-spacing relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-janus-blue/20 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-200 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-janus-blue/5 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-gray-300/50 rotate-45"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-janus-blue/5 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Growth Stack Features
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight letter-tighter">
              Built to <span className="italic text-janus-blue">Convert & Scale</span>
            </h2>
            <p className="scroll-animate fade-up delay-400 text-xl text-gray-600 max-w-3xl mx-auto">
              Every Growth Plan website includes these advanced features that turn visitors into customers and customers into growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* User Behavior Analytics */}
            <div className="scroll-animate scale-in delay-300 bg-white p-8 rounded-lg janus-shadow hover-rise">
              <div className="w-12 h-12 bg-janus-blue/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-black mb-4">User Behavior Analytics</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                See exactly how users interact with your site — what they click, what they ignore, where they drop off.
              </p>
              <div className="bg-janus-blue/5 p-4 rounded-lg border-l-4 border-janus-blue">
                <p className="text-janus-blue font-medium">
                  "You'll see how users interact with your site so we can optimize it together."
                </p>
              </div>
            </div>
            
            {/* Automated Lead Capture */}
            <div className="scroll-animate scale-in delay-400 bg-white p-8 rounded-lg janus-shadow hover-rise">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-black mb-4">Automated Lead Capture</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Every contact form submission automatically flows into your CRM, Google Sheets, or email system.
              </p>
              <div className="bg-green-500/5 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-green-600 font-medium">
                  "Every contact submission automatically goes into your CRM — no more missed leads."
                </p>
              </div>
            </div>
            
            {/* A/B Testing Framework */}
            <div className="scroll-animate scale-in delay-500 bg-white p-8 rounded-lg janus-shadow hover-rise">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-black mb-4">A/B Testing Framework</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Test different headlines, buttons, or pages to see which version converts better — data over guesswork.
              </p>
              <div className="bg-purple-500/5 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-purple-600 font-medium">
                  "Want to test two different homepages to see which gets more leads? We'll set that up for you."
                </p>
              </div>
            </div>
            
            {/* User Feedback System */}
            <div className="scroll-animate scale-in delay-600 bg-white p-8 rounded-lg janus-shadow hover-rise">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-black mb-4">User Feedback System</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A subtle feedback widget lets users tell you if anything's unclear — priceless intel for optimization.
              </p>
              <div className="bg-orange-500/5 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-600 font-medium">
                  "We'll add a subtle feedback widget so users can tell us if anything's unclear."
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Growth Features */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="scroll-animate fade-up delay-300 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-bold text-black mb-3">SEO Optimization</h4>
              <p className="text-gray-600">
                Quick SEO report + fixes for the top 5 issues holding you back from ranking higher.
              </p>
            </div>
            
            <div className="scroll-animate fade-up delay-400 text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-bold text-black mb-3">Social Sharing Optimization</h4>
              <p className="text-gray-600">
                Custom favicon and social preview cards so your site looks clean and branded everywhere.
              </p>
            </div>
            
            <div className="scroll-animate fade-up delay-500 text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-bold text-black mb-3">Content Training</h4>
              <p className="text-gray-600">
                Short video walkthrough showing how to update your content + AI prompts for writing better copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-16 w-12 h-12 border-l-4 border-t-4 border-janus-blue/20"></div>
          <div className="absolute top-32 right-20 w-12 h-12 border-r-4 border-b-4 border-gray-300/50"></div>
          <div className="absolute bottom-32 left-20 w-8 h-8 border-l-4 border-b-4 border-janus-blue/30"></div>
          <div className="absolute bottom-24 right-16 w-8 h-8 border-r-4 border-t-4 border-gray-400/40"></div>
          <div className="absolute top-1/3 left-8 w-32 h-2 bg-gradient-to-r from-janus-blue/10 to-transparent blur-sm"></div>
          <div className="absolute bottom-1/3 right-8 w-28 h-2 bg-gradient-to-l from-gray-200/60 to-transparent blur-sm"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-janus-blue/50 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-gray-400/60 rounded-full"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-janus-blue/40 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-sm uppercase tracking-widest text-janus-blue font-medium mb-8">
              Client Results
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight letter-tighter">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="scroll-animate slide-left delay-300 bg-white p-12 rounded-lg janus-shadow hover-rise">
              <blockquote className="text-2xl font-display italic text-black mb-8 leading-relaxed">
                "Our new website increased demo requests by 40% in the first month. The design perfectly captures our brand and the conversion flow is seamless."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">TM</span>
                </div>
                <div>
                  <p className="font-semibold text-black">Taylor M., CEO</p>
                  <p className="text-gray-600">CloudSync (B2B SaaS)</p>
                </div>
              </div>
            </div>
            
            <div className="scroll-animate slide-right delay-400 bg-white p-12 rounded-lg janus-shadow hover-rise">
              <blockquote className="text-2xl font-display italic text-black mb-8 leading-relaxed">
                "JANUS delivered exactly what they promised - on time, on budget, and beyond expectations. Our conversion rate doubled after launch."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">RK</span>
                </div>
                <div>
                  <p className="font-semibold text-black">Rachel K., Founder</p>
                  <p className="text-gray-600">DevTools Pro (Developer Platform)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="scroll-animate fade-up font-display text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Common Questions
            </h2>
            <p className="scroll-animate fade-up delay-200 text-xl text-gray-600">
              Everything you need to know about our website development process.
            </p>
          </div>

          <div className="space-y-6">
            <details className="scroll-animate fade-up delay-300 group bg-gray-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-black">How long does it take to build my website?</h3>
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">Most projects are completed in 2-3 weeks for Essentials and 3-4 weeks for Growth plans. Timeline depends on content readiness and revision cycles, but we keep projects moving quickly.</p>
              </div>
            </details>

            <details className="scroll-animate fade-up delay-400 group bg-gray-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-black">Do you provide the content or do I need to write it?</h3>
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">We can work either way. You can provide content, or we can write it for you at $100-$300 per page depending on complexity. We also provide content strategy guidance to ensure everything converts well.</p>
              </div>
            </details>

            <details className="scroll-animate fade-up delay-500 group bg-gray-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-black">What platform do you build on?</h3>
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">We build on modern, fast platforms like Next.js, Webflow, or WordPress depending on your needs. All sites are optimized for speed, SEO, and easy content management.</p>
              </div>
            </details>

            <details className="scroll-animate fade-up delay-600 group bg-gray-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-black">Can I update the site myself after launch?</h3>
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">Absolutely. We build user-friendly sites and provide training so you can make content updates easily. For Growth plans, we include a Loom training video showing you exactly how to update your content.</p>
              </div>
            </details>

            <details className="scroll-animate fade-up delay-700 group bg-gray-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-black">What if I need changes after the site is live?</h3>
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">We include one round of revisions in all packages. Additional changes are available at $100 per revision or $50/hour. We also offer monthly maintenance plans starting at $30/month.</p>
              </div>
            </details>

            <details className="scroll-animate fade-up delay-800 group bg-gray-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-black">Do you handle hosting and domain setup?</h3>
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">Yes, we handle the technical setup including hosting configuration, SSL certificates, and domain connection. We can host it for you or set it up on your preferred hosting platform.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-24 h-24 border border-white/10 transform rotate-12"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-janus-blue/30 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-8 h-8 bg-white/5 transform rotate-45"></div>
          <div className="absolute bottom-20 right-16 w-12 h-12 border-2 border-white/15 transform rotate-45"></div>
          <div className="absolute top-1/3 left-8 w-2 h-16 bg-gradient-to-b from-janus-blue/40 to-transparent"></div>
          <div className="absolute top-1/3 right-8 w-2 h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-janus-blue/10 via-janus-blue/5 to-transparent"></div>
          <div className="absolute top-16 left-16 w-6 h-6 border-l-2 border-t-2 border-janus-blue/40"></div>
          <div className="absolute bottom-16 right-16 w-6 h-6 border-r-2 border-b-2 border-white/30"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <div className="scroll-animate fade-up mb-12">
            <p className="text-2xl lg:text-3xl font-display italic text-janus-blue mb-4">
              Your competitors' websites blend into the background.
            </p>
            <p className="text-3xl lg:text-4xl font-display font-bold text-white">
              Yours will convert.
            </p>
          </div>
          
          <h2 className="scroll-animate fade-up delay-200 font-display text-5xl lg:text-7xl font-bold mb-8 leading-tight letter-tighter">
            Ready to stand out?
          </h2>
          
          <p className="scroll-animate fade-up delay-300 text-xl mb-16 opacity-80 max-w-3xl mx-auto">
            Get a custom website that actually grows your business. Book a free consultation to discuss your project.
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
              <CalBooking className="w-full bg-janus-blue text-white py-4 text-lg font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
                Book Your Website Consultation
              </CalBooking>
              
              <div className="py-2">
                <p className="text-gray-400 text-sm">Or get value first:</p>
              </div>
              
              <Link
                href="https://tally.so/r/n9jxRE"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-gray-600 text-white py-3 text-base font-medium hover:border-gray-500 hover:bg-gray-800 transition-colors duration-300 rounded-sm"
              >
                Get a free website audit
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              Free consultation — we'll discuss your project and provide recommendations even if we're not a fit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}