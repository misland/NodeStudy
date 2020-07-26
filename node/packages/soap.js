/*
 * @Description: 
 * @Author: Loki Zhao
 * @Copyright: Loki Zhao
 * @Date: 2019-05-22 21:26:47
 * @LastEditors: Loki Zhao
 * @LastEditTime: 2019-12-02 16:21:54
 */
const soap = require('soap');

let url = 'http://localhost:8080/service/user?wsdl';
let args = { arg0: '411001' };
let soaptest = function() {
    return new Promise(function(resolve, reject) {
        soap.createClient(url, function(err, client) {
            if (err) {
                reject(err);
            }
            client.getUser(args, function(err, result) {
                if (err) {
                    reject(err);
                }
                //将返回结果封闭进消息对象
                resolve(result);
            });
        });
    });
}
soaptest()
    .then(function(result) {
        console.log('result is: ', result);
    })
    .catch(function(err) {
        console.log('error happened: ', err);
    });