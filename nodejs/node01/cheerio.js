const cheerio =require('cheerio')
let $ =cheerio.load('<div><p>NI</p><img src="http://www.baidu.com"></div>')
//将一组 html格式字符串 转化为类dom 之后通过jq语法选中其中的元素
console.log($('img').attr('src'))