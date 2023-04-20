const input1 = document.getElementById('input1')

// let timer = null
// input1.addEventListener('keyup',function (){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         // 模拟触发 change事件
//         console.log(input1.value);
        
//         timer = null
//     }, 500);
// })


// function debounce(fn,delay = 500){

//     // timer是在闭包中
//     let timer = null
//     return function () {
//         if(timer){
//             clearTimeout(timer)
//         }
//         // timer是setTimeout的定时器id赋值，5ms后执行，再清空定时器
//         timer = setTimeout(()=>{
//             // 相当于fn()
//             fn.apply(this,arguments)

//             timer = null
//         },delay)
//     }
// }

// input1.addEventListener('keyup',debounce( function ()  {
//     // 模拟触发 change事件
//     console.log(input1.value);
// },600))



// 节流
function throttle(fn, delay) {
    //记录上一次函数触发的时间
    var lastTime = 0;
    return function(){
        //记录当前函数触发的时间
        var nowTime = Date.now();

        console.log('nowTime: ', nowTime);
        if(nowTime - lastTime > delay){
            //修正this指向问题
            fn.call(this);
            //同步执行结束时间
            lastTime = nowTime;
        }
    }
}

input1.addEventListener('keyup',throttle( function ()  {
    // 模拟触发 change事件
    console.log(input1.value);
},600))
