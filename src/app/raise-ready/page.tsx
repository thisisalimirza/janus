import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ScrollAnimations from '../../components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'The Raise-Ready Kit™ — Pitch Deck + GTM Strategy | JANUS',
  description:
    'A journalist-crafted pitch deck and data-backed GTM strategy built around what makes your company uniquely fundable. For pre-funding SaaS founders. One-time, $299.',
}

// ─── Purchase CTA component (swap href for your Stripe/Gumroad link) ──────────
function BuyButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <Link
      href="https://tally.so/r/XXXXXXX" // TODO: replace with actual purchase/Tally link
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  )
}

export default function RaiseReady() {
  return (
    <div className="bg-white">
      <ScrollAnimations />
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(37,99,235,0.10)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white pt-32 pb-24">

          <div className="animate-fade-in-up mb-6">
            <span className="inline-block border border-janus-blue/40 text-janus-blue text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              The Raise-Ready Kit™ &nbsp;·&nbsp; $299 one-time
            </span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              The pitch deck
              <br />
              <span className="text-janus-blue italic">investors call about.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg lg:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed text-gray-300">
              Two deliverables. One investment. We find the story that makes your company
              fundable — then we build the GTM strategy that proves you can actually execute.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.4s' }}>
            <BuyButton className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 rounded-sm">
              Get Your Kit — $299
            </BuyButton>
            <p className="text-white/40 text-sm">
              Delivered in 7 business days &nbsp;·&nbsp; Full refund if you&apos;re not satisfied
            </p>
          </div>

          <div className="animate-fade-in-up mt-16 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-janus-blue font-bold text-sm mb-1">Deliverable 1</p>
              <p className="font-display text-lg font-bold text-white">Investor-Ready Pitch Deck</p>
              <p className="text-gray-500 text-xs mt-1">Crafted around YOUR story, not a template</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-janus-blue font-bold text-sm mb-1">Deliverable 2</p>
              <p className="font-display text-lg font-bold text-white">Full GTM Strategy</p>
              <p className="text-gray-500 text-xs mt-1">From zero to PMF — and beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-left">
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">
                Why Most Founders Struggle to Raise
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                Investors have seen
                <br />
                <span className="text-janus-blue italic">your deck before.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Thousands of founders are pitching with the same 12-slide template, the same market size numbers,
                the same traction bullet points — and the same AI-generated language. You walk into the room
                with a deck that looks like every other deck, and leave wondering why nobody called back.
              </p>
            </div>

            <div className="scroll-animate slide-right delay-200 space-y-4">
              {[
                {
                  icon: '≡',
                  label: 'Your deck follows a template investors have seen 500 times — it signals you don\'t understand what makes YOUR company different',
                },
                {
                  icon: '⌀',
                  label: 'Your GTM plan says "we\'ll do content, paid ads, and partnerships" — with no data behind why any of it will work for your specific market',
                },
                {
                  icon: '↺',
                  label: 'You built the product but haven\'t found the lede — the one thing that makes an investor\'s ears perk up and their thumbs stop scrolling',
                },
                {
                  icon: '◷',
                  label: 'You spend months on a deck instead of on your product, because nobody has told you which slides actually matter to the checks you\'re chasing',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 text-red-500 text-sm font-bold">
                    {item.icon}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">
            The JANUS Approach
          </p>
          <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold leading-tight mb-8">
            We act like journalists.
            <br />
            <span className="text-janus-blue italic">We find the lede.</span>
          </h2>
          <p className="scroll-animate fade-up delay-300 text-gray-400 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            Rick Rubin doesn&apos;t walk into a studio with a formula. He listens. He digs. He finds what makes
            an artist unique — and then he strips everything else away. That&apos;s exactly what we do with your pitch.
          </p>

          <div className="scroll-animate fade-up delay-400 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 bg-janus-blue/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">We interview you like a journalist</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We dig past the surface — your why, your insight, your unfair advantage, what you&apos;ve seen that
                nobody else has. The answers are always there. Most founders just haven&apos;t been asked the right questions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 bg-janus-blue/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">We bring real SaaS performance data</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We have run paid acquisition, built funnels, and tracked cohort data for dozens of SaaS companies.
                Your GTM strategy isn&apos;t built from frameworks — it&apos;s built from what we have personally seen work and fail.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 bg-janus-blue/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">We strip away everything that isn&apos;t the story</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every word in your deck has a job to do. Every slide either moves the investor forward or loses them.
                We cut what&apos;s noise and sharpen what&apos;s signal until the narrative is impossible to ignore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              What You Get
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight">
              Two deliverables. Built from scratch.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Pitch Deck */}
            <div className="scroll-animate slide-left delay-200 bg-gray-950 rounded-2xl p-10 text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-janus-blue rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-janus-blue text-xs font-semibold uppercase tracking-widest">Deliverable 1</p>
                  <h3 className="font-display text-2xl font-bold text-white">Investor-Ready Pitch Deck</h3>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8">
                Not a template with your logo dropped in. A story-first deck built from our research call —
                structured to match how your target investor thinks, and written in language that makes your insight
                land before slide 4.
              </p>

              <ul className="space-y-3">
                {[
                  'The founding story told as a narrative investors actually remember',
                  'Problem framed from the market\'s perspective, not yours',
                  'Solution slide built around your specific unfair advantage',
                  'Market sizing that is defensible — not just TAM/SAM/SOM boilerplate',
                  'Traction presented to show velocity, not just numbers',
                  'Ask slide structured for the specific stage and check size you are targeting',
                  'Delivered as editable Google Slides + PDF export',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-janus-blue font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GTM Strategy */}
            <div className="scroll-animate slide-right delay-300 bg-gray-50 border border-gray-100 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Deliverable 2</p>
                  <h3 className="font-display text-2xl font-bold text-black">Full GTM Strategy</h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                A documented, channel-by-channel go-to-market strategy built from the patterns we have observed
                across dozens of SaaS companies — what got them to PMF, what stalled them, and what finally broke
                through. This is not a framework. It is a playbook calibrated to your specific product and market.
              </p>

              <ul className="space-y-3">
                {[
                  'ICP definition with psychographic and behavioral depth — not just firmographics',
                  'Channel prioritization based on your stage, team size, and budget',
                  'First 90 days: specific experiments, success metrics, and kill criteria',
                  'Paid acquisition strategy with proven SaaS creative frameworks',
                  'Content and organic motion that compounds without burning runway',
                  'PMF signal identification — what to measure, what it means when you see it',
                  'Scale playbook for after the round closes',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-black font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              How It Works
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight">
              From payment to pitch-ready
              <br className="hidden lg:block" /> in 7 business days
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'You fill out the intake form',
                desc: 'A short but deep questionnaire about your product, your insight, your early traction, and the investors you are targeting. This gives us the raw material to start finding your story.',
                color: 'bg-janus-blue',
              },
              {
                step: '02',
                title: 'We do a 45-minute research call',
                desc: 'This is the journalist interview. We ask the questions most advisors don\'t — about your origin, your conviction, your specific insight about the market. The lede almost always surfaces here.',
                color: 'bg-black',
              },
              {
                step: '03',
                title: 'We build and deliver',
                desc: 'Our team writes, designs, and assembles both deliverables. You receive them within 7 business days — fully editable, with a walkthrough video explaining the strategic decisions behind every slide.',
                color: 'bg-gray-600',
              },
            ].map((step, i) => (
              <div key={i} className={`scroll-animate scale-in delay-${(i + 3) * 100} text-center`}>
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-xs font-bold tracking-wider">{step.step}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div className="scroll-animate slide-left">
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">A fit for you if...</p>
              <div className="space-y-4">
                {[
                  'You have a working product and some early validation — but you haven\'t raised yet',
                  'You\'re planning a pre-seed or seed round in the next 1–6 months',
                  'You know your product is good but you struggle to explain WHY investors should care right now',
                  'You want a GTM plan rooted in what actually works — not what sounds good in a deck',
                  'You\'re a technical founder who has built something real but finds the storytelling and go-to-market hard',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 bg-janus-blue/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-janus-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-animate slide-right delay-200">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">Not the right fit if...</p>
              <div className="space-y-4">
                {[
                  'You\'re pre-product — the deck won\'t matter if the product doesn\'t exist yet',
                  'You\'ve already raised a Series A or beyond — this kit is for the first raise',
                  'You want a template you can fill out yourself in an afternoon',
                  'You\'re raising for a consumer app — we are SaaS-focused and that\'s where our data lives',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-janus-blue/5 border border-janus-blue/20 rounded-xl p-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-black">Already funded and scaling?</strong> The Raise-Ready Kit is a stepping
                  stone. Once you close your round, the{' '}
                  <Link href="/" className="text-janus-blue font-semibold hover:underline">
                    JANUS Clarity Engine™
                  </Link>{' '}
                  is built to help you convert that capital into customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
            Pricing
          </p>
          <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold leading-tight mb-6">
            One price. Everything included.
          </h2>
          <p className="scroll-animate fade-up delay-300 text-gray-400 text-lg mb-14 max-w-xl mx-auto">
            A single hour with a decent consultant costs more than this. And they won&apos;t do the work for you.
          </p>

          <div className="scroll-animate scale-in delay-400 bg-white rounded-2xl p-10 text-left max-w-lg mx-auto">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-black">The Raise-Ready Kit™</h3>
                <p className="text-gray-400 text-sm mt-1">Pitch deck + GTM strategy. Built for you, from scratch.</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-4xl font-bold text-black">$299</p>
                <p className="text-gray-400 text-xs">one-time</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 border-t border-gray-100 pt-8">
              {[
                'Custom investor-ready pitch deck (Google Slides + PDF)',
                'Full GTM strategy document',
                '45-minute research call with a JANUS strategist',
                'Intake questionnaire to capture your story',
                'Walkthrough video explaining every strategic decision',
                'One revision round on both deliverables',
                'Delivered in 7 business days',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="text-janus-blue font-bold mt-0.5 shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <BuyButton className="block w-full text-center bg-janus-blue text-white py-4 text-base font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Get Your Raise-Ready Kit — $299
            </BuyButton>

            <p className="text-center text-gray-400 text-xs mt-4">
              Not satisfied with the final deliverables? We revise until you are — or refund you in full.
            </p>
          </div>

          <div className="scroll-animate fade-up delay-500 mt-8">
            <p className="text-gray-600 text-sm">
              Have questions before purchasing?{' '}
              <Link
                href="/"
                className="text-janus-blue hover:underline font-medium"
              >
                Book a free 15-minute call first &rarr;
              </Link>
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
                q: 'How is this different from a pitch deck template I can buy online?',
                a: 'Templates give you structure. We give you story. Anyone can buy a 12-slide Notion template. What you cannot buy is someone sitting with you, finding the insight that makes your company uniquely fundable, and building a narrative around that. The deck we produce is specific to your company — it could not be used by anyone else.',
              },
              {
                q: 'How is this different from using ChatGPT or another AI tool?',
                a: 'AI can write slides. It cannot find your lede. The most valuable part of the Raise-Ready Kit is the research call — where we ask you the questions that surface the story you have not been telling. AI does not know what you know, what you have seen, or what makes your insight non-obvious. We do the thinking, then we do the writing.',
              },
              {
                q: 'What stage should I be at to get the most from this?',
                a: 'The sweet spot is post-proof-of-concept, pre-raise. You have built something. You might have some early users or paying customers. You know you are going to raise in the next 1–6 months. You do not need a fully scaled business — you need a story that makes investors want to bet on you and your insight.',
              },
              {
                q: 'What do I need to prepare before the research call?',
                a: 'Nothing formal. Fill out the intake form when you purchase — that gives us the foundation. The research call is conversational. Come ready to talk about your founding story, what you believe about the market that others do not, and what early signal you have seen. We do the rest.',
              },
              {
                q: 'What if I\'m not happy with what you produce?',
                a: 'One revision round is included with every kit. If after revisions you are still not satisfied, we refund your $299 in full. We take on the risk because we are confident in the output.',
              },
              {
                q: 'Does this include help with the actual fundraising process?',
                a: 'The Raise-Ready Kit delivers the pitch deck and GTM strategy — the tools you need to have a compelling story and a credible plan. We do not manage your investor pipeline or outreach. If you would like ongoing strategic support after your raise, that is where the JANUS Clarity Engine™ comes in.',
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
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="scroll-animate fade-up mb-6">
            <p className="text-janus-blue font-display text-lg italic mb-3">
              You built something real.
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
              Now tell the story
              <br />
              <span className="text-janus-blue italic">that funds it.</span>
            </h2>
          </div>

          <p className="scroll-animate fade-up delay-200 text-gray-400 text-lg mb-12 leading-relaxed">
            $299. Two deliverables. Seven days.
            <br />
            Walk into your raise with the deck and the plan investors actually want to see.
          </p>

          <div className="scroll-animate scale-in delay-300 flex flex-col items-center gap-4">
            <BuyButton className="inline-block bg-janus-blue text-white px-12 py-5 text-lg font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Get Your Raise-Ready Kit — $299
            </BuyButton>
            <p className="text-gray-600 text-sm">
              Delivered in 7 business days &nbsp;·&nbsp; Full refund if not satisfied
            </p>
          </div>

          <div className="scroll-animate fade-up delay-400 mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/Ali.png"
                alt="Ali Mirza — Founder, JANUS"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="font-semibold text-white text-sm">Ali Mirza</p>
                <p className="text-gray-500 text-xs">Founder, JANUS &nbsp;·&nbsp; Personally reviews every kit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
