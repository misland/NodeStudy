function Dog(species) {
    //形成一个闭包，在方法内使用species后该变量会一直留在内存中
    return function () {
        console.log(species);
    }
}

let erha = new Dog('erha');
let chaichai = new Dog('chaichai');
// erha();//erha
// chaichai();//chaichai

function Cat(species){
    return {
        printName:function(){
            console.log(species);
        }
    }
}

let jumao=new Cat('ju');
jumao.printName();

let lanmao=new Cat('lan');
lanmao.printName();