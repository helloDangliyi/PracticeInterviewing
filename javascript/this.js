 // 改变函数内this指向  js提供了三种方法  call()  apply()  bind()

        // 1\. call()
        var target = {
            name: 'andy'
        }

        function fn(a, b) {
            console.log('this: ', this);
            console.log(a + b);

        };
        // fn.call(target, 1, 2); //改变函数内部this的指向，第一个参数是o对象
        // fn(1, 2) //this的指向是window
        // fn.apply(target,[ 1, 2]);
        fn.bind(target, 1, 2)()

        // call :可以调用函数;可以改变函数内的this 指向
        // call 的主要作用可以实现继承
        function Father(uname, age, sex) {
            this.uname = uname;
            console.log('this222: ', this);
            this.age = age;
            this.sex = sex;
        }

        function Son(uname, age, sex) {
            console.log('thisSon: ', this);

            Father.call(this, uname, age, sex);
        }
        var son = new Son('刘德华', 18, '男');
        console.log(son);