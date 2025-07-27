import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
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
      <main className="flex-1 flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl mx-auto px-4 lg:px-8 text-center">
          
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6">
              <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-6xl lg:text-7xl font-bold text-gray-300 font-display">
                  404
                </div>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Page <span className="text-janus-blue italic">Not Found</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Looks like this page got lost in the messaging clarity process.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="bg-janus-blue text-white px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition-all duration-300 rounded-sm hover-rise janus-shadow-xl"
            >
              Go Home
            </Link>
            <Link
              href="/portfolio"
              className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 text-lg font-semibold hover:border-gray-300 hover:text-black transition-all duration-300 rounded-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-gray-100 pt-8">
            <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/insights" className="text-janus-blue hover:text-blue-700 font-medium">
                Insights & Articles
              </Link>
              <Link href="/portfolio" className="text-janus-blue hover:text-blue-700 font-medium">
                Case Studies
              </Link>
              <Link href="/#contact" className="text-janus-blue hover:text-blue-700 font-medium">
                Contact Us
              </Link>
              <Link href="/privacy" className="text-janus-blue hover:text-blue-700 font-medium">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 JANUS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}