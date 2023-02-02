// 使用class关键字来定义一个类

/* 
类中主要包含了俩个部分
属性
方法
*/
class Person {

  /* 
  实例属性: 需要通过对象的实例去访问；
  类属性(静态属性): 需要通过类去访问
  */

  // 实例属性
  name: string = '孙悟空';

  // 在属性前使用static关键字可以定义类属性(静态属性)
  static age: number = 18
  // 只读，不可修改
  // static readonly age: number = 18

  // 实例方法:通过实例去调用；
  // 静态方法：通过类去调用
  sayHello() {
    console.log('hello');
  }

}

const per = new Person ()
console.log('per: ', per);
console.log(per.name, Person.age);
per.sayHello()