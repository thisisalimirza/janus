'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '../lib/notion'

interface BlogFilterProps {
  posts: BlogPost[]
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Get unique categories from posts
  const categories = useMemo(() => {
    const cats = posts.map(post => post.category)
    const uniqueCats = Array.from(new Set(cats)).filter(Boolean)
    return ['All', ...uniqueCats.sort()]
  }, [posts])

  // Connect to hero search bar and populate categories
  useEffect(() => {
    const heroSearch = document.getElementById('hero-search') as HTMLInputElement
    
    if (heroSearch) {
      const handleSearch = (e: Event) => {
        const target = e.target as HTMLInputElement
        setSearchQuery(target.value)
      }
      
      heroSearch.addEventListener('input', handleSearch)
      heroSearch.value = searchQuery
      
      return () => {
        heroSearch.removeEventListener('input', handleSearch)
      }
    }
  }, [searchQuery])

  // Populate hero categories with better performance
  useEffect(() => {
    const heroCategories = document.getElementById('hero-categories')
    if (heroCategories) {
      // Use React-like approach for better performance
      heroCategories.innerHTML = categories.map(category => `
        <button
          onclick="window.handleCategoryClick('${category}')"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
            category === activeCategory 
              ? 'bg-janus-blue text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }"
        >
          ${category}
        </button>
      `).join('')
    }
  }, [categories, activeCategory])

  // Set up global category click handler
  useEffect(() => {
    (window as any).handleCategoryClick = (category: string) => {
      setActiveCategory(category)
    }
    
    return () => {
      delete (window as any).handleCategoryClick
    }
  }, [])

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [posts, activeCategory, searchQuery])

  return (
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
              ? `No articles match "${searchQuery}" in the ${activeCategory} category.`
              : `No articles found in the ${activeCategory} category.`
            }
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setActiveCategory('All')
              // Clear hero search bar
              const heroSearch = document.getElementById('hero-search') as HTMLInputElement
              if (heroSearch) heroSearch.value = ''
              // Categories will automatically update via useEffect
            }}
            className="inline-flex items-center px-4 py-2 bg-janus-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear filters
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
            
            return (
              <article 
                key={post.id} 
                className={`scroll-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} delay-${Math.min((index + 1) * 100, 500)} group`}
              >
                <Link href={`/insights/${post.slug}`} className="block">
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
                      
                      <div className={`flex items-center font-semibold transition-colors text-sm ${
                        isWhitePaper 
                          ? 'text-yellow-400 group-hover:text-yellow-300' 
                          : 'text-janus-blue group-hover:text-blue-700'
                      }`}>
                        <span>{isWhitePaper ? 'Download White Paper' : 'Read Article'}</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                            isWhitePaper 
                              ? "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              : "M17 8l4 4m0 0l-4 4m4-4H3"
                          } />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}