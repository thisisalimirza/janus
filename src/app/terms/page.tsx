import Image from 'next/image'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="bg-white">
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
                See How We'd Fix Your Messaging
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
                <span className="hidden sm:inline">Fix My Messaging</span>
                <span className="sm:hidden">Fix</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-black mb-8">
            Terms of Service
          </h1>
          
          <div className="text-sm text-gray-500 mb-12">
            Last updated: January 24, 2025
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using JANUS services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                JANUS provides creative and marketing services for SaaS companies, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Brand strategy and messaging development</li>
                <li>Video production and motion graphics</li>
                <li>Landing page optimization</li>
                <li>Marketing content creation</li>
                <li>Creative consultation and advisory services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not use our services for any unlawful or prohibited activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms are specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Payments are due according to agreed-upon schedules</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All fees are non-transferable</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-black mb-3">Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality of our services are owned by JANUS and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-3">Client Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of content you provide to us. You grant us a license to use your content solely for the purpose of providing our services.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-3">Work Product</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon full payment, you will own the creative work we produce for you, subject to any third-party components or our general methodologies and processes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain strict confidentiality regarding your business information and will not disclose confidential information to third parties without your consent, except as required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, JANUS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate services according to the terms specified in individual service agreements. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Payment obligations for services rendered remain in effect</li>
                <li>Confidentiality obligations survive termination</li>
                <li>We may retain copies of work for our records</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these terms or our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will provide notice of material changes and your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms are governed by and construed in accordance with the laws of the jurisdiction where JANUS is established, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-black mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> hello@janusny.com
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong> <Link href="/" className="text-janus-blue hover:text-blue-700">janusny.com</Link>
                </p>
              </div>
            </section>
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