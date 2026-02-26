import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ScrollAnimations from '../../components/ScrollAnimations'
import ClientLogoCarousel from '../../components/ClientLogoCarousel'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getClientLogos } from '../../lib/notion'

const CalBooking = dynamic(() => import('../../components/CalBooking'), {
  loading: () => <div className="inline-block bg-gray-300 animate-pulse h-12 w-48 rounded-sm"></div>
})

export default async function WebsitesPage() {
  const clientLogos = await getClientLogos()
  return (
    <div className="bg-white">
      <ScrollAnimations />
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.10)_0%,_transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center text-white pt-20 pb-16">
          <div className="animate-fade-in-up mb-6">
            <span className="inline-block border border-janus-blue/40 text-janus-blue text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              Website Design &amp; Development
            </span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Most SaaS websites look like
              <br />
              <span className="text-janus-blue italic">glorified spreadsheets.</span>
              <br />
              <span className="block mt-2">Yours won&apos;t.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg lg:text-xl font-light mb-10 max-w-3xl mx-auto leading-relaxed text-gray-300">
              JANUS builds conversion-focused websites that turn visitors into customers —
              custom design, mobile-optimized, and built to grow your business, not just look pretty.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CalBooking className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 hover-rise janus-shadow-xl rounded-sm">
              Get Your Website Quote
            </CalBooking>
            <p className="text-xs text-white/50 mt-4">
              Free 20-min call — no pitch, just an honest look at what you need.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-wrap justify-center gap-6 mt-14 text-white/40 text-sm" style={{ animationDelay: '0.6s' }}>
            {['Launch in 2–3 weeks', 'No templates', 'Mobile-first', 'Cancel anytime'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-white/30 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hidden lg:block">
          <div className="w-px h-8 bg-white/30 mb-2 mx-auto" />
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="scroll-animate fade-up text-center text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
            Website Development That Works
          </p>
          <blockquote className="scroll-animate fade-up delay-200 text-xl lg:text-2xl font-display italic text-black max-w-3xl mx-auto text-center leading-relaxed mb-10">
            &ldquo;We don&apos;t build websites. We build customer acquisition systems that happen to look incredible.&rdquo;
          </blockquote>
          <div className="scroll-animate scale-in delay-400">
            <ClientLogoCarousel clientLogos={clientLogos} />
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-left">
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
                The Website Problem
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Your competitors&apos; sites all look the same.
                <br />
                <span className="italic text-janus-blue">Boring. Generic. Forgettable.</span>
              </h2>
            </div>

            <div className="scroll-animate slide-right delay-200 space-y-4">
              {[
                'Built by developers who think good design is optional',
                'Agencies that prioritize pretty pictures over conversion rates',
                'Template sites that look like every other SaaS company',
                'Traffic that never converts because nothing directs it to action',
              ].map((label, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{label}</p>
                </div>
              ))}
              <div className="pt-2 border-t border-white/10">
                <p className="text-janus-blue font-display text-lg italic pt-4">
                  We build websites that sell — because what&apos;s the point of traffic if it doesn&apos;t convert?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Our Website System
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              What You Get
            </h2>
            <p className="scroll-animate fade-up delay-300 text-lg text-gray-500 max-w-2xl mx-auto">
              A complete website built to convert visitors into customers from day one.
            </p>
          </div>

          <div className="space-y-20">
            {/* Component 1 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500 p-8 flex items-center justify-center">
                  <Image
                    src="/custom-design-system.png"
                    alt="Custom Brand-Driven Design"
                    width={400}
                    height={300}
                    className="w-full h-auto max-w-sm"
                  />
                </div>
              </div>

              <div className="scroll-animate slide-right delay-200 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 bg-janus-blue rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Component One</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight">
                  Custom Design System
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  No templates. No themes. Every website is designed from scratch to match your brand
                  and convert your specific audience.
                </p>
                <div className="border-l-4 border-janus-blue pl-5">
                  <p className="text-gray-500 italic text-sm leading-relaxed">
                    Mobile-first design that looks perfect on every device.
                  </p>
                </div>
              </div>
            </div>

            {/* Component 2 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="scroll-animate slide-left">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Component Two</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight">
                  Conversion Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Strategic page structure, psychological triggers, and clear conversion paths
                  designed to turn browsers into buyers.
                </p>
                <div className="border-l-4 border-black pl-5">
                  <p className="text-gray-500 italic text-sm leading-relaxed">
                    Every element placed with intention. Every page built to sell.
                  </p>
                </div>
              </div>

              <div className="scroll-animate slide-right delay-200">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center">
                  <Image
                    src="/conversion-architecture.png"
                    alt="Strategic Conversion Flow"
                    width={400}
                    height={300}
                    className="w-full h-auto max-w-sm"
                  />
                </div>
              </div>
            </div>

            {/* Component 3 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/lighthouse-scores.jpg"
                    alt="Perfect Lighthouse scores"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="scroll-animate slide-right delay-200 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Component Three</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight">
                  Performance &amp; Growth
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lightning-fast load times, SEO optimization, and analytics setup so you can
                  track what works and scale what converts.
                </p>
                <div className="border-l-4 border-gray-400 pl-5">
                  <p className="text-gray-500 italic text-sm leading-relaxed">
                    Built for speed, optimized for search, designed to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
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

      {/* ── CARE & MAINTENANCE ───────────────────────────────────────────── */}
      <section id="care-plans" className="py-24 lg:py-32 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Website Care Plans
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Never think about
              <br />
              <span className="text-janus-blue italic">your website again.</span>
            </h2>
            <p className="scroll-animate fade-up delay-300 text-lg text-gray-400 max-w-2xl mx-auto">
              You have a business to run. We handle the hosting, security, updates, and monitoring
              so your site just works — every day, without your involvement.
            </p>
          </div>

          {/* Feature breakdown */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="scroll-animate slide-left space-y-6">
              {[
                {
                  title: 'No technical learning required',
                  desc: 'Forget about servers, SSL certificates, or DNS settings. We handle all the technical complexity so you don\'t have to.',
                },
                {
                  title: 'One contact for everything',
                  desc: 'When something breaks, you know exactly who to call. No more bouncing between hosting companies.',
                },
                {
                  title: 'Proactive monitoring',
                  desc: 'We monitor uptime 24/7, handle security updates, create backups, and optimize performance — automatically.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-janus-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="scroll-animate slide-right delay-200 bg-gray-800 border border-white/10 rounded-xl p-8">
              <h4 className="font-display text-lg font-bold text-white mb-6">What you get every month</h4>
              <div className="space-y-0">
                {[
                  ['Website hosting & SSL', 'Included'],
                  ['24/7 uptime monitoring', 'Automatic'],
                  ['Security updates & backups', 'Weekly'],
                  ['Performance optimization', 'Ongoing'],
                  ['Analytics & growth reports', 'Monthly'],
                  ['Priority support', '24-hr response'],
                ].map(([label, value], i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                    <span className="text-gray-300 text-sm">{label}</span>
                    <span className="text-janus-blue text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Care plan tiers */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="scroll-animate scale-in delay-300 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Basic</p>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Essential Care</h3>
                <p className="text-gray-400 text-sm mb-6">Hosting and peace of mind, covered.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$30</span>
                  <span className="text-gray-400 text-sm ml-2">/month</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 mb-8">
                  {[
                    'Hosting & SSL management',
                    'Uptime monitoring',
                    'Basic security updates',
                    'Monthly backups',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-janus-blue font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CalBooking className="block w-full text-center bg-white/10 text-white py-3 font-semibold hover:bg-white/20 transition-colors duration-300 rounded-sm text-sm">
                Get Started
              </CalBooking>
            </div>

            <div className="scroll-animate scale-in delay-400 bg-janus-blue rounded-xl p-8 flex flex-col relative lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white px-5 py-1.5 text-xs font-bold tracking-widest rounded-full uppercase whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-2">Recommended</p>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Growth Care</h3>
                <p className="text-blue-200 text-sm mb-6">Full maintenance with monthly content updates.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$75</span>
                  <span className="text-blue-200 text-sm ml-2">/month</span>
                </div>
                <ul className="space-y-2 text-sm text-blue-100 mb-8">
                  {[
                    'Everything in Essential Care',
                    'Weekly security scans',
                    'Performance optimization',
                    'Monthly analytics reports',
                    '1 content update/month',
                    'Priority email support',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-white font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CalBooking className="block w-full text-center bg-white text-janus-blue py-4 font-bold hover:bg-gray-50 transition-colors duration-300 rounded-sm">
                Get Started
              </CalBooking>
            </div>

            <div className="scroll-animate scale-in delay-500 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Full-Service</p>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Premium Care</h3>
                <p className="text-gray-400 text-sm mb-6">Ongoing dev time plus everything in Growth.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$150</span>
                  <span className="text-gray-400 text-sm ml-2">/month</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 mb-8">
                  {[
                    'Everything in Growth Care',
                    '2 hours of dev time/month',
                    'Quarterly site reviews',
                    'Phone/video support',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-janus-blue font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CalBooking className="block w-full text-center bg-white/10 text-white py-3 font-semibold hover:bg-white/20 transition-colors duration-300 rounded-sm text-sm">
                Get Started
              </CalBooking>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE BUILD ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Our Process
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              From kickoff to live — in 3 weeks
            </h2>
            <p className="scroll-animate fade-up delay-300 text-lg text-gray-500 max-w-xl mx-auto">
              A proven process that takes you from brief to a conversion-ready website, on time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                week: 'Week 1',
                title: 'Discovery & Strategy',
                desc: 'Deep dive into your business, audience, and goals. Competitive analysis, wireframes, and content strategy.',
                color: 'bg-janus-blue',
              },
              {
                week: 'Week 2',
                title: 'Design & Development',
                desc: 'Custom design creation and full development. Mobile optimization, integrations, and performance testing.',
                color: 'bg-black',
              },
              {
                week: 'Week 3',
                title: 'Launch & Optimize',
                desc: 'Final revisions, testing, and launch. Analytics setup, training, and handoff so you own it completely.',
                color: 'bg-gray-600',
              },
            ].map((step, i) => (
              <div key={i} className={`scroll-animate scale-in delay-${(i + 3) * 100} text-center`}>
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-white">{i + 1}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-1">{step.week}</p>
                <h3 className="font-display text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH PLAN FEATURES ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Growth Plan Features
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Built to convert
              <br />
              <span className="text-janus-blue italic">and scale.</span>
            </h2>
            <p className="scroll-animate fade-up delay-300 text-lg text-gray-500 max-w-2xl mx-auto">
              Every Growth package includes the analytics, lead capture, and testing layer
              that turns traffic into a pipeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: 'User Behavior Analytics',
                desc: 'See exactly how users interact with your site — what they click, what they ignore, where they drop off.',
                quote: 'You\'ll see how users move through your site so we can optimize it together.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
              },
              {
                title: 'Automated Lead Capture',
                desc: 'Every contact form submission automatically flows into your CRM, Google Sheets, or email system.',
                quote: 'Every submission goes into your CRM automatically — no more missed leads.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
              },
              {
                title: 'A/B Testing Framework',
                desc: 'Test different headlines, CTAs, or layouts to see which version converts better — data over guesswork.',
                quote: 'Want to test two versions of your homepage? We\'ll set that up for you.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />,
              },
              {
                title: 'User Feedback System',
                desc: 'A subtle feedback widget lets users tell you if anything\'s unclear — priceless intel for optimization.',
                quote: 'Users can flag confusion in real time, so you always know what to improve.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />,
              },
            ].map((feature, i) => (
              <div key={i} className={`scroll-animate scale-in delay-${(i + 2) * 100} bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-janus-blue/30 hover:shadow-lg transition-all duration-300`}>
                <div className="w-10 h-10 bg-janus-blue/10 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{feature.desc}</p>
                <div className="bg-janus-blue/5 border-l-4 border-janus-blue px-4 py-3 rounded-r-lg">
                  <p className="text-janus-blue text-sm font-medium italic">&ldquo;{feature.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate fade-up delay-500 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'SEO Optimization',
                desc: 'Quick SEO audit + fixes for the top issues holding you back from ranking.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: 'Social Sharing',
                desc: 'Custom favicon and social preview cards so your site looks branded everywhere.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />,
              },
              {
                title: 'Content Training',
                desc: 'A short walkthrough video showing exactly how to update your site content.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
              },
            ].map((item, i) => (
              <div key={i} className="text-center border border-gray-100 rounded-xl p-6 hover:border-janus-blue/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-janus-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h4 className="font-display text-base font-bold text-black mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Client Results
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight">
              Real feedback. Real results.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="scroll-animate slide-left delay-300 bg-white border border-gray-100 p-10 rounded-xl">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-janus-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-display italic text-black mb-6 leading-relaxed">
                &ldquo;Our new website increased demo requests by 40% in the first month. The design perfectly captures our brand and the conversion flow is seamless.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">TM</span>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Taylor M.</p>
                  <p className="text-gray-400 text-xs">CEO, CloudSync &middot; B2B SaaS</p>
                </div>
              </div>
            </div>

            <div className="scroll-animate slide-right delay-400 bg-white border border-gray-100 p-10 rounded-xl">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-janus-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-display italic text-black mb-6 leading-relaxed">
                &ldquo;JANUS delivered exactly what they promised — on time, on budget, and beyond expectations. Our conversion rate doubled after launch.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">RK</span>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Rachel K.</p>
                  <p className="text-gray-400 text-xs">Founder, DevTools Pro &middot; Developer Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="scroll-animate fade-up font-display text-4xl font-bold text-black mb-3">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How long does it take to build my website?',
                a: 'Most projects are completed in 2–3 weeks for Essentials and 3–4 weeks for Growth. Timeline depends on how quickly content is ready and revision cycles, but we keep projects moving.',
              },
              {
                q: 'Do you provide the content or do I need to write it?',
                a: 'Both work. You can provide content, or we can write it for you at $150/page. We also provide content strategy guidance so everything is positioned to convert.',
              },
              {
                q: 'What platform do you build on?',
                a: 'We build on modern, fast platforms like Next.js, Webflow, or WordPress — depending on your needs. All sites are optimized for speed, SEO, and easy content management.',
              },
              {
                q: 'Can I update the site myself after launch?',
                a: 'Yes. We build user-friendly sites and provide a training walkthrough so you can make content updates easily. Growth plan includes a full Loom video walkthrough.',
              },
              {
                q: 'What if I need changes after the site is live?',
                a: 'One round of revisions is included in all packages. Additional changes are available at $150/hour, or you can add a care plan that includes monthly dev time.',
              },
              {
                q: 'Do you handle hosting and domain setup?',
                a: 'Yes — we handle the full technical setup including hosting, SSL, and domain connection. We can host it for you on a care plan or hand it off to your preferred hosting platform.',
              },
            ].map((item, i) => (
              <details key={i} className="scroll-animate fade-up group bg-gray-50 border border-gray-100 rounded-xl">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200 list-none">
                  <h3 className="text-base font-semibold text-black pr-4">{item.q}</h3>
                  <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="scroll-animate fade-up mb-6">
            <p className="text-janus-blue font-display text-lg italic mb-2">
              Your competitors&apos; websites blend into the background.
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
              Yours will stand out
              <br />
              <span className="text-janus-blue italic">and convert.</span>
            </h2>
          </div>

          <p className="scroll-animate fade-up delay-200 text-gray-400 text-lg mb-12 leading-relaxed">
            Book a free 20-minute call. We&apos;ll look at what you need and tell you honestly
            whether we&apos;re the right fit — and if not, we&apos;ll point you somewhere that is.
          </p>

          <div className="scroll-animate scale-in delay-300 bg-gray-900 border border-white/10 rounded-2xl p-10 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Image
                  src="/Ali.png"
                  alt="Ali Mirza — Founder, JANUS"
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900" />
              </div>
              <div className="ml-5 text-left">
                <p className="font-bold text-white">Ali Mirza</p>
                <p className="text-gray-400 text-sm">Founder, JANUS</p>
              </div>
            </div>

            <CalBooking className="w-full bg-janus-blue text-white py-4 text-base font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Book a Free 20-Min Call
            </CalBooking>

            <div className="mt-4">
              <Link
                href="https://tally.so/r/n9jxRE"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-white/10 text-gray-300 py-3 text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-colors duration-300 rounded-sm"
              >
                Get a free website audit instead &rarr;
              </Link>
            </div>

            <p className="text-gray-600 text-xs mt-6">
              No sales pitch — we&apos;ll discuss your project and give honest recommendations even if we&apos;re not the right fit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
