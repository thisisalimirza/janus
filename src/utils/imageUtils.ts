/**
 * Utility functions for handling images, especially from Notion
 */

export const isNotionImageUrl = (url: string): boolean => {
  // Support a wide range of Notion-hosted image domains/CDNs
  return (
    url.includes('notion.so') ||
    url.includes('file.notion.so') ||
    url.includes('s3.us-west-2.amazonaws.com') ||
    url.includes('prod-files-secure.s3.us-west-2.amazonaws.com') ||
    url.includes('notion-static.com') ||
    url.includes('images.notionusercontent.com')
  )
}

export const getOptimizedImageUrl = (url: string, width?: number): string => {
  if (!url) return ''
  
  // If it's already a local image, return as is
  if (url.startsWith('/')) {
    return url
  }
  
  // For Notion images, we might want to add width parameter
  if (isNotionImageUrl(url) && width) {
    try {
      const urlObj = new URL(url)
      urlObj.searchParams.set('width', width.toString())
      return urlObj.toString()
    } catch (error) {
      console.warn('Error parsing Notion URL:', error)
      return url
    }
  }
  
  return url
}

export const createImageFallback = (name: string): string => {
  // Create a simple data URI for fallback
  const canvas = document.createElement('canvas')
  canvas.width = 120
  canvas.height = 60
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // Set background
    ctx.fillStyle = '#f3f4f6'
    ctx.fillRect(0, 0, 120, 60)
    
    // Set text
    ctx.fillStyle = '#6b7280'
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(name.charAt(0).toUpperCase(), 60, 30)
  }
  
  return canvas.toDataURL('image/png')
}

export const preloadImage = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}