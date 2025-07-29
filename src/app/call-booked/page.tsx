import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimations from '../../components/ScrollAnimations'

export const metadata = {
  title: 'Call Scheduled | JANUS Strategy Session',
  description: 'Your strategy call has been successfully scheduled. We look forward to discussing your messaging transformation.',
  robots: 'noindex, nofollow', // Keep this page hidden from search engines
}

export default function CallBookedPage() {
  return (
    <div className="bg-white min-h-screen">
      <ScrollAnimations />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
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
                href="/"
                className="bg-black text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-300 rounded-sm whitespace-nowrap"
              >
                Back to Home
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
                href="/"
                className="bg-black text-white px-3 py-2 text-xs font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-300 rounded-sm whitespace-nowrap"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          
          {/* Success Icon */}
          <div className="scroll-animate fade-up mb-8">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6">
              <div className="w-full h-full bg-janus-blue/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="scroll-animate fade-up delay-200 mb-8">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-black mb-4 leading-tight">
              Your Call is <span className="text-janus-blue italic">Scheduled</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We've received your booking and sent you a confirmation email with all the details.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="scroll-animate fade-up delay-400 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-left max-w-2xl mx-auto">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-black mb-6 text-center">
                What Happens Next
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-janus-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Confirmation Email</h3>
                    <p className="text-gray-600">Check your inbox for calendar invite and meeting details. Don't forget to add it to your calendar!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-janus-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Pre-Call Preparation</h3>
                    <p className="text-gray-600">We'll review your website and messaging before our call to make the most of our time together.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-janus-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Strategy Session</h3>
                    <p className="text-gray-600">We'll discuss your messaging challenges and show you exactly how JANUS can transform your conversion rates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="scroll-animate fade-up delay-600">
            <p className="text-lg text-gray-600 mb-8">
              In the meantime, explore our case studies to see how we've helped other SaaS companies like yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/portfolio"
                className="bg-janus-blue text-white px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition-all duration-300 rounded-sm hover-rise janus-shadow-xl"
              >
                View Case Studies
              </Link>
              <Link
                href="/insights"
                className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 text-lg font-semibold hover:border-gray-300 hover:text-black transition-all duration-300 rounded-sm"
              >
                Read Our Insights
              </Link>
            </div>
          </div>
        </div>
      </main>

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