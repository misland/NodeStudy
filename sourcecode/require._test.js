//module.path是以当前目录为基础，逐级向上找node_modules文件夹，直到磁盘根目录
console.log(module.paths);
//module.loaded表示模块是否加载，在本文件执行时，该值永远为false，因为该值是暴露给外面用的
console.log(module.loaded);
//filename是本文件的绝对路径
console.log(module.filename);
//父模块，如果没有，为null，如果该文件被其它文件引用了，那引用该文件的文件就是这里的parent
console.log(module.parent);
//require方法定义
// console.log(module.require.toString());

//这里直接把module暴露给module.exports，在其它文件内引用该文件再去打印module.loaded，就会是true
module.exports=module;