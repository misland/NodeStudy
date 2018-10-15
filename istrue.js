var obj = obj || {};
if (obj) {
    console.log(1);
}

if (obj.name) {
    console.log(2)
    console.log(obj.name);
}

obj.age = null
console.log('age is :' + obj.age)
if (obj.age) {
    console.log(3)
    console.log(obj.age)
}

obj.sex = undefined
if (obj.sex) {
    console.log(4)
}

var res = obj.age ? 'a' : 'b';
console.log(res)
