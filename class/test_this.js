/*
 * @Description: test this object
 * @Author: Loki Zhao
 * @Copyright: Loki Zhao
 * @Date: 2019-10-08 10:39:52
 * @LastEditors: Loki Zhao
 * @LastEditTime: 2019-10-08 15:49:21
 */
class Animal {

    constructor() {
        this._name = 'zgh';
        this.age = 29;
    }

    static walk() {
        console.log('this is :', this);
    }

    speak() {
        console.log('this is :', this);
    }
}

let am = new Animal();

//这里的this指向类本身，把自身的所有属性打印出来
am.speak();//this is : Animal { _name: 'zgh', age: 29 }

//静态方法this指向类声明
// Animal.walk();//打印整个类的声明

let ts_speak = am.speak;
//这里的this并不指向test_this.js本身，而是undefined
ts_speak();//this is : undefined

let ts_walk = Animal.walk;
//静态方法也是一样，并不会自动升级将this指向文件本身
ts_walk();//this is : undefined


function People() { }

People.prototype.speak = function () {
    console.log('this is :', this);
}

People.walk = function () {
    console.log('this is :', this);
}

let pp = new People();

let ts_func_speak = pp.speak;
//使用传统function定义，this会自动升级成全局对象
ts_func_speak();//global object

let ts_func_walk = People.walk;
//静态方法同样也会自动升级成全局对象
ts_func_walk();//global object