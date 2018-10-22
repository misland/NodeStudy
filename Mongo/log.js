const fs = require("fs")
const path = require("path")
const db=require('./model')

let root = path.join(__dirname, './logs')

function readDirSync(path) {
    let pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        if (ele !== 'pm2'){
            let info = fs.statSync(path + "/" + ele)
            if (info.isDirectory()) {
                console.log("dir: " + ele)

                // readDirSync(path + "/" + ele);
            } else {
                console.log("file: " + ele)
            }
        }
    })
}
readDirSync(root)
