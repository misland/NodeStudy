function* gen() {
    console.log('hello');
    return 1;
}

var g = gen();
console.log(g.next());//{ value: 1, done: true }

console.log(g[Symbol.iterator]() === g);//true

var test=g[Symbol.iterator]();
//因为上面已经调用过next了，所以这里会返回undefined
console.log(test.next());//{ value: undefined, done: true }

function* dataConsumer(){
    console.log('started');
    console.log(`1 ${yield}`);
    console.log(`2 ${yield}`);
}

var instance=dataConsumer();
//只会输出started，因为yield没有任务，又暂停了console.log方法
console.log(instance.next());
//向next方法传递参数，参数会作为上一个yield的返回值
//这里传a，会当作17行yield返回值，之后继续执行console.log方法，输出1 a
console.log(instance.next('a'));
console.log(instance.next('b'));
