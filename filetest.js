const log = require('./file');

var messageA = {
    PID: '001234',
    Name: '张三',
    Age: 23,
    Sex: 'M',
    Birthday: '19900923',
    VisitNum: '123456'
}

var messageB = {
    PID: '897654',
    Name: '李四',
    Age: 23,
    Sex: 'M',
    Birthday: '19901109',
    VisitNum: '897456'
}

// setInterval(function () {
//     log.writeLog(messageA);
// }, 500);

// setInterval(function () {
//     log.writeLog(messageB);
// }, 500);


let errorA = {
    PID: '009876',
    message: 'File not found error'
}

let errorB = {
    PID: '004567',
    message: 'Type convert error'
}

setInterval(function () {
    log.logError(errorA);
}, 500);

setInterval(function () {
    log.logError(errorB);
}, 500);

