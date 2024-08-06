/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // domains: ['https://diprofirechile.wpcomstaging.com'],
      {
        protocol: 'https',
        hostname: 'diprofirechile.wpcomstaging.com',
        port: '',
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
}

export default nextConfig
