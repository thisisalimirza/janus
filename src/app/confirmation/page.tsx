import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Thank You | JANUS',
  description: 'Your landing page audit request has been received. We\'ll be in touch within 3-5 business days.',
  robots: 'noindex, nofollow', // Hide from search engines
}

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-white">
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
                href="/#contact"
                className="bg-black text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-300 rounded-sm whitespace-nowrap"
              >
                Get A Personalized Strategy
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
                href="/#contact"
                className="bg-black text-white px-3 py-2 text-xs font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-300 rounded-sm whitespace-nowrap"
              >
                <span className="hidden sm:inline">Get Your Strategy</span>
                <span className="sm:hidden">Get Your Strategy</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            We've got your request
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Thank you for requesting a landing page audit. Our team will analyze your copy and messaging strategy, then send you a detailed teardown within <strong>3-5 business days</strong>.
          </p>

          {/* What Happens Next */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-black mb-6">
              What happens next?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-janus-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Review & Analysis</h3>
                  <p className="text-gray-600 text-sm">We'll audit your landing page copy, messaging hierarchy, and conversion elements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-janus-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Custom Teardown</h3>
                  <p className="text-gray-600 text-sm">You'll receive a detailed breakdown with specific recommendations for improvement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-janus-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Follow-up Call</h3>
                  <p className="text-gray-600 text-sm">Optional strategy session to discuss implementation and next steps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-janus-blue text-white rounded-xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display text-2xl font-bold">Expected Timeline</h3>
            </div>
            <p className="text-xl">
              You'll receive your custom landing page teardown within <strong>3-5 business days</strong> via email.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <p className="text-gray-600">
              While you wait, explore our insights on SaaS messaging and conversion optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/insights"
                className="bg-janus-blue text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors duration-300 rounded-sm"
              >
                Read Our Insights
              </Link>
              
              <Link
                href="/"
                className="border border-gray-300 text-gray-700 px-8 py-3 font-semibold hover:border-gray-400 hover:text-black transition-colors duration-300 rounded-sm"
              >
                Back to Homepage
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-500 mb-4">
              Questions about your audit request?
            </p>
            <p className="text-gray-700">
              Email us at <a href="mailto:hello@janusny.com" className="text-janus-blue hover:text-blue-700 font-medium">hello@janusny.com</a>
            </p>
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