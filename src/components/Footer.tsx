import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
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
            <h4 className="font-bold text-black mb-4">Services</h4>
            <div className="space-y-2 text-gray-600">
              <Link href="/" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Full Service</Link>
              <Link href="/websites" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Websites Offer</Link>
              <Link href="/careframe" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Careframe for Doctors</Link>
            </div>
            
            <h4 className="font-bold text-black mb-4 mt-8">Company</h4>
            <div className="space-y-2 text-gray-600">
              <Link href="/insights" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Insights</Link>
              <Link href="/portfolio" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Portfolio</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-4">Legal</h4>
            <div className="space-y-2 text-gray-600">
              <Link href="/privacy" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Terms of Service</Link>
            </div>
            
            <h4 className="font-bold text-black mb-4 mt-8">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <Link href="/#contact" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Book a Call</Link>
              <Link href="https://tally.so/r/nrMgY2" target="_blank" rel="noopener noreferrer" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Get 2 Free Ads</Link>
              <Link href="https://tally.so/r/n9jxRE" target="_blank" rel="noopener noreferrer" className="block hover:text-black hover:translate-x-0.5 transition-all duration-150">Request a Free Website Review</Link>
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
  )
}