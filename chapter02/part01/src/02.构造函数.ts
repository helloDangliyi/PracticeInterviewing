class Dog {
  name :string;
  age :number

  // constructor 被称为构造函数，会在创建实例对象时调用
  constructor(name: string, age: number) {

    // 表示当前的实例对象
    console.log(this);

    this.name = name
    this.age = age
  }

  sayHello () {
    // 在方法中可以通过this来表示当前调用方法的对象
    console.log(`大家好，这是我的名字${this.name}`);

  }
}

// new Dog() 就会调用constructor 这个构造函数
const dog = new Dog('旺财',18)
console.log('dog: ', dog.name);

const dog2 = new Dog('小白',8)
console.log('dog2: ', dog2);