// function fn(a:number):number {
//   return a
// }

/* 
定义函数或类时，如果遇到类型不明确就可以使用泛型

*/

// 定义了一个泛型T，a的类型是T
function fn <T>(a: T):T {
  return a
}

// 可以直接调用具有泛型的函数
let re = fn(10) //不指定泛型，TS可以自动
let re1 = fn<string>('hello') //指定泛型

function fn2<T,K>(a: T, b:K) {
  console.log(b);
  return a
}
fn2<string,number>('嘿嘿嘿',2)


interface Inter {
  length: number
}

// T extends Inter 表示泛型T必须是Inter实现类(子类)
function fn3 <T extends Inter>(a: T): number {
  return a.length
}

// 字符串有这个length属性
fn3('1')


// 泛型是一个不确定类型时候的变量
class myClass <T>{
  name: T

  constructor(name: T) {
    this.name = name
  }
}

// const mc = new myClass<string>('孙悟空')
const mc = new myClass('孙悟空') //会自动判断


