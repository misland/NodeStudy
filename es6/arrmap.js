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


// reduce 方法 
let arrred = [12, 11, 10]
let total = arrred.reduce((sum, item) => sum + item)
console.log('total is :', total)
//第二个参数是设置初始值
let inittotal = arrred.reduce((sum, item) => sum + item, 10)
console.log('init total is :', inittotal)

var reducers = {  
    totalInEuros : function(state, item) {
      return state.euros += item.price * 0.897424392;
    },
    totalInYen : function(state, item) {
      return state.yens += item.price * 113.852;
    }
  };
  
  var manageReducers = function(reducers) {
    return function(state, item) {
      return Object.keys(reducers).reduce(
        function(nextState, key) {
          reducers[key](state, item);
          return state;
        },
        {}
      );
    }
  };
  
  var bigTotalPriceReducer = manageReducers(reducers);
  var initialState = {euros:0, yens: 0};
  var items = [{price: 10}, {price: 120}, {price: 1000}];
  var totals = items.reduce(bigTotalPriceReducer, initialState);
  console.log(totals);