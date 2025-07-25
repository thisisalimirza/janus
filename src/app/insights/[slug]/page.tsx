import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '../../../lib/notion'
import ScrollAnimations from '../../../components/ScrollAnimations'
import NotionContent from '../../../components/NotionContent'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | JANUS',
    }
  }

  return {
    title: `${post.title} | JANUS Insights`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

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

      {/* Article Header */}
      <section className="pt-24 pb-8 lg:pt-32 lg:pb-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate fade-up">
            <Link 
              href="/insights" 
              className="inline-flex items-center text-janus-blue hover:text-blue-700 font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Insights
            </Link>

            <div className="mb-8">
              <span className="bg-janus-blue text-white px-4 py-2 text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="font-display text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-500 mb-8">
              <span>{formattedDate}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime}</span>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate scale-in delay-200">
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="scroll-animate fade-up delay-300 prose prose-lg max-w-none">
            {post.content && post.content.length > 0 ? (
              <div className="article-content">
                <NotionContent blocks={post.content} />
              </div>
            ) : (
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  This is where the full article content would appear when connected to your Notion database. 
                  The content management system is ready to pull rich content from Notion including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Formatted text with headings and paragraphs</li>
                  <li>Bulleted and numbered lists</li>
                  <li>Block quotes and callouts</li>
                  <li>Images and media embeds</li>
                  <li>Code blocks and syntax highlighting</li>
                </ul>
                <p>
                  To connect this to your Notion workspace, you'll need to:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Create a Notion integration at <a href="https://www.notion.so/my-integrations" className="text-janus-blue hover:text-blue-700">notion.so/my-integrations</a></li>
                  <li>Add your integration token to the .env.local file</li>
                  <li>Create a database in Notion with the required properties</li>
                  <li>Share your database with your integration</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="scroll-animate fade-up font-display text-3xl lg:text-4xl font-bold text-black mb-4">
              More Insights
            </h2>
            <p className="scroll-animate fade-up delay-200 text-gray-600">
              Continue reading our latest thoughts on SaaS growth and messaging.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              href="/insights"
              className="scroll-animate scale-in delay-300 inline-block bg-janus-blue text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors duration-300 rounded-sm"
            >
              View All Articles
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