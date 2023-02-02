(
  function() {

    class Animal{

      name: string;
      age: number

      constructor (name: string, age: number) {
        this.name = name
        this.age = age
      }

      sayHello() {
        console.log('动物在叫');
      }
    }

    // 定义一个表示狗的类
    // 使Dog 类继承Animal类
    // 使用继承后，子类会拥有父类所有的属性和方法
    class Dog extends Animal{

      // 添加Dog的方法
      run () {
        console.log(`${this.name}在跑`);
      }

      // 与父类添加了相同的方法，子类会覆盖父类：叫做方法重写
      sayHello() {
        console.log('汪汪汪!');
      }
    }

    const dog = new Dog ('旺财', 5)
    console.log('dog: ', dog);
    dog.sayHello()
    dog.run()


    // 定义一个表示猫的类
    class Cat  extends Animal{

      sayHello() {
        console.log('喵喵喵!');
      }

    }

    const cat = new Cat ('小喵', 5)
    console.log('cat: ', cat);


  }
)()


