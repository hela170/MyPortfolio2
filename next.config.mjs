/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/MyPortfolio2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MyPortfolio2/' : '',
}

export default nextConfig
