/*
querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具
*/
const qs = require('querystring')
let string = 'name=wmt&pass=12345&sex=0'

//parse 等同于 decode ，解析URL
let obj1 =qs.parse(string)   //{ name: 'wmt', pass: '12345', sex: '0' }
//等同于
let obj2 = qs.parse(string,'&','=') //{ name: 'wmt', pass: '12345', sex: '0' }

let string3 = 'foo=bar&abc=xyz&abc=123'
let obj3 = qs.parse(string3)       //{ foo: 'bar', abc: [ 'xyz', '123' ] }




//stringify 等同于 encode ，将对象序列化为URL 

let obj4 = { foo: 'bar', baz: ['qux', 'quux'], corge: '' }
let string4 = qs.stringify(obj3)   //foo=bar&baz=qux&baz=quux&corge=


//escape 编码
let string5 = 'w=哈哈&pass=123'
let result5 = qs.escape(string5)   //w%3D%E5%93%88%E5%93%88%26pass%3D123

//unescape 解码
let string6 = 'w%3D%E5%93%88%E5%93%88%26pass%3D123'
let result6 = qs.unescape(string6)  //w=哈哈&pass=123


console.log(result6)   
