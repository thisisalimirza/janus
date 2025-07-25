import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimations from '../../components/ScrollAnimations'
import { getCaseStudies } from '../../lib/notion'

export default async function Portfolio() {
  const caseStudies = await getCaseStudies()
  
  // Fallback data if Notion isn't configured yet
  const fallbackCaseStudies = [
    {
      id: "1",
      title: "TechFlow",
      slug: "techflow-workflow-automation",
      subtitle: "B2B Workflow Automation",
      description: "Transformed a complex automation platform into a clear value proposition that increased demo bookings by 340%.",
      content: [],
      results: [
        "340% increase in demo bookings",
        "67% improvement in trial-to-paid conversion",
        "2.3x higher user activation rate"
      ],
      industry: "B2B SaaS",
      stage: "Series A",
      image: "/JANUS-GDrive-theme.png",
      challenge: "TechFlow had powerful automation features but prospects couldn't understand the value within the first 30 seconds of visiting their site.",
      solution: "We created a 60-second clarity video and restructured their messaging hierarchy to lead with outcomes, not features.",
      testimonial: "JANUS helped us go from a vague pitch to a 60-second story that converts — it's already lifting demo requests.",
      testimonialAuthor: "Alex S., CEO",
      published: true
    },
    {
      id: "2",
      title: "DataVault",
      slug: "datavault-enterprise-security",
      subtitle: "Enterprise Data Security",
      description: "Simplified complex compliance messaging to drive enterprise sales conversations with Fortune 500 companies.",
      content: [],
      results: [
        "89% increase in enterprise inquiries",
        "45% shorter sales cycle",
        "180% growth in average deal size"
      ],
      industry: "Cybersecurity",
      stage: "Series B",
      image: "/JANUS-GDrive-theme.png",
      challenge: "Enterprise prospects were confused by technical jargon and couldn't quickly understand DataVault's unique compliance approach.",
      solution: "Developed executive-level messaging that speaks to business outcomes and risk mitigation rather than technical specifications.",
      testimonial: "The messaging transformation helped us land our first Fortune 100 client. Clear ROI from day one.",
      testimonialAuthor: "Sarah Chen, VP Sales",
      published: true
    },
    {
      id: "3",
      title: "CloudSync",
      slug: "cloudsync-collaboration-platform",
      subtitle: "Team Collaboration Platform",
      description: "Repositioned from 'another Slack alternative' to 'the productivity platform that actually works for remote teams.'",
      content: [],
      results: [
        "156% increase in free trial signups",
        "73% improvement in user retention",
        "2.8x higher referral rate"
      ],
      industry: "Productivity",
      stage: "Seed",
      image: "/JANUS-GDrive-theme.png",
      challenge: "CloudSync was lost in a crowded market of collaboration tools, struggling to differentiate from established players.",
      solution: "Identified their unique strength in async productivity and built messaging around 'deep work' rather than just communication.",
      testimonial: "JANUS found our unique angle in a saturated market. Our positioning is now crystal clear and conversions show it.",
      testimonialAuthor: "Mike Rodriguez, Founder",
      published: true
    }
  ]

  // Use Notion data if available, otherwise fallback
  const studies = caseStudies.length > 0 ? caseStudies : fallbackCaseStudies

  return (
    <div className="bg-white">
      <ScrollAnimations />
      
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
              <Link href="/portfolio" className="text-janus-blue hover:text-blue-700 transition-colors font-medium">
                Portfolio
              </Link>
              <Link
                href="/#contact"
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
              <Link href="/portfolio" className="text-janus-blue hover:text-blue-700 transition-colors text-sm font-medium">
                Portfolio
              </Link>
              <Link
                href="/#contact"
                className="bg-black text-white px-3 py-2 text-xs font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-300 rounded-sm whitespace-nowrap"
              >
                <span className="hidden sm:inline">Fix My Messaging</span>
                <span className="sm:hidden">CTA</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="scroll-animate fade-up">
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-black mb-8 leading-tight">
                Portfolio
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
                Real results from real companies. See how we've transformed SaaS messaging to drive 
                conversions, reduce churn, and accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate fade-up text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-black mb-8">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When messaging becomes clear, everything else follows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-animate scale-in delay-200 text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl lg:text-6xl font-bold text-janus-blue mb-4">
                340%
              </div>
              <p className="text-lg text-gray-700 font-semibold mb-2">
                Average Conversion Increase
              </p>
              <p className="text-gray-600">
                Across demo bookings, trial signups, and sales calls
              </p>
            </div>
            
            <div className="scroll-animate scale-in delay-300 text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl lg:text-6xl font-bold text-janus-blue mb-4">
                67%
              </div>
              <p className="text-lg text-gray-700 font-semibold mb-2">
                Faster Sales Cycles
              </p>
              <p className="text-gray-600">
                When prospects understand value immediately
              </p>
            </div>
            
            <div className="scroll-animate scale-in delay-400 text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl lg:text-6xl font-bold text-janus-blue mb-4">
                2.8x
              </div>
              <p className="text-lg text-gray-700 font-semibold mb-2">
                Higher Referral Rates
              </p>
              <p className="text-gray-600">
                Clear messaging makes customers into advocates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate fade-up text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-black mb-8">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dives into how we've transformed messaging for growing SaaS companies.
            </p>
          </div>
          
          <div className="space-y-24">
            {studies.map((study, index) => (
              <div key={study.id} className={`scroll-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} delay-300`}>
                <div className="bg-white rounded-2xl janus-shadow-xl overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-janus-blue/10 text-janus-blue px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </div>
                        <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.stage}
                        </div>
                      </div>
                      
                      <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-2">
                        {study.title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {study.subtitle}
                      </p>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {study.description}
                      </p>
                      
                      {/* Results */}
                      <div className="mb-8">
                        <h4 className="font-bold text-black mb-4">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 text-janus-blue mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Testimonial */}
                      <blockquote className="border-l-4 border-janus-blue pl-6 mb-6">
                        <p className="text-lg italic text-gray-700 mb-2">
                          "{study.testimonial}"
                        </p>
                        <footer className="text-gray-600 font-medium">
                          — {study.testimonialAuthor}
                        </footer>
                      </blockquote>
                      
                      <Link
                        href={`/portfolio/${study.slug}`}
                        className="inline-flex items-center text-janus-blue hover:text-blue-700 font-semibold transition-colors"
                      >
                        View Full Case Study
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="aspect-square lg:aspect-auto lg:h-full relative bg-gray-100">
                        <Image
                          src={study.image}
                          alt={study.title}
                          width={600}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Handshake Integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-left">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                Ready to See <span className="text-janus-blue italic">Your Results</span>?
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Every case study started with a conversation. Let's discuss how the JANUS Clarity Engine™ 
                can transform your messaging and drive the growth you're looking for.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 hover-rise janus-shadow-xl rounded-sm"
              >
                Start Your Transformation
              </Link>
            </div>
            
            <div className="scroll-animate slide-right delay-200">
              <div className="relative">
                {/* White background for the handshake SVG */}
                <div className="bg-white rounded-2xl p-8">
                  <Image
                    src="/handshake.svg"
                    alt="Partnership handshake"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-janus-blue/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
                <Link href="/#contact" className="block hover:text-black transition-colors">Contact</Link>
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