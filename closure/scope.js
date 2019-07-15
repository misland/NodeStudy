this.name = 'zgh';

var scope = {
    name: 'zjj',
    sayName: function (param) {
        console.log(this.name,param);
    },
    printThis:function(){
        console.log(this);
    }
}

//-------------------------变量提升-------------------------
//直接调用scope的方法，输出scope本身
scope.printThis();

//输出本文件的this { name: 'zgh' }
console.log(this);

//将scope中的方法赋给一个变量后，输出的是global，并不是本文件的this
//这里testPrint变量作用域提升了，且提升到了最高处，这是觉得奇怪的地方
var testPrint=scope.printThis;
testPrint();

//-------------------------call、apply、bind-------------------------
//call和apply的作用一样，修改方法的this指针，只是传递参数的形式不同
//需要注意的是，在call和apply执行后函数会随即执行
// scope.sayName.call(this,'clever');
// scope.sayName();

// scope.sayName.apply(this,['briliant']);
// scope.sayName();

//bind和call/apply差不多，也是修改函数this指针，不同的是bind是绑定后返回一个函数，不立即执行
// var scopeFunc=scope.sayName.bind(scope);
// scopeFunc('hello');//zjj

// var globalFunc=scope.sayName.bind(this);
// globalFunc('world');//zgh

