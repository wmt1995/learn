const express=require('express')
const path=require('path')
const app=express()

app.use('/haha',express.static(path.join(__dirname,'./mulu')))
//http://localhost:3000/haha/img1.png

// app.use(express.static(path.join(__dirname,'./mulu')))
//http://localhost:3000/img1.png
app.listen(3000,()=>{
  console.log('开始啦')
})