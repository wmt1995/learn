const express = require('express')
const app = express()

//自定义中间件
// 等同于 app.use((req,res,next)=>{})
app.use('/',(req,res,next)=>{
  console.log('中间件')
  let{takon}=req.query
  if(token){
    next()
  }else{
    res.send('出错啦！')
  }
})

app.get('/user/add', (req, res) => {
    res.send({code:'add',mes:'成功了'})
})
app.get('/user/del', (req, res) => {
  res.send({code:'del',mes:'成功了'})
})
app.listen(3000, () => {
  //监听3000端口 开启服务器
  console.log('server start')
})