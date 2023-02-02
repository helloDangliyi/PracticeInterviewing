import {hi} from './m.js'

console.log('hello');
console.log('hello2');

let a = 10  //若target是ES3,则js编译为var;如果ES6,则为let

// document.getElementById()  //与Lib有关


function fn (a :unknown,b:unknown) {
  return a + b
}


// noImplicitThis 禁止类型不明确的 this
function fn2 (this: Window) {
  alert(this)
}

let box1 = document.getElementById('box1')

// strictNullChecks  严格的空值检查,可以使用?避免
box1?.addEventListener('click',()=> {
  console.log('box1: ', box1);

})