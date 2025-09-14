/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Disable static generation to avoid SSR issues with wagmi
  output: 'standalone',
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ['@coinbase/onchainkit']
  }
};

export default nextConfig;
