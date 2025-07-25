'use client'

import Image from 'next/image'
import { useState } from 'react'

interface AdaptiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  priority?: boolean
}

export default function AdaptiveImage({
  src,
  alt,
  width = 600,
  height = 450,
  className = '',
  containerClassName = '',
  priority = false
}: AdaptiveImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center ${containerClassName}`}>
        <div className="text-center text-gray-500 p-8">
          <div className="bg-janus-blue/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-janus-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <p className="text-sm font-medium">Case Study Preview</p>
          <p className="text-xs text-gray-400 mt-1">Image loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative bg-gray-50 rounded-lg overflow-hidden ${containerClassName}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="bg-gray-300 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="h-3 bg-gray-300 rounded w-20 mx-auto"></div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  )
}