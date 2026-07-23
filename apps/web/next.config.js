/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.servitron.id'
  },
  async rewrites() {
    return [
      { source: '/download/:uuid', destination: 'https://api.servitron.id/download/resolve?uuid=:uuid' },
      { source: '/go/:id', destination: 'https://api.servitron.id/affiliate/:id' }
    ]
  }
}
