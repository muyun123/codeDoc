## js通过值获取数组对象对应下标
```js
//第一种
var nn = [ { a: 'ss' },{ a: 'aa' },{ a : '11'},{ a: '33' },{ a: '88' } ] //我要怎么获取 a = 33的下标
var index = nn.map(item => item.a).indexOf(33)

//第二种
var nn = [ { a: 'ss' },{ a: 'aa' },{ a : '11'},{ a: '33' },{ a: '88' } ]
var currentProfileIndex = nn.findIndex((item) => item.a === 33); //返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1。
```

## 判断数组对象是否含有某个值
```js
arr = [{name:'张三', sex:'男'}]

var result = arr.some(item=>{
   if(item.name=='张三'){
      return true 
  } 
})

console.log(result) // 如果arr数组对象中含有name:'张三',就会返回true，否则返回false
```