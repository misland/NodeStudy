let mySymbol = Symbol('test')
console.log('symbol is :', mySymbol)

let a = {}
a.name = 'fff'
Object.defineProperty(a, mySymbol, { value: 'hello' })
console.log('得到所有属性名，包括Symbol', Reflect.ownKeys(a))
console.log('after define property :', a[mySymbol])
console.log(a['mySymbol'])// undefined
console.log(a.mySymbol)// undefined

let obj = {
    toString() {
        return 'bye'
    }
}
let objSymbol = Symbol(obj)
// 用对象构造Symbol时会自动调用对象toString()方法
console.log('symbol constructor :', objSymbol)

// for就是为了复用设置的方法，用for声明一个寻找时就能根据名字寻找了
// 不会每次都新建一个
let sym1 = Symbol.for('test')
console.log('compare one :', sym1 === mySymbol)
let sym2 = Symbol.for('test')
console.log('compare two :', sym1 === sym2)

console.log('通过keyFor寻找',Symbol.keyFor(Symbol.for('test')))