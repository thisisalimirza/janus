import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ScrollAnimations from '../components/ScrollAnimations'
import ClientLogoCarousel from '../components/ClientLogoCarousel'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getClientLogos } from '../lib/notion'

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
              Content Systems for Founders
            </span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              We build your content engine.
              <br />
              <span className="text-janus-blue italic">You build your company.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg lg:text-xl font-light mb-10 max-w-3xl mx-auto leading-relaxed text-gray-300">
              From your first go-to-market story to a full monthly media engine —
              JANUS turns your ideas into the content that grows your audience, earns trust, and generates inbound.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CalBooking className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 hover-rise janus-shadow-xl rounded-sm">
              Book a Free Strategy Call
            </CalBooking>
            <p className="text-xs text-white/50 mt-4">
              No pitch. No pressure. We look at where you are and tell you what would actually move the needle.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-wrap justify-center gap-6 mt-14 text-white/40 text-sm" style={{ animationDelay: '0.6s' }}>
            {['3 products. 1 agency.', 'Starts at $299', 'No long-term lock-in', 'Cancel anytime'].map((item) => (
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
            Trusted by funded founders and growing startups
          </p>
          <div className="scroll-animate scale-in">
            <ClientLogoCarousel clientLogos={clientLogos} />
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-left">
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">
                The Real Problem
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Great products stay invisible
                <br />
                <span className="text-janus-blue italic">without an audience.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founders build great things and then wonder why nobody notices.
                The answer is almost never the product — it&apos;s the absence of
                consistent, credible content that earns attention over time.
              </p>
            </div>

            <div className="scroll-animate slide-right delay-200 space-y-4">
              {[
                'Posting sporadically on LinkedIn and getting zero traction',
                'Cold outreach that goes nowhere because nobody knows who you are',
                'A great product with no community or audience behind it',
                'Competitors with inferior products winning because they show up consistently',
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
                  An audience is not a vanity metric. It&apos;s your distribution channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE THREE PRODUCTS ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              What We Do
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-6xl font-bold text-black mb-4 leading-tight">
              Three products.
              <br />
              <span className="text-janus-blue italic">One mission.</span>
            </h2>
            <p className="scroll-animate fade-up delay-300 text-lg text-gray-500 max-w-2xl mx-auto">
              Whether you need your first story, a one-time feature, or an ongoing media engine —
              there&apos;s a JANUS product built for where you are right now.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Product 1 — Traction Kit */}
            <div className="scroll-animate scale-in delay-200 flex flex-col border border-gray-200 rounded-2xl p-8 hover:border-janus-blue/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block border border-gray-200 text-gray-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                  One-time · $299
                </span>
                <h3 className="font-display text-2xl font-bold text-black mb-3">The Traction Kit™</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Your founder narrative and go-to-market strategy, built from a single interview.
                  For early-stage founders who need their first real users — and a clear story to get them.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-500 flex-1 mb-8">
                {[
                  'Journalist-style founder interview',
                  'Narrative deck that makes people care about your product',
                  'Data-backed GTM strategy for your first 90 days',
                  'Messaging that works across cold outreach, pitch decks, and ads',
                  'Delivered within 5 business days',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-janus-blue font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/traction-kit"
                className="block w-full text-center bg-gray-100 text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-sm text-sm"
              >
                Learn more &rarr;
              </Link>
            </div>

            {/* Product 2 — The Signal */}
            <div className="scroll-animate scale-in delay-300 flex flex-col border border-gray-200 rounded-2xl p-8 hover:border-janus-blue/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block border border-gray-200 text-gray-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                  One-time · $399 · Healthcare
                </span>
                <h3 className="font-display text-2xl font-bold text-black mb-3">The Signal™</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Editorial coverage for healthcare startups. We interview you, produce your founder profile,
                  and publish it to the healthcare community we&apos;ve built — plus a custom GTM strategy.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-500 flex-1 mb-8">
                {[
                  'Investigative founder interview',
                  'Custom healthcare GTM strategy',
                  'Edited clips from your interview',
                  'Published as editorial content — not advertising',
                  'Only companies we genuinely believe in get featured',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-janus-blue font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/signal"
                className="block w-full text-center bg-gray-100 text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-sm text-sm"
              >
                Learn more &rarr;
              </Link>
            </div>

            {/* Product 3 — Clarity Engine (HERO PRODUCT) */}
            <div className="scroll-animate scale-in delay-400 flex flex-col bg-gray-950 rounded-2xl p-8 relative ring-2 ring-janus-blue">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-janus-blue text-white px-5 py-1.5 text-xs font-bold tracking-widest rounded-full uppercase whitespace-nowrap">
                  Flagship Offer
                </span>
              </div>
              <div className="mb-6">
                <span className="inline-block border border-white/20 text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                  Retainer · $1,000/mo
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-3">The Clarity Engine™</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your full monthly media engine. One hour of your time per month — we produce
                  everything else. Clips, posts, carousels, copy. Enough to keep your audience
                  engaged and growing, every single month.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 flex-1 mb-8">
                {[
                  '1-hour monthly session — we find your story for the month',
                  'Full content production from every session',
                  'Social clips, posts, carousels, and written content',
                  'Consistent publishing keeps your audience active and growing',
                  'You own everything. Cancel anytime.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-janus-blue font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CalBooking className="block w-full text-center bg-janus-blue text-white py-4 font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
                Book a Strategy Call
              </CalBooking>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW THE CLARITY ENGINE WORKS ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              The Clarity Engine™
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              One hour a month.
              <br />
              <span className="text-janus-blue italic">We handle the rest.</span>
            </h2>
            <p className="scroll-animate fade-up delay-300 text-gray-500 text-lg max-w-2xl mx-auto">
              Most founders don&apos;t have time to be content creators. The Clarity Engine turns
              one monthly conversation into a full month of content — without adding a single task to your plate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                title: 'Monthly session',
                desc: 'We meet for one hour. We ask the questions that surface your story, your insights, and what your audience needs to hear this month.',
                color: 'bg-janus-blue',
              },
              {
                step: '02',
                title: 'We produce everything',
                desc: 'From that one session: clips, posts, carousels, written content. Enough to publish consistently across your channels for the entire month.',
                color: 'bg-black',
              },
              {
                step: '03',
                title: 'Your audience grows',
                desc: 'Consistent, high-quality content from a voice that already knows your story builds trust, earns followers, and generates inbound month over month.',
                color: 'bg-gray-600',
              },
            ].map((step, i) => (
              <div key={i} className={`scroll-animate scale-in delay-${(i + 3) * 100} text-center`}>
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-white">{i + 1}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-1">{step.step}</p>
                <h3 className="font-display text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate fade-up delay-600 mt-16 bg-white border border-gray-100 rounded-2xl p-8 text-center">
            <p className="text-gray-500 text-sm mb-4 max-w-xl mx-auto">
              The Clarity Engine runs every month until you cancel. Most clients see meaningful audience growth
              within 60–90 days. No minimum commitment — stay as long as it&apos;s working.
            </p>
            <CalBooking className="inline-block bg-janus-blue text-white px-8 py-3 text-sm font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Start Your Engine — $1,000/mo
            </CalBooking>
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
              The smarter alternative to hiring
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Hiring in-house */}
            <div className="scroll-animate scale-in delay-300 bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Hiring a Content Team</h3>
              </div>
              <div className="space-y-0">
                {[
                  ['Monthly cost', '$4,000–$8,000/mo (editor + copywriter)'],
                  ['Time to first content', '4–6 weeks to recruit and brief'],
                  ['Your time required', 'Lots — you manage, brief, and review'],
                  ['Output quality', 'Depends on who you hired'],
                  ['Commitment', 'Employment contracts, benefits, churn risk'],
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
                <h3 className="font-display text-2xl font-bold text-white">JANUS Clarity Engine™</h3>
              </div>
              <div className="space-y-0">
                {[
                  ['Monthly cost', '$1,000/mo — complete content system'],
                  ['Time to first content', 'Content live within days of your first session'],
                  ['Your time required', '1 hour per month. That&apos;s it.'],
                  ['Output quality', 'Produced by a team that knows your story'],
                  ['Commitment', 'Month-to-month, cancel anytime'],
                ].map(([label, value], i) => (
                  <div key={i} className="flex justify-between items-start py-4 border-b border-white/20 gap-4">
                    <span className="text-blue-100 text-sm font-medium shrink-0">{label}</span>
                    <span
                      className="text-white text-sm font-semibold text-right"
                      dangerouslySetInnerHTML={{ __html: value }}
                    />
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
            <div className="scroll-animate slide-left delay-300 bg-gray-50 border border-gray-100 p-10 rounded-xl">
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

            <div className="scroll-animate slide-right delay-400 bg-gray-50 border border-gray-100 p-10 rounded-xl">
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
              Simple. Transparent. No surprises.
            </h2>
            <p className="scroll-animate fade-up delay-300 text-gray-500 max-w-xl mx-auto">
              Pick where you are right now. You can always move up when you&apos;re ready.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">

            {/* Traction Kit */}
            <div className="scroll-animate scale-in delay-300 bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">For early-stage founders</p>
                <h3 className="font-display text-2xl font-bold text-black mb-1">Traction Kit™</h3>
                <p className="text-gray-400 text-sm mb-6">Your story and GTM strategy, built from one conversation.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$299</span>
                  <span className="text-gray-400 text-sm ml-2">one-time</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 mb-8">
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> 1-hour founder interview</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> Founder narrative deck</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> GTM strategy document</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> Delivered in 5 business days</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> One revision included</li>
                </ul>
              </div>
              <Link
                href="/traction-kit"
                className="block w-full text-center bg-gray-100 text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-sm text-sm"
              >
                Get the Traction Kit
              </Link>
            </div>

            {/* Clarity Engine — HERO */}
            <div className="scroll-animate scale-in delay-400 bg-janus-blue rounded-xl p-8 flex flex-col relative lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white px-5 py-1.5 text-xs font-bold tracking-widest rounded-full uppercase whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-2">For founders building an audience</p>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Clarity Engine™</h3>
                <p className="text-blue-200 text-sm mb-6">Your full monthly media engine. One hour — we handle everything else.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$1,000</span>
                  <span className="text-blue-200 text-sm ml-2">/month</span>
                </div>
                <ul className="space-y-2 text-sm text-blue-100 mb-8">
                  <li className="flex gap-2"><span className="text-white font-bold">✓</span> 1-hour monthly session</li>
                  <li className="flex gap-2"><span className="text-white font-bold">✓</span> Full content production each month</li>
                  <li className="flex gap-2"><span className="text-white font-bold">✓</span> Social clips, posts, carousels, copy</li>
                  <li className="flex gap-2"><span className="text-white font-bold">✓</span> Consistent publishing schedule</li>
                  <li className="flex gap-2"><span className="text-white font-bold">✓</span> You own everything. Cancel anytime.</li>
                </ul>
              </div>
              <CalBooking className="block w-full text-center bg-white text-janus-blue py-4 font-bold hover:bg-gray-50 transition-colors duration-300 rounded-sm text-base">
                Book a Strategy Call
              </CalBooking>
            </div>

            {/* The Signal */}
            <div className="scroll-animate scale-in delay-500 bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">For healthcare startups</p>
                <h3 className="font-display text-2xl font-bold text-black mb-1">The Signal™</h3>
                <p className="text-gray-400 text-sm mb-6">Editorial coverage + GTM strategy for the healthcare market.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$399</span>
                  <span className="text-gray-400 text-sm ml-2">one-time</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-500 mb-8">
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> 1-hour investigative interview</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> Healthcare GTM strategy</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> Edited video clips</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> Published as editorial content</li>
                  <li className="flex gap-2"><span className="text-janus-blue font-bold">✓</span> Application-only</li>
                </ul>
              </div>
              <Link
                href="/signal"
                className="block w-full text-center bg-gray-100 text-black py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-sm text-sm"
              >
                Apply for a Feature
              </Link>
            </div>
          </div>

          <div className="scroll-animate fade-up delay-700 text-center mt-8">
            <p className="text-sm text-gray-400">
              Not sure which is right for you? Book a free call and we&apos;ll tell you honestly.
            </p>
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
                q: 'What exactly does the Clarity Engine produce each month?',
                a: 'From a single 1-hour session, we produce enough content to publish consistently across your channels for the entire month. That typically includes short-form video clips, LinkedIn posts, carousels, and written content — whatever mix fits your audience and platforms.',
              },
              {
                q: 'Do I have to post the content myself?',
                a: 'We produce and package everything for you. Depending on your setup, we can hand it off ready to post or help coordinate publishing. The goal is to minimize your involvement beyond the monthly session.',
              },
              {
                q: 'What\'s the difference between the Traction Kit and the Clarity Engine?',
                a: 'The Traction Kit is a one-time strategy engagement — you get a narrative deck and GTM roadmap to find your first users. The Clarity Engine is your ongoing media operation: one session per month, full content production, and a growing audience over time.',
              },
              {
                q: 'Is The Signal only for healthcare?',
                a: 'Yes — The Signal is purpose-built for healthcare startups. It combines a custom GTM strategy for the healthcare market with editorial coverage published to the healthcare community we\'ve built. For non-healthcare SaaS founders, the Traction Kit or Clarity Engine are the right fit.',
              },
              {
                q: 'Can I start with the Traction Kit and upgrade later?',
                a: 'Absolutely. Many founders start with the Traction Kit to nail their story and strategy, then move to the Clarity Engine when they\'re ready to build a consistent audience. The work we do in the Traction Kit feeds directly into your Clarity Engine sessions.',
              },
              {
                q: 'How soon will I see results from the Clarity Engine?',
                a: 'Most clients see meaningful engagement growth within 60–90 days of consistent publishing. The compounding effect of regular content takes time, but the inputs are immediate — your first batch of content goes live within days of your first session.',
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
              If your product is great but nobody knows it —
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
              you don&apos;t have a product problem.
              <br />
              <span className="text-janus-blue italic">You have an audience problem.</span>
            </h2>
          </div>

          <p className="scroll-animate fade-up delay-200 text-gray-400 text-lg mb-12 leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll look at where you are,
            tell you which product makes the most sense, and show you exactly what we&apos;d do — no obligation.
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
              Book a Free Strategy Call
            </CalBooking>

            <p className="text-gray-600 text-xs mt-6">
              No sales pitch — just a candid conversation about what&apos;s holding your growth back.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
