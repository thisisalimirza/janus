import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getCaseStudies } from '../../../lib/notion'
import ScrollAnimations from '../../../components/ScrollAnimations'
import NotionContent from '../../../components/NotionContent'
import AdaptiveImage from '../../../components/AdaptiveImage'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | JANUS',
    }
  }

  return {
    title: `${caseStudy.title} Case Study | JANUS Portfolio`,
    description: caseStudy.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="bg-white overflow-x-hidden">
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
                <span className="sm:hidden">Fix</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Case Study Header */}
      <section className="pt-24 pb-8 lg:pt-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate fade-up">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-janus-blue hover:text-blue-700 font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-janus-blue/10 text-janus-blue px-4 py-2 rounded-full text-sm font-semibold">
                    {caseStudy.industry}
                  </div>
                  <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {caseStudy.stage}
                  </div>
                </div>

                <h1 className="font-display text-4xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-2xl text-gray-600 mb-6 leading-relaxed">
                  {caseStudy.subtitle}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
              
              <div className="scroll-animate scale-in delay-200">
                <AdaptiveImage
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain max-h-96 p-6"
                  containerClassName="aspect-[4/3] w-full flex items-center justify-center"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate fade-up text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-black mb-4">
              Key Results
            </h2>
            <p className="text-gray-600">
              The measurable impact of our work together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.results.slice(0, 3).map((result, index) => (
              <div key={index} className={`scroll-animate scale-in delay-${(index + 2) * 100} text-center p-8 bg-white rounded-xl janus-shadow`}>
                <div className="text-4xl lg:text-5xl font-bold text-janus-blue mb-4">
                  {result.match(/\d+%|\d+x|\d+/)?.[0] || '✓'}
                </div>
                <p className="text-lg text-gray-700 font-semibold">
                  {result.replace(/^\d+%|\d+x|\d+\s*/, '')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="scroll-animate slide-left min-w-0">
              <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6">
                The Challenge
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed break-words">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="scroll-animate slide-right delay-200 min-w-0">
              <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6">
                Our Solution
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed break-words">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      {caseStudy.content && caseStudy.content.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="scroll-animate fade-up">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
                Case Study Details
              </h2>
              <div className="prose prose-lg max-w-none bg-white p-8 lg:p-12 rounded-xl janus-shadow">
                <NotionContent blocks={caseStudy.content} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="scroll-animate fade-up">
            <blockquote className="text-3xl lg:text-4xl font-display italic text-black mb-8 leading-relaxed">
              "{caseStudy.testimonial}"
            </blockquote>
            <footer className="text-xl text-gray-600 font-medium">
              — {caseStudy.testimonialAuthor}
            </footer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="scroll-animate slide-left min-w-0">
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
                Ready for Your <span className="text-janus-blue italic">Success Story</span>?
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed break-words">
                Let's discuss how the JANUS Clarity Engine™ can transform your messaging 
                and drive similar results for your company.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-janus-blue text-white px-10 py-4 text-lg font-semibold tracking-wide hover:bg-blue-700 transition-all duration-300 hover-rise janus-shadow-xl rounded-sm"
              >
                Start Your Transformation
              </Link>
            </div>
            
            <div className="scroll-animate slide-right delay-200 min-w-0">
              <div className="relative max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-6 lg:p-8">
                  <Image
                    src="/handshake.svg"
                    alt="Partnership and trust"
                    width={400}
                    height={300}
                    className="w-full h-auto max-w-full"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-janus-blue/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-600/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="scroll-animate fade-up font-display text-3xl lg:text-4xl font-bold text-black mb-4">
              More Case Studies
            </h2>
            <p className="scroll-animate fade-up delay-200 text-gray-600">
              See how we've helped other companies transform their messaging.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              href="/portfolio"
              className="scroll-animate scale-in delay-300 inline-block bg-janus-blue text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors duration-300 rounded-sm"
            >
              View All Case Studies
            </Link>
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