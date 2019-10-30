const path=require('path')
const fs=require('fs')

// 判断路径是文件还是文件夹
let modelPath = path.join(__dirname, 'model')
fs.readdirSync(modelPath).forEach(function (file) {
    // console.log(file)
    // stat接收一个路径作为参数，文件名不行
    fs.stat(modelPath+'/'+file,function (err, stat) {
        if(err){
            console.log(err)
        }
        console.log(stat.isDirectory())
    })
})
