const fs = require('fs')
const path = require('path')
const express = require('express')
const serialize = require('serialize-javascript')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.engine('html', ejs.__express)
app.set('views', '__mock__')
app.set('view engine', 'html')

app.get('/', function (req, res) {
  res.render('index')
});

/**
 * 获取元数据，直接在元数据文件夹读取
 */
app.get('/api/metadata/:moduleId', function (req, res) {
  const moduleId = req.param('moduleId')
  const metadata = require(`./__mock__/metadata-ui/${moduleId}`)

  res.send(serialize({
    code: 200,
    data: metadata
  }))
})

/**
 * 获取业务数据
 */
app.get('/api/products', function (req, res) {
  const data = require('./__mock__/data/products')

  res.send(serialize({
    code: 200,
    data
  }))
})


const webpackConfig = require("./webpack.config.js")
const compiler = require('webpack')(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  },
  hot: true,
  host: '0.0.0.0'
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
