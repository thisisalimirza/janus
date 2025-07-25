import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'JANUS | The Clarity Engine™ for SaaS Growth',
  description: 'JANUS installs high-converting, brand-driven marketing systems into SaaS companies. Book a strategy call to transform your marketing.',
  keywords: 'SaaS marketing, brand strategy, creative agency, marketing systems, conversion optimization',
  authors: [{ name: 'JANUS' }],
  metadataBase: new URL('https://janus-creative.com'),
  openGraph: {
    title: 'JANUS | The Clarity Engine™ for SaaS Growth',
    description: 'JANUS installs high-converting, brand-driven marketing systems into SaaS companies.',
    type: 'website',
    url: 'https://janus-creative.com',
    siteName: 'JANUS',
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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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