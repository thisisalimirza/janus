'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '../lib/notion'
import BlogLoadingAnimation from './BlogLoadingAnimation'

interface BlogFilterProps {
  posts: BlogPost[]
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  


  // Categories hidden for now - search functionality is sufficient
  // const categories = useMemo(() => {
  //   const cats = posts.map(post => post.category)
  //   const uniqueCats = Array.from(new Set(cats)).filter(Boolean)
  //   return ['All', ...uniqueCats.sort()]
  // }, [posts])

  // Connect to hero search bar - setup once
  useEffect(() => {
    const heroSearch = document.getElementById('hero-search') as HTMLInputElement
    
    if (heroSearch) {
      const handleSearch = (e: Event) => {
        const target = e.target as HTMLInputElement
        setSearchQuery(target.value)
      }
      
      heroSearch.addEventListener('input', handleSearch)
      
      return () => {
        heroSearch.removeEventListener('input', handleSearch)
      }
    }
  }, []) // Only run once on mount
  
  // Sync input value when searchQuery changes (for clear button)
  useEffect(() => {
    const heroSearch = document.getElementById('hero-search') as HTMLInputElement
    if (heroSearch && heroSearch.value !== searchQuery) {
      heroSearch.value = searchQuery
    }
  }, [searchQuery])


  // Category filtering disabled - using search only
  // useEffect(() => {
  //   const heroCategories = document.getElementById('hero-categories')
  //   if (heroCategories) {
  //     heroCategories.innerHTML = '' // Clear any category buttons
  //   }
  // }, [])

  // Filter posts based on search only
  const filteredPosts = useMemo(() => {
    let filtered = posts.slice() // Create a fresh copy

    // Filter by search query only
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      
      filtered = filtered.filter(post => {
        const titleMatch = post.title?.toLowerCase().includes(query)
        const excerptMatch = post.excerpt?.toLowerCase().includes(query)
        const categoryMatch = post.category?.toLowerCase().includes(query)
        
        return titleMatch || excerptMatch || categoryMatch
      })
    }

    return filtered
  }, [posts, searchQuery])

  
  return (
    <>
      {isLoading && <BlogLoadingAnimation />}
      <div className="space-y-8">
      {/* Results Count */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-600">
          Showing {filteredPosts.length} of {posts.length} articles
          {searchQuery && (
            <span className="ml-2">
              for "<span className="font-semibold text-janus-blue">{searchQuery}</span>"
            </span>
          )}
        </p>
      </div>

      {/* No Results State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.063-2.333M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600 mb-4">
            {searchQuery 
              ? `No articles match "${searchQuery}".`
              : `No articles found.`
            }
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              // Clear hero search bar
              const heroSearch = document.getElementById('hero-search') as HTMLInputElement
              if (heroSearch) {
                heroSearch.value = ''
                // Trigger the input event to sync state
                heroSearch.dispatchEvent(new Event('input', { bubbles: true }))
              }
            }}
            className="inline-flex items-center px-4 py-2 bg-janus-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => {
            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
            
            const isWhitePaper = post.category?.toLowerCase() === 'white paper'
            
            // Handle download functionality for white papers
            const handleDownload = (e: React.MouseEvent) => {
              e.preventDefault()
              e.stopPropagation()
              
              // Track download event
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'download', {
                  'event_category': 'White Paper',
                  'event_label': post.title,
                  'value': 1
                })
              }
              
              // Simple console tracking for development
              console.log('White Paper Download:', {
                title: post.title,
                slug: post.slug,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
              })
              
              // Open the blog post in a new window for printing/PDF saving
              window.open(`/insights/${post.slug}?print=true`, '_blank')
            }
            
            return (
              <article 
                key={post.id} 
                className="group"
              >
                <Link 
                  href={`/insights/${post.slug}`} 
                  className="block"
                  onClick={() => setIsLoading(true)}
                >
                  <div className={`rounded-xl border overflow-hidden hover-rise janus-shadow transition-all duration-200 h-full flex flex-col ${
                    isWhitePaper 
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-600 group-hover:border-yellow-400/60' 
                      : 'bg-white border-gray-200 group-hover:border-janus-blue/20'
                  }`}>
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={225}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 ${
                          isWhitePaper ? 'opacity-85' : ''
                        }`}
                      />
                      {isWhitePaper && (
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          isWhitePaper 
                            ? 'bg-yellow-400 text-black font-bold uppercase tracking-wide'
                            : 'bg-janus-blue text-white'
                        }`}>
                          {isWhitePaper ? '📄 White Paper' : post.category}
                        </span>
                      </div>
                      {/* Search highlight indicator */}
                      {searchQuery && post.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                        <div className="absolute top-3 right-3">
                          <div className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            isWhitePaper ? 'bg-yellow-400 text-black' : 'bg-yellow-400 text-yellow-900'
                          }`}>
                            Match
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className={`flex items-center text-sm mb-3 ${
                        isWhitePaper ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        <span>{formattedDate}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className={`font-display text-xl font-bold mb-3 leading-tight transition-colors ${
                        isWhitePaper 
                          ? 'text-white group-hover:text-yellow-400' 
                          : 'text-black group-hover:text-janus-blue'
                      }`}>
                        {searchQuery && post.title.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                          <span dangerouslySetInnerHTML={{
                            __html: post.title.replace(
                              new RegExp(`(${searchQuery})`, 'gi'),
                              `<mark class="bg-yellow-200 ${isWhitePaper ? 'text-black' : ''} px-1 rounded">$1</mark>`
                            )
                          }} />
                        ) : (
                          post.title
                        )}
                      </h2>
                      
                      <p className={`leading-relaxed mb-4 text-sm flex-1 ${
                        isWhitePaper ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {searchQuery && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                          <span dangerouslySetInnerHTML={{
                            __html: post.excerpt.replace(
                              new RegExp(`(${searchQuery})`, 'gi'),
                              `<mark class="bg-yellow-200 ${isWhitePaper ? 'text-black' : ''} px-1 rounded">$1</mark>`
                            )
                          }} />
                        ) : (
                          post.excerpt
                        )}
                      </p>
                      
                      {isWhitePaper ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center font-semibold transition-colors text-sm text-yellow-400 group-hover:text-yellow-300">
                            <span>Read White Paper</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                          <button
                            onClick={handleDownload}
                            className="flex items-center font-semibold text-sm text-yellow-400 hover:text-yellow-300 transition-colors bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md ml-4"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>PDF</span>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center font-semibold transition-colors text-sm text-janus-blue group-hover:text-blue-700">
                          <span>Read Article</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      )}
    </div>
    </>
  )
}