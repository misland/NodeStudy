/*
 * @Description: Node http request
 * @Author: Loki Zhao
 * @Copyright: Loki Zhao
 * @Date: 2019-05-22 21:26:47
 * @LastEditors: Loki Zhao
 * @LastEditTime: 2019-10-09 10:59:53
 */
const http = require('http');
const net = require('net');

//发起http请求
let sendHttpRequest = function () {
    let req = http.request({
        hostname: '',
        port: 80,
        path: '/sample/api/values',
        method: 'GET'
    }, function (res) {
        console.log('statuscode =', res.statusCode);
        console.log('headers =', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('res body =', chunk);
        })
    })

    req.on('error', function (err) {
        console.log(err);
    })

    req.end();
}
// sendHttpRequest();

//发起tcp请求
let host = '';
let port = 1234;
let sendTcpRequest=function () {
    var client = new net.Socket()
    client.connect(port, host, function() {
        client.write('hello')
    });

    client.on('data', function(data) {
        //得到返回数据
        console.log('DATA is: ')
        console.log(data.toString('utf8'))
        // client.destroy()
    })

    client.on('end',function(){
        console.log('request end')
    })

    client.on('close', function() {
        console.log('Connection closed')
    })
}
sendTcpRequest()