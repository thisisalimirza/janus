'use client'

import React from 'react'

// Helper function to render rich text with formatting
function renderRichText(richText: any[]): React.ReactElement[] {
  return richText.map((text, index) => {
    let element = <span key={index}>{text.plain_text}</span>
    
    if (text.annotations) {
      if (text.annotations.bold) {
        element = <strong key={index}>{element}</strong>
      }
      if (text.annotations.italic) {
        element = <em key={index}>{element}</em>
      }
      if (text.annotations.underline) {
        element = <u key={index}>{element}</u>
      }
      if (text.annotations.strikethrough) {
        element = <del key={index}>{element}</del>
      }
      if (text.annotations.code) {
        element = <code key={index} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{element}</code>
      }
    }
    
    if (text.href) {
      element = (
        <a 
          key={index} 
          href={text.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-janus-blue hover:text-janus-blue-dark underline"
        >
          {element}
        </a>
      )
    }
    
    return element
  })
}

// Helper function to extract plain text from Notion rich text (for titles/slugs)
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

// Helper function to group consecutive list items
function groupListItems(blocks: any[]) {
  const grouped: any[] = []
  let currentList: { type: 'bulleted' | 'numbered', items: any[] } | null = null

  blocks.forEach((block, index) => {
    if (block.type === 'bulleted_list_item') {
      if (currentList?.type === 'bulleted') {
        currentList.items.push(block)
      } else {
        if (currentList) {
          grouped.push(currentList)
        }
        currentList = { type: 'bulleted', items: [block] }
      }
    } else if (block.type === 'numbered_list_item') {
      if (currentList?.type === 'numbered') {
        currentList.items.push(block)
      } else {
        if (currentList) {
          grouped.push(currentList)
        }
        currentList = { type: 'numbered', items: [block] }
      }
    } else {
      if (currentList) {
        grouped.push(currentList)
        currentList = null
      }
      grouped.push(block)
    }
  })

  if (currentList) {
    grouped.push(currentList)
  }

  return grouped
}

// Client component to render Notion blocks
export default function NotionContent({ blocks }: NotionContentProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  const groupedBlocks = groupListItems(blocks)

  return (
    <div className="notion-content">
      {groupedBlocks.map((item, index) => {
        // Handle grouped lists
        if (typeof item === 'object' && 'type' in item && 'items' in item) {
          if (item.type === 'bulleted') {
            return (
              <ul key={index} className="mb-4 space-y-1 list-disc list-inside">
                {item.items.map((listItem: any, listIndex: number) => (
                  <li key={listIndex} className="text-gray-700 leading-relaxed">
                    {renderRichText(listItem.bulleted_list_item.rich_text)}
                  </li>
                ))}
              </ul>
            )
          } else if (item.type === 'numbered') {
            return (
              <ol key={index} className="mb-4 space-y-1 list-decimal list-inside">
                {item.items.map((listItem: any, listIndex: number) => (
                  <li key={listIndex} className="text-gray-700 leading-relaxed">
                    {renderRichText(listItem.numbered_list_item.rich_text)}
                  </li>
                ))}
              </ol>
            )
          }
        }

        // Handle regular blocks
        const block = item
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {renderRichText(block.paragraph.rich_text)}
              </p>
            )
          case 'heading_1':
            const h1Text = getPlainText(block.heading_1.rich_text)
            return (
              <h1 key={index} className="text-3xl font-bold mb-6 text-black font-display">
                {renderRichText(block.heading_1.rich_text)}
              </h1>
            )
          case 'heading_2':
            const h2Text = getPlainText(block.heading_2.rich_text)
            const h2Slug = createSlug(h2Text)
            return (
              <h2 key={index} id={h2Slug} className="text-2xl font-bold mb-4 text-black font-display" style={{ scrollMarginTop: 'calc(var(--header-height, 80px) + 20px)' }}>
                {renderRichText(block.heading_2.rich_text)}
              </h2>
            )
          case 'heading_3':
            return (
              <h3 key={index} className="text-xl font-bold mb-3 text-black">
                {renderRichText(block.heading_3.rich_text)}
              </h3>
            )
          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-janus-blue pl-6 mb-6 italic text-lg text-gray-600">
                {renderRichText(block.quote.rich_text)}
              </blockquote>
            )
          case 'code':
            return (
              <pre key={index} className="mb-4 p-4 bg-gray-100 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-gray-800">
                  {block.code.rich_text.map((text: any) => text.plain_text).join('')}
                </code>
              </pre>
            )
          case 'divider':
            return (
              <hr key={index} className="my-8 border-gray-300" />
            )
          case 'image':
            const imageUrl = block.image.file?.url || block.image.external?.url
            const caption = block.image.caption ? getPlainText(block.image.caption) : ''
            return (
              <figure key={index} className="mb-6">
                <img 
                  src={imageUrl} 
                  alt={caption || 'Image'} 
                  className="w-full rounded-lg shadow-sm"
                />
                {caption && (
                  <figcaption className="mt-2 text-sm text-gray-600 text-center italic">
                    {caption}
                  </figcaption>
                )}
              </figure>
            )
          case 'callout':
            const icon = block.callout.icon?.emoji || '💡'
            return (
              <div key={index} className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                <div className="flex items-start">
                  <span className="text-xl mr-3 mt-0.5">{icon}</span>
                  <div className="text-gray-700">
                    {renderRichText(block.callout.rich_text)}
                  </div>
                </div>
              </div>
            )
          case 'toggle':
            return (
              <details key={index} className="mb-4 p-3 border border-gray-200 rounded-lg">
                <summary className="font-medium text-gray-800 cursor-pointer hover:text-janus-blue">
                  {renderRichText(block.toggle.rich_text)}
                </summary>
                <div className="mt-3 pl-4">
                  {block.children && (
                    <NotionContent blocks={block.children} />
                  )}
                </div>
              </details>
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