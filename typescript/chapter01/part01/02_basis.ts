let a : unknown;
a = 'hello'

let b : String

// 可以通过对a进行判断再赋值
if(typeof a === 'string') {
  b = a
}

// as 类型断言
b = a as string;

function fn():Number {
  return 123
}

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn1 ():void{
   
}

// never 表示永远不会返回结果
function fn2 ():never{
  // 抛出错误，才能没有返回值，就可以设置为never
   throw new Error('报错了')
}