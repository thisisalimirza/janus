/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable ISR
  trailingSlash: true,
  images: {
    // Keep unoptimized for better compatibility with Vercel
    unoptimized: true
  }
}

module.exports = nextConfig