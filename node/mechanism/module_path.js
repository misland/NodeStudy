const fs=require('fs');

console.log(module.paths);
console.log(__dirname);
console.log(__filename);
console.log(module.exports);
//输出三种结果：.js/.json/.node，也是node支持的三种扩展类型
console.log(require.extensions);
//可以看到具体的加载方法
console.log(require.extensions['.js'].toString());
//nodejs环境变量
console.log(process.env);