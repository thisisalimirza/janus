import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ScrollAnimations from '../../components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'The Signal™ — Healthcare Startup Coverage & GTM Strategy | JANUS',
  description:
    'Get your healthcare startup featured. We interview founders, build their GTM strategy, and publish their story to the healthcare community we\'ve spent years building. $399 one-time.',
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

const Check = () => (
  <svg className="w-4 h-4 text-janus-blue shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.12)_0%,_transparent_55%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white pt-32 pb-24">

          <div className="animate-fade-in-up mb-6">
            <span className="inline-block border border-janus-blue/40 text-janus-blue text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              The Signal™ &nbsp;·&nbsp; $399 one-time
            </span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Get your healthcare startup
              <br />
              <span className="text-janus-blue italic">featured and found.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed text-gray-400">
              We interview you, build your go-to-market strategy, and publish your story
              to the healthcare community we&apos;ve spent years earning the trust of.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <BuyButton className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 rounded-sm">
              Apply for a Feature — $399
            </BuyButton>
            <p className="text-white/30 text-sm mt-4">We only accept companies we genuinely believe in &nbsp;·&nbsp; Limited spots per month</p>
          </div>

          <div className="animate-fade-in-up mt-16 grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-janus-blue font-bold text-xs uppercase tracking-widest mb-1">Deliverable 1</p>
              <p className="font-display text-lg font-bold text-white">Custom GTM Strategy</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-janus-blue font-bold text-xs uppercase tracking-widest mb-1">Deliverable 2</p>
              <p className="font-display text-lg font-bold text-white">Editorial Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">The Problem</p>
          <h2 className="scroll-animate fade-up delay-100 font-display text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Great product.
            <br />
            <span className="text-janus-blue italic">Nobody&apos;s heard of you.</span>
          </h2>
          <p className="scroll-animate fade-up delay-200 text-gray-500 text-xl max-w-xl mx-auto leading-relaxed">
            Healthcare runs on trust. Cold outreach doesn&apos;t build it.
            Ads don&apos;t build it. Being covered by someone your audience already trusts does.
          </p>
        </div>
      </section>

      {/* ── THE APPROACH ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-6">Why It Works</p>
          <h2 className="scroll-animate fade-up delay-100 font-display text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Earned credibility.
            <br />
            <span className="text-janus-blue italic">Not paid reach.</span>
          </h2>
          <p className="scroll-animate fade-up delay-200 text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-16">
            There&apos;s a difference between an ad showing up in someone&apos;s feed and a voice they
            already follow telling them about a company worth knowing. We&apos;ve spent years building
            credibility in the healthcare space. When we cover a startup, it lands differently.
          </p>

          <div className="scroll-animate fade-up delay-300 grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'We act as journalists',
                desc: 'We interview you like journalists — digging for the real story, the non-obvious insight, the thing that makes your company matter.',
              },
              {
                title: 'We only cover what we believe in',
                desc: 'We decline more than we accept. That selectivity is what makes being featured meaningful — for you and for the people who see it.',
              },
              {
                title: 'Coverage > advertising',
                desc: 'Being written up by a trusted voice opens doors that no ad budget can. The healthcare world is small and referral-driven. Reputation travels.',
              },
            ].map((item, i) => (
              <div key={i} className={`scroll-animate fade-up delay-${(i + 3) * 100} bg-white/5 border border-white/10 rounded-xl p-6`}>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">What You Get</p>
            <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black">Two deliverables.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* GTM Strategy */}
            <div className="scroll-animate slide-left delay-200 bg-gray-950 rounded-2xl p-10 text-white">
              <p className="text-janus-blue text-xs font-semibold uppercase tracking-widest mb-3">Deliverable 1</p>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Custom GTM Strategy</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                The interview surfaces your real story. We use it to build a go-to-market
                strategy that reflects how healthcare buyers actually make decisions.
              </p>
              <ul className="space-y-3">
                {[
                  'Your narrative — the hook that cuts through',
                  'Channel strategy built for healthcare buyers',
                  'First 90 days: prioritized and specific',
                  'Messaging that lands with both clinicians and buyers',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Editorial Coverage */}
            <div className="scroll-animate slide-right delay-300 bg-gray-50 border border-gray-100 rounded-2xl p-10">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Deliverable 2</p>
              <h3 className="font-display text-3xl font-bold text-black mb-4">Editorial Coverage</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We clip the sharpest moments from your interview and publish them — the same way
                a podcast or newsletter would feature a company worth knowing about.
                Your story, told by someone the healthcare community already trusts.
              </p>
              <ul className="space-y-3">
                {[
                  'Edited clips from your 1-hour interview',
                  'Published as editorial content, not advertising',
                  'Framed to spark curiosity and inbound conversations',
                  'Evergreen — keeps working after it goes live',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <svg className="w-4 h-4 text-black shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">How It Works</p>
          <h2 className="scroll-animate fade-up delay-200 font-display text-4xl lg:text-5xl font-bold text-black mb-16">Three steps.</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: '01', title: 'Apply and book', desc: 'Tell us about your startup. If it\'s a fit, you\'ll get a calendar link and a short intake form.' },
              { step: '02', title: 'We interview you', desc: 'One hour. We find the story that makes your work worth knowing about.' },
              { step: '03', title: 'We publish and deliver', desc: 'Your GTM strategy lands in your inbox. Your story goes live.' },
            ].map((s, i) => (
              <div key={i} className={`scroll-animate scale-in delay-${(i + 3) * 100}`}>
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-white text-xs font-bold tracking-wider">{s.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MATH ─────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="scroll-animate fade-up text-xs uppercase tracking-widest text-janus-blue font-semibold mb-4">Compare</p>
          <h2 className="scroll-animate fade-up delay-100 font-display text-4xl lg:text-5xl font-bold mb-16">The alternatives cost more. And don&apos;t work.</h2>

          <div className="scroll-animate fade-up delay-200 grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Conference booth', cost: '$5K–$30K', note: 'Three days. A stack of cards. Zero follow-through.' },
              { label: 'Healthcare PR agency', cost: '$5K+/mo', note: 'Months of pitching. Maybe a mention somewhere.' },
              { label: 'LinkedIn ads', cost: '$3K–$10K+', note: 'Paid reach with none of the trust that comes from earned coverage.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                <p className="text-red-400 text-2xl font-bold mb-2">{item.cost}</p>
                <p className="text-gray-600 text-xs">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate scale-in delay-300 bg-janus-blue rounded-2xl p-10">
            <p className="text-blue-200 text-xs uppercase tracking-widest font-semibold mb-2">The Signal™</p>
            <p className="font-display text-6xl font-bold text-white mb-3">$399</p>
            <p className="text-blue-100 text-lg">A custom GTM strategy and editorial coverage from a voice healthcare trusts.</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-lg mx-auto px-6 lg:px-8">
          <div className="scroll-animate scale-in bg-gray-950 rounded-2xl p-10 text-white">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">The Signal™</h3>
                <p className="text-gray-500 text-sm mt-1">Healthcare startups only.</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-4xl font-bold text-white">$399</p>
                <p className="text-gray-500 text-xs">one-time</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 border-t border-white/10 pt-8">
              {[
                '1-hour investigative founder interview',
                'Custom GTM strategy document',
                'Edited video clips from your interview',
                'Published as editorial content to our healthcare community',
                'Delivered within 5 business days',
                'One revision round included',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <BuyButton className="block w-full text-center bg-janus-blue text-white py-4 text-base font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Apply for a Feature — $399
            </BuyButton>
            <p className="text-center text-gray-600 text-xs mt-4">
              We review every application &nbsp;·&nbsp; Full refund if not satisfied
            </p>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Questions first?{' '}
            <Link href="/" className="text-janus-blue hover:underline font-medium">
              Book a free 15-min call &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="scroll-animate fade-up font-display text-3xl font-bold text-black mb-10 text-center">
            Questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Does every company get accepted?',
                a: 'No — and that\'s intentional. We only feature companies we\'d genuinely recommend. That selectivity is what makes the coverage worth having. If it\'s not a fit we\'ll tell you upfront.',
              },
              {
                q: 'What kind of healthcare startups is this for?',
                a: 'Healthtech, digital health, clinical tools, practice management, medtech — any startup solving a real problem for clinicians, health systems, or patients.',
              },
              {
                q: 'How is this different from the Traction Kit?',
                a: 'The Traction Kit is GTM strategy for any SaaS founder. The Signal adds editorial coverage calibrated to the healthcare market — and the strategy itself is built around healthcare buying cycles and decision-makers.',
              },
              {
                q: 'What if I\'m not happy with the output?',
                a: 'One revision round is included. If you\'re still not satisfied after revisions, we refund you in full.',
              },
            ].map((item, i) => (
              <details key={i} className="scroll-animate fade-up group bg-white border border-gray-100 rounded-xl">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                  <h3 className="text-sm font-semibold text-black pr-4">{item.q}</h3>
                  <svg className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="scroll-animate fade-up font-display text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your story deserves
            <br />
            <span className="text-janus-blue italic">to be told.</span>
          </h2>

          <p className="scroll-animate fade-up delay-200 text-gray-400 text-xl mb-12">
            $399. One call. Your GTM strategy and your story in front of the healthcare community.
          </p>

          <div className="scroll-animate scale-in delay-300 flex flex-col items-center gap-4">
            <BuyButton className="inline-block bg-janus-blue text-white px-12 py-5 text-lg font-bold hover:bg-blue-700 transition-colors duration-300 rounded-sm">
              Apply for a Feature — $399
            </BuyButton>
            <p className="text-gray-600 text-sm">We review every application &nbsp;·&nbsp; Full refund if not satisfied</p>
          </div>

          <div className="scroll-animate fade-up delay-400 mt-16 pt-12 border-t border-white/10 flex items-center justify-center gap-4">
            <Image src="/Ali.png" alt="Ali Mirza — Founder, JANUS" width={48} height={48} className="rounded-full" />
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Ali Mirza</p>
              <p className="text-gray-500 text-xs">Founder, JANUS &nbsp;·&nbsp; Leads every Signal interview personally</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
