// 对象数组去重
// https://juejin.cn/post/7088216038063472670
function arrayToHeavy(arr) {
  const result = []
  const mapList = new Map()
  console.log('mapList: ', mapList);
  arr.forEach(item => {
    if (!mapList.has (item.id)) {
      result.push(item)
      mapList.set(item.id, true)
    }
  });

  return result
}

console.log('arrayToHeavy([1,2,3,3,3,4,4]): ', arrayToHeavy([{id:1},{id:3},{id:4},{id:2,name:'111'},{id:2}]));

let a = null
console.log('a: ',typeof a);  


let var_symbol = Symbol.for('symbol');
console.log('var_symbol: ', var_symbol);


console.log(`[Symbol('name')]: `, [Symbol('name')] );