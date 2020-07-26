const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');

function readDir(path, callback) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, dir) {
            if (err) {
                reject(err);
            }
            resolve(dir);
        });
    }).asCallback(callback);
}

// callback style
readDir(path.resolve('../test'), function(err, dir) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(dir);
});

// promise then style
// readDir(path.resolve('../test')).then((dir) => {
//     console.log(dir);
// }).catch((err) => {
//     console.error(err);
// });


// async/await style
// async function test() {
//     try {
//         let dir = await readDir(path.resolve('../test'));
//         console.log(dir);
//     } catch (err) {
//         console.error(err);
//     }
// }
// test();