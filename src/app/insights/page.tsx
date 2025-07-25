import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimations from '../../components/ScrollAnimations'
import { getBlogPosts } from '../../lib/notion'

export default async function Insights() {
  const blogPosts = await getBlogPosts()
  
  // Fallback data if Notion isn't configured yet
  const fallbackPosts = [
    {
      id: "1",
      title: "Why Most SaaS Landing Pages Convert at 2% (And How to Fix Yours)",
      slug: "saas-landing-page-conversion",
      excerpt: "The messaging mistakes that are costing you customers, and the 3-step framework we use to turn unclear value props into conversion machines.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Conversion",
      image: "/JANUS-GDrive-theme.png",
      content: [],
      published: true
    },
    {
      id: "2",
      title: "The $50K Video That Changed Everything: A SaaS Case Study",
      slug: "50k-video-case-study",
      excerpt: "How a 60-second clarity video increased demo bookings by 340% for a B2B compliance startup, and what you can learn from their approach.",
      date: "2025-01-08",
      readTime: "6 min read",
      category: "Case Study",
      image: "/JANUS-GDrive-theme.png",
      content: [],
      published: true
    },
    {
      id: "3",
      title: "Stop Explaining Features. Start Selling Outcomes.",
      slug: "features-vs-outcomes",
      excerpt: "The psychological shift that turns technical feature lists into compelling value propositions that actually drive purchasing decisions.",
      date: "2024-12-20",
      readTime: "5 min read",
      category: "Messaging",
      image: "/JANUS-GDrive-theme.png",
      content: [],
      published: true
    },
    {
      id: "4",
      title: "The 3-Second Rule: Why Your Homepage Message Must Be Instant",
      slug: "3-second-rule-homepage",
      excerpt: "Research shows users decide whether to stay or leave within 3 seconds. Here's how to make those seconds count with crystal-clear messaging.",
      date: "2024-12-12",
      readTime: "7 min read",
      category: "Strategy",
      image: "/JANUS-GDrive-theme.png",
      content: [],
      published: true
    },
    {
      id: "5",
      title: "Beyond Product-Market Fit: Achieving Message-Market Fit",
      slug: "message-market-fit",
      excerpt: "You've built something people want. But can you explain why they want it? The next evolution of startup growth is message-market fit.",
      date: "2024-11-28",
      readTime: "9 min read",
      category: "Growth",
      image: "/JANUS-GDrive-theme.png",
      content: [],
      published: true
    },
    {
      id: "6",
      title: "How We Increased Trial-to-Paid Conversion by 67% with One Video",
      slug: "trial-conversion-video",
      excerpt: "The onboarding video strategy that transforms confused trial users into paying customers by addressing the #1 activation barrier.",
      date: "2024-11-15",
      readTime: "6 min read",
      category: "Case Study",
      image: "/JANUS-GDrive-theme.png",
      content: [],
      published: true
    }
  ]

  // Use Notion data if available, otherwise fallback
  const posts = blogPosts.length > 0 ? blogPosts : fallbackPosts
  const categories = ["All", "Strategy", "Case Study", "Conversion", "Messaging", "Growth"]

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
              <Link href="/insights" className="text-janus-blue hover:text-blue-700 transition-colors font-medium">
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
              <Link href="/insights" className="text-janus-blue hover:text-blue-700 transition-colors text-sm font-medium">
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
                Insights
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
                The strategies, case studies, and frameworks behind high-converting SaaS messaging. 
                Learn how the best startups turn clarity into growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate fade-up flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-janus-blue text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {posts.map((post, index) => {
              const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              
              return (
                <article key={post.id} className={`scroll-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} delay-${Math.min((index + 1) * 100, 500)} group`}>
                  <Link href={`/insights/${post.slug}`} className="block">
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover-rise janus-shadow group-hover:border-janus-blue/20 transition-all duration-300">
                      <div className="aspect-video bg-gray-100 relative overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-janus-blue text-white px-3 py-1 text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <span>{formattedDate}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight group-hover:text-janus-blue transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-janus-blue font-semibold group-hover:text-blue-700 transition-colors">
                          <span>Read Article</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="scroll-animate fade-up">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Never Miss a <span className="text-janus-blue italic">Strategy</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get our latest insights on SaaS messaging, conversion optimization, and growth strategy delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black bg-white border-0 focus:ring-2 focus:ring-janus-blue focus:outline-none"
              />
              <button className="bg-janus-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
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