/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable ISR
  trailingSlash: true,
  images: {
    // Keep unoptimized for better compatibility with Vercel
    unoptimized: true,
    domains: ['janusny.com', 'www.janusny.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'janusny.com',
        pathname: '/client-logos/**',
      },
      {
        protocol: 'https',
        hostname: 'www.janusny.com',
        pathname: '/client-logos/**',
      },
      // Notion image support
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.notion.so',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'notion.so',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'file.notion.so',
        pathname: '/**',
      }
      ,
      // Additional Notion image CDNs (some uploads resolve to these hosts)
      {
        protocol: 'https',
        hostname: 'prod-files-secure-cdn.notion-static.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure.notion-static.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-files.notion-static.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'content-images.notion-static.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.notionusercontent.com',
        pathname: '/**',
      },
      // Netlify static bucket for client logos
      {
        protocol: 'https',
        hostname: 'janus-client-logos.netlify.app',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig