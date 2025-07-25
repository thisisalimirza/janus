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
      // Keep Notion support for other content
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig