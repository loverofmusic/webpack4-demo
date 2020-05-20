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

const arr = [1, 3, 5];
arr.map((i) => {
  return i + 1;
});
