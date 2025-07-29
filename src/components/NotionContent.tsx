'use client'

import React from 'react'

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

// Props interface
interface NotionContentProps {
  blocks: any[]
}

// Client component to render Notion blocks
export default function NotionContent({ blocks }: NotionContentProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <div className="notion-content">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {getPlainText(block.paragraph.rich_text)}
              </p>
            )
          case 'heading_1':
            const h1Text = getPlainText(block.heading_1.rich_text)
            return (
              <h1 key={index} className="text-3xl font-bold mb-6 text-black font-display">
                {h1Text}
              </h1>
            )
          case 'heading_2':
            const h2Text = getPlainText(block.heading_2.rich_text)
            const h2Slug = createSlug(h2Text)
            return (
              <h2 key={index} id={h2Slug} className="text-2xl font-bold mb-4 text-black font-display" style={{ scrollMarginTop: 'calc(var(--header-height, 80px) + 20px)' }}>
                {h2Text}
              </h2>
            )
          case 'heading_3':
            return (
              <h3 key={index} className="text-xl font-bold mb-3 text-black">
                {getPlainText(block.heading_3.rich_text)}
              </h3>
            )
          case 'bulleted_list_item':
            return (
              <li key={index} className="mb-2 text-gray-700 ml-4">
                {getPlainText(block.bulleted_list_item.rich_text)}
              </li>
            )
          case 'numbered_list_item':
            return (
              <li key={index} className="mb-2 text-gray-700 ml-4">
                {getPlainText(block.numbered_list_item.rich_text)}
              </li>
            )
          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-janus-blue pl-6 mb-6 italic text-lg text-gray-600">
                {getPlainText(block.quote.rich_text)}
              </blockquote>
            )
          default:
            return (
              <div key={index} className="mb-4 text-gray-500 text-sm">
                Unsupported block type: {block.type}
              </div>
            )
        }
      })}
    </div>
  )
}