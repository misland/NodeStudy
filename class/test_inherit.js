/*
 * @Description: test inherit
 * @Author: Loki Zhao
 * @Copyright: Loki Zhao
 * @Date: 2019-10-08 15:35:00
 * @LastEditors: Loki Zhao
 * @LastEditTime: 2019-10-08 15:55:47
 */
class Animal {
    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log('hello,this is ', this._name);
    }
}

class Kitty extends Animal {
    speak() {
        //如果子类没有构造函数，直接使用this就好
        console.log('hello,I\'m a cat and my name is ', this._name);
    }
}

class Doggie extends Animal {

    constructor(name) {
        //子类如果也有构造函数，在使用this前必须先调用super方法，否则会报错
        super();//ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this._name = name;
    }

    speak() {
        console.log('hello,I\'m a dog and my name is ', this._name);
    }
}

let cat = new Kitty('jiafei');
cat.speak();

let dog = new Doggie('erha');
dog.speak();

let Automobile = class {

    speak() {
        console.log('hello,I\'m ', this._name);
    }
}

class Geenly {

    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log('hello,I\'m a car from geenly and my name is ', this._name);
    }
}

//通过继续只能继续class声明的类，如果使用匿名方式声明的无法继续，只能通过setPrototypeOf设置
Object.setPrototypeOf(Geenly.prototype, Automobile);
let geenly = new Geenly('boyue');
geenly.speak();