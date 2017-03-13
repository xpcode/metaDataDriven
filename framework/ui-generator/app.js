import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

import winston from './middlewares/winston'
import router from './controllers'
import env from './env'

new Koa()
  .use(winston())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(__dirname, 'static')))
  .listen(env.HTTP_SERVER_PORT)

console.log(`listening on port ${env.HTTP_SERVER_PORT}`)
