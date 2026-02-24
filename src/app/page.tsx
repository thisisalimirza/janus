import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ScrollAnimations from '../components/ScrollAnimations'
import ClientLogoCarousel from '../components/ClientLogoCarousel'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getClientLogos } from '../lib/notion'

// Lazy load heavy components
const ROICalculator = dynamic(() => import('../components/ROICalculator'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
})

const CalBooking = dynamic(() => import('../components/CalBooking'), {
  loading: () => <div className="inline-block bg-gray-300 animate-pulse h-12 w-48 rounded-sm"></div>
})

export default async function Home() {
  const clientLogos = await getClientLogos()
  return (
    <div className="bg-white">
      <ScrollAnimations />
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.12)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center text-white pt-28 pb-20">

          <div className="animate-fade-in-up mb-6">
            <span className="inline-block border border-janus-blue/40 text-janus-blue text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              Marketing Systems for B2B SaaS
            </span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Your product is great.
              <br />
              <span className="text-janus-blue italic">Your pipeline should be too.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg lg:text-xl font-light mb-10 max-w-3xl mx-auto leading-relaxed text-gray-300">
              JANUS builds the motion videos, landing pages, and ad content that turn SaaS visitors into demos —
              delivered in 21 days, without the overhead of hiring a creative team.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CalBooking className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 hover-rise cta-pulse janus-shadow-xl rounded-sm btn-press">
              Book a Free Strategy Call
            </CalBooking>
            <p className="text-xs text-white/50 mt-4">
              No pitch. No pressure. Just a candid look at what&apos;s holding your conversions back.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-wrap justify-center gap-6 mt-14 text-white/40 text-sm" style={{ animationDelay: '0.6s' }}>
            {['21-day launch', 'No long-term contracts', 'SaaS-only focus', 'Cancel anytime'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-white/30 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
            Trusted by funded SaaS companies
          </p>
          <div className="scroll-animate scale-in">
            <ClientLogoCarousel clientLogos={clientLogos} />
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Who We Work With
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight">
              Built for one type of company
            </h2>
            <p className="scroll-animate fade-up delay-300 mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              B2B SaaS teams that have a product worth buying — but whose marketing does not reflect that yet.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="scroll-animate scale-in delay-300 card-lift group border border-gray-100 rounded-xl p-8 hover:border-janus-blue/20">
              <div className="w-10 h-10 bg-janus-blue/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-janus-blue/20 transition-colors duration-200">
                <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3">
                Post-PMF founders scaling acquisition
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                You have paying customers and real retention, but your landing page is not converting paid traffic and demos have stalled.
              </p>
            </div>

            <div className="scroll-animate scale-in delay-400 card-lift group border border-gray-100 rounded-xl p-8 hover:border-janus-blue/20">
              <div className="w-10 h-10 bg-janus-blue/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-janus-blue/20 transition-colors duration-200">
                <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3">
                Seed-to-Series-A teams with fresh capital
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                You just raised and need to move fast. You cannot afford to hire 3–5 creatives — and you should not have to.
              </p>
            </div>

            <div className="scroll-animate scale-in delay-500 card-lift group border border-gray-100 rounded-xl p-8 hover:border-janus-blue/20">
              <div className="w-10 h-10 bg-janus-blue/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-janus-blue/20 transition-colors duration-200">
                <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-black mb-3">
                Technical founders with complex products
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your product is genuinely powerful but prospects say &quot;I don&apos;t fully get it&quot; on sales calls. Your messaging needs to match your product&apos;s quality.
              </p>
            </div>
          </div>

          <div className="scroll-animate fade-up delay-400 mt-8 text-center">
            <p className="text-sm text-gray-400">
              <strong className="text-gray-500">Not a fit:</strong> Pre-product companies, consumer apps, or anyone without paying users yet.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-left">
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">
                The Real Problem
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-8">
                You have a great product.
                <br />
                <span className="text-janus-blue italic">Nobody knows it yet.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Most SaaS companies lose deals before a single conversation happens.
                Visitors arrive, look around for 8 seconds, and leave — because the
                website does not communicate value fast enough.
              </p>
            </div>

            <div className="scroll-animate slide-right delay-200 space-y-4">
              {[
                {
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />,
                  label: 'Landing page bounces because visitors cannot grasp what you do in under 10 seconds',
                },
                {
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  label: 'Sales calls that start with "Wait, can you explain what your product does again?"',
                },
                {
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />,
                  label: 'Churn from users who never understood your key features before cancelling',
                },
                {
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  label: 'Ad spend burning without converting because your creative does not stop the scroll',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-white/20 transition-colors duration-200">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.svg}
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}

              <div className="pt-2 border-t border-white/10">
                <p className="text-janus-blue font-display text-lg italic pt-4">
                  Clarity is not a &quot;nice to have.&quot; It is the growth lever you are ignoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET: THE CLARITY ENGINE ─────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Our Core Offer
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-6xl font-bold text-black mb-4 leading-tight">
              The JANUS Clarity Engine™
            </h2>
            <p className="scroll-animate fade-up delay-300 text-lg text-gray-500 max-w-2xl mx-auto">
              A complete motion video and messaging system for B2B SaaS — built in three weeks, deployed across your entire funnel.
            </p>
          </div>

          <div className="space-y-20">

            {/* Component 1 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer">
                  <Link
                    href="https://drive.google.com/drive/folders/1dG9RqcvmCKRgwLpnMfz8v-WqjHY4bums"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src="/clarity-videos.png"
                      alt="60-Second SaaS Explainer Video"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>

              <div className="scroll-animate slide-right delay-200 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 bg-janus-blue rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Component One</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight">
                  60-Second SaaS Explainer Video
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A motion video that tells your product story in 60 seconds or less. Lives on your hero section and turns bouncing visitors into booked demos.
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  {['Script written by SaaS positioning specialists', 'Professional motion animation and voiceover', 'Delivered in all formats: MP4, WebM, thumbnail', 'Two revision rounds included'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-janus-blue shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
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
                  Feature Adoption Video Series
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Three short videos that explain your most powerful features — the ones users miss, misunderstand, or abandon before they see the value.
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  {['3 feature videos, 60–90 seconds each', 'Embedded in onboarding emails and in-app tours', 'Reduces support tickets and early churn', 'Drives upsell to higher-tier plans'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-black shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scroll-animate slide-right delay-200">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center">
                  <Image
                    src="/feature-system.png"
                    alt="Feature Adoption System"
                    width={500}
                    height={350}
                    className="w-full h-auto max-w-md"
                  />
                </div>
              </div>
            </div>

            {/* Component 3 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="scroll-animate slide-left order-2 lg:order-1">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-6 flex items-center justify-center">
                  <Image
                    src="/kit.gif"
                    alt="Short-Form Ad Content Kit"
                    width={500}
                    height={350}
                    className="w-full h-auto max-w-lg"
                  />
                </div>
              </div>

              <div className="scroll-animate slide-right delay-200 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Component Three</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight">
                  Short-Form Ad Content Kit
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Up to 30 optimized short-form videos built for LinkedIn, Meta, and YouTube — using creative frameworks proven to convert in B2B SaaS.
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  {['Hook-first creative designed to stop the scroll', 'Scripts and captions included for every video', 'Optimized for paid and organic distribution', 'Ready to plug into your existing ad accounts'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Component 4 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="scroll-animate slide-left">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 bg-janus-blue rounded-full flex items-center justify-center text-white text-xs font-bold">4</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Component Four</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight">
                  Landing Page Redesign
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A full conversion-focused redesign of your hero section and landing page — built around the explainer video and the messaging framework we develop together. Visitors who land on your page will finally understand your product in under 10 seconds.
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  {['Full page copy rewrite, from headline to CTA', 'Conversion-optimized layout and section structure', 'Explainer video integrated into the hero', 'Delivered as Figma file + developer-ready specs'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-janus-blue shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scroll-animate slide-right delay-200">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-950 flex flex-col">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900 border-b border-white/10 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <div className="ml-3 flex-1 bg-white/5 rounded px-3 py-1 text-gray-500 text-xs font-mono">yourproduct.com</div>
                  </div>
                  {/* Page mockup */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-1.5 bg-janus-blue/60 rounded mb-3" />
                      <div className="w-3/4 h-4 bg-white/20 rounded mb-2" />
                      <div className="w-1/2 h-4 bg-white/10 rounded mb-5" />
                      <div className="w-full h-2 bg-white/10 rounded mb-1.5" />
                      <div className="w-5/6 h-2 bg-white/10 rounded mb-1.5" />
                      <div className="w-4/6 h-2 bg-white/10 rounded mb-6" />
                      <div className="inline-block bg-janus-blue px-5 py-2 rounded-sm">
                        <div className="w-24 h-2 bg-white/80 rounded" />
                      </div>
                    </div>
                    <div className="border border-white/10 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-janus-blue/20 rounded flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-janus-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="w-3/4 h-1.5 bg-white/20 rounded mb-1" />
                        <div className="w-1/2 h-1.5 bg-white/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Engine summary bar */}
          <div className="scroll-animate fade-up delay-300 mt-20 bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-display text-2xl font-bold text-black mb-2">
                  Four components. One system. 21 days.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                  You can start with just one component, or get the full Clarity Engine™ built at once —
                  whichever fits where you are right now. Every tier leads to the same outcome: a funnel that converts.
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm shrink-0">
                <div className="text-center px-4 py-3 bg-white border border-gray-200 rounded-xl">
                  <p className="font-bold text-black text-lg">④ only</p>
                  <p className="text-gray-400 text-xs mt-0.5">Foundation</p>
                </div>
                <div className="text-gray-300 font-light text-xl">→</div>
                <div className="text-center px-4 py-3 bg-janus-blue rounded-xl">
                  <p className="font-bold text-white text-lg">① ② ③ ④</p>
                  <p className="text-blue-200 text-xs mt-0.5">Core Engine</p>
                </div>
                <div className="text-gray-300 font-light text-xl">→</div>
                <div className="text-center px-4 py-3 bg-white border border-gray-200 rounded-xl">
                  <p className="font-bold text-black text-lg">① ② ③ ④ +∞</p>
                  <p className="text-gray-400 text-xs mt-0.5">Embedded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              The Process
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight">
              From kickoff to live — in 21 days
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                week: 'Week 1',
                title: 'Strategy Sprint',
                desc: 'We audit your positioning, interview your best customers, and map exactly what your messaging needs to communicate — and where it is failing now.',
                color: 'bg-janus-blue',
              },
              {
                week: 'Week 2',
                title: 'Production',
                desc: 'Our team writes, designs, and produces all video assets. You review, give feedback once, and we finalize everything ready to deploy.',
                color: 'bg-black',
              },
              {
                week: 'Week 3',
                title: 'Deploy and Activate',
                desc: 'We help you integrate assets into your site, ad accounts, and onboarding flows — and set benchmarks so you can measure the lift.',
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

      {/* ── COMPARISON ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Why Founders Choose JANUS
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold leading-tight">
              The smarter alternative to building in-house
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* In-House */}
            <div className="scroll-animate scale-in delay-300 bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Building In-House</h3>
              </div>
              <div className="space-y-0">
                {[
                  ['Monthly cost', '$12,000–18,000/mo (editor + copywriter + designer)'],
                  ['Time to first output', '2–3 months to recruit and onboard'],
                  ['Management overhead', 'Your time, your problem'],
                  ['Specialization', 'Generalists, not SaaS-focused'],
                  ['Commitment', 'Employment contracts and benefits'],
                ].map(([label, value], i) => (
                  <div key={i} className="flex justify-between items-start py-4 border-b border-white/10 gap-4">
                    <span className="text-gray-400 text-sm font-medium shrink-0">{label}</span>
                    <span className="text-red-400 text-sm font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* JANUS */}
            <div className="scroll-animate scale-in delay-500 bg-janus-blue rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-black text-white px-4 py-1 text-xs font-bold tracking-widest rounded-full uppercase">
                  Recommended
                </span>
              </div>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">JANUS</h3>
              </div>
              <div className="space-y-0">
                {[
                  ['Monthly cost', 'Starts at $3,000/mo — full system'],
                  ['Time to first output', '21 days, guaranteed'],
                  ['Management overhead', 'Zero — we run the entire process'],
                  ['Specialization', 'SaaS-only, motion video experts'],
                  ['Commitment', 'Month-to-month, cancel anytime'],
                ].map(([label, value], i) => (
                  <div key={i} className="flex justify-between items-start py-4 border-b border-white/20 gap-4">
                    <span className="text-blue-100 text-sm font-medium shrink-0">{label}</span>
                    <span className="text-white text-sm font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              What Founders Say
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight">
              Real feedback. Real results.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="scroll-animate slide-left delay-300 card-lift bg-gray-50 border border-gray-100 p-10 rounded-xl">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-janus-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-display italic text-black mb-6 leading-relaxed">
                &quot;We had strong product-market fit but weak messaging. JANUS made it click. We&apos;re now converting 30% more landing page traffic.&quot;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PM</span>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Priya M.</p>
                  <p className="text-gray-400 text-xs">Founder, GrowthOS &middot; Seed Stage</p>
                </div>
              </div>
            </div>

            <div className="scroll-animate slide-right delay-400 card-lift bg-gray-50 border border-gray-100 p-10 rounded-xl">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-janus-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-display italic text-black mb-6 leading-relaxed">
                &quot;The messaging transformation helped us land our first Fortune 100 client. Clear ROI from day one.&quot;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SC</span>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Sarah C.</p>
                  <p className="text-gray-400 text-xs">VP Sales, DataVault &middot; Series B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              Pricing
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Start with one component.<br className="hidden lg:block" /> Scale when you&apos;re ready.
            </h2>
            <p className="scroll-animate fade-up delay-300 text-gray-500 max-w-xl mx-auto">
              Every tier builds on the same Clarity Engine™ system — you choose how much of it to activate.
              Hiring a single senior creative costs $7–10k/month. JANUS is your entire system.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">

            {/* Foundation — Landing Page only */}
            <div className="scroll-animate scale-in delay-300 card-lift bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 mb-4">
                  <span className="w-5 h-5 bg-janus-blue/10 rounded-full flex items-center justify-center text-janus-blue text-xs font-bold">④</span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Landing page only</span>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-1">Foundation</h3>
                <p className="text-gray-400 text-sm mb-6">Start with your most important conversion point</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$3,000</span>
                  <span className="text-gray-400 text-sm ml-2">one-time</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-500 mb-8">
                  {['Full landing page copy rewrite, headline to CTA', 'Conversion-optimized layout and section structure', 'Brand messaging framework included', 'Delivered as Figma file + developer-ready specs', 'Two revision rounds included'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-janus-blue shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CalBooking className="block w-full text-center bg-gray-100 text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-sm">
                Book a Strategy Call
              </CalBooking>
            </div>

            {/* Core Engine — All 4 components */}
            <div className="scroll-animate scale-in delay-400 bg-janus-blue rounded-xl p-8 flex flex-col relative lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white px-5 py-1.5 text-xs font-bold tracking-widest rounded-full uppercase whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 mb-4">
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">①</span>
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">②</span>
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">③</span>
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">④</span>
                  <span className="text-xs text-blue-200 font-medium uppercase tracking-wide ml-1">All 4 components</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">Core Engine</h3>
                <p className="text-blue-200 text-sm mb-6">The complete JANUS Clarity Engine™, built at once</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$5,000</span>
                  <span className="text-blue-200 text-sm ml-2">one-time</span>
                </div>
                <ul className="space-y-3 text-sm text-blue-100 mb-8">
                  {[
                    ['60-second SaaS explainer video', '①'],
                    ['3 feature adoption videos, 60–90 sec each', '②'],
                    ['10 short-form ad videos with scripts', '③'],
                    ['Landing page redesign, copy + layout', '④'],
                    ['Brand messaging framework', ''],
                    ['2 months of post-launch support', ''],
                  ].map(([label, badge]) => (
                    <li key={label} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-white/80 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {label}{badge && <span className="text-blue-300 text-xs ml-1">({badge})</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <CalBooking className="block w-full text-center bg-white text-janus-blue py-4 font-bold hover:bg-gray-50 transition-colors duration-300 rounded-sm text-base">
                Book a Strategy Call
              </CalBooking>
            </div>

            {/* Embedded — Core Engine + ongoing */}
            <div className="scroll-animate scale-in delay-500 card-lift bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 mb-4">
                  <span className="w-5 h-5 bg-janus-blue/10 rounded-full flex items-center justify-center text-janus-blue text-xs font-bold">①</span>
                  <span className="w-5 h-5 bg-janus-blue/10 rounded-full flex items-center justify-center text-janus-blue text-xs font-bold">②</span>
                  <span className="w-5 h-5 bg-janus-blue/10 rounded-full flex items-center justify-center text-janus-blue text-xs font-bold">③</span>
                  <span className="w-5 h-5 bg-janus-blue/10 rounded-full flex items-center justify-center text-janus-blue text-xs font-bold">④</span>
                  <span className="text-gray-300 font-light text-sm mx-0.5">+</span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Ongoing</span>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-1">Embedded Creative</h3>
                <p className="text-gray-400 text-sm mb-6">Full Engine in month one, then continuous output</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$7,500+</span>
                  <span className="text-gray-400 text-sm ml-2">/month</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-500 mb-8">
                  {['Full Core Engine delivered in month 1', '30+ pieces of content monthly after that', 'Dedicated creative team, no management overhead', 'Weekly strategy sessions', 'Ad campaign management included', 'Cancel anytime, no penalty'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CalBooking className="block w-full text-center bg-gray-100 text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-sm">
                Book a Strategy Call
              </CalBooking>
            </div>
          </div>

          {/* Traction Kit — pre-funding bridge */}
          <div className="scroll-animate fade-up delay-550 mt-10 bg-gray-950 border border-white/10 rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-1">Pre-funding or early-stage?</p>
              <p className="font-display text-lg font-bold text-white">The Traction Kit™ — $299</p>
              <p className="text-gray-400 text-sm mt-1 max-w-lg">
                A founder narrative deck and data-backed GTM strategy built around your story.
                Get your first real users — then scale with the Engine when you&apos;re ready.
              </p>
            </div>
            <Link
              href="/traction-kit"
              className="shrink-0 bg-white text-black px-6 py-3 text-sm font-bold hover:bg-gray-100 transition-colors duration-200 rounded-sm whitespace-nowrap"
            >
              Learn more
              <svg className="inline-block w-4 h-4 ml-1.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Lead magnets for not-yet-ready visitors */}
          <div className="scroll-animate fade-up delay-600 mt-4 bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <div className="text-center lg:text-left shrink-0">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Not ready to commit?</p>
                <p className="font-display text-lg font-bold text-black">Get something valuable first — free.</p>
              </div>
              <div className="flex-1 grid sm:grid-cols-2 gap-3 w-full">
                <Link
                  href="https://tally.so/r/nrMgY2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-gray-200 rounded-xl px-5 py-4 hover:border-janus-blue/40 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-janus-blue/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-janus-blue/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.867V15.5a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm">Get 2 free ad videos</p>
                    <p className="text-gray-400 text-xs">We'll make them for your product, no strings attached</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 ml-auto shrink-0 group-hover:text-janus-blue transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="https://tally.so/r/n9jxRE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-gray-200 rounded-xl px-5 py-4 hover:border-janus-blue/40 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-janus-blue/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-janus-blue/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm">Free landing page teardown</p>
                    <p className="text-gray-400 text-xs">We'll review your copy and tell you exactly what to fix</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 ml-auto shrink-0 group-hover:text-janus-blue transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="scroll-animate fade-up delay-700 text-center mt-6">
            <p className="text-sm text-gray-400">
              Performance-based pricing available for funded startups. Ask on your strategy call.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ───────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="scroll-animate fade-up font-display text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              How much is unclear messaging costing you?
            </h2>
            <p className="scroll-animate fade-up delay-200 text-gray-400 max-w-xl mx-auto">
              Most teams are leaving $20,000–$50,000/month on the table. Run the numbers.
            </p>
          </div>
          <div className="scroll-animate fade-up delay-400 max-w-4xl mx-auto">
            <ROICalculator />
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
                q: 'What exactly do I get with the Core Engine?',
                a: 'You get the complete JANUS Clarity Engine™: one 60-second SaaS explainer video, three feature adoption videos, ten short-form ad videos with scripts, a full landing page redesign (copy + layout), and a brand messaging framework — all produced in 21 days. Two months of post-launch iteration support is included.',
              },
              {
                q: 'How fast will I see results?',
                a: 'Most clients see improved conversion rates within 30 days of deploying the explainer video on their landing page. Ad content typically shows measurable lift within the first two weeks of running.',
              },
              {
                q: 'Do you work with early-stage startups?',
                a: 'Yes — we specialize in Seed through Series B SaaS companies. Our requirement is a working product and at least a small base of paying or active users. Pre-product companies are not a fit.',
              },
              {
                q: "What if I don't like what you produce?",
                a: "We iterate until it's right. Every engagement includes a structured feedback round before final delivery. If we miss the mark after revisions, we'll refund your investment — no questions asked.",
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. Monthly retainers are month-to-month with no cancellation fees. The Core Engine is a one-time project with no ongoing commitment unless you choose to add a retainer.',
              },
              {
                q: 'How is this different from a video production company?',
                a: "Video companies produce whatever you brief them on. We start with strategy — understanding your ICP, their language, and your funnel — before a single frame is designed. The output is built to convert, not just look good.",
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
      <section id="contact" className="py-32 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="scroll-animate fade-up mb-6">
            <p className="text-janus-blue font-display text-lg italic mb-2">
              If your product is great but your pipeline is not —
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
              it&apos;s not the product.
              <br />
              It&apos;s the story.
            </h2>
          </div>

          <p className="scroll-animate fade-up delay-200 text-gray-400 text-lg mb-12 leading-relaxed">
            Book a free 30-minute strategy call. We will look at your current messaging, identify where you are
            losing leads, and tell you exactly what we would do — no obligation.
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

            <div className="space-y-3">
              <CalBooking className="w-full bg-janus-blue text-white py-4 text-base font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
                Book a Free Strategy Call
              </CalBooking>

              <p className="text-gray-500 text-xs pt-1">Not ready to talk? Get value first:</p>

              <Link
                href="https://tally.so/r/nrMgY2"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-white/10 text-gray-300 py-3 text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-colors duration-300 rounded-sm"
              >
                Request 2 free ad videos for your company &rarr;
              </Link>
              <Link
                href="https://tally.so/r/n9jxRE"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-white/10 text-gray-300 py-3 text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-colors duration-300 rounded-sm"
              >
                Get a free teardown of your landing page copy &rarr;
              </Link>
            </div>

            <p className="text-gray-600 text-xs mt-6">
              No sales pitch — just a candid conversation about your marketing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
