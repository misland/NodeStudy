var param=[{name:'zgh',age:29},{name:'hcp',age:28}];
var result=[];
function test(){
    for(var item of param){
        result.push(function(){
            console.log(item);
        })
    }
    return result;
}

// test();

function show(item){
    console.log(item);
}

function factory(item){
    return function(){
        show(item);
    }
}

function test2(){
    for(var item of param){
        result.push(factory(item));
    }
}
// test2();

function test3(){
    for(var item of param){
        result.push((function(item){
            return function(){
                console.log(item);
            }
        })(item));
    }
}
test3();

for(var item of result){
    item();
}