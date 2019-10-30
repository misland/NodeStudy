
// reduce 方法 
//用于计算数组元素值的和，第二个参数作为初始值传入，
//第一个参数是计算逻辑函数，计算并返回值，接收两个参数，第一个是返回值，默认为0，第二个是数组元素，用于编写计算逻辑
let arrred = [1, 2, 3]
let total = arrred.reduce((sum, item) => sum + item * item)
console.log('total is :', total)
//第二个参数10,是设置初始值，相当于sum参数=10
let inittotal = arrred.reduce((sum, item) => sum + item, 10)
//上面的代码等价于下面这样写
//上一次计算的结果作为sum再次传给reduce方法
let inittotal2 = arrred.reduce(function (sum, item) {
    return sum + item;
}, 10)
console.log('init total is :', inittotal, inittotal2)

var reducers = {
    totalInEuros: function (state, item) {
        return state.euros += item.price * 0.897424392;
    },
    totalInYen: function (state, item) {
        return state.yens += item.price * 113.852;
    }
};

var manageReducers = function (reducers) {
    return function (state, item) {
        return Object.keys(reducers).reduce(
            function (nextState, key) {
                reducers[key](state, item);
                return state;
            },
            {}
        );
    }
};

var bigTotalPriceReducer = manageReducers(reducers);
var initialState = { euros: 0, yens: 0 };
var items = [{ price: 10 }, { price: 120 }, { price: 1000 }];
var totals = items.reduce(bigTotalPriceReducer, initialState);
  console.log(totals);