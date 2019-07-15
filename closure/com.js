var param = [{ name: 'zgh', age: 29 }, { name: 'hcp', age: 28 }];
var result = [];
function test() {
    for (var item of param) {
        result.push(function () {
            console.log(item);
        })
    }
    return result;
}
// test();

function show(item) {
    console.log(item);
}

function factory(item) {
    return function () {
        show(item);
    }
}

function test2() {
    for (var item of param) {
        result.push(factory(item));
    }
}
// test2();

function test3() {
    for (var item of param) {
        //与test2一样效果
        //只是这里是通过自执行函数生成一个闭包，将item封装到内部存到内存中从而在执行完后不丢失
        //这样减少了代码量，但是降低了代码的可读性
        result.push((function (item) {
            return function () {
                console.log(item);
            }
        })(item));
    }
}
test3();

for (var item of result) {
    item();
}