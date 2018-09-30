var fs = require("fs");
var path = require("path");

var date = new Date()
var year = date.getFullYear()
var month = date.getMonth()
month = (month + 1) > 10 ? (month + 1).toString() : '0' + (month + 1)

//日志文件存放项目根目录下的logs文件夹
var dir = '/logs/' + year + '/' + year.toString() + month
//每天新建一个文件夹和一个txt文档，存放日志，避免单个文件夹内文件过多
//完整路径如：/logs/2018/201809/20180928.txt
var filename = year.toString() + month + date.getDate().toString() + '.txt'
var fullpath = dir + '/' + filename
var targetPath = path.join(__dirname, dir)
var targetFilePath = path.join(__dirname, fullpath)

function mkdirs(dirname, callback) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            callback()
        } else {
            // console.log(path.dirname(dirname));
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
                console.log('创建' + dirname + '路径');
            })
        }
    })
}

exports.writeLog = function (log) {
    fs.exists(targetFilePath, function (exists) {
        if (!exists) {
            mkdirs(targetPath, function () {
                fs.writeFile(targetFilePath, '\r\n' + log, function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
            })
            return
        }
        else {
            fs.appendFile(targetFilePath, '\r\n' + log, function (err) {
                if (err) {
                    console.log(err)
                }
            })
        }
    })
}


