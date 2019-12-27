const fs =require('fs')
//创建文件  覆盖写入
// fs.writeFile('name.txt','12345',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })
//写入文件
fs.appendFile('name.txt','看看asdfg',(err)=>{
    if(err){
        console.log(err)
    }
    
})
//读取文件
fs.readFile('name.txt','utf8',(err,val)=>{
    if(err){
        console.log(err)
    }else{
        console.log(val)   //如果不设置'utf8',输出为buffer-二进制数据流
        // console.log(val.toString('utf8'))
    }
})
//删除文件
fs.unlink('./name.txt',(err)=>{
    if(err){
        console.log(err)
    }
})