var obj=obj||{};
if(obj){
    console.log(1);
}

if(obj.name){
    console.log(2)
    console.log(obj.name);
}

obj.age=null
if(obj.age){
    console.log(3)
    console.log(obj.age)
}

var res=obj.age ? 'a':'b';
console.log(res)
