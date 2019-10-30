const soap = require('soap')

let url = 'http://ws.webxml.com.cn/WebServices/MobileCodeWS.asmx?wsdl'
let args = { mobileCode: '13052370040' }
let soaptest = function () {
    return new Promise(function(resolve,reject){
        soap.createClient(url, function (err, client) {
            if (err) {
                reject(err)
            }
            client.getMobileCodeInfo(args, function (err, result) {
                if(err){
                    reject(err)
                }
                //将返回结果封闭进消息对象
                console.log(JSON.stringify(result))
                console.log(result)
            })
        })
    })
}
soaptest()


let message = {
    pid: '',
    firstName: '',
    lastName: '',
    birthday: '',
    sex: '',
    visitNo: ''
}