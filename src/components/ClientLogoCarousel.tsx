'use client'

import ClientLogo from './ClientLogo'

interface ClientLogoCarouselProps {
  clientLogos: Array<{
    id: string
    name: string
    logo: string
    website?: string
  }>
}

export default function ClientLogoCarousel({ clientLogos }: ClientLogoCarouselProps) {
  // Fallback logos when Notion CMS is not configured
  const fallbackLogos = [
    { id: "1", name: "TechFlow", logo: "", website: "" },
    { id: "2", name: "DataVault", logo: "", website: "" },
    { id: "3", name: "CloudSync", logo: "", website: "" },
    { id: "4", name: "SecureBase", logo: "", website: "" },
    { id: "5", name: "NextGen", logo: "", website: "" },
    { id: "6", name: "SyncPro", logo: "", website: "" }
  ]

  // Use actual logos or fallback
  const logosToDisplay = clientLogos.length > 0 ? clientLogos : fallbackLogos

  // Create enough copies to ensure seamless infinite scrolling
  // We need at least 3 full sets to ensure there's always content visible
  const duplicatedLogos = [...logosToDisplay, ...logosToDisplay, ...logosToDisplay]

  return (
    <div className="relative overflow-hidden">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="flex gap-8 py-4 animate-scroll hover:pause-animation">
        {duplicatedLogos.map((client, index) => (
          <div 
            key={`${client.id}-${index}`}
            className="flex-shrink-0 w-40 flex justify-center"
          >
            <ClientLogo client={client} variant="carousel" />
          </div>
        ))}
      </div>
    </div>
  )
}