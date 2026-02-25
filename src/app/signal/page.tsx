import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ScrollAnimations from '../../components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'The Signal™ — Healthcare Distribution for Startups | JANUS',
  description:
    'Your healthcare startup deserves to be in front of the people who can actually use it. One 1-hour call. One custom GTM strategy. Your story shared directly into the feeds of senior healthcare executives and decision-makers. $399, one-time.',
}

function BuyButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <Link
      href="https://tally.so/r/XXXXXXX" // TODO: replace with actual purchase link
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  )
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className ?? 'w-4 h-4 text-janus-blue shrink-0 mt-0.5'} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function Signal() {
  return (
    <div className="bg-white">
      <ScrollAnimations />
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        {/* Subtle blue pulse in top-left, medical cross suggestion */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.12)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(37,99,235,0.06)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white pt-32 pb-24">

          <div className="animate-fade-in-up mb-6">
            <span className="inline-block border border-janus-blue/40 text-janus-blue text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              The Signal™ &nbsp;·&nbsp; $399 one-time
            </span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Your healthcare startup,
              <br />
              <span className="text-janus-blue italic">in front of the people who run healthcare.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg lg:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed text-gray-300">
              One hour. Two deliverables. We find your story, build your go-to-market strategy,
              and broadcast your best moments directly into the LinkedIn feeds of senior healthcare executives,
              physicians, and decision-makers who are shaping the future of care — today.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.4s' }}>
            <BuyButton className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 rounded-sm">
              Get Your Signal — $399
            </BuyButton>
            <p className="text-white/40 text-sm">
              Limited spots per month &nbsp;·&nbsp; Full refund if not satisfied
            </p>
          </div>

          <div className="animate-fade-in-up mt-16 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-janus-blue font-bold text-sm mb-1">Deliverable 1</p>
              <p className="font-display text-lg font-bold text-white">Custom GTM Strategy</p>
              <p className="text-gray-500 text-xs mt-1">Built from your story. Written to move people.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-janus-blue font-bold text-sm mb-1">Deliverable 2</p>
              <p className="font-display text-lg font-bold text-white">Live Distribution</p>
              <p className="text-gray-500 text-xs mt-1">Your story, inside the feeds of healthcare leaders.</p>
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
                The Real Problem
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                The product is built.
                <br />
                <span className="text-janus-blue italic">The room is locked.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                You&apos;ve built something that could genuinely improve patient outcomes, reduce
                physician burnout, or modernize an outdated system. But healthcare moves on trust
                and relationships — and the decision-makers you need to reach don&apos;t respond to
                cold emails, ignore LinkedIn requests from strangers, and are too busy running
                health systems to find you. Distribution is the problem. Not the product.
              </p>
            </div>

            <div className="scroll-animate slide-right delay-200 space-y-4">
              {[
                {
                  label: 'You can\'t get a response from the CMO, hospital director, or clinical lead who would immediately see the value in what you\'ve built',
                },
                {
                  label: 'You\'re spending on ads targeting "healthcare professionals" but reaching nobody who can actually buy, deploy, or champion your product',
                },
                {
                  label: 'The conferences cost thousands, the panels are gatekept, and by the time you\'ve built a network the runway is gone',
                },
                {
                  label: 'Your product is genuinely good — but the people who need to know it exists have never heard of you, and you have no clear path to change that',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE UNFAIR ADVANTAGE ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">
            The Distribution
          </p>
          <h2 className="scroll-animate fade-up delay-100 font-display text-4xl lg:text-5xl font-bold leading-tight mb-8">
            We have the room.
            <br />
            <span className="text-janus-blue italic">We&apos;re offering you the door.</span>
          </h2>
          <p className="scroll-animate fade-up delay-200 text-gray-400 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            Our founder has spent years building a personal LinkedIn audience of senior healthcare leaders —
            not bots, not generic followers, but real executives actively shaping healthcare today and tomorrow.
          </p>

          {/* Audience breakdown */}
          <div className="scroll-animate fade-up delay-300 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-left">
            {[
              {
                category: 'Health System Leaders',
                examples: 'Chief Medical Officers, Hospital CEOs, VPs of Clinical Operations, Patient Experience Directors',
              },
              {
                category: 'Physician Decision-Makers',
                examples: 'Department chiefs, senior attending physicians, clinical informaticists, and physician-entrepreneurs',
              },
              {
                category: 'Health System Operators',
                examples: 'CIOs and CTOs of hospital networks, digital health program directors, innovation leads',
              },
              {
                category: 'Policy & Administration',
                examples: 'Healthcare policy advisors, government health administrators, regulatory affairs leaders',
              },
              {
                category: 'Next-Gen Practitioners',
                examples: 'Residents and fellows who are early adopters — the prescribers and champions of new technology',
              },
              {
                category: 'Investors & Builders',
                examples: 'Health-focused VCs, medtech investors, digital health founders who have been where you are',
              },
            ].map((item, i) => (
              <div key={i} className={`scroll-animate fade-up delay-${(i + 3) * 100} bg-white/5 border border-white/10 rounded-xl p-5`}>
                <p className="text-janus-blue font-semibold text-sm mb-2">{item.category}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{item.examples}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate fade-up delay-400 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              This isn&apos;t a media buy. You can&apos;t get into this audience by running an ad.
              These are <strong className="text-white">personal connections</strong> — people who follow
              this account because they trust the content, not because an algorithm put it in front of them.
              When your story appears in their feed, it&apos;s credibility by association.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              What You Get
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black leading-tight">
              Two deliverables. Real impact.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* GTM Strategy */}
            <div className="scroll-animate slide-left delay-200 bg-gray-950 rounded-2xl p-10 text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-janus-blue rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-janus-blue text-xs font-semibold uppercase tracking-widest">Deliverable 1</p>
                  <h3 className="font-display text-2xl font-bold text-white">Custom GTM Strategy</h3>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8">
                We start the hour as investigative journalists — not consultants with a framework.
                We dig for the lead: the story, the insight, the specific problem you&apos;re solving
                that most people don&apos;t even know exists yet. Then we build a go-to-market strategy
                around what we find, rooted in what actually works for healthcare startups in your
                exact stage.
              </p>

              <ul className="space-y-3">
                {[
                  'Your compelling narrative — the hook that makes healthcare leaders lean in, not scroll past',
                  'Ideal customer profile with the specificity to actually find the right buyers',
                  'Channel strategy built for healthcare: where your buyers actually spend their attention',
                  'First 90 days: prioritized actions, success metrics, and what to ignore',
                  'Messaging that speaks to both clinical value and operational/financial ROI',
                  'Delivered as a written strategy document within 5 business days',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckIcon />
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Distribution */}
            <div className="scroll-animate slide-right delay-300 bg-gray-50 border border-gray-100 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Deliverable 2</p>
                  <h3 className="font-display text-2xl font-bold text-black">Live Distribution</h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                We record our interview. We edit the sharpest, most compelling moments into
                short-form clips — the moments where your insight lands, where the problem
                becomes visceral, where a healthcare leader watching stops and thinks:
                <em className="text-gray-800"> &quot;This is exactly what we need.&quot;</em> Those clips
                go live on our social channels, directly into the feeds of the audience we&apos;ve built.
              </p>

              <ul className="space-y-3">
                {[
                  'Edited clips from your 1-hour interview — the moments that will make people stop scrolling',
                  'Published natively on LinkedIn where your target audience is most active',
                  'Your brand, your voice, your story — we frame it, you own the narrative',
                  'Reaches healthcare executives, senior physicians, and operators as organic content — not ads',
                  'The next generation of practitioners who are shaping technology adoption in care settings',
                  'Posted with positioning that encourages inbound curiosity, profile visits, and direct outreach',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckIcon className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="scroll-animate fade-up delay-400 mt-10 bg-janus-blue/5 border border-janus-blue/20 rounded-2xl p-8 text-center">
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              <strong className="text-black">The sum is greater than the parts.</strong> You get a strategy that tells you exactly
              where to focus — and you get immediate access to the exact audience that strategy is built around.
              You leave with a plan and the first proof that the market is listening.
            </p>
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
              One hour of your time.
              <br className="hidden lg:block" /> A week of our work.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'You purchase and book your call',
                desc: 'After purchasing, you\'ll receive a short intake form and a calendar link to book your 1-hour interview. We review your intake before the call so we arrive with sharp, specific questions.',
                color: 'bg-janus-blue',
              },
              {
                step: '02',
                title: 'We interview you like journalists',
                desc: 'We don\'t do surface-level pitching. We dig into your origin, your clinical insight, the specific inefficiency or failure you\'re solving — and we find the story that will make a healthcare executive stop and pay attention.',
                color: 'bg-black',
              },
              {
                step: '03',
                title: 'We build, distribute, and deliver',
                desc: 'We write your custom GTM strategy and edit your best clips for distribution. Within 5 business days, your strategy is in your inbox and your story is live in the feeds of the people who need to see it.',
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
              <p className="text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">This is for you if...</p>
              <div className="space-y-4">
                {[
                  'You\'re building a healthcare startup — clinical tools, healthtech, medtech, digital therapeutics, practice management, population health, or any adjacent space',
                  'Your product needs to reach clinicians, health system administrators, or senior leaders to get adopted — and cold outreach isn\'t breaking through',
                  'You have a real product, a real problem you\'re solving, and you\'re ready to grow — you just need the distribution that matches the quality of what you\'ve built',
                  'You want a go-to-market strategy written by people who understand both the story and the sector — not a generic framework dressed up in healthcare language',
                  'You want your first real users, your first real conversations with decision-makers, and you want them now — not in 18 months',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 bg-janus-blue/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-janus-blue" />
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
                  'You\'re pre-product — the strategy won\'t land and the distribution won\'t convert without something real to point to',
                  'Your product isn\'t healthcare-specific — the distribution is built for this audience and this sector',
                  'You want a passive deliverable you can file away — this works best for founders ready to move on the strategy immediately',
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
                  <strong className="text-black">Already have healthcare traction and need to scale your full marketing system?</strong>{' '}
                  The Signal is the starting point. Once you have users and proof, the{' '}
                  <Link href="/" className="text-janus-blue font-semibold hover:underline">
                    JANUS Clarity Engine™
                  </Link>{' '}
                  is built to turn that into a full conversion system — landing pages, videos, and ad content that compounds month over month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY $399 IS THE SMALLEST DECISION YOU'LL MAKE ──────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
              The Math
            </p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold leading-tight">
              Compare the alternatives.
            </h2>
          </div>

          <div className="scroll-animate fade-up delay-300 grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                option: 'A healthcare conference booth',
                cost: '$5,000–$30,000',
                result: 'A stack of business cards and 3 days away from your product',
              },
              {
                option: 'A healthcare PR agency',
                cost: '$5,000+/month',
                result: 'Press pitches that take months and rarely hit decision-maker inboxes',
              },
              {
                option: 'LinkedIn advertising',
                cost: '$3,000–$10,000+',
                result: 'Reach "healthcare professionals" — 90% of whom have zero purchasing power',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 font-semibold text-sm mb-2">{item.option}</p>
                <p className="text-red-400 text-2xl font-bold mb-3">{item.cost}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.result}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate scale-in delay-400 bg-janus-blue rounded-2xl p-8 text-center">
            <p className="text-white/80 text-sm uppercase tracking-widest font-semibold mb-3">The Signal™</p>
            <p className="font-display text-5xl font-bold text-white mb-4">$399</p>
            <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto">
              A custom GTM strategy and direct distribution into a trusted, senior healthcare audience —
              for less than a single night at a healthcare conference hotel.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">
            Pricing
          </p>
          <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold leading-tight mb-6 text-black">
            One price. Everything included.
          </h2>
          <p className="scroll-animate fade-up delay-300 text-gray-500 text-lg mb-14 max-w-xl mx-auto">
            No retainer. No monthly commitment. You get everything in a single engagement.
          </p>

          <div className="scroll-animate scale-in delay-400 bg-gray-950 rounded-2xl p-10 text-left max-w-lg mx-auto">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">The Signal™</h3>
                <p className="text-gray-400 text-sm mt-1">GTM strategy + live distribution. Built for healthcare startups.</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-4xl font-bold text-white">$399</p>
                <p className="text-gray-500 text-xs">one-time</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 border-t border-white/10 pt-8">
              {[
                '1-hour investigative interview with a JANUS strategist',
                'Short intake form to capture your context before the call',
                'Custom go-to-market strategy document — written for your company, not adapted from a template',
                'Edited video clips from your interview — the sharpest moments selected by our team',
                'Live distribution on our LinkedIn to a senior healthcare audience',
                'Delivered within 5 business days of your interview',
                'One revision round on the GTM strategy',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <CheckIcon className="w-4 h-4 text-janus-blue shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <BuyButton className="block w-full text-center bg-janus-blue text-white py-4 text-base font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Get The Signal — $399
            </BuyButton>

            <p className="text-center text-gray-600 text-xs mt-4">
              Limited to a small number of companies per month &nbsp;·&nbsp; Full refund if not satisfied
            </p>
          </div>

          <div className="scroll-animate fade-up delay-500 mt-8">
            <p className="text-gray-400 text-sm">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="scroll-animate fade-up font-display text-4xl font-bold text-black mb-3">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How big is the healthcare audience we\'re distributing to?',
                a: 'We don\'t share specific follower counts because the number matters less than the composition. What we can tell you is that this is a personal LinkedIn following built over years — not a media company\'s page or a purchased list. The majority of the audience holds senior roles in healthcare: executives, physicians, administrators, and investors. These are people who chose to follow because they trust the content.',
              },
              {
                q: 'Will the clips we post actually reach the right people?',
                a: 'LinkedIn organic content from personal accounts consistently outperforms brand pages in reach and engagement — especially in professional niches like healthcare. Because this is a personal account with a genuine following, the posts reach real people rather than getting buried by algorithm suppression that brand pages face. We write the captions and framing to maximize organic reach and drive inbound curiosity to your profile and product.',
              },
              {
                q: 'What does "investigative journalism" mean in this context?',
                a: 'Most pitch coaching tells you to present your product. We do the opposite — we interview you. We ask about the specific clinical failure or systemic gap you witnessed that made this company inevitable. We look for the non-obvious insight: what do you know about healthcare that most outsiders don\'t? The story that emerges from that conversation is almost always more compelling than the story founders lead with on their own.',
              },
              {
                q: 'What kind of healthcare startups have you worked with?',
                a: 'We work across the spectrum — digital health platforms, clinical decision support, practice management, remote patient monitoring, mental health tools, provider-facing SaaS, and more. If your startup is solving a real problem for clinicians, health systems, payers, or patients — and the right person just needs to hear about it — this is built for you.',
              },
              {
                q: 'How is the GTM strategy different from the Traction Kit?',
                a: 'The Traction Kit is our flagship GTM product for any SaaS founder. The Signal is specifically built for healthcare startups and pairs the strategy with live distribution to our healthcare network. The GTM strategy you receive through The Signal is calibrated to healthcare buying cycles, clinical adoption dynamics, and the specific channels where healthcare leaders actually make decisions. It\'s more vertical-specific by design.',
              },
              {
                q: 'What if we\'re not happy with the clips or the strategy?',
                a: 'One revision round is included on the GTM strategy. If after revisions you\'re still not satisfied, we refund your $399 in full. We only take on a small number of companies per month specifically so we can stand behind the quality of every engagement.',
              },
            ].map((item, i) => (
              <details key={i} className="scroll-animate fade-up group bg-white border border-gray-100 rounded-xl shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 list-none">
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
              The right people are already in the room.
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
              Get your story
              <br />
              <span className="text-janus-blue italic">in front of them.</span>
            </h2>
          </div>

          <p className="scroll-animate fade-up delay-200 text-gray-400 text-lg mb-12 leading-relaxed">
            $399. One hour of your time. A strategy built for your company
            and distribution to a healthcare audience most startups spend years trying to reach.
          </p>

          <div className="scroll-animate scale-in delay-300 flex flex-col items-center gap-4">
            <BuyButton className="inline-block bg-janus-blue text-white px-12 py-5 text-lg font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Get The Signal — $399
            </BuyButton>
            <p className="text-gray-600 text-sm">
              Limited spots per month &nbsp;·&nbsp; Full refund if not satisfied
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
                <p className="text-gray-500 text-xs">Founder, JANUS &nbsp;·&nbsp; Leads every Signal interview personally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
