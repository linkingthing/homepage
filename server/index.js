const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

// 业务代码
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser')

app.use(cookieParser('sessionScret'));
app.use(session({
  secret: 'sessionScret',
  resave: true,    // (是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。
  rolling: true,    // 强制在每个响应中重设cookie的过期时间，并重新开始计时
  saveUninitialized: true,    // 初始化session时是否保存到存储。默认为true， 但是(后续版本)有可能默认失效，所以最好手动添加。
  cookie: {
    maxAge: 2 * 60 * 60 * 1000  // 过期时间，单位毫秒
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true  }))
app.use('/apis', require('./api'))

app.use(express.static('../apidoc'))
async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)


  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
