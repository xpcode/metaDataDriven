const fs = require('fs')
const path = require('path')
const express = require('express')
const serialize = require('serialize-javascript')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3003

app.use(express.static(path.join(__dirname, 'public')))
app.engine('html', ejs.__express)
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'html')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/viewtypes', function (req, res) {
  const dirPath = path.join(__dirname, '../ui-model')
  const dirs = fs.readdirSync(dirPath)

  res.send(serialize({
    code: 200,
    data: dirs
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
