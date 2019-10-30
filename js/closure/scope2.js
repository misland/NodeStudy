function test(){
    a=123;
    console.log(a);
    var a=200;
    console.log(a);
}
console.log(global.a);
test();