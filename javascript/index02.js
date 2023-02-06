let d = 3

if(true) {
  var c = 3;
  console.log(d);
}
console.log(c);

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
