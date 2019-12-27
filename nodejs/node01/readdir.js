const fs=require('fs')
const path=require('path')
// 同步读取文件，如果出错会报错
// let dirs = fs.readdirSync('./')
// console.log(dirs)

// 异步读取
//错误的回调优先，默认为空
// fs.readdir('../node01',(err,data)=>{
//     console.log(err)
//     console.log(data)
// })

// 同步执行  在关键位置捕获错误信息用 try catch
// try{
//     let dirs = fs.readdirSync('./no')
//     console.log(dirs)
// }catch(err){
//     console.log(err)
// }
// console.log(222)

// 创建文件夹
// fs.mkdir('/test',(err)=>{
//     console.log(err)
// })

//更改文件名字
// fs.rename('./test','./test01',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('ok')
//     }
// })

//删除空文件夹
// fs.rmdir('/test',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('ok')
//     }
// })

console.log(path.resolve('/'))     //g:\
console.log(path.resolve('./'))   //g:\前端\nodejs学习\code
console.log(path.resolve('../'))  //g:\前端\nodejs学习
console.log(path.resolve('../../'))  //g:\前端
