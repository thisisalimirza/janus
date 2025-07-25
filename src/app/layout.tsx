import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'JANUS | The Clarity Engine™ for SaaS Growth',
  description: 'JANUS installs high-converting, brand-driven marketing systems into SaaS companies. Book a strategy call to transform your marketing.',
  keywords: 'SaaS marketing, brand strategy, creative agency, marketing systems, conversion optimization, SaaS growth, B2B marketing, landing page optimization, messaging strategy',
  authors: [{ name: 'JANUS', url: 'https://janus-creative.com' }],
  creator: 'JANUS',
  publisher: 'JANUS',
  metadataBase: new URL('https://janus-creative.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'JANUS | The Clarity Engine™ for SaaS Growth',
    description: 'JANUS installs high-converting, brand-driven marketing systems into SaaS companies. Trusted by funded startups and growth-stage SaaS companies.',
    type: 'website',
    url: 'https://janus-creative.com',
    siteName: 'JANUS',
    locale: 'en_US',
    images: [
      {
        url: '/JANUS-Logo-transparentBG.png',
        width: 1200,
        height: 630,
        alt: 'JANUS - The Clarity Engine™ for SaaS Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JANUS | The Clarity Engine™ for SaaS Growth',
    description: 'JANUS installs high-converting, brand-driven marketing systems into SaaS companies.',
    images: ['/JANUS-Logo-transparentBG.png'],
    creator: '@janus_creative',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'Business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JANUS",
              "alternateName": "JANUS Creative Agency",
              "description": "JANUS installs high-converting, brand-driven marketing systems into SaaS companies.",
              "url": "https://janus-creative.com",
              "logo": "https://janus-creative.com/JANUS-Logo-transparentBG.png",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Ali Mirza"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/janus-creative"
              ],
              "serviceType": [
                "SaaS Marketing",
                "Brand Strategy", 
                "Creative Agency",
                "Marketing Systems",
                "Conversion Optimization"
              ],
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "JANUS Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "JANUS Clarity Engine™",
                      "description": "Complete marketing system transformation for SaaS companies"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data for Website */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "JANUS",
              "url": "https://janus-creative.com",
              "description": "The Clarity Engine™ for SaaS Growth",
              "publisher": {
                "@type": "Organization",
                "name": "JANUS"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://janus-creative.com/insights?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sk7b1kgzgg");
            `,
          }}
        />
      </body>
    </html>
  )
}