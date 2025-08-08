'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getOptimizedImageUrl, isNotionImageUrl } from '../utils/imageUtils'
import { useImagePreloader } from '../hooks/useImagePreloader'

interface ClientLogoProps {
  client: {
    id: string
    name: string
    logo: string
    website?: string
  }
  variant?: 'default' | 'carousel'
}

export default function ClientLogo({ client, variant = 'default' }: ClientLogoProps) {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    if (client.logo) {
      // Get optimized URL for the logo
      const optimizedUrl = getOptimizedImageUrl(client.logo, 160)
      setImageSrc(optimizedUrl)
    } else {
      setImageSrc('')
    }
  }, [client.logo])

  // Use the image preloader hook for better loading management
  const { loaded: imageLoaded, error: imageError, loading: imageLoading } = useImagePreloader(imageSrc)

  const LogoContent = () => {
    if (imageError || !imageSrc) {
      if (variant === 'carousel') {
        return (
          <div className="text-center opacity-50 hover:opacity-75 transition-opacity">
            <div className="text-2xl font-bold text-gray-400">
              {client.name.charAt(0)}
            </div>
            <span className="text-xs text-gray-400 font-medium">{client.name}</span>
          </div>
        )
      }
      
      return (
        <div className="text-center">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mx-auto mb-1 flex items-center justify-center group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-300">
            <span className="text-gray-600 font-bold text-sm">{client.name.charAt(0)}</span>
          </div>
          <span className="text-xs text-gray-400 font-medium">{client.name}</span>
        </div>
      )
    }

    return (
      <div className="relative">
        {imageLoading && (
          <div className={variant === 'carousel' 
            ? "absolute inset-0 bg-gray-100 animate-pulse rounded max-w-28 max-h-14 lg:max-w-32 lg:max-h-16"
            : "absolute inset-0 bg-gray-100 animate-pulse rounded-lg max-w-28 max-h-14 lg:max-w-32 lg:max-h-16"
          } />
        )}
        <Image
          src={imageSrc}
          alt={client.name}
          width={120}
          height={60}
          className={`transition-all duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${variant === 'carousel' 
            ? "max-w-28 max-h-14 lg:max-w-32 lg:max-h-16 object-contain opacity-60 hover:opacity-100"
            : "max-w-28 max-h-14 lg:max-w-32 lg:max-h-16 object-contain filter grayscale group-hover:grayscale-0"
          }`}
          priority={false}
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 128px"
          {...(isNotionImageUrl(imageSrc) && {
            referrerPolicy: 'no-referrer'
          })}
        />
      </div>
    )
  }

  const containerClasses = variant === 'carousel' 
    ? "h-16 flex items-center justify-center group" 
    : "h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center hover:border-gray-200 transition-colors group"

  if (client.website) {
    return (
      <div className={containerClasses}>
        <a 
          href={client.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-full"
        >
          <LogoContent />
        </a>
      </div>
    )
  }

  return (
    <div className={containerClasses}>
      <div className="flex items-center justify-center w-full h-full">
        <LogoContent />
      </div>
    </div>
  )
}