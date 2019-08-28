import $ from 'jquery'
console.log(window.$, 'hhh', $)
let a = require('./a');
console.log('a: ', a);
let fn = () => {
  let [a, b, c] = [1, 3, 4]
  console.log(a, b, c);
}
fn()
import Iimg from '@/icon.png'
console.log('img: ', Iimg);
console.log('dev', Dev)
import {
  ILOVEYOU
} from './b'
console.log('ILOVEYOU: ', ILOVEYOU);
require('./style.css')
require('./sass.scss')
console.log('webpack', a)
class A {
  a = 1
}
let str = new A()
console.log(str.a)
import logo from './icon.png'
let img = new Image()
img.src = logo
console.log('logo: ', logo, img);
document.body.appendChild(img)

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next()
console.log('ceshi: ', 'aaa'.includes('a'))
// console.log(null.a)
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  console.log(config)
  // 在发送请求之前做些什么
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(resp) {
  // 对响应数据做点什么
  return resp.data.data;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
function ajax() {

  axios.get('/api/v2/market/modules?t=' + Date.now())
    .then((res) => {
      console.log(res)
    })

}
ajax()