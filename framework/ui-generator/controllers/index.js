import Router from 'koa-router'
import fs from 'fs'
import path from 'path'

const router = new Router()

router.get('/', async function (ctx) {
  const fileName = path.join(__dirname, '../static/html/index.html')
  const data = fs.readFileSync(fileName)

  ctx.type = 'html'
  ctx.body = data.toString()
})

export default router
