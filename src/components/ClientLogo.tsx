'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ClientLogoProps {
  client: {
    id: string
    name: string
    logo: string
    website?: string
  }
}

export default function ClientLogo({ client }: ClientLogoProps) {
  const [imageError, setImageError] = useState(false)

  const LogoContent = () => {
    if (imageError || !client.logo) {
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
      <Image
        src={client.logo}
        alt={client.name}
        width={120}
        height={60}
        className="max-w-28 max-h-14 lg:max-w-32 lg:max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        onError={() => setImageError(true)}
        priority={false}
      />
    )
  }

  const containerClasses = "h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center hover:border-gray-200 transition-colors group"

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