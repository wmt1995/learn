const express = require('express')
const app = express()

// app.get('/user/add', (req, res) => {
//     res.send({code:'add',mes:'成功了'})
// })
// app.get('/user/del', (req, res) => {
//   res.send({code:'del',mes:'成功了'})
// })

let userRouter = require('./router/userRouter')
app.use('/user',userRouter)
app.listen(3000, () => {
  //监听3000端口 开启服务器
  console.log('server start')
})