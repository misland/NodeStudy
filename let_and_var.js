
(function(){
    console.log('good good study')
})()

var a = []
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i)
    }
}
//输出10，因为用var声明的变量是全局的，所以每次循环后i的值就变了，有点类似于C#中的引用类型
//所以a中十个函数都是输出10
a[4]()

var b = []
for (let i = 0; i < 10; i++) {
    b[i] = function () {
        console.log(i)
    }
}
//输出8，因为用let声明的变量仅在块级作用域中有效
//上面i用let声明，那么i只在每次的循环中有效，每次循环i都是一个新的变量，所以方法中会保存i的状态
b[8]()

for (var i = 0; i < 3; i++) {
    var i = 'abc'
    //这里只会输出一次，因为下次循环时i已经是abc了，无法判断<3，无法继续循环
    console.log(i)
}

for(let i=0;i<3;i++){
    let i='def'
    //这个会输出三次def，因为for循环和循环内是两个不同的作用域，分别独立
    console.log(i)
}
//输出NaN，为什么是NaN呢，这个有点意思
console.log(i)

for(var m=0;m<3;m++){
    let m='jkl'
    //这样也可以输出三次，说明定义的变量为局部变量时不会与全局变量检查是否有重复
    console.log(m)
}
//输出3，本来想让i是局部，结果成了全局变量
console.log(m)

for(let k=0;k<3;k++){
    // var k='hij'
    //这样会报错，提示k已被声明，应该是因为用var定义是全局变量，编译器会检查是否有重复定义
    // console.log(k)
}

//输出undefined
console.log(varval)
var varval='123'

//报错，letval未定义
// console.log(vallet)
// let vallet='456'

console.log('test function')
function f(){
    console.log(' I am outside')
}

(function(){
    if(false){
        //使用let声明局部变量，只在if内部产效
        let f= function (){
            console.log('I am inside')
        }
    }
    //输出I am outside，块级作用域外部无法访问内部的变量
    f()
})()

console.log('test if module')
var zgh='comeon'
var hcp='beauty'
if(true){
    var hcp='thick'
    console.log(hcp)
    //用let声明后就成了块作用域变量，也就和外部隔绝了，但是好像只限于用let声明的，用var声明的依然不受影响
    let zgh='goon'
    console.log(zgh)
}
console.log(zgh)
console.log(hcp)
