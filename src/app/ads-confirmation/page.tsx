import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

export const metadata = {
  title: 'Thank You | JANUS',
  description: 'Your free ads request has been received. We\'ll deliver your custom ad creatives within 3-5 business days.',
  robots: 'noindex, nofollow', // Hide from search engines
}

export default function AdsConfirmationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
            Your ads are coming
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Thank you for requesting your free ad creatives. Our design team will craft <strong>2 custom ads</strong> tailored to your brand and deliver them within <strong>3-5 business days</strong>.
          </p>

          {/* What You'll Get */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-black mb-6">
              What you'll receive
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-janus-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Custom Ad Creative #1</h3>
                  <p className="text-gray-600 text-sm">Professional ad design optimized for your target audience and brand voice.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-janus-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Custom Ad Creative #2</h3>
                  <p className="text-gray-600 text-sm">Alternative approach with different messaging angle and visual treatment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-janus-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Usage Guidelines</h3>
                  <p className="text-gray-600 text-sm">Best practices for deploying your ads across different platforms and audiences.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-janus-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Multiple Formats</h3>
                  <p className="text-gray-600 text-sm">Ready-to-use files optimized for social media, display ads, and digital campaigns.</p>
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
              <h3 className="font-display text-2xl font-bold">Delivery Timeline</h3>
            </div>
            <p className="text-xl">
              Your <strong>2 custom ad creatives</strong> will be delivered to your inbox within <strong>3-5 business days</strong>.
            </p>
          </div>

          {/* Process */}
          <div className="bg-gray-900 text-white rounded-xl p-8 mb-12 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6">
              Our creative process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-janus-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Brand Analysis</h3>
                <p className="text-gray-300 text-sm">We study your brand, audience, and competitive landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-janus-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Creative Development</h3>
                <p className="text-gray-300 text-sm">Our team crafts compelling visuals and copy that convert.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-janus-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Delivery & Support</h3>
                <p className="text-gray-300 text-sm">Final ads delivered with usage guidelines and optimization tips.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <p className="text-gray-600">
              While your ads are being created, explore how we help SaaS companies scale with better creative.
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
              Questions about your ad creatives?
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