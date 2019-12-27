/*
1.请求网站数据
2.将数据保存本地文件
*/
const http = require('https')
const fs=require('fs')
const cheerio=require('cheerio')
let url = 'http://www.baidu.com'
let qunar='https://www.qunar.com'

http.get(qunar, (res) => {
    //安全判断
    const {statusCode} =res
    const contentType=res.headers['content-type']
    console.log('ppp',statusCode, contentType)

    let err=null
    if(statusCode!==200){
        err=new Error('请求状态错误')
    }else if(!/^text\/html/.test(contentType)){
        err=new Error('请求类型错误')
    }
    if(err){
        //重置缓存
        res.resume()
        return false
    }
    //数据分段 只要接受数据就会触发data事件 chunk每次接收的数据片段
    let rawData=''
    res.on('data',(chunk)=>{
        rawData +=chunk
        // console.log('数据传输'+chunk)
    })

    res.on('end',()=>{
        fs.writeFileSync('./node01/qunar.html',rawData)
        console.log('wanbi')
        //通过cheerio进行分析
        let $=cheerio.load(rawData)//将请求的网页进行转换
        $('img').each((index,el)=>{
            console.log($(el).attr('src'))

        })
    })
}).on('error',(err)=>{
    console.log('请求错误')
})