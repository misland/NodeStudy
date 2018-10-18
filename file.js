const fs = require("fs");
const path = require("path");

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
month = (month + 1) > 9 ? (month + 1).toString() : '0' + (month + 1)

//日志文件存放项目根目录下的logs文件夹
let dir = './logs/' + year + '/' + year.toString() + month
//错误文件存放在errors文件夹下
let errorDir = './errors/' + year + '/' + year.toString() + month
//每天为日志和错误新建一个log文件，避免单个文件夹内文件过多
//完整路径如：/logs/2018/201809/20180928.log
let filename = year.toString() + month + date.getDate().toString() + '.log'
let fullpath = dir + '/' + filename
let targetPath = path.resolve(dir)
let errorTargetPath = path.resolve(errorDir)
let targetFilePath = path.resolve(fullpath)
//错误日志统一存放
let errorFilePath = path.resolve(errorDir + '/' + filename)
console.log(path.resolve(dir))
console.log(path.resolve(fullpath))
const log = {}

//异步递归创建文件夹
function mkdirs(dirname, callback) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            callback()
        } else {
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback)
                console.log('创建' + dirname + '文件夹')
            })
        }
    })
}

// 同步递归创建目录
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

log.logErrorAsync = function (err) {
    let nowDate = new Date()
    let dateStr = nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString()
    fs.exists(errorFilePath, function (exists) {
        if (!exists) {
            mkdirs(errorTargetPath, function () {
                let errors = []
                errors.push({
                    errorTime: dateStr,
                    pid: err.PID,
                    message: err.message
                })
                fs.writeFileSync(errorFilePath, JSON.stringify(errors), function (err) {
                    if (err) {
                        console.log('错误信息记录失败，失败原因：\r\n' + err)
                        return
                    }
                    console.log('错误信息写入成功')
                })
            })
            return
        }
        else {
            fs.readFileSync(errorTargetPath, function (err, data) {
                if (err) {
                    console.log('读取错误文件出错')
                    return
                }
                errors = JSON.parse(data)
                errors.push({
                    errorTime: dateStr,
                    pid: err.PID,
                    message: err.message
                })
                fs.writeFileSync(errorFilePath, JSON.stringify(errors), function (err) {
                    if (err) {
                        console.log('错误信息记录失败，失败原因：\r\n' + err)
                        return
                    }
                    console.log('错误信息写入成功')
                })
            })
        }
    })
}

log.writeLogAsync = function (message) {
    let nowDate = new Date()
    let dateStr = nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString()
    fs.exists(targetFilePath, function (exists) {
        if (!exists) {
            mkdirs(targetPath, function () {
                let patients = []
                patients.push({
                    searchTime: dateStr,
                    pid: message.PID,
                    name: message.Name,
                    age: message.Age,
                    sex: message.Sex,
                    birthday: message.Birthday,
                    visitNo: message.VisitNum
                })
                fs.writeFile(targetFilePath, JSON.stringify(patients), function (err) {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('写入成功')
                })
            })
            return
        }
        else {
            fs.readFile(targetFilePath, function (err, data) {
                if (err) {
                    console.log(err)
                    return
                }
                data = JSON.parse(data)
                console.log(data)
                data.push({
                    searchTime: dateStr,
                    pid: message.PID,
                    name: message.Name,
                    age: message.Age,
                    sex: message.Sex,
                    birthday: message.Birthday,
                    visitNo: message.VisitNum
                })
                fs.writeFile(targetFilePath, JSON.stringify(data), function (err) {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('写入成功')
                })
            })
        }
    })
}


log.logError = function (err) {
    var exists = fs.existsSync(errorFilePath)
    if (!exists) {
        mkdirsSync(errorTargetPath)
        let errors = []
        writeError(errors, err)
    }
    else {
        let data = fs.readFileSync(errorFilePath);
        data = JSON.parse(data)
        writeError(data, err)
    }
}

let writeError = function (errorArr, err) {
    let nowDate = new Date()
    let dateStr = nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString()
    errorArr.push({
        errorTime: dateStr,
        pid: err.PID,
        message: err.message
    })
    fs.writeFileSync(errorFilePath, JSON.stringify(errorArr))
}

log.writeLog = function (message) {
    let nowDate = new Date()
    let dateStr = nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString()
    let exists = fs.existsSync(targetFilePath)
    console.log(exists)
    if (!exists) {
        console.log(message.Name)
        mkdirsSync(targetPath)
        let patients = []
        writeMessage(patients, message)
    }
    else {
        let data = fs.readFileSync(targetFilePath)
        console.log(message.Name)
        data = JSON.parse(data)
        writeMessage(data, message)
    }
}

let writeMessage = function (dataArr, message) {
    let nowDate = new Date()
    let dateStr = nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString()
    dataArr.push({
        searchTime: dateStr,
        pid: message.PID,
        name: message.Name,
        age: message.Age,
        sex: message.Sex,
        birthday: message.Birthday,
        visitNo: message.VisitNum
    })
    fs.writeFileSync(targetFilePath, JSON.stringify(dataArr))
}

module.exports = log
