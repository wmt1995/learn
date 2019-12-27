const fs = require('fs')

// fs.readdir('./node01',(err,val)=>{
//     for(let index=0;index<val.length;index++){
//         console.log(val[index])
//     }
// })

fs.stat('./node01',(err,stats)=>{
    if(stats.isFile()){
        console.log('is file')
    }else{
        console.log('is dir')
    }
})
