const fs = require('fs')
const path = require('path')
const express = require('express')
const serialize = require('serialize-javascript')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.engine('html', ejs.__express)
app.set('view engine', 'html')

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/api/metadata/product', function (req, res) {
  const metadata = {
    "billtemplet": {
      "creator": "mike",
      "title": "Sale Order"
    },
    "billitem": [
      {
        "name": "code",
        "label": "编号",
        "datatype": "String",
        "pos": "head"
      },
      {
        "name": "customer",
        "label": "客户",
        "datatype": "String",
        "pos": "head"
      },
      {
        "name": "date",
        "label": "日期",
        "datatype": "Date",
        "pos": "head"
      },
      {
        "name": "product",
        "label": "产品",
        "datatype": "String",
        "pos": "body"
      },
      {
        "name": "nubmer",
        "label": "数量",
        "datatype": "Number",
        "pos": "body"
      }
    ]
  }
  res.send(serialize({
    code: 200,
    data: metadata
  }))
})

app.get('/api/products', function (req, res) {
  const data = [
    {
      "head": {
        "code": "0001",
        "customer": "老王",
        "data": "2017-3-11"
      },
      "body": [
        {
          "product": "iphone 6",
          "number": 1
        },
        {
          "product": "Macbook air",
          "number": 1
        }
      ]
    },
    {
      "head": {
        "code": "0002",
        "customer": "老张",
        "data": "2017-3-1"
      },
      "body": [
        {
          "product": "Sumsung S7",
          "number": 1
        },
        {
          "product": "Macbook Pro",
          "number": 1
        }
      ]
    },
    {
      "head": {
        "code": "0003",
        "customer": "老李",
        "data": "2017-3-13"
      },
      "body": [
        {
          "product": "ThinkPad X1",
          "number": 1
        }
      ]
    }
  ]
  res.send(serialize({
    code: 200,
    data
  }))
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
