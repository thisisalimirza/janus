import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '../../../lib/notion'
import ScrollAnimations from '../../../components/ScrollAnimations'
import Navigation from '../../../components/Navigation'
import NotionContent from '../../../components/NotionContent'
import TableOfContents from '../../../components/TableOfContents'
import PrintablePost from '../../../components/PrintablePost'

// Revalidate every 10 minutes
export const revalidate = 600

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

export default async function BlogPost({ params, searchParams }: { 
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ print?: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  const search = await searchParams
  const isPrint = search?.print === 'true'

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (isPrint) {
    return <PrintablePost post={post} formattedDate={formattedDate} />
  }

  return (
    <div className="bg-white">
      <ScrollAnimations />
      <div className="print-hide">
        <Navigation currentPage="insights" />
      </div>

      {/* Article Header */}
      <section className="pt-24 pb-8 lg:pt-32 lg:pb-12">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div>
            <Link 
              href="/insights" 
              className="inline-flex items-center text-janus-blue hover:text-blue-700 font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Insights
            </Link>

            {/* Featured Image */}
            <div className="mb-8">
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

      {/* Article Content */}
      <article className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Table of Contents - Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32">
                <TableOfContents blocks={post.content || []} />
              </div>
            </div>
            
            {/* Article Content */}
            <div className="lg:col-span-3">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-8">
                <TableOfContents blocks={post.content || []} />
              </div>
              
              <div className="prose prose-lg max-w-none">
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
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="print-hide py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-black mb-4">
              More Insights
            </h2>
            <p className="text-gray-600">
              Continue reading our latest thoughts on SaaS growth and messaging.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              href="/insights"
              className="inline-block bg-janus-blue text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors duration-300 rounded-sm"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="print-hide bg-white py-16 border-t border-gray-100">
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