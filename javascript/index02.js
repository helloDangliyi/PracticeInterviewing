let d = 3

if(true) {
  var c = 3;
  console.log('d',d);
}
console.log('c',c);


if(true) {
  let e = 3
  var f = 3;
}

console.log('2e',e); //不可以跨块访问
console.log('2f',f);//可以跨块访问


// 闭包
var globalVar = null; // 全局变量
var fn = function () {
    var originVal = globalVar; // 局部变量
    var unused = function () { // 未使用的函数
        if (originVal) {
            console.log('call')
        }
    }
    globalVar = {
        longStr: new Array(1000000).join('*'),
        someThing: function () {
            console.log('someThing')
        }
    }
}
setInterval(fn, 100);
