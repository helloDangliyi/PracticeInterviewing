// 不常用
let a : object
a = {}
a = function () {

}   

// 常用

// {}用来指定对象中可以包含哪些属性
// 语法：{ 属性名： 属性值，属性名：属性值}
// 在属性名后边加上?, 表示属性是可选的
let b :{ name: String, age?:number }
b = { name: '孙悟空'}

// [ propName: string ]: any 表示任意类型的属性
let c : { name: string, [ propName: string ]: any }
c = { name: '唐僧'}


/* 
设置函数结构的类型声明：
    语法：（形参：类型，形参：类型...）=> 返回值
*/
let d : (a: number,b:number) => number

d = function (n1,n2){
  return n1+ n2
}

enum Gender  {
  male,
  female
}

let i : { name: string, gender: Gender}

i = { 
  name:'孙悟空',
  gender: Gender.male
}

console.log(i.gender === Gender.male); //true










