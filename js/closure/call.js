//call的作用是改变方法的this，看下面的例子
this.name='abc';
let obj={name:"def"};

let printName=function(){
    console.log(this.name);
}

printName();//会输出undefined，因为在printName方法内，this默认表示的是方法内部的作用域，没有定义name，自然是undefined
printName.call(this);//输出abc，因为在这里，this指的是根作用域，前面设置this.name=abc，所以用call调用printName执行时this是根作用域，输出abc
printName.call(obj);//同理，使用call把printName的this指向了obj


//利用call实现类继承
function person(){
    this.sayName=function(){
        return this.name;
    }
}

function chinese(name){
    //执行这个，把函数内部this传递进去，这样函数内部的this在person执行后就有了sayName方法，会打印函数内部的name
    person.call(this);
    this.name=name;
}

function american(name){
    person.call(this);
    this.name=name;
}

let ch=new chinese('kks');
console.log(ch.sayName());

let am=new american('fuck');
am.sayName();
