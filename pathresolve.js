const path=require('path');

console.log(path.resolve(__dirname,'dist'));
console.log(path.resolve(__dirname,'/dist'));
console.log(path.resolve(__dirname,'./dist'));
console.log(path.resolve(__dirname,'./dist/app.js'));
console.log(path.resolve('/dist'));
console.log(path.resolve(__dirname,'/dist','/src'));//输出\src
console.log(path.resolve(__dirname,'/dist','./src'));//输出\dist\src

//当resolve的参数中有任一个参数以/开头，就返回相对路径，当有多个参数都以/开头，以最后一个为准