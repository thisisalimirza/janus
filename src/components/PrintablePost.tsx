'use client'

import { useEffect } from 'react'
import { BlogPost } from '../lib/notion'
import NotionContent from './NotionContent'

interface PrintablePostProps {
  post: BlogPost
  formattedDate: string
}

export default function PrintablePost({ post, formattedDate }: PrintablePostProps) {
  useEffect(() => {
    // Auto-print after page loads
    const timer = setTimeout(() => {
      window.print()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-white">
      <style jsx global>{`
        @media print {
          body { font-size: 12pt; line-height: 1.4; }
          .print-hide { display: none !important; }
          .print-show { display: block !important; }
          header, footer, nav { display: none !important; }
          .fixed { position: static !important; }
          .sticky { position: static !important; }
          .shadow-lg, .janus-shadow { box-shadow: none !important; }
          .bg-gradient-to-br { background: white !important; }
          .text-white { color: black !important; }
          .border { border: 1px solid #ccc !important; }
          img { max-height: 400px; }
          .prose { max-width: none !important; }
          h1 { font-size: 24pt; margin-bottom: 12pt; }
          h2 { font-size: 18pt; margin: 16pt 0 8pt; }
          p { margin-bottom: 8pt; }
          .table-of-contents { display: none !important; }
        }
      `}</style>
      
      {/* Print Header */}
      <div className="print-show hidden mb-8 border-b pb-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">JANUS</h3>
            <p className="text-sm text-gray-600">Premium SaaS Messaging Agency</p>
          </div>
          <div className="text-sm text-gray-600">
            <p>Downloaded from janus.agency</p>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>

      {/* Article Content - Print Version */}
      <article className="max-w-4xl mx-auto px-8">
        <div className="mb-6">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm font-semibold rounded">
            {post.category}
          </span>
        </div>

        <h1 className="font-display text-4xl font-bold text-black mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-600 mb-6 text-sm">
          <span>{formattedDate}</span>
          <span className="mx-3">•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="mb-8 p-4 bg-gray-50 border-l-4 border-gray-300">
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content && post.content.length > 0 ? (
            <div className="article-content">
              <NotionContent blocks={post.content} />
            </div>
          ) : (
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                This is where the full article content would appear when connected to your Notion database.
              </p>
            </div>
          )}
        </div>

        {/* Print Footer */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>© 2025 JANUS. Downloaded from janus.agency/insights/{post.slug}</p>
        </div>
      </article>
    </div>
  )
}