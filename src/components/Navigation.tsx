import Image from 'next/image'
import Link from 'next/link'

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
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
            <Link
              href="/insights"
              className={`link-line transition-all duration-200 font-medium ${
                currentPage === 'insights'
                  ? 'text-janus-blue'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Insights
            </Link>
            <Link
              href="/portfolio"
              className={`link-line transition-all duration-200 font-medium ${
                currentPage === 'portfolio'
                  ? 'text-janus-blue'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="bg-black text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 rounded-sm whitespace-nowrap btn-press"
            >
              Get A Personalized Strategy
            </Link>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link
              href="/insights"
              className={`link-line transition-all duration-200 text-sm font-medium ${
                currentPage === 'insights'
                  ? 'text-janus-blue'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Insights
            </Link>
            <Link
              href="/portfolio"
              className={`link-line transition-all duration-200 text-sm font-medium ${
                currentPage === 'portfolio'
                  ? 'text-janus-blue'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="bg-black text-white px-3 py-2 text-xs font-semibold tracking-wide hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-200 rounded-sm whitespace-nowrap btn-press"
            >
              <span className="hidden sm:inline">Get Your Strategy</span>
              <span className="sm:hidden">Get Your Strategy</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}