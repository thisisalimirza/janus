'use client'

import Image from 'next/image'

export default function BlogLoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Actual JANUS Logo with pulse animation */}
        <div className="mb-8">
          <div className="animate-pulse">
            <Image
              src="/JANUS-Logo-transparentBG.png"
              alt="JANUS"
              width={120}
              height={40}
              className="h-12 w-auto mx-auto"
            />
          </div>
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-janus-blue rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-janus-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-janus-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-600 font-medium">Loading insight...</p>
      </div>
    </div>
  )
}