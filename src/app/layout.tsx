import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JANUS | The Clarity Engine™ for SaaS Growth',
  description: 'JANUS installs high-converting, brand-driven marketing systems into SaaS companies. Book a strategy call to transform your marketing.',
  keywords: 'SaaS marketing, brand strategy, creative agency, marketing systems, conversion optimization',
  authors: [{ name: 'JANUS' }],
  openGraph: {
    title: 'JANUS | The Clarity Engine™ for SaaS Growth',
    description: 'JANUS installs high-converting, brand-driven marketing systems into SaaS companies.',
    type: 'website',
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
      </body>
    </html>
  )
}