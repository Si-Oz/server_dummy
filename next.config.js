
module.exports = {
  reactStrictMode: true,
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

