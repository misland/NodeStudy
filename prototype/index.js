//原型链上的方法相当于实例方法，只能在具体的实例上运行
Array.prototype.print=function(arr){
    console.log(this);
    for(let item of arr){
        console.log(item);
    }
}

Array.prototype.sum=function(param){
    //this指向array本身元素
    return this.reduce(function(sum,item){
        return sum+item;
    })
}

//不能调用
// Array.print(arr);

//先实例化再调用
let arr=[1,2,3,4];
console.log(arr instanceof Array);
console.log(typeof(arr));
let test=new Array();
test.print(arr);

let abc=[1,2,3];
console.log(abc.sum());
