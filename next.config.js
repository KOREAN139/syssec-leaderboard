/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://KOREAN139.github.io/syssec-leaderboard/' : '',
}

module.exports = nextConfig
