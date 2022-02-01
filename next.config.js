const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: 'https://simon-testing-environment.myshopify.com/',
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-type',
            value: 'application/liquid',
          },
        ],
      },
    ]
  },
}

