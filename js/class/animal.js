/*
 * @Description: test class
 * @Author: Loki Zhao
 * @Copyright: Loki Zhao
 * @Date: 2019-10-08 10:12:09
 * @LastEditors: Loki Zhao
 * @LastEditTime: 2019-10-08 15:49:35
 */

 //会报错
 //ReferenceError: Animal is not defined
 //因为类声明不会提升，所以会报错
// let test=new Animal();
// test.name='hcp';
// test.sayHello();

 //类声明不会提升
class Animal {

    //会报错
    //SyntaxError: A class may only have one constructor
    //只能有一个构造函数，否则会报语法错误
    // constructor(){}

    //一个类最多有一个构造函数
    //可以没有
    constructor() {
        console.log('ctor');
        this._name = '';
    }

    //getter，与C#一样
    get name() {
        return this._name;
    }

    //setter，与C#一样
    set name(value) {
        this._name = value;
    }

    //实例方法，需要实例化后方可调用
    sayHello() {
        console.log(this._name);
    }

    static walk(){
        console.log('keep moving...');
    }
}

let am=new Animal();

//自动调用setter方法
am.name='zgh';

//调用类方法
am.sayHello();

//TypeError: am.walk is not a function
//静态方法不能用实例调用
// am.walk();

//只能通过类名直接调用
Animal.walk();