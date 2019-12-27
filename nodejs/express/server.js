const express = require('express')
const app = express()
const bodypaser=require('body-parser')
//app.use 使用中间件（插件）
//解析表单数据 x-www-form-urlencode
app.use(bodypaser.urlencoded({extended:false}))
app.use(bodypaser.json())
app.get('/user/login', (req, res) => {
  //接收get参数 req.query
  let { us, ps } = req.query
  if (us === 'q' && ps === '123') {
    res.send({code:0,mes:'成功了'})
  }else{
    res.send({code:-1,mes:'失败了'})
  }
  console.log('nihao')
  
})
app.post('/user/reg',(req,res)=>{
  let {us,ps}=req.body
  console.log(req.body)
  //express不能直接解析消息体
  //通过第三方的插件实现解析
  if(us===123&&ps===456){
    res.send({code:0,mes:'post成功了'})
  }else{
    res.send({code:-1,mes:'post失败了'})
  }
})
app.listen(3000, () => {
  //监听3000端口 开启服务器
  console.log('server start')
})