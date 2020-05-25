import { list } from './list';
list();

// import img from './assets/images/t.jpg';
// console.log(img)

// import img2 from './assets/images/icon.png';
// console.log(img2)

// import ttf from './assets/font/1.ttf';
// console.log(ttf)

// import './assets/css/index.less';

console.log('indexxxx');

//hmr
// if(module.hot){
//   module.hot.accept('./list', ()=>{
//     console.log('update list');
//     list();
//   });
//   //关闭hmr
//   module.hot.decline('./list')
// }

// import "@babel/polyfill";
// When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
//   Please remove the direct import of `core-js` or use `useBuiltIns: 'entry'` instead.
const arr = [1, 3, 5];
arr.map((i) => {
  return i + 1;
});

import { fn1, fn2 } from './common/util.js';
fn1();

// import $ from 'jquery';//单独引入 如果不单独引入 就需要 注册到全局上，用webpack.ProvidePlugin
