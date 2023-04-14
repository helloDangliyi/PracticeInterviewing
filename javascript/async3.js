async function async1 () {
    console.log('async1 start')
    await async2() // 先执行async2()，再执行await
    // console.log('await async2(): ', await async2());//undefined
    //await的后面，都可以看作是异步回调callback里的内容,即异步
    // 类似，event loop,setTimeout(cb1),cb1是后面的代码

    console.log('async1 end') // 关键在这一步，它相当于放在 callback 中，最后执行
  }
  
  async function async2 () {
    console.log('async2') //执行后会返回undefined
  }
  
  console.log('script start')
  async1()
  console.log('script end')