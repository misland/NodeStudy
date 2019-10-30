//测试文件/文件夹锁package

const lock = require('lockfile');
const filelock = require('proper-lockfile');
const moment=require('moment');
const fs = require('fs');

//两个包的机制都差不多，比如要锁一个名为test的文件夹，那就以把这个文件夹路径作参数传入，在加锁时会在文件夹的同级目录下建一个名为test.lock
//的文件，通过检查这个文件的信息来判断文件夹是否处理锁定状态

//这个包不太好理解，比如要锁根目录下的test文件夹，要以'./test.lock'作为第一个参数，这样其实不太好理解
//lockfile
// lock.lock('./test/test.lock', {wait:100}, function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log('folder has been locked');
// });

// setTimeout(() => {
//     lock.unlock('.//test/test.lock', function (err) {
//         if (err) {
//             throw err;
//         }
//         console.log('folder has been freed');
//     })
// }, 5000);

// setInterval(() => {
//     lock.check('./test.lock', function (err, isLocked) {
//         if (err) {
//             throw err;
//         }
//         console.log('folder lock status:', isLocked);
//     })
// }, 1000);

// setTimeout(() => {
//     fs.stat('./test',function(err,status){
//         if(err){
//             throw err;
//         }
//         console.log(status.isDirectory());
//     })
// }, 2000);

//这个包在理解上更好理解一些，根据介绍其使用的机制也更合理，所以最终选择这个包
//proper-lockfile
let locked=filelock.checkSync('/home/loki/Desktop/540/build-SC540N1QT-Desktop-Release');
console.log('lock status before reading: ',locked);


filelock.lock('/home/loki/Desktop/540/build-SC540N1QT-Desktop-Release')
    .then(function () {
        console.log('folder has been locked');

        let readStream= fs.createReadStream('/home/loki/Desktop/540/build-SC540N1QT-Desktop-Release/record_1.mp4');
        let readBeginTime='';
        readStream.on('open',function(param){
            readBeginTime=new Date().getTime();
            console.log(readBeginTime);
            console.log('file opened ',param);
        });

        readStream.on('data',function(chunk){
            // console.log('chunk length is ',chunk.length);
        });

        readStream.on('end',function(){
            console.log('file read end');
        });

        readStream.on('close',function(){
            console.log('file read closed');
            console.log('time spended :',(new Date().getTime()-readBeginTime));
            
            //测试在程序出错时能及时收回锁
            //测试结果：可以
            // throw new Error('I mean this');

            filelock.unlock('/home/loki/Desktop/540/build-SC540N1QT-Desktop-Release');
        });
    })
    .catch(function (err) {
        throw err;
    });

setInterval(() => {
    filelock.check('/home/loki/Desktop/540/build-SC540N1QT-Desktop-Release')
        .then(function (isLocked) {
            console.log('folder status,locked:', isLocked);
        })
        .catch(function(err){
            throw err;
        });
}, 5000);