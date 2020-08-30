const express = require('express')
const app = express()
const port = 3000//设置端口

app.get('/', (req, res) => res.send('Hello World!')) //响应get请求

app.listen(port, () => console.log(`Example app listening on port ${port}!`))//监听端口

