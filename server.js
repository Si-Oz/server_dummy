// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

 
      // res.setHeader('Content-type', 'application/liquid')
 

  
    

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } 
    // else if(pathname === '/app'){
    //     res.setHeader('Content-type', 'application/liquid')
    //     console.log(res)
    //     app.render(req,res, '/index', query)
        
    // }
    else {
      handle(req, res, parsedUrl)
    }
  }).listen(process.env.PORT || port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})

// const express = require('express')
// const next = require('next')

// const port = parseInt(process.env.PORT, 10) || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()


// app.prepare().then(() => {
//   const server = express()


//   // server.use((req, res, next) => {
//   //     res.setHeader('Content-type', 'application/json')
//   // })

//   server.all('*', (req, res) => {
//     res.setHeader('Content-type', 'liquid')
//     return handle(req, res)
//   })

//   server.listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })


// const Koa = require('koa')
// const next = require('next')
// const Router = require('@koa/router')

// const port = parseInt(process.env.PORT, 10) || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = new Koa()
//   const router = new Router()

//   router.all('(.*)', async (ctx) => {
//     await handle(ctx.req, ctx.res)
//     ctx.response.set('Content-Type', 'application/liquid');
//     console.log(ctx.response)
//     ctx.respond = false
//   })

//   server.use(async (ctx, next) => {
//     ctx.res.statusCode = 200
//     await next()
//   })

//   server.use(router.routes())
//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })