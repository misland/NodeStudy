
let obj={
    name:'zgh',
    sayHello:function(){
        console.log(this.name);
    }
};

obj.sayHello();
//object形式的，改了一个，另外的也会受影响
//且object是没有构造函数的，不能实例化
// obj1.name='nbb';
// obj1.sayHello();
obj.name='hcp';
obj.sayHello();