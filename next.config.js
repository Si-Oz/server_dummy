
module.exports = {
  reactStrictMode: true,
  assetPrefix:  'https://simon-testing-environment.myshopify.com/a/1',
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

