'use client'

import React, { useState, useEffect } from 'react'

// Helper function to extract plain text from Notion rich text
function getPlainText(richText: any[]): string {
  return richText.map((text) => text.plain_text).join('')
}

// Helper function to create URL-friendly slug
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()
}

// Interface for table of contents item
interface TOCItem {
  id: string
  title: string
  slug: string
}

// Props interface
interface TableOfContentsProps {
  blocks: any[]
  className?: string
}

export default function TableOfContents({ blocks, className = '' }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [headerHeight, setHeaderHeight] = useState<number>(80)

  // Dynamically calculate header height
  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        const height = header.offsetHeight
        setHeaderHeight(height)
        
        // Update CSS custom property for scroll-margin-top
        document.documentElement.style.setProperty('--header-height', `${height}px`)
      }
    }

    calculateHeaderHeight()
    window.addEventListener('resize', calculateHeaderHeight)
    
    return () => window.removeEventListener('resize', calculateHeaderHeight)
  }, [])

  // Extract H2 headings from blocks
  useEffect(() => {
    if (!blocks || blocks.length === 0) return

    const headings: TOCItem[] = []
    
    blocks.forEach((block, index) => {
      if (block.type === 'heading_2') {
        const title = getPlainText(block.heading_2.rich_text)
        if (title.trim()) {
          const slug = createSlug(title)
          headings.push({
            id: `heading-${index}`,
            title,
            slug
          })
        }
      }
    })

    setTocItems(headings)
  }, [blocks])

  // Handle scroll to update active heading
  useEffect(() => {
    if (tocItems.length === 0) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = headerHeight + 20 // Dynamic header height + small buffer

      // Find the current active heading
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(tocItems[i].slug)
        if (element) {
          const elementTop = element.offsetTop - offset
          if (scrollY >= elementTop) {
            setActiveId(tocItems[i].slug)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems, headerHeight])

  // Handle smooth scroll to heading
  const scrollToHeading = (slug: string) => {
    const element = document.getElementById(slug)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Don't render if no headings found
  if (tocItems.length === 0) {
    return null
  }

  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="font-display text-lg font-bold text-black mb-4">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToHeading(item.slug)}
                className={`text-left w-full p-2 rounded text-sm transition-colors duration-200 hover:bg-gray-200 ${
                  activeId === item.slug
                    ? 'bg-janus-blue text-white font-medium'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}