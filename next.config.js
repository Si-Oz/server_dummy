const isProd = process.env.NODE_ENV === 'production'
console.log(isProd)
 
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://simon-testing-environment.myshopify.com/' : '',
  async headers() {
    return ( isProd ? [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-type',
            value: 'application/liquid',
          },
        ],
      },
    ] : []

    )
    
    
  },
}

