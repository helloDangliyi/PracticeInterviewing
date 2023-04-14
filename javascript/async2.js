
async function fn1(){
    return 100  //相当于Promise.resolve(100)
    // return Promise.resolve(200)
}

// const res1 = fn1() // 执行async函数，返回的是Promise对象
// console.log('res1: ', res1);

// res1.then((data)=>{
    // console.log('data: ', data);

// })

!(async function () {
    const p4 = Promise.reject('some err')
    try {
        const res = await p4
        console.log(res)
    } catch (ex) {
        console.error('ex',ex)
    }
})()