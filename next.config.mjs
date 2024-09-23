/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'diprofirechile.wpcomstaging.com',
        port: '',
        pathname: '/wp-content/uploads/**'
      }
    ]
  },
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';"
          }
        ]
      }
    ]
  }
}

export default nextConfig
