const url=require('url')
/*
url.prase 将url字符串转换成对象
url.format 将对象转成字符串

*/ 


let urlString='http://132.90.194.109:8060/admin?user=admin&ps=123/#/user'
let urlObj=url.parse(urlString)
console.log(urlObj)


let urlobj={
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: '132.90.194.109:8060',
  port: '8060',
  hostname: '132.90.194.109',
  hash: '#/user',
  search: '?user=admin&ps=123/',
  query: 'user=admin&ps=123/',
  pathname: '/admin',
  path: '/admin?user=admin&ps=123/',
  href: 'http://132.90.194.109:8060/admin?user=admin&ps=123/#/user'

}

let urlStr = url.format(urlobj)
console.log(urlStr)

