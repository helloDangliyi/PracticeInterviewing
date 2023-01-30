(
  function() {
    class Person {

      // 可以在属性前添加修饰符
      /* 
      public 修饰的属性可以在任意位置访问(修改)默认值
      private 只能在类中进行访问(修改)。通过在类中添加方法使得私有属性可以被外部访问(修改)
      */
      private _name: string;
      private _age: number

      constructor(name: string, age: number) {
        this._name = name
        this._age = age
      }

      // 定义一个方法获取name属性
     /*  getName () {
        return this._name
      } */

      // 定义方法，用来修改name属性
      /* setName (value : string) {
        this._name = value
      } */

      // 定义一个方法获取age属性
      /* getAge () {
        return this._age
      } */

      // 定义方法，用来修改age属性
      /* setAge (value : number) {

        if( value >=0 ) {
          this._age = value
        }
        
      } */


      get name() {
        // per.name会正常调用这个方法
        console.log('name执行了!');
        return this._name
      }

      set name(value) {
        this._name = value
      }
    }

    /* 
    现在属性是在对象中设置的，属性可以任意的被  修改
    属性可以任意被修改将会导致对象中的数据变得非常不安全
    */
     
    const per = new Person('孙悟空',18)

    // per._name = '猪八戒'
    // per._age = 1

    // name,age受private限制，外部需要方法去调用
   /*  per.setName('唐僧')
    per.setAge(-33) */

    per.name
    per.name = '沙僧'
    console.log('per: ', per);



    class A {
      // public（默认值），可以在类、子类和对象中修改
      num :number;
      constructor(num: number) {
        this.num = num
      }
    }

    class B extends A {
      test() {
        console.log(this.num);
      }
    }

    const b = new B(123)
    b.num = 33
    console.log('b: ', b);


    /* class C {
      name: string;
      age: number
      
      constructor(name: string, age: number) {
        this.name = name
        this.age = age
      }
    } */
    class C {
      // 与上面一致，简便写法，是一个语法糖
      constructor( public name: string, public age: number) {

      }
    }

    const c = new C('党',18)
    console.log('c: ', c);

  }
)()