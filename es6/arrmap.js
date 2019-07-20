let json = {
    name: "zgh",
    age: 29,
    sex: "M"
}

let { name, age } = json
console.log(name)
console.log(age)

console.log('---------------')
let map = new Map()
map.set('name', 'hcp')
map.set('age', 28)
// 注意用的是中括号
for (let [key, value] of map) {
    console.log('key=' + key + ' value=' + value)
}

// 只获取key
for (let [key] of map) {
    console.log('key=' + key)
}

// 只获取value
for (let [, value] of map) {
    console.log('value=' + value)
}

//map方法
let arrmap = [2, 3, 4]
arrmap = arrmap.map(item => item * item)
console.log('after map 1:', arrmap)
//如果要用大括号把后面的代码括起来，就必须加return，否则会认为没有返回值，而不加大括号默认返回，这个应该注意
arrmap = arrmap.map((item) => { return item * 2 })
console.log('after map 2:', arrmap)
arrmap = arrmap.map((item) => item * 2)
console.log('after map 3:', arrmap)

